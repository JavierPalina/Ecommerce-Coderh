import CartWidget from "./CartWidget"
import { Link, NavLink } from "react-router-dom"

const NavBar = () => {
    return (
        <header>
            <Link to="/"><h1 className="brand">ViperG</h1></Link>
            <ul>
                <li>
                    <NavLink to="/category/remeras">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 455 455" style={{enableBackground: "new 0 0 455 455",}} xmlSpace="preserve"><path d="m357.642 32.638-66.814-15.896S272.206 49.526 227.5 49.526s-63.328-32.784-63.328-32.784L97.358 32.638 0 119.916l48.555 75.179 48.803-22.87v266.032h260.284V172.225l48.803 22.87L455 119.916l-97.358-87.278z" /></svg>
                        <span>Remeras</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/category/pantalones">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" style={{enableBackground: "new 0 0 499.121 499.121",}} xmlSpace="preserve"><path d="M242.341 304.014V76.318H122.854L0 390.201l176 77.994zM256.779 198.667c40.814-21.802 43.561-77.233 44.337-118.708.026-1.447.429-2.642 1.036-3.641h-45.375v122.349h.002z" /><path d="M314.656 76.318c.572.997.928 2.192.896 3.641-.941 50.363-6.971 111.962-58.773 134.59v89.464l66.34 164.182 176.002-77.994L376.266 76.318h-61.61zM376.396 30.926H122.724v33.332H376.396z" /></svg>
                        <span>Pantalones</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/category/zapatillas">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512.17 512.17" style={{enableBackground: "new 0 0 512.17 512.17",}} xmlSpace="preserve"><path d="M512.065 308.705c.034-.674-.026-1.365-.111-2.065 0-.068.026-.119.017-.179-.009-.068-.026-.154-.034-.222v-.009c-1.16-9.173-7.774-29.611-45.773-28.698-23.066.7-49.434-13.431-49.707-13.577a8.148 8.148 0 0 0-.87-.401l-58.487-23.39c5.274-10.786 2.381-24.166-7.544-31.667-5.461-4.122-12.169-5.871-18.978-4.924-6.767.947-12.766 4.471-16.887 9.924l-3.422 4.54a241.18 241.18 0 0 1-12.143-7.91c8.448-11.255 6.204-27.29-5.043-35.789-10.547-7.945-25.216-6.383-34.039 3.046-3.891-3.968-7.569-7.868-10.82-11.674-.247-.299-.478-.546-.725-.836v1.937c0 .913-.145 1.818-.435 2.68-14.379 43.52-80.879 73.924-161.698 73.924-14.455 0-27.895-3.012-40.892-5.922-4.053-.913-8.038-1.801-11.955-2.569a11.453 11.453 0 0 1-1.058-.282l-5.828-1.946v7.066c-2.517 2.551-6.289 6.81-10.172 12.382h1.638c42.496 1.715 76.8 36.079 76.8 76.604 0 2.807-.23 5.658-.563 8.516h-17.22c.435-2.876.717-5.726.717-8.516 0-30.959-27.52-58.214-60.075-59.546H6.089c-8.055 19.294-10.837 45.935 9.045 76.561-11.324 18.125-5.547 31.266-.708 37.751 6.289 8.439 16.896 13.483 28.339 13.483h337.519c39.117 0 78.421-8.926 113.672-25.813l4.198-2.005c12.571-5.972 14.55-35.847 13.911-60.474zm-200.184-64.487 15.428-20.437a8.521 8.521 0 0 1 5.632-3.302c.401-.06.802-.085 1.203-.085 1.835 0 3.618.589 5.112 1.724 3.763 2.842 4.514 8.201 1.681 11.955l-3.712 4.907-.008.008-11.725 15.514a8.414 8.414 0 0 1-5.615 3.311 8.4 8.4 0 0 1-6.323-1.656c-1.818-1.365-2.995-3.362-3.311-5.615s.264-4.497 1.638-6.324zm-56.465-34.159 11.153-14.754v-.017l4.275-5.658c2.833-3.763 8.209-4.506 11.955-1.673 3.763 2.842 4.506 8.201 1.672 11.964l-15.428 20.42c-2.398 3.166-6.554 4.036-10.052 2.586-.648-.273-1.314-.469-1.894-.913-1.28-.956-2.065-2.253-2.628-3.635-1.093-2.696-.922-5.836.947-8.32zm-76.186 50.424h51.2c14.114 0 25.6 11.486 25.6 25.6s-11.486 25.6-25.6 25.6h-51.2c-14.123 0-25.6-11.486-25.6-25.6s11.478-25.6 25.6-25.6zm310.946 93.594-3.584 1.715c-32.973 15.795-69.734 24.141-106.308 24.141H42.765c-6.093 0-11.563-2.475-14.652-6.613-1.459-1.954-5.641-7.561 1.749-18.987h388.301c1.732 0 3.447-.205 5.137-.512.41-.077.819-.179 1.229-.273a28.625 28.625 0 0 0 3.934-1.203c.367-.137.734-.265 1.092-.418 1.57-.683 3.115-1.459 4.565-2.424a29.987 29.987 0 0 0 4.395-3.601 11.321 11.321 0 0 1 4.002-2.62c3.166-1.22 8.747-2.91 15.215-4.881 13.747-4.181 25.242-7.842 34.176-11.605.06-.026.128-.051.188-.077.887-.375 1.886-.751 2.722-1.126-.622 13.738-2.397 25.284-4.642 28.484zM206.026 136.849l4.855-8.499c-16.777-13.047-26.581-13.952-33.126-12.826-10.308 1.809-20.139 5.965-31.514 10.769-24.499 10.359-54.989 23.245-112.085 23.245a8.53 8.53 0 0 0-8.533 8.533v34.347H68.29c61.619 0 118.254-22.853 137.736-55.569z" /><path d="M48.201 220.84c12.092 2.705 24.593 5.513 37.154 5.513 70.4 0 132.318-26.129 145.067-60.979v-19.208a248.288 248.288 0 0 0-6.426-6.366l-3.226 5.649c-22.835 38.349-84.088 64.034-152.482 64.034H25.622v5.231l10.718 3.567c3.891.775 7.842 1.663 11.861 2.559zM179.226 294.615h51.2a8.536 8.536 0 0 0 8.533-8.533 8.536 8.536 0 0 0-8.533-8.533h-51.2a8.536 8.536 0 0 0-8.533 8.533 8.536 8.536 0 0 0 8.533 8.533z" /></svg>
                        <span>Zapatillas</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/category/accesorios">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 490 490" style={{enableBackground: "new 0 0 490 490",}} xmlSpace="preserve"><path d="M334.85 80.5V0h-219.3v80.5c32.3-22.2 70.8-33.8 109.7-33.8s77.4 11.6 109.6 33.8zM115.55 402.1V490h218.9v-87.9c-32.3 21.8-70.4 33.8-109.7 33.8-38.4 0-76.9-12-109.2-33.8z" /><path d="M429.75 219.3c-5.4 0-9.7 4.3-9.7 9.7v5.8h-20C396.75 141 319.75 66 225.15 66c-96.6 0-175 78.4-175 175s78.4 175 175 175c92.1 0 167.5-71.1 174.5-161.4h20.8v5.8c0 5.4 4.3 9.7 9.7 9.7 5.4 0 9.7-4.3 9.7-9.7v-31.9c0-4.9-4.6-9.2-10.1-9.2zm-339.1 31.5h-9.7c-5.4 0-9.7-4.3-9.7-9.7 0-5.4 4.3-9.7 9.7-9.7h9.7c5.4 0 9.7 4.3 9.7 9.7 0 5.5-4.2 9.7-9.7 9.7zm124.8-154c0-5.4 4.3-9.7 9.7-9.7s9.7 4.3 9.7 9.7v9.7c0 5.4-4.3 9.7-9.7 9.7s-9.7-4.3-9.7-9.7v-9.7zm-78.5 246.3-6.9 6.9c-3.8 3.8-9.9 3.8-13.7 0s-3.8-9.9 0-13.7l6.9-6.9c3.8-3.8 9.9-3.8 13.7 0 3.8 3.8 3.8 9.9 0 13.7zm0-190.3c-3.8 3.8-9.9 3.8-13.7 0l-6.9-6.9c-3.8-3.8-3.8-9.9 0-13.7 3.8-3.8 9.9-3.8 13.7 0l6.9 6.9c3.8 3.8 3.8 9.9 0 13.7zm98 232.6c0 5.4-4.3 9.7-9.7 9.7s-9.7-4.3-9.7-9.7v-9.7c0-5.4 4.3-9.7 9.7-9.7s9.7 4.3 9.7 9.7v9.7zm3.1-233.1h-.4v89.4c0 5.4-4.3 9.7-9.7 9.7h-74.3c-5.4 0-9.7-4.3-9.7-9.7 0-5.4 4.3-9.7 9.7-9.7h64.9v-79.7c0-5.4 4.3-9.7 9.7-9.7 5.5-.1 9.8 4.2 9.8 9.7zm75.4-13.2 6.9-6.9c3.8-3.8 9.9-3.9 13.7 0 3.8 3.8 3.8 9.9 0 13.7l-6.9 6.9c-3.8 3.8-9.9 3.8-13.7 0-3.8-3.8-3.8-9.9 0-13.7zm20.7 210.9c-3.8 3.8-9.9 3.8-13.7 0l-6.9-6.9c-3.8-3.8-3.8-9.9 0-13.7s9.9-3.8 13.7 0l6.9 6.9c3.8 3.8 3.8 9.9 0 13.7zm35.3-99.2h-9.7c-5.4 0-9.7-4.3-9.7-9.7 0-5.4 4.3-9.7 9.7-9.7h9.7c5.4 0 9.7 4.3 9.7 9.7.1 5.5-4.2 9.7-9.7 9.7z" /></svg>
                        <span>Accesorios</span>
                    </NavLink>
                </li>
            </ul>
            <CartWidget />
        </header>
    )
}

export default NavBar