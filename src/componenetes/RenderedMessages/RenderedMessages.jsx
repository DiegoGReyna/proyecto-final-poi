import React from 'react'
import './RenderedMessages.css'
import MessagesFromOthers from '../MessagesFromOthers/MessagesFromOthers';
import MessaByUser from '../MessaByUser/MessaByUser';

function RenderedMessages() {
    return (
        <div className='Container_RenderedMessages'>
            <div className='box_Messages'>
                <MessagesFromOthers />
                <MessaByUser />
                <MessaByUser />
                <MessagesFromOthers />
                <MessagesFromOthers />
                
            </div>
            
        </div>
    );
}
export default RenderedMessages