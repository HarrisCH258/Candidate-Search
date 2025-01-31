import Candidate from "../interfaces/Candidate.interface";
import { Card, Button } from "react-bootstrap";

interface CandidateCardProps { 
    candidate: Candidate; 
    onSave: (candidate: Candidate) => void;
    onSkip: () => void;
}

const CandidateCard = ({ candidate, onSave, onSkip }: CandidateCardProps) => {
    return (
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "75vh", color: "white" }}>
          <Card style={{
            backgroundColor: "black",
            width: "312px",
            borderRadius: "30px",
            overflow: "hidden",
            textAlign: "center",
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)"
          }}>
            <Card.Img
              variant="top"
              src={candidate.avatar}
              style={{ borderRadius: "30px 30px 0 0", height: "310px", objectFit: "cover" }}
            />
            <Card.Body>
              <Card.Title style={{ fontSize: "1.5rem", fontWeight: "bold", color: "white" }}>
                {candidate.name} ({candidate.username})
              </Card.Title>
              <Card.Text style={{ color: "lightgray", fontSize: "1rem" }}>
                <strong>Location:</strong> {candidate.location}
              </Card.Text>
              <Card.Text style={{ color: "lightgray", fontSize: "1rem" }}>
                <strong>Email:</strong> {candidate.email}
              </Card.Text>
              <Card.Text style={{ color: "lightgray", fontSize: "1rem" }}>
                <strong>Company:</strong> {candidate.company}
              </Card.Text>
              <Card.Text style={{ color: "lightgray", fontSize: "1rem" }}>
                <strong>Bio:</strong> {candidate.bio}
              </Card.Text>
              <div style={{display: "flex", justifyContent:"center", gap: "20px", marginTop: "20px"}}>
              <Button
                style={{
                  backgroundColor: "red",
                  borderRadius: "50%",
                  height: "40px",
                  width: "40px",
                  margin: "10px",
                  fontWeight: "bold",
                  alignItems: "center",
                  display: "flex",
                  justifyContent: "center"
                }}
                variant="danger"
                onClick={onSkip}
              >
                -
              </Button>
              <Button
                style={{
                  backgroundColor: "green",
                  borderRadius: "50%",
                  height: "40px",
                  width: "40px",
                  margin: "10px",
                  fontWeight: "bold",
                  alignItems: "center",
                  display: "flex",
                  justifyContent: "center"
                }}
                variant="success"
                onClick={() => onSave(candidate)}
              >
                +
              </Button>
              </div>
            </Card.Body>
          </Card>
        </div>
      );
    };
    export default CandidateCard;
