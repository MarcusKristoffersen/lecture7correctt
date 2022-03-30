import {Router} from "express";

export function MoviesApi() {
    const router = new Router();
    router.get("/", (req, res) => {
        const movies = [
            {
                title: "Movie 1",
            },
            {
            title: "Movie 2",
            },
        ];
        res.json(movies);
    });

    router.post("/new", (req, res) => {
        res.sendStatus(500);
    });
    return router;
}