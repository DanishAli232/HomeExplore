import reactDom from "react-dom";
import { BrowserRouter } from "react-router-dom";
// import App from "./app";
// import App1 from "./app1";
import App2 from "./app2";
import './index.css';


reactDom.render(
    
    <BrowserRouter>
    <App2/>
    </BrowserRouter>,
    document.getElementById('root')
);