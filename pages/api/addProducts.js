import Products from "../../models/Products";
import connectDb from "../../middleware/mongoose";

// export default function handler(req, res) {
//     res.status(200).json({ name: 'John Doe' })
// }
// add data in db
//http://localhost:3000/api/addProducts
const handler = async (req, res) => {
    if (req.method === 'POST') {
        // Process a POST request
        console.log(req.body);
        try {
            let temp = new Products({
                id: req.body.id,
                title: req.body.title,
                price: req.body.price,
                description: req.body.description,
                category: req.body.category,
                image: req.body.image
            })
            const response = await temp.save();
            res.status(201).json(response);
        }
        catch (err) {
            res.status(400).json({ message: err });
        }

    } else {
        // Handle any other HTTP method
        res.status(400).json({ message: 'method not allowded' });
    }
}

export default connectDb(handler);