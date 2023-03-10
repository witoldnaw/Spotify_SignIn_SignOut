import { FormEvent } from "react"


export const getFormData = ( e: React.FormEvent<HTMLFormElement>) => {
   const form = e.target as HTMLFormElement;
    const { email, password, profilName, selectMonth, selectDay, selectYear, gender } = form
    const formData = {
      email: email?.value,
      password: password?.value,
      name: profilName?.value,
      selectMonth: selectMonth?.value,
      selectDay: selectDay?.value,
      selectYear: selectYear?.value,
      gender: gender?.value,


       
    }
  
    return formData
  }