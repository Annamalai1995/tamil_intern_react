import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Bootstrap } from "./BootExample.js";
import { UseBoot } from "./Bootstrap.js";
import Heading from "./fun.js";
import { List } from "./fun.js";
import { Homepage } from "./Navbar1.js";
import { Datas } from "./Parameter.js";
import { Table } from "./Table.js";
import { Ternary } from "./TernaryOperator.js";
import { UseState1 } from "./UseNumber.js";
import { FirstHook } from "./USeState.js";

function App() {
  return (
    <>
    {/* <h1>Tamil selvan</h1>
    <b>SHANMUGA COLLEGE OF ENGINEERING</b>
    <i>BTECH-INFROMATION TECHNOLGY</i> */}
    {/* <Heading/>
    <List/>
    <Table/>
     */}
     {/* <FirstHook/>
     <UseState1/>
     
     */}
     {/* <UseBoot/>
     <Bootstrap/>
     <Datas where="./tamil.jpg"uyram="200px"agalam="200px"/> */}
     {/* <Ternary/> */}
     {/* <Homepage/> */}
     <BrowserRouter>
     <Homepage/>
     <Routes>
      <Route path="create" exact element={<Table/>}>
      </Route>
      <Route path="update" exact element={<List/>}/>
     </Routes>
     </BrowserRouter>

    </>
  );
}

export default App;
