import { Component } from 'react'
import { login, signUp } from '../../services/operationsUser'

class UserSign extends Component {
    state = {
        email: '',
        password: '',
        msgError: ''
    }

    sign = (event) => {
        event.preventDefault()
        let user = {
            email: this.state.email,
            password: this.state.password
        }
        if (this.props.option === 'signUp') {
            signUp(user, () => {
                alert('User added...')
                this.setState({
                    email: '',
                    password: ''
                })
            })
        }
        else {
            login(user, (err, res) => {
                if (err)
                    this.setState({ msgError: err.response.data.error })
                else {
                    if (res.data.token) {
                        localStorage.setItem("token", res.data.token);
                    }
                    window.location.href = '/'
                }
            })
        }
    }

    handleEmail = (event) => {
        this.setState({
            email: event.target.value
        })
    }

    handlePassword = (event) => {
        this.setState({
            password: event.target.value
        })
    }
    render() {
        return (
            <div className="card bg-color">
                <div className="card-header">
                    <h2><label>{(this.props.option === 'login') ? 'Se connecter :' : "S'inscrire :"}</label></h2>
                </div>
                <div className="card-body">
                    <div style={{ color: 'red' }}>{this.state.msgError}</div>
                    <form type='submit' onSubmit={this.sign}>
                        <table>
                            <tbody>
                                <tr>
                                    <td><label>Email : </label></td>
                                    <td><input type='text' value={this.state.email} placeholder='Adresse email' onChange={this.handleEmail} /></td>
                                </tr>
                                <tr>
                                    <td><label>Mot de passe : </label></td>
                                    <td><input type='password' value={this.state.password} placeholder='Mot de passe' onChange={this.handlePassword} />
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <button className="btn btn-success">{this.props.option === 'signUp' ? "S'inscrire" : "Se connecter"}</button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </form>
                </div>
            </div>
        );
    }
}
export default UserSign;