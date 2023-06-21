import React, { useState } from 'react'

const AddGoal = ({ onNewGoal }) => {
    const [goalTitle, setGoalTitle] = useState('')
    const [goalTime, setGoalTime] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault()
        if (goalTime.length === 0 && goalTitle.length === 0) {
            return
        }
        onNewGoal({ goalTime, goalTitle })
    }
    return (
        <div>AddGoal
            <form onSubmit={handleSubmit}>
                <input type='text' name='goalTitle' onChange={(e) => { setGoalTitle(e.target.value) }} />
                <input type='text' name='goalTime' onChange={(e) => { setGoalTime(e.target.value) }} />
                <button type='submit'>Add Goal</button>
            </form>
        </div>
    )
}

export default AddGoal