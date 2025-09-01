import React from 'react'

const Employees=()=>{
    let Employees=[{"e_id":1,"e_name":"Galen","gender":"Male"},
{"e_id":2,"e_name":"Wilbur","gender":"Male"},
{"e_id":3,"e_name":"Agathe","gender":"Female"},
{"e_id":4,"e_name":"Hailey","gender":"Male"},
{"e_id":5,"e_name":"Anthia","gender":"Female"},
{"e_id":6,"e_name":"Isidore","gender":"Non-binary"},
{"e_id":7,"e_name":"Shaylynn","gender":"Female"},
{"e_id":8,"e_name":"Damara","gender":"Female"},
{"e_id":9,"e_name":"Maritsa","gender":"Female"},
{"e_id":10,"e_name":"Blinny","gender":"Female"},
{"e_id":11,"e_name":"Faun","gender":"Female"},
{"e_id":12,"e_name":"Claudelle","gender":"Female"},
{"e_id":13,"e_name":"Harp","gender":"Male"},
{"e_id":14,"e_name":"Fabe","gender":"Male"},
{"e_id":15,"e_name":"Northrup","gender":"Male"},
{"e_id":16,"e_name":"Dori","gender":"Female"},
{"e_id":17,"e_name":"Hercules","gender":"Male"},
{"e_id":18,"e_name":"Kelcy","gender":"Female"},
{"e_id":19,"e_name":"Maggie","gender":"Female"},
{"e_id":20,"e_name":"Foster","gender":"Male"},
{"e_id":21,"e_name":"Granny","gender":"Male"},
{"e_id":22,"e_name":"Tiffy","gender":"Non-binary"},
{"e_id":23,"e_name":"Candie","gender":"Female"},
{"e_id":24,"e_name":"Sharity","gender":"Female"},
{"e_id":25,"e_name":"Raffarty","gender":"Male"},
{"e_id":26,"e_name":"Cherin","gender":"Female"},
{"e_id":27,"e_name":"Alida","gender":"Female"},
{"e_id":28,"e_name":"Martguerita","gender":"Female"},
{"e_id":29,"e_name":"Tisha","gender":"Female"},
{"e_id":30,"e_name":"Tonya","gender":"Female"},
{"e_id":31,"e_name":"Hermon","gender":"Male"},
{"e_id":32,"e_name":"Mirelle","gender":"Female"},
{"e_id":33,"e_name":"Padriac","gender":"Genderqueer"},
{"e_id":34,"e_name":"Rudiger","gender":"Male"},
{"e_id":35,"e_name":"Lowe","gender":"Male"},
{"e_id":36,"e_name":"Lucia","gender":"Female"},
{"e_id":37,"e_name":"Mitchel","gender":"Male"},
{"e_id":38,"e_name":"Chrotoem","gender":"Male"},
{"e_id":39,"e_name":"Gibb","gender":"Male"},
{"e_id":40,"e_name":"Olia","gender":"Female"},
{"e_id":41,"e_name":"Kennie","gender":"Male"},
{"e_id":42,"e_name":"Batholomew","gender":"Male"},
{"e_id":43,"e_name":"Tyler","gender":"Male"},
{"e_id":44,"e_name":"Cloris","gender":"Female"},
{"e_id":45,"e_name":"Arleen","gender":"Female"},
{"e_id":46,"e_name":"Nina","gender":"Genderqueer"},
{"e_id":47,"e_name":"Cecilio","gender":"Male"},
{"e_id":48,"e_name":"Woodie","gender":"Male"},
{"e_id":49,"e_name":"Reilly","gender":"Male"},
{"e_id":50,"e_name":"Pasquale","gender":"Male"}];

return(
    <div className="container">
        <div className="row">
            <div className="col-6">
                <table className='table'>
                    <thead className='bg-dark text-white'>
                        <tr>
                            <th>Employee Id</th>
                            <th>Name</th>
                            <th>Gender</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Employees.map(emp=>(
                            <tr key={emp.id}>
                                <td>{emp.e_id}</td>
                                <td>{emp.e_name}</td>
                                <td>{emp.gender}</td>
                            </tr>
                        ))}
                        <tr></tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
)
}
export default Employees;