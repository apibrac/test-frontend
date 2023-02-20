import * as React from "react";
import News from ".";
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
  it("should display all news", () => {
    //expect(mount(<NewsSelector {...props} />)).toMatchSnapshot();
  });
  it("should display news in xxx category when user selects filter", () => {
    //const wrapper = shallow(<NewsSelector {...props} />);
    //wrapper.find(News).at(0).prop("onSelectNews")();
    expect(props.onSelectNews).toHaveBeenCalledWith("cat");
  });
  it("should display all news when user resets filter", () => {
    //const wrapper = shallow(<NewsSelector {...props} />);
    // wrapper.find(News).at(1).prop("onSelectNews")();
    expect(props.onSelectNews).toHaveBeenCalledWith("dog");
  });
});
