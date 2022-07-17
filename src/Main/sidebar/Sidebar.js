import Sidebottom from "./Sidebot";
import Sidetop from "./Sidetop";
import Usersuggestion from "./Suggestion";

export default function Sidebar() {
  const Users = [
    { userimg: "assets/img/bad.vibes.memes.svg", username: "bad.vibes.memes" },
    { userimg: "assets/img/chibirdart.svg", username: "chibirdart" },
    {
      userimg: "assets/img/adorable_animals.svg",
      username: "adorable_animals",
    },
    { userimg: "assets/img/smallcutecats.svg", username: "smallcutecats" },
  ];
  return (
    <div class="sidebar">
      <Sidetop />

      <div class="sugestoes">
        <div class="titulo">
          Sugestões para você
          <div>Ver tudo</div>
        </div>

        {Users.map((user) => {
          return (
            <Usersuggestion userimg={user.userimg} username={user.username} />
          );
        })}
      </div>

      <Sidebottom />
    </div>
  );
}
