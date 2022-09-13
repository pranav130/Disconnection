import React,{useState} from 'react'
import { useNavigate} from "react-router-dom"
import axios from "axios";


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
padding: '5px 50px',
textAlign: "center",
textDecoration: 'none',
display: 'inline-block'};

const ckd = {textAlign: "center", border: '1px solid #5a5a5a',
padding: '3px 2px'};
const ckdr = {textAlign: "center", padding: '5px 2px'};
const ckh = {textAlign: "center", color:'#b30000', border: '0px solid #5a5a5a',
padding: '3px 2px',};


export default function () {
   
  const navigate = useNavigate();
  // using usestate hook 
    const [ user, setUser] = useState({
        ERID: "",
        name: "",
        phonenumber:"",
        division:"",
        email: "",
        password: ""
    })

    // handle on change function
    const handleChange = e => {
      console.log(user)
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
          
      }


      // register function to post line man's data
      const register = async () => {
        const { ERID,name,phonenumber,division,email,password } = user
        console.log(user)
        if( ERID && name && phonenumber && division && email && password){
            const response = await axios({
                method: "post",
                url: "http://localhost:8080/register/",
                params: { ERID,name,phonenumber,division,email,password },
              }).then( res => {
                alert(res.data.message)
                navigate("/")
                

            })
        } else {
            alert("invlid input")
        }
        
   
  }
  
  return (
    <div style={ckd}>
    <h2 style={ckh}>Register as JE</h2>
    <input type="number" name="ERID" style ={csl} value={user.ERID} placeholder="Your ERID" onChange={ handleChange }  ></input> <br />
    <input type="text" name="name" style ={csl} value={user.name} placeholder="Your name" onChange={ handleChange }></input> <br />
    <input type="number" name="phonenumber" style ={csl} value={user.phonenumber} placeholder="Your phone number" onChange={ handleChange }></input> <br />
    <input type="text" name="division" style ={csl} value={user.division} placeholder="Your division" onChange={ handleChange }></input> <br />
    <input type="email" name="email" style ={csl} value={user.email} placeholder="Your email" onChange={ handleChange }></input> <br />
    <input type="password" name="password" style ={csl} value={user.password} placeholder="Your password" onChange={ handleChange }></input> <br />
    
    
    
    <div className="buttons" style={ckdr}>
    <button className="button" onClick={register} style ={csr}>Register</button>
    </div>
    <br />

    </div>  
  )
}
