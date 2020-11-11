import React from "react";
import { useDrinks } from "./useDrinks";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  container: {
    maxWidth: 600,
  },
});

export default function SingleDrink(props) {
  const classes = useStyles();
  const { drinker, isError } = useDrinks(props.drink);
  return (
    <div className={classes.container}>
      {drinker &&
        Object.values(drinker?.drinks[0]).map((value) => (
          <div>{value !== null && <p>{value}</p>}</div>
        ))}
      {isError && <div>ERROR OCURRED</div>}
    </div>
  );
}
