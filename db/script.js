const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const User = require("./model");
const app = express();
const PORT = 8080;
app.use(cors());
app.use(express.json());
const employees = require("./employee")

// schema for consumer details
const linemanschema = new mongoose.Schema({
 

     Consumerid:Number,
     Assignedlineman:String,
     Consumername:String,
     Mobnumber:Number,
     Address:String,
     Workstatus:String

  
});

const Consumerdetail = mongoose.model("Consumerdetail", linemanschema);

// Schema for JE's 
const userSchema = new mongoose.Schema({
  ERID: Number,
  name: String,
  phonenumber: Number,
  division: String ,
  email: String,
  password: String 
})

// model for JE's
const JE = new mongoose.model("JE", userSchema)

// //schema for employee
// const employeeSchema = new mongoose.Schema({
//   name: String,
//   email: String, 
//   number: Number,
//   nic: String,
//   address: String
// })

//const EMPLOYEE =  new mongoose.model("EMPLOYEE",employeeSchema);
const emplyeeSchema = new mongoose.Schema({
  name: {
      type: String,
  },
  email: {
      type: String,
      required: true,
      
  },
  number: {
      type: Number,
      required: true,
      min: 10,
  },
  nic: {
      type: String,
      required: true
  },
  address: {
      type: String,
      required: true
  }
})



// test
app.get("/getdata",async(req,res)=>{
  try {
    console(Hi)
      const userdata = await User.find();
      res.status(201).json(userdata)
      console.log(userdata);
  } catch (error) {
      res.status(422).json(error);
  }
})

// Schema for Line man 
const linemanSchema = new mongoose.Schema({
  phonenumber: Number,
  name: String,
  aadhar: Number, 
  jenumber: Number,
  jeerid:Number,
  status:String
})

// model for lineman 

const LINEMAN = new mongoose.model("LINEMAN", linemanSchema)
//test
// router.get('/fetchallnotes',async(req,res)=>{
//   const users = await LINEMAN.find();
//       response.status(200).json(users);
// })

  //
  app.get("/fetchlist", async (req, res) => {
   
    const user = await Consumerdetail.find();
    if (user) {
      res.status(200).json(user);
     
    } else {
      res.status(404).json({ error: "User not found" });
  
    }
  });

  app.get("/fetchlist1", async (req, res) => {
   
   const user = await Consumerdetail.find({Workstatus:"Completed",Assignedlineman:"Lineman4"});
   console.log(user)
   if (user) {
     res.status(200).json(user);
    
   } else {
     res.status(404).json({ error: "User not found" });
 
   }

  });

  app.get("/fetchlist2", async (req, res) => {
   
    const user = await Consumerdetail.find({Workstatus:"Pending",Assignedlineman:"Lineman4"});
    console.log(user)
    if (user) {
      res.status(200).json(user);
     
    } else {
      res.status(404).json({ error: "User not found" });
  
    }
 
   });


   app.get("/fetchlist3", async (req, res) => {
   
    const user = await Consumerdetail.find({Assignedlineman:"Lineman4"});
    console.log(user)
    if (user) {
      res.status(200).json(user);
     
    } else {
      res.status(404).json({ error: "User not found" });
  
    }
 
   });



  app.get("/fetchallnotes", async (req, res) => {
   
    const user = await LINEMAN.find();
    if (user) {
      res.status(200).json(user);
     
    } else {
      res.status(404).json({ error: "User not found" });
  
    }
  });

  app.delete("/delete1/:Consumerid", async (req, res) => {
    const Consumerid = req.params.Consumerid;
    const user = await LINEMAN.findOneAndDelete({ Consumerid });
    
    }
  );

   app.delete("/updatework/:id", async (req, res) => {
     const id = req.params.id;
     console.log(id)
     Consumerdetail.findOneAndUpdate({ Consumerid:id },{Workstatus:"Completed"}, function (err, docs) {
      if (err){
          console.log(err)
      }
      else{
          console.log("Original Doc : ",docs);
      }
  });
    });


    app.delete("/updatework1/:id", async (req, res) => {
      const id = req.params.id;
      console.log(id)
      Consumerdetail.findOneAndUpdate({ Consumerid:id },{Workstatus:"Pending"}, function (err, docs) {
       if (err){
           console.log(err)
       }
       else{
           console.log("Original Doc : ",docs);
       }
   });
     });


  app.delete("/delete2/:id", async (req, res) => {
    const id = req.params.id;
    console.log(id)
    Consumerdetail.findOneAndDelete({ Consumerid:id }, function (err, docs) {
      
  });
}
  );


  app.delete("/update2/:id", async (req, res) => {
    const id = req.params.id;
    const st="1";
  LINEMAN.findOneAndUpdate({id}, {$set:{Workstatus:st}}, (err, doc) => {
    if(err){
      console.log("Something wrong when updating data!");
  }

  console.log(doc);
  res.send({message: "Lineman Activated successfully."})
  
});
    }
  );


//test
 const getUsers = async (request, response) => {
  try{
      const users = await User.find();
      response.status(200).json(users);
  }catch( error ){
      response.status(404).json({ message: error.message })
  }
}





app.get("/", (req, res) => {
  res.status(200).json({ msg: "welcome" });
});


app.get("/login", async (req, res) => {
  const email = req.query.email;
  const user = await User.findOne({ email });
  if (user) {
    res.status(200).json(user);
   
  } else {
    res.status(404).json({ error: "User not found" });

  }
});

// function to save JE's data to backend
app.post("/register", (req, res)=> {
  console.log(req.query)
  console.log("hello");
  const name=req.query.name;
  const ERID=req.query.ERID;
  const division=req.query.division;
  const phonenumber=req.query.phonenumber;
  const email=req.query.email;
  const password=req.query.password;
  
  JE.findOne({phonenumber:phonenumber},(err,user)=>{

    if(user){
      res.send({message: "User already registerd"})
    }
    else{
      var newuser= new JE({
        ERID: ERID,
        name:name,
        phonenumber:phonenumber,
        division:division,
        email:email,
        password:password
      })
      newuser.save(function(err,result){
        if (err){
          console.log(err);
        }
        else{
      res.send({message: "User registered"})
          console.log(result)
        }
      })
    }
  })  

})


// function to delete Lineman's data to backend
app.post("/deletelineman", (req, res)=> {
  console.log(req.query)
  console.log("hello");
  
  const ERID=req.query.ERID;
  
  JE.findOne({ERID:ERID},(err,user)=>{

    if(user){
      var newuser= new JE({
        ERID: ERID,
       
      })
      newuser.save(function(err,result){
        if (err){
          console.log(err);
        }
        else{
      res.send({message: "User registered"})
          console.log(result)
        }
      })
   
   
    }
    else{
      res.send({message: "LINEMAN NOT FOUND"})
     
    }
  })  

})

// function to save Linemans's data to backend

app.post("/registerlineman", (req, res)=> {
  console.log("hello");
  const phonenumber=req.query.phonenumber;
  const name=req.query.name;
  const aadhar=req.query.aadhar;
  const jeerid=req.query.jeerid;
  const jenumber=req.query.jenumber;
  const st="1";
  LINEMAN.findOne({phonenumber:phonenumber},(err,user)=>{
    if(user){
      res.send({message: "User already registerd"})
    }
    else{
      var newuser= new LINEMAN({
        phonenumber:phonenumber,
        name:name,
        aadhar:aadhar,
        jeerid:jeerid,
        jenumber:jenumber,
        status:st
      })
      newuser.save(function(err,result){
        if (err){
          console.log(err);
        }
        else{
      res.send({message: "User registered"})
          console.log(result)
        }
      })
    }
  })  

})

// function to activate lineman

app.post("/activatelineman", (req, res)=> {
  console.log("hello");
  const phonenumber=req.query.phonenumber;
  
  const st="1";
  LINEMAN.findOneAndUpdate({phonenumber:phonenumber}, {$set:{status:st}}, (err, doc) => {
    if(err){
      console.log("Something wrong when updating data!");
  }

  console.log(doc);
  res.send({message: "Lineman Activated successfully."})
  
});
  
})

// function to deactivate lineman

app.post("/deactivatelineman", (req, res)=> {
  console.log("hello");
  const phonenumber=req.query.phonenumber;
  
  const st="0";
  LINEMAN.findOneAndUpdate({phonenumber:phonenumber}, {$set:{status:st}}, (err, doc) => {
    if(err){
      console.log("Something wrong when updating data!");
  }

  console.log(doc);
  res.send({message: "Lineman Deactivated successfully."})
  
});
  
})


app.use("/employee", employees)

//function upload consumer data
app.post('/consumerinfo',async (req,res)=>{
  const arr=req.body
  console.log("arr", arr);
  const NewArray=new Consumerdetail({
    
      array:arr
  })
  const response =await NewArray.save();
  res.send(response.array);
})



app.listen(PORT, () => {
  console.log(`Server at ${PORT}`);
});

app.get('/',(req,res)=>{
  res.send("hello");
})

mongoose
  .connect("mongodb://localhost:27017")
  .then(() => {
    console.log("connection successful");
  })
  .catch((err) => {
    console.log(err);
  });

// const abc = new employee({
//   ERID: "12345678",
//   name: "manish",
//       email: "aeit.mks@gmail.com",
//       number: "88888",
//       nic: "wfddds",
//       address: "lucknow"
// });

// abc
//   .save()
//   .then(() => {
//     console.log("User saved");
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// const fetchUser = async () => {
//   const user = await User.findOne({
//     email: "prince@gmail.com",
//   });
//   console.log(user);
// };
// fetchUser();
