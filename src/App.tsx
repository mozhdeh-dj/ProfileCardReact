import ProfileImage from './assets/9.jpg';

function App() {
    const name = 'Mozhdeh';
    const fname = 'Tofighkhah';
    const job = 'Student';

    return (
        <div className={'bg-gray-900 min-h-screen flex justify-center items-center'}>
            <div className={'bg-white/50 rounded-2xl shadow-lg p-6 w-80'}>
                <div className={'flex flex-col items-center'}>
                    <img src={ProfileImage} alt="{name}"
                         className={'w-35 h-35 rounded-full border-4 border-gray-800 mb-4'}/>
                </div>
                <h1 className={'text-2xl font-bold text-gray-800'}>{name} {fname}</h1>
                <h3 className={'text-lg font-bold text-gray-800 mt-1'}>{job}</h3>
            </div>
        </div>
    )
}

export default App;