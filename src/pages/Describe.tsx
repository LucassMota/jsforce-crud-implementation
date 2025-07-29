import { useState } from "react";
import axios from "axios";

function Describe() {
  const [objectName, setObjectName] = useState("");
  const [result, setResult] = useState<any>(null);

  const handleDescribe = async () => {
    const res = await axios.post("http://localhost:4000/describe", {
      objectName,
    });
    setResult(res.data);
  };

  return (
    <div>
      <h1>Describe Object</h1>
      <input
        value={objectName}
        onChange={(e) => setObjectName(e.target.value)}
        placeholder="Object name"
      />
      <button onClick={handleDescribe}>Describe</button>
      <pre>{JSON.stringify(result, null, 2)}</pre>
    </div>
  );
}

export default Describe;
