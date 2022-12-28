export type PortfolioCard = {
   name: string;
   discription: string;
};

export type element = {
   type: string;
   index: number;
}

export type block = element[];

export type text = {
   text: string;
   style: string;
   size: string;
};

export type image = {
   src: string;
};

export type colors = {
   base: string;
   text: string;
   contrast: string;
   primary: string;
   secondary: string;
};

export type portfolio = {
   structure: block[];
   colors: colors;
   texts: text[];
   images: image[];
};

export type editText = {
   type: string;
   text: string;
   style: string;
   size: string;
};

export type editImage = {
   type: string;
   src: File;
};

export type editElement =
   | editText 
   | editImage;

export type editBlock = editElement[];

export class EditPortfolio {
   structure: editBlock[];
   colors: colors;

   constructor() {
      this.structure = [];
      this.colors = {
         base: "#ffffff",
         text: "#000000",
         contrast: "#2e2c29",
         primary: "#4b62dc",
         secondary: "#ab62e5",
      };
   }

   getBlock(index: number) {
      return this.structure[index];
   }

   getBlocks() {
      return this.structure;
   }

   getElement(block: number, index: number) {
      return this.structure[block][index];
   }

   toStruct() {
      const structure: element[][] = [];
      const texts: {text:string, style:string, size:string}[] = [];
      const images: {src:File}[] = [];
      this.structure.forEach((block, block_i) => {
         structure.push([]);
         block.forEach((element) => {
            let index = 0;
            if (element.type == "text") {
               index = texts.length;
               const temp = element as editText;
               const text = {
                  text: temp.text,
                  style: temp.style,
                  size: temp.size,
               };
               texts.push(text);
            } else if (element.type == "text") {
               index = images.length;
               images.push({ src: (element as editImage).src });
            }
            structure[block_i].push({
               type: element.type,
               index: index,
            });
         })
      })
      return {
         structure: structure,
         colors: this.colors,
         texts: texts,
         images: images,
      };
   }

   addBlock(index: number) {
      this.structure.splice(index, 0, []);
   }

   removeBlock(index: number) {
      this.structure.splice(index, 1);
   }

   moveBlockUp(index: number) {
      const temp = this.structure[index];
      this.structure[index] = this.structure[index - 1];
      this.structure[index - 1] = temp;
   }

   moveBlockDown(index: number) {
      const temp = this.structure[index];
      this.structure[index] = this.structure[index + 1];
      this.structure[index + 1] = temp;
   }

   addTextElement(block: number, index: number) {
      this.getBlock(block).splice(index, 0, { type: "text", text: "", style: "normal", size: "medium" });
   }
   
   addImageElement(block: number, index: number, file: File) {
      this.getBlock(block).splice(index, 0, { type: "image", src: file });
   }

   removeElement(block: number, element: number) {
      this.getBlock(block).splice(element, 1);
   }

   moveElementUp(block: number, index: number) {
      const temp = this.structure[block][index];
      this.structure[block][index] = this.structure[block][index - 1];
      this.structure[block][index - 1] = temp;
   }
   
   moveElementDown(block: number, index: number) {
      const temp = this.structure[block][index];
      this.structure[block][index] = this.structure[block][index + 1];
      this.structure[block][index + 1] = temp;
   }
}