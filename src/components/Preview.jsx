import '../styles/Preview.css'


export default function Preview({infodata, educationData, workExperienceData, skillsData}) {
  return (
    <>
    <div
    className="cv-preview"
    id="pdfToDownload"
    >
      <div className='header'>
        <p className='name'>{infodata.name}</p>
        <p>{infodata.email}</p>
        <p>{infodata.phone}</p>
      </div>
      <div className='main-content'>
        <div className='education-preview preview'>
          <h3>Education</h3>
          {educationData.map(item=>
            <div className='education-card card' key={item.id}>
              <h4>{item.field}</h4>
              <p>{item.uni}</p>
              <p className='duration'>{item.start_date} - {item.end_date}</p>
              <p className='location'>{item.location}</p>
            </div>
          )}
        </div>
        <div className='work-exp-preview preview'>
          <h3>Work experience</h3>
          {workExperienceData.map(item=>
            <div className='work-exp-card card' key={item.id}>
              <h4>{item.position}</h4>
              <p>{item.company}</p>
              <p className='duration'>{item.start_date} - {item.end_date}</p>
              <p className='descr'>Description: {item.descr}</p>
              <p className='location'>{item.location}</p>
            </div>
          )}
        </div>
        <div className='skills-preview preview'>
          <h3>Skills</h3>
          <div className='skills-container'>
            {skillsData.map(item=>
                <p className='skill' key={item.id}>{item.name}</p>
            )}
          </div>
        </div>
      </div>
    </div>
    </>
  )
}