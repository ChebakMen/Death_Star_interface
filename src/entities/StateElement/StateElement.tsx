//Название модуля_____значение

import "./StateElement.css"

type StateElementProps2 = {
    type: number
    title: string
    value?: number
    text?: string
    sign?: string
}

enum Type{
    HomePage = 1,
    AtmosferPage1 = 2,
    AtmosferPage2 = 3,
    AtmosferPage3 = 4
};

const StateElement = ({
        type,
        title,
        value,
        text,
        sign
    }: StateElementProps2) => {

        let content;

        switch (type){
            case Type.HomePage:
                content = (
                    <>
                        <div className="TextAndValue">
                            <p className="text">{title}</p>
                            <div className="value">{value}{sign}</div>
                        </div>
                    </>
                );  
                break;               
            case Type.AtmosferPage1:
                content = (
                    <>
                        <div className="TextAndValue--2">
                            <p className="text text--fz15 ">{title}</p>
                            <div className="value value--fz20">{text}{value}{sign}</div>
                        </div>
                    </>
                );  
                break;
                case Type.AtmosferPage2:
                    content = (
                        <>
                            <div className="TextAndValue--3">
                                <p className="text text--fz13 ">{title}<span className="text text--fz8">2</span></p>
                                <div className="value value--fz18 ">{text}{value}{sign}</div>
                            </div>
                        </>
                    );  
                    break;
                case Type.AtmosferPage3:
                    content = (
                        <>
                            <div className="TextAndValue--3">
                                <p className="text text--fz13 ">{title}</p>
                                <div className="value value--fz18">{value}{sign}</div>
                            </div>
                        </>
                    );  
                    break;
        }
            
                
        return <>{content}</>
            
        
}

export default StateElement;
