import * as mongoose from 'mongoose';
import { ContactSchema } from '../models/crmModel';
import { userSchema } from '../models/usermodel';
import { Request, Response } from 'express';
const Users = mongoose.model('allusers', userSchema);
const Contact = mongoose.model('contacts', ContactSchema);


export class ContactController{

    public addNewContact (req: Request, res: Response) {                
        let newContact = new Contact(req.body);
    
        newContact.save((err, contact) => {
            if(err){
                res.send(err);
            }    
            res.json(contact);
        });
    }

    public getContacts (req: Request, res: Response) {           
        Contact.find({}, (err, contact) => {
            if(err){
                res.send(err);
            }
            res.json(contact);
        });
    }

    public getUsers (req: Request, res: Response) {           
        Users.find({} , (err, user) => {
            if(err){
                res.send(err);
            }
            res.json(user);            
        });
    }

    public getContactWithID (req: Request, res: Response) {           
        Contact.findById(req.params.contactId, (err, contact) => {
            if(err){
                res.send(err);
            }
            res.json(contact);
        });
    }

    public updateContact (req: Request, res: Response) {           
        Contact.findOneAndUpdate({ _id: req.params.contactId }, req.body, { new: true }, (err, contact) => {
            if(err){
                res.send(err);
            }
            res.json(contact);
        });
    }

    public deleteContact (req: Request, res: Response) {           
        Contact.remove({ _id: req.params.contactId }, (err, contact) => {
            if(err){
                res.send(err);
            }
            res.json({ message: 'Successfully deleted contact!'});
        });
    }
    
}