/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package whispir.create.contact;

import org.openapitools.client.model.Contact;

/**
 *
 * @author carlangeloorale
 */
public class ContactReturn {
    private String contactId;
    
    public String getContactId() {
        return contactId;
    }
    
    public void setContactId(Contact contactResponse) {
        this.contactId = contactResponse.getWorkAddress1();
    }
}
