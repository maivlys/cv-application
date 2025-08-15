import '../styles/Work-panel.css'
import { useState } from 'react';
import { useEffect } from 'react';

export default function WorkExperienceForm({setWorkExperienceData, setIsFormOpen, initialData}) {

  const emptyForm = {
    company:"",
    position:"",
    start_date:"",
    end_date:"",
    descr: "",
    location:"",
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
  if (!formData.id) {
    formData.id = crypto.randomUUID()
  }
  if (initialData) { //updating exisitng work exp
    setWorkExperienceData((prev)=>
    prev.map(ed=> ed.id === initialData.id ? formData : ed))
   } else {          //adding new work exp
    setWorkExperienceData((prev)=>[...prev,formData])
   }
    setIsFormOpen(false)
 }

  function handleCancel() {
    setIsFormOpen(false)
  }

  function formatDateInput(raw) {
    return new Date(raw).toLocaleDateString("en-US", {
       month: "long",
       year: "numeric",
     })
   }

  return (
    <form onSubmit={handleSubmit}>
        <label>
          Company:
        </label>
        <input type="text" autoComplete="off"
        value={formData.company}
        onChange={(e)=>setFormData({...formData, company: e.target.value})}/>
        <label>
          Position:
        </label>
        <input type="text"  autoComplete="off"
        value={formData.position}
        onChange={(e)=>setFormData({...formData, position: e.target.value})}/>
        <label>
          Description:
        </label>
        <textarea type="text"  autoComplete="off"
        value={formData.descr}
        onChange={(e)=>setFormData({...formData, descr: e.target.value})}/>
        <label>
          Start date:
        </label>
        <input type="date"  autoComplete="off"
        value={formData.start_date}
        onChange={(e)=>{
          const raw = e.target.value
          setFormData({...formData, start_date: formatDateInput(raw)})
        }}/>
        <label>
          End date:
        </label>
        <input type="date"  autoComplete="off"
        value={formData.end_date}
        onChange={(e)=>{
          const raw = e.target.value
          setFormData({...formData, end_date: formatDateInput(raw)})}}/>
        <label>
          Location:
        </label>
        <input type="text"  autoComplete="off"
        value={formData.location}
        onChange={(e)=>setFormData({...formData, location: e.target.value})}/>

        <div className='editing-work'>
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