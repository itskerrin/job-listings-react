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
}) => {
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
        <span>{role}</span>
        <span>{level}</span>
        {languages ? languages.map((l) => <span>{l}</span>) : ''}
        {/* checks if there are any in array and returns span */}
        {tools ? tools.map((t) => <span>{t}</span>) : ''}
      </div>
    </div>
  );
};

export default JobCard;
