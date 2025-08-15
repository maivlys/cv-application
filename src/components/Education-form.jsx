import '../styles/Education-panel.css'
import { useState } from 'react';
import { useEffect } from 'react';

export default function EducationForm({setEducationData, setisFormOpen, initialData}) {

  const emptyForm = {
    uni:"",
    field:"",
    start_date:"",
    end_date:"",
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
  if (initialData) { //updating exisitng edu
    setEducationData((prev)=>
    prev.map(ed=> ed.id === initialData.id ? formData : ed))
   } else {          //adding new edu
    setEducationData((prev)=>[...prev,formData])
   }
    setisFormOpen(false)
 }

  function handleCancel() {
    setisFormOpen(false)
  }

  function formatDateInput(raw) {
    return new Date(raw).toLocaleDateString("en-US", {
       month: "long",
       year: "numeric",
     })
   }

  return (
    <form onSubmit={handleSubmit}>
    <label
        htmlFor="uni-field">
          University:
        </label>
        <input type="text" id="uni-field" autoComplete="off"
        value={formData.uni}
        onChange={(e)=>setFormData({...formData, uni: e.target.value})}/>
        <label
        >
          Field of study:
        </label>
        <input type="text"  autoComplete="off"
        value={formData.field}
        onChange={(e)=>setFormData({...formData, field: e.target.value})}/>
        <label
        >
          Start date:
        </label>
        <input type="date"  autoComplete="off"
        value={formData.start_date}
        onChange={(e)=>{
          const raw = e.target.value
          setFormData({...formData, start_date: formatDateInput(raw)})
        }}/>
        <label
        >
          End date:
        </label>
        <input type="date"  autoComplete="off"
        value={formData.end_date}
        onChange={(e)=>{
          const raw = e.target.value
          setFormData({...formData, end_date: formatDateInput(raw)})}}/>
        <label
        >
          Location:
        </label>
        <input type="text"  autoComplete="off"
        value={formData.location}
        onChange={(e)=>setFormData({...formData, location: e.target.value})}/>

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