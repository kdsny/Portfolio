import { SiCss, SiHtml5, SiReact } from 'react-icons/si';
import { profile } from '../data/portfolio';
import './ProfileOrbit.css';

const orbitIcons = [
  { Icon: SiHtml5, label: 'HTML5', color: '#e34f26' },
  { Icon: SiCss, label: 'CSS3', color: '#1572b6' },
  { Icon: SiReact, label: 'React', color: '#61dafb' },
];

export default function ProfileOrbit() {
  return (
    <div className="profile-orbit" aria-label="Profile photo with tech stack">
      <div className="profile-orbit__glow" aria-hidden="true" />

      <div className="profile-orbit__rings" aria-hidden="true">
        <span className="profile-orbit__ring profile-orbit__ring--1" />
        <span className="profile-orbit__ring profile-orbit__ring--2" />
        <span className="profile-orbit__ring profile-orbit__ring--3" />
      </div>

      <div className="profile-orbit__particles" aria-hidden="true">
        {Array.from({ length: 8 }).map((_, i) => (
          <span key={i} className={`profile-orbit__dot profile-orbit__dot--${i + 1}`} />
        ))}
      </div>

      <div className="profile-orbit__icon-track" aria-hidden="true">
        {orbitIcons.map(({ Icon, label, color }, index) => (
          <div
            key={label}
            className="profile-orbit__badge"
            style={{
              '--badge-color': color,
              '--orbit-index': index,
              '--orbit-count': orbitIcons.length,
            }}
            title={label}
          >
            <Icon aria-hidden />
          </div>
        ))}
      </div>

      <div className="profile-orbit__photo-wrap">
        <img
          className="profile-orbit__photo"
          src="/profile.png?v=2"
          alt={profile.name}
        />
      </div>
    </div>
  );
}
