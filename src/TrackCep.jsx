import React from 'react'
import './style.css'

export default function TrackCep({events}) {
  
  if(!events || events.length === 0) return null;
  
  return (
    <div>
        <h1>CEP encontrado: </h1>
        <ul className='list-group'>
            {events.map(item =>

                <li  className='list-group-item' key={item.cep}>

                    <p>Logradouro: { item.logradouro }</p>
                    <p>UF: { item.uf }</p>
                    <p>Cidade: { item.localidade }</p>
                    <p>Bairro: { item.bairro }</p>
                    <p>Complemento: { item.complemento }</p>

                </li>
            )}
        </ul>
    </div>
  )
}
