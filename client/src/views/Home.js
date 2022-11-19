import React, { useEffect, useState } from 'react';
import { simpleGet } from '../server/SimpleGet';
import { Link } from 'react-router-dom';

const Home = () => {

  const [pets, setPets] = useState();

  const getPet = async() =>{
    try{
      const response = await simpleGet('http://localhost:8000/api/pets/')
      console.log(response.data.pets)
      setPets(response.data.pets)
    }catch(error){
      console.log(error)
    }
  }

  useEffect(() => {
    getPet()
  }, []);

  return (
    <div>
      <div className='container-home'>
        <Link to={"/pets/new"} className='btn-add'>add a pet to the Shelter</Link>
        <h2>PET SHELTER</h2>
        <h3>These pets are looking for a good home </h3>
      </div>
      <table className="table table-striped  table-bordered border-dark">
        <thead className='table-secondary'>
            <tr>
                <th>Name</th>
                <th>Type</th>
                <th>Actions</th>
            </tr>
        </thead>
        <tbody>
            {pets?.map((pet)=>
            <tr key={pet._id}>
                <td>{pet.name} </td>
                <td>{pet.type} </td>
                <td>
                <Link to={`/pets/${pet._id}`} > details </Link> | <Link to={`/pets/${pet._id}/edit`} > edit </Link>
                </td>
            </tr>
            )}

        </tbody>
    </table>


    </div>
  );
}

export default Home;
