import React from "react";
import styles from "./Paginator.module.css";


let Paginator = ({totalUsersCount, pageSize, currentPage, onPageChange, ...props}) => {

    let pagesCount = Math.ceil (totalUsersCount / pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++){
        pages.push(i)
    }

    return <div>
            {pages.map(page => {
                return <span className={currentPage === page && styles.selectedPage} onClick={() => {
                    onPageChange(page);
                }}>{page}</span>
            })}
    </div>
}

export default Paginator