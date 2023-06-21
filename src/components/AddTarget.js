import axios from 'axios'
import React, { useEffect, useState, useRef } from 'react'
import './addtarget.css'


const AddTarget = ({ userId }) => {

    const [targetTitle, setTargetTitle] = useState('')
    const [targetTime, setTargetTime] = useState('')
    const usetheref = useRef()
    const usetheref2 = useRef()



    const handleFormSubmit = (e) => {
        e.preventDefault();
        if (targetTitle.length === 0 && targetTime.length === 0) {
            return

        }
        const targetData = {
            targetTitle: targetTitle,
            targetTime: targetTime,
            user_id: userId

        };

        axios.post('http://localhost/todolist-api/postapi.php', targetData)
            .then(res => {
                console.log(res.data);


                usetheref2.current.focus()
                usetheref2.current.value = ''
                usetheref.current.value = ''
            })
            .catch(error => {
                console.error('An error occurred while making the request:', error);
            });
    };

    return (
        <div>
            <div className='w-100 mb-5 my-5' style={{ borderRadius: '10px', overflow: 'hidden', marginInline: 'auto' }}>
                <h1 className='mb-2' style={{ color: 'white' }}>Add Goal To Achieve</h1>
                <form onSubmit={handleFormSubmit}>
                    <input style={{ borderRadius: '10px 0px 0px 10px', border: 'solid 3px white', width: '50%' }} type='text' name='targetTitle' ref={usetheref2} onChange={(e) => { setTargetTitle(e.target.value) }} required />
                    {/* <input style={{ borderRadius: '10px' }} type='text' name='targetTime' ref={usetheref} onChange={(e) => { setTargetTime(e.target.value) }} required /> */}
                    <button className='addtbtn' style={{ borderRadius: '0 10px 10px 0', backgroundColor: '#a18aff', color: 'white', border: 'solid 3px white' }} type='submit'><b>Add Goal</b></button>

                </form>
            </div>
        </div>
    )
}

export default AddTarget