import Image from "next/image";
import pizzaPicture from "../../public/images/pizza.jpg";

export default function Veggie() {
  return (
    <>
      <h2>Veggie</h2>
      <Image
        src={pizzaPicture}
        alt="Picture of a veggie pizza"
        layout="responsive"
        width="400"
      ></Image>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem voluptatum tempore
        aliquam eius, atque repudiandae nesciunt necessitatibus aperiam. Commodi dolor optio facilis
        minus veniam cupiditate corporis iste error explicabo iusto.
      </p>
    </>
  );
}
