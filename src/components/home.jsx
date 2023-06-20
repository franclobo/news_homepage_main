import React from "react";
import Article from "./article";
import Sidebar from "./sidebar";
import Popular from "./popular";

function Home() {
  return (
    <main>
      <div className="middle row">
        <div className="col-md-8">
          <Article />
        </div>
        <div className="col-md-4">
          <Sidebar />
        </div>
      </div>
      <Popular />
      <div class="attribution">
        Challenge by{" "}
        <a
          href="https://www.frontendmentor.io?ref=challenge"
          target="_blank"
          rel="noreferrer"
        >
          Frontend Mentor
        </a>
        . Coded by{" "}
        <a href="https://github.com/franclobo" target="_blank" rel="noreferrer">
          Francisco Borja
        </a>
        .
      </div>
    </main>
  );
}

export default Home;
