//Название модуля_____значение

type StateElementProps2 = {
    title: string
    value: number
    sign?: string
}

const StateElement = ({
        title,
        value,
        sign
    }: StateElementProps2) => {
        return (
            <div className="TextAndValue">
                <p className="text--sz20">{title}</p>
                <div className="value--sz30">{value}{sign}</div>
            </div>
        )
}

export default StateElement;
