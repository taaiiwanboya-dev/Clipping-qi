const crypto = require('crypto');
const express = require("express");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json({limit:"2mb"}));
app.use(express.static(path.join(__dirname,"public")));

function isYouTubeUrl(value){
  try{
    const u=new URL(value);
    return ["youtube.com","www.youtube.com","m.youtube.com","youtu.be","www.youtu.be"].includes(u.hostname);
  }catch{return false}
}

// Demo backend: validates the URL and returns a processing job.
// Connect your own permitted media/transcription provider in processVideo()
// rather than downloading copyrighted YouTube videos without permission.
app.post("/api/analyze", async (req,res)=>{
  const {url,count=10,duration=30,ratio="9:16"}=req.body||{};
  if(!isYouTubeUrl(url)) return res.status(400).json({error:"Masukkan URL YouTube yang valid."});
  const job={
    id:crypto.randomUUID(),
    url,
    count:Number(count),
    duration:Number(duration),
    ratio,
    status:"queued",
    message:"URL diterima. Backend siap dipasangkan dengan pipeline video/transkripsi."
  };
  res.json(job);
});

app.get("/api/health",(req,res)=>res.json({ok:true,service:"ViralClip AI V2"}));

app.listen(PORT,()=>console.log(`ViralClip AI V2 running on http://localhost:${PORT}`));
