import React, { useState } from 'react'
// import View from './View';

function Adddefect() {

  const [defect, setDefect] = useState({
    category: '',
    discription: '',
    priority: '',
  });
  

  const [defectlist,setDefectlist] = useState([])
  const [view,setView] = useState(false)
  

  const handleSubmit = (e) => {
    e.preventDefault();
    setDefectlist([...defectlist, defect]);
    alert('Added Successfully');
  };

  return (
    <div className="container mt-5" style={{display:'flex',flexDirection:'column',alignItems:'center'}} >
      <form onSubmit={handleSubmit} >
      <div className='mb-3' style={{display:'flex',justifyContent:'space-evenly', width:'250px'}}>
            <label>
                Defect Category
            </label>
            <select value={defect.category} onChange={(e) => setDefect({ ...defect, category: e.target.value })}>
                <option value="">Select Category</option>
                <option value="UI">UI</option>
                <option value="Functional">Functional</option>
                <option value="System">System</option>
                <option value="Other">Other</option>
            </select>
        </div>
        <div className="mb-3" style={{display:'flex',justifyContent:'space-evenly', width:'300px'}}>
            <label className="form-label">&nbsp;&nbsp;Discription</label>&nbsp;
            <textarea
              className="form-control"
              id="message"
              rows="2"
              columns='5'
              placeholder="Your message here"
              name='discription'
              value = {defect.discription}
              onChange={(e) => setDefect({...defect, discription:e.target.value})}
            ></textarea>
        </div>
        <div className='mb-4' style={{display:'flex',justifyContent:'space-evenly', width:'300px'}}>
            <label className='form-label'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Priority</label>&nbsp;&nbsp;&nbsp;
            <input 
              type='number' 
              className='form-control'
              name='priority'
              value={defect.priority}
              onChange={(e) => setDefect({...defect, priority:e.target.value})}
              />
        </div>
        <button type="submit" className="btn btn-secondary" >
            Submit
          </button>
      </form>
      <button type="submit" className="btn btn-secondary mt-3" onClick={(e) => setView(true)} onDoubleClick={(e)=> setView(false)} >View Defects</button> 

      {view && <>
        <table style={{width:'60%'}} className='table'>
        <thead>
          <tr>
            <th>Defect Category</th>
            <th>Description</th>
            <th>Priority</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {defectlist.map((defet, index) => {
            return(<tr key={defet.index}>
              <td>{defet.category}</td>
              <td>{defet.discription}</td>
              <td>{defet.priority}</td>
            </tr>)
          })}
        </tbody>
        </table>
      </>}
      
    </div>
  )
}

export default Adddefect
