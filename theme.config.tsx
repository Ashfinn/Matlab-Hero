// theme.config.jsx
import { useRouter } from 'next/router'
import { useConfig } from 'nextra-theme-docs'

const logo = (
  <svg
    height="24"
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="50" cy="50" r="50" fill="#3498db" />
    <text x="50" y="55" textAnchor="middle" fill="#fff" fontSize="24" fontWeight="bold">Logo</text>
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
        <meta name="og:title" content={title ? title + ' – My Documentation' : 'My Documentation'} />
        <meta name="og:image" content={socialCard} />
        <link rel="icon" href="/favicon.ico" />
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
    titleComponent({ title, type }) {
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
