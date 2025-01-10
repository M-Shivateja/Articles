import React from "react";

function ArticleCard({ article }) {
  return (
    <div className="border rounded-2xl shadow-lg flex flex-col items-start mt-5 gap-4 bg-white/80  mx-4  p-4 border hover:bg-terinary/60">
      <h1 className="font-bold text-2xl">{article.headline}</h1>
      <p className="text-important_text  text-md">{article.desc}</p>
      <div className="flex gap-3">
        <h3 className="text-gray-600">{article.label}</h3>
        <h3 className="text-sm text-gray-600">Date : {article.my}</h3>
      </div>

      <h3>By {article.author}</h3>
      <a
        href={`https://${article.preView}`}
        target="_blank"
        className="mt-2 px-4 py-1 rounded-full shadow-inner bg-secondary/90 hover:bg-secondary/80 text-white font-bold"
      >
        Visit Website
      </a>
    </div>
  );
}

export default ArticleCard;
