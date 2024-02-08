    import React, { useState } from 'react';

    const IMCCalculator = () => {
    const [altura, setAltura] = useState('');
    const [peso, setPeso] = useState('');
    const [imc, setIMC] = useState(null);

    const calcularIMC = () => {
        const alturaMetros = altura / 100;
        const imcCalculado = peso / (alturaMetros * alturaMetros);
        setIMC(imcCalculado.toFixed(2));
    };

    const classificacaoIMC = () => {
        if (imc === null) {
        return '';
        } else if (imc < 18.5) {
        return 'Magreza';
        } else if (imc < 24.9) {
        return 'Normal';
        } else if (imc < 29.9) {
        return 'Sobrepeso';
        } else if (imc < 34.9) {
        return 'Obesidade Grau I';
        } else if (imc < 39.9) {
        return 'Obesidade Grau II';
        } else {
        return 'Obesidade Grau III';
        }
    };

    return (
        <div>
        <h1>Calculadora de IMC</h1>
        <label>
            Altura (cm):
            <input type="number" value={altura} onChange={(e) => setAltura(e.target.value)} />
        </label>
        <br />
        <label>
            Peso (kg):
            <input type="number" value={peso} onChange={(e) => setPeso(e.target.value)} />
        </label>
        <br />
        <button onClick={calcularIMC}>Calcular IMC</button>
        <br />
        {imc !== null && (
            <div>
            <h2>Resultado:</h2>
            <p>IMC: {imc}</p>
            <p>Classificação: {classificacaoIMC()}</p>
            </div>
        )}
        </div>
    );
    };

    export default IMCCalculator;
