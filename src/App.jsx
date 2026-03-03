import { Routes, Route } from "react-router-dom";
import Navbar from "./web/components/Navbar";
import SearchPage from "./web/pages/SearchPage";
import StoryDetailPage from "./web/pages/StoryDetailPage";

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<SearchPage />} />
        <Route path="/story/:id" element={<StoryDetailPage />} />
      </Routes>
    </>
  );
}
