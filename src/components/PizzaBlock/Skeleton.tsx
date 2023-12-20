import ContentLoader from "react-content-loader";

export const Skeleton = () => (
  <ContentLoader
    className="pizza-block"
    speed={2}
    width={280}
    height={475}
    viewBox="0 0 280 475"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <rect x="0" y="262" rx="5" ry="5" width="280" height="30" />
    <rect x="204" y="217" rx="0" ry="0" width="8" height="1" />
    <rect x="-1" y="313" rx="10" ry="10" width="280" height="90" />
    <rect x="0" y="424" rx="5" ry="5" width="100" height="45" />
    <rect x="141" y="425" rx="15" ry="15" width="140" height="45" />
    <circle cx="132" cy="120" r="120" />
  </ContentLoader>
);
