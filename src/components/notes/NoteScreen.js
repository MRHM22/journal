
import React from 'react'
import { NoteAppBar } from './NoteAppBar'

export const NoteScreen = () => {
  return (
    <div className='notes__main-content'>
        <NoteAppBar />
        <div className='notes__content'>
            <input type='text' placeholder='Some awesome title' 
            className='notes__title-input' />
        </div>
        <textarea placeholder='What happened today?'
        className='notes_textarea' >    
        </textarea>

        <div className='notes__image'>
            <img src="https://ep01.epimg.net/elpais/imagenes/2021/12/10/album/1639143803_433213_1639745607_noticia_normal.jpg"
             alt="imagen" />
        </div>

    </div>
  )
}
