import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import { useLocation } from "react-router-dom";

import './css/markdown.css';

function MarkdownPage() {

  const [markdownPage, setMarkdownPage] = useState("");

  // Get title from search params
  let title = new URLSearchParams(useLocation().search).get('title');
  // Default to home page
  if ( title == null ){
    title = "Home";
  }
  
  document.title = title;

  // title is used as name of markdown file
  let articleData;
  try {
    articleData = require("./markdown/" + title + ".md");
  } catch (err) {
    articleData = require("./markdown/ErrorPage.md");
  }

  useEffect( () => {
    fetch(articleData)
      .then(res => res.text())
      .then(response => setMarkdownPage(response))
      .catch(err => setMarkdownPage(err));
  });

  return (
    <div id="holder">
      <div className="topPadding"/>
      <div className="content">
        <ReactMarkdown>{markdownPage}</ReactMarkdown>
      </div>
    </div>
  );

}

export default MarkdownPage;