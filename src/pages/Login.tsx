
import AuthForm from '../components/AuthForm';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-50 pt-12 pb-20">
        <div className="art-container">
          <div className="mb-8">
            <Link to="/" className="text-art-purple hover:underline flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="19" y1="12" x2="5" y2="12"></line>
                <polyline points="12 19 5 12 12 5"></polyline>
              </svg>
              <span className="ml-2">Back to Home</span>
            </Link>
          </div>

          <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
            <div className="md:flex">
              <div className="md:shrink-0 hidden md:block">
                <img 
                  className="h-full w-48 object-cover" 
                  src="https://images.unsplash.com/photo-1579783901586-d88db74b4fe4"
                  alt="Art" 
                />
              </div>
              <div className="p-8 w-full">
                <AuthForm />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Login;
