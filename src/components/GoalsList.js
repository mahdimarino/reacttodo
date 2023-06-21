import React, { useState } from 'react'

const GoalsList = ({ goals }) => {
    return (
        <div>GoalsList
            {goals.map((goal) => {
                return (
                    <div style={{ borderRadius: 5, width: '70%', padding: 3, marginBottom: '1rem', backgroundColor: 'blue', marginInline: 'auto', color: 'white' }} key={goal.id}>{goal.goalTitle}-{goal.id}--{goal.goalTime}</div>
                )
            })}
        </div>
    )
}

export default GoalsList