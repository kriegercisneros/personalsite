import { createZdogIllustration } from './zdog'
import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';
import Carousel from 'react-bootstrap/Carousel';

const popover = (
    <Popover id="popover-basic">
      <Popover.Body>
        This image was generated from a Python program I wrote and programatically saved in an S3 Bucket.
      </Popover.Body>
    </Popover>
  );

  const popover_two = (
    <Popover id="popover-basic">
      <Popover.Body>
        Click and drag the animation.  It is all code.
      </Popover.Body>
    </Popover>
  );
  
  
export default function Home(){

    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        if (window.pageYOffset > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

     // Set the top cordinate to 0
    // make scrolling smooth
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    useEffect(() => {
        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    useEffect(() => {
        createZdogIllustration('zdog-container');
      }, []);

    return(
        <>
        <div className="scroll-to-top">
            {isVisible && 
                <div onClick={scrollToTop}>
                    <button style={{position: 'fixed', bottom: '20px', right: '20px', zIndex: '1000'}}>
                        Back to top
                    </button>
                </div>}
        </div>
        <div style={{display:'flex', justifyContent:'center'}}>
                    <ul className="nav justify-content-center">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#about" style={{color:'gray'}}>About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="https://phase-4-bucket-2.s3.us-west-2.amazonaws.com/Technical+Resume+(1).pdf" target="_blank" rel="noopener noreferrer" style={{color:'gray'}}>Resume</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#projects" style={{color:'gray'}}> Dev Projects</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#digitalart" style={{color:'gray'}}> Digital Art</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#contact" style={{color:'gray'}}>Connect</a>
                        </li>
                    </ul>
                </div>
            <br></br>
            <div className="container text-center" style={{display:'flex'}}>
                <div style={{
                    backgroundColor: '#F6E6D8', 
                    width: '100%', 
                    paddingTop: '50px',
                    paddingBottom:'200px',
                    paddingLeft: "25px",
                    paddingRight: "25px",
                    boxShadow: '0px 4px 8px 0px rgba(0, 0, 0, 0.2)', 
                    borderRadius: '10px'
                    }}>
                    <div className="column" style={{paddingTop:'0px', paddingBottom:'30px'}}>
                        <h1 className="col-6" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.32)'}}>Jacqueline Krieger-Cisneros</h1>
                        <h4 className='col-9' >Full-Stack Developer, VISION for AI</h4>
                    </div>
                    <div style={{
                        backgroundColor: "#FFF7F2",
                        boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.25)",
                        marginLeft: "-95px",
                        marginRight: "-95px",
                        paddingLeft: "25px",
                        paddingRight: "25px", 
                        borderRadius:'10px'
                    }} className="row justify-content-start">
                        <h2 className='' style={{
                            paddingTop:'20px', 
                            color:'white', 
                            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)'
                        }}>
                            Python | JS | SQL
                        </h2>
                        <div>
                            <h3 className='' style={{padding:'20px', color:'white', 
                            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)'}}>
                                Flask | React | Postgres | Git | AWS
                            </h3>
                        </div>
                        <div style={{display:"flex", justifyContent: 'flex-end', paddingTop:'50px', position: 'relative'}}>
                            <img 
                                src="https://phase-5-images.s3.us-west-2.amazonaws.com/5780dc1e5bb34a28b89ac7f016f6abdf.png"
                                className="overlap-image1 rounded-circle"
                                style={{zIndex: 2, width: '25%', height:'80%', position:'absolute', right:'15%', top:'10%'}}
                            ></img>
                            <img 
                                src="https://phase-5-images.s3.us-west-2.amazonaws.com/IMG_1538.jpg"
                                className="overlap-image2 rounded-circle"
                                style={{opacity: '0.5', zIndex: 1, left: '20px', width: '25%'}}
                            ></img>
                        </div>
                            <div style={{paddingBottom:'20px'}}>
                            <OverlayTrigger trigger="click" placement="top" overlay={popover}>
                                <button>Fun Fact</button>
                            </OverlayTrigger>
                            </div>
                    </div>
                <div id='projects' className="d-flex justify-content-center align-items-center" style={{height: '100vh', paddingTop:'280px'}}>
                    <div id="carouselExampleCaptions" className="carousel slide w-85 p-3 h-auto shadow p-3 mb-5 bg-body rounded " data-bs-ride="false">
                        <h1>Video Demos</h1>
                        <p>most have secrets i am not yet ready to deploy</p>
                        <div className="carousel-indicators w-75 rounded">
                            {/* <div className="d-flex justify-content-center"> */}
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active rounded" aria-current="true" aria-label="Slide 1">Project 1</button>
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                            {/* </div> */}
                        </div>
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                {/* <img src="https://phase-5-images.s3.us-west-2.amazonaws.com/84d3871ab826430fa1ece3fdac05f3cf.png" className="d-block w-100" alt="sometext"/> */}
                                <video className="w-100" controls>
                                    <source src="https://phase-4-bucket-2.s3.us-west-2.amazonaws.com/sketchai.mp4" type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                                <div className="carousel-caption d-none d-md-block">
                                    <h5>First slide label</h5>
                                    <p>Some representative placeholder content for the first slide.</p>
                                </div>
                            </div>
                            <div className="carousel-item">
                                {/* <img src="https://phase-5-images.s3.us-west-2.amazonaws.com/a408826cb751467e8d70553f230428a9.png" className="d-block w-100" alt="sometext"/> */}
                                <video className="w-100 p-3" controls>
                                    <source src="https://phase-4-bucket-2.s3.us-west-2.amazonaws.com/sketchai.mp4" type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                                <div className="carousel-caption d-none d-md-block">
                                    <h5>Second slide label</h5>
                                    <p>Some representative placeholder content for the second slide.</p>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <img src="..." className="d-block w-100" alt="sometext"/>
                                <div className="carousel-caption d-md-block">
                                    <h5>Third slide label</h5>
                                    <p>Some representative placeholder content for the third slide.</p>
                                </div>
                                </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>

                <div style={{padding:'150px'}}>
                    <h2>GitHub Repos</h2>
                    <h5>Simple Sketch</h5>
                    <h5>EDR Bot</h5>
                    <h5>PottyTime</h5>
                </div>
                <div id='about'>
                    <h1> . . . </h1>
                    <h1>About</h1>
                    <p>Thanks for visiting my page.  I was told to make it look great for you, but honestly I would rather be tinkering with 
                        Python, triangulating an approach for building my own model to lay on top of Stability AI.  See, I want to make a program 
                        that takes a sketch and turns it into a great image.  Well I already made that program, it's just, my model needs some 
                        work to produce quality results.  And I am all for quality results.  I will more than likely take this website and optimize it 
                        for a mobile device so you can view my page at your convenience.  When it comes down to the wire, I would like a job.
                        I would love a job in ML and take part in this mad AI dash we suddenly found ourselves in.  And I would even most love to work 
                        with diffusion processes and handle images across the internet.  Do what you love, and I am.  So let's go with that.
                    </p>
                    <h1> . . . </h1>
                    <br></br>
                </div>
                    <div style={{
                            backgroundColor: "#FFF7F2",
                            boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.25)",
                            marginLeft: "-95px",
                            marginRight: "-95px",
                            paddingLeft: "25px",
                            paddingRight: "25px", 
                            borderRadius:'10px'
                            }}
                            className="column justify-content-center">
                    <div id='contact' className="container" style={{display:'flex', justifyContent:'space-between'}}>
                        <div>
                        <OverlayTrigger trigger="click" placement="bottom" overlay={popover_two}>
                        <h1 style={{paddingTop:'10px', paddingBottom:'10px', width:'50vw', backgroundColor:'rgba(400, 128, 128, 0.3)', boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.25)", color:'white', borderRadius:'10px'}}>connect</h1>

                        </OverlayTrigger>

                            <canvas className="illo"></canvas>
                        </div>
                        <div style={{display:'flex', justifyContent:'end'}}>
                            <ul className="nav justify-content-center" style={{flexDirection:'column', alignItems:'flex-end'}}>
                                <li style={{paddingTop:'10px'}} className="nav-item">
                                    <a className="nav-link active"  href="https://www.linkedin.com/in/jacqueline-krieger-cisneros/" style={{color:'gray'}}>
                                        <img style={{height:'15vh', boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.25)"}} src="https://phase-4-bucket-2.s3.us-west-2.amazonaws.com/linkedin_logo_2.png" alt="LinkedIn Logo" />
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link active" href="https://dev.to/kriegercisneros" style={{color:'gray'}}>
                                        <img style={{height:'15vh', boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.25)"}} src="https://phase-4-bucket-2.s3.us-west-2.amazonaws.com/dev_logo.png" alt="Dev Logo" />
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link active" href="mailto:krieger.jacqueline@gmail.com" style={{color:'gray'}}>
                                        <img style={{width:'15vh', boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.25)"}} src="https://phase-4-bucket-2.s3.us-west-2.amazonaws.com/gmail_logo.png" alt="Email Logo" />
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link active" href="https://github.com/kriegercisneros" style={{color:'gray'}}>
                                        <img style={{width:'15vh', boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.25)"}} src="https://phase-4-bucket-2.s3.us-west-2.amazonaws.com/github_logo_black.png" alt="Github Logo" />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div id='digitalart' className="column " style={{height: '100vh', paddingTop:'100px'}}>
                    <h1>Digital Art</h1>
                    <p>minor free-time tinkerings</p>
                    <Carousel> 
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            style={{height: '90vh', objectFit: 'cover'}}
                            src="https://phase-4-bucket-2.s3.us-west-2.amazonaws.com/227545653_1464800290546240_2637429693000111961_n.jpg"
                            alt="First slide"
                            />
                            <Carousel.Caption>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            style={{height: '90vh', objectFit: 'contain'}}
                            src="https://phase-4-bucket-2.s3.us-west-2.amazonaws.com/3E4BB807-3CE6-4001-8626-C85A3009FE3A_1_105_c.jpeg"
                            alt="Second slide"
                            />
                            <Carousel.Caption>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            style={{height: '90vh', objectFit: 'contain'}}
                            src="https://phase-4-bucket-2.s3.us-west-2.amazonaws.com/DEB655CC-5C6F-41F9-A43E-1897CF278D51_1_105_c.jpeg"
                            alt="Third slide"
                            />
                            <Carousel.Caption>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            style={{height: '90vh', objectFit: 'contain'}}
                            src="https://phase-4-bucket-2.s3.us-west-2.amazonaws.com/EFEB4077-1175-4703-A9EE-C457355308A3_1_105_c.jpeg"
                            alt="Fourth slide"
                            />
                            <Carousel.Caption>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            style={{height: '90vh', objectFit: 'contain'}}
                            src="https://phase-4-bucket-2.s3.us-west-2.amazonaws.com/364DEE72-1D06-43FD-A1D0-6A38061AB42A_1_105_c.jpeg"
                            alt="Fifth slide"
                            />
                            <Carousel.Caption>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            style={{height: '90vh', objectFit: 'contain'}}
                            src="https://phase-4-bucket-2.s3.us-west-2.amazonaws.com/619C9C42-D445-41AD-9CA0-B72518E50063_1_105_c.jpeg"
                            alt="Sixth slide"
                            />
                            <Carousel.Caption>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </div>
            </div>
        </div>
        </>
    )
}
