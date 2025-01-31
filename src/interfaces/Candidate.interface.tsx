// TODO: Create an interface for the Candidate objects returned by the API
interface Candidate {
    id: number;
    name: string;
    username: string;
    location: string;
    avatar: string;
    email: string;
    html_url: string;
    company: string;
    bio: string;
}

export default Candidate;