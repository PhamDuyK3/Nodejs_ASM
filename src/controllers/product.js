import Product from "../models/product"
import Joi from "joi"
const checkvalidate = Joi.object({
    name:Joi.string().required(),
    price:Joi.number().required()
})
export const create=async(req,res)=>{
    try {
        const {error}=checkvalidate.validate(req.body);
        if(error){
            res.json({
                message: error.details[0].message
            })
        }
        const products = await Product.create(req.body);
        res.status(200).json({
            message:"Thêm sản phẩm thành công",
            products,
        })
    } catch (error) {
        res.status(400).json({
            message: error
        })
    }
}
export const getAll=async(req,res)=>{
    try {
        const products = await Product.find();
        res.status(200).json(products)
    } catch (error) {
        res.status(400).json({
            message: error
        })
    }
}
export const get=async(req,res)=>{
    try {
        const products = await Product.findById(req.params.id);
        res.status(200).json(products)
    } catch (error) {
        res.status(400).json({
            message: error
        })
    }
}
export const update=async(req,res)=>{
    try {
        const {error}=checkvalidate.validate(req.body);
        if(error){
         return res.status(400).json({
             message: error.details[0].message
         })
        }
        const products = await Product.findByIdAndUpdate(req.params.id,req.body,{new:true});
        res.status(200).json({
            message:"Sửa sản phẩm thành công",
            products,})
    } catch (error) {
        res.status(400).json({
            message: error
        })
    }
}
export const remove = async(req,res)=>{
    try {
        const products = await Product.findByIdAndDelete(req.params.id);
        res.status(200).json({
            message:"Xóa sản phẩm thành công",
            products,})
    } catch (error) {
        res.status(400).json({
            message: error
        })
    }
}