import { useState, useLayoutEffect } from "react";
import { ratingPOST } from "../../../services/api";

import Card from "../../components/card/Card";
import InputTextError from "../../components/input-text-error/InputTextError";
import styles from "./NPS.module.css";
import logo from "../../../assets/images/serasa-logo-full.svg";
import HeadingXS from "../../../typography/components/HeadingXS/HeadingXS";
import Subheading from "../../../typography/components/Subheading/Subheading";
import BodyM from "../../../typography/components/BodyM/BodyM";
import RatingStars from "../../components/rating-stars/RatingStars";
import StatusSuccess from "../../components/status-success/StatusSuccess";
import StatusLoading from "../../components/status-loading/StatusLoading";
import StatusError from "../../components/status-error/StatusError";

function NPS() {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [name, setName] = useState("");
  const [nameTouched, setNameTouched] = useState(false);
  const [nameLength, setNameLength] = useState(false);
  const [nameValid, setNameValid] = useState(false);
  const [comment, setComment] = useState("");
  const [processing, setProcessing] = useState(false);
  const [successful, setSuccessful] = useState(false);
  const [error, setError] = useState(false);
  const [submit, setSubmit] = useState(false);

  const re = RegExp(/^[A-Za-z ]*$/);

  function onSubmit(evt) {
    evt.preventDefault();
    setProcessing(true);
    ratingPOST(rating, name, comment, setProcessing, setSuccessful, setError);
  }

  useLayoutEffect(() => {
    if (nameTouched) {
      if (name.trim().length >= 3) {
        setNameLength(true);
        setNameValid(re.test(name));
      } else {
        setNameLength(false);
        setNameValid(false);
      }
    }
    if (rating && nameValid) {
      setSubmit(true);
    } else {
      setSubmit(false);
    }
  }, [name, nameTouched, nameValid, rating, re]);

  return (
    <Card className={styles.NPS}>
      {successful && <StatusSuccess></StatusSuccess>}
      {processing && <StatusLoading></StatusLoading>}
      {error && <StatusError></StatusError>}
      <img src={logo} className={styles.NPS_logo} alt="Logomarca Serasa" />
      <Subheading>
        Conte-nos o quanto está satisfeito com nossos serviços:
      </Subheading>

      <form className={styles.NPS_form} onSubmit={onSubmit}>
        <fieldset className={styles.NPS_fieldset}>
          <RatingStars
            max={5}
            rating={rating}
            setRating={setRating}
            hover={hover}
            setHover={setHover}
            required
          />

          <div className={styles.NPS_input}>
            <label htmlFor="name">
              <HeadingXS color={!nameValid && nameTouched ? "accent" : ""}>
                Nome*
              </HeadingXS>
            </label>
            <input
              className={styles.NPS_inputName}
              type="text"
              name="name"
              maxLength="120"
              value={name}
              onChange={(e) => setName(e.target.value)}
              onBlur={() => setNameTouched(true)}
            ></input>
            <InputTextError fieldName="Nome" isTouched={nameTouched} isValid={nameValid} isEmpty={!name.trim().length?true:false} isLength={nameLength} />
          </div>

          <div className={styles.NPS_input}>
            <label htmlFor="comment">
              <HeadingXS>Comentário (opcional)</HeadingXS>
            </label>
            <textarea
              className={styles.NPS_inputComment}
              type="text"
              name="comment"
              maxLength="512"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            ></textarea>
          </div>

          <button
            className={styles.NPS_submitButton}
            type="submit"
            disabled={!submit}
          >
            <BodyM color="light-solid" bold>
              Enviar avaliação
            </BodyM>
          </button>
        </fieldset>
      </form>
    </Card>
  );
}

export default NPS;
