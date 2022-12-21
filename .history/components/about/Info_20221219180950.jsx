import React from 'react';
import { Icon } from '@iconify/react';

const Info = (props) => {
  const{user}= props;
  return (
    <div className="about__info grid">
        <div className="about__box">
            <Icon icon="bx:award"  className="about__icon"></Icon>
            <h3 className="about__title">Experience
            </h3>
            <span className="about__subtitle">{user?.experience} years working</span>
        </div>

        <div className="about__box">
            <Icon icon="bx:briefcase-alt"  className="about__icon"></Icon>
            <h3 className="about__title">Completed
            </h3>
            <span className="about__subtitle">{user?.projectNumber} + projects</span>
        </div>

        <div className="about__box">
            <Icon icon="bx:support" className="about__icon"></Icon>
            <h3 className="about__title">Support 
            </h3>
            <span className="about__subtitle">Online {user?.support}</span>
        </div>
    </div>
  )
}

export default Info