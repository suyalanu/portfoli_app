import Toast from "react-bootstrap/Toast";
import ToastContainer from "react-bootstrap/ToastContainer";

function PlacementMultiExample() {
  return (
    <div>
      <ToastContainer
        position="bottom-end"
        className="p-3"
        style={{ zIndex: 1 }}
      >
        <Toast>
          <Toast.Header>
            <img
              src="holder.js/20x20?text=%20"
              className="rounded me-2"
              alt=""
            />
            <strong className="me-auto">HI</strong>
          </Toast.Header>
          <Toast.Body>Welcome , This is my CV</Toast.Body>
        </Toast>
      </ToastContainer>
    </div>
  );
}

export default PlacementMultiExample;
