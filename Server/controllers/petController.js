import { Pet } from "../models/Pet.js";

export const create = async(req,res)=>{
     try {
        console.log(req.files);
        const {name, age, breed, color, description, imageLabel, category} = req.body;
        const {image, additionalImages} = req.files;

        let imagePath = '';
        let additionalImagesPath = [];

        if(image && image.length > 0){
            imagePath = image[0].path;

        }
        if(additionalImages && additionalImages.length >0){
            additionalImagesPath = additionalImages.map(file => file.path);
        }

        const createdPet = await Pet.create({
            name,
            age,
            breed,
            color,
            description,
            imageLabel,
            category,
            image: imagePath,
            additionalImages: additionalImagesPath
        });

        res.json({message: 'Pet created', createdPet})


    } catch (error) {
        console.log(error);
        res.status(400).json(error);
        
    }
    
    
    
}