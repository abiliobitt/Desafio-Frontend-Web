
import BodyM from "../../../typography/components/BodyM/BodyM";

export default function InputTextError({
  isTouched,
  isValid,
  isEmpty,
  isLength,
}) {
  return (
    <>
      {!(isTouched && !isValid) ? (
        <BodyM color="light-solid">PLACEHOLDER</BodyM>
      ) : (
        <BodyM color="accent">
          {isEmpty
            ? "*Nome vazio!"
            : isLength
            ? "*Nome contém caracteres inválidos!"
            : "*Nome muito curto!"}
        </BodyM>
      )}
    </>
  );
}
