import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

export function PostJob(){


    const {id} = useParams();
    const [values, setValues] = useState({
        id: id,
        jobtype: '',
        location: '',
        email: '',
        payment: ''
    })
    useEffect(()=> {
        axios.get('https://startup.humdrumjobs.com/postjob/' + id)
        .then(res => {
            setValues({...values, jobtype: res.data.jobtype, location: res.data.location, email: res.data.email, payment: res.data.payment})
        })
        .catch(err => console.log(err))
    }, [])

    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        axios.put('https://startup.humdrumjobs.com/postjob/' + id, values)
        .then(res => {
            navigate('/');
        })
        .catch(err => console.log(err))
    }


    return (
        <div className='d-flex w-100 vh-100 justify-content-center align-items-center'>
            <div className='w-50 border bg-secondary text-white p-5'>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor='location'>Job type: </label>
                        <input type='text' name='jobtype' className='form-control' placeholder='Enter job type' 
                        value={values.jobtype} onChange={e => setValues({...values, jobtype: e.target.value})}></input>
                    </div>
                    <div>
                        <label htmlFor='location'>Location: </label>
                        <input type='text' name='location' className='form-control' placeholder='Enter location' 
                        value={values.location} onChange={e => setValues({...values, location: e.target.value})}></input>
                    </div>
                    <div>
                        <label htmlFor='location'>Email: </label>
                        <input type='email' name='email' className='form-control' placeholder='Enter email' 
                        value={values.email} onChange={e => setValues({...values, email: e.target.value})}></input>
                    </div>
                    <div>
                        <label htmlFor='location'>Payment: </label>
                        <input type='text' name='payment' className='form-control' placeholder='Enter payment' 
                        value={values.payment} onChange={e => setValues({...values, payment: e.target.value})}></input>
                    </div><br/>
                    <button className='btn btn-info'>Update</button>
                </form>
            </div>
        </div>
    )

}

export default PostJob