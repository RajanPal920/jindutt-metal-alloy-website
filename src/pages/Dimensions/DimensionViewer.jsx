import { useParams } from "react-router-dom";
import dimensions from "../../data/dimensions";

const DimensionViewer = () => {
  const { slug } = useParams();

  const dimension = dimensions.find((d) => d.slug === slug);

  if (!dimension) {
    return <h1>Dimension Not Found</h1>;
  }

  return (
    <div className="h-screen">
      <iframe
        src={dimension.pdf}
        title={dimension.name}
        className="w-full h-full"
      />
    </div>
  );
};

export default DimensionViewer;
