import React from "react"
    // ReferenceError: ReactDOM is not defined
    // import ReactDom from "react-dom"
    import ReactDOM from "react-dom/client";

    const root = ReactDOM.createRoot(document.getElementById("root"));

const Title = ()=>(
    <h1>Namaste React</h1>
);

//functional component
const HeadinComponent = ()=>(
    <div id="container">
        {/* importing component pura code uthke aa jaega */}
        {/* this is componnent composition because we are putting component inside component */}
        <Title/>  
        <h1 className="heading">Funcitonal component</h1>
    </div>
);

//to render functional component on a page
root.render(<HeadinComponent />)

const heading = React.createElement(
    "h1", 
    {id:"heading"}, 
    "hello world"
)

//like in vite we edit in main.jsx here we edit in indx . html