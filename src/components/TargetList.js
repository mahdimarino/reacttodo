import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faBars } from '@fortawesome/free-solid-svg-icons';
import { NavLink, useParams } from 'react-router-dom';
import AddTarget from './AddTarget';
import { Container, Row, Col } from 'react-bootstrap';
import SideBar from './SideBar';
import './test.css'





const TargetList = () => {
    const { userId } = useParams();
    const [targets, setTargets] = useState([])
    const [isSidebarOpen, setSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setSidebarOpen(!isSidebarOpen);
    };




    useEffect(() => {
        // Fetch user-specific goals from the database
        // You can use a library like axios or fetch to make API requests

        const fetchUserGoals = async () => {
            axios.get(`http://localhost/todolist-api/listbyidapi.php?userId=${userId}`)
                .then((res) => {
                    setTargets(res.data.reverse());
                })
                .catch((error) => {
                    console.error('An error occurred while fetching targets:', error);
                });
        };

        fetchUserGoals();
    }, [targets]);




    /*  useEffect(() => {
         fetchTargets();
     }, [targets]);
 
     const fetchTargets = () => {
         axios.get(`http://localhost/todolist-api/listbyidapi.php?userId=${userId}`)
             .then((res) => {
                 setTargets(res.data.reverse());
             })
             .catch((error) => {
                 console.error('An error occurred while fetching targets:', error);
             });
     };
 
     const handelDelete = (targetId) => {
         axios.post(`http://localhost/todolist-api/targetbyidapi.php?id=${targetId}`, targets)
             .then(() => {
                 fetchTargets();
             })
             .catch((error) => {
                 console.error('An error occurred while deleting the target:', error);
             });
     }; */
    return (


        <Row fluid className='h-100 w-100 overflow-y-hidden'>
            {/* <Col xl={2} xs={0} className={`bg-white sidebar ${isSidebarOpen ? 'open' : ''}  `}   ><SideBar /></Col> */}
            <Col xs={12} xl={12} className={`h-100 overflow-scroll overflow-x-hidden  `}>
                {/* <div className="toggle-button mr-auto" onClick={toggleSidebar}>
                    <FontAwesomeIcon style={{ float: 'left' }} icon={faBars} />
                </div> */}

                <AddTarget userId={userId} />

                <div className=' h-100'>
                    {targets.map(target =>
                        <div style={{ borderRadius: 5, width: '70%', padding: 5, marginBottom: '1rem', backgroundColor: 'white', marginInline: 'auto', color: 'black' }} key={target.id}>
                            <span> {target.targetTitle}</span>
                            <span> {target.targetTime}</span>
                            <span style={{ float: 'right' }} className='h-100'>
                                <p1 type="button" ><FontAwesomeIcon icon={faTrash} style={{ color: "#f90101", }} /></p1>
                            </span>
                        </div>)}
                    <div><NavLink to='/SingIN' ActiveClassName='a'><b>Log Out</b></NavLink></div>
                </div>

            </Col>

        </ Row>
    )
}

export default TargetList