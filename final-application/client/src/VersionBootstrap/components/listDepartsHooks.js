import { useEffect, useState } from 'react';
import { add, getAll, remove, update } from '../../../src/services/operationsDepart';
import FormAjout from './formAjout';

function ListDepartsHooks() {
    const [departs,setDeparts] = useState([]);
    const [departToUpdate,setDepartToUpdate] = useState(null);
    
    const getDepartements=()=>{
        getAll((res)=> {
            setDeparts(res.data)
        }) 
    };

    useEffect(()=>{
        getDepartements()      
    });
  
    const addDepart=(dep)=>{
        if(!departToUpdate){
              let maxId = departs.length>0 ? Math.max(...departs.map((d,i)=>d.code)) : 0
              let newDepart ={
                  code : maxId +1,
                  nom : dep
              }
              add(newDepart, () => getDepartements())
          }
          else{
              let elt = departToUpdate
              console.log(elt)
              
              let newDepart = { code : elt.code, nom : dep}
              update(elt._id, newDepart, ()=> getDepartements())
              
              setDepartToUpdate(null)
            }
    }
       
    const updateDepart=(d)=>{
        setDepartToUpdate(d);
    }

    return ( 
        <div className="card m-2">
            <div className="card-header">
                <h2>Liste des départements</h2>
            </div>
            <div className="card-body">
                <FormAjout addDepart={addDepart} updateDepart={departToUpdate}/>
                <table className="table">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Département</th>
                            </tr>
                        </thead>
                        <tbody>
                            {departs.map( (d , indice) => 
                            <tr key={indice}>
                                    <td>{d.code}</td>
                                    <td>{d.nom}</td>
                                    <td><button className="btn btn-success" onClick={()=>updateDepart(d)}>Editer</button></td>
                                    <td><button className="btn btn-danger" onClick={()=>remove(d._id, () => getDepartements())}>X</button></td>
                            </tr>)}
                        
                        </tbody>
                </table> 
            </div> 
        </div>);
}
export default ListDepartsHooks;