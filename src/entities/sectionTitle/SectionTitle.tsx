import React from 'react'
import "./SectionTitle.css"

interface SectionTitleProps {
    titleType: number;
    titleText: string;
    value?: number;
  }
  
  const SectionTitle: React.FC<SectionTitleProps> = ({ titleType, titleText, value }) => {
    let titleContent;
    
    if (titleType === 1) {
      titleContent = (
        <>
          <h2 className="section-title section-title--h1">{titleText}</h2>
        </>
      );
    } else if(titleType === 2) {
      titleContent = (
        <>
            <h2 className="section-title section-title--h2">{titleText}</h2>
            <span className="section-title section-title-value">{value}%</span>
        </>
      );
    }
    else if(titleType === 3) {
        titleContent = (
          <>
              <h2 className="section-title section-title--ds">{titleText}</h2>
          </>
        );
      }
    else {
        titleContent = (
          <>
              <h2 className="section-title section-title--h3">{titleText}</h2>
          </>
        );
      }
  
    return <>{titleContent}</>;
  }
  
  export default SectionTitle;