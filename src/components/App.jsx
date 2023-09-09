import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";
import { useState, useEffect } from "react";
// import { uuid } from 'uuidv4';

export default function App(){
    const LOCAL_STORAGE_KEY = "contacts";
    let uuid = crypto.randomUUID();
    const [contacts, setContacts] = useState([]);
    
    const addContactHandler = (contact)=>{
     // console.log(contact)
     setContacts([...contacts, {id: uuid, ...contact}]);
    };
    
    const removeContactHandler = (id)=>{
      const newContactList = contacts.filter((contact)=>{
        return contact.id !== id;
      });
      setContacts(newContactList);
    }

    useEffect(()=>{
      const retrieveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
      if(retrieveContacts) setContacts(retrieveContacts);
    }, []);

    useEffect(()=>{
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
    }, [contacts]);
    
    return(
      <div className="ui container">
        <Header />
        <AddContact addContactHandler = {addContactHandler} />
        <ContactList contacts={contacts}  getContactId={ removeContactHandler }/>
      </div>
    );
  }
  
  