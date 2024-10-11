

export const Validate = (values) => {
  let errors ={};

  if(!values.username.trim())
  {
     errors.username ="Username required"
  }
  if(!values.email.trim())
  {
    errors.email="Email required"
  }
  else if(!/^[a-zA-Z0-9_!#$%&'*+/=?^_{|}~-]+@([a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[A-Za-z]{2,6})$/.test(values.email))
    {
      errors.email="Email address is invalid"
    }
    
  if(!values.password1.trim())
  {
    errors.password1 ="Password is required"
  }
  else if(values.password1.length < 8)
  {
    errors.password1 ="Password need to be 8 character or more"
  }

  if(!values.password2.trim())
  {
    errors.password2 = "Password is required"
  }
  else if(values.password2 != values.password1)
  {
    errors.password2 ="Password do not match"
  }

  return errors;
}


