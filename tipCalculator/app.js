const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());
const optionList = [
	{value : 0.3, text: "outstanding"},
	{value : 0.2, text: "good"},
	{value : 0.15, text: "okay"},
	{value : 0.1, text: "bad"},
];

app.get("/calulateBill", (req, res) => {
	const { billAmount, serviceQuality, totalPeople } = req.query;
	let total = (billAmount*serviceQuality)/totalPeople;
	res.send({ value: total });
});


app.get("/getoptionList", (req, res)=>{
	res.json(optionList);
})

app.listen(PORT, () => {
	console.log(`Server is running on http://localhost:${PORT}`);
});
