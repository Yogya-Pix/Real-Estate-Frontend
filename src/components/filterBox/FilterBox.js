import React , {useState} from 'react'
import './FilterBox.css'

function FilterBox(props) {

  const {title} = props; 
  const [isActive, setIsActive] = useState(false)

  return (
    <>
      <div className="dropdown">
        <div className="dropdown-btn" onClick={e => setIsActive(!isActive)}>{title}</div>
        {isActive &&(
          <div className="dropdown-content">
          <div className="dropdown-item">react</div>
          <div className="dropdown-item">react</div>
          <div className="dropdown-item">react</div>
        </div>
        )}
      </div>
    </>
  )
}

export default FilterBox
