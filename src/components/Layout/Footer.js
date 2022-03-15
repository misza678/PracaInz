import { Fragment } from "react";
import classes from "../../components/Layout/footer.module.css";

const Footer = (props) => {
  return (
    <Fragment>
      <footer>
        <div className={classes.container}>
          <div className={classes.row}>
            <div className={classes.footer_col}>
              <h4>Warstwa prezentacji pracy inżynierskiej</h4>
              <h4>Wykonano przez Michała Lachowskiego</h4>
            </div>
          </div>
        </div>
      </footer>
    </Fragment>
  );
};

export default Footer;
