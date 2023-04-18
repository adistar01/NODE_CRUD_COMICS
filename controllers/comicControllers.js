const comic = require('../models/comics');

// Create(Add) a new comic
const addComic = async(req, res)=>{
    try{
        // Extracting all data sent from user
        console.log(req.body);
        const { name, author, published, price, discount, pages, condition, isbn } = req.body;

        if(!name){
            return res.send({message: "Name is required"});
        }
        if(!author){
            return res.send({message: "Author is required"});
        }
        if(!published){
            return res.send({message: "Publish Year is required"});
        }
        if(!price){
            return res.send({message: "Price is required"});
        }
        if(!discount){
            return res.send({message: "Discount is required"});
        }
        if(!pages){
            return res.send({message: "Number of Pages is required"});
        }
        if(!condition){
            return res.send({message: "Condition is required"});
        }
        if(!isbn){
            return res.send({message: "ISBN is required"});
        }

        // To check if the comic is already present in the database
        const existingComic = await comic.findOne({isbn});
        if(existingComic){
            return res.status(200).send({
                success: true,
                message: "Already present !"
            })
        }

        // Saving the comic
        const newComic = await new comic({ name, author, published, price, discount, pages, condition, isbn }).save();

        // Sending response on creation of new comic
        res.status(201).send({
            success:true,
            message:" Comic created successfully",
            newComic
        });

    }catch(error){
        console.log(error);
        res.status(500).send({
            success: false,
            message: "Error in adding comic",
            error
        })
    }
}


// Reading (Fetching) all comics stored in the database
const getComics = async(req, res)=>{
    try{
    const allComics = await comic.find({});
    return res.status(200).send(allComics); 
    }catch(error){
        console.log(error);
        res.status(500).send({
            success: false,
            message: "Error in reading comics",
            error
        })
    }
}


// Reading (Fetching) comic having particular ISBN number stored in the database
const getComic = async(req, res)=>{
    try{
    const oneComic = await comic.find({isbn:req.body.isbn});
    return res.status(200).send(oneComic); 
    }catch(error){
        console.log(error);
        res.status(500).send({
            success: false,
            message: "Error in reading comic",
            error
        })
    }
}

// Updating (Replacing) comic having particular ISBN number stored in the database
const replaceComic = async(req, res)=>{
    try{
    const oneComic = await comic.findOneAndReplace({isbn:req.body.isbn}, req.body);
    return res.status(200).send(oneComic); 
    }catch(error){
        console.log(error);
        res.status(500).send({
            success: false,
            message: "Error in updating comic",
            error
        })
    }
}


// Updating (Patching) comic having particular ISBN number stored in the database
const updateComic = async(req, res)=>{
    try{
    const oneComic = await comic.findOneAndUpdate({isbn:req.body.isbn}, req.body);
    return res.status(200).send(oneComic); 
    }catch(error){
        console.log(error);
        res.status(500).send({
            success: false,
            message: "Error in updating comic",
            error
        })
    }
}

// Deleting comic having particular ISBN number stored in the database
const deleteComic = async(req, res)=>{
    try{
    const oneComic = await comic.findOneAndDelete({isbn:req.body.isbn});
    return res.status(200).send(oneComic); 
    }catch(error){
        console.log(error);
        res.status(400).send({
            success: false,
            message: "Error in deleting comic",
            error
        })
    }
}

module.exports = {
    addComic,
    getComics,
    getComic,
    replaceComic,
    updateComic,
    deleteComic
}