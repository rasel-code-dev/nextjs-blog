import { useRouter } from "next/router"

const withAuth = (WrapperComponent)=>{ 

  


  return (props)=>{ 
    const router = useRouter()

    if(typeof window !== "undefined"){
      
      if(false){
        return <WrapperComponent {...props} />
      } else{
        router.push("/")
        return null
      }

    }
    
    //  if we are on server ...........
    return <WrapperComponent {...props} />
    
  }

}

export default withAuth 



