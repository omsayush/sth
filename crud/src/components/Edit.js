import React, { useContext, useEffect, useState } from 'react';
import { NavLink, useParams, useNavigate } from "react-router-dom";
import { updatedata } from './context/ContextProvider';



const Edit = () => {

    // const [getuserdata, setUserdata] = useState([]);
    // console.log(getuserdata);


    const { updata, setUPdata } = useContext(updatedata)

    const navigate = useNavigate("");


    const [inpval, setINP] = useState({
        name: "",
        email: "",
        age: "",
        mobile: "",
        work: "",
        add: "",
        desc: "",
        shirtlength: "",
        shirtshoulder: "",
        shirtsleeve: "",
        shirtwaist: "",
        shirtneck: "",
        shirtculfcircum: "",
        shirthalfsleeve: "",
        shirtsleevecircum: "",
        pantdesc: "",
        pantl: "",
        pantw: "",
        panth: "",
        pantcircum: "",
        pantfly: "",
        pantth: "",
        pantkn: "",
        kdesc: "",
        klength: "",
        kshoulder: "",
        ksleeve: "",
        khalf: "",
        kchest: "",
        kwaist: "",
        kneck: "",
        kcircum: "",
        khalfcircum: "",
        ksedgel: "",
        ksarmol: "",
        kschest: "",
        kswaist: "",
        kscircum: "",
        ksedge: "",
        sadridesc: "",
        sadrilength: "",
        sadricross: "",
        sadriback: "",
        sadrichest: "",
        sadriwaist: "",
        sadrineck: "",
        sadrihib: "",
        sadrisfc: "",
        sadrisfw: "",
        sadrisfe: "",
        sadrisbc: "",
        sadrisbw: "",
        sadrisbe: "",
        pyjdesc: "",
        pyjlength: "",
        pyjedgecir: "",
        pyjhalfcirc: "",
        pyjfly: "",
        pyjchuridesc: "",
        pyjchurihalflength: "",
        pyjchurilength: "",
        pyjchuriknee: "",
        pyjchuriheel: "",
        pyjchuricircum: "",
        pyjchurifly: "",
        pyjchruihalfcircle: "",



    })

    const setdata = (e) => {
        console.log(e.target.value);
        const { name, value } = e.target;

        setINP((preval) => {
            return {
                ...preval,
                [name]: value
            }
        })
    }

    const { id } = useParams("");
    console.log(id);


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
            setINP(data)
            console.log("get data");
        }
    }

    useEffect(() => {
        getdata();
    }, [])

    const updateuser = async (e) => {
        e.preventDefault();

        const { name, email, age, mobile, work, add, desc, shirtlength, shirtshoulder, shirtsleeve, shirtwaist, shirtneck, shirtculfcircum, shirthalfsleeve, shirtsleevecircum, pantdesc, pantl, pantw, panth, pantcircum, pantfly, pantth, pantkn, kdesc, klength, kshoulder, ksleeve, khalf, kchest, kwaist, kneck, kcircum, khalfcircum, ksedgel, ksarmol, kschest, kswaist, kscircum, ksedge, sadridesc, sadrilength, sadricross, sadriback, sadrichest, sadriwaist, sadrineck, sadrihib, sadrisfc, sadrisfw, sadrisfe, sadrisbc, sadrisbw, sadrisbe, pyjdesc, pyjlength, pyjedgecir, pyjhalfcirc, pyjfly, pyjchuridesc, pyjchurihalflength, pyjchurilength, pyjchuriknee, pyjchuriheel, pyjchuricircum, pyjchurifly, pyjchruihalfcircle, coatdesc, coatlength, coatcross, coatback, coatshoulder, coatchest, coatwaist, coatneck, coathandcircum, coatfrontchest, coatfrontwaist, coatfrontedge, coatbackchest, coatbackwaist, coatbackedge } = inpval;

        const res2 = await fetch(`/updateuser/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name, email, age, mobile, work, add, desc, shirtlength, shirtshoulder, shirtsleeve, shirtwaist, shirtneck, shirtculfcircum, shirthalfsleeve, shirtsleevecircum, pantdesc, pantl, pantw, panth, pantcircum, pantfly, pantth, pantkn, kdesc, klength, kshoulder, ksleeve, khalf, kchest, kwaist, kneck, kcircum, khalfcircum, ksedgel, ksarmol, kschest, kswaist, kscircum, ksedge, sadridesc, sadrilength, sadricross, sadriback, sadrichest, sadriwaist, sadrineck, sadrihib, sadrisfc, sadrisfw, sadrisfe, sadrisbc, sadrisbw, sadrisbe, pyjdesc, pyjlength, pyjedgecir, pyjhalfcirc, pyjfly, pyjchuridesc, pyjchurihalflength, pyjchurilength, pyjchuriknee, pyjchuriheel, pyjchuricircum, pyjchurifly, pyjchruihalfcircle, coatdesc, coatlength, coatcross, coatback, coatshoulder, coatchest, coatwaist, coatneck, coathandcircum, coatfrontchest, coatfrontwaist, coatfrontedge, coatbackchest, coatbackwaist, coatbackedge
            })
        });

        const data2 = await res2.json();
        console.log(data2);

        if (res2.status === 422 || !data2) {
            alert("fill the data")
        } else {
            alert("data added")
            navigate("/")
            setUPdata(data2)
        }

    }
    return (
        <div className='container'>
            <NavLink to="/">Home2</NavLink>
            <form className='mt-4'>
                <div className='row'>
                    <div class="mb-3 col-lg-4 col-md-6 col-12 col-lg-4 col-md-6 col-12">
                        <label for="exampleInputEmail1" class="form-label">Name</label>
                        <input type="text" value={inpval.name} onChange={setdata} name='name' class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />

                    </div>
                    <div class="mb-3 col-lg-6 col-md-6 col-12">
                        <label for="exampleInputPassword1" class="form-label">Email</label>
                        <input type="email" value={inpval.email} onChange={setdata} name='email' class="form-control" id="exampleInputPassword1" />
                    </div>
                    <div class="mb-3 col-lg-6 col-md-6 col-12">
                        <label for="exampleInputPassword1" class="form-label">Age</label>
                        <input type="text" value={inpval.age} onChange={setdata} name="age" class="form-control" id="exampleInputPassword1" />
                    </div>
                    <div class="mb-3 col-lg-6 col-md-6 col-12">
                        <label for="exampleInputPassword1" class="form-label">Mobile</label>
                        <input type="number" value={inpval.mobile} onChange={setdata} name='mobile' class="form-control" id="exampleInputPassword1" />
                    </div>
                    <div class="mb-3 col-lg-6 col-md-6 col-12">
                        <label for="exampleInputPassword1" class="form-label">Work</label>
                        <input type="text" value={inpval.work} onChange={setdata} name='work' class="form-control" id="exampleInputPassword1" />
                    </div>
                    <div class="mb-3 col-lg-6 col-md-6 col-12">
                        <label for="exampleInputPassword1" class="form-label">Address</label>
                        <input type="text" value={inpval.add} onChange={setdata} name='add' class="form-control" id="exampleInputPassword1" />
                    </div>


                    {/* Changes Made Shirt */}
                    <div class="accordion" id="accordionExample">
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="headingOne">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                                    Shirt
                                </button>
                            </h2>
                            <div id="collapseOne" class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    <div class="mb-3 col-lg-12 col-md-12 col-12">
                                        <label for="exampleInputPassword1" class="form-label"> Shirt Description</label>
                                        <textarea name="desc" value={inpval.desc} onChange={setdata} className="form-control" id="" cols="30" row="5"></textarea>
                                    </div>
                                    <div class="mb-3 col-lg-12 col-md-6 col-12">
                                        <label for="exampleInputPassword1" class="form-label">Shirt Length</label>
                                        <input type="text" value={inpval.shirtlength} onChange={setdata} name='shirtlength' class="form-control" id="exampleInputPassword1" />
                                    </div>
                                    <div class="mb-3 col-lg-6 col-md-6 col-12">
                                        <label for="exampleInputPassword1" class="form-label">Shirt Shoulder</label>
                                        <input type="text" value={inpval.shirtshoulder} onChange={setdata} name='shirtshoulder' class="form-control" id="exampleInputPassword1" />
                                    </div>
                                    <div class="mb-3 col-lg-6 col-md-6 col-12">
                                        <label for="exampleInputPassword1" class="form-label">Shirt Sleeve</label>
                                        <input type="text" value={inpval.shirtsleeve} onChange={setdata} name='shirtsleeve' class="form-control" id="exampleInputPassword1" />
                                    </div>
                                    <div class="mb-3 col-lg-6 col-md-6 col-12">
                                        <label for="exampleInputPassword1" class="form-label">Shirt Waist</label>
                                        <input type="text" value={inpval.shirtwaist} onChange={setdata} name='shirtwaist' class="form-control" id="exampleInputPassword1" />
                                    </div>
                                    <div class="mb-3 col-lg-6 col-md-6 col-12">
                                        <label for="exampleInputPassword1" class="form-label">Shirt Neck</label>
                                        <input type="text" value={inpval.shirtneck} onChange={setdata} name='shirtneck' class="form-control" id="exampleInputPassword1" />
                                    </div>
                                    <div class="mb-3 col-lg-6 col-md-6 col-12">
                                        <label for="exampleInputPassword1" class="form-label">Shirt Cuff Circumference</label>
                                        <input type="text" value={inpval.shirtculfcircum} onChange={setdata} name='shirtculfcircum' class="form-control" id="exampleInputPassword1" />
                                    </div>
                                    <div class="mb-3 col-lg-6 col-md-6 col-12">
                                        <label for="exampleInputPassword1" class="form-label">Shirt Half Sleeve</label>
                                        <input type="text" value={inpval.shirthalfsleeve} onChange={setdata} name='shirthalfsleeve' class="form-control" id="exampleInputPassword1" />
                                    </div>
                                    <div class="mb-3 col-lg-6 col-md-6 col-12">
                                        <label for="exampleInputPassword1" class="form-label">Shirt Sleeve Circumference</label>
                                        <input type="text" value={inpval.shirtsleevecircum} onChange={setdata} name='shirtsleevecircum' class="form-control" id="exampleInputPassword1" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Changes Made */}
                        {/* Changes Made Pant */}
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="headingTwo">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                    Pant
                                </button>
                            </h2>
                            <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    <div class="mb-3 col-lg-12 col-md-12 col-12">
                                        <label for="exampleInputPassword1" class="form-label">Pant Description</label>
                                        <textarea name="pantdesc" value={inpval.pantdesc} onChange={setdata} className="form-control" id="" cols="30" row="5"></textarea>
                                    </div>
                                    <div class="mb-3 col-lg-6 col-md-6 col-12">
                                        <label for="exampleInputPassword1" class="form-label">Pant Length</label>
                                        <input type="text" value={inpval.pantl} onChange={setdata} name='pantl' class="form-control" id="exampleInputPassword1" />
                                    </div>
                                    <div class="mb-3 col-lg-6 col-md-6 col-12">
                                        <label for="exampleInputPassword1" class="form-label">Pant Waist</label>
                                        <input type="text" value={inpval.pantw} onChange={setdata} name='pantw' class="form-control" id="exampleInputPassword1" />
                                    </div>
                                    <div class="mb-3 col-lg-6 col-md-6 col-12">
                                        <label for="exampleInputPassword1" class="form-label">Pant Hib/Sit</label>
                                        <input type="text" value={inpval.panth} onChange={setdata} name='panth' class="form-control" id="exampleInputPassword1" />
                                    </div>
                                    <div class="mb-3 col-lg-6 col-md-6 col-12">
                                        <label for="exampleInputPassword1" class="form-label">Pant Circumference</label>
                                        <input type="text" value={inpval.pantcircum} onChange={setdata} name='pantcircum' class="form-control" id="exampleInputPassword1" />
                                    </div>
                                    <div class="mb-3 col-lg-6 col-md-6 col-12">
                                        <label for="exampleInputPassword1" class="form-label">Pant Fly</label>
                                        <input type="text" value={inpval.pantfly} onChange={setdata} name='pantfly' class="form-control" id="exampleInputPassword1" />
                                    </div>
                                    <div class="mb-3 col-lg-6 col-md-6 col-12">
                                        <label for="exampleInputPassword1" class="form-label">Pant Thigh</label>
                                        <input type="text" value={inpval.pantth} onChange={setdata} name='pantth' class="form-control" id="exampleInputPassword1" />
                                    </div>
                                    <div class="mb-3 col-lg-6 col-md-6 col-12">
                                        <label for="exampleInputPassword1" class="form-label">Pant Knee</label>
                                        <input type="text" value={inpval.pantkn} onChange={setdata} name='pantkn' class="form-control" id="exampleInputPassword1" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Changes Made */}
                        {/* Changes Made Kurta */}
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="headingThree">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                    Kurta
                                </button>
                            </h2>
                            <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    <div class="mb-3 col-lg-12 col-md-12 col-12">
                                        <label for="exampleInputPassword1" class="form-label">Kurta Description</label>
                                        <textarea name="kdesc" value={inpval.kdesc} onChange={setdata} className="form-control" id="" cols="30" row="5"></textarea>
                                    </div>
                                    <div class="mb-3 col-lg-6 col-md-6 col-12">
                                        <label for="exampleInputPassword1" class="form-label">Kurta Length</label>
                                        <input type="text" value={inpval.klength} onChange={setdata} name='klength' class="form-control" id="exampleInputPassword1" />
                                    </div>
                                    <div class="mb-3 col-lg-6 col-md-6 col-12">
                                        <label for="exampleInputPassword1" class="form-label">Kurta Shoulder</label>
                                        <input type="text" value={inpval.kshoulder} onChange={setdata} name='kshoulder' class="form-control" id="exampleInputPassword1" />
                                    </div>
                                    <div class="mb-3 col-lg-6 col-md-6 col-12">
                                        <label for="exampleInputPassword1" class="form-label">Kurta Sleeve</label>
                                        <input type="text" value={inpval.ksleeve} onChange={setdata} name='ksleeve' class="form-control" id="exampleInputPassword1" />
                                    </div>
                                    <div class="mb-3 col-lg-6 col-md-6 col-12">
                                        <label for="exampleInputPassword1" class="form-label">Kurta Half Sleeve</label>
                                        <input type="text" value={inpval.khalf} onChange={setdata} name='khalf' class="form-control" id="exampleInputPassword1" />
                                    </div>
                                    <div class="mb-3 col-lg-6 col-md-6 col-12">
                                        <label for="exampleInputPassword1" class="form-label">Kurta Chest</label>
                                        <input type="text" value={inpval.kchest} onChange={setdata} name='kchest' class="form-control" id="exampleInputPassword1" />
                                    </div>
                                    <div class="mb-3 col-lg-6 col-md-6 col-12">
                                        <label for="exampleInputPassword1" class="form-label">Kurta Waist</label>
                                        <input type="text" value={inpval.kwaist} onChange={setdata} name='kwaist' class="form-control" id="exampleInputPassword1" />
                                    </div>
                                    <div class="mb-3 col-lg-6 col-md-6 col-12">
                                        <label for="exampleInputPassword1" class="form-label">Kurta Neck</label>
                                        <input type="text" value={inpval.kneck} onChange={setdata} name='kneck' class="form-control" id="exampleInputPassword1" />
                                    </div>
                                    <div class="mb-3 col-lg-6 col-md-6 col-12">
                                        <label for="exampleInputPassword1" class="form-label">Kurta Circumference</label>
                                        <input type="text" value={inpval.kcircum} onChange={setdata} name='kcircum' class="form-control" id="exampleInputPassword1" />
                                    </div>
                                    <div class="mb-3 col-lg-6 col-md-6 col-12">
                                        <label for="exampleInputPassword1" class="form-label">Kurta Half Circum</label>
                                        <input type="text" value={inpval.khalfcircum} onChange={setdata} name='khalfcircum' class="form-control" id="exampleInputPassword1" />
                                    </div>
                                    <div class="mb-3 col-lg-6 col-md-6 col-12">
                                        <label for="exampleInputPassword1" class="form-label">Edge Length</label>
                                        <input type="text" value={inpval.ksedgel} onChange={setdata} name='ksedgel' class="form-control" id="exampleInputPassword1" />
                                    </div>
                                    <div class="mb-3 col-lg-6 col-md-6 col-12">
                                        <label for="exampleInputPassword1" class="form-label">Armol</label>
                                        <input type="text" value={inpval.ksarmol} onChange={setdata} name='ksarmol' class="form-control" id="exampleInputPassword1" />
                                    </div>
                                    <div class="mb-3 col-lg-6 col-md-6 col-12">
                                        <label for="exampleInputPassword1" class="form-label">Chest</label>
                                        <input type="text" value={inpval.kschest} onChange={setdata} name='kschest' class="form-control" id="exampleInputPassword1" />
                                    </div>
                                    <div class="mb-3 col-lg-6 col-md-6 col-12">
                                        <label for="exampleInputPassword1" class="form-label">Waist</label>
                                        <input type="text" value={inpval.kswaist} onChange={setdata} name='kswaist' class="form-control" id="exampleInputPassword1" />
                                    </div>
                                    <div class="mb-3 col-lg-6 col-md-6 col-12">
                                        <label for="exampleInputPassword1" class="form-label">Circum</label>
                                        <input type="text" value={inpval.kscircum} onChange={setdata} name='kscircum' class="form-control" id="exampleInputPassword1" />
                                    </div>
                                    <div class="mb-3 col-lg-6 col-md-6 col-12">
                                        <label for="exampleInputPassword1" class="form-label">Edge</label>
                                        <input type="text" value={inpval.ksedge} onChange={setdata} name='ksedge' class="form-control" id="exampleInputPassword1" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Changes Made */}
                        {/* Changes Made Sadri */}
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="headingFour">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                    Sadri
                                </button>
                            </h2>
                            <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    <div class="mb-3 col-lg-12 col-md-12 col-12">
                                        <label for="exampleInputPassword1" class="form-label">Sadri Description</label>
                                        <textarea name="sadridesc" value={inpval.sadridesc} onChange={setdata} className="form-control" id="" cols="30" row="5"></textarea>
                                    </div>
                                    <div class="mb-3 col-lg-6 col-md-6 col-12">
                                        <label for="exampleInputPassword1" class="form-label">Sadri Length</label>
                                        <input type="text" value={inpval.sadrilength} onChange={setdata} name='sadrilength' class="form-control" id="exampleInputPassword1" />
                                    </div>
                                    <div class="mb-3 col-lg-6 col-md-6 col-12">
                                        <label for="exampleInputPassword1" class="form-label">Sadri Cross</label>
                                        <input type="text" value={inpval.sadricross} onChange={setdata} name='sadricross' class="form-control" id="exampleInputPassword1" />
                                    </div>
                                    <div class="mb-3 col-lg-6 col-md-6 col-12">
                                        <label for="exampleInputPassword1" class="form-label">Sadri Back</label>
                                        <input type="text" value={inpval.sadriback} onChange={setdata} name='sadriback' class="form-control" id="exampleInputPassword1" />
                                    </div>
                                    <div class="mb-3 col-lg-6 col-md-6 col-12">
                                        <label for="exampleInputPassword1" class="form-label">Sadri Chest</label>
                                        <input type="text" value={inpval.sadrichest} onChange={setdata} name='sadrichest' class="form-control" id="exampleInputPassword1" />
                                    </div>
                                    <div class="mb-3 col-lg-6 col-md-6 col-12">
                                        <label for="exampleInputPassword1" class="form-label">Sadri Waist</label>
                                        <input type="text" value={inpval.sadriwaist} onChange={setdata} name='sadriwaist' class="form-control" id="exampleInputPassword1" />
                                    </div>
                                    <div class="mb-3 col-lg-6 col-md-6 col-12">
                                        <label for="exampleInputPassword1" class="form-label">Sadri Neck</label>
                                        <input type="text" value={inpval.sadrineck} onChange={setdata} name='sadrineck' class="form-control" id="exampleInputPassword1" />
                                    </div>
                                    <div class="mb-3 col-lg-6 col-md-6 col-12">
                                        <label for="exampleInputPassword1" class="form-label">Sadri Hib/Seat</label>
                                        <input type="text" value={inpval.sadrihib} onChange={setdata} name='sadrihib' class="form-control" id="exampleInputPassword1" />
                                    </div>
                                    <div class="mb-3 col-lg-6 col-md-6 col-12">
                                        <label for="exampleInputPassword1" class="form-label">Sample Front Chest</label>
                                        <input type="text" value={inpval.sadrisfc} onChange={setdata} name='sadrisfc' class="form-control" id="exampleInputPassword1" />
                                    </div>
                                    <div class="mb-3 col-lg-6 col-md-6 col-12">
                                        <label for="exampleInputPassword1" class="form-label">Sample Front Waist</label>
                                        <input type="text" value={inpval.sadrisfw} onChange={setdata} name='sadrisfw' class="form-control" id="exampleInputPassword1" />
                                    </div>
                                    <div class="mb-3 col-lg-6 col-md-6 col-12">
                                        <label for="exampleInputPassword1" class="form-label">Sample Front Edge</label>
                                        <input type="text" value={inpval.sadrisfe} onChange={setdata} name='sadrisfe' class="form-control" id="exampleInputPassword1" />
                                    </div>
                                    <div class="mb-3 col-lg-6 col-md-6 col-12">
                                        <label for="exampleInputPassword1" class="form-label">Sample Back Chest</label>
                                        <input type="text" value={inpval.sadrisbc} onChange={setdata} name='sadrisbc' class="form-control" id="exampleInputPassword1" />
                                    </div>
                                    <div class="mb-3 col-lg-6 col-md-6 col-12">
                                        <label for="exampleInputPassword1" class="form-label">Sample Back Waist</label>
                                        <input type="text" value={inpval.sadrisbw} onChange={setdata} name='sadrisbw' class="form-control" id="exampleInputPassword1" />
                                    </div>
                                    <div class="mb-3 col-lg-6 col-md-6 col-12">
                                        <label for="exampleInputPassword1" class="form-label">Sample Back Edge</label>
                                        <input type="text" value={inpval.sadrisbe} onChange={setdata} name='sadrisbe' class="form-control" id="exampleInputPassword1" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Changes Made */}
                        {/* Changes Made Pyjama */}
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="headingFive">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                                    Pyjama
                                </button>
                            </h2>
                            <div id="collapseFive" class="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    <div class="mb-3 col-lg-12 col-md-12 col-12">
                                        <label for="exampleInputPassword1" class="form-label">Pyjama Description</label>
                                        <textarea name="pyjdesc" value={inpval.pyjdesc} onChange={setdata} className="form-control" id="" cols="30" row="5"></textarea>
                                    </div>
                                    <div class="mb-3 col-lg-6 col-md-6 col-12">
                                        <label for="exampleInputPassword1" class="form-label">Pyjama Length</label>
                                        <input type="text" value={inpval.pyjlength} onChange={setdata} name='pyjlength' class="form-control" id="exampleInputPassword1" />
                                    </div>
                                    <div class="mb-3 col-lg-6 col-md-6 col-12">
                                        <label for="exampleInputPassword1" class="form-label">Pyjama Edge Circumference</label>
                                        <input type="text" value={inpval.pyjedgecir} onChange={setdata} name='pyjedgecir' class="form-control" id="exampleInputPassword1" />
                                    </div>
                                    <div class="mb-3 col-lg-6 col-md-6 col-12">
                                        <label for="exampleInputPassword1" class="form-label">Pyjama Half Circle</label>
                                        <input type="text" value={inpval.pyjhalfcirc} onChange={setdata} name='pyjhalfcirc' class="form-control" id="exampleInputPassword1" />
                                    </div>
                                    <div class="mb-3 col-lg-6 col-md-6 col-12">
                                        <label for="exampleInputPassword1" class="form-label">Pyjama Fly</label>
                                        <input type="text" value={inpval.pyjfly} onChange={setdata} name='pyjfly' class="form-control" id="exampleInputPassword1" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Changes Made */}
                        {/* Changes Made Pyjama Churidaar */}
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="headingSix">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                                    Pyjama Churidaar
                                </button>
                            </h2>
                            <div id="collapseSix" class="accordion-collapse collapse" aria-labelledby="headingSix" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    <div class="mb-3 col-lg-12 col-md-12 col-12">
                                        <label for="exampleInputPassword1" class="form-label">Pyjama Churidaar Description</label>
                                        <textarea name="pyjchuridesc" value={inpval.pyjchuridesc} onChange={setdata} className="form-control" id="" cols="30" row="5"></textarea>
                                    </div>
                                    <div class="mb-3 col-lg-6 col-md-6 col-12">
                                        <label for="exampleInputPassword1" class="form-label">Pyjama Churidaar Half Length</label>
                                        <input type="text" value={inpval.pyjchurihalflength} onChange={setdata} name='pyjchurihalflength' class="form-control" id="exampleInputPassword1" />
                                    </div>
                                    <div class="mb-3 col-lg-6 col-md-6 col-12">
                                        <label for="exampleInputPassword1" class="form-label">Pyjama Churidaar Length</label>
                                        <input type="text" value={inpval.pyjchurilength} onChange={setdata} name='pyjchurilength' class="form-control" id="exampleInputPassword1" />
                                    </div>
                                    <div class="mb-3 col-lg-6 col-md-6 col-12">
                                        <label for="exampleInputPassword1" class="form-label">Pyjama Churidaar Knee</label>
                                        <input type="text" value={inpval.pyjchuriknee} onChange={setdata} name='pyjchuriknee' class="form-control" id="exampleInputPassword1" />
                                    </div>
                                    <div class="mb-3 col-lg-6 col-md-6 col-12">
                                        <label for="exampleInputPassword1" class="form-label">Pyjama Churidaar Heel</label>
                                        <input type="text" value={inpval.pyjchuriheel} onChange={setdata} name='pyjchuriheel' class="form-control" id="exampleInputPassword1" />
                                    </div>
                                    <div class="mb-3 col-lg-6 col-md-6 col-12">
                                        <label for="exampleInputPassword1" class="form-label">Pyjama Churidaar Circumference</label>
                                        <input type="text" value={inpval.pyjchuricircum} onChange={setdata} name='pyjchuricircum' class="form-control" id="exampleInputPassword1" />
                                    </div>
                                    <div class="mb-3 col-lg-6 col-md-6 col-12">
                                        <label for="exampleInputPassword1" class="form-label">Pyjama Churidaar Fly</label>
                                        <input type="text" value={inpval.pyjchurifly} onChange={setdata} name='pyjchurifly' class="form-control" id="exampleInputPassword1" />
                                    </div>
                                    <div class="mb-3 col-lg-6 col-md-6 col-12">
                                        <label for="exampleInputPassword1" class="form-label">Pyjama Churidaar Half Circle</label>
                                        <input type="text" value={inpval.pyjchruihalfcircle} onChange={setdata} name='pyjchruihalfcircle' class="form-control" id="exampleInputPassword1" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Changes Made */}
                        {/* Changes Made Coat */}
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="headingSeven">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">
                                    Coat
                                </button>
                            </h2>
                            <div id="collapseSeven" class="accordion-collapse collapse" aria-labelledby="headingSeven" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    <div class="mb-3 col-lg-12 col-md-12 col-12">
                                        <label for="exampleInputPassword1" class="form-label">Coat Description</label>
                                        <textarea name="coatdesc" value={inpval.coatdesc} onChange={setdata} className="form-control" id="" cols="30" row="5"></textarea>
                                    </div>
                                    <div class="mb-3 col-lg-6 col-md-6 col-12">
                                        <label for="exampleInputPassword1" class="form-label">Coat Length</label>
                                        <input type="text" value={inpval.coatlength} onChange={setdata} name='coatlength' class="form-control" id="exampleInputPassword1" />
                                    </div>
                                    <div class="mb-3 col-lg-6 col-md-6 col-12">
                                        <label for="exampleInputPassword1" class="form-label">Coat Cross</label>
                                        <input type="text" value={inpval.coatcross} onChange={setdata} name='coatcross' class="form-control" id="exampleInputPassword1" />
                                    </div>
                                    <div class="mb-3 col-lg-6 col-md-6 col-12">
                                        <label for="exampleInputPassword1" class="form-label">Coat Back</label>
                                        <input type="text" value={inpval.coatback} onChange={setdata} name='coatback' class="form-control" id="exampleInputPassword1" />
                                    </div>
                                    <div class="mb-3 col-lg-6 col-md-6 col-12">
                                        <label for="exampleInputPassword1" class="form-label">Coat Shoulder</label>
                                        <input type="text" value={inpval.coatshoulder} onChange={setdata} name='coatshoulder' class="form-control" id="exampleInputPassword1" />
                                    </div>
                                    <div class="mb-3 col-lg-6 col-md-6 col-12">
                                        <label for="exampleInputPassword1" class="form-label">Coat Chest</label>
                                        <input type="text" value={inpval.coatchest} onChange={setdata} name='coatchest' class="form-control" id="exampleInputPassword1" />
                                    </div>
                                    <div class="mb-3 col-lg-6 col-md-6 col-12">
                                        <label for="exampleInputPassword1" class="form-label">Coat Waist</label>
                                        <input type="text" value={inpval.coatwaist} onChange={setdata} name='coatwaist' class="form-control" id="exampleInputPassword1" />
                                    </div>
                                    <div class="mb-3 col-lg-6 col-md-6 col-12">
                                        <label for="exampleInputPassword1" class="form-label">Coat Neck</label>
                                        <input type="text" value={inpval.coatneck} onChange={setdata} name='coatneck' class="form-control" id="exampleInputPassword1" />
                                    </div>
                                    <div class="mb-3 col-lg-6 col-md-6 col-12">
                                        <label for="exampleInputPassword1" class="form-label">Coat Hand Circum</label>
                                        <input type="text" value={inpval.coathandcircum} onChange={setdata} name='coathandcircum' class="form-control" id="exampleInputPassword1" />
                                    </div>
                                    <div class="mb-3 col-lg-6 col-md-6 col-12">
                                        <label for="exampleInputPassword1" class="form-label">Sample: Coat Front-Chest</label>
                                        <input type="text" value={inpval.coatfrontchest} onChange={setdata} name='coatfrontchest' class="form-control" id="exampleInputPassword1" />
                                    </div>
                                    <div class="mb-3 col-lg-6 col-md-6 col-12">
                                        <label for="exampleInputPassword1" class="form-label">Sample: Coat Front-Waist</label>
                                        <input type="text" value={inpval.coatfrontwaist} onChange={setdata} name='coatfrontwaist' class="form-control" id="exampleInputPassword1" />
                                    </div>
                                    <div class="mb-3 col-lg-6 col-md-6 col-12">
                                        <label for="exampleInputPassword1" class="form-label">Sample: Coat Front-Edge</label>
                                        <input type="text" value={inpval.coatfrontedge} onChange={setdata} name='coatfrontedge' class="form-control" id="exampleInputPassword1" />
                                    </div>
                                    <div class="mb-3 col-lg-6 col-md-6 col-12">
                                        <label for="exampleInputPassword1" class="form-label">Sample: Coat Back-Chest</label>
                                        <input type="text" value={inpval.coatbackchest} onChange={setdata} name='coatbackchest' class="form-control" id="exampleInputPassword1" />
                                    </div>
                                    <div class="mb-3 col-lg-6 col-md-6 col-12">
                                        <label for="exampleInputPassword1" class="form-label">Sample: Coat Back-Waist</label>
                                        <input type="text" value={inpval.coatbackwaist} onChange={setdata} name='coatbackwaist' class="form-control" id="exampleInputPassword1" />
                                    </div>
                                    <div class="mb-3 col-lg-6 col-md-6 col-12">
                                        <label for="exampleInputPassword1" class="form-label">Sample: Coat Back-Edge</label>
                                        <input type="text" value={inpval.coatbackedge} onChange={setdata} name='coatbackedge' class="form-control" id="exampleInputPassword1" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Changes Made */}
                    <div><br></br></div>
                    <button type="submit" onClick={updateuser} class="btn btn-primary">Submit</button>
                </div>
            </form>
        </div>
    )
}

export default Edit