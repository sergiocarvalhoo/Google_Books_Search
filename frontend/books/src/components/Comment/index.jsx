
import React from 'react';
import style from './Comment.module.css';

import {HiXCircle} from 'react-icons/hi';

export const Comment = ({comment_id, user_id, author, mensagem, deleteComment, userLogged}) => {

    return (

        <div className={style.container}>
            <div className={style.infoComment}>
                <h3>{author}</h3>
                <p>{mensagem}</p>
            </div>
            {
                user_id === userLogged && (
                    <HiXCircle 
                        className={style.icon}
                        color="red"
                        size="30px"
                        onClick={() => deleteComment(comment_id)}
                    />
                )
            }
        </div>

    );

}