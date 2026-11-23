// task is to generate this with the help of React

{/* <div id="parent">
    <div id="child">
        <div>
            <h1>Chalo at least u came till this point</h1>
        </div>
    </div>
</div> */}

const parent=React.createElement("div",{id:"parent"}, React.createElement("div",{id:"child"},React.createElement("h1",{},"Chalo at least u came till this point")));

console.log(parent);
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);

// React.createElement is not creating a html thing, it is just creating an object
// Render part is converting it into an HTML Tag 



// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// task is to generate this with the help of React

{/* <div id="parent">
    <div id="child">
        <div>
            <h1>I am an h1 tag</h1>
            <h2>I am an h2 tag</h2>
        </div>
    </div>
</div> */}


const parent2=React.createElement("div",{id:"parent"}, React.createElement("div",{id:"child"},[React.createElement("h1",{},"I am a H1 tag"),React.createElement("h2",{},"I am an H2 Tag")]));

console.log(parent2);
root.render(parent2)