import "./Newsletter.css";

import { useEffect, useState } from "react";
import type { ReactNode } from "react";
import { PortableText } from "@portabletext/react";
import type { PortableTextBlock } from "@portabletext/types";
import { createImageUrlBuilder } from "@sanity/image-url";
import type { SanityImageSource } from "@sanity/image-url";
import { sanityClient } from "../sanityClient";

type NewsletterIssue = {
  _id: string;
  title: string;
  slug: {
    current: string;
  };
  publishedAt: string;
  excerpt?: string;
  coverImageUrl?: string;
  body: PortableTextBlock[];
};

const imageBuilder = createImageUrlBuilder(sanityClient);

const urlFor = (source: SanityImageSource) =>
  imageBuilder.image(source);

const newsletterQuery = `
  *[
    _type == "newsletter" &&
    defined(publishedAt) &&
    publishedAt <= now()
  ]
  | order(publishedAt desc) {
    _id,
    title,
    slug,
    publishedAt,
    excerpt,
    "coverImageUrl": coverImage.asset->url,
    body
  }
`;

const formatDate = (date: string) =>
  new Date(date).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

const Newsletter = () => {
  const [issues, setIssues] = useState<NewsletterIssue[]>([]);
  const [selectedIssue, setSelectedIssue] =
    useState<NewsletterIssue | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    sanityClient
      .fetch<NewsletterIssue[]>(newsletterQuery)
      .then((data) => setIssues(data))
      .catch((err: unknown) => {
        console.error("Failed to load newsletters:", err);
        setError("Unable to load newsletters. Please try again later.");
      })
      .finally(() => setLoading(false));
  }, []);

  const portableTextComponents = {
    block: {
      h2: ({ children }: { children?: ReactNode }) => (
        <h2>{children}</h2>
      ),

      h3: ({ children }: { children?: ReactNode }) => (
        <h3>{children}</h3>
      ),

      normal: ({ children }: { children?: ReactNode }) => (
        <p>{children}</p>
      ),

      blockquote: ({ children }: { children?: ReactNode }) => (
        <blockquote>{children}</blockquote>
      ),
    },

    types: {
      image: ({
        value,
      }: {
        value: SanityImageSource & { alt?: string };
      }) => (
        <img
          src={urlFor(value).width(1200).auto("format").url()}
          alt={value.alt ?? ""}
          loading="lazy"
        />
      ),
    },
  };

  return (
    <main className="newsletter-page">
      <div className="newsletter-container">
        {selectedIssue ? (
          <article className="newsletter-article">
            <button
              type="button"
              onClick={() => setSelectedIssue(null)}
              className="newsletter-back-link"
            >
              ← Back to all newsletters
            </button>

            <header className="newsletter-article-header">
              <p className="newsletter-date">
                {formatDate(selectedIssue.publishedAt)}
              </p>

              <h1 className="newsletter-article-title">
                {selectedIssue.title}
              </h1>

              {selectedIssue.excerpt && (
                <p className="newsletter-subtitle">
                  {selectedIssue.excerpt}
                </p>
              )}
            </header>

            {selectedIssue.coverImageUrl && (
              <img
                src={selectedIssue.coverImageUrl}
                alt=""
                className="newsletter-article-cover"
              />
            )}

            <div className="newsletter-article-body">
              <PortableText
                value={selectedIssue.body ?? []}
                components={portableTextComponents}
              />
            </div>
          </article>
        ) : (
          <>
            <header className="newsletter-header">
              <p className="newsletter-eyebrow">
                FRC Team 1257
              </p>

              <h1 className="newsletter-heading">
                Newsletter
              </h1>

              <p className="newsletter-subtitle">
                What's new with the Snails?
              </p>
            </header>

            {loading ? (
              <div className="newsletter-status">
                Loading newsletters...
              </div>
            ) : error ? (
              <div
                role="alert"
                className="newsletter-status newsletter-error"
              >
                {error}
              </div>
            ) : issues.length === 0 ? (
              <div className="newsletter-empty">
                No newsletters published yet. Check back soon!
              </div>
            ) : (
              <div className="newsletter-grid">
                {issues.map((issue) => (
                  <article
                    key={issue._id}
                    className="newsletter-card"
                  >
                    {issue.coverImageUrl && (
                      <div className="newsletter-cover">
                        <img
                          src={issue.coverImageUrl}
                          alt=""
                          loading="lazy"
                        />
                      </div>
                    )}

                    <div className="newsletter-card-content">
                      <p className="newsletter-date">
                        {formatDate(issue.publishedAt)}
                      </p>

                      <h2 className="newsletter-card-title">
                        <button
                          type="button"
                          onClick={() => setSelectedIssue(issue)}
                          style={{
                            all: "unset",
                            cursor: "pointer",
                          }}
                        >
                          {issue.title}
                        </button>
                      </h2>

                      {issue.excerpt && (
                        <p className="newsletter-excerpt">
                          {issue.excerpt}
                        </p>
                      )}

                      <button
                        type="button"
                        onClick={() => setSelectedIssue(issue)}
                        className="newsletter-read-more"
                      >
                        Read newsletter →
                      </button>
                    </div>
                  </article>
                ))}
              </div>
            )}
          </>
        )}
      </div>
    </main>
  );
};

export default Newsletter; 