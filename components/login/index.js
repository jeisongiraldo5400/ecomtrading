import Link from 'next/link';

export default function Login() {
    return (
        <div className="bg-black text-white">
            
            <h1>Auth</h1>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" />

            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="password" />

            <Link href="/admin"><a>Home</a></Link>

        </div> 
    )
}
