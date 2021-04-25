import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import cartIcon from "../../theme/images/cart.svg";
import { ClickAwayListener } from "@material-ui/core";
// import { addToCart } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import CardInCart from "../itemCards/CardInCart";
import CustomButton from "../menuItems/CustomButton";
import { colors } from "../../theme/colors";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    position: "absolute !important",
    justifyContent: "center",
  },
  paperContainer: {
    display: "flex",
    width: "100%",
    maxWidth: 2000,
    alignItems: "flex-start",
    justifyContent: "flex-end",
  },
  cartButton: {
    display: "flex",
    alignItems: "center",
    backgroundColor: "initial",
    "& p": {
      paddingLeft: 10,
      fontSize: 20,
      fontFamily: "Open Sans Condensed",
      fontWeight: 700,
    },
  },
  paper: {
    margin: "120px 80px 0 0",
    backgroundColor: theme.palette.background.paper,
    width: "fit-content",
    boxShadow: "0px 0px 40px rgba(0, 0, 0, 0.7)",
    display: "flex",
    flexDirection: "column",
    height: "fit-content",
    "@media (max-width: 1300px)": {
      marginTop: 160,
    },
    "& h1": {
      width: "fit-content",
      margin: 40,
      marginBottom: 20,
      fontFamily: "Open Sans Condensed",
      fontSize: 54,
    },
  },
  cartItems: {
    margin: "0 20px",
    maxHeight: 500,
    overflow: "scroll",
    wodth: "fit-content",
    "&::-webkit-scrollbar": {
      width: 0,
      height: 0,
    },
  },
  notFound: {
    fontSize: 30,
    textAlign: "center",
    margin: "30px 0",
    width: "100%",
  },
  cartTotal: {
    boxShadow: `0px -3px 13px ${colors.secondary}`,
    color: colors.primary,
    backgroundColor: colors.secondary,
    padding: "0 50px 20px 50px",
    zIndex: 100,
    "& div": {
      display: "flex",
      alignItems: "center",
      color: colors.semiWhite,
      justifyContent: "space-between",
      fontSize: 30,
      padding: 20,
    },
    "& h5": {
      fontSize: 40,
      fontWeight: 400,
    },
  },
}));

export default function Cart() {
  const dispatch = useDispatch();
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  const cart = useSelector((state) => state.cart.cart);
  const total = useSelector((state) => state.cart.total);

  let buttonStyles = {
    fontWeight: 700,
    fontFamily: "Open Sans Condensed",
    fontSize: 36,
    lineHeight: "50px",
    width: "100%",
    border: "1px solid #FFFDFD",
  };

  return (
    <div>
      <button className={classes.cartButton} type="button" onClick={handleOpen}>
        <img src={cartIcon} alt="cart" />
        <p>Корзина</p>
      </button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleOpen}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
          style: {
            backgroundColor: "transparent",
          },
        }}
      >
        <div className={classes.paperContainer}>
          <Fade in={open}>
            <ClickAwayListener onClickAway={handleOpen}>
              <div className={classes.paper}>
                <h1>Корзина</h1>
                <div className={classes.cartItems}>
                  {cart[0] ? (
                    cart.map((cartItem, index) => {
                      return (
                        <CardInCart
                          itemCard={cartItem}
                          key={index}
                          index={index}
                        />
                      );
                    })
                  ) : (
                    <div className={classes.notFound}>Виберіть товар</div>
                  )}
                </div>
                <div className={classes.cartTotal}>
                  <div>
                    <p>Загальна вартість:</p>
                    <h5>{total} грн</h5>
                  </div>
                  <CustomButton
                    primary={colors.secondary}
                    secondary={colors.semiWhite}
                    text="Перейти до оформлення замовлення"
                    action={() => console.log(cart, total)}
                    styles={buttonStyles}
                    enabled={false}
                  />
                </div>
              </div>
            </ClickAwayListener>
          </Fade>
        </div>
      </Modal>
    </div>
  );
}
