
import React from 'react';

import {HiXCircle} from 'react-icons/hi';

export const Comment = ({comment_id, user_id, author, mensagem, deleteComment, userLogged}) => {

    return (

        <div>
            <div>
                <h3>{author}</h3>
                <p>{mensagem}</p>
            </div>
            {
                user_id === userLogged && (
                    <HiXCircle 
                        color="blueviolet"
                        size="30px"
                        onClick={() => deleteComment(comment_id)}
                    />
                )
            }
        </div>

    );

}