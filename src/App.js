import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Posts from "./posts/Post";
import PostDetail from "./component/PostDetail";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Posts />} />
        <Route path="/post/:id" element={<PostDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
