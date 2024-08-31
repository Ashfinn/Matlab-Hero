import { useRouter } from 'next/router'
import { useConfig } from 'nextra-theme-docs'
import React from 'react'

// Define types for the titleComponent props
interface TitleComponentProps {
  title: string;
  type: 'separator' | 'link';
}

const logo = (
  <svg
    height="24"
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <image href='/images/logo.webp' width="100" height="100" />
  </svg>
)

const config = {
  project: {
    link: 'https://github.com/Ashfinn/matlab-hero'
  },
  docsRepositoryBase: 'https://github.com/Ashfinn/matlab-hero/tree/main/docs',
  useNextSeoProps() {
    const { asPath } = useRouter()
    if (asPath !== '/') {
      return {
        titleTemplate: '%s – Matlab Hero'
      }
    }
    return {
      titleTemplate: 'Matlab Hero – %s'
    }
  },
  logo,
  head: function useHead() {
    const { title } = useConfig()
    const socialCard = title
      ? `https://matlab-hero.com/api/og?title=${encodeURIComponent(title)}`
      : 'https://matlab-hero.com/images/og.png'

    return (
      <>
        <meta name="description" content="Matlab Hero: The Ultimate Guide to MATLAB Programming" />
        <meta property="og:title" content={title ? title + ' – Matlab Hero' : 'Matlab Hero'} />
        <meta property="og:image" content={socialCard} />
        <meta property="og:description" content="Learn MATLAB programming with step-by-step tutorials, projects, and tips." />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content={socialCard} />
        <link rel="icon" href="/images/logo.svg" />
      </>
    )
  },
  editLink: {
    text: 'Edit this page on GitHub →'
  },
  feedback: {
    content: 'Have questions or feedback? Reach out to us →',
    labels: 'feedback'
  },
  sidebar: {
    titleComponent({ title, type }: TitleComponentProps) {
      if (type === 'separator') {
        return <span className="cursor-default">{title}</span>
      }
      return <>{title}</>
    },
    defaultMenuCollapseLevel: 1,
    toggleButton: true
  },
  footer: {
    text: (
      <div className="flex flex-col items-center">
        <p className="text-sm">© {new Date().getFullYear()} Matlab Hero. All rights reserved.</p>
        <a href="https://github.com/Ashfinn/matlab-hero" className="text-blue-500 hover:underline">
          Contribute on GitHub
        </a>
      </div>
    )
  },
  toc: {
    backToTop: true
  }
}

export default config
