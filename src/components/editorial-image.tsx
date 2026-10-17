type EditorialImageProps = {
  src: string;
  alt: string;
  caption: string;
};

export function EditorialImage({ src, alt, caption }: EditorialImageProps) {
  return <figure className="editorial-image">
    <img src={src} alt={alt} width={1536} height={1024} loading="lazy" decoding="async" />
    <figcaption><span>{caption}</span><span>AI-generated illustration</span></figcaption>
  </figure>;
}