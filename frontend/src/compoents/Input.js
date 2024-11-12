import React from 'react';
import { Formik } from "formik";
import * as Yup from "yup";
import { Button, InputDiv,InputField,ErrorText} from '../styles/style';

function Input() {
    const digitsOnly = (value) => /^\d+$/.test(value)
  return (
    <>
        <Formik
          initialValues={{ company: "", name: "", year: "", kms_driven	: "" }}
          onSubmit={async (values) => {
            await new Promise(resolve => setTimeout(resolve, 500));
            alert(JSON.stringify(values, null, 2));
          }}
          validationSchema={Yup.object().shape({
            company: Yup.string().required("Required"),
            name: Yup.string().required("Required").min(2, 'Too Short!').max(50, 'Too Long!'),
            year: Yup.string()
              .required("Required"),
            kms_driven	:Yup.string().required('please enter kms driven ').test('Digits only', 'digits_only', digitsOnly)
            
          })}
        >
          {props => {
            const { values, touched, errors, isSubmitting, handleChange, handleBlur, handleSubmit } = props;
            return (
              <form onSubmit={handleSubmit} style={{ width: "100%" }}>
              <InputDiv>

                <InputField
                  id="company"
                  placeholder="Enter the car company"
                  type="text"
                  value={values.company}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={errors.company && touched.company ? "text-input error" : "text-input"}
                />
                {errors.company && touched.company && <ErrorText>{errors.company}</ErrorText>}

                <InputField
                  id="name"
                  placeholder="Enter car name"
                  type="text"
                  value={values.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={errors.name && touched.name ? "text-input error" : "text-input"}
                />
                {errors.name && touched.name && <ErrorText>{errors.name}</ErrorText>}

                <InputField
                  id="year"
                  placeholder="Enter car model year"
                  type="year"
                  value={values.year}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={errors.year && touched.year ? "text-input error" : "text-input"}
                />
                {errors.year && touched.year && <ErrorText>{errors.year}</ErrorText>}

                <InputField
                  id="kms_driven"
                  placeholder="Enter Kms Driven"
                  type="year"
                  value={values.kms_driven	}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={errors.kms_driven	 && touched.kms_driven	 ? "text-input error" : "text-input"}
                />
                {errors.kms_driven	 && touched.kms_driven	 && <ErrorText>{errors.kms_driven	}</ErrorText>}

                <Button type="submit" disabled={isSubmitting}>
                  Submit
                </Button>
                </InputDiv>
              </form>
              
            );
          }}
        </Formik>
     
    </>
  );
}

export default Input;
