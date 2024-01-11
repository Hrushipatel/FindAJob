import React, {useState} from 'react';
import "../styling/home_style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faFacebook, faAmazon, faGoogle, faMeta, } from "@fortawesome/free-brands-svg-icons";
import Search from "./Search";
import Navbar from './Navbar';

function Home() {
    const job_ds = [
        {
            "Title": "Frontend Developer",
            "Company":"Instagram",
            "Location": "New York",
            "Brand":faInstagram,
            "Description": `
      Join our dynamic team in the heart of New York City as a Frontend Developer, where innovation meets creativity. As a key member of our technology department, you'll be responsible for designing and implementing user interfaces that not only meet but exceed user expectations.

      In this role, you'll collaborate closely with designers and backend developers to create seamless and visually stunning web applications. Proficiency in modern frontend frameworks such as React, Angular, or Vue.js is essential. You'll contribute to the entire development lifecycle, from concept and design to testing and deployment.

      We're looking for someone with a passion for cutting-edge technologies and a keen eye for detail. If you're excited about shaping the future of web development and thrive in a collaborative environment, we want to hear from you!

      Responsibilities:
      - Develop and maintain user interfaces for web applications
      - Collaborate with cross-functional teams to define project requirements
      - Optimize applications for maximum speed and scalability
      - Stay up-to-date with the latest trends and best practices in frontend development

      Qualifications:
      - Proven experience as a Frontend Developer
      - Strong proficiency in HTML, CSS, and JavaScript
      - Experience with frontend frameworks such as React, Angular, or Vue.js
      - Knowledge of responsive design and cross-browser compatibility
      - Excellent communication and collaboration skills
    `,
        },
        {
            "Title": "Backend Developer",
            "Company":"Facebook",
            "Location": "San Francisco",
            "Brand":faFacebook,
            "Description": `
      Are you passionate about backend development and interested in making an impact in the vibrant city of San Francisco? Join our team as a Backend Developer and take on the challenge of designing, implementing, and maintaining robust server-side applications.

      In this role, you'll work with databases, APIs, and server infrastructure to support our web and mobile applications. We're looking for someone with a deep understanding of backend technologies and a knack for creating scalable and efficient solutions. Proficiency in languages such as Node.js, Python, or Ruby is a plus.

      As a Backend Developer, you'll play a crucial role in shaping the architecture of our applications and ensuring their performance and reliability. If you're ready to tackle exciting challenges and contribute to the success of innovative projects, apply now!

      Responsibilities:
      - Design and implement server-side applications
      - Work with databases and APIs to support frontend development
      - Collaborate with cross-functional teams to define project requirements
      - Ensure the performance, security, and scalability of backend systems

      Qualifications:
      - Proven experience as a Backend Developer
      - Strong proficiency in server-side programming languages (Node.js, Python, Ruby, etc.)
      - Experience with database management and API development
      - Knowledge of cloud services and serverless architecture
      - Excellent problem-solving skills and attention to detail
    `,
        },{
            "Title": "Full Stack Developer",
            "Company":"Google",
            "Location": "Seattle",
            "Brand":faGoogle,
            "Description": `
      Join our innovative team in the beautiful city of Seattle as a Full Stack Developer! In this role, you'll have the exciting opportunity to work on both frontend and backend technologies, contributing to the development of end-to-end solutions.

      We're looking for a talented developer with expertise in languages such as JavaScript, Java, or Python. As a Full Stack Developer, you'll collaborate with cross-functional teams to design and implement features that enhance user experiences. If you're passionate about creating cutting-edge applications and thrive in a collaborative environment, apply now!

      Responsibilities:
      - Develop and maintain both frontend and backend components
      - Collaborate with designers and other developers to implement new features
      - Contribute to the entire development lifecycle, from concept to deployment
      - Stay updated on emerging trends and technologies in full-stack development

      Qualifications:
      - Proven experience as a Full Stack Developer
      - Strong proficiency in both frontend and backend technologies
      - Knowledge of web development frameworks (e.g., React, Spring, Django)
      - Excellent problem-solving and communication skills
    `,
        },
        {
            "Title": "UI/UX Designer",
            "Company":"Meta",
            "Location": "Los Angeles",
            "Brand":faMeta,
            "Description": `
      Are you a creative mind with a passion for designing memorable user experiences? Join our dynamic design team in the vibrant city of Los Angeles as a UI/UX Designer! In this role, you'll have the opportunity to shape the visual identity and user interactions of our digital products.

      We value innovation and attention to detail. As a UI/UX Designer, you'll collaborate closely with developers and other stakeholders to create intuitive and visually appealing interfaces. If you have a strong portfolio showcasing your design skills and a deep understanding of user-centered design principles, we want to hear from you!

      Responsibilities:
      - Create wireframes, prototypes, and visual designs for web and mobile applications
      - Conduct user research and usability testing to inform design decisions
      - Collaborate with cross-functional teams to understand project requirements
      - Stay updated on design trends and best practices

      Qualifications:
      - Proven experience as a UI/UX Designer
      - Proficiency in design tools such as Figma, Sketch, or Adobe XD
      - Strong portfolio demonstrating a range of design projects
      - Excellent communication and collaboration skills
    `,
        },
        {
            "Title": "Data Scientist",
            "Company":"Amazon",
            "Location": "Chicago",
            "Brand":faAmazon,
            "Description": `
      Explore the world of data science in the bustling city of Chicago! Join our team as a Data Scientist and play a key role in analyzing large datasets, building predictive models, and extracting valuable insights to drive business decisions.

      We're looking for an analytical thinker with expertise in machine learning, statistical analysis, and programming languages such as Python or R. As a Data Scientist, you'll work closely with stakeholders to understand business goals and translate them into data-driven solutions. If you're excited about leveraging data to make informed decisions, apply now!

      Responsibilities:
      - Analyze and interpret complex datasets to extract meaningful insights
      - Build and deploy machine learning models for predictive analytics
      - Collaborate with cross-functional teams to understand business requirements
      - Stay updated on advancements in data science and machine learning

      Qualifications:
      - Proven experience as a Data Scientist
      - Strong proficiency in programming languages such as Python or R
      - Knowledge of machine learning algorithms and statistical modeling
      - Excellent problem-solving and communication skills
    `,
        },
        {
            "Title": "DevOps Engineer",
            "Company":"Meta",
            "Location": "Austin",
            "Brand":faMeta,
            "Description": `
      Be a key player in our DevOps team in the tech-savvy city of Austin! As a DevOps Engineer, you'll play a crucial role in optimizing our software development and deployment processes. Implement and manage CI/CD pipelines, work with containerization technologies, and automate infrastructure tasks.

      We're looking for someone with a passion for streamlining development workflows and ensuring the reliability of our systems. If you're experienced in cloud services, container orchestration, and infrastructure as code, join us on the cutting edge of DevOps practices!

      Responsibilities:
      - Implement and manage CI/CD pipelines for efficient software deployment
      - Work with containerization technologies such as Docker and Kubernetes
      - Automate infrastructure tasks using tools like Terraform or Ansible
      - Collaborate with development and operations teams to ensure system reliability

      Qualifications:
      - Proven experience as a DevOps Engineer
      - Strong proficiency in CI/CD, containerization, and infrastructure as code
      - Knowledge of cloud services (AWS, Azure, GCP)
      - Excellent problem-solving and communication skills
    `,
        }
    ];


    const [expandedIndex, setExpandedIndex] = useState(0);
    const [applied,setApplied]=useState(new Set());

    const changeApply =(index) => {
        const newApplied = new Set(applied);
        if(newApplied.has(index)){
            newApplied.delete(index);
        }
        else{
            newApplied.add(index);
        }
        setApplied(newApplied);
    };

    const toggleReadMore = (index) => {
        if(index !== expandedIndex){
            setExpandedIndex(index);
        }
    };

    return (
        <div className="home">
            <Navbar/>
            <Search/>
            <div className="box">
                <div className="box1">
                    {job_ds.map((job_d, index) => (
                        <div
                            className={`sub_box ${index === expandedIndex ? 'expanded' : ''}`}
                             key={index}
                             onClick={() => toggleReadMore(index)
                        }>
                            <h4 className='logo'>
                                <div>
                                <strong>{job_d.Title}</strong>, {job_d.Company}
                                </div>
                                <FontAwesomeIcon icon={job_d.Brand} style={{ fontSize: '25px' }}/>
                            </h4>
                            <p>{job_d.Location}</p>
                            <p>{job_d.Description}</p>
                        </div>
                    ))}
                </div>
                <div className='box2'>
                    <div className="box2-fix">
                            <div>
                                    <h4 className='logo'>
                                        {job_ds[expandedIndex].Title}, {job_ds[expandedIndex].Company}
                                        <FontAwesomeIcon icon={job_ds[expandedIndex].Brand} style={{ fontSize: '30px' }} /> 
                                    </h4>
                                    <p>{job_ds[expandedIndex].Location}</p>
                                    <p>{job_ds[expandedIndex].Description}</p>
                                    <div className='apply'>
                                        <button type="submit"  key={expandedIndex} onClick={()=> changeApply(expandedIndex)}>
                                        {applied.has(expandedIndex) ? (
                                                <div>
                                                    Applied
                                                </div>
                                            ) : (
                                                <div>
                                                    Apply
                                                </div>)}
                                        </button>
                                    </div>
                                    
                            </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Home;