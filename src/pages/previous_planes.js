import React, { useEffect, useState } from "react";
import Markdown from "markdown-to-jsx";

const postData = require("../markdown/previous_planes.md");

function Home() {
  document.title = "UF DBF - Previous Planes";

  const [post, setPost] = useState("");

  useEffect( () => {
    fetch(postData)
      .then(res => res.text())
      .then(response => setPost(response))
      .catch(err => setPost(err));
  });

  return (
    <div id="holder">
      <div className="content"></div>
      <div className="content">
        <div className="topPadding"/>
        <h1 className="title">Previous Planes</h1>

        <Markdown>{post}</Markdown>

      </div>
    </div>
  );
}

export default Home;