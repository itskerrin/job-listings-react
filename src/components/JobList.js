import JobCard from './JobCard.js';
import { data } from '../data.json';

const JobList = () => {
  return (
    <div>
      {data.map((jobs) => {
        return <JobCard key={jobs.id} {...jobs} />;
      })}
    </div>
  );
};

export default JobList;

// job list:
// job list starting state will be an empty arr, populated by mapped cards
// return a mapped card component with key=id, second param props

// jobcard:
// params destrcutured props
// return styled card

// STATE
// state will manage the displayed jobs based on the filter selected.
// filter through and display each data set with matching keywords
