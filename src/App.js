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
      {/* Headers */}
      <header className="header-desktop">
        <img src="/images/bg-header-desktop.svg" alt="Desktop Header" />
      </header>
      <header className="header-mobile">
        <img src="/images/bg-header-mobile.svg" alt="Mobile Header" />
      </header>
      {/* Filters */}
      {filters.length > 0 && (
        <div>
          {filters.map((filter) => (
            <span onClick={() => handleRemoveFilter(filter)}>{filter}</span>
          ))}
          {/* Clear */}
          <button onClick={clearAllFilters}>Clear</button>
        </div>
      )}
      {/* Display job listings */}
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
  );
}

export default App;
