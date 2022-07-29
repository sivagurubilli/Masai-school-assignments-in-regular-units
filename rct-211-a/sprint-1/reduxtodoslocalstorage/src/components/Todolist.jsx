

import React from 'react'
import { Link } from 'react-router-dom'

const Todolist = ({todolists}) => {

  return (
    <div>Todolist

        {todolists.map(e=>(
            <div key={e.id}>
                <Link to={`/todo/${e.id}`}>
                <h4>
                    {e.task}</h4></Link>
                   
            </div>
        ))}
    </div>
  )
}

export default Todolist