import React from 'react';
import { Formik } from "formik";
import * as Yup from "yup";
import { Button, InputDiv, InputField, ErrorText,FuelTypeDiv,FuelLabel,FuelTypeErrorText} from '../styles/style';
import { useDispatch } from 'react-redux';
import { PostCarData } from '../redux/slice/API';

function Input() {
    const digitsOnly = (value) => /^\d+$/.test(value);
    const dispatch = useDispatch();  // Fixed typo: changed disptach to dispatch

    return (
        <>
            <Formik
                initialValues={{ 
                    company: "", 
                    name: "", 
                    year: "", 
                    kms_driven: "", 
                    fuel_type: "" // Add fuel_type to initial values
                }}
                onSubmit={async (values) => {
                    const promise = dispatch(PostCarData({ values }));

                    promise.then((action) => {
                        if (PostCarData.fulfilled.match(action)) {
                            console.log(action.payload, 'ezaan');
                        } else if (PostCarData.rejected.match(action)) {
                            alert("Error");
                        }
                    });
                }}
                validationSchema={Yup.object().shape({
                    company: Yup.string().required("Required"),
                    name: Yup.string().required("Required").min(2, 'Too Short!').max(50, 'Too Long!'),
                    year: Yup.number().required("Required").min(1900, "Year should be valid").max(new Date().getFullYear(), "Year cannot be in the future"),
                    kms_driven: Yup.string().required('Please enter kms driven').test('Digits only', 'Only digits allowed', digitsOnly),
                    fuel_type: Yup.string().required("Fuel type is required")
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
                                    type="number" // Fixed: changed type to number
                                    value={values.year}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    className={errors.year && touched.year ? "text-input error" : "text-input"}
                                />
                                {errors.year && touched.year && <ErrorText>{errors.year}</ErrorText>}

                                <InputField
                                    id="kms_driven"
                                    placeholder="Enter Kms Driven"
                                    type="text"  // Fixed: type remains text for number input
                                    value={values.kms_driven}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    className={errors.kms_driven && touched.kms_driven ? "text-input error" : "text-input"}
                                />
                                {errors.kms_driven && touched.kms_driven && <ErrorText>{errors.kms_driven}</ErrorText>}

                                {/* Fuel type selection */}
                                <div className="fuel-type">

  <FuelTypeDiv>
    <FuelLabel>
      <input
        type="radio"
        name="fuel_type"
        value="Petrol"
        checked={values.fuel_type === 'Petrol'}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      Petrol
    </FuelLabel>
    <FuelLabel>
      <input
        type="radio"
        name="fuel_type"
        value="Diesel"
        checked={values.fuel_type === 'Diesel'}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      Diesel
    </FuelLabel>
  </FuelTypeDiv>
  {errors.fuel_type && touched.fuel_type && <FuelTypeErrorText>{errors.fuel_type}</FuelTypeErrorText>}
</div>

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
