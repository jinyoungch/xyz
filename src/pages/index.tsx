import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Layout } from '../components';
import profilePhoto from '../../public/headshot.jpeg'

export default function Index() {
  return (
    <Layout siteTitle="jinyoung">
      <div className="center-photo">
        <Image
          className="profile-photo"
          src={profilePhoto}
          alt="jin young headshot courtesy of farsai"
          width={209}
          height={209}
        />
      </div>
      <main id="biography">
        {/* <p>
        polyglot,{' '}
         <a className="linkedin" href="https://www.linkedin.com/in/jinyoungch0i/">software engineer</a>
        , <a className="soundcloud" href="https://soundcloud.com/jinyoungch0i">instrumentalist</a> 
        , and <a className="strava" href="https://www.strava.com/athletes/24642494">cyclist</a>
        .
        </p> */}
        <p>I {' '}
          <Link href="/thoughts">
            <a className="thoughts">write</a>
          </Link>{' '}
          to live with intention, and I build tools with{' '}
          <Link href="/code">
            <a className="dev">code</a>
          </Link>
          .
        </p>
        <p>
          My work can be found on{' '}
          <a href="https://stackoverflow.com/users/14270947/jinyoungch0i?tab=questions&sort=newest" className="stackoverflow">
            StackOverflow
          </a>
          {' '}and{' '}
          <a href="https://github.com/jinyoungch" className="github">
            GitHub
          </a>
          .
        </p>
      </main>
    </Layout>
  );
}
