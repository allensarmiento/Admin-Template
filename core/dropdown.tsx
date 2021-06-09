import classnames from 'classnames'
import { useState } from 'react';
import DropdownItem from './dropdown-item'

const Dropdown = () => {
  const [isInvisible, setIsInvisible] = useState(true)

  const toggleDD = () => {
    console.log('toggled')
    setIsInvisible(!isInvisible)
  }

  return (
    <ul className={classnames(
      'list-reset',
      'flex',
      'justify-between',
      'flex-1',
      'md:flex-none',
      'items-center',
    )}>
      <DropdownItem>
        <a className={classnames(
          'inline-block',
          'py-2',
          'px-4',
          'text-white',
          'no-underline',
        )}>
          Active
        </a>
      </DropdownItem>
      <DropdownItem>
        <a className={classnames(
          'inline-block',
          'py-2',
          'px-4',
          'no-underline',
          'text-gray-600',
          'hover:text-gray-200',
          'hover:text-underline',
        )}>
          Link
        </a>
      </DropdownItem>
      <DropdownItem>
        <div className="relative inline-block">
          <button
            className={classnames(
              'drop-button',
              'text-white',
              'focus:outline-none',
            )}
            onClick={toggleDD}
          >
            <span className="pr-2">
            </span>&nbsp;
            Hi, User&nbsp;
            <svg
              className="h-3 fill-current inline"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path
                d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
              />
            </svg>
          </button>
          <div
            id="myDropdown"
            className={classnames(
              'dropdownlist',
              'absolute',
              'bg-gray-800',
              'text-white',
              'right-0',
              'mt-3',
              'p-3',
              'overflow-auto',
              'z-30',
              isInvisible ? 'invisible' : '',
            )}
          >
            <input
              id="myInput"
              className={classnames(
                'drop-search',
                'p-2',
                'text-gray-600',
              )}
              type="text"
              placeholder="Search.."
            />
            <a className={classnames(
              'block',
              'p-2',
              'hover:bg-gray-800',
              'text-white',
              'text-sm',
              'no-underline',
              'hover:no-underline',
            )}>
              <i className="fa fa-user fa-fw"></i>&nbsp;
              Profile
            </a>
            <a className={classnames(
              'block',
              'p-2',
              'hover:bg-gray-800',
              'text-white',
              'text-sm',
              'no-underline',
              'hover:no-underline',
            )}>
              <i className="fa fa-cog fa-fw"></i>&nbsp;
              Settings
            </a>
            <div className="border border-gray-800"></div>
            <a className={classnames(
              'block',
              'p-2',
              'hover:bg-gray-800',
              'text-white',
              'text-sm',
              'no-underline',
              'hover:no-underline',
            )}>
              <i className="fa fa-sign-out-alt fa-fw"></i>&nbsp;
              Log Out
            </a>
          </div>
        </div>
      </DropdownItem>
    </ul>
  )
}

export default Dropdown
