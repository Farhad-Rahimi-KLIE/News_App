const News = require("../Models/news")
class NewsController {
    static AddNews = async (req, res) => {
        const {title, description,writedBy} = req.body;
        try {
            if (title, description, writedBy) {
                const addimage = await News.create({
                    title : title,
                    description : description,
                    image : req.file.filename,
                    writedBy : req.writedBy._id,
                })
                if (addimage) {
            return res.status(200).json({message : "Porduct Added Successfully",addimage})
                }
            } else {
            return res.status(400).json({message : "All Fields Required"})
            }
        } catch (error) {
            return res.status(400).json({message : error.message})
        }
}
    static getAllNews = async (req, res) => {
        try {
            const getAllProperty = await News.find({}).sort({timestamp : -1}).populate("writedBy")
            if (getAllProperty) {
                return res.status(200).json({ message: "All Chats is get it", getAllProperty })
            }
        } catch (error) {
            return res.status(400).json({ message: error.message })
        }
    }
    static DeletePost = async (req, res) => {
        const id = req.params.id;
        try {
            const getAllProperty = await News.findByIdAndDelete({_id : id})
            if (getAllProperty) {
                return res.status(200).json({ message: "News Deleted Successfully", getAllProperty })
            }
        } catch (error) {
            return res.status(400).json({ message: error.message })
        }
    }
    static GetOneNews = async (req, res) => {
        const id = req.params.id;
        try {
            const getAllProperty = await News.findOne({_id : id})
            if (getAllProperty) {
                return res.status(200).json({ message: "Findid Successfully", getAllProperty })
            }
        } catch (error) {
            return res.status(400).json({ message: error.message })
        }
    }
    static UpdatePost = async (req, res) => {
        const id = req.params.id;
        try {
            const getAllProperty = await News.findByIdAndUpdate({
                _id : id
            },
            {
                $set : req.body
            }
            )
            if (getAllProperty) {
                return res.status(200).json({ message: "News Updated Successfully", getAllProperty })
            }
        } catch (error) {
            return res.status(400).json({ message: error.message })
        }
    }
}
module.exports = NewsController;