import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header.jsx";
import Body from "./components/Body.js";


// const heading = React.createElement("div", 
// {id:'heading'}, 
//     [React.createElement('h1', {id: 'head1'}, "Hey Man!"),
//     React.createElement('h1', {id:'head2'}, "How's Life?")]
// );
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

// const Title = () => (
//     <div>
//         <h1>Example 1</h1>
//     </div>
// );

// const Header = () => (
//     <div>
//         <Title />
//         <h3>Header</h3>
//     </div>
// );


// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Header />);

// const Header = () => {
//     return(
//         <div className="header">
//             <div className="logo-container">
//                 <img className="header-logo" src="https://tse4.mm.bing.net/th?id=OIP.ueHppfRf52CDn841Rpj8IwHaHa&pid=Api&P=0&h=220" alt="Company logo" />
//             </div>
//             <div className="nav-container">
//                 <ul>
//                     <li>Home</li>
//                     <li>About</li>
//                     <li>Contant</li>
//                     <li>Yo</li>
//                 </ul>
//             </div>
//         </div>
//     )
// }


const TheFoodCompany = () => (
    <div>
        <Header />
        <Body />
    </div>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<TheFoodCompany />);