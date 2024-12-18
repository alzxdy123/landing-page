import React from 'react'

function WhypacCard({ whyPac }: { whyPac: any[] }) {
    return (
        <React.Fragment>
            {whyPac.map((item, i) => (
                <div key={i} className='flex flex-col items-start'>
                    <img
                        src={item.img}
                        alt={item.title}
                        width={item.width}
                        className='whypac-box-image mb-5 h-20'
                        style={{
                            opacity: 0,
                            transform: 'translateY(-50px)',
                        }}
                    />
                    <div
                        className='whypac-box-content'
                        style={{
                            opacity: 0,
                            transform: 'translateY(50px)',
                        }}
                    >
                        <h1 className='mb-2 mt-5 text-lg font-bold'>
                            {item.title}
                        </h1>
                        <p className='text-sm text-slate-700 dark:text-slate-500'>
                            {item.desc}
                        </p>
                    </div>
                </div>
            ))}
        </React.Fragment>
    )
}

export default WhypacCard
