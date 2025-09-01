import './styles/App.css';
import Info from "./components/Info"
import Education from './components/Education'
import WorkExperience from './components/WorkExperience'
import Skills from './components/Skills'
import Preview from './components/Preview'
import { useState } from 'react';
import html2pdf from "html2pdf.js"

function App() {
  const [infodata, setInfoData] = useState(
    {
      name:"Ing. John Example",
      email:"nonexisting@email.com",
      phone:"900 876 432"
    })
  const [educationData, setEducationData] = useState(
    [{
      uni: "University of Everything",
      field: "Science of the Universe",
      start_date: "September 2018",
      end_date: "June 2023",
      location: "Exampletown, Examplia",
      id: crypto.randomUUID()
    }
    ])
  const [workExperienceData, setWorkExperienceData] = useState(
    [{
      company: "Example Solutions Ltd.",
      position: "Project Manager",
      start_date: "March 2023",
      end_date: "August 2025",
      decr: "Managed example projects from inception to completion, ensuring timely delivery.",
      location: "Sample City, Testland",
      id: crypto.randomUUID()
    }])
  const [skillsData, setSkillsData] = useState(
    [{
      name: "example1",
      id: crypto.randomUUID()
    },
    {
      name: "example2",
      id: crypto.randomUUID()
    },
    {
      name: "example3",
      id: crypto.randomUUID()
    }]
  )

  function handleClick() {
    let element = document.getElementById("pdfToDownload")
    console.log(element);

    html2pdf(element);
    console.log("here")
  }

  return (
    <>
    <div className='editing-panel'>
      <h1>CV builder</h1>
      <Info setInfoData={setInfoData}/>
      <Education
      setEducationData={setEducationData}
      educationData={educationData}
      />
      <WorkExperience
      setWorkExperienceData={setWorkExperienceData}
      workExperienceData={workExperienceData}
      />
      <Skills
      setSkillsData={setSkillsData}
      skillsData={skillsData}
      />
      <button
      className='downloadPdf'
      onClick={handleClick}
      >Download PDF</button>
    </div>
    <div className='preview-panel'>
      <Preview
      infodata={infodata}
      educationData={educationData}
      workExperienceData={workExperienceData}
      skillsData={skillsData}
      />
    </div>
    </>
  )
}

export default App
