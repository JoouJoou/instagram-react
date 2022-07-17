import React from "react";

export default function Bottom(props) {
  return (
    <div class="fundo">
      <div class="acoes">
        <div>
          {props.like ? (
            <ion-icon
              name="heart"
              onClick={() => props.state(!props.like)}
              color="danger"
            ></ion-icon>
          ) : (
            <ion-icon
              name="heart-outline"
              onClick={() => props.state(!props.like)}
            ></ion-icon>
          )}

          <ion-icon name="chatbubble-outline"></ion-icon>
          <ion-icon name="paper-plane-outline"></ion-icon>
        </div>
        <div>
          <ion-icon name="bookmark-outline"></ion-icon>
        </div>
      </div>

      <div class="curtidas">
        <img src={props.likesimg} />
        <div class="texto">
          Curtido por <strong>{props.likesname}</strong> e{" "}
          <strong>outras {props.likescount} pessoas</strong>
        </div>
      </div>
    </div>
  );
}
