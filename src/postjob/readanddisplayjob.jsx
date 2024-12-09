import React from 'react'
import jobs from './readanddisplayjob'
import 'bootstrap/dist/css/bootstrap.min.css'

export function ReadAndDisplayJob() {
    return (
        <div className='d-flex'>
            {
                jobs.map((jobs, i) => (
                    <div className='border m-2' key={i}>
                        <h1>{jobs.jobtype}</h1>
                        <p>{jobs.location}</p>
                        <p>{jobs.payment}</p>
                        <p>{jobs.email}</p>
                        <p>{jobs.notes}</p>
                    </div>
                ))
            }
        </div>
    )
}
export default ReadAndDisplayJob