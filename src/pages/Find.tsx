import { useState } from "react";
import axios from "axios";

function Find() {
  const [objectName, setObjectName] = useState("");
  const [dataId, setDataId] = useState("");
  const [result, setResult] = useState<any>(null);

  const handleDescribe = async () => {
    console.log(objectName, dataId);
    const res = await axios.post("http://localhost:4000/find", {
      objectName,
      dataId,
    });
    setResult(res.data);
  };

  return (
    <div>
      <h1>Find Data:</h1>
      <input
        value={objectName}
        onChange={(e) => setObjectName(e.target.value)}
        placeholder="Object name"
      />
      <input
        value={dataId}
        onChange={(e) => setDataId(e.target.value)}
        placeholder="Data id"
      />
      <button onClick={handleDescribe}>Find</button>
      <pre>{JSON.stringify(result, null, 2)}</pre>
    </div>
  );
}

export default Find;
