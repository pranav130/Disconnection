import React,{useState} from 'react'
import axios from "axios";
import Navbar from './Navbar';

const csl = {backgroundColor: 'white',
color: 'black',
borderRadius: '5px',
border: '2px solid #5a5a5a',
padding: '3px 50px',
textAlign: "center",
textDecoration: 'none',
display: 'inline-block'};

const csr = {backgroundColor: '#00a800',
color: 'white',
borderRadius: '7px',
border: '2px solid #5a5a5a',
padding: '3px 50px',
textAlign: "center",
textDecoration: 'none',
display: 'inline-block'};

const ckd = {textAlign: "center",
padding: '3px 2px'};
const ckh = {textAlign: "center", color:'#b30000', border: '0px solid #5a5a5a',
padding: '3px 2px',};

export default function () {
  //  using useState
    const [ user, setUser] = useState({
        phonenumber:"",
        name: "",   
        aadhar: "",   
        jenumber: "",
        jeerid:""
    })

    // handling on change
    const handleChange = e => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
          
      }
      
      // register function to post data 
      const register = async () => {
        const { phonenumber,name,aadhar,jeerid,jenumber } = user
        console.log(user)
        if(phonenumber && name && aadhar && jeerid &&jenumber){
            const response = await axios({
                method: "post",
                url: "http://localhost:8080/registerlineman/",
                params: { phonenumber,name,aadhar,jenumber,jeerid },
              }).then( res => {
                alert(res.data.message)

            })

        } else {
            alert("invlid input")
        }
        
   
  }
  return (
    <>
    <Navbar />
    <div style={ckd}>
    <h3 style={ckh}>Add New Line Man</h3>
    <input type="number" name="phonenumber" value={user.phonenumber} style ={csl} placeholder="Lineman ERP ID " onChange={ handleChange }  ></input> <br />
    <input type="text" name="name" value={user.name} placeholder="Name" style ={csl} onChange={ handleChange }></input> <br />
    <input type="text" name="aadhar" value={user.aadhar} placeholder="Aadhar number" style ={csl} onChange={ handleChange }></input> <br />
    <input type="number" name="jenumber" value={user.jenumber} placeholder="Mob Number" style ={csl} onChange={ handleChange }></input> <br />
    <input type="number" name="jeerid" value={user.jeerid} placeholder="password" style ={csl} onChange={ handleChange }></input> <br />
    <div className="buttons"><br />
    <button className="button" onClick={register} style ={csr} >Register</button>
    </div>
    <br />      

    </div>
    </>
  )
    
  }

