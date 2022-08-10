import React, { Component } from 'react';
import axios from 'axios';

export default class CreateShopping extends Component {
    constructor(props) {
        super(props);

        this.onChangeShoppingDescription = this.onChangeShoppingDescription.bind(this);
        this.onChangeShoppingResponsible = this.onChangeShoppingResponsible.bind(this);
        this.onChangeShoppingPriority = this.onChangeShoppingPriority.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        
        this.state = {
            shopping_description: '',
            shopping_responsible: '',
            shopping_priority: '',
            shopping_completed: false
        }
    }

    onChangeShoppingDescription(e) {
        this.setState({
            shopping_description: e.target.value
        });
    }
    
    onChangeShoppingResponsible(e) {
        this.setState({
            shopping_responsible: e.target.value
        });
    }
    
    onChangeShoppingPriority(e) {
        this.setState({
            shopping_priority: e.target.value
        });
    }
    
    onSubmit(e) {
        e.preventDefault();
        
        console.log(`Form submitted:`);
        console.log(`Shopping Description: ${this.state.shopping_description}`);
        console.log(`Shopping Responsible: ${this.state.shopping_responsible}`);
        console.log(`Shopping Priority: ${this.state.shopping_priority}`);
        
        const newShopping = {
            shopping_description: this.state.shopping_description,
            shopping_responsible: this.state.shopping_responsible,
            shopping_priority: this.state.shopping_priority,
            shopping_completed: this.state.shopping_completed
        };

        axios.post('http://localhost:4000/shopping/add', newShopping)
            .then(res => console.log(res.data));

        this.setState({
            shopping_description: '',
            shopping_responsible: '',
            shopping_priority: '',
            shopping_completed: false
        })
    }

    render() {
        return (
            <div style = {{marginTop: 10}}>
                <h3> Create New Shopping</h3>
                <form onSubmit = {this.onSubmit}>
                    <div className = "form-group">
                        <label>Description: </label>
                        <input type = "text"
                                className = "form-control"
                                value = {this.state.shopping_description}
                                onChange = {this.onChangeShoppingDescription}
                                />
                    </div>

                    <div className = "form-group">
                        <label>Responsible: </label>
                        <input type = "text"
                                className = "form-control"
                                value = {this.state.shopping_responsible}
                                onChange = {this.onChangeShoppingResponsible}
                                />
                    </div>

                    <div className = "form-group">
                        <div className = "form-check form-check-inline">
                            <input className = "form-check-input"
                                    type = "radio"
                                    name = "priorityOptions"
                                    id = "priorityLow"
                                    value = "Low"
                                    checked = {this.state.shopping_priority === 'Low'}
                                    onChange = {this.onChangeShoppingPriority}
                                    />
                            <label className = "form-check-label">Low</label>
                        </div>
                        
                        <div className = "form-check form-check-inline">
                            <input className = "form-check-input"
                                    type = "radio"
                                    name = "priorityOptions"
                                    id = "priorityMedium"
                                    value = "Medium"
                                    checked = {this.state.shopping_priority === 'Medium'}
                                    onChange = {this.onChangeShoppingPriority}
                                    />
                            <label className = "form-check-label">Medium</label>
                        </div>

                        <div className = "form-check form-check-inline">
                            <input className = "form-check-input"
                                    type = "radio"
                                    name = "priorityOptions"
                                    id = "priorityHigh"
                                    value = "High"
                                    checked = {this.state.shopping_priority === 'High'}
                                    onChange = {this.onChangeShoppingPriority}
                                    />
                            <label className = "form-check-label">High</label>
                        </div>
                    </div>

                    <div className = "form-group">
                        <input type = "submit" value= "Create Todo" className = "btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}




// import React, { Component, useEffect, useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

// const EditShopping = () => {
//     const [state, setState] = useState({
//         shopping_description: '',
//         shopping_responsible: '',
//         shopping_priority: '',
//         shopping_completed: ''
//     })

//     const { id } = useNavigate();

//     useEffect(() => {
//         axios
//             .get('http://localhost:4000/shopping/' + id)
//             .then((response) => {
//                 setState({
//                     shopping_description: response.data.shopping_description,
//                     shopping_responsible: response.data.shopping_responsible,
//                     shopping_priority: response.data.shopping_priority,
//                     shopping_completed: response.data.shopping_completed
//                 })
//                 // setShopping_description(response.data.shopping_description);
//                 // setShopping_responsible(response.data.setShopping_responsible);
//                 // setShopping_priority(response.data.setShopping_priority);
//                 // setShopping_completed(response.data.shopping_completed);
//                 // this.setState({
//                 //     shopping_description: response.data.shopping_description,
//                 //     shopping_responsible: response.data.shopping_responsible,
//                 //     shopping_priority: response.data.shopping_priority,
//                 //     shopping_completed: response.data.shopping_completed
//                 // })
//             })
//             .catch(function (error) {
//                 console.log(error);
//             })
//     })

//     const onChange = e => {
//         const {name, value} = e.target;
//         setState(prevState => ({
//           ...prevState,
//           [name]: value
//         }));
//       };
    // const onChangeShoppingDescription = event => {
    //     setShopping_description(event.target.value)
    // }

    // const onChangeShoppingResponsible = event => {
    //     setShopping_responsible(event.target.value)
    // }

    // const onChangeShoppingPriority = event => {
    //     setShopping_priority(event.target.value)
    // }

    // const onChangeShoppingCompleted = event => {
    //     setShopping_completed(!shopping_completed)
    // }

//     const onSubmit = event => {
//         event.preventDefault();
        
//         const obj = {
//             shopping_description: state.shopping_description,
//             shopping_responsible: state.shopping_responsible,
//             shopping_priority: state.shopping_priority,
//             shopping_completed: state.shopping_completed
//         };
//         console.log(obj);
//         axios.post('http://localhost:4000/shopping/update/' + id, obj)
//             .then(res => console.log(res.data));

//         this.props.history.push('/');
//     }

//     return (
//         <div>
//             <h3 align="center">Update Shopping</h3>
//             <form onSubmit={onSubmit}>
//                 <div className="form-group">
//                     <label>Description: </label>
//                     <input
//                         type="text"
//                         className="form-control"
//                         value={state.shopping_description}
//                         onChange={onChange}
//                     />
//                 </div>
//                 <div className="form-group">
//                     <label>Responsible: </label>
//                     <input
//                         type="text"
//                         className="form-control"
//                         value={state.shopping_responsible}
//                         onChange={onChange}
//                     />
//                 </div>
//                 <div className="form-group">
//                     <div className="form-check form-check-inline">
//                         <input
//                             className="form-check-input"
//                             type="radio"
//                             name="priorityOptions"
//                             id="priorityLow"
//                             value="Low"
//                             checked={state.shopping_priority === 'Low'}
//                             onChange={onChange}
//                         />
//                         <label className="form-check-label">Low</label>
//                     </div>
//                 </div>
//                 <div className="form-group">
//                     <div className="form-check form-check-inline">
//                         <input
//                             className="form-check-input"
//                             type="radio"
//                             name="priorityOptions"
//                             id="priorityMedium"
//                             value="Medium"
//                             checked={state.shopping_priority === 'Medium'}
//                             onChange={onChange}
//                         />
//                         <label className="form-check-label">Medium</label>
//                     </div>
//                 </div>
//                 <div className="form-group">
//                     <div className="form-check form-check-inline">
//                         <input
//                             className="form-check-input"
//                             type="radio"
//                             name="priorityOptions"
//                             id="priorityHigh"
//                             value="High"
//                             checked={state.shopping_priority === 'High'}
//                             onChange={onChange}
//                         />
//                         <label className="form-check-label">High</label>
//                     </div>
//                 </div>
//                 <div className="form-check">
//                     <input
//                         className="form-check-input"
//                         id="completedCheckbox"
//                         type="checkbox"
//                         name="completedCheckbox"
//                         onChange={onChange}
//                         checked={state.shopping_completed}
//                         value={state.shopping_completed}
//                     />
//                     <label className="form-check-label" htmlFor="completedChecckbox">
//                         Completed
//                     </label>
//                 </div>

//                 <br />

//                 <div className="form-group">
//                     <input
//                         type="submit"
//                         value="Update Shopping"
//                         className="btn btn-primary"
//                     />
//                 </div>
//             </form>
//         </div>
//     )
// };

// export default EditShopping;