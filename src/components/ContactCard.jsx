import user from "../images/user.png";

const ContactCard = ({contact})=>{

    const {id, name, email}=contact;
    return(
        <div 
        // key = {id} 
        className="item">
            <img className="ui avatar image" src={user} alt="user" />
                    <div className="content">
                        <div className="header">
                            {name}
                        </div>
                        <div> {email} </div>
                    </div>
                    <i 
                    className="trash alternate outline icon"
                    style={{ color:"red", marginTop:"7px" }}
                    onClick={()=>clickHandler(id)}
                    ></i>
                </div>
    );

}

export default ContactCard;