import PropTypes from "prop-types";
import DeleteIcon from '@mui/icons-material/Delete';

function Note(props) {
    return (
        <div className="note">
            <h1>{props.title}</h1>
            <p>{props.content}</p>
            <button onClick={() => {
                props.delete(props.id);
            }}>
                <DeleteIcon/>
            </button>
        </div>
    );
}

Note.propTypes = {
    title: PropTypes.string,
    content: PropTypes.string,
    id: PropTypes.number,
    delete: PropTypes.func,
}

export default Note;