export const createC211 = ({
  caption,
  altText,
  type,
  youtube,
  image,
  vimeo,
}) => {
  let youtubeHTML = ``;
  let imageHTML = ``;
  let vimeoHTML = ``;
  let captionHTML = caption;

  if (type == "YouTube") {
    youtubeHTML = `<iframe src="${youtube}" title="YouTube video player" alt="${altText}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`;
  } else {
    youtubeHTML = ``;
  }

  if (type == "Image") {
    imageHTML = `<img src='${image}' alt="${altText}">`;
  } else {
    imageHTML = ``;
  }

  if (type == "Vimeo") {
    vimeoHTML = `<iframe src="${vimeo}" alt="${altText}" width="640" height="360" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen=""></iframe>`;
  } else {
    vimeoHTML = ``;
  }

  return `
  <div class="act-framed-media">
  <div class="act-framed-media__container">  
      ${youtubeHTML}${imageHTML}${vimeoHTML}
  </div>
  <div class="act-framed-media__caption">${captionHTML}</div>
</div>
`;
};


