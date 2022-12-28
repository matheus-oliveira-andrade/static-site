import BlogMetaTags from "../components/blog-meta-tags/blog-meta-tags";
import CopyrightFooter from "../components/copyright-footer/copyright-footer";
import ProfileLinks from "../components/profile-links/profile-links";
import ProfileTopCard from "../components/profile-top-card/profile-top-card";

export default function Home() {
  return (
    <div className="container">
      <BlogMetaTags 
        pageName="profile"
        title="Profile"
      />

      <main>
        <ProfileTopCard />

        <ProfileLinks />
      </main>

      <CopyrightFooter />

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
      `}</style>
    </div>
  );
}
