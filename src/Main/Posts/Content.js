import React from "react";

export default function Content(props) {
  return (
    <div class="conteudo">
      <img
        src={props.postimg}
        onDoubleClick={() => {
          if (props.like === false) {
            return props.state(!props.like);
          }
        }}
      />
    </div>
  );
}
