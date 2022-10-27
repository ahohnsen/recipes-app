import Image from "next/image.js";

export default function Dessert() {
  return (
    <>
      <h2>Dessert</h2>
      <Image
        src="https://unsplash.com/photos/surQ2mkZNxw/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8Mzd8fGRlc3NlcnR8ZW58MHwwfHx8MTY1OTMzNzk1NQ&force=true&w=2400"
        alt="Picture of a dessert"
        layout="responsive"
        width="2400"
        height="1599"
      ></Image>

      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem voluptatum tempore
        aliquam eius, atque repudiandae nesciunt necessitatibus aperiam. Commodi dolor optio facilis
        minus veniam cupiditate corporis iste error explicabo iusto.
      </p>
    </>
  );
}
