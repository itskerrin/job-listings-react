import { useState, useEffect } from 'react';
import JobCard from './components/JobCard';
import { data } from './data.json';
import './index.css';

function App() {
  const [jobs, setJobs] = useState([]);
  const [filters, setFilters] = useState([]);

  useEffect(() => {
    setJobs(data);
  }, []);

  const filterByKeyword = ({ role, level, tools, languages }) => {
    if (filters.length === 0) {
      return true; // if no keywords clicked, display all jobs
    }
    const keywords = [role, level, ...tools, ...languages];
    return keywords.some((keyword) => filters.includes(keyword));
  };

  const filteredJobs = jobs.filter(filterByKeyword);

  // Event Handlers
  const handleKeywordClick = (keyword) => {
    if (filters.includes(keyword)) return;
    setFilters([...filters, keyword]);
  };

  const handleRemoveFilter = (filter) => {
    setFilters(filters.filter((f) => f !== filter));
  };

  const clearAllFilters = () => {
    setFilters([]);
  };

  return (
    <div className="App">
      {/* Header */}
      <header className="header-img">
        <img
          src="/images/bg-header-desktop.svg"
          alt="Desktop Header"
          className="desktop-header"
        />
        <img
          src="/images/bg-header-mobile.svg"
          alt="Desktop Header"
          className="mobile-header"
        />
      </header>
      {/* Filters */}
      {filters.length > 0 && (
        <div className="filter-container">
          <div className="all-filters">
            {filters.map((filter) => (
              <>
                {/* Display filter */}
                <button
                  className="filter-btn"
                  onClick={() => handleRemoveFilter(filter)}
                >
                  {filter}
                </button>
              </>
            ))}
          </div>
          {/* Clear */}
          <button onClick={clearAllFilters} className="clear-btn">
            Clear
          </button>
        </div>
      )}
      {/* Display job listings */}
      <div className="listings">
        {filteredJobs.map((job) => {
          return (
            <JobCard
              key={job.id}
              {...job}
              handleKeywordClick={handleKeywordClick}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
