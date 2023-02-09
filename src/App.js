import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import LandingPage from "./LandingPage/Landing_Page";
import PostView from "./PostView/PostView";
import FormPage from "./Form/FormPage";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<LandingPage />} />
                <Route path='/PostView' element={<PostView />} />
                <Route path='/FormPage' element={<FormPage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;