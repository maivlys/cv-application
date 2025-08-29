import { useState } from "react"
import '../styles/Skills-panel.css'
import SkillsForm from './SkillsForm'

export default function Skills({skillsData, setSkillsData}) {

  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editingSkill, setEditingSkill] = useState(null)

  function handleAddSkill() {
    setEditingSkill(null)
    setIsFormOpen(!isFormOpen);
  }

  function handleEditSkill(skill) {
    setEditingSkill(skill)
    setIsFormOpen(true);
  }

  function handleDeleteSkill(skill) {
    const filteredData = skillsData.filter((item)=>item.id!==skill.id)
    setSkillsData(filteredData)
  }

  return (
    <div className="skills-panel">
      <div className="skills-heading">
      <h2>Skills</h2>
      <button
      className="add-skill"
      onClick={handleAddSkill}
      >
        {isFormOpen
          ?
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path fill="#ffffff" d="M96 320C96 302.3 110.3 288 128 288L512 288C529.7 288 544 302.3 544 320C544 337.7 529.7 352 512 352L128 352C110.3 352 96 337.7 96 320z"/></svg>
          :
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
            <defs>
              <linearGradient id="gradEdit" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stop-color="#29F39B" />
                <stop offset="100%" stop-color="#02A1F9" />
              </linearGradient>
            </defs>
            <path fill="url(#gradEdit)" d="M256 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 160-160 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l160 0 0 160c0 17.7 14.3 32 32 32s32-14.3 32-32l0-160 160 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-160 0 0-160z"/>
          </svg>
        }
      </button>
      </div>
      {isFormOpen &&
      <SkillsForm
      setSkillsData={setSkillsData}
      setIsFormOpen={setIsFormOpen}
      initialData={editingSkill}
      />
      }
      <ul>
        {skillsData.length>0 && skillsData.map(item=>
          <li className="edu-overview" key={item.id}>
            {item.name}
            {/* <div className="edu-overview-info">
              <p>{item.field}</p>
              <p>{item.uni}</p>
            </div> */}
            <div className="interaction-btns">
              <button
              className="edit-skill-btn"
              onClick={()=>handleEditSkill(item)}
              >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <path fill="#ffffff" d="M441 58.9L453.1 71c9.4 9.4 9.4 24.6 0 33.9L424 134.1 377.9 88 407 58.9c9.4-9.4 24.6-9.4 33.9 0zM209.8 256.2L344 121.9 390.1 168 255.8 302.2c-2.9 2.9-6.5 5-10.4 6.1l-58.5 16.7 16.7-58.5c1.1-3.9 3.2-7.5 6.1-10.4zM373.1 25L175.8 222.2c-8.7 8.7-15 19.4-18.3 31.1l-28.6 100c-2.4 8.4-.1 17.4 6.1 23.6s15.2 8.5 23.6 6.1l100-28.6c11.8-3.4 22.5-9.7 31.1-18.3L487 138.9c28.1-28.1 28.1-73.7 0-101.8L474.9 25C446.8-3.1 401.2-3.1 373.1 25zM88 64C39.4 64 0 103.4 0 152L0 424c0 48.6 39.4 88 88 88l272 0c48.6 0 88-39.4 88-88l0-112c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 112c0 22.1-17.9 40-40 40L88 464c-22.1 0-40-17.9-40-40l0-272c0-22.1 17.9-40 40-40l112 0c13.3 0 24-10.7 24-24s-10.7-24-24-24L88 64z"/></svg>
              </button>
              <button
              className="delete-skill-btn"
              onClick={()=>handleDeleteSkill(item)}
              >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path fill="#ffffff" d="M232.7 69.9L224 96L128 96C110.3 96 96 110.3 96 128C96 145.7 110.3 160 128 160L512 160C529.7 160 544 145.7 544 128C544 110.3 529.7 96 512 96L416 96L407.3 69.9C402.9 56.8 390.7 48 376.9 48L263.1 48C249.3 48 237.1 56.8 232.7 69.9zM512 208L128 208L149.1 531.1C150.7 556.4 171.7 576 197 576L443 576C468.3 576 489.3 556.4 490.9 531.1L512 208z"/></svg>
              </button>
            </div>
          </li>
         )}
       </ul>

    </div>
  )
}