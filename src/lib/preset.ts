import type { block, image, text } from "./blocks/types";

export let default_struct: block[] = [
   [ { type: "text", index: 0 } ],
   [ { type: "text", index: 1 }, { type: "text", index: 2 } ],
   [ { type: "image", index: 0 }, { type: "image", index: 1 }, { type: "image", index: 2 } ],
   [ { type: "text", index: 5 } ],
   [ { type: "text", index: 6 } ],
   [ { type: "image", index: 3 },  { type: "text", index: 7 } ],
   [ { type: "text", index: 8 }, { type: "image", index: 4 } ],
   [ { type: "text", index: 9 } ],
   [ { type: "text", index: 3 }, { type: "text", index: 4 } ],
   [ { type: "text", index: 10 } ],
];

export let default_texts: text[] = [
   { text: "My best portfolio", style: "bold", size: "large" },
   { text: "About me", style: "normal", size: "big" },
   { text: `I’m a product designer working on design systems and shopping initiatives at Microsoft. Before Microsoft, I was a design lead at The Hartford Innovation Lab focused on building insurance products for small businesses. My work has been featured on best, Awards, Barba.JS showcase, Isabella Stewart Gardner Museum, Museum of Art and Design, and Office for the Arts at Harvard.
   A Harvard Graduate School of Design alum, I believe in the transformative power of learning. I teach part-time at the New School and give regular workshops in my free time.`, style: "normal", size: "medium" },
   { text: "Contacts", style: "normal", size: "big" },
   { text: `+ 8 999 234 12 34
   + 8 234 123 54 54
   + 8 756 233 24 76`, style: "normal", size: "medium" },
   { text: "The Hartford Innovation Lab was founded in 2018 with the goal of bringing human-centered design to product development. The Lab’s first product, Putty, offered handymen the option of buying insurance for short projects as an alternative to traditional yearly coverage. As a founding member of the lab my responsibilities spanned the whole product lifecycle, from indexeation to occasional front-end development.", style: "normal", size: "medium" },
   { text: "Experimental JavaScript is an online creative coding course I created for the New School. The curriculum covers exciting web technologies, including: kinetic typography, 3D modeling, signal visualization, custom shaders, and WebAR. Over the course of four months, I produced detailed course plans, assignments, demos, lectures, and interviews with professionals in the field. For more information on my instructional approach, view my teaching statement.", style: "normal", size: "medium" },
   { text: "Working closely with scientists at the Wyss Institute, we developed a series of tools for casting ferrofluindex patterns into hardening solindexs. Our approach made it possible to use a single mold to produce intricate tiles made of different materials. My contributions included expanding the range of materials, and using image processing to quantitatively predict the aesthetic attributes of the finished product. To learn more, read the paper.", style: "normal", size: "medium" },
   { text: "The Hartford Innovation Lab was founded in 2018 with the goal of bringing human-centered design to product development. The Lab’s first product, Putty, offered handymen the option of buying insurance for short projects as an alternative to traditional yearly coverage. As a founding member of the lab my responsibilities spanned the whole product lifecycle, from indexeation to occasional front-end development.", style: "normal", size: "medium" },
   { text: `AMPL!FY is a public art initiative pairing ten artists with non-profit organizations working on the front lines of social justice. As part of AMPL!FY’s design team, I worked with AIGA medalist Mark Randall on the initiative’s graphic assets. I also designed and developed the AMPL!FY website. Over the course of 18 months, the project included two public art installations, a series of youth workshops, an exhibition at Museum of Arts and Design (MAD) and special events.
   UX & UI
   BRANDING
   HTML CSS & JS
   EXHIBITION
   THE
   AMPL!FY
   BRAND
   When creating AML!FY, we chose a strong indexentity that can carry itself through digital and physical environments while evoking a consistent response.`, style: "normal", size: "medium" },
   { text: "styled text", style: "italic", size: "small" },
];

export let default_images: image[] = [
   { src: "" },
   { src: "" },
   { src: "" },
   { src: "" },
   { src: "" },
];

export let default_colors = {
   base: "#ffffff",
   text: "#000000",
   primary: "#4b62dc",
   seconrary: "#ab62e5",
   contrast: "#2e2c29",
};