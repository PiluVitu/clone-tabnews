import Image from "next/image";

function Home(){
  return (
    <div>
      <h1>Mozao </h1>
      <h2>No meu pedacinho de internet</h2>
      <p>Estou construindo esse pedacinho de internet 
        e gostaria de te compartilhar um pedaço dele, 
        por enquanto está simples, porque estou seguindo 
        o fluxo do curso, mas é de coração &hearts;</p>
      <img src="https://imgur.com/eJmN9xa" width={200} height={200} alt="capybaraValentine"/>
    </div>
  )
}

export default Home;