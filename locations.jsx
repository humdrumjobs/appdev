import React from 'react';
import useNavigate from 'react-router-dom';

export function loclayton() {
  return (

<div>
    <title>Job Locations - Humdrum Jobs</title>
    <body>
        {/* <header class="main-header">
            <nav id='nav-bar'>
                <ul class="nav-line">  
                    <span class="nav-item"><li><a class='nav-link' onClick={() => navigate('/about')}><strong>About</strong></a></li></span>
                    <span class="nav-item"><li><a class='nav-link' onClick={() => navigate('/home')}><strong>Home</strong></a></li></span>
                    <span class="nav-item"><li><a class='nav-link' onClick={() => navigate('/jobofferings')}><strong>Job Offerings</strong></a></li></span>
                    <span class="nav-item"><li><a class='nav-link' onClick={() => navigate('/locations')}><strong>Locations</strong></a></li></span>
                </ul>
            </nav>
        </header> */}

        <h1>Job Opportunities by Location</h1>

        <div class="locations">
            <div class="location">
                <h2>Provo, Utah</h2>
                <p>Explore job openings in Provo, Utah.</p>
                <a href="locprovo.html">View Jobs in Provo</a>
            </div>
            <div class="location">
                <h2>Salt Lake City, Utah</h2>
                <p>Find job opportunities in Salt Lake City.</p>
                <a href="locsaltlakecity.html">View Jobs in Salt Lake City</a>
            </div>
            <div class="location">
                <h2>Layton, Utah</h2>
                <p>Search for positions available in Layton, Utah.</p>
                <a href="loclayton.html">View Jobs in Layton</a>
            </div>
        
            <div class="location">
                <h2>Ogden, Utah</h2>
                <p>Find employment opportunities in Ogden, Utah.</p>
                <a href="locogden.html">View Jobs in Ogden</a>
            </div>

            <div class="location">
                <h2>St. George, Utah</h2>
                <p>Check job listings for St. George, Utah.</p>
                <a href="locstgeorge.html">View Jobs in St. George</a>
            </div>
        
        </div>
            
        </body>


        <footer>
            <div class="wrapper">
            <div>
                <div class="icon">
                    <header>
                        Questions? Contact us at:
                    </header>
                    <p> +1 (555)555-5555</p>
                </div>
            </div>
            </div>
        </footer>

</div>
  );}
