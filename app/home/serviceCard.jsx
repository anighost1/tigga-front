import Cookies from "js-cookie";

export default function ServiceCard({ data }) {

    const token = Cookies.get('token')

    const redirectTo = () => {
        window.location.href = `${data?.link}?token=${token}` || '/';
    }

    return (
        <div onClick={redirectTo} className="card shadow-2xl lg:w-[30%] w-[95%] bg-[#ffffff15] min-w-52 max-w-96 min-h-48 cursor-pointer hover:scale-105 duration-150">
            <div className="card-body text-[#d8d8d8aa]">
                <h4 className="text-2xl">{data?.name || 'Name'}</h4>
                <p className='overflow-hidden line-clamp-3 text-ellipsis'>{data?.description || 'Description'}</p>
            </div>
        </div>
    )
}
