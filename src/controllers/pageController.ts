import { Request, Response } from "express";
import { Pet } from "../models/Pet";
import { createMenuObject } from "../helpers/createMenuObject";

type Banner = {
  title: string;
  background: string;
};

// Todos os Pets
export const all = (req: Request, rep: Response) => {
  const banner: Banner = {
    title: "Todos os animais",
    background: "allanimals.jpg",
  };

  const menu = createMenuObject("all");

  let list = Pet.getAll();

  rep.render("pages/page", {
    banner,
    menu,
    list,
  });
};

// Apenas cachorro
export const dog = (req: Request, rep: Response) => {
  const banner: Banner = {
    title: "Cachorros",
    background: "banner_dog.jpg",
  };

  const menu = createMenuObject("dog");

  let list = Pet.getFromType("dog");

  rep.render("pages/page", {
    banner,
    menu,
    list,
  });
};

// Apenas gatos
export const cat = (req: Request, rep: Response) => {
  const banner: Banner = {
    title: "Gatos",
    background: "banner_cat.jpg",
  };

  const menu = createMenuObject("cat");

  let list = Pet.getFromType("cat");

  rep.render("pages/page", {
    banner,
    menu,
    list,
  });
};

// Apenas peixe
export const fish = (req: Request, rep: Response) => {
  const banner: Banner = {
    title: "Peixes",
    background: "banner_fish.jpg",
  };

  const menu = createMenuObject("fish");

  let list = Pet.getFromType("fish");

  rep.render("pages/page", {
    banner,
    menu,
    list,
  });
};
