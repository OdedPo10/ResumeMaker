import '../index.css'
import React, { Component } from 'react';
import avatar from '../images/avatar.jpeg';
import jsPDF from 'jspdf';
import $ from 'jquery'
import jQuery from 'jquery';
import femaleAvatar from '../images/femaleAvatar.png';
import { useRef } from "react";
import html2canvas from 'html2canvas';






const FinnalDisplay = (props) => {
    ///////////////////////////////////////////////////
    // document.getElementsByClassName(".page").style.width = "200px";
    // document.:getElementsByClassName(".page").style.height = "200px";

    const inputRef = useRef(null);
    const printDocument = () => {
        window.scrollTo(0, 0)
        html2canvas(inputRef.current).then((canvas) => {
            // canvas.width = 1920 / 2;
            // canvas.height = 1280;
            const imgData = canvas.toDataURL("image/png");
            const pdf = new jsPDF();
            pdf.addImage(imgData, "JPEG", 0, 0);
            pdf.save("download.pdf");
        });
    };





    let printHtml2 = () => {
        $("#book").printArea({ mode: 'popup', popClose: true });
        // let temp = document.getElementById("book");

        // const doc = new jsPDF("portrait", "pt", 'a4');
        // doc.html({
        //     temp,
        //     callback: function (doc) {
        //         doc.save("output.pdf");
        //     },
        //     x: 10,
        //     y: 10
        // })

    }



    //////////////////////////////////////////////////
    const { personalInfo, about, expiriense, educaition, techs, tamplate } = props.resume
    let pickedTamplate = 'subpage' + tamplate;
    console.log(pickedTamplate);

    let fullName = personalInfo.firstName + ' ' + personalInfo.lastName;
    let bestLevel = { width: techs.best.level + '%' }
    let bestTechs = techs.best.techs.map(t => {
        return (
            <div className="mb-2"><span className="skillH">{t.value}</span>
                <div className="progress my-1">
                    <div className="progress-bar bg-success" style={bestLevel}></div>
                </div>
            </div>

        )
    });
    let seconedLevel = { width: techs.seconed.level + '%' };

    let seconedTechs = techs.seconed.techs.map(t => {
        return (
            <div className="mb-2"><span className="skillH">{t.value}</span>
                <div className="progress my-1">
                    <div className="progress-bar bg-primary" style={seconedLevel}></div>
                </div>
            </div>

        )
    });

    let restTechs = '';
    for (let i = 0; i < techs.rest.length; i++) {
        restTechs = restTechs + ' ' + techs.rest[i].value;
    }

    let languages = '';
    for (let i = 0; i < personalInfo.Language.length; i++) {
        let x = ' ';
        let y = ','
        if (languages == '')
            languages = languages + x + personalInfo.Language[i];
        else
            languages = languages + y + personalInfo.Language[i];


    }


    let ex;
    ex = expiriense.map(element => {
        return (
            <div className="timline-card timline-card-primary card shadow-sm" id="outCard">
                <div className="card-body">
                    <div class="h5 mb-1">{element.jobTitle} <span class="text-muted h6">at {element.employer}</span></div>
                    <div class="text-muted text-small mb-2">{element.Sdate} - {element.Edate}</div>
                    <div className="workPar"><p>{element.description}</p></div>
                </div>
            </div>
        )
    })


    let edj;
    edj = educaition.map(element => {
        return (
            <div className="timline-card timline-card-primary card shadow-sm" id="outCard2">
                <div className="card-body">
                    <div class="h5 mb-1">{element.degree} <span class="text-muted h6">from {element.school}</span></div>
                    <div class="text-muted text-small mb-2">{element.Sdate} - {element.Edate}</div>
                    <div className="workPar"><p>{element.description}</p></div>
                </div>
            </div>
        )
    })

    let educaitionExists = '';
    if (educaition.length > 0) {
        educaitionExists = 'Education';
    }
    let workExists = '';
    if (ex.length > 0) {
        workExists = 'Work Experience';
    }

    let amountOfpages = Math.ceil((ex.length + educaition.length) / 4);


    let pagesArr = [];
    let exCounter = 1;
    let edjcCounter = 1;

    for (let i = 0; i < amountOfpages; i++) {
        pagesArr[i] = [];
        for (let j = 0; j < 4; j++) {
            if (ex.length > 0) {
                if (exCounter == 1) {
                    pagesArr[i].push(<h2 className="aboutHeader3">{workExists}</h2>);
                    j--;
                    exCounter = 0;
                    continue;
                }
                pagesArr[i].push(ex[ex.length - 1]);
                ex.splice(ex.length - 1, 1);
            }
            else {
                if (edjcCounter == 1) {
                    pagesArr[i].push(<h2 className="aboutHeader3">{educaitionExists}</h2>);
                    edjcCounter = 0;
                    j--;
                    continue;
                }

                if (edj.length > 0) {
                    pagesArr[i].push(edj[edj.length - 1]);
                    edj.splice(edj.length - 1, 1)
                }
            }
        }

    }

    let pages = [];
    for (let i = 0; i < amountOfpages; i++) {
        pages[i] =
            <div className="page">
                <div className="experience">
                    <div className="work1">
                        <div className="timeLine">
                            {pagesArr[i]}
                        </div>
                    </div>
                </div>
            </div>
    }

    let avatrImg = femaleAvatar;
    if (personalInfo.gender == 'male')
        avatrImg = avatar;
    else if (personalInfo.gender == 'male')
        avatrImg = femaleAvatar;

    let printHtml = () => {

        var data = document.getElementById('book');
        var canvas = document.createElement('canvas');
        // document.getElementById('#page').style.margin = "0px"

        let highetWorking = (amountOfpages + 1) * 1160;

        canvas.width = 795;
        canvas.height = highetWorking;

        var options = {
            canvas: canvas,
            scale: 1,
            width: 1920,
            height: 1280,
            windowHeight: 1280,
            windowWidth: 1920,

        };

        html2canvas(data, options).then((canvas) => {
            const contentDataURL = canvas.toDataURL('image/png');
            var pdf = new jsPDF('p', 'px', [highetWorking, 795]);

            var width = pdf.internal.pageSize.getWidth();
            var height = pdf.internal.pageSize.getHeight();

            pdf.addImage(contentDataURL, 'PNG', 1, 1, width, height);
            pdf.save(' - Dashboard');
        });

    }





    return (
        <React.Fragment >


            <div id="book" className="book" >
                <div id="page" className="page" style={{ marginTop: "0px" }}>
                    <div className={pickedTamplate}>
                        <img src={avatrImg} id="avatar"></img>
                        <div className='headingControl'>
                            <h1 id="nameHeader">{fullName}</h1>
                            <h4 id="profHeader">{personalInfo.wills}</h4>
                        </div>
                    </div>
                    <div className="about">
                        <div className="details">
                            <div className="about2">
                                <h2 className="aboutHeader">About Me</h2>
                                <p className="par">{about}</p>
                            </div>
                            <div className="about2">
                                <div class="row mt-2">

                                    <div class="col-sm-4">
                                        <div class="pb-1">Email</div>
                                    </div>
                                    <div class="col-sm-8">
                                        <div class="pb-1 text-secondary">{personalInfo.phoneNumber}</div>
                                    </div>
                                    <div class="col-sm-4">
                                        <div class="pb-1">Phone</div>
                                    </div>
                                    <div class="col-sm-8">
                                        <div class="pb-1 text-secondary">{personalInfo.mail}</div>
                                    </div>
                                    <div class="col-sm-4">
                                        <div class="pb-1">Address</div>
                                    </div>
                                    <div class="col-sm-8">
                                        <div class="pb-1 text-secondary">{personalInfo.address}</div>
                                    </div>
                                    <div class="col-sm-4">
                                        <div class="pb-1">Date of birth</div>
                                    </div>
                                    <div class="col-sm-8">
                                        <div class="pb-1 text-secondary">{personalInfo.age}</div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div className="personalSkills">
                        <h2 className="aboutHeader2">Professional Skills</h2>
                        <div className="personalSkills-content">
                            {bestTechs}
                            {seconedTechs}
                        </div>
                        <p className="par2"><b>More technologies:</b> {restTechs} </p>
                        <p className="par2"><b>Languages :</b> {languages} </p>
                    </div>


                    <div className="contact">
                        <h2 className="aboutHeader4">LinkedIn <span class="text-muted h6">{techs.links.linkdin}</span></h2>
                        <h2 className="aboutHeader4">Github <span class="text-muted h6">{techs.links.gitHub}</span></h2>
                    </div>



                </div>
                {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
                {pages}




                {/* <div className="education">
                        <h2 className="aboutHeader3">{educaitionExists}</h2>
                        <div className="work1">
                            <div className="timeLine">
                                {edj}
                            </div>
                        </div>
                    </div>
                </div>  */}
            </div>
        </React.Fragment>
    );
};

export default FinnalDisplay;





// <div className="card-body">
//                                         <div class="h5 mb-1">Frontend Developer <span class="text-muted h6">at Creative Agency</span></div>
//                                         <div class="text-muted text-small mb-2">May, 2015 - Present</div>
//                                         <div className="workPar"><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio non exercitationem eos, voluptas rerum unde cum ipsa quod illo tempora quo at esse fugit, excepturi voluptatem deserunt neque suscipit in! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam sunt voluptatem quidem nulla. Repudiandae error maiores numquam vero temporibus velit aut sapiente tenetur placeat labore dolorum, rem.</p></div>
//                                     </div>





{/* <div className="timline-card timline-card-primary card shadow-sm" id="outCard2">
                                    <div className="card-body">
                                        <div class="h5 mb-1">Bachelor of Computer Science <span class="text-muted h6">from Regional College</span></div>
                                        <div class="text-muted text-small mb-2">2007 - 2011</div>
                                        <div className="workPar"><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio non exercitationem eos, voluptas rerum unde cum ipsa quod illo tempora quo at esse fugit, excepturi voluptatem deserunt neque suscipit in! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam sunt voluptatem quidem nulla. Repudiandae error maiores numquam vero temporibus velit aut sapiente tenetur placeat labore dolorum, rem.</p></div>
                                    </div>
                                </div>
                                <div className="timline-card timline-card-primary card shadow-sm" id="outCard2">
                                    <div className="card-body">
                                        <div class="h5 mb-1">Bachelor of Computer Science <span class="text-muted h6">from Regional College</span></div>
                                        <div class="text-muted text-small mb-2">2007 - 2011</div>
                                        <div className="workPar"><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio non exercitationem eos, voluptas rerum unde cum ipsa quod illo tempora quo at esse fugit, excepturi voluptatem deserunt neque suscipit in! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam sunt voluptatem quidem nulla. Repudiandae error maiores numquam vero temporibus velit aut sapiente tenetur placeat labore dolorum, rem.</p></div>
                                    </div>
                                </div> */}
{/* <div className="col-md-6">
                            <div className="mb-2"><span className="skillH">HTML</span>
                                <div className="progress my-1">
                                    <div className="progress-bar bg-primary" style={{ width: "70%" }}></div>
                                </div>
                            </div>
                            <div className="mb-2"><span className="skillH">CSS</span>
                                <div className="progress my-1">
                                    <div className="progress-bar bg-primary" style={{ width: "90%" }}></div>
                                </div>
                            </div>
                            <div className="mb-2"><span className="skillH">Java Script</span>
                                <div className="progress my-1">
                                    <div className="progress-bar bg-primary" style={{ width: "50%" }}></div>
                                </div>
                            </div>
                            <div className="mb-2"><span className="skillH">C#</span>
                                <div className="progress my-1">
                                    <div className="progress-bar bg-primary" style={{ width: "100%" }}></div>
                                </div>
                            </div>
                            <div className="mb-2"><span className="skillH">Python</span>
                                <div className="progress my-1">
                                    <div className="progress-bar bg-primary" style={{ width: "25%" }}></div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="mb-2"><span className="skillH">Confidence</span>
                                <div className="progress my-1">
                                    <div className="progress-bar bg-success" style={{ width: "60%" }}></div>
                                </div>
                            </div>
                            <div className="mb-2"><span className="skillH">Empathy</span>
                                <div className="progress my-1">
                                    <div className="progress-bar bg-success" style={{ width: "40%" }}></div>
                                </div>
                            </div>
                            <div className="mb-2"><span className="skillH">Public speaking</span>
                                <div className="progress my-1">
                                    <div className="progress-bar bg-success" style={{ width: "57%" }}></div>
                                </div>
                            </div>
                            <div className="mb-2"><span className="skillH">Sensitivity</span>
                                <div className="progress my-1">
                                    <div className="progress-bar bg-success" style={{ width: "20%" }}></div>
                                </div>
                            </div>
                            <div className="mb-2"><span className="skillH">Patience</span>
                                <div className="progress my-1">
                                    <div className="progress-bar bg-success" style={{ width: "100%" }}></div>
                                </div>
                            </div>
                        </div> */}
