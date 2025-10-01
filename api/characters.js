import fetch from "node-fetch";
import crypto from "crypto";

export default async function handler(req, res) {
    const name = req.query.name || "Spider-Man";
    
    const publicKey = process.env.MARVEL_PUBLIC_KEY;
    const privateKey = process.env.MARVEL_PRIVATE_KEY;
    const ts = Date.now().toString();

    const hash = crypto.createHash("md5").update(ts + privateKey + publicKey).digest("hex");

    const url = `https://gateway.marvel.com/v1/public/characters?name=${name}&ts=${ts}&apikey=${publicKey}&hash=${hash}`;

    const response = await fetch(url);
    const data = await response.json();

    res.status(200).json(data);
}