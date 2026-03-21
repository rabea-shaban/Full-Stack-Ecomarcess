import { Link } from "react-router-dom";
import Container from "../../components/ui/Container";

const NotFound = () => {
  return (
    <Container>
      {/* Breadcrumb */}
      <p className="text-sm text-gray-400 mt-6 mb-10">
        Home / 404 Error
      </p>

      {/* Content */}
      <div className="flex flex-col items-center justify-center text-center py-20">
        
        {/* Title */}
        <h1 className="text-[80px] md:text-[120px] font-bold mb-6">
          404 Not Found
        </h1>

        {/* Description */}
        <p className="text-gray-500 mb-8">
          Your visited page not found. You may go home page.
        </p>

        {/* Button */}
        <Link
          to="/"
          className="bg-red-500 text-white px-8 py-3 rounded-md hover:bg-red-600 transition"
        >
          Back to home page
        </Link>
      </div>
    </Container>
  );
};

export default NotFound;