import React from "react";

function List({ list, deleteOne, deleteAll }) {
  return (
    <table>
      <thead><tr>
        <th>Name</th>
        <th>Job</th>
        <th>Delete {list.length > 1 && <button onClick={deleteAll}>all</button>}</th>
        </tr>
      </thead>
      <tbody>
      {list.map((item) => {
        const id = item._id.toString();
        return (
          
          <tr key={id} id={id}>
            <td>{item.name}</td>
            <td>{item.job}</td>
            <td>
              <button onClick={() => deleteOne(id)}>X</button>
            </td>
          </tr>
          
        );
      })}
      </tbody>
    </table>
  );
}
export default List;
