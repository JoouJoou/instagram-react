export default function Usersuggestion(props) {
  return (
    <div class="sugestao">
      <div class="usuario">
        <img src={props.userimg} />
        <div class="texto">
          <div class="nome">{props.username}</div>
          <div class="razao">Segue você</div>
        </div>
      </div>

      <div class="seguir">Seguir</div>
    </div>
  );
}
