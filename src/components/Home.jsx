import React, { useEffect, useRef } from 'react'; // Importa useRef
import imgPorciento from '../img/porciento.png';
import imgCorrecto from '../img/correcto.png';
import imgAula from '../img/aula.png';
import styles from './Home.module.css';
import Chart from 'chart.js/auto';
import NavbarComplex from './NavbarComplex';


function Home() {

    const chartRef = useRef(null);


    useEffect(() => {
        const ctx = document.getElementById('myChart').getContext('2d');

        // Destruye el gráfico anterior si existe
        if (chartRef.current !== null) {
            chartRef.current.destroy();
        }

        const categories = ['Servicio social', 'Inglés', 'Residencia'];
        const students = [150, 200, 100]; // Ejemplo de números de estudiantes inscritos en cada categoría

        chartRef.current = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: categories,
                datasets: [{
                    label: 'Estudiantes inscritos',
                    data: students,
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)', // Color para servicio social
                        'rgba(54, 162, 235, 0.2)',  // Color para inglés
                        'rgba(255, 206, 86, 0.2)'   // Color para residencia
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)'
                    ],
                    borderWidth: 1.5
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
    }, []); // Asegúrate de que el arreglo de dependencias esté vacío para que el efecto solo se ejecute una vez

    return (
        <div>
            <NavbarComplex />
            <section id="home">
                <div>
                    <div>
                        <h2>Departamento de Gestión Tecnológica y Vinculación</h2>
                        <p><strong>Lorena García Rodriguez</strong></p>
                        <p>Jefa del Dpto. de Gestión de Vinculación</p>
                        <p><strong>Horario de Atención:</strong> 8:00 a 15:00 hrs y 17:00 a 20:00</p>
                        <p><strong>Número Telefónico:</strong> 7474541300, ext. 1223</p>
                        <p><strong>Oficina de Servicio Social:</strong> 7474541300, ext. 1337</p>
                        <p><strong>Correo:</strong> ejemplo@chilpancingo.tecnm.mx</p>
                    </div>
                    <div>
                        <canvas id="myChart"></canvas>
                    </div>
                </div>
            </section>

            <section id="requerimientos">
                <h2>Requerimientos</h2> <br />
                <div>
                    <div>
                        <div></div>
                        <div></div>
                        <div>
                            <img src={imgPorciento} alt="Porcentaje" />
                            <p>Cumplir el 70% de avance reticular</p>
                        </div>
                    </div>

                    <div>
                        <div></div>
                        <div></div>
                        <div>
                            <img src={imgCorrecto} alt="Correcto" />
                            <p>Estar inscrito al momento de registrar el servicio</p>
                        </div>
                    </div>

                    <div >
                        <div ></div>
                        <div ></div>
                        <div >
                            <img src={imgAula} alt="Aula" />
                            <p>Asistir a la junta de inducción</p>
                        </div>
                    </div>
                </div>
            </section>

            
        </div>
    );
}

export default Home;
