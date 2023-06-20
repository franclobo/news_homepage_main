import React from "react";
import Article from "./article";
import Sidebar from "./sidebar";

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
    </main>
  );
}

export default Home;
