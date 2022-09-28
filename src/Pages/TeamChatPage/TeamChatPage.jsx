import './TeamChatPage.css';
import RenderedMessages from '../../componenetes/RenderedMessages/RenderedMessages'; 
import TextBar from '../../componenetes/TextBar/TextBar';
export default function TeamChatPage() {
    return (
        <div className='Container_Chat'>
            <RenderedMessages />
            <TextBar />
        </div>
    
        
    )
}
