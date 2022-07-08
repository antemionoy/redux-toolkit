import {useDispatch, useSelector} from "react-redux";
import { addTask, removeTask } from '../slices/tasksSlice';

const Tasks = () => {
    // BEGIN (write your solution here)
    const tasks = useSelector((state) => state.tasksStore.elements)
    const dispatch = useDispatch()

    const handleRemoveTask = (id) =>{
        return () =>{
            console.log('i')
        }
    }
    // END
    //
    if (tasks.length === 0) {
        return null;
    }

    return (
        <div className="mt-3">
            <ul className="list-group">
                {tasks.map(({ id, text }) => (
                    <li key={id} className="list-group-item d-flex">
                        <span className="mr-auto">{text}</span>
                        <button type="button" className="close" onClick={handleRemoveTask(id)}>
                            <span>&times;</span>
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Tasks