import './scss/styles.scss'
import { createZdogIllustration } from './zdog'
import { useEffect, useState } from 'react'
// import Button from 'react-bootstrap/Button';
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
                    <a className="nav-link my-link" href="https://docs.google.com/document/d/1rud-Qlgn2Zk5BiRd5HaX7v9PjMYsSJRm538Y8QE9Dw8/edit?usp=sharing" target="_blank" rel="noopener noreferrer" style={{color:'gray', fontSize:'3vh'}}>Resume</a>
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
                    boxShadow: '0px 4px 8px 0px rgba(0, 0, 0, 0.3)', 
                    borderRadius: '10px'
                    }}>
                    <div className="column" style={{paddingTop:'8vh', display:'flex', flexDirection:'column', alignItems:'flex-start'}}>
                        <h1 style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)', fontSize:'5vh'}}>Jacqueline Krieger-Cisneros</h1>
                        <h4 style={{fontSize:'3.2vh'}}>Full-Stack Software Engineer</h4>
                        <h5 style={{fontSize:'2.5vh', color:'gray'}}>Anthropologist | Environmental Advocate | Artist | Mother</h5>
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
                        <div style={{display:'flex', flexDirection:'column', alignItems:'flex-end', position:'relative',left:'-5%', paddingTop:'5vh', paddingRight:'15vw'}}>
                            <h2 className='' style={{
                                fontSize:'3.2vh',
                                color:'black', 
                                textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)'
                            }}>
                                Python | JavaScript | SQL
                            </h2>
                            <h3 className='' style={{paddingTop:'2vh', color:'black', 
                            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)', fontSize:'3vh',}}>
                                Flask | React | Postgres | Git | AWS
                            </h3>
                        </div>
                        


                        <div >
                            {/* <img style={{width:'30vw', borderRadius:'50%', position:'absolute', right:'55%', bottom:'-12%'}} src="https://phase-4-bucket-2.s3.us-west-2.amazonaws.com/%E2%80%94Pngtree%E2%80%94abstract+boheiman+eye+mystic+logo_7595916.png"></img> */}
                            <div>       
                                <div style={{display:"flex", justifyContent: 'flex-end', paddingTop:'50px', position: 'relative'}}>
                                    <img 
                                        src="https://phase-5-images.s3.us-west-2.amazonaws.com/7259476fb3494fbca15520956c8c75ed.png"
                                        className="overlap-image1 rounded-circle"
                                        style={{zIndex: 2, width:'16vw',position:'absolute', left:'23%', top:'-8%'}}
                                    ></img>
                                    <img 
                                        src="https://phase-5-images.s3.us-west-2.amazonaws.com/Jackie's+Portrait.jpeg"
                                        className="overlap-image2 rounded-circle"
                                        style={{opacity: '0.5', zIndex: 1, left: '-70%', width: '16vw', position:'relative'}}
                                    ></img>
                                </div> 
                            </div>


                                <div style={{paddingBottom:'20px', display:'flex', justifyContent:'center'}}>
                                    <OverlayTrigger trigger="click" placement="right" overlay={popover}>
                                        <button
                                            className="connect"
                                            style={{
                                                width: '4vw',
                                                height: '6vh',
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

                    <div style={{display:'flex', justifyContent:'center', alignItems:'center', }}>
                        
                    {/* <div style={{display:'flex', flexDirection:'column', justifyContent:'center', marginLeft: '-7vw',backgroundColor: '#e4c3b1'}}>
                        <img src="https://phase-4-bucket-2.s3.us-west-2.amazonaws.com/moonphasecolorratio3-4.jpg" style={{width:'20vw', height:'55vh', objectFit:'contain'}}></img>
                        <img src="https://phase-4-bucket-2.s3.us-west-2.amazonaws.com/moonphasecolorratio3-4.jpg" style={{width:'20vw', height:'55vh', objectFit:'contain'}}></img>
                        <img src="https://phase-4-bucket-2.s3.us-west-2.amazonaws.com/moonphasecolorratio3-4.jpg" style={{width:'20vw', height:'55vh', objectFit:'contain'}}></img>
                        <br></br>
                     
                    </div> */}
                        {/* opacity:".5", backgroundImage: `url("https://phase-5-images.s3.us-west-2.amazonaws.com/ocean+bubble.jpeg")`, height: '100vh', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' */}
                    
                    <div id='about'>
                        <h1 style={{textAlign: 'right'}}> . . . </h1>
                        <br></br>
                        <h1 style={{textAlign: 'right', fontSize:'3.5vh', position:'relative', left:'-2vh'}}>Welcome</h1>
                        <br></br>
                        <p style={{textAlign: 'right', fontSize:'2.5vh', paddingLeft:'1vw'}}>Entry level Full-Stack Software Engineer with a strong interest in Machine Learning and the ability to learn very quickly. I am at my best when tasked with a lofty goal with no clear direction forward – I have a pioneer mentality. I take calculated risks and manage my time expertly when charging forward with a project, and I am so pumped to steer my career into the vast and wonderful world of AI.</p>
                            <br></br>
                        <h3 style={{textAlign: 'right',fontSize:'3vh', position:'relative', left:'-2vh'}}>About Me</h3>
                            <p style={{textAlign: 'right', fontSize:'2.5vh', paddingLeft:'1vw'}}>
                            In August of 2022, I happily stumbled across FreeCodeCamp and began working through their program. I was amazed by the remarkable results that could be achieved with a simple amount of code. This sparked my passion for programming, leading me to study JavaScript and eventually enroll in a Software Engineering bootcamp where I spent an intense 15 weeks learning full-stack development. I absolutely love what I do and am excited to bring my diverse background and experiences to the industry. Previously, I studied Anthropology and Dance during my college years. I then moved to Hawaii and became a Dive Master, gaining valuable experience while working in high-end resorts. Later, the most fortunate event in my life occurred when I started a family. All of these experiences have shaped me, fostering curiosity, playfulness, attentive focus, and creative problem-solving skills that greatly benefit my profession as a developer.   
                        </p>
                        <br></br>
                        <h3 style={{textAlign: 'right', fontSize:'3vh', position:'relative', left:'-2vh'}}>Currently Working On</h3>
                            <p style={{textAlign: 'right', fontSize:'2.5vh', paddingLeft:'1vw'}}>
                            I am currently focusing on mastering algorithms. My goal is to enhance my code's efficiency, speed, and cost-effectiveness to bring maximum benefits to your projects. Additionally, I have a keen interest in Artificial Intelligence (AI) and how I can leverage this technology, particularly in model building, within my development profession. We find ourselves in an exciting era where AI has become the tool of the decade, and I am eager to contribute to its advancements.
                        </p>
                        <br></br>
                        <h3 style={{textAlign: 'right', fontSize:'3vh', position:'relative', left:'-2vh'}}>Skills</h3>
                            <p style={{textAlign: 'right', fontSize:'2.5vh', paddingLeft:'1vw'}}>
                            With a proven track record of quickly grasping new concepts and implementing research findings effectively, I thrive in fast-paced environments where I can adapt and apply new knowledge almost immediately. 
                            I was honored with the "Makes Everything Look Easy" Award at my coding bootcamp, recognizing my exceptional ability to simplify complex concepts and make them accessible to others. Additionally, I have experience working with complex and relevant APIs, such as Google Cloud Translate and Stability AI, skillfully integrating them into applications for seamless data exchange and enhanced functionality. Leveraging my expertise in AWS S3 (Simple Storage Service), I efficiently configure and manage buckets to ensure secure and reliable storage of data and media assets in the cloud. 
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
                
                <div style={{display:'flex',flexDirection:'row', justifyContent:'space-between'}}>
                
                    <div style={{
                        backgroundColor: "#FFF7F2",
                        boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.25)", 
                        borderRadius:'10px', 
                        display:'flex',
                        marginLeft:'-8vw', 
                        width:'50vw'
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
                    <div style={{paddingLeft:'4vw', paddingRight:'10vw', backgroundColor:'rgba(255,255,255,.4)', marginRight:'-10vw', boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.25)", borderRadius:'10px'}}>
                        <br></br>
                        <br></br>
                        <br></br>
                        <h1 style={{textAlign: 'right', fontSize:'4.7vh' }}>Connect</h1>
                        <br></br>
                        <p style={{textAlign: 'right', fontSize:'3vh' }}> Thank you for reaching out!  Have a question?  Want to collaborate on a project?  Need a new team member?  Currently I am open to employment, and I am always happy to connect!</p>
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
                            src="https://phase-4-bucket-2.s3.us-west-2.amazonaws.com/619C9C42-D445-41AD-9CA0-B72518E50063_1_105_c.jpeg"
                            alt="fourth slide"
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
