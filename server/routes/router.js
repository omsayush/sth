const express = require("express");
const router = express.Router();
const users = require("../models/userSchema");



// router.get("/",(req,res)=>{
//     console.log("connect");
// });

router.post("/register",async(req,res)=>{
    // console.log(req.body);
    const {name,email,age,mobile,work,add,desc, shirtlength, shirtshoulder, shirtsleeve, shirtwaist, shirtneck, shirtculfcircum, shirthalfsleeve, shirtsleevecircum, pantdesc, pantl, pantw, panth, pantcircum, pantfly, pantth, pantkn, kdesc, klength, kshoulder, ksleeve, khalf, kchest, kwaist, kneck, kcircum, khalfcircum, ksedgel, ksarmol, kschest, kswaist, kscircum, ksedge, sadridesc, sadrilength, sadricross, sadriback, sadrichest, sadriwaist,sadrineck,sadrihib,sadrisfc,sadrisfw,sadrisfe,sadrisbc,sadrisbw,sadrisbe, pyjdesc,pyjlength,pyjedgecir,pyjhalfcirc,pyjfly, pyjchuridesc,pyjchurihalflength,pyjchurilength,pyjchuriknee,pyjchuriheel,pyjchuricircum,pyjchurifly,pyjchruihalfcircle,coatdesc,coatlength,coatcross, coatback, coatshoulder, coatchest,coatwaist,coatneck,coathandcircum,coatfrontchest,coatfrontwaist,coatfrontedge,coatbackchest,coatbackwaist,coatbackedge } = req.body;// changes made
       console.log(name,email,age,mobile,work,add,desc,shirtlength, shirtshoulder, shirtsleeve, shirtwaist, shirtneck, shirtculfcircum, shirthalfsleeve, shirtsleevecircum, pantdesc, pantl, pantw, panth, pantcircum, pantfly, pantth, pantkn, kdesc, klength, kshoulder, ksleeve, khalf, kchest, kwaist, kneck, kcircum, khalfcircum, ksedgel, ksarmol, kschest, kswaist, kscircum, ksedge, sadridesc, sadrilength, sadricross, sadriback, sadrichest, sadriwaist,sadrineck,sadrihib,sadrisfc,sadrisfw,sadrisfe,sadrisbc,sadrisbw,sadrisbe, pyjdesc,pyjlength,pyjedgecir,pyjhalfcirc,pyjfly, pyjchuridesc,pyjchurihalflength,pyjchurilength,pyjchuriknee,pyjchuriheel,pyjchuricircum,pyjchurifly,pyjchruihalfcircle,coatdesc,coatlength,coatcross, coatback, coatshoulder, coatchest,coatwaist,coatneck,coathandcircum,coatfrontchest,coatfrontwaist,coatfrontedge,coatbackchest,coatbackwaist,coatbackedge )// changes made
       
    try {
        const preuser = await users.findOne({email:email});
        console.log("preuser", preuser);

        if(preuser){
            res.status(422).json("This user is already present");
        }else{
            const adduser = new users({    //error
             name,email,age,mobile,work,add,desc,shirtlength,shirtshoulder, shirtsleeve, shirtwaist, shirtneck, shirtculfcircum, shirthalfsleeve, shirtsleevecircum, pantdesc, pantl, pantw, panth, pantcircum, pantfly, pantth, pantkn, kdesc, klength, kshoulder, ksleeve, khalf, kchest, kwaist, kneck, kcircum, khalfcircum, ksedgel, ksarmol, kschest, kswaist, kscircum, ksedge, sadridesc, sadrilength, sadricross, sadriback, sadrichest, sadriwaist,sadrineck,sadrihib,sadrisfc,sadrisfw,sadrisfe,sadrisbc,sadrisbw,sadrisbe, pyjdesc,pyjlength,pyjedgecir,pyjhalfcirc,pyjfly, pyjchuridesc,pyjchurihalflength,pyjchurilength,pyjchuriknee,pyjchuriheel,pyjchuricircum,pyjchurifly,pyjchruihalfcircle, coatdesc,coatlength,coatcross, coatback, coatshoulder, coatchest,coatwaist,coatneck,coathandcircum,coatfrontchest,coatfrontwaist,coatfrontedge,coatbackchest,coatbackwaist,coatbackedge  // changes made
            });
            console.log("ssssssss")
            await adduser.save();
            console.log("ttttttt")
            res.status(201).json(adduser);
            console.log(adduser);
        }

    } catch (error) { //error
        console.log("jjjjj")
        res.status(422).json(error)
    }
})
//getUserdata

router.get("/getdata",async(req,res)=>{
    try {
        const userdata = await users.find();
        res.status(201).json(userdata)
        console.log(userdata)

    }catch(error){
        res.status(422).json(error)
    }
})

//getIndividualUser

router.get("/getuser/:id",async(req,res)=>{
    try{
        console.log(req.params);
        const {id} = req.params;

        const userindividual = await users.findById({_id:id});
        console.log(userindividual);
        res.status(201).json(userindividual);

    } catch(error){
        res.status(422).json(error);

    }
})

// update user data

router.patch("/updateuser/:id",async(req,res)=>{
    try{
        const {id} = req.params;

        const updateuser = await users.findByIdAndUpdate(id,req.body,{
            new: true
        });
        console.log(updateuser);
        res.status(201).json(updateuser);
    } catch(error){
        res.status(422).json(error);
    }
})

//delete user

router.delete("/deleteuser/:id",async(req,res)=>{
    try{
        const {id} = req.params;

        const deleteuser = await users.findByIdAndDelete({_id:id})
        console.log(deleteuser);
        res.status(201).json(deleteuser);
    } catch(error){
        res.status(422).json(error);
    }
})


module.exports = router;