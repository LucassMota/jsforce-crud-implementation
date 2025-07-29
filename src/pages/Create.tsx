import { useState } from "react";
import axios from "axios";

function Create() {
  const [objectName, setObjectName] = useState("Contact"); // default to Contact
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [result, setResult] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  const handleCreate = async () => {
    try {
      setResult(null);
      setError(null);

      const data = {
        FirstName: firstName,
        LastName: lastName,
        Email: email,
      };

      const res = await axios.post(`http://localhost:4000/create`, data);
      setResult(res.data);
    } catch (err: any) {
      setError(err.response?.data?.message || err.message);
    }
  };

  return (
    <div>
      <h2>Create Contact</h2>

      <input
        type="text"
        value={objectName}
        onChange={(e) => setObjectName(e.target.value)}
        placeholder="Salesforce object (default: Contact)"
        style={{ display: "block", marginBottom: 10 }}
      />

      <input
        type="text"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
        placeholder="First Name"
        style={{ display: "block", marginBottom: 10 }}
      />

      <input
        type="text"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
        placeholder="Last Name"
        style={{ display: "block", marginBottom: 10 }}
      />

      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        style={{ display: "block", marginBottom: 10 }}
      />

      <button onClick={handleCreate}>Create</button>

      {result && (
        <div style={{ whiteSpace: "pre-wrap", marginTop: 20 }}>
          {/* {JSON.stringify(result, null, 2)} */}
          {JSON.stringify(result)}
        </div>
      )}

      {error && (
        <div style={{ color: "red", whiteSpace: "pre-wrap", marginTop: 20 }}>
          {error}
        </div>
      )}
    </div>
  );
}
export default Create;
