import { useOutClick } from "../../hooks/useOutClick"

export const Header = () => {
    const headerRef = useOutClick(({target}) => {
        //console.log(target);
    })
    return(
        <header ref={headerRef}>
            <span>Receitinhas do Alex</span>
        </header>
    )
}