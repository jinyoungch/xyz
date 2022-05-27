import React from 'react';
import Link from 'next/link';
import styles from './post.module.css';

export default function Post({
  title = '',
  date = '',
  isThoughtsEntry = false,
  isCodeEntry = false,
  slug = '/',
  children = null,
  hackathon = 'no',
  live_demo = 'no',
  readingMins = 0,
}) {

  let hackathonUrl;
  let hackathonName;

  if (hackathon) {
    [hackathonName, hackathonUrl] = hackathon.split(" ")
  }

  return (
    <section className={styles.post}>
      <hgroup>
        {isThoughtsEntry || isCodeEntry ? (
          <Link 
            href={isThoughtsEntry ? "/thoughts/[slug]" : `${live_demo}`} 
            as={isThoughtsEntry ? `/thoughts/${slug}` : `${live_demo}`}
          >
            <a>
              <h2>{title}</h2>
            </a>
          </Link>
        ) : (
          <h2>{title}</h2>
        )}
        <h3 className='date'>{date} {readingMins !== 0 ? `| ${readingMins} mins` : null}</h3>
      </hgroup>
      {isThoughtsEntry || isCodeEntry ? (
        <p>
          <b>{isThoughtsEntry ? `tl;dr: ` : `stack: `}</b>
          {children}
          <br />
          {isThoughtsEntry ? (
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
