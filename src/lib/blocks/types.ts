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

export type portfolio = {
   structure: block[];
   colors: string[];
   texts: text[];
   images: image[];
};