import React from 'react'
import { Input } from '@chakra-ui/react'
import './Footer.css'

export const Footer = () => {
  return (
    <div className='footer'>
      <p>Suscríbete a la newsletter para estar al día en últimas tendencias, también te enviaremos promociones de nuestra peluquería.</p>
      <Input placeholder='large size' size='lg' />
      <Input placeholder='large size' size='lg' />
    </div>
  )
}
