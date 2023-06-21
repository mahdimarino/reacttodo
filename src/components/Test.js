import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import './test.css'
import { Col, Row } from 'react-bootstrap';
const Test = () => {
    const [isSidebarOpen, setSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setSidebarOpen(!isSidebarOpen);
    };

    return (
        <Row>
            <Col>
                <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>

                    {/* Rest of your sidebar content */}
                </div>
            </Col>
            <Col>

                <div className="toggle-button" onClick={toggleSidebar}>
                    <FontAwesomeIcon icon={faBars} />
                </div>


            </Col>
        </Row>
    );
};

export default Test;