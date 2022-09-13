import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import NavbarLineman from './NavbarLineman';

const LinemanCompleted = () => {
  const [users, setUser] = useState([]);

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const result = await axios.get("http://localhost:8080/fetchlist1");
    // console.log(result);
    // console.log(result.data.reverse())
    setUser(result.data);
  };

  const deleteUser = async id=> {
    await axios.delete(`http://localhost:8080/updatework1/${id}`);
//     try {
//       const st="Completed";
//       const response = await axios({
//         method: "get",
//         url: "http://localhost:8080/updatework",
//         params: { st },
//       });
//       setUser(response.data);
//     }
    

// catch{

// }
    //loadUsers();
  };
  

  return (
    <>
     <NavbarLineman />
    <div className="container">
      <div className="py-4">
      <div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}><h3>Disconnection Status</h3>
        </div>
        <table class="table border shadow">
          <thead class="thead-dark">
            <tr>
            <th scope="col">#</th>
              <th scope="col">Consumer ID</th>
              <th scope="col">Consumername</th>
              <th scope="col">Mobile Number</th>
              <th scope="col">Address</th>
              <th scope="col">Assigned Lineman</th>
              <th scope="col">Work Status</th>
              
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr>
                <th scope="row">{index + 1}</th>
                <td>{user.Consumerid}</td>
                <td>{user.Consumername}</td>
                <td>{user.Mobnumber}</td>
                <td>{user.Address}</td>
                <td>{user.Assignedlineman}</td>
                <td>{user.Workstatus}</td>
                <td>
                  <button name={user.Consumerid}
                    class="btn btn-warning"
                    onClick={() => deleteUser(user.Consumerid)}>
                    Undo
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    </>
  );
};

export default LinemanCompleted;