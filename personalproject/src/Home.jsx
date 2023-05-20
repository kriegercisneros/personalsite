import './scss/styles.scss'
import { createZdogIllustration } from './zdog'
import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';
import Carousel from 'react-bootstrap/Carousel';
import Table from 'react-bootstrap/Table';

const popover = (
    <Popover id="popover-basic">
      <Popover.Body style={{fontSize:'2vh'}}>
        This AI image was generated from a Python program I wrote and programatically saved in an S3 Bucket.
      </Popover.Body>
    </Popover>
  );

  const popover_two = (
    <Popover id="popover-basic">
      <Popover.Body style={{fontSize:'2vh'}}>
        Click and drag the animation.  It is all code!
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
                    <button className="connect" style={{
                        position: 'fixed',
                        bottom: '20px',
                        right: '20px',
                        zIndex: '1000',
                        width: '4vw',
                        height: '7vh',
                        backgroundColor: '#F6E6D8',
                        boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.25)',
                        color: 'black',
                        borderRadius: '50%',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        border: 'none',
                    }}>
                    ⬆️
                    </button>
                </div>}
        </div>
        <div style={{display:'flex', justifyContent:'center'}}>
            <ul className="nav justify-content-center">
                <li className="nav-item">
                    <a className="nav-link active my-link" aria-current="page" href="#about" style={{fontSize:'3vh'}}>About</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link my-link" href="https://phase-4-bucket-2.s3.us-west-2.amazonaws.com/Technical+Resume+(1).pdf" target="_blank" rel="noopener noreferrer" style={{color:'gray', fontSize:'3vh'}}>Resume</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link my-link" href="#projects" style={{color:'gray', fontSize:'3vh'}}> Development Projects</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link my-link" href="#digitalart" style={{color:'gray', fontSize:'3vh'}}> Digital Art</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link my-link" href="#contact" style={{color:'gray', fontSize:'3vh'}}>Connect</a>
                </li>
            </ul>
        </div>
            <br></br>
            <div className="container text-center d-flex flex-column min-vh-100" style={{display:'flex'}}>
                <div style={{
                    backgroundColor: '#F6E6D8', 
                    width: '100%', 
                    paddingTop: '50px',
                    paddingBottom:'300px',
                    paddingLeft: "25px",
                    paddingRight: "25px",
                    boxShadow: '0px 4px 8px 0px rgba(0, 0, 0, 0.2)', 
                    borderRadius: '10px'
                    }}>
                    <div className="column" style={{paddingTop:'8vh', display:'flex', flexDirection:'column', alignItems:'flex-start'}}>
                        <h1 style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)', fontSize:'5.5vh'}}>Jacqueline Krieger-Cisneros</h1>
                        <h4 style={{fontSize:'3.8vh'}}>Full-Stack Developer, VISION for AI</h4>
                    </div>

                    <div style={{padding:'5vh'}}></div>

                    <div style={{
                        boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.25)",
                        marginLeft: "-20vw",
                        marginRight: "-20vw",
                        paddingLeft: "25px",
                        paddingRight: "25px", 
                        borderRadius:'10px', 
                    }} className="row">
                        <div style={{display:'flex', flexDirection:'column', alignItems:'flex-end', position:'relative',left:'-5%', paddingTop:'5vh', paddingRight:'5vw'}}>
                            <h2 className='' style={{
                                fontSize:'4vh',
                                color:'black', 
                                textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)'
                            }}>
                                Python | JS | SQL
                            </h2>
                            <h3 className='' style={{paddingTop:'2vh', color:'black', 
                            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)', fontSize:'4vh',}}>
                                Flask | React | Postgres | Git | AWS
                            </h3>
                        </div>
                        


                        <div>
                        
                            <img style={{width:'60vh', borderRadius:'50%', position:'absolute', right:'55%', bottom:'-22%'}} src="https://phase-4-bucket-2.s3.us-west-2.amazonaws.com/%E2%80%94Pngtree%E2%80%94abstract+boheiman+eye+mystic+logo_7595916.png"></img>
                            <div style={{display:"flex", justifyContent: 'flex-end', paddingTop:'50px', position: 'relative'}}>
                                <img 
                                    src="https://phase-5-images.s3.us-west-2.amazonaws.com/5780dc1e5bb34a28b89ac7f016f6abdf.png"
                                    className="overlap-image1 rounded-circle"
                                    style={{zIndex: 2, width:'16vw', height:'72%',position:'absolute', left:'66%', top:'9%'}}
                                ></img>
                                <img 
                                    src="https://phase-5-images.s3.us-west-2.amazonaws.com/IMG_1538.jpg"
                                    className="overlap-image2 rounded-circle"
                                    style={{opacity: '0.5', zIndex: 1, left: '-27%', width: '16vw', position:'relative'}}
                                ></img>
                            </div>


                                <div style={{paddingBottom:'20px', display:'flex', justifyContent:'center'}}>
                                    <OverlayTrigger trigger="click" placement="right" overlay={popover}>
                                        <button
                                            className="connect"
                                            style={{width: '4vw',
                                            height: '8vh',
                                            backgroundColor: '#F6E6D8',
                                            boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.25)',
                                            color: 'black',
                                            borderRadius: '50%',
                                            display: 'flex',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            border: 'none',}}
                                        >ℹ️</button>
                                    </OverlayTrigger>
                                </div>
                        </div>
                    </div>

                    <div style={{padding:'15vh'}}></div>

                    <div style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
                        
                    <div style={{display:'flex', flexDirection:'column', justifyContent:'center', marginLeft: '-15vw',backgroundColor: '#e4c3b1'}}>
                        <img src="https://phase-4-bucket-2.s3.us-west-2.amazonaws.com/moonphasecolorratio3-4.jpg" style={{width:'20vw', height:'55vh', objectFit:'contain'}}></img>
                        <img src="https://phase-4-bucket-2.s3.us-west-2.amazonaws.com/moonphasecolorratio3-4.jpg" style={{width:'20vw', height:'55vh', objectFit:'contain'}}></img>
                        <img src="https://phase-4-bucket-2.s3.us-west-2.amazonaws.com/moonphasecolorratio3-4.jpg" style={{width:'20vw', height:'55vh', objectFit:'contain'}}></img>
                        
                        <br></br>
                     
                    </div>
                    
                    <div id='about'>
                        <h1 style={{textAlign: 'right'}}> . . . </h1>
                        <br></br>
                        <h1 style={{textAlign: 'right', fontSize:'4.5vh', position:'relative', left:'-2vh'}}>Welcome</h1>
                        <br></br>
                        <p style={{textAlign: 'left', fontSize:'2vh', paddingLeft:'1vw'}}>Thank you for choosing to be here! Although I enjoy spending my time in Python, I have built this site using React.js to help you better understand who I am and how I can contribute to your software needs. Whether you are looking to collaborate on a project, need a developer for a specific task, or are seeking a valuable addition to your team, feel free to reach out! We may be a great professional fit.</p>
                            <br></br>
                        <h3 style={{textAlign: 'right',fontSize:'3.7vh', position:'relative', left:'-2vh'}}>About Me</h3>
                            <p style={{textAlign: 'left', fontSize:'2vh', paddingLeft:'1vw'}}>
                            In August of 2022, I happily stumbled across FreeCodeCamp and began working through their program. I was amazed by the remarkable results that could be achieved with a simple amount of code. This sparked my passion for programming, leading me to study JavaScript and eventually enroll in a SE bootcamp where I spent an intense 15 weeks learning full-stack development. I absolutely love what I do and am excited to bring my diverse background and experiences to the table. Previously, I studied Anthropology and Dance during my college years. I then moved to Hawaii and became a Dive Master, gaining valuable experience while working in high-end resorts. Later, the most fortunate event in my life occurred when I started a family. All of these experiences have shaped me, fostering curiosity, playfulness, attentive focus, and creative problem-solving skills that greatly benefit my profession as a developer.   
                        </p>
                        <h3 style={{textAlign: 'right', fontSize:'3.7vh', position:'relative', left:'-2vh'}}>Currently Working On</h3>
                            <p style={{textAlign: 'left', fontSize:'2vh', paddingLeft:'1vw'}}>
                            I am currently focusing on mastering algorithms. My goal is to enhance my code's efficiency, speed, and cost-effectiveness to bring maximum benefits to your projects. Additionally, I have a keen interest in Artificial Intelligence (AI) and how I can leverage this technology, particularly in model building, within my development profession. We find ourselves in an exciting era where AI has become the tool of the decade, and I am eager to contribute to its advancements.
                        </p>
                        <h3 style={{textAlign: 'right', fontSize:'3.7vh', position:'relative', left:'-2vh'}}>Skills</h3>
                            <p style={{textAlign: 'left', fontSize:'2vh', paddingLeft:'1vw'}}>
                            With a proven track record of quickly grasping new concepts and implementing research findings effectively, I thrive in fast-paced environments where I can adapt and apply new knowledge almost immediately. 
                            I was honored with the "Makes Everything Look Easy" Award at my coding bootcamp, recognizing my exceptional ability to simplify complex concepts and make them accessible to others. This skill allows me to communicate effectively and collaborate seamlessly with team members, stakeholders, and clients. Additionally, I have experience working with complex and relevant APIs, such as Google Cloud Translate and Stability AI, skillfully integrating them into applications for seamless data exchange and enhanced functionality. Leveraging my expertise in AWS S3 (Simple Storage Service), I efficiently configure and manage buckets to ensure secure and reliable storage of data and media assets in the cloud. 
                            </p>
                        <br></br>
                        <h1 style={{textAlign: 'right'}}> . . . </h1>
                    </div>
                </div>

                <div style={{padding:'20vh'}}></div>


                <div id='projects' className="justify-content-center align-items-center" style={{height: '100vh'}}>
                    <h1 style={{fontSize:'5vh'}}>Development Projects</h1>
                    <div style={{width: '100%', height: '70vh', overflow: 'hidden'}}>
                        <Carousel > 
                            <Carousel.Item >
                            <video 
                                className="d-block w-100" 
                                controls
                                >
                                <source src="https://phase-4-bucket-2.s3.us-west-2.amazonaws.com/sketchai.mp4" type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                            </Carousel.Item>
                            <Carousel.Item >
                                <video 
                                    className="d-block w-100" 
                                    controls>
                                    <source src="https://phase-4-bucket-2.s3.us-west-2.amazonaws.com/CLI_APP_BOT.mp4" type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                            </Carousel.Item>
                            <Carousel.Item >
                                <video 
                                    className="d-block w-100" 
                                    controls>
                                    <source src="https://phase-4-bucket-2.s3.us-west-2.amazonaws.com/phase-4.mp4" type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                            </Carousel.Item> 
                        </Carousel>
                    </div>
                </div>
                <div style={{backgroundColor:'rgba(0,0,0,0.1', marginTop:'-25vh', paddingTop:'7vh'}}>
                    <h2 style={{fontSize:'4vh'}}>GitHub Repos</h2>
                    <Table striped bordered hover style={{fontSize:'2vh'}}>
                        <thead>
                            <tr style={{fontSize:'2vh'}}>
                                <th>Name</th>
                                <th>Languages</th>
                                <th>Frameworks</th>
                                <th>Tools</th>
                                <th>Notes</th>
                                <th>Time</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <a className="link" href="https://github.com/kriegercisneros/p-5-p">Simple Sketch</a>
                                </td>
                                <td>JS, Python, SQL</td>
                                <td>React, Flask, Postgres</td>
                                <td>S3, Boto3, Base64, Stability AI API</td>
                                <td>Learned about diffusion processes, how to create and handle BLOB data across platforms</td>
                                <td>3 Weeks</td>
                            </tr>
                            <tr>
                                <td>
                                    <a className="link" href="https://github.com/kriegercisneros/phase-3-project">EDR Bot</a>
                                </td>
                                <td>Python, SQL</td>
                                <td>Flask, Lite3</td>
                                <td>GoogleCloud Translate API, ChatterBot Library</td>
                                <td>Learned about NLP toolkits available for developers.</td>
                                <td>1 Week</td>
                            </tr>
                            <tr>
                                <td>
                                    <a className="link" href="https://github.com/kriegercisneros/phase-4-project-front">Re-Treat</a>
                                </td>
                                <td>JS, Python, SQL</td>
                                <td>React, Flask, Postgres</td>
                                <td>dotEnv, bcrypt and password encryption, Sessions, Agile Team</td>
                                <td>Great expirement with getting session to persist and using the data in the front end.  Learned how to set up a proxy.</td>
                                <td>1 Week with a partner</td>
                            </tr>
                        </tbody>
                    </Table>
                </div>

                <div style={{padding:'20vh'}}></div>
                

                <div style={{
                    backgroundColor: "#FFF7F2",
                    boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.25)", 
                    borderRadius:'10px', 
                    display:'flex'
                    }}
                    className="column justify-content-center">
                    <div 
                        id='contact' 
                        className="container opaque-image"
                        style={{
                            display:'flex', 
                            justifyContent:'space-around', 
                            backgroundImage: `url("https://phase-4-bucket-2.s3.us-west-2.amazonaws.com/%E2%80%94Pngtree%E2%80%94abstract+boheiman+eye+mystic+logo_7595916.png")`,
                            backgroundSize: 'cover', 
                            backgroundPosition: 'center',
                            height: '100%', 
                            objectFit: 'cover', 
                            borderRadius: '10px', 
                            paddingBottom:'1vh' 
                          }}
                            >
                        <div style={{ position:'relative', display: 'flex', flexDirection: 'row', alignItems: 'flex-end', height: '100%'}}>
                            <div style={{}}>
                                <OverlayTrigger trigger="click" placement="top" overlay={popover_two}>
                                    <button 
                                    className="connect" style={{
                                        width: '4vw',
                                        height: '8vh',
                                        backgroundColor: '#F6E6D8',
                                        boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.25)',
                                        color: 'white',
                                        borderRadius: '50%',
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        border: 'none',
                                    }}>ℹ️</button>
                                </OverlayTrigger>
                            </div>
                            <div style={{display:'flex'}}>
                                <canvas style={{ maxWidth: '38vw', maxHeight: '60vh' }} className="illo" ></canvas>
                            </div>
                        </div>

                        <div style={{display:'flex', justifyContent:'end'}}>
                            <ul className="nav justify-content-center" style={{flexDirection:'column', alignItems:'flex-end'}}>
                                <li style={{paddingTop:'10px'}} className="nav-item">
                                    <a className="nav-link active"  href="https://www.linkedin.com/in/jacqueline-krieger-cisneros/" style={{color:'gray'}}>
                                        <img style={{height:'8vh', boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.25)"}} src="https://phase-4-bucket-2.s3.us-west-2.amazonaws.com/linkedin_logo_2.png" alt="LinkedIn Logo" />
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link active" href="https://dev.to/kriegercisneros" style={{color:'gray'}}>
                                        <img style={{height:'8vh', boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.25)"}} src="https://phase-4-bucket-2.s3.us-west-2.amazonaws.com/dev_logo.png" alt="Dev Logo" />
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link active" href="mailto:krieger.jacqueline@gmail.com" style={{color:'gray'}}>
                                        <img style={{width:'8vh', boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.25)"}} src="https://phase-4-bucket-2.s3.us-west-2.amazonaws.com/gmail_logo.png" alt="Email Logo" />
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link active" href="https://github.com/kriegercisneros" style={{color:'gray'}}>
                                        <img style={{width:'8vh', boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.25)"}} src="https://phase-4-bucket-2.s3.us-west-2.amazonaws.com/github_logo_black.png" alt="Github Logo" />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div style={{padding:'15vh'}}></div>
                                    

                <div id='digitalart' className="column " style={{height: '50vh', paddingTop:'100px', paddingBottom:'100px'}}>
                    <h1 style={{fontSize:'5vh'}}>Digital Art</h1>
                    <p></p>
                    <Carousel style={{backgroundColor:'rgba(0, 0, 0, 0.1)', boxShadow: '0px 4px 8px 0px rgba(0, 0, 0, 0.2)', paddingTop:'20px', paddingBottom:'20px'}}> 
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            style={{height: '50vh', objectFit: 'contain'}}
                            src="https://phase-4-bucket-2.s3.us-west-2.amazonaws.com/flowe3.jpg"
                            alt="Second slide"
                            />
                            <Carousel.Caption>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            style={{height: '50vh', objectFit: 'contain'}}
                            src="https://phase-4-bucket-2.s3.us-west-2.amazonaws.com/3E4BB807-3CE6-4001-8626-C85A3009FE3A_1_105_c.jpeg"
                            alt="Second slide"
                            />
                            <Carousel.Caption>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            style={{height: '50vh', objectFit: 'contain'}}
                            src="https://phase-4-bucket-2.s3.us-west-2.amazonaws.com/DEB655CC-5C6F-41F9-A43E-1897CF278D51_1_105_c.jpeg"
                            alt="Third slide"
                            />
                            <Carousel.Caption>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            style={{height: '50vh', objectFit: 'contain'}}
                            src="https://phase-4-bucket-2.s3.us-west-2.amazonaws.com/plant.jpg"
                            alt="Fourth slide"
                            />
                            <Carousel.Caption>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            style={{height: '50vh', objectFit: 'contain'}}
                            src="https://phase-4-bucket-2.s3.us-west-2.amazonaws.com/364DEE72-1D06-43FD-A1D0-6A38061AB42A_1_105_c.jpeg"
                            alt="Fifth slide"
                            />
                            <Carousel.Caption>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            style={{height: '50vh', objectFit: 'contain'}}
                            src="https://phase-4-bucket-2.s3.us-west-2.amazonaws.com/619C9C42-D445-41AD-9CA0-B72518E50063_1_105_c.jpeg"
                            alt="Sixth slide"
                            />
                            <Carousel.Caption>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </div>
            </div>
            <footer className="footer mt-auto py-3 bg-light" style={{fontSize:'2vh', borderRadius:'10px', marginLeft: "-20vw",
                        marginRight: "-20vw",}}>
                <div className="container">
                    <span className="text-muted">Copyright May 2023 Jacqueline Krieger-Cisneros © . . . </span>

                    <span className="text-muted">Transformed Zdog Animation Credit Robin Davey</span>
                </div>
            </footer>
        </div>
        </>
    )
}
