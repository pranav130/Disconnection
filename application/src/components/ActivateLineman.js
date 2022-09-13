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
const ckh = {textAlign: "center", color:'#b30000',
padding: '3px 2px',};

export default function () {
  //  using useState
    const [ user, setUser] = useState({
        phonenumber:"",
       
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
        const { phonenumber } = user
        
        if(phonenumber){
            const response = await axios({
                method: "post",
                url: "http://localhost:8080/activatelineman/",
                params: { phonenumber },
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
    <h3 style={ckh}>Activate Lineman</h3>
    <input type="number" name="phonenumber" value={user.phonenumber} style ={csl} placeholder="Lineman ERP ID " onChange={ handleChange }  ></input> <br />
     <div className="buttons"><br />
    <button className="button" onClick={register} style ={csr} >Activate</button>
    </div>
       

    </div>
    </>
  )
    
  }

