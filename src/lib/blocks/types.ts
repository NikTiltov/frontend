export type element = {
   type: string;
   id: number;
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
