import {
  Gamepad2,
  AlignJustify,
  Search,
  Settings,
  Bitcoin,
  Bell,
} from "lucide-react";
import scroll from "./assets/scroll";
scroll();
export default function App() {
  return (
    <div id="Conteudo">
      <header className="flex flex-cow justify-between p-2">
        <div className="flex flex-row gap-4 justify-start">
          <AlignJustify />
          <Gamepad2 />
          <h3>Descubra</h3>
          <h3>Mercado</h3>
          <h3>Criar</h3>
          <h3>Robux</h3>
          <form className="flex flex-row bg-gray-800 rounded-md ">
            <Search className="text-white" />
            <input
              type="text"
              className="bg-gray-800 rounded-md"
              placeholder="Pesquisar"
            />
          </form>
        </div>
        <div className="flex gap-4 justify-end flex-row-reverse">
          <Settings />
          <a href="#" id="coin" className=" flex flex-row ">
            <Bitcoin />
            <strong>70</strong>
          </a>
          <Bell />
          <div id="user" className="flex flex-row gap-1">
            <img
              className="rounded-full w-5"
              src="./src/roblox.png"
              alt="img"
            />
            <p>JohnDoe</p>
          </div>
        </div>
      </header>
      <main className="ml-20 flex flex-col gap-6">
        <div className="">
          <h1>Início</h1>

          <div className="flex flex-col w-9/12 overflow-auto gap-4">
            <div id="Amizades">
              <h2>Amizades</h2>
            </div>
            <div className="flex  w-40 gap-4">
              <div>
                <div className="w-20 h-20 rounded-full bg-black block" />
              </div>
              <div>
                <div className="w-20 h-20 rounded-full bg-black block" />
              </div>
              <div>
                <div className="w-20 h-20 rounded-full bg-black block" />
              </div>
              <div>
                <div className="w-20 h-20 rounded-full bg-black block" />
              </div>

              <div>
                <div className="w-20 h-20 rounded-full bg-black block" />
              </div>
              <div>
                <div className="w-20 h-20 rounded-full bg-black block" />
              </div>
              <div>
                <div className="w-20 h-20 rounded-full bg-black block" />
              </div>
              <div>
                <div className="w-20 h-20 rounded-full bg-black block" />
              </div>
            </div>
          </div>

          <div id="Catalog" className=" flex flex-col gap-3">
            <div className="flex flex-col gap-2">
              <h2>Continuar</h2>
              <div id="Games" className="flex w-9/12 overflow-auto  gap-2">
                <div className="A GAME scroll-container">
                  <div className="w-28 h-28 rounded-xl scroll-content bg-slate-600" />
                  <p>
                    A Game <br />
                    But A littl...
                  </p>
                </div>
                <div className="A GAME">
                  <div className="w-28 h-28 rounded-xl scroll-content bg-slate-600" />
                  <p className="">
                    A Game But A little understand this and i already think
                    about
                  </p>
                </div>
                <div className="A GAME">
                  <div className="w-28 h-28 rounded-xl scroll-content bg-slate-600" />
                  <p>
                    A Game <br />
                    But A littl...
                  </p>
                </div>
                <div className="A GAME">
                  <div className="w-28 h-28 rounded-xl scroll-content bg-slate-600" />
                  <p>
                    A Game <br />
                    But A littl...
                  </p>
                </div>
                <div className="A GAME">
                  <div className="w-28 h-28 rounded-xl scroll-content  bg-slate-600" />
                  <p>
                    A Game <br />
                    But A littl...
                  </p>
                </div>
                <div className="A GAME">
                  <div className="w-28 h-28 rounded-xl scroll-content bg-slate-600" />
                  <p>
                    A Game <br />
                    But A littl...
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <h2 className="">Ação</h2>
              <div id="Games" className="flex gap-2">
                <div className="A GAME">
                  <div className="w-28 h-28 rounded-xl bg-slate-600" />
                  <p>
                    A Game <br />
                    But A littl...
                  </p>
                </div>
                <div className="A GAME">
                  <div className="w-28 h-28 rounded-xl bg-slate-600" />
                  <p>
                    A Game <br />
                    But A littl...
                  </p>
                </div>
                <div className="A GAME">
                  <div className="w-28 h-28 rounded-xl bg-slate-600" />
                  <p>
                    A Game <br />
                    But A littl...
                  </p>
                </div>
                <div className="A GAME">
                  <div className="w-28 h-28 rounded-xl bg-slate-600" />
                  <p>
                    A Game <br />
                    But A littl...
                  </p>
                </div>
                <div className="A GAME">
                  <div className="w-28 h-28 rounded-xl  bg-slate-600" />
                  <p>
                    A Game <br />
                    But A littl...
                  </p>
                </div>
                <div className="A GAME">
                  <div className="w-28 h-28 rounded-xl bg-slate-600" />
                  <p>
                    A Game <br />
                    But A littl...
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer></footer>
    </div>
  );
}
