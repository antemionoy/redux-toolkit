const newTaskForm = () =>{
    const handleUpdateNewTaskText = () =>{

    }

    const handleAddTask = () =>{

    }

    return(
        <form action="" className="form-inline" onSubmit={handleAddTask}>
            <div className="form-group mx-sm-3">
                <input
                    type="text"
                    data-testid="input"
                    required
                    // value={text}
                    onChange={handleUpdateNewTaskText}
                />
            </div>
            <input type="submit" data-testid="submit" className="btn btn-primary btn-sm" value="Add" />
        </form>
    )
}

export default newTaskForm