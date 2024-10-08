import { ChevronLeft, ChevronRight, Play } from 'lucide-react'
import Image from 'next/image';

export default function Main() {
    return (
        <main className="flex-1 p-6">
            <div className="flex items-center gap-4">
                <button className="rounded-full bg-black/40 p-1">
                    <ChevronLeft />
                </button>
                <button className="rounded-full bg-black/40 p-1">
                    <ChevronRight />
                </button>
            </div>

            <h1 className="font-semibold text-3xl mt-10">Good Afternoon</h1>

            {/* Blocos 1 */}

            <div className="grid grid-cols-3 gap-4 mt-4">
                <a href='#' className="bg-white/5 group rounded flex items-center gap-5 overflow-hidden hover:bg-white/10 transition-colors">
                    <Image src="/imgluffy1.jpg" width={100} height={100} alt="ainda não sei" />
                    <strong>Bloco</strong>
                    <button className="p-2 rounded-full bg-green-500 text-black ml-auto mr-8 invisible group-hover:visible">
                        <Play fill='bg-black' />
                    </button>
                </a>
                <a href='#' className="bg-white/5 group rounded flex items-center gap-5 overflow-hidden hover:bg-white/10 transition-colors">
                    <Image src="/imgluffy1.jpg" width={100} height={100} alt="ainda não sei" />
                    <strong>Bloco</strong>
                    <button className="p-2 rounded-full bg-green-500 text-black ml-auto mr-8 invisible group-hover:visible">
                        <Play fill='bg-black' />
                    </button>
                </a>
                <a href='#' className="bg-white/5 group rounded flex items-center gap-5 overflow-hidden hover:bg-white/10 transition-colors">
                    <Image src="/imgluffy1.jpg" width={100} height={100} alt="ainda não sei" />
                    <strong>Bloco</strong>
                    <button className="p-2 rounded-full bg-green-500 text-black ml-auto mr-8 invisible group-hover:visible">
                        <Play fill='bg-black' />
                    </button>
                </a>
                <a href='#' className="bg-white/5 group rounded flex items-center gap-5 overflow-hidden hover:bg-white/10 transition-colors">
                    <Image src="/imgluffy1.jpg" width={100} height={100} alt="ainda não sei" />
                    <strong>Bloco</strong>
                    <button className="p-2 rounded-full bg-green-500 text-black ml-auto mr-8 invisible group-hover:visible">
                        <Play fill='bg-black' />
                    </button>
                </a>
                <a href='#' className="bg-white/5 group rounded flex items-center gap-5 overflow-hidden hover:bg-white/10 transition-colors">
                    <Image src="/imgluffy1.jpg" width={100} height={100} alt="ainda não sei" />
                    <strong>Bloco</strong>
                    <button className="p-2 rounded-full bg-green-500 text-black ml-auto mr-8 invisible group-hover:visible">
                        <Play fill='bg-black' />
                    </button>
                </a>
                <a href='#' className="bg-white/5 group rounded flex items-center gap-5 overflow-hidden hover:bg-white/10 transition-colors">
                    <Image src="/imgluffy1.jpg" width={100} height={100} alt="ainda não sei" />
                    <strong>Bloco</strong>
                    <button className="p-2 rounded-full bg-green-500 text-black ml-auto mr-8 invisible group-hover:visible">
                        <Play fill='bg-black' />
                    </button>
                </a>
            </div>

            <h2 className="font-semibold text-2xl mt-10">Made for 3vNylleve</h2>

            {/* Blocos 2 */}

            <div className="grid grid-cols-8 gap-4 mt-4">
                <a href="" className="bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10">
                    <Image src="/imgluffy1.jpg" className="w-full" width={150} height={150} alt="ainda não sei" />
                    <strong className="font-semibold">Daily Mix 1</strong>
                    <span className="text-sm text-zinc-400"> Matuê, Veigh, Cabelinho</span>
                </a>
                <a href="" className="bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10">
                    <Image src="/imgluffy1.jpg" className="w-full" width={150} height={150} alt="ainda não sei" />
                    <strong className="font-semibold">Daily Mix 1</strong>
                    <span className="text-sm text-zinc-400"> Matuê, Veigh, Cabelinho</span>
                </a>
                <a href="" className="bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10">
                    <Image src="/imgluffy1.jpg" className="w-full" width={150} height={150} alt="ainda não sei" />
                    <strong className="font-semibold">Daily Mix 1</strong>
                    <span className="text-sm text-zinc-400"> Matuê, Veigh, Cabelinho</span>
                </a>
                <a href="" className="bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10">
                    <Image src="/imgluffy1.jpg" className="w-full" width={150} height={150} alt="ainda não sei" />
                    <strong className="font-semibold">Daily Mix 1</strong>
                    <span className="text-sm text-zinc-400"> Matuê, Veigh, Cabelinho</span>
                </a>
                <a href="" className="bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10">
                    <Image src="/imgluffy1.jpg" className="w-full" width={150} height={150} alt="ainda não sei" />
                    <strong className="font-semibold">Daily Mix 1</strong>
                    <span className="text-sm text-zinc-400"> Matuê, Veigh, Cabelinho</span>
                </a>
                <a href="" className="bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10">
                    <Image src="/imgluffy1.jpg" className="w-full" width={150} height={150} alt="ainda não sei" />
                    <strong className="font-semibold">Daily Mix 1</strong>
                    <span className="text-sm text-zinc-400"> Matuê, Veigh, Cabelinho</span>
                </a>
            </div>

        </main>
    )
}