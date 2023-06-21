import React from 'react'
import { NavLink } from 'react-router-dom'
import './sidebar.css'
import { Col } from 'react-bootstrap'


const SideBar = () => {
    return (
        <div >
            <div style={{ height: '20%', width: '50%' }} className='pt-3 w-100 picdiv pb-3'>
                <img className='profilpic'
                    style={{ height: 100, width: 100 }}
                    src='https://images.idgesg.net/images/article/2019/05/cso_best_security_software_best_ideas_best_technology_lightbulb_on_horizon_of_circuit_board_landscape_with_abstract_digital_connective_technology_atmosphere_ideas_innovation_creativity_by_peshkov_gettyimages-965785212_3x2_2400x1600-100797318-large.jpg?auto=webp&quality=85,70'
                    alt="car"
                />
            </div>

            <Col className='mt-3'>
                <NavLink to='/SingIN' ActiveClassName='a'><div className='p-2 link hoverd' >Log Out</div></NavLink>
                <NavLink to='/SingUp' ActiveClassName='a'><div className='p-2 link hoverd' >SingUp</div></NavLink>
                <NavLink to='/SingIN' ActiveClassName='a'><div className='p-2 link hoverd' >SingIN</div></NavLink></Col>
        </div>
    )
}

export default SideBar