import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useEffect, useState } from 'react';
import Header from './Component/Header';


// get element from the local storage
const getData=()=>
{
  let list=localStorage.getItem('myList');
  if(list)return JSON.parse(list);
  return [];
} 
function App() {
  const [value,setValue]=useState('');
  const [list,setList]=useState(getData())
  const [edit,setEdit]=useState(null)
  function addList()
  {
    if(edit)
    {
        let newList=list.map((item)=>
        {
         if(item.id===edit)return {...item,value:value};
         return item
        })
    setList(newList)
    setEdit(null)
    setValue('')
    }
    else
    {

      setList([...list,{value:value,id:Math.random()}])
      setValue('')
    }
  }
  function handle(myvalue,myid)
  {
    setValue(myvalue)
    setEdit(myid)
  }
  function reverseList()
  {
    let newList=[...list].reverse()  
   setList(newList);
  }
 useEffect(()=>
 {
  localStorage.setItem('myList',JSON.stringify(list))
 },[list])

  return (<>
  <Header/>
   <div className="container mt-5 text-center">
    
    <div className="row justify-content-center">
      <div className="col-md-5  col-8 text-center">
      <Form.Control type="text" placeholder="Enter Message" value={value} onChange={(e)=>setValue(e.target.value)} />      
      </div>  
      {
        (edit)?
        <div className='col-2'><Button variant="success" onClick={addList}>Edit</Button></div>  
     :
     <div className='col-2 '><Button variant="success" onClick={addList}>Success</Button></div>  

      } 
    </div>
    <div className='col-2 mt-2 mt-md-0'><Button variant="primary" onClick={reverseList}>Reverse</Button></div>  

   </div>

    <div className="container">
    {
    list.map((e)=>
    {
      return <div className="row mt-3 justify-content-center" key={e.id} >
        <hr/>
      <div className=" boarder col-6 text-center ">{e.value}</div>
      <div className="col-2 text-center"><div className='col-sm-2'><Button variant="success" onClick={()=>handle(e.value,e.id)}>Edit</Button></div>  </div>
      <div className="col-2 text-center"><div className='col-sm-2'><Button variant="danger" onClick={()=>setList(list.filter(item=>item.id!==e.id))} >delete</Button></div>  </div>
      
    </div>
    
    })
   }
     
    </div>
   
  
   
  

 </>

  );
}

export default App;
