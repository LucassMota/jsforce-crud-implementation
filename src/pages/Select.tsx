import { useState } from "react";
import axios from "axios";

function Select() {
  const [objectName, setObjectName] = useState("");
  const [result, setResult] = useState<any>(null);

  const handleDescribe = async () => {
    const res = await axios.post("http://localhost:4000/select", {
      objectName,
    });
    setResult(res.data);
  };

  return (
    <div>
      <h1>Select all data</h1>
      <input
        value={objectName}
        onChange={(e) => setObjectName(e.target.value)}
        placeholder="Select all data"
      />
      <button onClick={handleDescribe}>Select</button>
      <pre>{JSON.stringify(result, null, 2)}</pre>
    </div>
  );
}

export default Select;
