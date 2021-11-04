import React, { useContext } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { listContext } from "../context";

export default function User() {
  const params = useParams();
  const [list, setList] = useContext(listContext);
  const user = list.find((e) => e.username === params.id);
  const [name, setName] = useState(user.name);

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <div style={{ padding: "40px", fontSize: "30px" }}> {name}</div>

      <div style={{ fontSize: "20px", padding: "10px" }}>
        Choose Your Relation
      </div>

      <select>
        <option>Select Your Relation</option>
        <option>Friend</option>
        <option>Brother</option>
        <option>Sister</option>
        <option>Father</option>
        <option>Mother</option>
      </select>
    </div>
  );
}
