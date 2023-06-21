import React from 'react';
import AddTarget from './AddTarget';
import TargetList from './TargetList';

const Home2 = (props) => {
    const { userId } = props;
    console.log(userId)

    return (
        <div>
            <h1 className="m-4" style={{ color: 'white' }}>
                Add Target To Achieve
            </h1>
            <h2>User ID: {userId}</h2>
            <AddTarget userId={userId} />
            <TargetList userId={userId} />
        </div>
    );
};

export default Home2;
