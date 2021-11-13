import '../index.css';

const JobCard = ({
  company,
  position,
  postedAt,
  location,
  logo,
  contract,
  languages,
  tools,
  featured,
  isNew,
  role,
  level,
  handleKeywordClick,
}) => {
  const keywords = [...languages, ...tools, role, level];

  return (
    <div className={featured ? 'flex-container featured' : 'flex-container'}>
      <div>
        <img src={logo} alt={company} className="company-img" />
      </div>
      <div>
        <div>
          <span className="company">{company}</span>
          {isNew && <button className="new new-featured">New!</button>}
          {featured && (
            <button className="featured-job new-featured">Featured</button>
          )}
        </div>
        <p className="position">{position}</p>
        <p className="details">
          {postedAt} • {contract} • {location}
        </p>
      </div>
      <hr className="divider"></hr>
      <div className="keywords">
        {keywords
          ? keywords.map((keyword) => (
              <button
                className="keyword-btn"
                key={keyword}
                onClick={() => handleKeywordClick(keyword)}
              >
                {keyword}
              </button>
            ))
          : ''}
        {/* checks if there are any keywords in array and returns span */}
      </div>
    </div>
  );
};

export default JobCard;
