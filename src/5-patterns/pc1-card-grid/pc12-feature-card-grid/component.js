import { createC11 } from "../../../4-components/c1-cards/c11-card/component";
import { createC12 } from "../../../4-components/c1-cards/c12-card-featured/component";

export const createPC12 = ({
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
      type: "primary",
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
    type:     "primary",
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
  const card2HTML = createC12({
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
  `+card2HTML+card1HTML+card1HTML+card1HTML+card1HTML+`
</div>
`;};
