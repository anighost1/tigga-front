
export default function ServiceCard({ data }) {

    const redirect = () => {
        window.location.href = data?.link || '/';
    }

    return (
        <div onClick={redirect} className="card shadow-2xl lg:w-[30%] w-[95%] bg-[#ffffff15] min-w-52 max-w-96 min-h-48 cursor-pointer hover:scale-105 duration-150">
            <div className="card-body">
                <h4 className="text-2xl">{data?.name || 'Name'}</h4>
                <p className='overflow-hidden line-clamp-3 text-ellipsis'>{data?.description || 'Description'}</p>
            </div>
        </div>
    )
}
