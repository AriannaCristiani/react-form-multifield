import style from './Tags.module.css'


export default function Tags({ className, tags = [] }) {

    return (
        <ul className={`${style.tags} ${className}`}>
            {tags.map((tag) => (
                <li className={`${style.item} ${style[tag]}`} key={tag}>{tag}</li>
            ))}
        </ul>
    )
}