// enums are unique to TS doesn't exist in JS
// **there is a debate around use of them in the community
// allow us to define a set of named constants

// How we'd normally do it
// const PENDING = 0;
// const SHIPPED = 1;
// const DELIVERED = 3;
// const RETURNED = 4;

// let shippingStatus = 0;

// if(shippingStatus === DELIVERED) {
//     // can do something
// }

// To do it with enums
// enums default to assigning value starting at 0 and incrementally increasing for each
enum OrderStatus {
    PENDING,
    SHIPPED,
    DELIVERED,
    RETURNED
}
let myStatus = OrderStatus.DELIVERED;

function isDelivered(status: OrderStatus) {
    return status === OrderStatus.DELIVERED
}
isDelivered(OrderStatus.SHIPPED); // how you normally would use it
isDelivered("Delivered");
isDelivered(0); // is valid as the value for PENDING is 0
isDelivered(8);


enum SpecifiedStatuses {
    PENDING = 10,
    SHIPPED = 72,
    DELIVERED, // as we didn't specify this one, it increments from the previous
    RETURNED
}
enum ArrowKeys {
    UP = "up",
    DOWN = "down",
    LEFT = "left",
    RIGHT = "right"
}
enum ArrowKeysBad {
    UP = 7,
    UPTWO, // if previous is a number it increments
    DOWN = "up", // values can be varied
    LEFT, // if the previous items value is not a number this one can't increment and needs to be specified
    RIGHT = "right"
}

// Compiling enums
// unlike the rest of TS where mostly strips the TS, enums result in additional JS code

// According to tutor:
// TS Community has decided it's going to try to stick closer to JS and not continue this path of creating additional code like with enums
// enums are very early addition to the language and don't follow this philosophy

// Another option is to create a const enum
// which erases all existance of the enum from the JS, and replaces every value we reference from the enum

// e.g regular enum
// enum OrderStatus {
//     PENDING,
//     SHIPPED,
//     DELIVERED,
//     RETURNED
// }
// const order = {
//     orderNumber: 123,
//     status: OrderStatus.PENDING
// }
// const order2 = {
//     orderNumber: 124,
//     status: OrderStatus.DELIVERED
// }
// // results in 
// var OrderStatus;
// (function (OrderStatus) {
//     OrderStatus[OrderStatus["PENDING"] = 0] = "PENDING";
//     OrderStatus[OrderStatus["SHIPPED"] = 1] = "SHIPPED";
//     OrderStatus[OrderStatus["DELIVERED"] = 2] = "DELIVERED";
//     OrderStatus[OrderStatus["RETURNED"] = 3] = "RETURNED";
// })(OrderStatus || (OrderStatus = {}));
// const order = {
//     orderNumber: 123,
//     status: OrderStatus.PENDING
// };
// const order2 = {
//     orderNumber: 124,
//     status: OrderStatus.DELIVERED
// };

// Whereas if you const the enum you get cleaner JS as it replaces the values
// const enum OrderStatus {
//     PENDING,
//     SHIPPED,
//     DELIVERED,
//     RETURNED
// }
// const order = {
//     orderNumber: 123,
//     status: OrderStatus.PENDING
// }
// const order2 = {
//     orderNumber: 124,
//     status: OrderStatus.DELIVERED
// }
// const order = {
//     orderNumber: 123,
//     status: 0 /* OrderStatus.PENDING */
// };
// const order2 = {
//     orderNumber: 124,
//     status: 2 /* OrderStatus.DELIVERED */
// };

// still debatable if this is valuable
// as you can just create the object yourself
// one nice thing with enums/const enums is you get the autocomplete from Typescript making it easier
// to add the correct value