import React, { useRef } from 'react';
import './Codigo.css'


export default function Codigo() {
    const codeRef = useRef(null);

    const copyToClipboard = () => {
        const textToCopy = `const bienvenida = () => {
            const sobreMi = {
              nombre: 'Juan',
              apellido: 'Rivera',
              imagen: 'bautista.jpg',
              edad: 22,
              país: 'Argentina',
             
            }
            return sobreMi;
          }`;
        navigator.clipboard.writeText(textToCopy);
    }
    return (
        <div>
            <div className='codigo'>
                <div className='mi-codigo' >
                    <div className='codigo-header'>
                        <div className='minimiza'>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                        <div>
                            <p className='indexjsx'>./index.jsx</p>
                        </div>
                        <button className='copy' onClick={copyToClipboard}></button>
                    </div>
                    <hr />
                    <div className='codigo-body'>
                        <div className='code'>
                            <p> <span className='azul'> {`const `}</span>  <span className='gris'>{`bienvenida`}</span> <span className='azul'>{`= `}</span> <span className='amarillo'>{`( )`} </span><span className='azul'>{` => `}</span> <span className='amarillo'>{`{`} </span></p>
                            <div className='objeto'>
                                <p> <span className='azul'> {`const `}</span>  <span className='gris'>{`sobreMi`}</span>  <span className='azul'>{`= `}</span> <span className='amarillo'>{`{`} </span> </p>
                                <div className='propiedades'>
                                    <p> <span className='gris'>{`nombre:`}</span> <span className='amarillo'>{`'Juan',`} </span></p>
                                    <p> <span className='gris'>{`apellido:`}</span> <span className='amarillo'>{`'Rivera',`} </span></p>
                                    <p> <span className='gris'>{`edad:`}</span> <span className='amarillo'>{`22,`} </span></p>
                                    <p> <span className='gris'>{`pais:`}</span> <span className='amarillo'>{`'Argentina',`} </span></p>
                                </div>
                            </div>

                            <div className='llave'>
                                <p><span className='amarillo'>{`}`} </span></p>
                            </div>
                            <div className='return'>
                                <p>  <span className='azul'>{`return`}</span>  <span className='amarillo'>{`sobreMi;`} </span> </p>
                            </div>

                            <p> <span className='amarillo'>{`}`} </span> </p>

                            <div className='funcion'>
                                <p>  <span className='gris'>{`bienvenida`}</span>  <span className='amarillo'>{`( )`} </span></p>
                            </div>
                        </div>

                    </div>

                </div>

            </div>

        </div>

    )
}
