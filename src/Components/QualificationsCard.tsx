interface QualCardProps {
  isOpen: boolean;
}

const QualCard = ({ isOpen }: QualCardProps) => {
  if (isOpen) {
    return (
      <>
        <h2>name</h2>
        <input />
        <h2>Awarding body</h2>
        <input />
        <h2>Expiry date</h2>
        <Date />
      </>
    );
  }
};
export default QualCard;
