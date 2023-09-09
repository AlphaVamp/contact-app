import { useState } from "react";

export default function AddContact({addContactHandler}) {
    const [contact, setContact] = useState({
        name: "",
        email: ""
    });

    const add = (e) => {
        e.preventDefault();
        if (e.target.name === "" || e.target.email === "") {
            alert("ALl the fields are mandatory!");
            return;
          } 
        addContactHandler(contact);
    };
    
    const valueChange = (e)=>{

        setContact({...contact, [e.target.name]: e.target.value});       
    };

    return (
        <div className="ui main">
            <h2>Add Contact</h2>
            <form className="ui form" onSubmit={add}>
                <div className="field">
                    <label>Name</label>
                    <input
                        type="text"
                        name="name"
                        placeholder="Name"
                        required
                        onChange={valueChange}
                        />
                </div>
                <div className="field">
                    <label>Email</label>
                    <input
                        type="text"
                        name="email"
                        placeholder="Email"
                        required
                        onChange={valueChange}
                        />
                </div>
                <button className="ui button blue">Add</button>
            </form>
        </div>
    );
}

// import React from "react";

// class AddContact extends React.Component {
//   state = {
//     name: "",
//     email: "",
//   };

//   add = (e) => {
//     e.preventDefault();
//     if (this.state.name === "" || this.state.email === "") {
//       alert("ALl the fields are mandatory!");
//       return;
//     }
//     this.props.addContactHandler(this.state);
//     this.setState({ name: "", email: "" });
//   };
//   render() {
//     return (
//       <div className="ui main">
//         <h2>Add Contact</h2>
//         <form className="ui form" onSubmit={this.add}>
//           <div className="field">
//             <label>Name</label>
//             <input
//               type="text"
//               name="name"
//               placeholder="Name"
//               value={this.state.name}
//               onChange={(e) => this.setState({ name: e.target.value })}
//             />
//           </div>
//           <div className="field">
//             <label>Email</label>
//             <input
//               type="text"
//               name="email"
//               placeholder="Email"
//               value={this.state.email}
//               onChange={(e) => this.setState({ email: e.target.value })}
//             />
//           </div>
//           <button className="ui button blue">Add</button>
//         </form>
//       </div>
//     );
//   }
// }

// export default AddContact;