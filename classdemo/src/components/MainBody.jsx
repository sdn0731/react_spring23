// create a functional component with hooks 
import React, { useState } from 'react';
import Navigation from "./Navigation";

function MainBody() {
    const [name, setName] = useState('');

    function handleChange(e) {
        setName(e.target.value);
    }

    return(
        <div class="left">
            <h2 id="education">EDUCATION</h2>
            <h4>Columbus State University</h4>
            <ul>
                <li>Web Development Certificate</li>
            </ul>
            <h4>Georgia Southern University (Armstrong Campus)</h4>
            <ul>
                <li>BA in English/Professional Communications</li>
                <li>Focus: Technical Writing</li>
            </ul>
            <h4>Pacelli High School</h4>
            <ul>
                <li>High School Diploma</li>
            </ul>
            <h2 id="experience">EXPERIENCE</h2>
            <h4>IHOP - Server (June-Sept 2021)</h4>
            <ul>
                <li>Addressed customer concerns with practical solutions</li>
                <li>Routinely balanced multiple tasks simultaneously</li>
                <li>Trained in restaurant POS systems</li>
            </ul>
            <h4>Target - Guest Advocate (Aug 2020-July 2021)</h4>
            <ul>
                <li>Assisted guests with technology issues (ex: mobile app, checkout, and returns)</li>
                <li>Enrolled guests in the store's credit and debit card programs</li>
                <li>Collaborated with coworkers to ensure guest satisfaction</li>
            </ul>
            <h4>Electric Lemonade - Client Liaison (Jan-June 2020)</h4>
            <ul>
                <li>Translated complex topics into easy to digest website pages</li>
                <li>Worked collaboratively to keep client websites updated</li>
                <li>Identified clients' needs by conducting interviews</li>
            </ul>
            <h2 id="skills">SKILLS</h2>
            <ul>
                <li>Fluent in both Mac and Windows OS</li>
                <li>Experienced in the following languages:</li>
                <ul>
                    <li>Java, Javascript, HTML, CSS, SQL, and some Python</li>
                </ul>
                <li>Experienced in the following programs:</li>
                <ul>
                    <li>GitHub, GitPod, Eclipse, Replit, and others</li>
                </ul>
                <li>For examples of my work visit my <a class="link-secondary" href="https://github.com/sdn0731">GitHub</a> account!</li>
            </ul>
        </div>
    )
}

export default MainBody