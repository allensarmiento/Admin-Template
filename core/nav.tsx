import classnames from 'classnames'
import Dropdown from './dropdown'
import NavItem from './nav-item'

const Nav = () => {
  return (
    <nav className={classnames(
      'bg-gray-800',
      'pt-2',
      'md:pt-1',
      'pb-1',
      'px-1',
      'mt-0',
      'h-auto',
      'fixed',
      'w-full',
      'z-20',
      'top-0',
    )}>
      <div className={classnames(
        'flex',
        'flex-wrap',
        'items-center',
      )}>
        <NavItem className={classnames(
          'flex-shrink',
          'justify-center',
          'md:justify-start',
          'text-white',
        )}>
          <a className="pl-2">Admin Dashboard</a>
        </NavItem>
        <NavItem className={classnames(
          'flex-1',
          'px-2',
          'justify-center',
          'md:justify-start',
          'text-white',
        )}>
          <span className="relative w-full">
            <input
              className={classnames(
                'w-full',
                'bg-gray-900',
                'text-white',
                'transition',
                'focus:outline-none',
                'focus:border-gray-400',
                'rounded',
                'py-3',
                'px-2',
                'pl-10',
                'appearance-none',
                'leading-normal',
              )}
              type="search"
              placeholder="Search"
            />
            <div
              className="absolute search-icon"
              style={{
                top: '1rem',
                left: '.8rem',
              }}
            >
              <svg
                className="fill-current pointer-events-none text-white w-4 h-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"></path>
              </svg>
            </div>
          </span>
        </NavItem>
        <NavItem className={classnames(
          'w-full',
          'pt-2',
          'content-center',
          'justify-between',
          'md:w-1/3',
          'md:justify-end',
        )}>
          <Dropdown />
        </NavItem>
      </div>
    </nav>
  )
}

export default Nav
