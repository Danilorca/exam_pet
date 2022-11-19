import React from 'react';
import * as Yup from "yup";
import { Field, Formik, Form} from 'formik';


const PetFom = (props) => {

  const {name, type, description, skill_1, skill_2, skill_3, onSubmitProp, btn_img, btn_texto } = props

  return (
    <div>
      <Formik
        initialValues={{
          name: name,
          type: type,
          description: description,
          skill_1: skill_1,
          skill_2: skill_2,
          skill_3: skill_3,
        }}
       validationSchema={Yup.object().shape({
          name: Yup.string()
          .min(3,"El nombre es muy corto")
          .max(30,"El nombre es muy largo")
          .required("Por favor ingresa un nombre"),
          type: Yup.string()
          .min(2,"El tipo es muy corto")
          .max(50,"El tipo es muy largo")
          .required("Por favor ingresa un tipo"),
          description:Yup.string()
          .min(2,"La descripción es muy corta")
          .max(50,"La descripción es muy larga")
          .required("Por favor ingresa una descripción"),
          skill_1:Yup.string(),
          skill_2:Yup.string(),
          skill_3:Yup.string()
        })}

        onSubmit={(values, { setSubmitting }) => {
          console.log("INFORMACIÓN DEL PETFORMIK", values);
          onSubmitProp(values);
        }}
      >
        {({ errors, touched, handleSubmit }) => {
          return (
            <div>
              <Form className="">
                <div className='boxs col-md-6'>
                  <div className="form-group">
                    <label htmlFor="name">Pet Name:</label>
                    <Field
                      className="form-control"
                      id="name"
                      type="text"
                      placeholder="Ingresa un nombre"
                      name="name"
                    />
                    {errors.name && touched.name && <p> {errors.name} </p>}
                  </div>

                  <div className="form-group">
                    <label htmlFor="type">Pet Type:</label>
                    <Field
                      className="form-control"
                      id="type"
                      type="text"
                      placeholder="Ingresa un Pet type"
                      name="type"
                    />
                    {errors.type && touched.type && <p> {errors.type} </p>}
                  </div>

                  <div className="form-group">
                    <label htmlFor="description">Pet Description:</label>
                    <Field
                      className="form-control"
                      id="description"
                      description="text"
                      placeholder="Ingresa una descripción"
                      type="Ingresa un Pet description"
                      name="description"
                    />
                    {errors.description && touched.description && <p> {errors.description} </p>}
                  </div>

                  <div className="form-group btns container-btns">
                  <button
                    className="btn-form"
                    type="submit"
                    disabled={
                      Object.values(errors).length > 0 ||
                      Object.values(touched).length === 0
                    }
                  >
                    <img src={btn_img} alt="botón de upload"/>
                    <span>
                        {btn_texto}
                    </span>

                  </button>
                </div>


                </div>




                <div className='boxs col-md-6'>

                  <h5>Skills(optional):</h5>

                  <div className="form-group">
                  <label htmlFor="skill_1">Skill 1:</label>
                  <Field
                    className="form-control"
                    id="skill_1"
                    type="text"
                    placeholder="Ingresa un skill"
                    name="skill_1"
                  />
                  {errors.skill_1 && touched.skill_1 && <p> {errors.skill_1} </p>}
                  </div>


                  <div className="form-group">
                  <label htmlFor="skill_2">Skill 2:</label>
                  <Field
                    className="form-control"
                    id="skill_2"
                    type="text"
                    placeholder="Ingresa un skill"
                    name="skill_2"
                  />
                  {errors.skill_2 && touched.skill_2 && <p> {errors.skill_2} </p>}
                  </div>

                  <div className="form-group">
                  <label htmlFor="skill_3">Skill 3:</label>
                  <Field
                    className="form-control"
                    id="skill_3"
                    type="text"
                    placeholder="Ingresa un skill"
                    name="skill_3"
                  />
                  {errors.skill_3 && touched.skill_3 && <p> {errors.skill_3} </p>}
                  </div>
                </div>

              </Form>
            </div>
          );
        }}
      </Formik>
    </div>
  );
}

export default PetFom;
