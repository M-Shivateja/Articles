import React, { useState, useEffect } from "react";
import ArticleCard from "../Components/ArticleCard";
import Pagination from "../Components/Pagination";
import NavBar from "./NavBar";
import { fetchAllData } from "../../Api/Api";

function Main() {
  const [articles, setArticles] = useState([]);
  const [filterOpen, setFilterOpen] = useState(false);
  const [sortedArticles, setSortedArticles] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [search, setSearch] = useState("");
  const itemsPerPage = 6;

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const data = await fetchAllData();
        setArticles(data);
        setSortedArticles(data);
      } catch (err) {
        console.error(err.message);
      }
    };

    fetchArticles();
  }, []);

  const searchArticles = (
    sortedArticles.length > 0 ? sortedArticles : articles
  ).filter((article) => {
    const keywords = article.keywords || [];
    return keywords.some((keyword) =>
      keyword.toLowerCase().includes(search.toLowerCase())
    );
  });

  const getPaginatedData = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return searchArticles.slice(startIndex, endIndex);
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleSort = (order) => {
    const sorted = [...articles].sort((a, b) => {
      if (order === "latest") {
        return new Date(b.date_published) - new Date(a.date_published);
      } else if (order === "Old") {
        return new Date(a.date_published) - new Date(b.date_published);
      } else if (order === "idAsc") {
        return a.citations - b.citations;
      } else if (order === "idDesc") {
        return b.citations - a.citations;
      }
      return 0;
    });
    setSortedArticles(sorted);
    setCurrentPage(1);
  };

  const handleSearch = (query) => {
    setSearch(query);
    setCurrentPage(1);
  };

  return (
    <>
      <NavBar onSearch={handleSearch} searchValue={search} />

      <header className="sticky top-12 bg-white/10 backdrop-blur-sm">
        <div className="flex justify-center items-center py-6 gap-4 w-full mb-2 sm:mb-0 ">
          <input
            type="text"
            placeholder="Search..."
            className="sm:w-96 px-4 py-1 rounded-full border border-primary/30 bg-gray-100 text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/50"
            value={search}
            onChange={(e) => handleSearch(e.target.value)}
          />
          <div>
            <button
              className="text-white px-6 py-1 bg-secondary font-bold duration-200 rounded-full hover:bg-terinary hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary/50"
              onClick={() => setFilterOpen(!filterOpen)}
            >
              Filter
            </button>
            {filterOpen && (
              <div className="absolute border mt-1 sm:mt-2 w-20  sm:w-48   font-bold text-sm sm:text-xl bg-highlight_background rounded-md shadow-lg overflow-hidden z-20">
                <ul>
                  <li
                    className="px-2 py-2 hover:bg-gray-500 text-center cursor-pointer"
                    onClick={() => handleSort("latest")}
                  >
                    Latest
                  </li>
                  <li
                    className="px-2 py-2 hover:bg-gray-500 text-center cursor-pointer"
                    onClick={() => handleSort("old")}
                  >
                    Old
                  </li>
                  <li
                    className="px-2 py-2 hover:bg-gray-500 text-center cursor-pointer"
                    onClick={() => handleSort("idAsc")}
                  >
                    Citations S to L
                  </li>
                  <li
                    className="px-2 py-2 hover:bg-gray-500 text-center cursor-pointer"
                    onClick={() => handleSort("idDesc")}
                  >
                    Citations L to S
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </header>

      <div className="md:mx-40 mt-0 sm:mt-6 grid gap-4 grid-cols-[repeat(auto-fill,_minmax(300px,_1fr))]">
        {getPaginatedData().map((article) => (
          <ArticleCard
            key={article._id}
            article={{
              headline: article.title,
              label: `citations : ${article.citations}`,
              my: article.date_published,
              desc: article.subtitle,
              author: article.author,
              preView: article.website || "https://example.com",
            }}
          />
        ))}
      </div>

      <Pagination
        totalItems={searchArticles.length}
        itemsPerPage={itemsPerPage}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    </>
  );
}

export default Main;
