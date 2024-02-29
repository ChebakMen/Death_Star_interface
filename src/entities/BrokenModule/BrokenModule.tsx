import "./BrokenModule.css";

interface BrokenModuleProps {
    name: string;
    reason: string;
    location: string;
    
}

const BrokenModule: React.FC<BrokenModuleProps> = ({ name, reason, location }) => (
    <div className="brokenModule__cont">
        <div className="brokenModule__title">
            <h3 className="brokenModule__title--h3">Модуль:</h3>
            <h3 className="brokenModule__title--mn">{name}</h3>
        </div>
        <p className="brokenModule__text">Причина поломки: {reason}</p>
        <p className="brokenModule__text">Местонахождение: {location}</p>
    </div>
  );

export default BrokenModule;


