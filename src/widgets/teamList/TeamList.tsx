import {FC,useState,useEffect} from "react";
import "./TeamList.css";
import axios from 'axios';

// interface BrokenModuleProps {
//     name: string;
//     reason: string;
//     location: string;
    
// }

// const BrokenModule: React.FC<BrokenModuleProps> = ({ name, reason, location }) => (


interface TeamListProps {
    teamData: {
        name: string;
        is_busy: boolean;
    }[];
}
interface BrokenModalProps{
    name: string;
    reason: string;
    location: string;
}

const TeamList:FC<BrokenModalProps> = ({name, reason, location }) => {
    const [commands, setCommands] = useState<TeamListProps["teamData"]>([]);

    useEffect(() => {
        // Получение запроса с сервера о количестве команд
        const fetchCommands = async () => {
          try {
            // const response = await axios.get('ссылка_на_API_для_команд');
            // setCommands(response.data);

            const teams:TeamListProps["teamData"]=[
                {
                    name:"alpha_team",
                    is_busy: true,
                },
                {
                    name:"betta_team",
                    is_busy: false,
                },
                {
                    name:"gamma_team",
                    is_busy: true,
                },
                {
                    name:"delta_team",
                    is_busy: false,
                },
                {
                    name:"epsilon_team",
                    is_busy: true,
                },
            ];
            setCommands(teams);
          } catch (error) {
            console.error('Ошибка при получении данных о командах:', error);
          }
        };
    
        fetchCommands();
    }, []);

    // const sendCommandToWork = async (commandId) => {
    //     try {
    //       await axios.post(`сюда ссылку на апи/${commandId}`);
          
    //       setCommands(commands.map((command) =>
    //         command.id === commandId ? { ...command, busy: true } : command
    //       ));
    //     } catch (error) {
    //       console.error('Ошибка при отправке команды на работу:', error);
    //     }
    // };

    return (
        <div className="teamList__cont">
            <h1 className="teamList__title">Ремонтные бригады</h1>
            
            {commands.map((command) => (
                <div className="teamList__team-items" key={command.name}>
                    <h3 className="teamList__team-items-name">{command.name}</h3>
                    <p className="teamList__team-items-status">{command.is_busy ? 'Занята' : 'Свободна'}</p>
                    <button className={command.is_busy ? "teamList__team-items-btn--dis" : "teamList__team-items-btn"} disabled={command.is_busy}>Отправить</button>
                </div>
            ))}  
        </div>
    )
    
};

export default TeamList;


//onClick={() => sendCommandToWork(command.name)}


/*

const TeamList:FC = () => {
    const [commands, setCommands] = useState<TeamListProps["teamData"]>([]);

    useEffect(() => {
        // Получение запроса с сервера о количестве команд
        const fetchCommands = async () => {
          try {
            // const response = await axios.get('ссылка_на_API_для_команд');
            // setCommands(response.data);

            const teams:TeamListProps["teamData"]=[
                {
                    name:"alpha_team",
                    is_busy: true,
                },
                {
                    name:"betta_team",
                    is_busy: false,
                },
                {
                    name:"gamma_team",
                    is_busy: false,
                },
                {
                    name:"delta_team",
                    is_busy: false,
                },
                {
                    name:"epsilon_team",
                    is_busy: true,
                },
            ];
            setCommands(teams);
          } catch (error) {
            console.error('Ошибка при получении данных о командах:', error);
          }
        };
    
        fetchCommands();
    }, []);

    // const sendCommandToWork = async (commandId) => {
    //     try {
    //       await axios.post(`ссылка_на_API_для_отправки_команды/${commandId}`);
          
    //       setCommands(commands.map((command) =>
    //         command.id === commandId ? { ...command, busy: true } : command
    //       ));
    //     } catch (error) {
    //       console.error('Ошибка при отправке команды на работу:', error);
    //     }
    // };

    return (
        <div className="teamList__cont">
            <h1 className="teamList__title">Ремонтные бригады</h1>
            {commands.map((command) => (
                <div className="teamList__team-items" key={command.name}>
                    <h3 className="teamList__team-items-name">{command.name}</h3>
                    <p className="teamList__team-items-status">{command.is_busy ? 'Занята' : 'Свободна'}</p>
                    <button className={command.is_busy ? "teamList__team-items-btn--dis" : "teamList__team-items-btn"} disabled={command.is_busy}>Отправить</button>
                </div>
            ))}  
        </div>
    )
    
};

*/
