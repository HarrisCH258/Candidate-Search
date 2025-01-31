import Candidate from "../interfaces/Candidate.interface";
interface CandidateTableProps {
  candidates: Candidate[];
  onRemove: (candidate: Candidate) => void;
}
const List = ({ candidates, onRemove }: CandidateTableProps) => {
  return (
    <div style={{ padding: "20px", color: "white", minHeight: "100vh" }}>
      <table style={{ width: "100%", borderCollapse: "collapse", color: "white" }}>
        <thead>
          <tr>
            <th style={{ padding: "10px", border: "1px solid #333" }}>Image</th>
            <th style={{ padding: "10px", border: "1px solid #333" }}>Name</th>
            <th style={{ padding: "10px", border: "1px solid #333" }}>Location</th>
            <th style={{ padding: "10px", border: "1px solid #333" }}>Link</th>
            <th style={{ padding: "10px", border: "1px solid #333" }}>Company</th>
            <th style={{ padding: "10px", border: "1px solid #333" }}>Bio</th>
            <th style={{ padding: "10px", border: "1px solid #333" }}>Reject</th>
          </tr>
        </thead>
        <tbody>
          {candidates.map((candidate) => (
            <tr key={candidate.email} style={{ backgroundColor: "#151540", textAlign: "center" }}>
              <td style={{ padding: "10px", border: "1px solid #333" }}>
                <img
                  src={candidate.avatar}
                  alt={candidate.name}
                  style={{ width: "50px", height: "50px", borderRadius: "50%" }}
                />
              </td>
              <td style={{ padding: "10px", border: "1px solid #333" }}>
                {candidate.name} ({candidate.username})
              </td>
              <td style={{ padding: "10px", border: "1px solid #333" }}>{candidate.location}</td>
              <td style={{ padding: "10px", border: "1px solid #333" }}><a href={candidate.html_url} target="_blank" rel="noopener noreferrer">{candidate.html_url}</a></td>
              <td style={{ padding: "10px", border: "1px solid #333" }}>{candidate.company}</td>
              <td style={{ padding: "10px", border: "1px solid #333" }}>{candidate.bio}</td>
              <td style={{ padding: "10px", border: "1px solid #333" }}>
                <button
                  style={{
                    backgroundColor: "red",
                    color: "white",
                    border: "none",
                    borderRadius: "50%",
                    width: "30px",
                    height: "30px",
                    fontSize: "16px",
                    cursor: "pointer",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center"
                  }}
                  onClick={() => onRemove(candidate)}
                >
                  -
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default List;






