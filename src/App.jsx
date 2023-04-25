
import { GlobeAmericasIcon, PhoneIcon, AtSymbolIcon, BuildingOfficeIcon, ArchiveBoxIcon, UserIcon } from '@heroicons/react/24/outline'
import Progress from './Progress'

function App() {

  return (
    <div className="max-w-6xl bg-white  container mx-auto p-2">
      <div className='flex justify-center items-center'>
       {/*  <div><UserIcon className='w-48'/> </div> */}
        <div>
        <h1 className='text-5xl text-blue-400'>Cristian Antonio Dominguez Graciano</h1>
        <p className='text-2xl text-gray-500'>Lic. En Sistemas Computacionales Administrativos (Desarrollador Web)</p>
        </div>
      </div>
      <div className="flex p-10">
        <div className=" w-2/5 h-full">
          <div className="bg-gray-200 rounded-xl p-10 mb-5">
            <h2 className="text-2xl mb-2  text-blue-400">Habilidades</h2>
            <div className='mb-4'>
              <h3 className="font-semibold text-gray-800 mb-2">Idioma</h3>
              <div className="grid grid-cols-2 ">
                <div>Español</div><Progress wd='w-full'/>
                <div>Ingles (B2)</div><Progress wd='w-20'/>
              </div>
            </div>
            <div  className='mb-4'>
              <h3 className="font-semibold text-gray-800 mb-2">Desarrollo Web</h3>
              <div className="grid grid-cols-2">
                <div className="text-gray-800 ">HTML y CSS</div><Progress wd='w-36'/>
                <div className="text-gray-800 ">Javascript</div><Progress wd='w-24'/>
                <div className="text-gray-800 ">Node Js</div><Progress wd='w-16'/>
                <div className="text-gray-800 ">React Js</div><Progress wd='w-28'/>
                <div className="text-gray-800 ">Php</div><Progress wd='w-20'/>
                <div className="text-gray-800 ">Tailwind</div><Progress wd='w-28'/>
                <div className="text-gray-800 ">API / WebServices</div><Progress wd='w-16'/>
              </div>
            </div>
            <div  className='mb-4'>
              <h3 className="font-semibold text-gray-800 mb-2">Desarrollo de escritorio</h3>
              <div className="grid grid-cols-2">
                <div>Java</div><Progress wd='w-14'/>
                <div>C#</div><Progress wd='w-8'/>
                <div>Python</div><Progress wd='w-8'/>
              </div>
            </div>
            <div  className='mb-4'>
              <h3 className="font-semibold text-gray-800 mb-2 ">Otros</h3>
              <div className="grid grid-cols-2">
                <div>Mysql</div><Progress wd='w-20'/>
                <div>Git / Github</div><Progress wd='w-16'/>
                <div>NPM</div><Progress wd='w-16'/>
              </div>
            </div>
          </div>
          <div className="bg-gray-200 rounded-xl p-10 mt-5">
            <h2 className="text-2xl mb-2 text-blue-400">Contacto</h2>
            <div className="">
              <p className='flex'><BuildingOfficeIcon className='w-5 h-5 mr-2' />Torreon, Coahuila</p>
              <p className='flex'><PhoneIcon className='w-5 h-5 mr-2' />+52 872-139-8407</p>
              <p className='flex'><AtSymbolIcon className='w-5 h-5 mr-2' />graadev@gmail.com</p>
              <p className='flex'><ArchiveBoxIcon className='w-5 h-5 mr-2' />https://github.com/RussHide</p>
              <p className='flex'><GlobeAmericasIcon className='w-5 h-5 mr-2' /> dominguez.netlify.app</p>
            </div>
          </div>
        </div>
        <div className=" w-3/5 h-full pb-10 pr-10 pl-10">
          <div className='mb-5'>
            <h3 className='font-semibold  text-blue-400 text-2xl mb-2'>Perfil</h3>
            <p className='text-lg'>Me considero un desarrollador web full stack junior,
              apasionado por la tecnologia. Me gusta experimentar y jugar
              con diferentes tecnologías para poder aprender cosas nuevas
              sobre ellas. Actualmente estoy cursando el 8vo semestre en
              la licenciatura en sistemas computacionales administrativos
              en la UAdeC</p>
          </div>
          <div>
            <h3 className='font-semibold  text-blue-400 text-2xl mb-2'>Experiencia</h3>
            <div className="grid grid-cols-3 mb-6">
              <div className='font-semibold col-span-1'>2022 - Presente</div>
              <div className='font-semibold col-span-2'>UAdeC</div>
              <div className=''></div>
              <div className='col-span-2'>Mantenimiento, Torreon
                Como servicio social, hice un sistema de asistencia para mi facultad, contantemente se esta actualizando y es usado por los docentes de la misma</div>
            </div>
            <div className="grid grid-cols-3 mb-6">
              <div className='font-semibold col-span-1'>2022 - Presente</div>
              <div className='font-semibold col-span-2'>Instructor Particular</div>
              <div></div>
              <div className='col-span-2'>Instructor, Torreon
                Aunque no es un trabajo pagado, doy clases
                de programacion basica a una pequeña
                cantidad de personas</div>
            </div>
            <div className="grid grid-cols-3 mb-6">
              <div className='font-semibold col-span-1'>2021 - Presente</div>
              <div className='font-semibold col-span-2'>Fersi de la laguna</div>
              <div></div>
              <div className=' col-span-2'>Desarrollo, Torreon
                Participe en el desarrollo de un sistema de inventario para la empresa fersi en el lenguaje Java</div>
            </div>
          </div>
          <div>
            <h3 className='font-semibold text-2xl  text-blue-400 mb-2'>Formación</h3>
            <div className="grid grid-cols-3 mb-6">
              <div className='font-semibold col-span-1'> 2019 - Presente</div>
              <div className='font-semibold col-span-2'>UAdeC</div>
              <div></div>
              <div className='col-span-2'>Estudiante, Torreon
                Actualmente cursando el octavo semestre
                de licenciatura</div>
            </div>
            <div className="grid grid-cols-3 mb-6">
              <div className='font-semibold col-span-1'>2019 - Presente</div>
              <div className='font-semibold col-span-2'>Udemy / Platzi</div>
              <div></div>
              <div className='col-span-2'>Estudiante, Torreon
                Estudio autodidacta de tecnologias web</div>
            </div>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  )
}

export default App
