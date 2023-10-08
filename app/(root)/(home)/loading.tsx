import { Skeleton } from "@/components/ui/skeleton"


const Loading = () => {
  return (
    <main className="flex-center paddings mx-auto w-full max-w-screen-2xl flex-col">
      <section className="nav-padding w-full">
      <Skeleton className=" h-[274px] w-full rounded-lg  bg-slate-400" />

      </section>
      <section className="mt-6 flex w-full flex-col sm:mt-20">
      <Skeleton className="w-56 h-10" />
        <div className="mt-12 flex w-full flex-wrap justify-center gap-16 sm:justify-start">
        <Skeleton className="w-full h-[440px] sm:w-[356px] bg-slate-400" />
        <Skeleton className="w-full h-[440px] sm:w-[356px] bg-slate-400" />
        <Skeleton className="w-full h-[440px] sm:w-[356px] bg-slate-400" />
        </div>
      </section>
    </main>
  )
}

export default Loading