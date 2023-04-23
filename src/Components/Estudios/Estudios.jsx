import React from 'react'

export default function Estudios() {
    return (
        <div>
            <div className="timeline">
                <div className="timeline-item">
                    <div className="timeline-item-content">
                        <h3 className="timeline-item-title">Evento 1</h3>
                        <p className="timeline-item-description">Descripción del Evento 1</p>
                    </div>
                    <span className="timeline-item-date">Fecha del Evento 1</span>
                </div>
                <div className="timeline-item">
                    <div className="timeline-item-content">
                        <h3 className="timeline-item-title">Evento 2</h3>
                        <p className="timeline-item-description">Descripción del Evento 2</p>
                    </div>
                    <span className="timeline-item-date">Fecha del Evento 2</span>
                </div>
                {/* Agrega más eventos aquí */}
            </div>

        </div>
    )
}
