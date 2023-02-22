import * as React from "react";
// add news
import News from "./News";
// **** Nécessaire à la librairie de test *****
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
// **** Nécessaire car news inclus un useNavigate ****
import { BrowserRouter as Router } from "react-router-dom";

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

describe("News selector", () => {
  const props = { onSelectNews: jest.fn() };

  it("should display all news", async () => {
    // ***** On demande à executer la balise News mais dans le router car sinon il y a une erreur sur usenavigate ****
    render(
      <Router>
        <News />
      </Router>
    );
    await waitFor(() => {
      // *** Le test ici c'est de chercher le tag figure (créer par les news) ***
      // *** Il doit y avoir 7 figures car il y a 7 nouvelles dans le json ***
      expect(screen.getAllByRole("figure")).toHaveLength(7);
    });

    it("should display news in xxx category when user selects filter", async () => {
      await render(
        <Router>
          <News />
        </Router>
      );

      // *** on lance un evenement qui va changer la combo qui s'appelle catégorie
      // *** et qui prend la valeur Ambassadeur comme si un utilisateur faisait ça
      await fireEvent.change(
        screen.getByRole("combobox", { name: "Catégorie:" }),
        { target: { value: "Ambassadeurs" } }
      );

      await waitFor(
        () => {
          // *** cette fois il n'y a que 2 nouvelles qui on la catégorie Ambassadeur
          expect(screen.getAllByRole("figure")).toHaveLength(2);
        },
        {
          timeout: 4000,
        }
      );
    });

    it("should display all news when user resets filter", async () => {
      await render(
        <Router>
          <News />
        </Router>
      );
      // **** Même chose que le test d'au dessus mais on remet le choix à vide (donc pas de filtrage)
      await fireEvent.change(
        screen.getByRole("combobox", { name: "Catégorie:" }),
        { target: { value: "" } }
      );
      await waitFor(
        () => {
          expect(
            // *** cette fois on doit encore avoir 7 figure.
            screen.getAllByRole("figure")
          ).toHaveLength(7);
        },
        {
          timeout: 4000,
        }
      );
    });
  });
});
