import React from "react";
import { Metadata } from "next";
import Blogs from "@/components/blogs/Blogs";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Najib Abdi - Blogs",
  description:
    "Blog articles on software development, web development, mobile app development, science and more.",
  keywords: [
    "software development blogs",
    "web development articles",
    "mobile app development",
    "tech blogs",
    "programming tutorials",
    "Najib Abdi blogs",
    "software engineering insights",
    "coding tips",
    "tech articles",
  ],
  authors: [{ name: siteConfig.author, url: siteConfig.url }],
  creator: siteConfig.author,
  publisher: siteConfig.author,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(siteConfig.url),
  alternates: {
    canonical: "/blogs",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: `${siteConfig.url}/blogs`,
    title: "Najib Abdi - Blogs",
    description:
      "Blog articles on software development, web development, mobile app development, science and more.",
    siteName: siteConfig.name,
    images: [
      {
        url: `${siteConfig.url}/opengraph-image.png`,
        width: 1200,
        height: 630,
        alt: "Najib Abdi's Blog",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Najib Abdi - Blogs",
    description:
      "Blog articles on software development, web development, mobile app development, science and more.",
    creator: "@najibabdi7",
    images: [`${siteConfig.url}/opengraph-image.png`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const blogs = () => {
  return (
    <div>
      <Blogs />
    </div>
  );
};

export default blogs;
