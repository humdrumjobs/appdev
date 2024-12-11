import React, { useEffect, useState } from 'react';
import { Container, Typography, Card, CardContent } from '@material-ui/core';


export function JobOfferings() {
    const [jobOffers, setJobOffers] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Fetch data from the API
        fetch('https://startup.humdrumjobs.com/notes')
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Failed to fetch job offerings');
                }
                return response.json();
            })
            .then((data) => setJobOffers(data))
            .catch((error) => setError(error.message));
    }, []);

    return (
        <Container>
            <Typography variant="h4" gutterBottom>
                Job Offerings
            </Typography>
            {error && <Typography color="error">{error}</Typography>}
            {jobOffers.length === 0 && !error ? (
                <Typography>No job offerings available.</Typography>
            ) : (
                jobOffers.map((job, index) => (
                    <Card key={index} style={{ marginBottom: '16px' }}>
                        <CardContent>
                            <Typography variant="h6">Job Type: {job.jobtype}</Typography>
                            <Typography>Location: {job.location}</Typography>
                            <Typography>Email: {job.email}</Typography>
                            <Typography>Payment: {job.payment}</Typography>
                            <Typography>Notes: {job.notes}</Typography>
                        </CardContent>
                    </Card>
                ))
            )}
        </Container>
    );
}


// import React, { Component } from 'react';
// import { PostJobs } from './jobofferings';

// import './jobofferings.css';

// export function JobOfferings() {
//   return (

//     class PostJobs extends Component{
//         render () {
//             return (
//                 <div>

//         <h1>Job Offerings</h1>

//         <div className="job-listing">
//             <div className="job-info">
//                 <h2 className="job-title">Weeding</h2>
//                 <img height="200" src="weeding.jpg" alt="Weeding"></img>
//                 <p class="job-summary">I need the weeds in my backyard pulled. I will pay $25 to get it done, should take about 1.5 hours.</p>
//                 <a href="job-details1.html" className="details-link">More Details</a>
//             </div>
//         </div>

//         <div className="job-listing">
//             <div className="job-info">
//                 <h2 className="job-title">Sanding doors of house</h2>
//                 <img height="200" src="sanding.jpg" alt="Sanding Doors"></img>
//                 <p class="job-summary">I need to repaint my house, but need the doors sanded first. Paying $50.</p>
//                 <a href="job-details2.html" className="details-link">More Details</a>
//             </div>
//         </div>

//         <div className="job-listing">
//             <div className="job-info">
//                 <h2 className="job-title">Lawn mowing</h2>
//                 <img height="200" src="lawnmowing.jpg" alt="Lawn Mowing"></img>
//                 <p className="job-summary">I live in South Provo, need my lawn mowed for $20.</p>
//                 <a href="job-details3.html" className="details-link">More Details</a>
//             </div>
//         </div>

//         <footer>
//             <div className="wrapper">
//                 <p>Questions? Contact us at: +1 (555)555-5555</p>
//             </div>
//         </footer>
//         </div>
//             )
//         }
//     }
//   );
// }