import React, { useState, useEffect } from "react";
import axios from "axios";

const RecipeForm = () => {
  const [data, setData] = useState({
    name: "",
    author: "",
    description: "",
    country: "",
    image: "",
    ingredients: [],
    instructions: "",
  });

  // Getting data for all 250 countries
  useEffect(() => {
    axios.get("https://restcountries.com/v2/all").then((res) => {
      setCountries(res.data);
    });
  }, []);

  // Ingredients as a separated state which contains one object by default. When adding new ingredients, the array will have more objects.
  const [ingredients, setIngredients] = useState([
    { id: 1, ingredient: "", amount: "" },
  ]);

  // countries state is for saving data from restcountries API
  const [countries, setCountries] = useState([]);

  // basic onChange event for regular inputs
  const changeData = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  // Bit more complicated event handler for getting data from ingredients. First, we spread the current ingredients state and then look for that specific object in the array. We use the index, which is passed to the event handler. After updating the value in inputs, we will overwrite the Data state and add the ingredients array.
  const changeIncData = (e, i) => {
    const { name, value } = e.target;
    const incList = [...ingredients];
    incList[i][name] = value;
    setIngredients(incList);
    setData({ ...data, ingredients: ingredients });
  };

  // This event handler is reacting to our select event handler. We get the value from select, and then we find the correct alpha2Code. After that, we save valid code to the Data state.
  // const changeCountry = (e) => {
  //   const correctCountry = countries.find((c) => c.name === e.target.value);
  //   setData({ ...data, country_code: correctCountry.alpha2Code });
  // };

  // const changeCountry = (e) => {
  //   const countryChosen = countries.find((c) => c.name === e.target.value);
  //   setData({
  //     ...data,
  //     country: { flag: countryChosen.flags.svg, name: countryChosen.name },
  //   });
  // };

  // This event handler will add an empty ingredient object to the ingredients array.
  const addMore = (e) => {
    e.preventDefault();
    const newInc = { id: ingredients.length + 1, ingredient: "", amount: "" };
    setIngredients([...ingredients, newInc]);
  };

  // After we have all data collected from inputs, we post the Data object from state.
  const submitData = (e) => {
    axios.post("http://localhost:3001/recipes", data);
  };

  // Please note that you have to declare each input handler separately because we have three different kinds of input handlers. Otherwise, the latest handler will overwrite the previous ones.
  return (
    <form onSubmit={submitData}>
      <div>
        <label htmlFor="name">Name</label>
        <input type="text" name="name" id="name" onChange={changeData} />
      </div>
      <div>
        <label htmlFor="author">Author</label>
        <input type="text" name="author" id="author" onChange={changeData} />
      </div>
      <div>
        <label htmlFor="description">Description</label>
        <textarea
          type="text"
          name="description"
          id="description"
          onChange={changeData}
        />
      </div>
      <div className="formsection">
        <label htmlFor="country">Recipe is from:</label>
        <select name="country" id="country" onChange={changeData}>
          {/* This is a way how you can dynamically create select options based on the array by using a simple mapping method.*/}
          {countries.map((c) => (
            <option key={c.name}>{c.name}</option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="image">Image url</label>
        <input type="url" name="image" id="image" onChange={changeData} />
      </div>
      <p>Ingredients</p>
      {ingredients.map((_, i) => {
        return (
          <div key={i}>
            <div>
              <label htmlFor="amount">Quantity</label>
              <input
                type="text"
                name="amount"
                id="amount"
                onChange={(e) => changeIncData(e, i)}
              />
            </div>
            <div>
              <label htmlFor="ingredient">Ingredient</label>
              <input
                type="text"
                name="ingredient"
                id="ingredient"
                onChange={(e) => changeIncData(e, i)}
              />
            </div>
          </div>
        );
      })}
      <button onClick={addMore}>Add more ingredients</button>
      <div>
        <label htmlFor="instructions">Instructions</label>
        <textarea
          type="text"
          name="instructions"
          id="instructions"
          onChange={changeData}
        />
      </div>
      <input type="submit" value="Add recipe" />
    </form>
  );
};

export default RecipeForm;
