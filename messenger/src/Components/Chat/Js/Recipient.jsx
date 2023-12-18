import AttachFileIcon from '@mui/icons-material/AttachFile';
import ReorderIcon from '@mui/icons-material/Reorder';

const Recipient = (props) => {
    return(
        <div className='recipientHead'>
            <img className="avatarRecipient" alt="no img" src={props.img}/>
            <div className='recInf'>
                <h3 className='recInfName'>{props.name}</h3>
                <p className='recInfStatus'>{props.online}</p>
            </div>
            <div className='recBtn'>
                <button className="recipientInvestments"><AttachFileIcon /></button>
                <button className="recipientAdditionalActions"><ReorderIcon /></button>
            </div>
        </div>
    )
}

export default Recipient