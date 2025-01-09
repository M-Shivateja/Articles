import React, { useState, useEffect } from "react";
import ArticleCard from "../Components/ArticleCard";
import Pagination from "../Components/Pagination";
import Header from "./Header";

function Main() {
  const [articles, setArticles] = useState([]);
  const [sortedArticles, setSortedArticles] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setArticles(data);
        setSortedArticles(data);
      } catch (err) {
        console.error(err.message);
      }
    };

    fetchArticles();
  }, []);

  const getPaginatedData = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return sortedArticles.slice(startIndex, endIndex);
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleSort = (order) => {
    const sorted = [...articles].sort((a, b) => {
      if (order === "asc") {
        return a.title.localeCompare(b.title);
      } else if (order === "desc") {
        return b.title.localeCompare(a.title);
      } else if (order === "idAsc") {
        return a.id - b.id;
      } else if (order === "idDesc") {
        return b.id - a.id;
      }
      return 0;
    });
    setSortedArticles(sorted);
    setCurrentPage(1);
  };

  return (
    <>
      <Header onSort={handleSort} />

      <div className="md:mx-40 grid gap-4 grid-cols-[repeat(auto-fill,_minmax(250px,_2fr))]">
        {getPaginatedData().map((article) => (
          <ArticleCard
            key={article.id}
            article={{
              headline: article.title,
              label: `ID: ${article.id}`,
              desc: article.body,
              preView: article.website || "https://example.com",
            }}
          />
        ))}
      </div>

      <Pagination
        totalItems={sortedArticles.length}
        itemsPerPage={itemsPerPage}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    </>
  );
}

export default Main;
