import '../styles/Skills-panel.css'
import { useState } from 'react';
import { useEffect } from 'react';

export default function EducationForm({setSkillsData, setIsFormOpen, initialData}) {

  const emptyForm = {
    name: "",
    id: null
  }

  const [formData, setFormData] = useState(emptyForm);

  useEffect(()=>{
    if (initialData) {
      setFormData({...initialData})
    } else {
      setFormData(emptyForm)
    }
  }, [initialData])

 function handleSubmit(e) {
   e.preventDefault()

    if (formData.name==="") {
      setIsFormOpen(false)
      return
    }

    if (!formData.id) {
      formData.id = crypto.randomUUID()
    }

    if (initialData) { //updating exisitng edu
      setSkillsData((prev)=>
      prev.map(skill=> skill.id === initialData.id ? formData : skill))
    } else {          //adding new edu
      setSkillsData((prev)=>[...prev,formData])
    }
    setIsFormOpen(false)
 }

  function handleCancel() {
    setIsFormOpen(false)
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
          Skill:
      </label>
      <input type="text"autoComplete="off"
        value={formData.name}
        onChange={(e)=>setFormData({...formData, name: e.target.value})}/>

      <div className='editing-edu'>
        <button
        type="submit"
        className="submit-btn"
        > {initialData ? "Save Changes" : "Add"}
        </button >
        {initialData &&
        <button
        type='button'
        className="cancel-btn"
        onClick={handleCancel}>
        Cancel
        </button>}
      </div>

    </form>
  )
}