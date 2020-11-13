import React from "react";
import { useDrinks } from "./useDrinks";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  container: {
    maxWidth: 600,
    border: "1px solid black",
    padding: 20,
  },
  header: {
    padding: 10,
    background: "#30475e",
    textAlign: "center",
  },
  title: {
    fontSize: 25,
    textDecoration: "underline",
    marginBottom: 5,
  },
  category: {
    fontSize: 14,
    marginBottom: 5,
  },
  drinkImage: {
    "& img": {
      width: 150,
    },
    border: "5px solid #f2a365",
    width: "fit-content",
    height: "fit-content",
    margin: "auto",
  },
  content: {
    background: "#30475e",
    marginTop: 5,
    padding: 10,
  },
  isAlcoholic: {
    fontStyle: "italic",
    fontSize: 20,
    marginBottom: 10,
  },
  ingredientsTitle: {
    fontSize: 22,
    textDecoration: "underline",
    "@media(max-width: 700px)": {
      fontSize: 18,
    },
  },
  singleIngredient: {
    display: "flex",
    border: "1px solid #f2a365",
    padding: 3,
  },
  ingredientName: {
    width: 100,
  },
  ingredientMeasurement: {
    marginLeft: "20%",
    // textAlign: "center",
  },
  glassType: {
    fontSize: 18,
    display: "flex",
    flexDirection: "column",
    marginBottom: 10,
    "@media(max-width: 700px)": {
      fontSize: 15,
    },
  },
  glass: {
    fontSize: 22,
    textDecoration: "underline",
    marginBottom: 10,
    "@media(max-width: 700px)": {
      fontSize: 18,
      display: "flex",
    },
  },
  directions: {
    fontSize: 22,
    textDecoration: "underline",
    marginBottom: 10,
    "@media(max-width: 700px)": {
      fontSize: 18,
    },
  },
});

export default function SingleDrink(props) {
  const classes = useStyles();
  const { drinker, isError } = useDrinks(props.drink);

  const DrinkTemplate = (props) => {
    const { drinkData } = props;
    const ingredients = [
      {
        ingredient: drinkData.strIngredient1,
        measurement: drinkData.strMeasure1,
      },
      {
        ingredient: drinkData.strIngredient2,
        measurement: drinkData.strMeasure2,
      },
      {
        ingredient: drinkData.strIngredient3,
        measurement: drinkData.strMeasure3,
      },
      {
        ingredient: drinkData.strIngredient4,
        measurement: drinkData.strMeasure4,
      },
      {
        ingredient: drinkData.strIngredient5,
        measurement: drinkData.strMeasure5,
      },
      {
        ingredient: drinkData.strIngredient6,
        measurement: drinkData.strMeasure6,
      },
      {
        ingredient: drinkData.strIngredient7,
        measurement: drinkData.strMeasure7,
      },
      {
        ingredient: drinkData.strIngredient8,
        measurement: drinkData.strMeasure8,
      },
      {
        ingredient: drinkData.strIngredient9,
        measurement: drinkData.strMeasure9,
      },
      {
        ingredient: drinkData.strIngredient10,
        measurement: drinkData.strMeasure10,
      },
      {
        ingredient: drinkData.strIngredient11,
        measurement: drinkData.strMeasure11,
      },
      {
        ingredient: drinkData.strIngredient12,
        measurement: drinkData.strMeasure12,
      },
      {
        ingredient: drinkData.strIngredient13,
        measurement: drinkData.strMeasure13,
      },
      {
        ingredient: drinkData.strIngredient14,
        measurement: drinkData.strMeasure14,
      },
      {
        ingredient: drinkData.strIngredient15,
        measurement: drinkData.strMeasure15,
      },
    ];

    return (
      <div>
        <div className={classes.header}>
          <div className={classes.title}>{drinkData.strDrink}</div>
          <div className={classes.category}>{drinkData.strCategory}</div>
          {/* <div className={classes.updatedAt}>{drinkData.dateModified}</div> */}
          <div className={classes.drinkImage}>
            <img
              src={`${drinkData.strDrinkThumb}/preview`}
              alt="Prepared drink"
            />
          </div>
        </div>
        <div className={classes.content}>
          <div className={classes.isAlcoholic}>
            This drink is {drinkData.strAlcoholic}*
          </div>
          <div className={classes.glassType}>
            <span className={classes.glass}>Recommended Glass</span>{" "}
            {drinkData.strGlass}
          </div>
          <div className={classes.instructions}>
            <p className={classes.directions}>Directions</p>
            {drinkData.strInstructions}
          </div>
          <div className={classes.ingredients}>
            <p className={classes.ingredientsTitle}>
              Ingredients & Measurements
            </p>
            {ingredients.map((item, index) => (
              <div key={index}>
                {item.ingredient !== null && (
                  <div className={classes.singleIngredient}>
                    <div className={classes.ingredientName}>
                      {item.ingredient} :
                    </div>
                    <div className={classes.ingredientMeasurement}>
                      {item.measurement}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className={classes.container}>
      {drinker && <DrinkTemplate drinkData={drinker.drinks[0]} />}
      {isError && <div>ERROR OCURRED</div>}
    </div>
  );
}
