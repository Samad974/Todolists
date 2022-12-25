import React from "react";
import { TextField, Button, Grid, Card, CardContent } from "@mui/material";
import { useState } from "react";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import RateReviewIcon from "@mui/icons-material/RateReview";

export const Todolist = () => {
  const [text, setText] = useState("");
  const [list, setlist] = useState([]);
  const [isEdit, setisedit] = useState(false);
  const [indexnum, setindexnum] = useState(null);

  const handleadd = () => {
    if (text.trim() !== "")
      if (isEdit === true) {
        list.splice(indexnum, 1, text);
        setisedit(false);
        setindexnum(null);
        alert(text + " " + "is Updated");
      } else {
        setlist([...list, text]);
      }
    setText("");
  };
  const handledelete = (ind) => {
    const result = list.filter((elem, i) => i !== ind);
    setlist(result);
  };
  const handledelete2 = (item) => {
    const result2 = list.filter((elem) => elem !== item);
    setlist(result2);
  };
  const handleupdate = (item, ind) => {
    setText(item);
    setisedit(true);
  };
  return (
    <div style={{ textAlign: "center" }}>
      <h1>ToDo List</h1>
      <Grid container spacing={3} align="center">
        <Grid item xs={12}>
          <Card sx={{ height: 100, width: 600, bgcolor: "#D7BDE2" }}>
            {" "}
            <CardContent>
              <TextField
                variant="outlined"
                label="Type...."
                value={text}
                onChange={(e) => setText(e.target.value)}
              />
              <Button
                sx={{ height: 50, width: 110 }}
                variant="contained"
                onClick={handleadd}
              >
                {isEdit ? "Update" : "Add"}
              </Button>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      <Grid item xs={12} align="center">
        <Card sx={{ height: 500, width: 600, bgcolor: "bisque" }}>
          {" "}
          <CardContent>
            {list.map((item, ind) => {
              return (
                <React.Fragment>
                  <Grid container>
                    <Grid item xs={6} textAlign="left">
                      {" "}
                      <h3>
                        {ind + 1}. {item}
                      </h3>
                    </Grid>
                    <Grid item xs={2}>
                      <Button onClick={() => handledelete(ind)}>
                        <DeleteForeverIcon />{" "}
                      </Button>
                    </Grid>
                    {/* ///only delete item by index number// */}
                    {/* <Button onClick={()=>handledelete2(item)}>Delete2</Button>  */}
                    {/* ////Delete all same item// */}
                    <Grid item xs={2}>
                      <Button onClick={() => handleupdate(item, ind)}>
                        <RateReviewIcon />
                      </Button>
                    </Grid>
                  </Grid>
                </React.Fragment>
              );
            })}{" "}
          </CardContent>{" "}
        </Card>
      </Grid>
    </div>
  );
};
