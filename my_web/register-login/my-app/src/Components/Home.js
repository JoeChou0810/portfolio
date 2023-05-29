import React from 'react';

function Home() {
  return (
    <div className="container mt-1">
      <div className="form-control mt-1">
        <h2 className="text-info-dark fw-bold pt-2">這裡是 Joe 的專案首頁</h2>
        <h3 className="text-info">Hi, Guest. My name is Joe.</h3>
        <h4 className="text-info">
          And first, thanks for browsing my project.
        </h4>
        <h4
          className="text-info-dark
        "
        >
          About me
        </h4>
        <p>
          Hi, I'm Joe, and I am a career-switching frontend engineer.
          <br />I am learning frontend engineering at <b>iSpan</b>, where I am
          acquiring professional knowledge in HTML5, CSS3, JavaScript, jQuery,
          PHP, and Node.js.
          <br />
          As part of the course, we are assigned two group projects to
          demonstrate these technologies. <br />
          After completing my course, I am currently seeking my first frontend
          engineering job.
        </p>
        <h4
          className="text-info-dark
        "
        >
          About the project
        </h4>
        <p>
          This project is my first experience working on user registration,
          login/logout, and session management.
          <br /> The technologies I use include <b>ReactJS</b>, <b>Node.js</b>,
          and <b>MySQL</b>.<br />
          If you want to view the Member page and know more about me, please
          register and log in.
        </p>
      </div>
    </div>
  );
}

export default Home;
