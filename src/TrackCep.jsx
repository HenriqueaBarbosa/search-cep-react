import React from 'react'
import './style.css'

export default function TrackCep({events}) {
  
  if(!events || events.length === 0) return null;
  
  return (
    <div className='response-cep'>
        <h4>CEP encontrado</h4>
        <ul className='list-group'>
            {events.map(item =>

                <li  className='list-group-item' key={item.cep}>

                  <p><span className="label">Logradouro:</span> { item.logradouro }</p>
                  <p><span className="label">UF:</span> { item.uf }</p>
                  <p><span className="label">Cidade:</span> { item.localidade }</p>
                  <p><span className="label">Bairro:</span> { item.bairro }</p>
                  <p><span className="label">Complemento:</span> { item.complemento }</p>

                </li>
            )}
        </ul>
    </div>
  )
}
