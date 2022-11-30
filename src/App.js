import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Pages/Layout";

import RecipeList from "./Components/Recipes/RecipeList";
import Main from "./Components/main/Main";
import RecipeSingle from "./Components/Recipes/RecipeSingle";
import RecipeForm from "./Components/Recipes/RecipeForm";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Main />} />
            <Route path="recipes" element={<RecipeList />} />
            <Route path="recipes/:id" element={<RecipeSingle />} />
            <Route path="addrecipe" element={<RecipeForm />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
