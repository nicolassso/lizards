import React from 'react'
import FormInput from '../../form-input/form-input.component';
import CustomButton from '../../custom-button/custom-button.component'
import './sign-up-page.styles.scss'
import { withRouter } from 'react-router-dom';
import backgroundVideo from '../../../videos/city-lights.mp4'


class SignUpPage extends React.Component {

    constructor(){ 
        super();

        this.state = {
            user: '',
            password: ''
        }
    }

    handleSubmit = async event => {
        event.preventDefault();

        const {user, password} = this.state;

        try{
            if(password==='lizard'){
                this.setState({user: event.target})
                this.props.history.push('/home');
            }else{
                alert("Contraseña incorrecta");
                return;
            }
        }catch(error){
            console.error(error);
        }

    }

    handleChange = event => {
        const {value, name} = event.target;

        this.setState({ [name]: value })
    }

    render(){
        return (
            <div className="sign-up">

                <video className='backgroundVideo' autoPlay loop muted src={backgroundVideo}/>


                <h2 className='text-intro' >Bienvenido, Lizard</h2>
                <span className='text-intro'>Dinos tu nombre y la contraseña única</span>

                <div className="sign-up-form">
                    <form onSubmit={this.handleSubmit}>
                        <FormInput
                        type='text'
                        name='user'
                        handleChange={this.handleChange}
                        value={this.state.user}
                        label='Nombre'
                        required
                        />
                        <FormInput
                        type='password'
                        name='password'
                        handleChange={this.handleChange}
                        value={this.state.password}
                        label='Contraseña'
                        required
                        />

                        <div className="buttons">
                        <CustomButton 
                            type="submit">
                                Entrar
                            </CustomButton>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default withRouter(SignUpPage);