import { Formik } from 'formik';
import { Input, Button } from "../../components/UI";
import { LoginForm, LoginContainer, RegisterContainer, RegisterForm } from "../../components/UI/login";
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

    const onSubmitLogin = useMutation((dados) => API(HttpMethod.Post, '/autenticacao', dados));
    const onSubmitRegister = useMutation((dados) => API(HttpMethod.Post, '/usuario', dados));
    useEffect(() => {
        if (onSubmitLogin.isSuccess) {
            setToken(onSubmitLogin.data);
        } else if (onSubmitLogin.isError) {
            console.log(onSubmitLogin.error);
        };

        if (onSubmitRegister.isSuccess) {
            window.location.reload();
        } else if (onSubmitRegister.isError) {
            console.log(onSubmitRegister.error);
        };
    }, [setToken, onSubmitLogin, onSubmitRegister])

    return (
        <>
            {modeRegister ?
                <RegisterContainer>
                    <Formik 
                        onSubmit={(values : any) => onSubmitRegister.mutate(values)}
                        initialValues={{
                            NOME: '',
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

                                <Input name={'NOME'} value={values.NOME} onChange={handleChange} type={'text'} placeholder={'Nome'} style={{gridArea: 'LNAME', width: '80%'}}></Input>
                                <Input name={'EMAIL'} value={values.EMAIL} onChange={handleChange} type={'email'} placeholder={'E-Mail'} style={{gridArea: 'LUSER', width: '80%'}}></Input>
                                <Input name={'SENHA'} value={values.SENHA} onChange={handleChange} type={'password'} placeholder={'Senha'} style={{gridArea: 'LPASS', width: '80%'}}></Input>
                                <Input value={repeatPassword} onChange={e => setRepeatPassword(e.target.value)} type={'password'} placeholder={'Repita a senha'} style={{gridArea: 'CPASS', width: '80%'}}></Input>

                                <div style={{gridArea: 'LBTN', display:'flex'}}>
                                    <Button type={'button'} onClick={e => {setModeRegister(false); setRepeatPassword('')}} style={{width: '50%'}} colorPrimary={Colors.Blue}>Voltar</Button>
                                    <Button disabled={(repeatPassword === '') || (repeatPassword !== values.SENHA)} type={'submit'} style={{width: '50%'}} colorPrimary={Colors.Blue}>Cadastre-se</Button>
                                </div>
                            </RegisterForm>
                        )}
                    </Formik>
                </RegisterContainer>
            :
                <LoginContainer>
                    <Formik 
                        onSubmit={(values : any) => onSubmitLogin.mutate(values)}
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

                                <Input name={'EMAIL'} value={values.EMAIL} onChange={handleChange} type={'email'} placeholder={'E-Mail'} style={{gridArea: 'LUSER', width: '80%'}}></Input>
                                <Input name={'SENHA'} value={values.SENHA} onChange={handleChange} type={'password'} placeholder={'Senha'} style={{gridArea: 'LPASS', width: '80%'}}></Input>
                                <span id={'cadastro'} onClick={e => setModeRegister(true)} style={{gridArea: 'LSPAN', textAlign: 'right', fontSize: '0.9rem', width: '90%'}}>Não possui uma conta?</span>

                                <Button type={'submit'} style={{gridArea: 'LBTN'}} colorPrimary={Colors.Blue}>Entrar</Button>
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