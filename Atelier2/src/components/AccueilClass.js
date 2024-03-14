import React from 'react';
const msg = "Bienvenue à notre site de la société : Ma société ! ";
class AccueilClass extends React.Component {    
    render() { 
        return ( <div>
                   <h1>{msg}</h1>                 
                 </div>);
    }
} 
export default AccueilClass;