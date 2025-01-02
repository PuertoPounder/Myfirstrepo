export default function SidebarNasa(props) {
    const { handleToggleModal } = props
    return (
        <div className="sidebar">
            <div onClick={handleToggleModal} className="bgOverlay"></div>
            <div className="sidebarContents">
                <h2>The Brutal Martian Lanscape</h2>
                <div>
                    <p>Description</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo magni voluptate, consectetur libero nostrum
                        rerum, officiis ullam amet quas error fuga quam. Debitis officiis similique cum asperiores iure officia inventore.</p>
                </div>
                <button onClick={handleToggleModal}>
                <i className="fa-solid fa-arrow-right"></i>
                </button>
            </div>
        </div>
    )
}