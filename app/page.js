"use client";

import React, { useLayoutEffect } from 'react'
import { Header } from './components/Generic/Header'
import { Footer } from './components/Generic/Footer'
import { Banner } from './components/Banner'
import { Experience } from './components/Experience'
import { Hobbies } from './components/Hobbies'
import { Service } from './components/Service'
import { Aboutus } from './components/Aboutus'
import { Skills } from './components/Skills'
import { ProjectsWorked } from './components/ProjectsWorked'
import { util_lozad } from './utility';

import './scss/index.scss';

const Home = () => {
  const sections = {
    Aboutme: <Banner />,
    Aboutme1: <Aboutus />,
    ProjectsWorked: <ProjectsWorked />,
    Skills: <Skills />,
    Experience: <Experience />,
    Hobbies: <Hobbies />,
    Service: <Service />,
  };

  useLayoutEffect(() => {
    util_lozad();
  }, []);

  return (
    <>
      <Header />
      <main>
        {
          Object.keys(sections).map((sec, index) => {
            return <section className="p-section"  key={'SECTION_' + index + sec} id={'section_' + sec}>
              <article className="p-container">
                {sections[sec]}
              </article>
            </section>
          })
        }
      </main>
      <Footer />
    </>
  )
}

export default Home;