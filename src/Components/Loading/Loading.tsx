export default function LoadingSkelenton() {
  return (
    <article className="md:max-w-[804px] md:h-[257px] w-full h-full bg-bguser-500 rounded-xl p-6 flex items-center justify-center gap-5 animate-pulse">
      <div className="size-[90%] flex items-center justify-center gap-4 flex-col md:flex-row">
        {/* Placeholder da imagem */}
        <div className="size-[220px] rounded-full bg-gray-300 dark:bg-gray-600" />
        
        {/* Placeholder do conteúdo */}
        <div className="flex flex-col gap-4 w-full">
          {/* Placeholder do título */}
          <div className="h-6 bg-gray-300 dark:bg-gray-600 rounded w-1/3" />
          
          {/* Placeholders do texto */}
          <div className="space-y-3">
            <div className="h-3 bg-gray-300 dark:bg-gray-600 rounded w-full" />
            <div className="h-3 bg-gray-300 dark:bg-gray-600 rounded w-5/6" />
            <div className="h-3 bg-gray-300 dark:bg-gray-600 rounded w-4/6" />
            <div className="h-3 bg-gray-300 dark:bg-gray-600 rounded w-3/6" />
          </div>
        </div>
      </div>
    </article>
  )
}