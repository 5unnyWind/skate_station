import { Tabs, useTheme } from '@geist-ui/core';
import { useTabs } from '@geist-ui/core';
import React from 'react';
import { addColorAlpha } from '../../utils/color.js'

const Menu = () => {
  const { setState: setTab, bindings } = useTabs('/')
  const theme = useTheme()
  return (
    <>
      <div className="menu-wrapper">
        <nav className="menu">
          <div className="content">
            <div className="tabs">
              <Tabs
                {...bindings}
                leftSpace={0}
                align="center"
                hideDivider
                hideBorder
              >
                <Tabs.Item label={<h3>主页</h3>} value='/'>
                </Tabs.Item>

                <Tabs.Item label={<h3>资讯</h3>} value='/news'>
                </Tabs.Item>

                <Tabs.Item label={<h3>板技</h3>} value='/skills'>
                </Tabs.Item>

                <Tabs.Item label={<h3>交流</h3>} value='/talk'>
                </Tabs.Item>

                <Tabs.Item label={<h3>我们</h3>} value='/us'>
                </Tabs.Item>
              </Tabs>
            </div>
          </div>
        </nav>
      </div>

      <style jsx>{`
        .menu-wrapper {
          height: var(--geist-page-nav-height);
        }
        .menu {
          position: fixed;
          top: 0;
          height: var(--geist-page-nav-height);
          width: 100%;
          backdrop-filter: saturate(180%) blur(5px);
          background-color: ${addColorAlpha(theme.palette.background, 0.8)};
          box-shadow: ${theme.type === 'dark'
          ? '0 0 0 1px #333'
          : '0 0 15px 0 rgba(0, 0, 0, 0.1)'};
          z-index: 999;
        }
        nav .content {
          display: flex;
          align-items: center;
          justify-content: space-between;
          max-width: 1000px;
          height: 100%;
          margin: 0 auto;
          user-select: none;
          padding: 0 ${theme.layout.gap};
        }
        .logo {
          flex: 1 1;
          display: flex;
          align-items: center;
          justify-content: flex-start;
        }
        .logo a {
          display: inline-flex;
          flex-direction: row;
          align-items: center;
          font-size: 1.125rem;
          font-weight: 500;
          color: inherit;
          height: 28px;
        }
        .logo :global(.image) {
          border: 1px solid ${theme.palette.border};
          border-radius: 2rem;
        }
        .tabs {
          flex: 1 1;
        }
        .tabs :global(.content) {
          display: none;
        }
        @media only screen and (max-width: ${theme.breakpoints.xs.max}) {

        }

      `}</style>
    </>
  );
}

export default Menu;
