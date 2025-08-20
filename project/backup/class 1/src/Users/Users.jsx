import React from "react";
const User=()=>{
    let Users =[{"e_id":1,"e_name":"Eleanor","gender":"Female"},
{"e_id":2,"e_name":"Anabel","gender":"Female"},
{"e_id":3,"e_name":"Anabel","gender":"Genderqueer"},
{"e_id":4,"e_name":"Rosabel","gender":"Female"},
{"e_id":5,"e_name":"Deni","gender":"Female"},
{"e_id":6,"e_name":"Felicdad","gender":"Female"},
{"e_id":7,"e_name":"Janine","gender":"Polygender"},
{"e_id":8,"e_name":"Witty","gender":"Male"},
{"e_id":9,"e_name":"Marshal","gender":"Male"},
{"e_id":10,"e_name":"Kissie","gender":"Female"}]

return <div className="container">
    <div className="row">
        <div className="col-6">
            <table className="table">
                <thead className="bg-dark text-white">
                    <tr>
                        <th>Employee Id</th>
                        <th>Name</th>
                        <th>Gender</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        Users.map((emp,index)=>{
                            return <tr key={index}>
                                <td>{emp.e_id}</td>
                                <td>{emp.e_name}</td>
                                <td>{emp.gender}</td>

                            </tr>
                        })
                    }
                </tbody>
            </table>
        </div>
    </div>
</div>
}
export default User;