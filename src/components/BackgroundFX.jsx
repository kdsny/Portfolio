import './BackgroundFX.css';

export default function BackgroundFX() {
  return (
    <div className="bg-fx" aria-hidden="true">
      <div className="bg-fx__grid" />
      <div className="bg-fx__orb bg-fx__orb--1" />
      <div className="bg-fx__orb bg-fx__orb--2" />
      <div className="bg-fx__orb bg-fx__orb--3" />
    </div>
  );
}
