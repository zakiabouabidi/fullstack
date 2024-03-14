import React from 'react';
class PresentationClass1 extends React.Component {
    state = {
        titre: "Qui sommes nous ?",
        contact: {
                   nom: "Ma Société",
                   email: "contact@masociete.com",
                   logo: <img src="images/informatique.jpg" alt="PhotoSociete"></img>
                 },
        departs: [{ id: 1, nom: "Commercial" },
                  { id: 2, nom: "Développement" },
                  { id: 3, nom: "Maintenance" }]
    };
    render() {
        return (
            <div>
                <h1>{this.state.titre}</h1>
                <table>
                    <tbody>
                        <tr>
                            <td>{this.state.contact.logo}</td>
                            <td>
                                <li>Société : {this.state.contact.nom}</li>
                                <li>Email : {this.state.contact.email}</li>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <h1>Liste des départements </h1>
                <table>
                    <tbody>
                        {this.state.departs.map((d, i) =>
                            <tr key={i}><td>{d.id}</td><td>{d.nom}</td></tr>)
                        }
                    </tbody>
                </table>
            </div>);
    }
}
export default PresentationClass1;