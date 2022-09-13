import React, { useState, useEffect }  from "react";

import axios from "axios";
import ReactHTMLTableToExcel from 'react-html-table-to-excel';
//import jsPDF from 'jspdf';
//import html2canvas from 'html2canvas';


import NavbarLineman from './NavbarLineman';
const LinemanReports = () => {
  const [users, setUser] = useState([]);

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const result = await axios.get("http://localhost:8080/fetchlist3");
    // console.log(result);
    // console.log(result.data.reverse())
    setUser(result.data);
  };

  const deleteUser = async id => {
    
    await axios.delete(`http://localhost:8080/delete2/${id}`);
   
    loadUsers();
  };
  
//   const exportPdf = () => {
//     html2canvas(document.querySelector("#table-to-xls"), {
//       scrollX: 0,
//       scrollY: 0
//     }).then(function(canvas) {
//     //html2canvas(document.querySelector("#table-to-xls")).then(canvas => {
//       // document.body.appendChild(canvas);  // if you want see your screenshot in body.
//        const imgData = canvas.toDataURL('image/png');
//        const pdf = new jsPDF();
//        pdf.addImage(imgData,'JPEG',10,2,200,100);
//        pdf.save("download.pdf"); 
//    });

// }


  return (
    <>
   
     <NavbarLineman />
    <div className="container">
      <div className="py-4">
      <div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}><h3>Disconnection Status</h3>
        </div>
        <button >Download in PDF</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        
         <ReactHTMLTableToExcel
                    id="test-table-xls-button"
                    className="download-table-xls-button"
                    table="table-to-xls"
                    filename="tablexls"
                    sheet="tablexls"
                    buttonText="Download as Excel"/>
        <br/> <br/>
        <table class="table border shadow" id="table-to-xls">
        
          <thead class="thead-dark">
            <tr>
            <th scope="col">#</th>
              <th scope="col">Consumer ID</th>
              <th scope="col">Consumername</th>
              <th scope="col">Mobile Number</th>
              <th scope="col">Address</th>
              <th scope="col">Assigned Lineman</th>
              <th scope="col">Work Status</th>
              
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
                
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    </>
  );
};

export default LinemanReports;