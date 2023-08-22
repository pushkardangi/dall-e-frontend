import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

import { logo } from "./assets";
import { Home, CreatePost } from "./pages";

const App = () => {
  return (
    <BrowserRouter>

    {/* header */}
      <header className="w-full flex justify-between items-center bg-white px-4 sm:px-8 py-4 border-b border-b-[#e6ebf4]">

        <Link to="/">
          <img src={logo} alt="OpenAI logo" className="w-28 object-contain"/>
        </Link>

        <Link to="/create-post" className="font-inter font-medium bg-[#6469ff] text-white px-4 py-2 rounded-md">
          Create
        </Link>
      </header>

      {/* main */}
      <main className="px-4 sm:px-8 py-8 w-full bg-[#f9fafe] min-h-[calc(100vh-73px)]">

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create-post" element={<CreatePost/>}/>
        </Routes>

      </main>

    </BrowserRouter>
  );
};

export default App;