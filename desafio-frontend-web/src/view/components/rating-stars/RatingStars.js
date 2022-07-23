import PropTypes from "prop-types";

import styles from "./RatingStars.module.css";
import HeadingXS from "../../../typography/components/HeadingXS/HeadingXS";
import BodyM from "../../../typography/components/BodyM/BodyM";

import { ReactComponent as Star } from "../../../assets/images/star-icon.svg";

const DEFAULT_MAX = 5;

function RatingStars({ max, rating, setRating, hover, setHover, clear, required }) {
  const maxRating =
    Math.round(max) > 0
      ? new Array(Math.round(max)).fill(1)
      : new Array(DEFAULT_MAX).fill(1);

  function starSelected(evt, r) {
    evt.preventDefault();
    setRating(r);
  }

  function starEntered(evt, r) {
    if (evt.code === "Enter") {
      setRating(r);
    }
  }

  function starClassName(value) {
    if (rating === 0) {
      return value <= (rating || hover)
        ? styles.RatingStars_starSelected
        : styles.RatingStars_star;
    }
    return value <= hover
      ? styles.RatingStars_starSelected
      : styles.RatingStars_star;
  }

  function clearRating() {
    setRating(0);
  }

  return (
    <div className={styles.RatingStars}>
      <HeadingXS>Marque de 1 a {Math.round(max)} estrelas{required ? '*':''}</HeadingXS>
      <div className={styles.RatingStars_buttonGroup} >
        { maxRating.map((value, index) => {
          value += index;
          return (
            <div key={`button${index.toString()}`}>
              <button
                className={styles.RatingStars_button}
                key={`estrela${index.toString()}`}
                onClick={(e) => starSelected(e, value)}
                onKeyUp={(e) => starEntered(e, value)}
                onFocus={() => setHover(value)}
                onBlur={() => setHover(rating)}
                onMouseEnter={() => setHover(value)}
                onMouseLeave={() => setHover(rating)}
                name={`estrela${value}`}
              >
                <label className={styles.RatingStars_label} key={`label${index.toString()}`} htmlFor={`estrela${value}`}>
                  {value} {value > 1 ? "estrelas" : "estrela"}
                </label>
                <Star
                  className={starClassName(value)}
                  key={`star${index.toString()}`}
                ></Star>
              </button>
            </div>
          );
        })}
      </div>
      {clear && rating ? (
        <button
          className={styles.RatingStars_submitButton}
          type="button"
          onClick={clearRating}
        >
          <BodyM color="light-solid" bold>
            Limpar
          </BodyM>
        </button>
      ) : (
        ""
      )}
    </div>
  );
}

RatingStars.propTypes = {
  max: PropTypes.number,
  rating: PropTypes.number,
  setRating: PropTypes.any,
  hover: PropTypes.number,
  setHover: PropTypes.any,
  clear: PropTypes.bool,
  required: PropTypes.bool
};

RatingStars.defaultProps = {
  max: DEFAULT_MAX,
  clear: false,
  required: false
};

export default RatingStars;
