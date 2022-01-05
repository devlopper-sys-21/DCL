import mongoose, { Schema } from 'mongoose'

const reqString = {
    type: String,
    required: true
}
const reqNum = {
    type: Number,
    required: true,
}



const economySchema = new Schema({
    // USER ID
    _id: reqString,
    memberId: reqString,
    balance: {reqNum, default: 0},
    bank: {reqNum, default: 0}

})


const name = 'wokcommands-economy'
//module.exports =
export default mongoose.models[name] || mongoose.model(name, economySchema, name)