import React, { useState } from 'react'
import AddGoal from './AddGoal'
import GoalsList from './GoalsList'


const Home = () => {
    const [goals, setGoals] = useState([])
    const onNewGoal = ({ goalTime, goalTitle }) => {
        setGoals((oldGoals) => [...oldGoals, { goalTime: goalTime, goalTitle: goalTitle, id: oldGoals.length + 1 }])
    }

    return (
        <div>Home
            <AddGoal onNewGoal={onNewGoal} />
            <GoalsList goals={goals} />
        </div>
    )
}

export default Home