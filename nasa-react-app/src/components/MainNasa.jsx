export default function MainNasa(props) {
    const { data } = props
    return (
        <div className="imgContainer">
        <img src={data.hdurl} alt={data.title || 'big-img'} className="bgImage"></img>
        </div>
    )
}