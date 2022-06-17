import videos from '../../assets/videos.json';

export default function Videos() {
    function getDate(oldDate) {
        const month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        let date = new Date(oldDate);
        return `${date.getDate()}${getOrdinalDate(date.getDate())} ${month[date.getMonth()]} ${date.getFullYear()}`
    }

    function getOrdinalDate(day) {
        if (day > 3 && day < 21) return 'th';
        switch (day % 10) {
            case 1: return 'st';
            case 2: return 'nd';
            case 3: return 'rd';
            default: return 'th';
        }
    }

    return (
        <div>
            {videos.map((value, index) => {
                return (
                    <div key={'video-'+index}>
                        <span key={'latest-text'} className='w-full px-4 py-2 flex items-baseline text-2xl'>
                            {index === 1 ? 'Latest videos' : ''}
                        </span>
                        <a id={index} key={index} className='p-1 max-w-sm rounded overflow-hidden shadow-lg flex flex-col justify-center items-center' href={'https://www.youtube.com/watch?v=' + value._id}>
                            <img className='w-11/12' src={'https://img.youtube.com/vi/' + value._id + '/mqdefault.jpg'} alt='Sunset in the mountains' />
                            <div className='w-full px-4 py-2 flex flex-col items-baseline'>
                                <p className='text-sm text-black  font-bold'>{getDate(value.publishDate)}</p>
                                <h4 className='text-base text-left'>{value.title}</h4>
                            </div>
                        </a>
                    </div>
                )
            })}
        </div>
    )
}