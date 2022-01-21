import { Formik } from 'formik';
import { Input, LoginForm, LoginContainer, Button, RegisterContainer, RegisterForm } from "../../components/UI";
import { Colors } from '../../components/UI/color';
import PropTypes from 'prop-types';
import { useMutation } from 'react-query';
import API, { HttpMethod } from '../../components/Fetch';
import { FaRegCalendarAlt } from 'react-icons/fa';
import { useEffect, useContext, useState } from 'react';
import { AgendaContext } from '../../contexts/AgendaContext';

const Login = ({ setToken } : {setToken : any}) => {
    const { isDarkTheme, setIsDarkTheme } = useContext(AgendaContext);

    const [modeRegister, setModeRegister] = useState<boolean>(false);
    const [repeatPassword, setRepeatPassword] = useState<string>('');

    const onSubmit = useMutation((dados) => API(HttpMethod.Post, '/autenticacao', dados));
    useEffect(() => {
        if (onSubmit.isSuccess) {
            setToken(onSubmit.data)
        } else if (onSubmit.isError) {
            console.log(onSubmit.error)
        };
    }, [setToken, onSubmit])
    

    return ( // TODO : REGISTRO -> BOTAO CANCELAR, E REGISTRAR POR MEIO DA API - Criar componente das paginas de login e registro
        <>
            {modeRegister ?
                <RegisterContainer>
                    <Formik 
                        onSubmit={(values : any) => onSubmit.mutate(values)}
                        initialValues={{
                            NAME: '',
                            EMAIL: '',
                            SENHA: ''
                        }}
                    >
                        {({ values, handleChange, handleSubmit }) => (
                            <RegisterForm onSubmit={handleSubmit}>
                                <div style={{gridArea:'LHEAD', width:'100%', height:'100%', fontSize:'1.7rem', textAlign:'center', display:'flex', flexWrap: 'wrap', justifyContent:'center', alignContent:'center'}}>
                                    <FaRegCalendarAlt onClick={() => setIsDarkTheme(!isDarkTheme)} />
                                    <span style={{width: '100%'}}>Agenda App</span>
                                </div>

                                <Input name={'NAME'} value={values.NAME} onChange={handleChange} type={'text'} placeholder={'Nome'} style={{gridArea: 'LNAME', width: '80%'}}></Input>
                                <Input name={'EMAIL'} value={values.EMAIL} onChange={handleChange} type={'email'} placeholder={'E-Mail'} style={{gridArea: 'LUSER', width: '80%'}}></Input>
                                <Input name={'SENHA'} value={values.SENHA} onChange={handleChange} type={'password'} placeholder={'Senha'} style={{gridArea: 'LPASS', width: '80%'}}></Input>
                                <Input value={repeatPassword} onChange={e => setRepeatPassword(e.target.value)} type={'password'} placeholder={'Repita a senha'} style={{gridArea: 'CPASS', width: '80%'}}></Input>

                                <Button disabled={repeatPassword === values.SENHA} type={'submit'} style={{gridArea: 'LBTN'}} colorx={Colors.Blue}>Cadastre-se</Button>
                            </RegisterForm>
                        )}
                    </Formik>
                </RegisterContainer>
            :
                <LoginContainer>
                    <Formik 
                        onSubmit={(values : any) => onSubmit.mutate(values)}
                        initialValues={{
                            EMAIL: '',
                            SENHA: ''
                        }}
                    >
                        {({ values, handleChange, handleSubmit }) => (
                            <LoginForm onSubmit={handleSubmit}>
                                <div style={{gridArea:'LHEAD', width:'100%', height:'100%', fontSize:'1.7rem', textAlign:'center', display:'flex', flexWrap: 'wrap', justifyContent:'center', alignContent:'center'}}>
                                    <FaRegCalendarAlt onClick={() => setIsDarkTheme(!isDarkTheme)} />
                                    <span style={{width: '100%'}}>Agenda App</span>
                                </div>

                                {/* <Input name={'NAME'} value={values.NAME} onChange={handleChange} type={'text'} placeholder={'Nome'} style={{gridArea: 'LNAME', width: '80%'}}></Input> */}
                                <Input name={'EMAIL'} value={values.EMAIL} onChange={handleChange} type={'email'} placeholder={'E-Mail'} style={{gridArea: 'LUSER', width: '80%'}}></Input>
                                <Input name={'SENHA'} value={values.SENHA} onChange={handleChange} type={'password'} placeholder={'Senha'} style={{gridArea: 'LPASS', width: '80%'}}></Input>
                                <span id={'cadastro'} onClick={e => setModeRegister(true)} style={{gridArea: 'LSPAN', textAlign: 'right', fontSize: '0.9rem', width: '90%'}}>Não possui uma conta?</span>

                                <Button type={'submit'} style={{gridArea: 'LBTN'}} colorx={Colors.Blue}>Entrar</Button>
                            </LoginForm>
                        )}
                    </Formik>
                </LoginContainer>
            }
        </>
    )
}

export default Login;

Login.propTypes = {
    setToken: PropTypes.func.isRequired
}