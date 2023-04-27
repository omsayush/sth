import React, { useEffect, useState } from 'react';
import CreateIcon from '@mui/icons-material/Create';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined';
import WorkOutlinedIcon from '@mui/icons-material/WorkOutlined';
import PhoneAndroidOutlinedIcon from '@mui/icons-material/PhoneAndroidOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import { NavLink, useNavigate, useParams } from 'react-router-dom';

const Detail = () => {

  const [getuserdata, setUserdata] = useState([]);
  console.log(getuserdata);


  const {id} = useParams("");
  console.log(id)

  const navigate = useNavigate();
  
  const getdata = async () => {


    const res = await fetch(`/getuser/${id}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }

    });

    const data = await res.json();
    console.log(data);

    if (res.status === 404 || !data) { //thapa used data.status, i used res.status
        console.log("error ");
    } else {
        setUserdata(data)
        console.log("get data");
    }
}
useEffect(()=>{
  getdata();
})

const deleteuser =async (id)=>{

  const res2 = await fetch(`/deleteuser/${id}`,{
      method: "DELETE",
      headers: {
          "Content-Type" : "application/json"
      }
  });

  const deletedata = await res2.json();
  console.log(deletedata);

  if(res2.status === 422 || !deletedata){
      console.log("error");
  }else{
      console.log("user deleted");
        navigate("/")
  }
}

  return (
    <div className='container mt-3'>
      <h1 style={{ fontWeight: 400 }}>Welcome Ayush Srivastava</h1>
      <Card sx={{ maxWidth: 600 }}>
        <CardContent>
          <div className='add_btn'>
            <NavLink to={`/edit/${getuserdata._id}`}><button className='btn btn-primary mx-2'><CreateIcon /></button></NavLink>
            <button className='btn btn-danger' onClick={()=>deleteuser(getuserdata._id)}><DeleteOutlineIcon /></button>
          </div>
          <div className='row'>
            <div className='left_view col-lg-6 col-md-6 col-12'>
              <img src='/profile.png' style={{ width: 50 }} alt="profile" />
              <h3 className='mt-3'>Name: <span>{getuserdata.name}</span></h3>
              <h3 className='mt-3'>Age: <span>{getuserdata.age}</span></h3>
              <p className='mt-3'> <MailOutlineOutlinedIcon />Email: <span>{getuserdata.email}</span></p>
              <p className='mt-3'> <WorkOutlinedIcon />Occupation: <span>{getuserdata.work}</span></p>
            </div>
            <div className='right_view col-lg-6 col-md-6 col-12 mt-4'>
              <p className='mt-5'><PhoneAndroidOutlinedIcon />Mobile: <span>{getuserdata.mobile}</span></p>
              <p className='mt-3'><LocationOnOutlinedIcon />Location: <span>{getuserdata.add}</span></p>
              </div>
              {/* Changes Made Shirt*/}
              <hr></hr>
              <div>
              <p className='mt-3'>Shirt Description: <span>{getuserdata.desc}</span></p>
              <p className='mt-3'>Shirt Length: <span>{getuserdata.shirtlength}</span></p>
              <p className='mt-3'>Shirt Shoulder: <span>{getuserdata.shirtshoulder}</span></p>
              <p className='mt-3'>Shirt Sleeve: <span>{getuserdata.shirtsleeve}</span></p>
              <p className='mt-3'>Shirt Waist: <span>{getuserdata.shirtwaist}</span></p>
              <p className='mt-3'>Shirt Neck: <span>{getuserdata.shirtneck}</span></p>
              <p className='mt-3'>Shirt Cuff Circumference: <span>{getuserdata.shirtculfcircum}</span></p>
              <p className='mt-3'>Shirt Half Sleeve: <span>{getuserdata.shirthalfsleeve}</span></p>
              <p className='mt-3'>Shirt Half Sleeve Circum: <span>{getuserdata.shirtsleevecircum}</span></p>
              {/* Changes Made */}
               {/* Changes Made Pant*/}
               <hr></hr>
               <p className='mt-3'>Pant Description: <span>{getuserdata.pantdesc}</span></p>
              <p className='mt-3'>Pant Length: <span>{getuserdata.pantl}</span></p>
              <p className='mt-3'>Pant Waist: <span>{getuserdata.pantw}</span></p>
              <p className='mt-3'>Pant Hib/Sit: <span>{getuserdata.panth}</span></p>
              <p className='mt-3'>Pant Circum: <span>{getuserdata.pantcircum}</span></p>
              <p className='mt-3'>Pant Fly: <span>{getuserdata.pantfly}</span></p>
              <p className='mt-3'>Pant Thigh: <span>{getuserdata.pantth}</span></p>
              <p className='mt-3'>Pant Knee: <span>{getuserdata.pantkn}</span></p>
              {/* Changes Made */}
              {/* Changes Made Kurta*/}
              <hr></hr>
              <p className='mt-3'>Kurta Description: <span>{getuserdata.kdesc}</span></p>
              <p className='mt-3'>Kurta Length: <span>{getuserdata.klength}</span></p>
              <p className='mt-3'>Kurta Shoulder: <span>{getuserdata.kshoulder}</span></p>
              <p className='mt-3'>Kurta Sleeve: <span>{getuserdata.ksleeve}</span></p>
              <p className='mt-3'>Kurta Half Sleeve: <span>{getuserdata.khalf}</span></p>
              <p className='mt-3'>Kurta Chest: <span>{getuserdata.kchest}</span></p>
              <p className='mt-3'>Kurta Waist: <span>{getuserdata.kwaist}</span></p>
              <p className='mt-3'>Kurta Neck: <span>{getuserdata.kneck}</span></p>
              <p className='mt-3'>Kurta Circumference: <span>{getuserdata.kcircum}</span></p>
              <p className='mt-3'>Kurta Half Circum: <span>{getuserdata.khalfcircum}</span></p>
              <p className='mt-3'>Edge Length: <span>{getuserdata.ksedgel}</span></p>
              <p className='mt-3'>Armol: <span>{getuserdata.ksarmol}</span></p>
              <p className='mt-3'>Chest: <span>{getuserdata.kschest}</span></p>
              <p className='mt-3'>Waist: <span>{getuserdata.kswaist}</span></p>
              <p className='mt-3'>Circum: <span>{getuserdata.kscircum}</span></p>
              <p className='mt-3'>Edge: <span>{getuserdata.ksedge}</span></p>
              {/* Changes Made */}
              {/* Changes Made Sadri*/}
              <hr></hr>
              <p className='mt-3'>Sadri Description: <span>{getuserdata.sadridesc}</span></p>
              <p className='mt-3'>Sadri Length: <span>{getuserdata.sadrilength}</span></p>
              <p className='mt-3'>Sadri Cross: <span>{getuserdata.sadricross}</span></p>
              <p className='mt-3'>Sadri Back: <span>{getuserdata.sadriback}</span></p>
              <p className='mt-3'>Sadri Chest: <span>{getuserdata.sadrichest}</span></p>
              <p className='mt-3'>Sadri Waist: <span>{getuserdata.sadriwaist}</span></p>
              <p className='mt-3'>Sadri Neck: <span>{getuserdata.sadrineck}</span></p>
              <p className='mt-3'>Sadri Hib/Seat: <span>{getuserdata.sadrihib}</span></p>
              <p className='mt-3'>Sample Front Chest: <span>{getuserdata.sadrisfc}</span></p>
              <p className='mt-3'>Sample Front Waist: <span>{getuserdata.sadrisfw}</span></p>
              <p className='mt-3'>Sample Front Edge: <span>{getuserdata.sadrisfe}</span></p>
              <p className='mt-3'>Sample Back Chest: <span>{getuserdata.sadrisbc}</span></p>
              <p className='mt-3'>Sample Back Waist: <span>{getuserdata.sadrisbw}</span></p>
              <p className='mt-3'>Sample Back Edge: <span>{getuserdata.sadrisbe}</span></p>
              {/* Changes Made */}
              {/* Changes Made Pyjama*/}
              <hr></hr>
              <p className='mt-3'>Pyjama Description: <span>{getuserdata.pyjdesc}</span></p>
              <p className='mt-3'>Pyjama Length: <span>{getuserdata.pyjlength}</span></p>
              <p className='mt-3'>Pyjama Edge Circumference: <span>{getuserdata.pyjedgecir}</span></p>
              <p className='mt-3'>Pyjama Half Circle: <span>{getuserdata.pyjhalfcirc}</span></p>
              <p className='mt-3'>Pyjama Fly: <span>{getuserdata.pyjfly}</span></p>
              {/* Changes Made */}
              {/* Changes Made Pyjama Churidaar*/}
              <hr></hr>
              <p className='mt-3'>Pyjama Churidaar Description: <span>{getuserdata.pyjchuridesc}</span></p>
              <p className='mt-3'>Pyjama Churidaar Half Length: <span>{getuserdata.pyjchurihalflength}</span></p>
              <p className='mt-3'>Pyjama Churidaar Length: <span>{getuserdata.pyjchurilength}</span></p>
              <p className='mt-3'>Pyjama Churidaar Knee: <span>{getuserdata.pyjchuriknee}</span></p>
              <p className='mt-3'>Pyjama Churidaar Heel: <span>{getuserdata.pyjchuriheel}</span></p>
              <p className='mt-3'>Pyjama Churidaar Circumference: <span>{getuserdata.pyjchuricircum}</span></p>
              <p className='mt-3'>Pyjama Churidaar Fly: <span>{getuserdata.pyjchurifly}</span></p>
              <p className='mt-3'>Pyjama Churidaar Half Circle: <span>{getuserdata.pyjchruihalfcircle}</span></p>
              {/* Changes Made */}
              {/* Changes Made Coat*/}
              <hr></hr>
              <p className='mt-3'>Coat Description: <span>{getuserdata.coatdesc}</span></p>
              <p className='mt-3'>Coat Length: <span>{getuserdata.coatlength}</span></p>
              <p className='mt-3'>Coat Cross: <span>{getuserdata.coatcross}</span></p>
              <p className='mt-3'>Coat Back: <span>{getuserdata.coatback}</span></p>
              <p className='mt-3'>Coat Shoulder: <span>{getuserdata.coatshoulder}</span></p>
              <p className='mt-3'>Coat Chest: <span>{getuserdata.coatchest}</span></p>
              <p className='mt-3'>Coat Waist: <span>{getuserdata.coatwaist}</span></p>
              <p className='mt-3'>Coat Neck: <span>{getuserdata.coatneck}</span></p>
              <p className='mt-3'>Coat Hand Circum: <span>{getuserdata.coathandcircum}</span></p>
              <p className='mt-3'>Sample - Coat Front-Chest: <span>{getuserdata.coatfrontchest}</span></p>
              <p className='mt-3'>Sample - Coat Front-Waist: <span>{getuserdata.coatfrontwaist}</span></p>
              <p className='mt-3'>Sample - Coat Front-Edge: <span>{getuserdata.coatfrontedge}</span></p>
              <p className='mt-3'>Sample - Coat Back-Chest: <span>{getuserdata.coatbackchest}</span></p>
              <p className='mt-3'>Sample - Coat Back-Waist: <span>{getuserdata.coatbackwaist}</span></p>
              <p className='mt-3'>Sample - Coat Back-Edge: <span>{getuserdata.coatbackedge}</span></p>
              {/* Changes Made */}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default Detail