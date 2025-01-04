import {useState} from "react";
import {v4 as uuidv4} from 'uuid';
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';
import PropTypes from "prop-types";

function CreateArea(props) {
    const [clicked, setClicked] = useState(false);
    function onClicked(){
        setClicked(true);
    }
    const [item, setItem] = useState({
        id: null, title: "", content: "",
    });

    function handleChange(event) {
        const {value, name} = event.target;
        setItem(prevState => ({...prevState, [name]: value}));
    }

    return (<div>
            <form className="create-note" onSubmit={e => e.preventDefault()}>
                {clicked && <input value={item.title} onChange={handleChange} name="title" placeholder="Title"/>}
                <textarea value={item.content} onChange={handleChange} onClick={onClicked} name="content" placeholder="Take a note..."
                          rows={clicked ? 3 : 1}/>
                <Zoom in={clicked}>
                    <Fab onClick={() => {
                        item.id = uuidv4();
                        props.onAdd(item);
                        setItem({
                            id: null, title: "", content: "",
                        })
                    }}>
                        <AddIcon/>
                    </Fab>
                </Zoom>
            </form>
        </div>);
}

CreateArea.propTypes = {
    onAdd: PropTypes.func.isRequired,
}

export default CreateArea;
