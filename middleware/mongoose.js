import mongoose from "mongoose";
import handler from "../pages/api/getProducts";

const connectDb = handler => async (req, res) => {
    if (mongoose.connections[0].readyState) {
        return handler(req, res);
    }
    await mongoose.connect('mongodb+srv://rahulgaur10441:rahulS%406403@cluster0.qyrtptb.mongodb.net/Ecom?retryWrites=true&w=majority')
    return handler(req, res);
}

export default connectDb;