import Bottom from "./Bottom";
import Content from "./Content";
import Topo from "./Top";
import React from "react";

export default function PostIndividual(props) {
  const [like, setLike] = React.useState(false);
  return (
    <>
      <div class="post">
        <Topo userimg={props.userimg} username={props.username} />

        <Content postimg={props.postimg} state={setLike} like={like} />

        <Bottom
          likesimg={props.likesimg}
          likesname={props.likesname}
          likescount={props.likescount}
          state={setLike}
          like={like}
        />
      </div>
    </>
  );
}
