// import styles from './JobCard.module.css';

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
    <div className={`flex-container ${featured && 'flex-container-featured'}`}>
      <div>
        <img src={logo} alt={company} />
      </div>
      <div>
        <h3>{company}</h3>
        {isNew && <span>New</span>}
        {featured && <span>Featured</span>}
        <h2>{position}</h2>
        <p>
          {postedAt} · {contract} · {location}
        </p>
      </div>
      <div>
        {keywords
          ? keywords.map((keyword) => (
              <span key={keyword} onClick={() => handleKeywordClick(keyword)}>
                {keyword}
              </span>
            ))
          : ''}
        {/* checks if there are any keywords in array and returns span */}
      </div>
    </div>
  );
};

export default JobCard;
