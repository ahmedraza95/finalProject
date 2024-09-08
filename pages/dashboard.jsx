import { useEffect, useState } from "react";
import HeaderUser from "./headerUser";
import React from "react";
import { Input } from "@nextui-org/react";
import { SearchIcon } from "../props/seach";
// import React from "react";
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button } from "@nextui-org/react";
import { Link } from "react-router-dom";
function DashobardUser() {

    const [post, setPost] = useState([]);
    const [news, setNews] = useState([]);
    const [choosenCate, setChoosenCate] = useState("All");
    const [sort, setSort] = useState('Sort')
    const [search, setSearch] = useState('')
    useEffect(() => {
        const url =
            choosenCate === "All"
                ? `https://dummyjson.com/products?sortBy=${sort}&title=asc%27`
                : `https://dummyjson.com/products/category/${choosenCate}?sortBy=${sort}&title=asc%27`;
        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                setNews(data.products);
            })
            .catch((err) => {
                console.error(err);
            });
    }, [choosenCate, sort]);


    useEffect((e) => {
        fetch('https://dummyjson.com/products/categories')
            .then((res) => res.json())
            .then((data) => {
                setPost(data);
            })
    }, [])

    const filtered = news.filter((data) => data.title.toLowerCase().indexOf(search.toLowerCase()) !== -1)

    return (
        <>
            <HeaderUser />
            <div className="divMainBig">

                <div id="SearchIcon">
                    <div id="newDiv" className="w-[340px] h-[240px] px-8 rounded-2xl flex justify-center items-center bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg">
                        <Input
                            onChange={(e) => {
                                setSearch(e.target.value)
                            }}
                            label="Search"
                            isClearable
                            radius="lg"
                            classNames={{
                                label: "text-black/50 dark:text-white/90",
                                input: [
                                    "bg-transparent",
                                    "text-black/90 dark:text-white/90",
                                    "placeholder:text-default-700/50 dark:placeholder:text-white/60",
                                ],
                                innerWrapper: "bg-transparent",
                                inputWrapper: [
                                    "shadow-xl",
                                    "bg-default-200/50",
                                    "dark:bg-default/60",
                                    "backdrop-blur-xl",
                                    "backdrop-saturate-200",
                                    "hover:bg-default-200/70",
                                    "dark:hover:bg-default/70",
                                    "group-data-[focus=true]:bg-default-200/50",
                                    "dark:group-data-[focus=true]:bg-default/60",
                                    "!cursor-text",
                                ],
                            }}
                            placeholder="Type to search..."
                            startContent={
                                <SearchIcon id="color" className="text-black/50 mb-0.5 dark:text-white/90 text-slate-400 pointer-events-none flex-shrink-0" />
                            }
                        />
                    </div>
                    <div className="divOptions">

                        <div className="Category">
                                    <label className="label">Category</label>
                            <Dropdown>
                                <DropdownTrigger>
                                    <Button
                                        className="bg-aqua-100"
                                        variant="bordered"
                                    >
                                        {choosenCate}
                                    </Button>
                                </DropdownTrigger>
                                <DropdownMenu key={news.id}
                                    aria-label="Action event example"

                                >
                                    <DropdownItem onClick={(e) => setChoosenCate("All")}
                                    >ALL</DropdownItem>
                                    {
                                        post.map((pro) => (
                                            // console.log(pro)

                                            <DropdownItem onClick={(e) => setChoosenCate(e.target.innerText)
                                            } key={pro.id}
                                            >{pro.slug}</DropdownItem>
                                        ))
                                    }
                                </DropdownMenu>
                            </Dropdown>

                        </div>
                        <div id="divMain" className="Category">
                            <label className="label">Sorting</label>
                            <Dropdown>
                                <DropdownTrigger>
                                    <Button
                                        className="bg-aqua-100"
                                        variant="bordered"
                                    >
                                        {sort}
                                    </Button>
                                </DropdownTrigger>
                                <DropdownMenu
                                    aria-label="Action event example"

                                >
                                    <DropdownItem onClick={(e) => setSort("price")}>Sort By Price</DropdownItem>
                                    <DropdownItem onClick={(e) => setSort("title")}>Sort By Name</DropdownItem>
                                </DropdownMenu>
                            </Dropdown>
                        </div>
                    </div>

                </div>
            </div>
            <div className="mainParent">
                {filtered.map((data) => (
                    <Link to={`/product/${data.id}`} key={data.id} id="mainParentDiv" className="lg:w-1/4 md:w-1/2 p-4 w-full">
                        <div className="block relative h-48 rounded overflow-hidden">
                            <img
                                alt="ecommerce"
                                className="object-cover object-center w-full h-full block"
                                src={data.images}
                            />
                        </div>
                        <div className="mt-4">
                            <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                                {data.category}
                            </h3>
                            <h2 className="text-gray-900 title-font text-lg font-medium">
                                {data.title}
                            </h2>
                            <p className="mt-1">{data.description}</p>
                            <p className="mt-1">${data.price}</p>
                        </div>
                    </Link>
                ))
                }
            </div>

        </>
    )
}
export default DashobardUser
