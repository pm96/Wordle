export const HappyBanner = ({ attempts }) => {
  return (
    <div className="happy banner">
      <p>
        <strong>Congratulations </strong>
        <strong>{attempts} guesses</strong>
      </p>
    </div>
  );
};
