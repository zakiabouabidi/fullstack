import { eventWrapper } from '@testing-library/user-event/dist/utils';
import { Component } from 'react';
import { add, getAll, remove, update } from '../../../src/services/operationsDepart';
import FormAjout from './formAjout';


class ListDeparts extends Component {
    constructor(props) {
        super(props);
    }
    state = {
        departs: [],
        departToUpdate: null
    }

    getDepartements = () => {
        getAll((res) => {
            this.setState({
                departs: res.data
            })
        })
    }

    componentDidMount() {
        this.getDepartements()
    }

    addDepart = (dep) => {
        if (!this.state.departToUpdate) {
            let maxId = this.state.departs.length > 0 ? Math.max(...this.state.departs.map((d, i) => d.code)) : 0
            let newDepart = {
                code : maxId + 1,
                nom : dep
            }
            add(newDepart, () => this.getDepartements())
        }
        else {
            let elt = this.state.departToUpdate
            console.log(elt)

            let newDepart = { code: elt.code, nom: dep }
            update(elt._id, newDepart, () => this.getDepartements())

            this.setState({
                departToUpdate: null
            })

        }
    }

    updateDepart = (d) => {
        this.setState({
            departToUpdate: d
        })

    }

    render() {
        return (
            
            <div className="card m-2">
                <div className="card-header">
                    {!(localStorage.getItem('token')) ?
                        <h2>Problème d'accès </h2>
                        :
                        <h2>Liste des départements</h2>}
                </div>
                <div className="card-body">
                    {!(localStorage.getItem('token')) ?
                        <label>Veuillez vous connecter ...!</label>
                        :
                    <><FormAjout addDepart={this.addDepart} updateDepart={this.state.departToUpdate} />
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Code</th>
                                <th>Département</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.departs.map((d, indice) =>
                                <tr key={indice}>
                                    <td>{d.code}</td>
                                    <td>{d.nom}</td>
                                    <td><button className="btn btn-success" onClick={() => this.updateDepart(d)}>Editer</button></td>
                                    <td><button className="btn btn-danger" onClick={() => remove(d._id, () => this.getDepartements())}>X</button></td>
                                </tr>)}

                        </tbody>
                    </table></>}
                </div>
            </div>);
    }
}

export default ListDeparts;