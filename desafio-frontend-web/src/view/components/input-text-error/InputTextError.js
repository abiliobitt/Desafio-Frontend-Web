
import BodyM from "../../../typography/components/BodyM/BodyM";

export default function InputTextError({
  fieldName,
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
            ? `*${fieldName} vazio!`
            : isLength
            ? `*${fieldName} contém caracteres inválidos!`
            : `*${fieldName} muito curto!`}
        </BodyM>
      )}
    </>
  );
}
