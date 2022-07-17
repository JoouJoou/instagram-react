import Post from "./Posts/Posts";
import Stories from "./Stories/Stories";

export default function BodyLeft() {
  return (
    <div className="esquerda">
      <Stories />
      <Post />
    </div>
  );
}
