Q: 1. What is the difference between Component and PureComponent? give an
example where it might break my app.
ANS 1) Component renders everytime the parennt renders, while pure component won't render 



Q:The function to filter the data should be asynchronous. You can use mock data
(such as a JSON array), but the function which uses it should be asynchronous
(similar to a real REST call).
ANS 2.) ----



Q:3. Describe 3 ways to pass information from a component to its PARENT
ANS 3.) By passing information amoung siblings | By passing information from parent to child using props | callback 



Q: 4. Give 2 ways to prevent components from re-rendering.
ANS 4.) For class component: shouldComponentUpdate method 


Q: 5. What is a fragment and why do we need it? Give an example where it might
break my app.
ANS 5.) Fragments let you con-join a list of children


Q:6. Give 3 examples of the HOC pattern.
ANS 6.) ---



Q:7. what's the difference in handling exceptions in promises, callbacks and
async...await.
ANS 7.) Callbacks is passed into a function, getting the result from the function



Q:8. How many arguments does setState take and why is it async.
ANS 8.) Two arguments 


Q: 9. List the steps needed to migrate a Class to Function Component.
ANS 9.) i. Change class to function 
	ii. Remove render 
	iii. Remove constructor 
	iv Covert setState to useState 
	v. Convert conponetDidMount to UseEffect 
;


Q: 10. List a few ways styles can be used with components.
ANS 10.)i. inLine Syle style={{margin: 0}}
	    ii. Stylesheet  
	    		import "./styles.css"; 
			    <input
		          className="input"
		          type= "text"
		          value = {input}
		          onChange={e => onChangeInput(e)}
		          />
		        </div>


Q11: How to render an HTML string coming from the server
ANS 10.) ----
