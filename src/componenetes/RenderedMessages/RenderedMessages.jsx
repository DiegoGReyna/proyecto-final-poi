import React from 'react'
import './RenderedMessages.css'
import MessagesFromOthers from '../MessagesFromOthers/MessagesFromOthers';
import MessaByUser from '../MessaByUser/MessaByUser';

function RenderedMessages() {
    return (
        <div className='Container_RenderedMessages'>
            <div className='box_Messages'>
                <MessagesFromOthers 
                userName="Nombre de usuario"
                sendedTime="2:30pm"
                text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis nam similique, consectetur recusandae praesentium id eaque eum."
                userImage="perro"
                />
                <MessaByUser 
                sendedTime="2:35pm"
                text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis nam similique, consectetur recusandae praesentium id eaque eum."
             
                />
                <MessaByUser 
                sendedTime="2:36pm"
                text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis nam similique, consectetur recusandae praesentium id eaque eum."
               
                />
                <MessagesFromOthers userName="Nombre de usuario"
                sendedTime="2:40pm"
                text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis nam similique, consectetur recusandae praesentium id eaque eum."
                />
                <MessagesFromOthers userName="Nombre de usuario"
                sendedTime="2:50pm"
                text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis nam similique, consectetur recusandae praesentium id eaque eum."
                userImage="perro"
                />
                
            </div>
            
        </div>
    );
}
export default RenderedMessages