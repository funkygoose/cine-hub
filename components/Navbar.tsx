'use client'

import { Search } from '@mui/icons-material'
import Link from 'next/link'
import SearchIcon from '@mui/icons-material/Search';
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation';

const Navbar = () => {
    const router = useRouter();
    const [search, setSearch] = useState<string>("");
    const [dropdownMenu, setDropdownMenu] = useState<boolean>(false);

    const [isScolled, setIsScrolled] = useState<boolean>(false);

    const handleScroll = () => {
        if (window.scrollY > 10) {
            setIsScrolled(true);
        } else {
            setIsScrolled(false);
        }

    }

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className={`navbar ${isScolled && "bg-black-1"}`}>
            <Link href="/">
                <img src="/assets/logo.png" alt='logo' className='logo' />
            </Link>

            <div className="nav-links">
                <Link href="/" className='nav-link'>Home</Link>
                <Link href="/my-list" className='nav-link'>My List</Link>
            </div>

            <div className='nav-right'>
                <div className="search">
                    <input
                        placeholder='Search movie...'
                        className='input-search'
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                    <button disabled={search === ""}>

                        <Search className="icon" onClick={() => router.push(`/search/${search}`)} />
                    </button>
                </div>

                <img
                    src="/assets/profile_icon.jpg"
                    className='profile'
                    alt="profile"
                    onClick={() => setDropdownMenu(!dropdownMenu)} />

                {dropdownMenu && (
                    <div className="dropdown-menu">
                        <Link href="/" >Home</Link>
                        <Link href="/my-list">My List</Link>
                        <a href="">Log Out</a>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Navbar