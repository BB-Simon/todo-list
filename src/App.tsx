import React, {FC} from "react";
import Person, {HairColor} from "./components/Person";

const App:FC = () => {
  return (
    <>
      <Person name="John" age={28} isMarreid={false} HairColor={HairColor.Pink} userType="instructor" />
    </>
  )
    
}

export default App;
