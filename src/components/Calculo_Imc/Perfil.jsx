import React from 'react'
import { useState } from 'react';
import styles from './Perfil.module.css';

const CalculoImc = () => {
    const [peso, setPeso]=useState('');
    const [altura, setAltura]=useState('');
    const [valorImc, setValorImc]=useState(0)

    function mudancaPeso(evento) {
        setPeso(evento.target.value);
    }

    function mudancaAltura(evento) {
        setAltura(evento.target.value);
    }

    function calcularIMC(evento) {
        let imc;
        imc = peso / (altura * altura);
        setValorImc(imc);
    }

    return (
        <>
        <h1>Calculadora IMC</h1>
        <div className={styles.container}>
            <div className={styles.imc}>
            <form>
                    <label htmlFor='peso'><span className={styles.fonte}>Peso</span></label> <br />
                    <input className={styles.input} type="number" name='peso' 
                    onChange={mudancaPeso}
                    value={peso} id='peso' />

                    <br /><br />

                    <label htmlFor='altura'><span className={styles.fonte}>Altura</span></label> <br />
                    <input className={styles.input} type="number" name='altura' 
                    onChange={mudancaAltura}
                    value={altura} id='altura' />

                    <br /><br />

                    <button onClick={calcularIMC} type='button'><span className={styles.fonte}>Calcular</span></button>

                    <br /><br />

                    <b>Seu IMC: {valorImc.toFixed(2)} </b>

                    <br /><br />


                </form>
            <table className={styles.table} border="2">
                <tr>
                    <td>Classificação</td>
                    <td>IMC</td>
                </tr>
                <tr>
                    <td>Abaixo do Peso</td>
                    <td>Abaixo de 18,5</td>
                </tr>
                <tr>
                    <td>Peso Normal</td>
                    <td>Entre de 18,5 e 24,9</td>
                </tr>
                <tr>
                    <td>Sobrepeso</td>
                    <td>Entre 25 e 29,9</td>
                </tr>
                <tr>
                    <td>Abaixo do Peso</td>
                    <td>Entre 30 e 34,9</td>
                </tr>
                <tr>
                    <td>Obesidade Grau |</td>
                    <td>Entre 35 e 39,9</td>
                </tr>
                <tr>
                    <td>Abaixo do Peso</td>
                    <td>Maior que 40</td>
                </tr>
            </table>
            </div>
        </div>
        </>
    )
}




export default CalculoImc;
