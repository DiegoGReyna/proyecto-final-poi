import './SubGrupChatPage.css';
import RenderedMessages from '../../componenetes/RenderedMessages/RenderedMessages'; 
import TextBar from '../../componenetes/TextBar/TextBar';
export default function SubGrupChatPage() {
    return (
        <div className='Container_Chat'>
            <RenderedMessages />
            <TextBar />
        </div>
    
        
    )
}
