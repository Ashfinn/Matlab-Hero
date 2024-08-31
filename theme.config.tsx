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
    <image href='/images/logo.webp'/>
  </svg>
)

const config = {
  project: {
    link: 'https://github.com/Ashfinn/matlab-hero'
  },
  docsRepositoryBase: 'https://github.com/Ashfinn/matlab-hero/docs',
  useNextSeoProps() {
    const { asPath } = useRouter()
    if (asPath !== '/') {
      return {
        titleTemplate: '%s – Matlab Hero'
      }
    }
  },
  logo,
  head: function useHead() {
    const { title } = useConfig()
    const socialCard = title
      ? `https://example.com/api/og?title=${title}`
      : 'https://example.com/og.png'

    return (
      <>
        <meta name="description" content="My Documentation Site" />
        <meta property="og:title" content={title ? title + ' – Matlab Hero' : 'Matlab Hero'} />
        <meta property="og:image" content={socialCard} />
        <link rel="icon" href="/logo.svg" />
      </>
    )
  },
  editLink: {
    text: 'Edit this page on GitHub →'
  },
  feedback: {
    content: 'Have questions? Provide feedback →',
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
        <p className="text-sm">© {new Date().getFullYear()} Matlab Hero.</p>
      </div>
    )
  },
  toc: {
    backToTop: true
  }
}

export default config
