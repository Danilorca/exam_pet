import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { simpleGet } from '../server/SimpleGet';
import { simpleDelete } from '../server/SimpleDelete';
import { simplePut } from '../server/SimplePut';
import home from '../asets/home.svg'
import like from '../asets/Like.svg'

const Details = () => {
  const {id} = useParams()
  const [pets, setPets] = useState();
  const [likes, setLikes] = useState();
  const [btnStado, setBtnStado] = useState(false);
  const navigate = useNavigate()

  const getPet = async () =>{
    try{
      const response = await simpleGet(`http://localhost:8000/api/pets/${id}`)
      console.log(response.data.pet)
      setPets(response.data.pet)
      setLikes(response.data.pet.likes)
    }catch(error){
      console.log(error)
    }
  }

  const deletePet = async()=>{
    const response = await simpleDelete(`http://localhost:8000/api/pets/${id}`)
    console.log(response)
    navigate("/")
  }

  const updatePet = async () =>{
    let values = {likes:likes+1}
    const response = await simplePut(`http://localhost:8000/api/pets/${id}`, values)
    setLikes((oldLikes)=>oldLikes+1)
    console.log(response.data)
  }

  const manejarClick = () =>{
    updatePet()
    setBtnStado(true)
  }

  useEffect(() => {
    getPet();
  }, []);

  return (
    <div>
      <div className='container-detalles'>
        <Link to={"/"} className='btn-add'>Back to home</Link>
        <h2>PET SHELTER</h2>
      </div>
      <div className='container-detail'>
          <h3>Details about: {pets?.name}  </h3>
          <button onClick={()=>deletePet()} className='btn-remove'>
            <img src={home} alt="botón de home"/>
            Adopt {pets?.name}
          </button>
      </div>

      <div className='container-details'>
        <h3>Pet type: {pets?.type} </h3>
        <h3>Pet type: {pets?.description} </h3>


        <h3>Pet skills: </h3>
        {pets?.skills.map((skill,index)=>
          <h4 className='skills-margin' key={index}> {skill} </h4>
        )}

        <div className= "container-btns">
          <button disabled={btnStado} onClick={()=>manejarClick()} className='btn-like'>
            <img src={like} alt="botón de like"/>
            Like {pets?.name}
          </button>

          <p className='like'> {likes&&likes } like(s)</p>
        </div>


      </div>
    </div>
  );
}

export default Details;
