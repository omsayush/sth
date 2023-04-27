import React, { useEffect, useState, useContext } from 'react';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import CreateIcon from '@mui/icons-material/Create';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { NavLink } from 'react-router-dom';
import { adddata, deldata } from './context/ContextProvider';
import { updatedata } from './context/ContextProvider';
import { useAuth0 } from "@auth0/auth0-react";// logout


function Home() {

    const { logout, user, isAuthenticated } = useAuth0();// logout

    const [getuserdata, setUserdata] = useState([]);
    console.log(getuserdata);

    const [filterdata, setFilterdata] = useState([]); // search functionality
    const [query, setQuery] = useState(''); // search functionality



    const { udata, setUdata } = useContext(adddata);
    const { updata, setUPdata } = useContext(updatedata);
    const { dltdata, setDLTdata } = useContext(deldata);

    // const {query, setQuery} = useState("");
    

    const getdata = async (e) => {


        const res = await fetch("/getdata", {
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
            setFilterdata(data) // search functionality
        }
    }

    useEffect(() => {
        getdata();
    }, [])

    const handleSearch=(event)=>{ // search functionality
        const getSearch = event.target.value;
        
        console.log(getSearch);

        if(getSearch.length > 0)
        {
            const searchdata = getuserdata.filter((item)=> item.name.toLowerCase().includes(getSearch));
            setUserdata(searchdata);
        }else{
            setUserdata(filterdata);
        }
        setQuery(getSearch);
    }

    const deleteuser = async (id) => {

        const res2 = await fetch(`/deleteuser/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        });

        const deletedata = await res2.json();
        console.log(deletedata);

        if (res2.status === 422 || !deletedata) {
            console.log("error");
        } else {
            console.log("user deleted");
            setDLTdata(deletedata);
            getdata();
        }
    }

    return (

        <>

            {
                udata ?
                    <>
                        <div class="alert alert-success alert-dismissible fade show" role="alert">
                            <strong>{udata.name}</strong> added successfully!
                            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                        </div>
                    </> : ""
            }
            {
                updata ?
                    <>
                        <div class="alert alert-success alert-dismissible fade show" role="alert">
                            <strong>{updata.name}</strong> updated successfully!
                            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                        </div>
                    </> : ""
            }
            {
                dltdata ?
                    <>
                        <div class="alert alert-danger alert-dismissible fade show" role="alert">
                            <strong>{dltdata.name}</strong> deleted successfully!
                            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                        </div>
                    </> : ""
            }


            <div className='mt-5'>
                <div className='container'>
                    <div style={{ display: "flex" }}>
                        <div className='add_btn mt-1 mb-3' style={{ margin: "5px" }}>
                            <NavLink to="/register" className='btn btn-primary'>Add Data</NavLink>

                        </div>

                        <div className='add_btn mt-1 mb-3'>
                            <form className="d-flex" role="search">
                                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" value={query} onChange={(e)=>handleSearch(e)} />
                                <button  className="btn btn-outline-success" type="submit">Search</button>

                            </form>
                        </div>

                        <div className='add_btn mt-1 mb-3'>
                            <button className='btn btn-danger' onClick={() => logout({ returnTo: 'http://localhost:3000/login' })} style={{ marginBottom: "5px", marginLeft: "10px" }}>
                                Log Out
                            </button>
                        </div>

                        {/* <div>
                            {isAuthenticated && <p>{user.name}</p>}
                        </div> */}

                    </div>

               

                    <table class="table">
                        <thead>
                            <tr className='table-dark'>
                                <th scope="col">Id</th>
                                <th scope="col">Client Name</th>
                                <th scope="col">Email</th>
                                <th scope="col">Job Tile</th>
                                <th scope="col">Contact Number</th>
                                <th scope="col"></th>

                            </tr>
                        </thead>
                        <tbody>

                            {
                                getuserdata.map((element, id) => { 
                                    return (
                                        <>
                                            <tr>
                                                <th scope="row">{id + 1}</th>
                                                <td>{element.name}</td>
                                                <td>{element.email}</td>
                                                <td>{element.work}</td>
                                                <td>{element.mobile}</td>
                                                <td className='d-flex justify-content-between'>
                                                    <NavLink to={`view/${element._id}`}> <button className='btn btn-success'><RemoveRedEyeIcon /></button> </NavLink>
                                                    <NavLink to={`edit/${element._id}`}><button style={{marginLeft: "3px"}} className='btn btn-primary'><CreateIcon /></button></NavLink>
                                                    <button style={{marginLeft: "3px"}} className='btn btn-danger' onClick={() => deleteuser(element._id)}><DeleteOutlineIcon /></button>
                                                </td>
                                            </tr>

                                        </>
                                    )
                                })
                            }

                    

                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default Home