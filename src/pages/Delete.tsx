import { useState } from "react";
import axios from "axios";

function Delete() {
  const [objectName, setObjectName] = useState("Contact");
  const [recordId, setRecordId] = useState("");
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

      const payload = {
        objectName,
        id: recordId,
      };

      const res = await axios.post("http://localhost:4000/delete", payload);
      setResult(res.data);
    } catch (err: any) {
      setError(err.response?.data?.error || err.message);
    }
  };

  return (
    <div>
      <h2>Delete Record</h2>

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

export default Delete;
