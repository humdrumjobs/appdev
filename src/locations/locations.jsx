import React from 'react';
import './locations.css';

export function Locations() {
  return (
        <div>
            <h1>Job Opportunities by Location</h1>

            <div className="locations">
                <div className="location">
                    <h2>Provo, Utah</h2>
                    <p>Explore job openings in Provo, Utah.</p>
                    <a onClick={() => navigate('/locprovo')}>View Jobs in Provo</a>
                </div>
                <div className="location">
                    <h2>Salt Lake City, Utah</h2>
                    <p>Find job opportunities in Salt Lake City.</p>
                    <a onClick={() => navigate('/locsaltlakecity')}>View Jobs in Salt Lake City</a>
                </div>
                <div className="location">
                    <h2>Layton, Utah</h2>
                    <p>Search for positions available in Layton, Utah.</p>
                    <a onClick={() => navigate('/loclayton')}>View Jobs in Layton</a>
                </div>
            
                <div className="location">
                    <h2>Ogden, Utah</h2>
                    <p>Find employment opportunities in Ogden, Utah.</p>
                    <a onClick={() => navigate('/locogden')}>View Jobs in Ogden</a>
                </div>

                <div className="location">
                    <h2>St. George, Utah</h2>
                    <p>Check job listings for St. George, Utah.</p>
                    <a onClick={() => navigate('/locstgeorge')}>View Jobs in St. George</a>
                </div>
            
            </div>
                


            <footer>
                <div className="wrapper">
                <div>
                    <div className="icon">
                        <header>
                            Questions? Contact us at:
                        </header>
                        <p> +1 (555)555-5555</p>
                    </div>
                </div>
                </div>
            </footer>
        </div>
  );
}