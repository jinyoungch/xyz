import React from 'react';
import Link from 'next/link';
import styles from './post.module.css';

export default function Post({
  title = '',
  date = '',
  isTldr = false,
  isStack = false,
  slug = '/',
  children = null,
  hackathon = 'no',
  live_demo = 'no',
  readingTime = 0,
}) {

  let hackathonUrl;
  let hackathonName;

  if (hackathon) {
    [hackathonName, hackathonUrl] = hackathon.split(" ")
  }

  return (
    <section className={styles.post}>
      <hgroup>
        {isTldr || isStack ? (
          <Link 
            href={isTldr ? "/thoughts/[slug]" : `${live_demo}`} 
            as={isTldr ? `/thoughts/${slug}` : `${live_demo}`}
          >
            <a>
              <h2>{title}</h2>
            </a>
          </Link>
        ) : (
          <h2>{title}</h2>
        )}
        <h3 className='date'>{date} {isTldr ? `| ${readingTime} mins` : null}</h3>
      </hgroup>
      {isTldr || isStack ? (
        <p>
          <b>{isTldr ? `tl;dr: ` : `stack: `}</b>
          {children}
          <br />
          {isTldr ? (
            <Link href="/thoughts/[slug]" as={`/thoughts/${slug}`}>
              <a>read more</a>
            </Link>
          ) : (
            <p></p>
            )}
        </p>
      ) : ( 
      <div dangerouslySetInnerHTML={{ __html: children }} />
      )}
      {hackathon !== 'no' ? (
      <>
        <code>hackathon</code>
      </>
      ) : null}
    </section>
  );
}
