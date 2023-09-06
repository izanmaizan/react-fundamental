import { useContext } from "react";
import { GlobalContext } from "../context";

const ArticleStatus = ({isNew}) => {
    return isNew && <span> --Terbaru</span>;
};

function Article (props) {
    const user = useContext (GlobalContext);

    return (
        <>
        <h3>{props.title}</h3>
        <small> 
            Date : {props.date}
            {/* {props.isNew ? '-- Terbaru!!' : 'Lama'} */}
            {/* {props.isNew && " --Terbaru!!"} */}
            <ArticleStatus isNew={props.isNew} />
            <br />
            Tags : {props.tags.join(', ')} <br />
        </small>
        <small>Ditulis oleh {user.username}</small>
        </>
    )
}

export default Article;