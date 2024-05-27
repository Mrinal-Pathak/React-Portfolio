// src/utils/importAllImages.js
const importAllImages = (requireContext) => {
    const images = {};
    requireContext.keys().forEach((item) => {
      images[item.replace('./', '')] = requireContext(item);
    });
    return images;
  };
  
  export default importAllImages;
  