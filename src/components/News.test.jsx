import * as React from "react";
// add news
import News from "./News";
// **** Nécessaire à la librairie de test *****
import { render, screen, waitFor } from "@testing-library/react";
// **** Nécessaire au action utilisateur
import userEvent from "@testing-library/user-event";
// on récupère le json des news
import json from "../../public/data/news.json";

//1. should display all news:
//render le composant
//expect compter le nombre de news

//2. should display news in xxx category when user selects filter:
//render le composant
//utilisateur change le bouton select
//expect compter le nombre de news

//3. should display all news when user resets filter
//render le composant
//utilisateur change le bouton select sur une catégorie
//utilisateur remet le bouton select sur toutes les catégories
//expect compter le nombre de news

beforeEach(() => {
  jest.spyOn(global, "fetch").mockResolvedValue({
    json: jest.fn().mockResolvedValue(json),
  });
});

afterEach(() => {
  jest.restoreAllMocks();
});

describe("News selector", () => {
  it("should display all news", async () => {
    // ***** On demande à executer la balise News
    render(<News />);
    // *** Le test ici c'est de chercher le tag h2 (créer par les news) ***
    // *** Il doit y avoir 7 h2 car il y a 7 nouvelles dans le json ***
    await waitFor(() => {
      expect(screen.getAllByRole("heading", { level: 2 })).toHaveLength(7);
    });
  });

  it("should display news in Ambassadeurs category when user selects filter", async () => {
    render(<News />);

    // *** on lance un evenement qui va changer la combo qui s'appelle catégorie
    // *** et qui prend la valeur Ambassadeur comme si un utilisateur faisait ça
    await userEvent.selectOptions(
      screen.getByRole("combobox", { name: "Catégorie:" }),
      "Ambassadeurs"
    );

    // *** cette fois il n'y a que 2 nouvelles qui on la catégorie Ambassadeur
    await waitFor(() => {
      expect(screen.getAllByRole("heading", { level: 2 })).toHaveLength(2);
    });
  });

  it("should display all news when user resets filter", async () => {
    render(<News />);
    // **** Même chose que le test d'au dessus mais on remet ensuite le choix à vide (donc pas de filtrage)
    await userEvent.selectOptions(
      screen.getByRole("combobox", { name: "Catégorie:" }),
      "Ambassadeurs"
    );
    await waitFor(() => {
      expect(
        // *** cette fois on doit encore avoir 7 figure.
        screen.getAllByRole("heading", { level: 2 })
      ).toHaveLength(2);
    });
    await userEvent.selectOptions(
      screen.getByRole("combobox", { name: "Catégorie:" }),
      ""
    );
    await waitFor(() => {
      expect(
        // *** cette fois on doit encore avoir 7 figure.
        screen.getAllByRole("heading", { level: 2 })
      ).toHaveLength(7);
    });
  });
});
