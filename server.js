//var fs = require('fs');
//var request = require('request');
//var data = fs.readFileSync('data.json');
const Joi = require('joi');
const express = require('express');
const http = require('http');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

const data = [
	{id: 1000000000, name: 'Calvin',   phone: '423-0234'},
	{id: 1000000001, name: 'Gerald',   phone: '423-1235'},
	{id: 1000000002, name: 'Isaac',    phone:'423-1236'},
	{id: 1000000003, name: 'Sarah',    phone:'423-1237'},
	{id: 1000000004, name: 'Heather',  phone:'423-1238'},
	{id: 1000000005, name: 'John',     phone:'423-1239'},
	{id: 1000000006, name: 'Simon',    phone:'423-1240'},
	{id: 1000000007, name: 'Molly',    phone:'423-1241'},
	{id: 1000000008, name: 'Sally',    phone:'423-1242'}
];


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req, res) => {
	res.send('PORT 3000');
})

app.get('/data', (req, res) => {
	res.send(data);
});

app.get('/data/:id', (req,res) => {
	const datId = data.find(c => c.id === parseInt(req.params.id));
	if (!datId) res.status(404).send('ID not Found');
	res.send(datId);
});


app.post('/data', (req,res) => {

	const schema = {
		name: Joi.string().min(3).required()
	};
	const result = Joi.validate(req.body,schema);


	if (!req.body.name || req.body.name.length < 3 ){
		res.status(400).send('Name too short.')
		return;
	}
	//for every new addition, generate a 10 digit id/key
	const datId = {
		id: data.length + 1000000000,
		name: req.body.name
	};
	data.push(datId);
	res.send(datId);
});

console.log('Server is Starting....')


app.listen(port, () => console.log(`Listening on port ${port}`));


//app.use(express.static('website'));
