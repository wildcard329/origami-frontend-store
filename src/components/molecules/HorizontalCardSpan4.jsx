import React from "react";
import AppH5 from "../atoms/AppH5";
import AppParagraph from "../atoms/AppParagraph";
import "./horizontalcardspan4.css";

const HorizontalCardSpan4 = ({ title, content1, content2, btnContent }) => {
  return(
    <article className="span-4">
      <AppH5 text={title} />
      <AppParagraph text={content1} />
      <AppParagraph text={content2} />
      {btnContent && btnContent}
    </article>
  )
}

export default HorizontalCardSpan4;
