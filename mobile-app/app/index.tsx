import { useState } from "react";
import Splash from "./src/screens/Splash";
import Register from "./src/screens/Register";
//import Index from "";

export default function App(){
  const [ShowSplash,setShowSplash] = useState(true);

  if(ShowSplash){
  return<Splash onFinish={() => setShowSplash(false)}/>
  }
  
return <Register/>

}
