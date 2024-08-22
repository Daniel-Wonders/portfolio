import React from "react";

export default function Contact(){

    function downloadResume(){
        console.log("download")
        const link = document.createElement('a');
        link.href = process.env.PUBLIC_URL+"/resume.pdf"; // Replace with the path to your PDF file
        link.download = 'AllocoLautaroResume.pdf'; // Replace with the desired file name
        link.click();
    }

    window.scrollTo({top:0,behavior:"smooth"});

    return (
        <div id="contactHero">
            <div id="contactText">
                <h1>
                    Thanks for visiting my website!
                </h1>
                <h3>
                    Hope you've liked what you've seen
                </h3>
                <h4>
                    If you're interested in working together be sure to contact me
                </h4>
            </div>
            <div className="btnContainer3">
                <a rel="noreferrer" target="_blank" href="https://www.linkedin.com/in/lautaro-alloco/" className="btns">LinkedIn</a>
                <a rel="noreferrer" target="_blank" href="https://github.com/Daniel-Wonders" className="btns btns2">GitHub</a>
                <a rel="noreferrer" href="mailto:lautaroalloco@gmail.com?subject=Job%20Proposal&body=Hello%20Lautaro,%20I'd%20like%20to%20work%20with%20you!" target="_blank" className="btns">Email me</a>
                <button onClick={downloadResume} className="btns btns2">
                        Download Resume
                </button>
            </div>

        </div>
    )
}