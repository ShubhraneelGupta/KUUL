import Link from 'next/link'
export default function Logo() {
    return <div className="flex justify-center items-center">
        <Link href={'/'}>
            <svg width="50" height="35" viewBox="0 0 42 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.3171 21.8202L6.79381 28.4314L0.69732 28.471L1.05361 0.878382H6.12083L6.59588 16.3967L15.7406 0.640856L20.5307 2.54106L13.1674 16.4363L21.3621 24.7101L17.8784 28.4314L10.3171 21.8202ZM38.171 28.3522L19.6044 17.9802L20.7525 11.5275L38.171 0.75962L41.4568 6.22271L25.7009 14.5757L40.9422 21.8598L38.171 28.3522Z" fill="#9ACD32"/>
                </svg>
        </Link>
    </div>
}