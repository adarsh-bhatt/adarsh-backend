import mongoose,{Schema} from "mongoose";

import aggregatePaginate from "mongoose-aggregate-paginate-v2"
const videoSchema = ({
videoFile:{
type:String,
 required:true
},
thumbnail:{
type:String,
 required:true
},
title:{
type:String,
 required:true
},
description:{
type:String,
 required:true
},
duration:{
type:Number,
 required:true
},

view:{
type:Number,
default:0

},

isPublish:{
type:Boolean,
default:true
},


owner:{

type:Schema.Types.ObjectId,
ref:"User"

}
},{Timestamp:true})

videoSchema.plugin(aggregatePaginate)

export const Video = mongoose.model("Video",videoSchema)