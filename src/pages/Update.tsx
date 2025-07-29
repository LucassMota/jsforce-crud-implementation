import { useState } from "react";
import axios from "axios";

function Update() {
  const [objectName, setObjectName] = useState("Contact");
  const [recordId, setRecordId] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [result, setResult] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  const handleUpdate = async () => {
    if (!recordId) {
      setError("Record Id is required");
      return;
    }
    try {
      setResult(null);
      setError(null);

      // Build the fields object only with provided values
      const fields: Record<string, string> = {};
      if (firstName) fields.FirstName = firstName;
      if (lastName) fields.LastName = lastName;
      if (email) fields.Email = email;

      const payload = {
        objectName,
        id: recordId,
        fields,
      };

      const res = await axios.post("http://localhost:4000/update", payload);
      setResult(res.data);
    } catch (err: any) {
      setError(err.response?.data?.error || err.message);
    }
  };

  return (
    <div>
      <h2>Update Record</h2>

      <input
        type="text"
        placeholder="Salesforce object (e.g. Contact)"
        value={objectName}
        onChange={(e) => setObjectName(e.target.value)}
        style={{ display: "block", marginBottom: 10 }}
      />

      <input
        type="text"
        placeholder="Record Id (e.g. 003XXXXXXXXXXXX)"
        value={recordId}
        onChange={(e) => setRecordId(e.target.value)}
        style={{ display: "block", marginBottom: 10 }}
      />

      <input
        type="text"
        placeholder="First Name"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
        style={{ display: "block", marginBottom: 10 }}
      />

      <input
        type="text"
        placeholder="Last Name"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
        style={{ display: "block", marginBottom: 10 }}
      />

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={{ display: "block", marginBottom: 10 }}
      />

      <button onClick={handleUpdate}>Update</button>

      {result && (
        <div style={{ whiteSpace: "pre-wrap", marginTop: 20 }}>
          {JSON.stringify(result, null, 2)}
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

export default Update;
