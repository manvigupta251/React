    //const heading = React.createElement("h1", {}, "hello world")
     //create h1 elemnt in react now put it in root where all react will run and we dom for that
    //create element takes 3 argument

    const heading = React.createElement(
        "h1", 
        {id:"heading"}, 
        "hello world"
    )

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
                "i am a h1 tag"
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
