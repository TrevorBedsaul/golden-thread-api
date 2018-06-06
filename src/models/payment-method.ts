import { Entity, property, model } from '@loopback/repository';
import { Card } from '../models/card';

@model({
    name: "payment-method"
})
export class PaymentMethod extends Entity {
    @property({
        type: 'number',
        id: true
    })
    id?: number;

    @property({
        type: 'Card',
    })
    card: Card;

    // @property({
    //     type: 'PayPal',
    //     required: true
    // })
    // paypal: PayPal;

    // @property({
    //     type: 'WireTransfer',
    //     required: true
    // })
    // wire: WireTransfer;

    getId() {
        return this.id;
    }
}