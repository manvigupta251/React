    import React from "react"
    // ReferenceError: ReactDOM is not defined
    // import ReactDom from "react-dom"
    import ReactDOM from "react-dom/client";

    //npx parcel build index.html -> Production Build now can be pushed-> in dist folder


    /*const heading = React.createElement("h1", {}, "hello world")
     //create h1 elemnt in react now put it in root where all react will run and we dom for that
    //create element takes 3 argument   //JSX is just a syntax which is html like ie it is a syntax extension to JavaScript.
    //JSX produces React “elements”. 
    By default, React DOM escapes any values embedded in JSX before rendering them. 
    Thus it ensures that you can never inject anything that’s not explicitly written in your application. 
    Everything is converted to a string before being rendered. This helps prevent XSS (cross-site-scripting) attacks.
    Babel compiles JSX down to React.createElement() calls.*/

    
    //package.json is configuration for npm. Bundlers help create code ready for production. DEV dependency used in development phase
    //package lock.json ->  versionss . Parcel needs help of lot more packages so node modules main npm ko kehke packages 
    //dependencies dalwae called transitive dependency. ECah dependency has its own dependency ie package.json file
    //git ignore file -> ab nodemodules 135 files no need to put on github so package jsons ke sath sb dalo .gitignore
    //agr nhi bhi dala uda toh yr package files has version do npm install firse wapas aa jaega
    //now after npx parcel index.html our server is created we are assigned port 1234 and url is of localhost

    //returns object not an actual tag yet
    //here in {} we give attributes style css
   
    //we need to tell react root where it can do all dom manipulation
    const root = ReactDOM.createRoot(document.getElementById("root"));

    //take object create a h1 tag that browser understands and keep it in the root
     root.render(heading);
   
    
    
    //now lets see nested div and we dont we write react like this now  NESTED HTML STRUCTURE INSIDE REACT THIS OBJECT IS  REACT ELEMENT
    const parent = React.createElement(   
        "div", 
        {id : "parent"},
        //ab nested ke lie andr kya aega agla child
        React.createElement(
            "div",
            {id : "child"},
            React.createElement(
                "h1",
                {},
                "i am student"
            )
        ) 
    );
    root.render(parent);

    //REACT IS WORKING ONLY INSIDE MY DIV  ROOT so jo replace hoga not append script ur dom read ke baad 
    //woh akshay ko replace karega bas because ie part of react ahar hello top ko bhi div main wrap kia tb 
    //ie why react is a library not frame work as it can work in a portion we inject react using cdn links and ready to use
    // <h1> hello top </h1>
    /* <div id="root">
        <h1> akshay </h1>
       </div>
       <h1> heloo bottom </h1>*/

    //NOW TO HAVE SIBLINGS we pass array of children
    const par = React.createElement(
        "div", 
        {id : "parent"},
        //ab nested ke lie andr kya aega agla child
        React.createElement(
            "div",
            {id : "child"}, [
                React.createElement("h1", {}, "hello world"),
                React.createElement("h2", {}, "hello world")
            ]
        ) 
    );
