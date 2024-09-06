import ReactDOM from 'react-dom';

const PopoverPortal = ({ children }) => {
  return ReactDOM.createPortal(children, document.body);
};

export default PopoverPortal;
