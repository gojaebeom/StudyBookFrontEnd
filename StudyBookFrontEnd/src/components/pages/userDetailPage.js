import DefaultLayout from "../layouts/defaultLayout";
import img from "../../images/StudyBook.svg";
import { Link } from "react-router-dom";
import ReadMoreBox from "../widgets/readMoreBox";

function UserDetailPage(){
    return(
    <DefaultLayout>
        <div className="w-full">
            <div className="w-full bg-gray-50 flex justify-center items-start p-5 rounded-md mb-10">
                <div className="block relative w-20 h-20 mr-5">
                    <img alt="profil" src={img} className="mx-auto object-cover rounded-full h-20 w-20 "/>
                </div>
                <div className="block relative w-10/12">
                    <div className="font-noto-black text-3xl text-black">안녕봇</div>
                    <div className="font-noto-light text-md">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</div>
                </div>
            </div>
        </div>
        <div id="filter" className="w-full mb-5 flex flex-wrap">
            <Link to="/tags/name" className="flex mr-2">
                <div className="w-auto font-noto-thin text-xs p-1 rounded-l-sm bg-gray-100">전체</div>
                <div className="w-auto font-noto-thin text-xs p-1 rounded-r-sm bg-gray-200">12</div>
            </Link>
            <Link to="/tags/name" className="flex mr-2">
                <div className="w-auto font-noto-thin text-xs p-1 rounded-l-sm bg-gray-100">자바스크립트</div>
                <div className="w-auto font-noto-thin text-xs p-1 rounded-r-sm bg-gray-200">2</div>
            </Link>
            <Link to="/tags/name" className="flex mr-2">
                <div className="w-auto font-noto-thin text-xs p-1 rounded-l-sm bg-gray-100">자바</div>
                <div className="w-auto font-noto-thin text-xs p-1 rounded-r-sm bg-gray-200">10</div>
            </Link>
            <Link to="/tags/name" className="flex mr-2">
                <div className="w-auto font-noto-thin text-xs p-1 rounded-l-sm bg-gray-100">알고리즘</div>
                <div className="w-auto font-noto-thin text-xs p-1 rounded-r-sm bg-gray-200">5</div>
            </Link>
        </div>
        <div id="sub-filter" className="w-full mb-5 flex flex-wrap">
            <button className="py-2 px-4 border-b-2 border-white flex justify-center items-center">
                <i className="far fa-clock text-2xl text-gray-500 mr-2"></i>
                <span className="font-noto-bold text-xl text-gray-600">최신</span>
            </button>
            <button className="py-2 px-4 border-b-2 border-gray-400 flex justify-center items-center">
                <i className="fas fa-history text-2xl text-gray-500 mr-2"></i>
                <span className="font-noto-bold text-xl text-gray-600">오래된</span>
            </button>
        </div>
        
        <div className="w-full grid grid-flow-col md:grid-flow-row md:grid-cols-3 md:grid-rows-3 md:gap-4 mb-10">
            
            <div className="row-span-2 flex flex-col items-start p-5 rounded-md">
                <Link to="/users/1" className="flex justify-center items-center mb-3">
                    <div className="w-10 h-10 flex justify-center items-center border rounded-full mr-3">
                        <img src={img} alt="img" className="rounded-full w-8 h-8"/>
                    </div>
                    <div>
                        고재범
                    </div>
                </Link> {/* 프로필 */}
                <Link to="/posts/1" className="font-noto-black text-xl bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent hover:text-indigo-600 transition-all delay-75 mb-5">
                    자바스크립트를 활용하여 알고리즘 배우기
                </Link> {/* 제목 */}

                <ReadMoreBox 
                    content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
                    height="h-36"
                />
                <div className="flex flex-wrap">
                    <Link to="/tags/name" className="font-noto-thin text-xs p-1 rounded-sm bg-gray-100 mr-2">자바스크립트</Link>
                    <Link to="/tags/name" className="font-noto-thin text-xs p-1 rounded-sm bg-gray-100 mr-2">JS</Link>
                    <Link to="/tags/name" className="font-noto-thin text-xs p-1 rounded-sm bg-gray-100 mr-2">알고리즘</Link>
                </div> {/* 태그 리스트 */}
            </div> {/* 카드 */}
            <div className="border flex flex-col items-start p-5 rounded-md">
                <Link to="/users/1" className="flex justify-center items-center mb-3">
                    <div className="w-10 h-10 flex justify-center items-center border rounded-full mr-3">
                        <img src={img} alt="img" className="rounded-full w-8 h-8"/>
                    </div>
                    <div>
                        고재범
                    </div>
                </Link> {/* 프로필 */}
                <Link to="/posts/1" className="font-noto-black text-xl text-gray-700 hover:text-indigo-600 transition-all delay-75 mb-5">
                    자바스크립트를 활용하여 알고리즘 배우기
                </Link> {/* 제목 */}
                <div className="flex flex-wrap">
                    <Link to="/tags/name" className="font-noto-thin text-xs p-1 rounded-sm bg-gray-100 mr-2">자바스크립트</Link>
                    <Link to="/tags/name" className="font-noto-thin text-xs p-1 rounded-sm bg-gray-100 mr-2">JS</Link>
                    <Link to="/tags/name" className="font-noto-thin text-xs p-1 rounded-sm bg-gray-100 mr-2">알고리즘</Link>
                </div> {/* 태그 리스트 */}
            </div> {/* 카드 */}
            <div className="border flex flex-col items-start p-5 rounded-md">
                <Link to="/users/1" className="flex justify-center items-center mb-3">
                    <div className="w-10 h-10 flex justify-center items-center border rounded-full mr-3">
                        <img src={img} alt="img" className="rounded-full w-8 h-8"/>
                    </div>
                    <div>
                        고재범
                    </div>
                </Link> {/* 프로필 */}
                <Link to="/posts/1" className="font-noto-black text-xl text-gray-700 hover:text-indigo-600 transition-all delay-75 mb-5">
                    자바스크립트를 활용하여 알고리즘 배우기
                </Link> {/* 제목 */}
                <div className="flex flex-wrap">
                    <Link to="/tags/name" className="font-noto-thin text-xs p-1 rounded-sm bg-gray-100 mr-2">자바스크립트</Link>
                    <Link to="/tags/name" className="font-noto-thin text-xs p-1 rounded-sm bg-gray-100 mr-2">JS</Link>
                    <Link to="/tags/name" className="font-noto-thin text-xs p-1 rounded-sm bg-gray-100 mr-2">알고리즘</Link>
                </div> {/* 태그 리스트 */}
            </div> {/* 카드 */}
            <div className="border flex flex-col items-start p-5 rounded-md">
                <Link to="/users/1" className="flex justify-center items-center mb-3">
                    <div className="w-10 h-10 flex justify-center items-center border rounded-full mr-3">
                        <img src={img} alt="img" className="rounded-full w-8 h-8"/>
                    </div>
                    <div>
                        고재범
                    </div>
                </Link> {/* 프로필 */}
                <Link to="/posts/1" className="font-noto-black text-xl text-gray-700 hover:text-indigo-600 transition-all delay-75 mb-5">
                    자바스크립트를 활용하여 알고리즘 배우기
                </Link> {/* 제목 */}
                <div className="flex flex-wrap">
                    <Link to="/tags/name" className="font-noto-thin text-xs p-1 rounded-sm bg-gray-100 mr-2">자바스크립트</Link>
                    <Link to="/tags/name" className="font-noto-thin text-xs p-1 rounded-sm bg-gray-100 mr-2">JS</Link>
                    <Link to="/tags/name" className="font-noto-thin text-xs p-1 rounded-sm bg-gray-100 mr-2">알고리즘</Link>
                </div> {/* 태그 리스트 */}
            </div> {/* 카드 */}
            <div className="border flex flex-col items-start p-5 rounded-md">
                <Link to="/users/1" className="flex justify-center items-center mb-3">
                    <div className="w-10 h-10 flex justify-center items-center border rounded-full mr-3">
                        <img src={img} alt="img" className="rounded-full w-8 h-8"/>
                    </div>
                    <div>
                        고재범
                    </div>
                </Link> {/* 프로필 */}
                <Link to="/posts/1" className="font-noto-black text-xl text-gray-700 hover:text-indigo-600 transition-all delay-75 mb-5">
                    자바스크립트를 활용하여 알고리즘 배우기
                </Link> {/* 제목 */}
                <div className="flex flex-wrap">
                    <Link to="/tags/name" className="font-noto-thin text-xs p-1 rounded-sm bg-gray-100 mr-2">자바스크립트</Link>
                    <Link to="/tags/name" className="font-noto-thin text-xs p-1 rounded-sm bg-gray-100 mr-2">JS</Link>
                    <Link to="/tags/name" className="font-noto-thin text-xs p-1 rounded-sm bg-gray-100 mr-2">알고리즘</Link>
                </div> {/* 태그 리스트 */}
            </div> {/* 카드 */}
            <div className="border flex flex-col items-start p-5 rounded-md">
                <Link to="/users/1" className="flex justify-center items-center mb-3">
                    <div className="w-10 h-10 flex justify-center items-center border rounded-full mr-3">
                        <img src={img} alt="img" className="rounded-full w-8 h-8"/>
                    </div>
                    <div>
                        고재범
                    </div>
                </Link> {/* 프로필 */}
                <Link to="/posts/1" className="font-noto-black text-xl text-gray-700 hover:text-indigo-600 transition-all delay-75 mb-5">
                    자바스크립트를 활용하여 알고리즘 배우기
                </Link> {/* 제목 */}
                <div className="flex flex-wrap">
                    <Link to="/tags/name" className="font-noto-thin text-xs p-1 rounded-sm bg-gray-100 mr-2">자바스크립트</Link>
                    <Link to="/tags/name" className="font-noto-thin text-xs p-1 rounded-sm bg-gray-100 mr-2">JS</Link>
                    <Link to="/tags/name" className="font-noto-thin text-xs p-1 rounded-sm bg-gray-100 mr-2">알고리즘</Link>
                </div> {/* 태그 리스트 */}
            </div> {/* 카드 */}
            <div className="border flex flex-col items-start p-5 rounded-md">
                <Link to="/users/1" className="flex justify-center items-center mb-3">
                    <div className="w-10 h-10 flex justify-center items-center border rounded-full mr-3">
                        <img src={img} alt="img" className="rounded-full w-8 h-8"/>
                    </div>
                    <div>
                        고재범
                    </div>
                </Link> {/* 프로필 */}
                <Link to="/posts/1" className="font-noto-black text-xl text-gray-700 hover:text-indigo-600 transition-all delay-75 mb-5">
                    자바스크립트를 활용하여 알고리즘 배우기
                </Link> {/* 제목 */}
                <div className="flex flex-wrap">
                    <Link to="/tags/name" className="font-noto-thin text-xs p-1 rounded-sm bg-gray-100 mr-2">자바스크립트</Link>
                    <Link to="/tags/name" className="font-noto-thin text-xs p-1 rounded-sm bg-gray-100 mr-2">JS</Link>
                    <Link to="/tags/name" className="font-noto-thin text-xs p-1 rounded-sm bg-gray-100 mr-2">알고리즘</Link>
                </div> {/* 태그 리스트 */}
            </div> {/* 카드 */}
            <div className="border flex flex-col items-start p-5 rounded-md">
                <Link to="/users/1" className="flex justify-center items-center mb-3">
                    <div className="w-10 h-10 flex justify-center items-center border rounded-full mr-3">
                        <img src={img} alt="img" className="rounded-full w-8 h-8"/>
                    </div>
                    <div>
                        고재범
                    </div>
                </Link> {/* 프로필 */}
                <Link to="/posts/1" className="font-noto-black text-xl text-gray-700 hover:text-indigo-600 transition-all delay-75 mb-5">
                    자바스크립트를 활용하여 알고리즘 배우기
                </Link> {/* 제목 */}
                <div className="flex flex-wrap">
                    <Link to="/tags/name" className="font-noto-thin text-xs p-1 rounded-sm bg-gray-100 mr-2">자바스크립트</Link>
                    <Link to="/tags/name" className="font-noto-thin text-xs p-1 rounded-sm bg-gray-100 mr-2">JS</Link>
                    <Link to="/tags/name" className="font-noto-thin text-xs p-1 rounded-sm bg-gray-100 mr-2">알고리즘</Link>
                </div> {/* 태그 리스트 */}
            </div> {/* 카드 */}
            <div className="border flex flex-col items-start p-5 rounded-md">
                <Link to="/users/1" className="flex justify-center items-center mb-3">
                    <div className="w-10 h-10 flex justify-center items-center border rounded-full mr-3">
                        <img src={img} alt="img" className="rounded-full w-8 h-8"/>
                    </div>
                    <div>
                        고재범
                    </div>
                </Link> {/* 프로필 */}
                <Link to="/posts/1" className="font-noto-black text-xl text-gray-700 hover:text-indigo-600 transition-all delay-75 mb-5">
                    자바스크립트를 활용하여 알고리즘 배우기
                </Link> {/* 제목 */}
                <div className="flex flex-wrap">
                    <Link to="/tags/name" className="font-noto-thin text-xs p-1 rounded-sm bg-gray-100 mr-2">자바스크립트</Link>
                    <Link to="/tags/name" className="font-noto-thin text-xs p-1 rounded-sm bg-gray-100 mr-2">JS</Link>
                    <Link to="/tags/name" className="font-noto-thin text-xs p-1 rounded-sm bg-gray-100 mr-2">알고리즘</Link>
                </div> {/* 태그 리스트 */}
            </div> {/* 카드 */}
            <div className="border flex flex-col items-start p-5 rounded-md">
                <Link to="/users/1" className="flex justify-center items-center mb-3">
                    <div className="w-10 h-10 flex justify-center items-center border rounded-full mr-3">
                        <img src={img} alt="img" className="rounded-full w-8 h-8"/>
                    </div>
                    <div>
                        고재범
                    </div>
                </Link> {/* 프로필 */}
                <Link to="/posts/1" className="font-noto-black text-xl text-gray-700 hover:text-indigo-600 transition-all delay-75 mb-5">
                    자바스크립트를 활용하여 알고리즘 배우기
                </Link> {/* 제목 */}
                <div className="flex flex-wrap">
                    <Link to="/tags/name" className="font-noto-thin text-xs p-1 rounded-sm bg-gray-100 mr-2">자바스크립트</Link>
                    <Link to="/tags/name" className="font-noto-thin text-xs p-1 rounded-sm bg-gray-100 mr-2">JS</Link>
                    <Link to="/tags/name" className="font-noto-thin text-xs p-1 rounded-sm bg-gray-100 mr-2">알고리즘</Link>
                </div> {/* 태그 리스트 */}
            </div> {/* 카드 */}
        </div>
        <div className="px-5 bg-white py-5 flex flex-col xs:flex-row items-center xs:justify-between mb-16">
            <div className="flex items-center">
                <button type="button" className="w-full p-4 border text-base rounded-l-xl text-gray-600 bg-white hover:bg-gray-100">
                    <svg width="9" fill="currentColor" height="8" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1427 301l-531 531 531 531q19 19 19 45t-19 45l-166 166q-19 19-45 19t-45-19l-742-742q-19-19-19-45t19-45l742-742q19-19 45-19t45 19l166 166q19 19 19 45t-19 45z">
                        </path>
                    </svg>
                </button>
                <button type="button" className="w-full px-4 py-2 border-t border-b text-base text-indigo-500 bg-white hover:bg-gray-100 ">
                    1
                </button>
                <button type="button" className="w-full px-4 py-2 border text-base text-gray-600 bg-white hover:bg-gray-100">
                    2
                </button>
                <button type="button" className="w-full px-4 py-2 border-t border-b text-base text-gray-600 bg-white hover:bg-gray-100">
                    3
                </button>
                <button type="button" className="w-full px-4 py-2 border text-base text-gray-600 bg-white hover:bg-gray-100">
                    4
                </button>
                <button type="button" className="w-full p-4 border-t border-b border-r text-base  rounded-r-xl text-gray-600 bg-white hover:bg-gray-100">
                    <svg width="9" fill="currentColor" height="8" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1363 877l-742 742q-19 19-45 19t-45-19l-166-166q-19-19-19-45t19-45l531-531-531-531q-19-19-19-45t19-45l166-166q19-19 45-19t45 19l742 742q19 19 19 45t-19 45z">
                        </path>
                    </svg>
                </button>
            </div>
        </div> {/* 페이지네이션 */}
    </DefaultLayout>
    );
}
export default UserDetailPage;