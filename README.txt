Front End Granify Application Project
By: Calvin Hoy		Oct 16, 2018

Main Frameworks/Environments/etc. used:
	Node.js		
	React.js
	Jest
	Express

Key Files:
	README.txt		server.js		index.html		styles.css
	manifest.json		package.json		index.js		App.test.js
	app.js			navPanel.js		addDisplay.js		displayWindow.js
	ratioDisplay.js		addButton.js		deleteButton.js		displayButton.js
	rowButton.js

Part 1: 
1) To start a local server, run "npm start" from the command line (cmd). http://localhost:3000

	You can also run "node server.js" if you wish to use Express API functionality,
	albeit unfinished (there is still code and commented functionality in the server.js file).

2) If run by "npm start" you should be able to see 3 add, delete, display buttons. Click
	them for an overlay to pop up. These will then be hooked up to the database to do their
	actions.

	Add psuedocode: Enter fields, click submit, take fields data, check for (symbols, digits in name), tell database to accept and add.
				id is database.length() + 1000000000. This will generate a unique 10 digit id for every addition.

	Delete psuedo: Enter fields, click submit, take fields data, check for (same id, same name, and same phone), tell database to accept and delete.

	Display pseudo: Enter fields, click submit, take fields data, check for (same name, or same phone), tell database to accept and
				display it to a row within the display window.

3) Below the three buttons, there is a window which will be hooked to the database to display
	database elements.


4) As items are added to the database, the add/hour line below the display window will display this change.
	The logic behind this will be the API will call a simple "addCounter+1" function every time
	the add button is clicked. Similarily, the ratio line below the add/hour line will have a fractional
	output string tat is nothing more than "add counter" + "/" + "delete counter", where the delete counter's
	logic will be exactly the same as the add; every time delete gets clicked, a "deleteCounter+1" function happens.

5) To run test cases, run "npm test" from the cmd. Test cases to be added as API develops.
	Test Cases are located in "App.test.js".
	

To exit out of any of these options, press the key combo "ctrl c" on the cmd, then type "y".



PART 2 QUESTIONS:

1. Why did you use the design/framework (if any) you chose?

	I chose React.js because it is the framework I am most familiar and comfortable with.
On top of that, most of the project specifications (such as responsive overlays, being 
a single-page web app, and not needing to refresh the page) are what React.js was designed 
to tackle. I could have easily chosen vanilla Javascript, but I decided to forgo that route, as
I thought that in terms of performance and readability, React beats vanilla JS in most aspects.


2. Are there better frameworks for this task which you did not choose for some reason (e.g. example you are not familiar with them and did not have time to learn them)?
	
	Arguably, Angular.js would have been a better fit, while like React, it was designed for
these types of apps in mind. But, unlike React, Angular has also been around a little longer, and
I would also expect it to have a more robust documentation online to search over. I,
however, have little experience with Angular, and given the time constraint,
I would have spent more time learning it than actually developing the page. That being said, I
believe that either Angular or React would be the best choice for this kind (single page, data management)
of app, and in the end, the choice comes down to preference.


3. When you added testing, why did you select those particular tests?

	For testing, I chose to use Jest for testing. I chose Jest as it seemed to have
the quickest hookup time while still providing strong testing. On top of that, it is what
Facebook (React devs) use to test their code, so I shouldn't run into any problems in terms
of hooking up the tests. When testing, I have 3 overarching methodologies for writing tests.
They are: functionality, expected outcomes, and semantics. 

For functionality, I wanted to make sure my functions had intended output in both value 
and return type.
Ex: A function like getName() would only return a name as a String.

For expected outcomes, I wanted to make sure my functions had outcomes that made sense.
Ex: Adding a record should produce a record with a unique key. If it adds a record with
different data, but the same key, the check has failed.

For semantics, I wanted to make sure I handled any inputs that shouldn't have been entered
to begin with. Most of these are user-error problems.
Ex: Any user-inputted words with special symbols (like characters from a different language,
i.e Chinese) or names with digits in them should be automatically flagged by the front end,
 and told to the user. However, sometimes special characters are allowed, (like oomlauts)
and should be handled in those cases. However, for the purpose of this project, I'm going to
assume all characters not in the alphabet or digits from 0-9 are invalid symbols. Or a name
will definitely be longer than   or at least 3 characters.
 

4. How can the API calls be made secure so that not anyone with the API can call them?

	There are multiple ways an API can be called by an unauthorized user. Such methods are injection,
false certificates, simply viewing source code (if the devs didn't attempt to hide it through 
obfuscation or privating), which are just to name a few. To begin with, all users access should be
denied access until explicitly allowed. Those that do have access, should only be given the tools they need
- no more. For an app like this, I assume not all clients would be allowed to access these records,
and most would be required to login to use the page in the first place. To protect against injection,
all user inputs should be assumed invalid until proven otherwise. On the server side, user inputs should
be verified, with the usage of prepared statements, and most symbols should be prohibited from being
 entered (i.e $, #, (), etc). In other words, input should be cleared with validation and sanitation.


5. Explain how bad input should be handled on the back end if it gets past the front end checks.

	Bad input can be verified with prepared check statements, such as making sure their data actually
makes sense. If it was an email address, backend would check if "fake@fakeaddress.com" is real or not. Or
another example, would be to deal with injections by means of using prepared statements, which handles the
user input as a parameter (that gets tested with a function), that gets converted to the database values
(most likely a string), before actually getting put into the database.


6. Which JavaScript best practices do you find valuable and adhere to?

	The more my syntax and coding style varies throughout an application, the more other programmers, or even myself, could end up
getting confused as the code grows. On top of that the amount of time needed to take debugging would increase, bleeding into my time,
and the company's resources. In that regard, JS to me is similar to most other coding languages, in that they should follow a standard
convention and ruleset. Commenting code with meaningful info, naming variables or functions with their intended purpose, avoiding
global variables, minimizing nested loops, and modularizing functions for only one purpose as to increase readability and reusability
are all good practices that I adhere to. However, when it comes specifically to JS, I think the rule that I find the most helpful
comes with its various shortcut capabilities. There's a fine line when it comes to using shortcuts, as while it may increase type
speed, it could indirectly cause errors in logic or hinder readability. Therefore, I personally use shortcuts when there's close to no
way for me to misconstrue the intended purpose of the code. For example, simple 4-6 lines ifelse-statements with simple return values
I could easily turn into 1 line statements using the question mark and colon notation. Another one thats easy to follow, is to
put all require calls at the top of a JS file, so you can see all dependencies clearly and immediately. Also, as JS reads top-down,
this practice makes using dependencies more reliable by relaxing the mental window of when exactly a dependency will be called by the program.
