

import React from 'react'
import { Link } from 'react-router-dom'

const Todolist = ({todolists}) => {
  return (
    <div>Todolist

        {todolists.map(e=>(
            <div key={e.id}>
                <Link to={`/todo/${e.id}`}>
                <div>
                    {e.task}</div></Link>
                   
            </div>
        ))}
    </div>
  )
}

export default Todolist