import { Grid, Button } from "@mui/material";
import { useState } from "react";

function App() {
  const [value, setValue] = useState<string>("0");
  const buttons: IButtons[] = [
    {
      text: "C",
      fun: () => setValue("0"),
    },
    {
      text: "+",
    },
    {
      text: "-",
    },
    {
      text: "7",
    },
    {
      text: "8",
    },
    {
      text: "9",
    },
    {
      text: "4",
    },
    {
      text: "5",
    },
    {
      text: "6",
    },
    {
      text: "1",
    },
    {
      text: "2",
    },
    {
      text: "3",
    },
    {
      text: "*",
    },
    {
      text: "0",
    },
    {
      text: "/",
    },
    {
      text: "=",
      fun: () => {
        setValue(eval(value));
      },
    },
  ];

  function onButtonClick(item: IButtons) {
    if (value === "0") {
      setValue(`${item.text}`);
    } else {
      setValue(`${value}${item.text}`);
    }
    if (item.fun) {
      item.fun();
    }
  }

  return (
    <div className="container">
      <Grid container sx={{ width: "300px" }} spacing={1}>
        <Grid item xs={12}>
          <input
            type="text"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
        </Grid>
        {buttons.map((el, i) => {
          return (
            <Grid item xs={4} key={i} sx={{ width: "100%" }}>
              <Button
                onClick={() => onButtonClick(el)}
                sx={{ width: "100%" }}
                variant="contained"
              >
                {el.text}
              </Button>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
}

export default App;
