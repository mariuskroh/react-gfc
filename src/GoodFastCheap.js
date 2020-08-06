import React, { useEffect } from "react";
import useEvaluateSwitches from "./useEvaluateSwitches";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";
import { withStyles } from "@material-ui/styles";
import styles from "./GoodFastCheapStyles";

function GoodFastCheap(props) {
  // get the styles
  const { classes } = props;
  const { root, card, content, formGroup, label } = classes;
  // set labels
  const { first, second, third } = props.options.match.params;

  // init switch state
  const initialSwitches = {
    first: false,
    second: false,
    third: false,
  };

  // init hook
  const [switches, toggle, lastClicked, rebalance] = useEvaluateSwitches(
    initialSwitches
  );
  // rebalance on update if conditions are met on change
  useEffect(() => {
    const checked = Object.keys(switches).filter((key) => switches[key]);
    if (checked.length === 3) {
      const chooseToUncheck = Object.keys(switches).filter(
        (key) => key !== lastClicked
      );
      const switchToUncheck = chooseToUncheck[Math.floor(Math.random() * 2)];
      rebalance(switchToUncheck);
    }
  }, [lastClicked, rebalance, switches]);

  return (
    <Grid
      className={root}
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justify="center"
    >
      <Grid item xs={11} s={7}>
        <Card className={card}>
          <CardContent className={content}>
            <FormGroup row className={formGroup}>
              <FormControlLabel
                className={label}
                control={
                  <Switch
                    checked={switches.first}
                    onChange={toggle}
                    name="first"
                    color="primary"
                  />
                }
                label={first}
              />
              <FormControlLabel
                className={label}
                control={
                  <Switch
                    checked={switches.second}
                    onChange={toggle}
                    name="second"
                    color="primary"
                  />
                }
                label={second}
              />
              <FormControlLabel
                className={label}
                style={{ marginRight: 0 }}
                control={
                  <Switch
                    checked={switches.third}
                    onChange={toggle}
                    name="third"
                    color="primary"
                  />
                }
                label={third}
              />
            </FormGroup>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}

export default withStyles(styles)(GoodFastCheap);
