import React from 'react';
import './jobofferings.css';

export function JobOfferings() {
  return (
    <div>

        <h1>Job Offerings</h1>

        <div class="job-listing">
            <div class="job-info">
                <h2 class="job-title">Weeding</h2>
                <img height="200" src="weeding.jpg" alt="Weeding"></img>
                <p class="job-summary">I need the weeds in my backyard pulled. I will pay $25 to get it done, should take about 1.5 hours.</p>
                <a href="job-details1.html" class="details-link">More Details</a>
            </div>
        </div>

        <div class="job-listing">
            <div class="job-info">
                <h2 class="job-title">Sanding doors of house</h2>
                <img height="200" src="sanding.jpg" alt="Sanding Doors"></img>
                <p class="job-summary">I need to repaint my house, but need the doors sanded first. Paying $50.</p>
                <a href="job-details2.html" class="details-link">More Details</a>
            </div>
        </div>

        <div class="job-listing">
            <div class="job-info">
                <h2 class="job-title">Lawn mowing</h2>
                <img height="200" src="lawnmowing.jpg" alt="Lawn Mowing"></img>
                <p class="job-summary">I live in South Provo, need my lawn mowed for $20.</p>
                <a href="job-details3.html" class="details-link">More Details</a>
            </div>
        </div>

        <footer>
            <div class="wrapper">
                <p>Questions? Contact us at: +1 (555)555-5555</p>
            </div>
        </footer>
</div>
  );
}