import React from "react";
import styles from './Post.module.css';

const Post = (props) => {
    return  (
        <div className={styles.posts}>
            <div className={styles.item}>
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBoT8aT2n5ep_sg3C05vQxAg7Qy_XruE03NA&usqp=CAU' />
                { props.message }
                <div>
                    <span>{ props.likesCount}</span>
                </div>
            </div>
        </div>
    )
}

export default Post;