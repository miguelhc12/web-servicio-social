import React, { useState } from 'react'; // Importa useEffect aquí
import styles from './Login.module.css'
import logoTec from '../img/tec.png'
import Chart from 'chart.js/auto';


function Login() {



    const [vistaActual, setVistaActual] = useState('Estudiantes');

    const irLoginPersonal = () => {
        setVistaActual('Personal');
    };

    const irLoginEstudiantes = () => {
        setVistaActual('Estudiantes');
    };

    const irHomeEstudiantes = () => {
        window.location.href = '/';
    }

    const irHomePersonal = () => {
        window.location.href = '/homePersonal';
    }

    return (
        <div className={styles.loginWrapper}>
       
        <div className={styles.container} id="container">
            <div className={`${styles.formContainer} ${styles.signInContainer}`}>
                <form className={styles.form} action="#">
                    <h1 className={styles.h1}>Iniciar sesión</h1>
                    <div className={styles.deslizables}>
                        <button
                            type="button"
                            onClick={irLoginEstudiantes}
                            className={`${vistaActual === 'Estudiantes' ? styles.active : ''}  ${styles.button}`}
                            id="btnEstudiantes"
                        >
                            Estudiante
                        </button>
                        <button
                            type="button"
                            onClick={irLoginPersonal}
                            className={`${vistaActual === 'Personal' ? styles.active : ''}  ${styles.button}`}
                            id="btnPersonal"
                        >
                            Personal
                        </button>
                    </div>
                    {vistaActual === 'Estudiantes' && (
                        <>
                            <input type="text" id='noControlEstudiante' placeholder="Número de control" className={styles.inputEstudiante} />
                            <input type="password" id='passwordEstudiante' placeholder="Contraseña" className={styles.inputEstudiante} />
                        </>
                    )}

                    {vistaActual === 'Personal' && (
                        <>
                            <input type="text" id='usuarioPersonal' placeholder="Usuario" className={styles.inputPersonal} />
                            <input type="password" id='passwordPersonal' placeholder="Contraseña" className={styles.inputPersonal} />
                        </>
                    )}

                    <a href="#" className={`${styles.olvidoContraseña} ${styles.a}`}>Olvidaste tu contraseña?</a>

                    {vistaActual === 'Estudiantes' && (
                        <button type="button" onClick={irHomeEstudiantes} className={`${styles.botonIniciarSesion} ${styles.button}`}>INICIAR SESIÓN</button>
                    )}

                    {vistaActual === 'Personal' && (
                        <button type="button" onClick={irHomePersonal} className={`${styles.botonIniciarSesion} ${styles.button}`} >INICIAR SESIÓN</button>
                    )}

                </form>
            </div>
            <div className={styles.overlayContainer}>
                <div className={styles.overlay}>

                    <div className={`${styles.overlayPanel} ${styles.overlayRight}`}>
                        <img src={logoTec} alt="Logo Tecnm" className={styles.logoTec} />

                        <h1 className={`${styles.welcome} ${styles.h1}`}>Bienvenido!</h1>

                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Login
