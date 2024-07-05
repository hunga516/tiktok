import clsx from 'clsx'
import style from './Button.module.scss'

function Button({ primary }) {

    const classes = clsx(style.btn, {
        [style.primary]: primary
    })

    return (
        <div>
            <button className={classes}>Click me!</button>
        </div >
    )
}

export default Button