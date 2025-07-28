import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import ListItemText from "@mui/material/ListItemText";
import ListItemButton from "@mui/material/ListItemButton";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
import Slide from "@mui/material/Slide";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function FullScreenDialog() {
  const [open, setOpen] = React.useState(false);
  const [isHovered, setIsHovered] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <div
        style={{
          textAlign: "center",
          marginTop: "190px",
          backgroundColor: "#08141c",
        }}
      >
        <h1 style={{ color: "#e74c3c", fontFamily: "cursive" }}>
          Your Perfect Partner <br />
          <span style={{ marginLeft: "350px", color: "white" }}>
            {" "}
            Here’s Why...
          </span>
        </h1>

        {/* Hoverable Button with Image */}
        <Button
          variant="outlined"
          onClick={handleClickOpen}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          style={{
            marginTop: "60px",
            borderRadius: "80px 0px 80px 0px",
            padding: 0,
            position: "relative",
            overflow: "hidden",
            width: "550px",
            height: "550px",
            variant: "outlined",
          }}
        >
          <div style={{ position: "relative", width: "800px", height: "100%" }}>
            <img
              src="https://5.imimg.com/data5/SELLER/Default/2022/3/DW/QV/PU/119464115/2d-product-label-design-services-500x500.jpg"
              alt=""
              style={{
                width: "100%",
                height: "100%",
                borderRadius: "80px 0px 80px 0px",
                display: "block",
                
              }}
            />
            {isHovered && (
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  backgroundColor: "rgba(0, 0, 0, 0.6)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "white",
                  fontSize: "1.2rem",
                  fontWeight: "bold",
                  borderRadius: "80px 0px 80px 0px",
                }}
              >
                Click Me
              </div>
            )}
          </div>
        </Button>

        {/* Dialog */}
        <Dialog
          fullScreen
          open={open}
          onClose={handleClose}
          slots={{
            transition: Transition,
          }}
          PaperProps={{
            sx: {
              backgroundColor: "#08141c",
              color: "white",
            },
          }}
        >
          <AppBar sx={{ position: "relative", backgroundColor: "#e74c3c" }}>
            <Toolbar>
              <IconButton
                edge="start"
                color="inherit"
                onClick={handleClose}
                aria-label="close"
              >
                <CloseIcon />
              </IconButton>
              <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
                Labelex
              </Typography>
            </Toolbar>
          </AppBar>

          <List>
            <div style={{ textAlign: "center" }}>
              <h1 style={{ fontFamily: "cursive" }}>
                We Make Printing Effortless <br />
                <span style={{ marginLeft: "350px", color: "#e74c3c" }}>
                  Anytime, Anywhere
                </span>
              </h1>
              <p style={{ marginTop: "50px" }}>
                At LABELEX, we are committed to simplifying all your printing
                needs with seamless,
                <br /> round-the-clock support. Whether it's a last-minute job
                or a bulk printing requirement,
                <br /> our team is always ready to deliver excellence when you
                need it most
              </p>
            </div>

            <Divider style={{ color: "white" }} />

            <div style={{ display: "flex", marginTop: "70px" }}>
              <div style={{ marginLeft: "150px" }}>
                <h1 style={{ textAlign: "center" }}>Why Choose Us?</h1>

                <h2
                  style={{
                    marginTop: "50px",
                    color: "#e74c3c",
                    fontFamily: "cursive",
                  }}
                >
                  Expertise You Can Trust
                </h2>
                <p>
                  Our skilled and experienced professionals bring years of
                  industry <br /> knowledge to every project. From label design
                  to final delivery, we <br /> ensure quality at every stage
                </p>

                <h2
                  style={{
                    marginTop: "50px",
                    color: "#e74c3c",
                    fontFamily: "cursive",
                  }}
                >
                  Cost-Effective Printing Solutions
                </h2>
                <p>
                  We believe premium printing shouldn't come at a premium price. <br />
                  Our services are competitively priced to offer the best
                  value without <br /> compromising quality
                </p>

                <h2
                  style={{
                    marginTop: "50px",
                    color: "#e74c3c",
                    fontFamily: "cursive",
                  }}
                >
                  Pixel-Perfect Precision
                </h2>
                <p>
                  We pay attention to the finest details. Every print we produce
                  is <br /> sharp, clear, and perfectly aligned — delivering a
                  flawless final <br /> product that exceeds expectations.
                </p>

                <h2
                  style={{
                    marginTop: "50px",
                    color: "#e74c3c",
                    fontFamily: "cursive",
                  }}
                >
                  Minimized Transportation Costs
                </h2>
                <p>
                  Thanks to our efficient logistics and localized production
                  units,<br /> we help you save on transport while ensuring
                  timely delivery <br /> across locations.
                </p>
              </div>

              <img
                style={{
                  marginLeft: "150px",
                  borderRadius: "80px 0px 80px 0px",
                  height: "500px",
                  width: "550px",
                  marginTop: "80px",
                }}
                src="https://t4.ftcdn.net/jpg/03/02/89/31/360_F_302893114_J5rMGfwYs5haNIUNhHiY5giut5y2HqOR.jpg"
                alt=""
              />
            </div>
          </List>
        </Dialog>
      </div>
    </React.Fragment>
  );
}
