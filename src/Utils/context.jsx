import { createContext, useState } from "react";

export const FormDetailsContext = createContext();

const FormContext = (props) => {
  const [userForm, setUserForm] = useState({
    industryName: "",
    firstName: "",
    lastName: "",
    nameOfIndustry: "",
    nameOfIndividual: "",
    email: "",
    phoneNumber: "",
  });

  return (
    <FormDetailsContext.Provider value={[userForm, setUserForm]}>
      {props.children}
    </FormDetailsContext.Provider>
  );
};

export default FormContext;
