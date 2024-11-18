import mongoose, { mongo, Mongoose } from "mongoose";

const cartProductSchema = new mongoose.Schema ({
    productId : {
        type : mongoose.Schema.ObjectId,
        ref : "product"
    },
    quantity : {
        type : Number,
        default : 1
    },
    userId : {
        type : Mongoose.Schema.ObjectId,
        ref : 'User'
    }
}, {
    timestamps : true
})

const CartProductModel = mongoose.model('cartProduct',cartProductSchema)

export default CartProductModel