
import Api from "./axios"


export const getUserData=async()=>{
  try {
    const response=await Api.get(`/auth/details/`)
    return response.data
  } catch (error) {
    console.log(error)
  }
}