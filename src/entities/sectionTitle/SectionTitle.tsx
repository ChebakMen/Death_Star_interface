import React from 'react'
import "./SectionTitle.css"

interface SectionTitleProps {
    titleType: number;
    titleText: string;
    value?: number;
  };

  enum TitleType{
    Title1 = 1,
    TitleWithValue = 2,
    TitleDeathStar = 3,
    Title4 = 4,
    TitleAtmosfere = 5
  };
  
  const SectionTitle: React.FC<SectionTitleProps> = ({ titleType, titleText, value }) => {
    let titleContent;

    switch (titleType) {
      case TitleType.Title1:
        titleContent = (
          <>
            <h2 className="section-title section-title--h1">{titleText}</h2>
          </>
        );
        break;
      case TitleType.TitleWithValue:
        titleContent = (
          <>
              <h2 className="section-title section-title--h2">{titleText}</h2>
              <span className="section-title section-title-value">{value}%</span>
          </>
        );
        break;
     case TitleType.TitleDeathStar:
      titleContent = (
        <>
            <h2 className="section-title section-title--ds">{titleText}</h2>
        </>
      );
        break;
      case TitleType.Title4:
        titleContent = (
          <>
              <h2 className="section-title section-title--h3">{titleText}</h2>
          </>
        );
        break;
      case TitleType.TitleAtmosfere:
        titleContent = (
          <>
              <h2 className="section-title section-title--atmosfere">{titleText}</h2>
          </>
        );
        break;
    default:
      throw new Error(`Unknown TitleType`);
    }

    
    // if (titleType === 1) {
    //   titleContent = (
    //     <>
    //       <h2 className="section-title section-title--h1">{titleText}</h2>
    //     </>
    //   );
    // } else if(titleType === 2) {
    //   titleContent = (
    //     <>
    //         <h2 className="section-title section-title--h2">{titleText}</h2>
    //         <span className="section-title section-title-value">{value}%</span>
    //     </>
    //   );
    // }
    // else if(titleType === 3) {
    //     titleContent = (
    //       <>
    //           <h2 className="section-title section-title--ds">{titleText}</h2>
    //       </>
    //     );
    //   }
    // else {
    //     titleContent = (
    //       <>
    //           <h2 className="section-title section-title--h3">{titleText}</h2>
    //       </>
    //     );
    //   }
  
    return <>{titleContent}</>;
  }
  
  export default SectionTitle;