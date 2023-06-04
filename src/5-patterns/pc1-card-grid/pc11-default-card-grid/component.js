import { createC11 } from "../../../4-components/c1-cards/c11-card/component";

export const createPC11 = ({
  type,
  feature,
  icon,
  dateVisible,
  tagVisible,
  tag1,
  tag2,
  header,
  description,
  ctaVisible,
  ctaText,
  card1,
}) => {

  if (card1 == undefined){
    card1 = {
      type: type,
      feature: feature,
      icon: icon,
      dateVisible: dateVisible,
      tagVisible: tagVisible,
      tag1: tag1,
      tag2: tag2,
      header: header,
      description: description,
      ctaVisible: ctaVisible,
      ctaText: ctaText,
    };
  }
  const card1HTML = createC11({
    type:     card1.type,
    feature:    card1.feature,
    icon:    card1.icon,
    dateVisible:    card1.dateVisible,
    tagVisible:    card1.tagVisible,
    tag1: card1.tag1,
    tag2: card1.tag2,
    header:    card1.header,
    description: card1.description,
    ctaVisible: card1.ctaVisible,
    ctaText: card1.ctaText,
  });


  return `
<div class="act-card-grid">
  `+card1HTML+card1HTML+card1HTML+card1HTML+`
</div>
`;};
