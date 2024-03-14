import React, { Component } from 'react'

class Apropos extends Component {
    constructor(props) {
        super(props);
        this.state = {  
            titre :"Qui sommes nous ?",
            contact : {
                        nom : "Ma Société",
                        email : "contact@masociete.com",
                        logo:'logo512.png'
                      },    
        }
    }
    render() { 
        return ( 
            <div>
                <div className="card">
                    <div className="card-header">
                        <h2><label>{this.state.titre}</label></h2>
                    </div>

                    <div className="row p-2">
                        <div className="col col-auto">
                            <img width={100} src={this.state.contact.logo} alt=""/>
                        </div>
                        <div className="col">
                            <ul className="list-group">
                                <li className="list-group-item">{this.state.contact.nom}</li>
                                <li className="list-group-item">{this.state.contact.email}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div> );
    }
}
 
export default Apropos;