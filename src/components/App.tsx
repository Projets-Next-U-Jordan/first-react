import { BrowserRouter, Routes, Route } from "react-router-dom";
import Users from "./pages/Users";
import Blog from "./pages/Blog";
import Header from "./common/Header";

export default function App() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Blog />} />
                <Route path="/users" element={<Users />} />
            </Routes>
        </BrowserRouter>
    );
}
