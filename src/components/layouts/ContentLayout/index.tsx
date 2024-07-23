import React, {ReactNode} from 'react'
import styles from './ContentLayout.module.css'

type IProps = {
    children: ReactNode;
}

const ContentLayout: React.FC<IProps> = ({children}) => {
    return (
        <div className={styles.wrapper}>
            {children}
        </div>
    )
}

export default ContentLayout;