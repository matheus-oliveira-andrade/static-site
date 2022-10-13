import Head from "next/head";
import utilStyles from "../styles/utils.module.css";

const name = "Matheus de Oliveira de Andrade";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Profile</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <img
          src="/images/profile.jpg"
          height="144"
          width="144"
          alt="linkedin"
          className={utilStyles.borderCircle}
        />

        <h1 className="title">{name}</h1>

        <p className="description">Backend Software Developer</p>

        <div className="grid">
          <a
            href="https://github.com/matheus-oliveira-andrade"
            className="card"
          >
            <img src="/images/github.png" height="50" width="60" alt="github" />
          </a>

          <a
            href="https://www.linkedin.com/in/matheus-oliveira-479467162/"
            className="card"
          >
            <img
              src="/images/linkedin.png"
              height="50"
              width="60"
              alt="linkedin"
            />
          </a>
        </div>
      </main>

      <footer>
        <p>Copyright © | {name}</p>
      </footer>

      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main {
          padding: 2rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #f6f6f6;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        footer img {
          margin-left: 0.5rem;
        }

        footer p {
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 0.8rem;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .title a {
          color: #0070f3;
          text-decoration: none;
        }

        .title a:hover,
        .title a:focus,
        .title a:active {
          text-decoration: underline;
        }

        .title {
          margin-bottom: 1rem;
          margin-bottom: 0;
          line-height: 1.5;
          font-size: 1.9rem;
        }

        .title,
        .description {
          text-align: center;
        }

        .description {
          line-height: 0;
          font-size: 1.2rem;
        }

        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }

        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;

          max-width: 800px;
          margin-top: 1rem;
        }

        .card {
          margin: 1rem;
          flex-basis: 35%;
          padding: 1.5rem;
          text-align: left;
          color: inherit;
          text-decoration: none;
          border: 1px solid #eaeaea;
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease;
        }

        .card:hover,
        .card:focus,
        .card:active {
          color: #02346e;
          border-color: #02346e;
        }

        .card h3 {
          margin: 0 0 1rem 0;
          font-size: 1.5rem;
        }

        .card p {
          margin: 0;
          font-size: 1.25rem;
          line-height: 1.5;
        }

        .card span {
          margin: 0 0 1rem 0;
          font-size: 1.5rem;
        }

        .logo {
          height: 1em;
        }

        @media (max-width: 600px) {
          // .grid {
          //   width: 100%;
          //   flex-direction: column;
          // }

          .title {
            font-size: 1.6rem;
          }

          .description {
            font-size: 1rem;
          }
        }

        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}