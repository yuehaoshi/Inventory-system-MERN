import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const EditShopping = () => {
    const [state, setState] = useState({
        shopping_description: '',
        shopping_responsible: '',
        shopping_priority: '',
        shopping_completed: false
    })

    const { id } = useParams();
    const history = useNavigate();

    useEffect(() => {
        axios
            .get('http://localhost:4000/shopping/' + id)
            .then((response) => {
                // const {name, value} = response;
                // console.log(response);
                setState(prevState => ({
                    ...prevState,
                    [response.data.name]: response.data.value
                }));
                // setState(prevState => ({
                //     ...prevState,
                //     shopping_completed: !response.shopping_completed
                // }));
            })
            .catch(function (error) {
                console.log(error);
            })
    })

    const onChangeTodoDescription = event => {
        setState(prevState => ({
            ...prevState,
            shopping_description: event.target.value
        }));
    }

    const onChangeTodoResponsible = event => {
        setState(prevState => ({
            ...prevState,
            shopping_responsible: event.target.value
        }));
    }

    const onChangeTodoPriority = event => {
        setState(prevState => ({
            ...prevState,
            shopping_priority: event.target.value
        }));
    }

    const onChangeShoppingCompleted = event => {
        setState(prevState => ({
            ...prevState,
            shopping_completed: !event.target.shopping_completed
        }));
    }

    const onSubmit = event => {
        event.preventDefault();
        
        const obj = {
            shopping_description: state.shopping_description,
            shopping_responsible: state.shopping_responsible,
            shopping_priority: state.shopping_priority,
            shopping_completed: state.shopping_completed
        };
        console.log(obj);
        axios
            .post('http://localhost:4000/shopping/update/' + id, obj)
            .then(res => console.log(res.data))
            .catch(error => {
                console.log(error)
            });

        history('/');
    }

    return (
        <div>
            <h3 align="center">Update Shopping</h3>
            <form onSubmit={onSubmit}>
                <div className="form-group">
                    <label>Description: </label>
                    <input
                        type="text"
                        className="form-control"
                        value={state.shopping_description}
                        onChange={onChangeTodoDescription}
                    />
                </div>
                <div className="form-group">
                    <label>Responsible: </label>
                    <input
                        type="text"
                        className="form-control"
                        value={state.shopping_responsible}
                        onChange={onChangeTodoResponsible}
                    />
                </div>
                <div className="form-group">
                    <div className="form-check form-check-inline">
                        <input
                            className="form-check-input"
                            type="radio"
                            name="priorityOptions"
                            id="priorityLow"
                            value="Low"
                            checked={state.shopping_priority === 'Low'}
                            onChange={onChangeTodoPriority}
                        />
                        <label className="form-check-label">Low</label>
                    </div>
                </div>
                <div className="form-group">
                    <div className="form-check form-check-inline">
                        <input
                            className="form-check-input"
                            type="radio"
                            name="priorityOptions"
                            id="priorityMedium"
                            value="Medium"
                            checked={state.shopping_priority === 'Medium'}
                            onChange={onChangeTodoPriority}
                        />
                        <label className="form-check-label">Medium</label>
                    </div>
                </div>
                <div className="form-group">
                    <div className="form-check form-check-inline">
                        <input
                            className="form-check-input"
                            type="radio"
                            name="priorityOptions"
                            id="priorityHigh"
                            value="High"
                            checked={state.shopping_priority === 'High'}
                            onChange={onChangeTodoPriority}
                        />
                        <label className="form-check-label">High</label>
                    </div>
                </div>
                <div className="form-check">
                    <input
                        className="form-check-input"
                        id="completedCheckbox"
                        type="checkbox"
                        name="completedCheckbox"
                        onChange={onChangeShoppingCompleted}
                        checked={state.shopping_completed}
                        value={state.shopping_completed}
                    />
                    <label className="form-check-label" htmlFor="completedChecckbox">
                        Completed
                    </label>
                </div>

                <br />

                <div className="form-group">
                    <input
                        type="submit"
                        value="Update Shopping"
                        className="btn btn-primary"
                    />
                </div>
            </form>
        </div>
    )
};

export default EditShopping;
