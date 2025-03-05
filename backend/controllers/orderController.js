import orderModel from "../models/orderModel.js";
import userModel from "../models/userModel.js";


// placing order using cash on delivery
const placeOrder = async (req,res) =>{

    try {
        
        const{userId, items, amount, address} = req.body;

        const orderData = {
            userId,
            items,
            address,
            amount,
            paymentMethod:"COD",
            payment:false,
            date: Date.now()
        }

        const newOrder = new orderModel(orderData)
        await newOrder.save()

        // clear cart data
        await userModel.findByIdAndUpdate(userId,{cartData:{}})

        res.json({success:true,message:"Order Places"})

    } catch (error) {
        console.log(error);
        res.json({success:false,message:error.message})
        
    }

}

// placing order using stripe method
const placeOrderStripe = async (req,res) =>{

}

// placing order using Razorpay
const placeOrderRazorpay = async (req,res) =>{

}

// All Orders data for Admin Panel
const allOrders = async (req,res) =>{

    try {
        const orders = await orderModel.find({})
        res.json({success:true,orders})
    } catch (error) {
        console.log(error);
        res.json({success:false,message:error.message}) 
    }
}

// User orders data for Frontend
const userOrders = async (req,res) =>{

    try {
        const {userId} = req.body

        const orders = await orderModel.find({userId})
        res.json({success:true,orders})

    } catch (error) {
        console.log(error);
        res.json({success:false,message:error.message})   
    }

}

// update order status from Admin panel
const updateStatus = async (req,res) =>{

    try {
        const {orderId, status} = req.body 
        await orderModel.findByIdAndUpdate(orderId,{status})
        res.json({success:true,message:"Order status updated"})
    } catch (error) {
        console.log(error);
        res.json({success:false,message:error.message})
    }
}

export {placeOrder,placeOrderRazorpay,placeOrderStripe,allOrders,userOrders,updateStatus}