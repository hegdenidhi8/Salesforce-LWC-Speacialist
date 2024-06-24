import { LightningElement,api } from 'lwc';

export default class Button extends LightningElement {
    @api label;
    @api icon;
    // eslint-disable-next-line no-unused-vars
    handleButton(event) {
      this.dispatchEvent(new CustomEvent('buttonclick',{
         bubbles: true
      }));
    }
}