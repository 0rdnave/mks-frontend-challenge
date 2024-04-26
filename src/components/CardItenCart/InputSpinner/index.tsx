import { useState } from "react";

interface SpinnerProps {
  initialValue?: number;
}

const SpinnerInput = ({ initialValue = 0 }: SpinnerProps) => {
  const [value, setValue] = useState<number>(initialValue);

  const increment = () => {
    setValue((prevValue) => prevValue + 1);
  };

  const decrement = () => {
    if (value > 0) {
      setValue((prevValue) => prevValue - 1);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        width: "50px",
        height: "19px",
        alignItems: "center",
        justifyContent: "space-between",
        border: "1px solid",
        borderRadius: "8px",
        // padding: "0 4px",
        position: "relative",
      }}
    >
      <div
        onClick={decrement}
        style={{
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "16px",
          width: "16px",
          height: "12px",
          borderRight: "1px solid",
          cursor: "pointer",
          zIndex: "1",
        }}
      >
        <div
          style={{
            position: "absolute",
            margin: "auto",
            height: "1px",
            width: "40%",
            backgroundColor: "black",
          }}
        />
      </div>
      <div
        onClick={increment}
        style={{
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "16px",
          width: "16px",
          height: "12px",
          borderLeft: "1px solid",
          cursor: "pointer",
          zIndex: "1",
        }}
      >
        <div
          style={{
            position: "absolute",
            margin: "auto",
            height: "1px",
            width: "40%",
            backgroundColor: "black",
          }}
        />
        <div
          style={{
            position: "absolute",
            margin: "auto",
            height: "1px",
            width: "40%",
            backgroundColor: "black",
            transform: "rotate(90deg)",
          }}
        />
      </div>
      <div
        style={{
          position: "absolute",
          border: "none",
          margin: "auto",
          textAlign: "center",
          width: "50px",
          outline: "none",
          background: "transparent",
          fontSize: "8px",
          zIndex: "0",
        }}
      >
        {value}
      </div>
    </div>
  );
};

export default SpinnerInput;
