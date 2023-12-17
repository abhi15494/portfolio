"use client";
import Image from 'next/image'

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
  const sections = [
    {
      id: 'Aboutme',
      ele: <Banner />
    },
    {
      id: 'Aboutme1',
      ele: <Aboutus />
    },
    {
      id: 'ProjectsWorked',
      ele: <ProjectsWorked />
    },
    {
      id: 'Skills',
      ele: <Skills />
    },
    {
      id: 'Experience',
      ele: <Experience />
    },
    {
      id: 'Hobbies',
      ele: <Hobbies />
    },
    {
      id: 'Service',
      ele: <Service />
    },
  ];

  useLayoutEffect(() => {
    util_lozad();
  }, []);

  return (
    <div>
      <Header />
      <main>
        {
          sections.map((sec, index) => {
            return <section className="p-section"  key={'SECTION_' + index + sec.id} id={'section_' + sec.id}>
              <article className="p-container">
                {sec.ele}
              </article>
            </section>
          })
        }
      </main>
      <Footer />
    </div>
  )
}

export default Home;