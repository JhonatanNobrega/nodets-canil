import { Request, Response } from "express";

import { Pet } from "../models/pet";
import { createMenuObject } from "../helpers/createMenuObject";

export const search = (req: Request, res: Response) => {
  let query: string = req.query.q as string;

  if (!query) {
    res.redirect("/");
    return;
  }

  let list = Pet.getFromName(query);

  const menu = createMenuObject("");

  res.render("pages/page", {
    menu,
    list,
    query,
  });
};
