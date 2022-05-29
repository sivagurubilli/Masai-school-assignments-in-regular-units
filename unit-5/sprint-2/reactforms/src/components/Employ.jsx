


const Employee =({details}) =>{
   
    return(
        <div className="employee">
<h2>Employee Details</h2>
<table>
<thead>

    <tr>

        <th>S.no</th>
        <th>datatype</th>
        <th>details</th>
    </tr>
</thead>


<tbody>
     <tr>
     <td>{details.id}</td>
  <td>Name</td>
<td>{details.name}</td>
     </tr>
     <tr>
     <td>{details.id}</td>
  <td>Age</td>
<td>{details.age}</td>
     </tr>

     <tr>
     <td>{details.id}</td>
  <td>Address</td>
<td>{details.address}</td>
     </tr>
     <tr>
     <td>{details.id}</td>
  <td>Department</td>
<td>{details.role}</td>
     </tr>

     <tr>
     <td>{details.id}</td>
  <td>Salary</td>
<td>{details.salary}</td>
     </tr>

     <tr>
     <td>{details.id}</td>
  <td>Marital status</td>
<td>{details.ismarry?'yes':'no'}</td>
     </tr>



</tbody>



</table>
        </div>
    )
}

export default Employee