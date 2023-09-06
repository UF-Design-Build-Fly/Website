import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";

const postData = require("../markdown/PreviousPlanes.md");

function MarkdownPage() {

  document.title = "n/a";

  const [mdPage, setPost] = useState("");

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
        <ReactMarkdown>{mdPage}</ReactMarkdown>
      </div>
    </div>
  );

}

export default MarkdownPage;