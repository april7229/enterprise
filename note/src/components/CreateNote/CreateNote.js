import React, { Component } from 'react';
import './index.css';


class CreateNote extends Component
{
    render()
    {
        return (
            <div className='noteView_container'>
                <div className='noteView_topContent'>
                    <h3 className='content_header'>
                        Create New Note:
                    </h3>
                </div>
                <div className='createNote_form' >
                    <input type="text"
                        className='createNote_title'
                
                        placeholder='To:'
                    />
                    <textarea
                        className='createNote_body'
                        placeholder='Note Content'
                        rows="20"
                    />
                    <input type="text"
                        className='createNote_title'

                        placeholder='Timestamp:'
                    />
                    <a href='#' className='button_link' />
                <div className='nav_button createNote_button'>Send</div>    
                </div>
            </div>
        )
    }
}
export default CreateNote;
