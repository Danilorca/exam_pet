import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { simpleGet } from '../server/SimpleGet';
import {simplePut} from '../server/SimplePut'
import edit from '../asets/edit.svg'
import PetForm from '../components/PetFom'




const Edit = () => {
  const {id} = useParams()
  const navigate = useNavigate()
  const [pets, setPets] = useState();
  const [errors, setErrors] =useState();


  const getOnePet = async () =>{
    try{
      const response = await simpleGet(`http://localhost:8000/api/pets/${id}`)
      console.log(response.data.pet)
      setPets(response.data.pet)
    }catch (error){
      console.log(error)
    }
  }

  useEffect(() => {
    getOnePet()
  }, []);


  const editPet = async (values) =>{
    try{
      values.skills = [values.skill_1, values.skill_2 ,values.skill_3]
      const response = await simplePut(`http://localhost:8000/api/pets/${id}`, values)
      console.log(response.data.pet)

      if(response.data.message===""){
        console.log(response.data.pet)
        navigate(`/`)
      }else{
        const errorResponse = response.data.errors;
        const errorArr= [];
        for (const llave of Object.keys(errorResponse)){
          errorArr.push(errorResponse[llave].message)
        }
        setErrors(errorArr)
      }

    }catch(error){
      console.log(error)
    }
  }


  return (
    <div>
      <div className='container-edit'>
        <Link to={"/"} className='btn-add'>Back to home</Link>
        <h2>PET SHELTER</h2>
        <h3>Edit {pets?.name} </h3>
      </div>

      {errors?.map((error, index)=>(
        <div className='alert alert-danger' role="alert" key={index}>{error} </div>
      ))}

      {
        pets&&
        <PetForm
          name={pets.name}
          type= {pets.type}
          description= {pets.description}
          skill_1= {pets.skills[0]}
          skill_2= {pets.skills[1]}
          skill_3= {pets.skills[2]}
          onSubmitProp={editPet}
          btn_img={edit}
          btn_texto="Edit Pet"
        />
      }

    </div>



  );
}

export default Edit;
