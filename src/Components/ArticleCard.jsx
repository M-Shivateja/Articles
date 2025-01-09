import React from "react";

function ArticleCard({ article }) {
  return (
    <div className="flex flex-col items-start mt-5 gap-4  border-primary mx-4 shadow-inner rounded-2xl p-4 border hover:bg-terinary/40">
      <h2 className="font-bold text-lg">{article.headline}</h2>
      <h3 className="text-gray-600">{article.label}</h3>
      <p className="text-gray-700 text-sm">{article.desc}</p>
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
