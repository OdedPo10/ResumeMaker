import '../index.css'
import React, { Component } from 'react';
import avatar from '../images/avatar.jpeg';



const FinnalDisplay = (props) => {
    const { personalInfo, about, expiriense, educaition, techs } = props.resume
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
  
    
    let ex;
    ex=expiriense.map(element=>{
        return(
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
    edj=educaition.map(element=>{
        return(
            <div className="timline-card timline-card-primary card shadow-sm" id="outCard2">
                <div className="card-body">
                <div class="h5 mb-1">{element.degree} <span class="text-muted h6">from {element.school}</span></div>
                <div class="text-muted text-small mb-2">{element.Sdate} - {element.Edate}</div>
                <div className="workPar"><p>{element.description}</p></div>
            </div>
        </div>
        )
    })
    let educaitionExists='';
    if(educaition.length)
    {
        educaitionExists='Education';
    }
   

console.log(about);
    return (
        <React.Fragment >
            <div className="book">
                <div className="page">
                    <div className="subpage">
                        <img src={avatar} id="avatar"></img>
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
                                        <div class="pb-1">age</div>
                                    </div>
                                    <div class="col-sm-8">
                                        <div class="pb-1 text-secondary">{personalInfo.age}</div>
                                    </div>
                                    <div class="col-sm-4">
                                        <div class="pb-1">Email</div>
                                    </div>
                                    <div class="col-sm-8">
                                        <div class="pb-1 text-secondary">{personalInfo.mail}</div>
                                    </div>
                                    <div class="col-sm-4">
                                        <div class="pb-1">Phone</div>
                                    </div>
                                    <div class="col-sm-8">
                                        <div class="pb-1 text-secondary">{personalInfo.phoneNumber}</div>
                                    </div>
                                    <div class="col-sm-4">
                                        <div class="pb-1">Address</div>
                                    </div>
                                    <div class="col-sm-8">
                                        <div class="pb-1 text-secondary">{personalInfo.address}</div>
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
                    </div>


                    <div className="contact">
                        <h2 className="aboutHeader4">LinkedIn <span class="text-muted h6">{techs.links.linkdin}</span></h2>
                        <h2 className="aboutHeader4">Github <span class="text-muted h6">{techs.links.gitHub}</span></h2>
                    </div>


                </div>
                <div className="page">
                    <div className="experience">
                        <h2 className="aboutHeader3">Work Experience</h2>
                        <div className="work1">
                            <div className="timeLine">
                                
                                    {ex}
                                
                            </div>
                        </div>
                    </div>

                    <div className="education">
                        <h2 className="aboutHeader3">{educaitionExists}</h2>
                        <div className="work1">
                            <div className="timeLine">
                                {edj}
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </React.Fragment>
    );
}

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
