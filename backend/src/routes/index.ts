import { Router } from "express";

const router = Router();

router.get("/", (_, res) => {
	return res.json({ message: "Ola Mundo!" });
});

export { router };
