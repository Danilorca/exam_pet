import React, { useState } from 'react';
import {Link, useNavigate} from 'react-router-dom'
import {simplePost} from '../server/SimplePost'
import PetForm from '../components/PetFom'
import upLoad from '../asets/upLoad.svg'



const Create = () => {

  const [errors, setErrors] = useState();
  const navigate = useNavigate()

  const crearPet= async (values) =>{
    try{
      values.skills = [values.skill_1, values.skill_2 ,values.skill_3]
      const response = await simplePost(`http://localhost:8000/api/pets/`, values)
      console.log(response.data)

      if(response.data.message===""){
        console.log(response.data.pet)
        navigate("/")
      }else{
        const errorResponse = response.data.errors;
        const errorArr = []
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
      <div className='container-home'>
        <Link to={"/"} className='btn-add'>Back to home</Link>
        <h2>PET SHELTER</h2>
        <h3>Know a pet needing a home? </h3>
      </div>

      {errors?.map((error, index)=>(
        <div className='alert alert-danger' role="alert" key={index}> {error} </div>
      ))}

      <PetForm
      name=""
      type=""
      description=""
      skill_1=""
      skill_2=""
      skill_3=""
      onSubmitProp={crearPet}
      btn_img={upLoad}
      btn_texto="Add Pet"
      ></PetForm>

    </div>
  );
}

export default Create;
