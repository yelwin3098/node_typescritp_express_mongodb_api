import {Request, Response,NextFunction} from "express";
import { ContactController } from "../controllers/crmController";

export class Routes {
    public contactController: ContactController = new ContactController();
    public routes(app): void {
            app.route('/')
            .get((req: Request, res: Response) => {
                res.status(200).send({
                    message: 'GET request successfulll!!!!'
                })
            })
            // Create a new contact
            app.route('/contact')
            .post(this.contactController.addNewContact);

            // Get all contacts
            app.route('/contact')
            .get((req: Request, res: Response, next: NextFunction)=>{
                 // middleware
                if(req.query.key !== '7f875447a51dec1a54495ea39620aab5049fe060'){
                    res.status(401).send('You shall not pass!');
                } else {
                    next();
                }   
            },this.contactController.getContacts);

            // get a specific contact
            app.route('/contact/:contactId')
            .get(this.contactController.getContactWithID);

            // update a specific contact
            app.route('/contact/:contactId')
            .put(this.contactController.updateContact);

            // delete a specific contact
            app.route('/contact/:contactId')
            .delete(this.contactController.deleteContact)
          }
}