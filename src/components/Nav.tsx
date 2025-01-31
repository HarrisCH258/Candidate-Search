import { Link } from 'react-router-dom';

const Nav = () => {
  // TODO: Add necessary code to display the navigation bar and link between the pages
  return (
    <div className="nav" style={{wordSpacing: "1px", justifyContent:"space-evenly", width: "15%", display:"flex", flexWrap: "wrap"}}>
      <Link to ="/">Home</Link>
      <Link to ="/SavedCandidates">Potential Candidates</Link>
    </div>
  )
};

export default Nav;
