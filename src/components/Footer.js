import React from "react";
import octocat from '../images/octocat.png';
import linkedIn from '../images/linkedin-103.png';

export default function Footer() {
    return(
        <div className="row">
                <a href="https://github.com/GavPO" target={"_blank"}><img src={octocat}/></a>
                <a href="https://www.linkedin.com/in/gavin-o-254622240/" target={"_blank"}><img src={linkedIn}/></a>
        </div>
    )
}