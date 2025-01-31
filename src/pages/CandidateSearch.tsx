import { useState, useEffect, useCallback } from 'react';
import { searchGithub, searchGithubUser } from '../api/API';
import Candidate from "../interfaces/Candidate.interface";
import CandidateCard from "../components/candidatecard";

const CandidateSearch = () => {
  const [candidates, setCandidates] = useState<Candidate[]>([]);
  const [potentialCandidates, setPotentialCandidates] = useState<Candidate[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const transformUserToCandidate =  async (user: { login: string, id: number; avatar_url: string; html_url: string; }): Promise<Candidate> => {
    const detailedUser = await searchGithubUser(user.login);
    return {
      id: user.id,
      name: detailedUser.name || "No name",
      username: user.login,
      location: detailedUser.location || "No location",
      avatar: user.avatar_url,
      email: detailedUser.email || "No email",
      html_url: user.html_url,
      company: detailedUser.company || "No company",
      bio: detailedUser.bio || "No bio",
    };
  };

  const fetchCandidates = useCallback(async () => {
    try {
      setError(null);
      setLoading(true);
      const rawUsers = await searchGithub();
      const transformedCandidates = await Promise.all(
        rawUsers.map((user: { login: string; id: number; avatar_url: string; html_url: string; }) => transformUserToCandidate(user))
      );
      setCandidates(transformedCandidates);
    } catch {
      setError("Failed to fetch candidates. Please try again.");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchCandidates();
  }, [fetchCandidates]);

  const handleSave = () => {
    if (candidates.length > 0) {
      const [currentCandidate, ...rest] = candidates;
      setPotentialCandidates([...potentialCandidates, currentCandidate]);
      setCandidates(rest);
    };
  };

  const handleSkip = () => {
    if (candidates.length > 0) {
      const [, ...rest] = candidates;
      setCandidates(rest);
    }
  };

  useEffect(() => {
    localStorage.setItem("potentialCandidates", JSON.stringify(potentialCandidates));
  }, [potentialCandidates]);

  if (loading) return <div>Loading candidates...</div>;
  if (error) return <div>{error}</div>;
  if (candidates.length === 0) return <div>No more candidates to show</div>;

  const currentCandidate = candidates[0];

  return (
    <div>
      <h2 style={{fontSize:"60px", display: "flex", justifyContent: "center", margin: "0px"}}>Candidate Search</h2>
      <div>
        <CandidateCard  candidate={currentCandidate} onSave={handleSave} onSkip={handleSkip} />
      </div>
    </div>
  );
};

export default CandidateSearch;
