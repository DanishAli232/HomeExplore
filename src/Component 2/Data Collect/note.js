import './datacollect.css';
// import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';



const Note = (props) => {
   return (
       <div className='note'>
           <h4>{props.title}</h4>
           <p>{props.content}</p>
           <button className='btn1'><DeleteIcon/></button>
       </div>
   )
}

export default Note;