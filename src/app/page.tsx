import { Home as HomeIcon, Search, Library, ChevronLeft, ChevronRight, Play, Shuffle, SkipBack, SkipForward, Repeat, Mic2, LayoutList, Laptop2, Volume, Maximize2 } from 'lucide-react'
import Image from 'next/image';

export default function Home() {
  return (

    <div className="h-screen flex flex-col">
      <div className="flex flex-1">
        <aside className="w-72 bg-zinc-950 p-6">
          <div className='flex items-center gap-2'>
            <div className="w-3 h-3 bg-red-500 rounded-full" />
            <div className="w-3 h-3 bg-yellow-500 rounded-full" />
            <div className="w-3 h-3 bg-green-500 rounded-full" />
          </div>

          {/* Icones */}

          <nav className="space-y-5 mt-10">
            <a href="" className="flex items-center gap-3 text-sm font-semibold text-zinc-200">
              <HomeIcon />
              Home
            </a>
          </nav>
          <nav>
            <a href="" className="flex items-center gap-3 text-sm font-semibold text-zinc-200">
              <Search />
              Search
            </a>
          </nav>
          <nav>
            <a href="" className="flex items-center gap-3 text-sm font-semibold text-zinc-200">
              <Library />
              Your Library
            </a>
          </nav>

          {/* PlayList */}

          <nav className="mt-6 pt-6 border-t border-zinc-800 flex flex-col gap-3">
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">Playlist</a>
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">Playlist</a>
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">Playlist</a>
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">Playlist</a>

          </nav>
        </aside>

        {/* Botões de cabeçalho */}

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
      </div>

      {/* Play Music */}

      {/* Music */}

      <footer className="bg-zinc-800 border-t border-zinc-800 px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Image src="/imgluffy1.jpg" width={64} height={64} alt="ainda não sei" />
          <div className="flex flex-col gap-1">
            <strong className="font-normal">Stitches</strong>
            <span className="text-xs text-zinc-400">Shawn Mendes</span>
          </div>
        </div>

        {/* Play */}

        <div className="flex flex-col items-center gap-2">
          <div className="flex items-center gap-6">
            <Shuffle size={20} className="text-zinc-200" />
            <SkipBack size={20} className="text-zinc-200" />
            <button className="w-10 h-10 flex items-center justify-center pl-1 rounded-full bg-white text-black">
              <Play />
            </button>
            <SkipForward size={20} className="text-zinc-200" />
            <Repeat size={20} className="text-zinc-200" />
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs text-zinc-400">0:31</span>
            <div className="h-1 rounded-full w-96 bg-zinc-600">
              <div className="bg-zinc-200 w-40 h-1 rounded-full"></div>
            </div>
            <span className="text-xs text-zinc-400">2:11</span>
          </div>
        </div>

        {/* Complementos */}

        <div className="flex items-center gap-4">
          <Mic2 size={20} />
          <LayoutList size={20} />
          <Laptop2 size={20} />
          <div className="flex items-center gap-2">
            <Volume size={20} />
            <div className="h-1 rounded-full w-24 bg-zinc-600">
              <div className="bg-zinc-200 w-10 h-1 rounded-full"></div>
            </div>
            <Maximize2 size={20} />
          </div>
        </div>
      </footer>
    </div>
  )
}