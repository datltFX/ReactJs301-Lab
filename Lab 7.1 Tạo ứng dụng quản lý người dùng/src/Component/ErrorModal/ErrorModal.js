import Button from "../UI/Button";
import Card from "../UI/Card";
import classes from "./ErrorModal.module.css";

const ErrorModal = ({ title, content, hide }) => {
  // console.log(title, content, hide);
  return (
    <div>
      <div className={classes.backdrop} onClick={hide} />
      <Card className={classes.modal}>
        <div className={classes.header}>
          <h2>{title}</h2>
        </div>
        <div className={classes.content}>{content}</div>
        <div className={classes.actions}>
          <Button onClick={hide}>Okay</Button>
        </div>
      </Card>
    </div>
  );
};

export default ErrorModal;
