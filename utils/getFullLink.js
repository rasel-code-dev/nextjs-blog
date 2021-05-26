import {backend} from "../api/axiosInstance";


export function getFullLink(link){
  if(link){
    return backend + "/" + link
  }
}