/* eslint-disable @next/next/no-img-element */
// components/PostHeader.tsx
interface PostHeaderProps {
  coverUrl: string
  title: string
  description: string
}

export function PostHeader({ coverUrl, title, description }: PostHeaderProps) {
  return (
    <div className="flex flex-col items-center mb-4 md:mb-16">
      <img
        src={coverUrl}
        alt=""
        className="object-cover absolute top-0 -z-10 image-efect left-0 aspect-auto w-full h-[26rem] rounded-md"
      />
      <div className="text-4xl font-bold mt-24 text-center w-full text-wrap">
        <span className="title-mask h-full"></span>
        <h2 className="text-balance max-lg:px-2">{title}</h2>
      </div>
      <strong className="max-w-3xl max-lg:w-10/12 md:text-lg text-center mt-8">
        <span>{description}</span>
      </strong>
    </div>
  )
}
