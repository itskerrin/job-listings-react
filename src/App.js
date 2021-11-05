import JobList from './components/JobList';
import './index.css';

function App() {
  return (
    <div className="App">
      <header className="desktop-bg">
        <img src="/images/bg-header-desktop.svg" alt="desktop-bg" />
      </header>
      {/* {window.innerWidth < 375 ? <HeaderMobile /> : <HeaderDesktop />} */}
      <JobList />
    </div>
  );
}

export default App;
