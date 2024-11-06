import * as React from 'react';
import { useState } from 'react';
import { useLogin, useNotify, Notification } from 'react-admin';
import {Hidden} from "@mui/material";
import Error from "../components/Error";

const MyLoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState({});

    const login = useLogin();
    const notify = useNotify();

    const handleSubmit = (e:any) => {
        e.preventDefault();

        if ([email, password].includes('')){
            setError({
                msg: 'Todos los campos son obligatorios',
                error: true,
            });
            return;
        }

        // will call authProvider.login({ email, password })
        login({ email, password }).catch(() =>
            setError({
                msg: 'El usuario o la contraseña son incorrectos',
                error: true,
            })
        );
    };

    const { msg } = error;

    return (
        <>
            <div className="flex flex-col md:flex-row h-screen bg-white">
                <Hidden smDown>
                    <img
                        src="static/login.jpg"
                        alt="hola"
                        className="h-screen w-full md:w-1/2 object-cover"
                    />
                </Hidden>
                <div className="flex flex-col justify-center items-center w-full md:w-1/2">
                    <form
                        className={'my-10 rounded-lg px-6 py-8 w-full md:w-10/12 mx-auto'}
                        onSubmit={handleSubmit}
                    >
                        <h1 className={'text-3xl font-bold text-center mb-1 uppercase text-black'}>
                            Iniciar Sesión
                        </h1>
                        <h3 className={'text-xl font-normal text-center mb-6 capitalize text-black'}>
                            Administrador Cartografías O'Higgins
                        </h3>

                        {msg && <Error alerta={error} />}

                        <div className={'my-12'}>
                            <label
                                className={'uppercase text-gray-600 block text-xl font-bold'}
                                htmlFor={'email'}
                            >
                                Correo
                            </label>
                            <input
                                type={'email'}
                                placeholder={'Escribe tu email*'}
                                className={'w-full mt-3 p-3 border rounded-lg bg-gray-100 text-black'}
                                value={email}
                                onChange={(e) => {
                                    setEmail(e.target.value)
                                    setError({})
                                }}
                            />
                        </div>
                        <div className={'my-4'}>
                            <label
                                className={'uppercase text-gray-600 block text-xl font-bold'}
                                htmlFor={'password'}
                            >
                                Contraseña
                            </label>
                            <input
                                type={'password'}
                                placeholder={'Escribe la contraseña*'}
                                className={'w-full mt-3 p-3 border rounded-lg bg-gray-100 text-black'}
                                value={password}
                                onChange={(e) => {
                                    setPassword(e.target.value)
                                    setError({})
                                }}
                            />
                        </div>
                        <a
                            href={'https://hpc-uoh.vercel.app/olvide-contrasena'}
                            className="text-sky-600 hover:text-sky-500 transition-colors"
                        >
                            ¿Has olvidado tu <span>contraseña?</span>
                        </a> Los campos con * son obligatorios.


                        <input
                            type={'submit'}
                            value={'Iniciar Sesión'}
                            className={
                                'bg-sky-700 w-full py-3 mt-6 text-white uppercase font-bold rounded hover:cursor-pointer hover:bg-sky-800 transition-colors'
                            }
                        />
                    </form>
                </div>
            </div>
        </>
    );
};

export default MyLoginPage;
