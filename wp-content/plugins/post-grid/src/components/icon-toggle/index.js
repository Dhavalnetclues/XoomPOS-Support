

const { Component, RawHTML } = wp.element;
import { Button, Dropdown } from '@wordpress/components'


class IconToggle extends Component {
  render() {


    const {
      position,
      variant,
      iconList, //[{"label":"Select..","icon":"","value":""}]
      buttonTitle,
      onChange,
      activeIcon,
      value,


    } = this.props;




    return (
      <div>

        <Dropdown
          position={position}
          renderToggle={({ isOpen, onToggle }) => (
            <div className='border border-solid border-gray-400 p-1 px-2 cursor-pointer'
              title={buttonTitle}
              variant={variant}
              onClick={onToggle}
              aria-expanded={isOpen}
            >
              <RawHTML className="text-sm ">{activeIcon}</RawHTML>
            </div>
          )}
          renderContent={() => <div className=''>

            {iconList.map((x, index) => {


              return (

                <div className={' text-lg px-2 font-bold border-b inline-block hover:bg-blue-400 hover:text-white cursor-pointer'} onClick={(ev) => {


                  onChange(x, index)


                }}>

                  {!x.value && (

                    <div><span class="icon-close"></span></div>

                  )}

                  {x.value && (

                    <RawHTML>{x.icon}</RawHTML>

                  )}

                </div>

              )

            })}
          </div>}
        />
      </div>

    )
  }
}


export default IconToggle;