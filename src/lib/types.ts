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