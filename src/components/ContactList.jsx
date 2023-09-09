import ContactCard from "./ContactCard";

const ContactList = ({contacts}) =>{
    // console.log(props.contacts);
    const deleteContactHandler = (id)=>{
        contacts.getContactId(id);
    };

    const renderContactList = contacts.map((contact) => {
            return(
               <ContactCard 
               contact={contact} 
               clickHandler={deleteContactHandler}
               key={contact.id} 
               ></ContactCard>
            );
    });
        return(
            <div className="ui celled list">
                {renderContactList}
            </div>
        );
}

export default ContactList;