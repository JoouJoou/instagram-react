import React from "react";

export default function Content(props) {
  return (
    <div class="conteudo">
      <img
        src={props.postimg}
        onClick={() => {
          return props.state(!props.like);
        }}
      />
    </div>
  );
}