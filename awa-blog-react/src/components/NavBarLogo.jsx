export default function NavBarLogo({logoFullText, logoShortText})
{
    return (
        <div className="nav-bar-logo">
            <h3 className="logo-full">{logoFullText}</h3>
            <h3 className="logo-short">{logoShortText}</h3>
        </div>
    )
}