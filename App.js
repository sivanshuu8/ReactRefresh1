const heading = React.createElement("div", 
{id:'heading'}, 
    [React.createElement('h1', {id: 'head1'}, "Hey Man!"),
    React.createElement('h1', {id:'head2'}, "How's Life?")]
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);