import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";

import '../css/post.css';

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
      <div className="topPadding"/>
      <div className="content">
        <ReactMarkdown>{post}</ReactMarkdown>
      </div>
    </div>
  );
}

export default Home;