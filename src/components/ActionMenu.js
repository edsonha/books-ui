import React from "react";

const ActionMenu = ({ handleSelectAction }) => {
  return (
    <div>
      <label>Choose Action: </label>
      <select data-testid="select-action" onChange={handleSelectAction}>
        <option value="post">CREATE</option>
        <option value="get">READ</option>
        <option value="put">UPDATE</option>
        <option value="delete">DELETE</option>
      </select>
    </div>
  );
};

export default ActionMenu;
