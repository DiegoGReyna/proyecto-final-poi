import './SubGrupChatPage.css';
import RenderedGroupMessages from '../../componenetes/RenderedGroupMessages/RenderedGroupMessages'; 
import TextBarGroup from '../../componenetes/TextBarGroup/TextBarGroup';
import { useLocation } from 'react-router-dom';

const SubGrupChatPage = () => {
    const location = useLocation();
    const { groupId } = location.state;

    return (
        <div className='Container_Chat'>
            <RenderedGroupMessages 
            groupId = {groupId}
            />
            <TextBarGroup 
            groupId = {groupId}
            />
        </div>
    
        
    )
}

export default SubGrupChatPage