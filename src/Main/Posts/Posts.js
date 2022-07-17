import PostIndividual from "./Post";

export default function Post() {
  const userpost = [
    {
      username: "meowed",
      userimg: "assets/img/meowed.svg",
      postimg: "assets/img/gato-telefone.svg",
      likesimg: "assets/img/respondeai.svg",
      likesname: "respondeai",
      likescount: "101.523",
    },
    {
      username: "barked",
      userimg: "assets/img/barked.svg",
      postimg: "assets/img/dog.svg",
      likesimg: "assets/img/adorable_animals.svg",
      likesname: "adorable_animals",
      likescount: "99.159",
    },
  ];

  return (
    <div class="posts">
      {userpost.map((posts) => {
        return (
          <PostIndividual
            userimg={posts.userimg}
            username={posts.username}
            postimg={posts.postimg}
            likesimg={posts.likesimg}
            likesname={posts.likesname}
            likescount={posts.likescount}
          />
        );
      })}
    </div>
  );
}
