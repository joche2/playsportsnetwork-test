import searchIcon from '../../assets/search-icon.svg'

export default function SearchBox() {
    let a = 'a'
    return (
        <div key={a}>
            <div className='search__container'>
                <form className='w-full' style={{ backgroundColor: '#e6e6e6', padding: '4px 12px' }} data-search='' action='/search' method='get'>
                    <div className='grid grid-flow-col' id='remote'>
                        <input className='col-span-2 h-9 focus:outline-none' style={{ padding: '8px 12px' }} placeholder='Seach for videos' autoComplete='off' readOnly type={'text'} spellCheck='false' />
                        <button className='rounded-r-md' style={{ backgroundColor: '#c30006' }}>
                            <img className='invert m-auto' alt='' style={{ maxWidth: '20px', maxHeight: '25px' }} src={searchIcon} />
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}