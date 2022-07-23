import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Layout } from '../components';
import profilePhoto from '../../public/bilbao_squared_compressed.jpeg'

export default function Index() {
  return (
    <Layout siteTitle="jinyoung">
      <div className="center-photo">
        <Image
          className="profile-photo"
          src={profilePhoto}
          alt="jin young on the hudson river, nyc"
          width={200}
          height={200}
        />
      </div>
      <main id="biography">
        <p>
          software engineer working on user growth {' '}
          <a 
            href="https://babbel.com" 
            className="babbel"
            aria-label="11MM+ users globally (and counting!)"
          >
          @babbel
          </a>.
        </p>
        <p>i {' '} 
          <Link href="/thoughts">
            <a className="thoughts">write</a>
          </Link>{' '}
          to live more intentionally and build tools with{' '}
          <Link href="/code">
            <a className="dev">code</a>
          </Link>
          .
        </p>
        <p>
          feel free to {' '}
          <a href="mailto:jinyoung@pm.me?subject= howdy :)" className="email">
            reach out
          </a>-{' '}
          you can also find me on{' '}
          <a href="https://github.com/jinyoungch0i" className="github">
            github
          </a>
          .
        </p>
        <p>
          📍 currently based in nyc.
        </p>
      </main>
    </Layout>
  );
}
