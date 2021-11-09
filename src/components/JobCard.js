import styles from './JobCard.module.css';

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
    <div
      className={
        featured
          ? `${styles.flexContainer} ${styles.featured}`
          : `${styles.flexContainer}`
      }
    >
      <div>
        <img src={logo} alt={company} className={styles.companyImg} />
      </div>
      <div>
        <div>
          <span className={styles.company}>{company}</span>
          {isNew && (
            <button className={`${styles.new} ${styles.newFeatured}`}>
              New!
            </button>
          )}
          {featured && (
            <button className={`${styles.featuredJob} ${styles.newFeatured}`}>
              Featured
            </button>
          )}
        </div>
        <h3 className={styles.position}>{position}</h3>
        <p className={styles.details}>
          {postedAt} • {contract} • {location}
        </p>
      </div>
      <hr className={styles.divider}></hr>
      <div className={styles.keywords}>
        {keywords
          ? keywords.map((keyword) => (
              <button
                className={styles.keywordBtn}
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
