function Story(props) {
  return (
    <div className="story">
      <div className="imagem">
        <img src={props.img} />
      </div>
      <div className="usuario">{props.text}</div>
    </div>
  );
}

export default function Stories() {
  const user_stories = [
    { img: "assets/img/9gag.svg", nome: "9gag" },
    { img: "assets/img/meowed.svg", nome: "meowed" },
    { img: "assets/img/barked.svg", nome: "barked" },
    {
      img: "assets/img/nathanwpylestrangeplanet.svg",
      nome: "nathanwpylestrangeplanet",
    },
    { img: "assets/img/wawawicomics.svg", nome: "wawawicomics" },
    { img: "assets/img/respondeai.svg", nome: "respondeai" },
    { img: "assets/img/filomoderna.svg", nome: "filomoderna" },
    { img: "assets/img/memeriagourmet.svg", nome: "memeriagourmet" },
  ];
  return (
    <div className="stories">
      {user_stories.map((storie) => {
        return <Story img={storie.img} text={storie.nome} />;
      })}
      <div class="setinha">
        <ion-icon name="chevron-forward-circle"></ion-icon>
      </div>
    </div>
  );
}
