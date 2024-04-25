import css from './ErrorMessage.module.css';

type ErrorMessageProps = {
  message: string;
};

const ErrorMessage = ({ message }: ErrorMessageProps) => {
  return (
    <div className={css.errorMsg}>
      <p>{message}</p>
    </div>
  );
};

export default ErrorMessage;
