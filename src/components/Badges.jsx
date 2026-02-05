import './Badges.css'

export default function Badges({ label, value }) {
    return (
        <div className="badge">
            <span className="badge-label">{label}</span>
            <span className="badge-value">{value}</span>
        </div>
    )
}