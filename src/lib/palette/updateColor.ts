export default function updateColor(colorName: string, value: string) {
   document.documentElement.style
      .setProperty(`--custom-color-${colorName}`, value);
};
