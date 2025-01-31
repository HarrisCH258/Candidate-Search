import { useEffect, useState } from "react";
import Candidate from "../interfaces/Candidate.interface";
import List from "../components/list";

const SavedCandidates = () => {
  const [savedCandidates, setSavedCandidates] = useState<Candidate[]>([]);

  useEffect(() => {
    const savedCandidates = localStorage.getItem("potentialCandidates");
    if (savedCandidates) {
      setSavedCandidates(JSON.parse(savedCandidates));
    }
  }, []);

  const handleRemove = (candidate: Candidate) => {
    const updateCandidates = savedCandidates.filter((c) => c.id !== candidate.id);
    setSavedCandidates(updateCandidates);
    localStorage.setItem("potentialCandidates", JSON.stringify(updateCandidates));
  };

  if (savedCandidates.length == 0) {
    return (
      <div style={{ padding: "20px", color: "white", minHeight: "100vh", textAlign: "center" }}>
        <h2>No candidates have been accepted!!!</h2>
      </div>
    );
  }
  return (
    <div style={{ padding: "20px", color: "white", minHeight: "100vh" }}>
      <h2 style={{ textAlign: "center", marginBottom: "20px", fontsize: "60px" }}>Potential Candidates</h2>
    <List
      candidates={savedCandidates}
      onRemove={handleRemove}
      />
      </div>
  );
};

export default SavedCandidates;
