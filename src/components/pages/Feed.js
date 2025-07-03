import React, { useState } from 'react';
import { Link } from 'react-router-dom';


const Feed = () => {
  const [selectedUniversity, setSelectedUniversity] = useState('All Universities');

  const posts = [
    {
      user: {
        name: 'Alex Chen',
        university: 'Stanford University',
        dripScore: 12345,
        avatar: '/dripverse/images/profiles/alex_chen.jpg',
      },
      content: 'Just got my hands on the new Yeezy Boost 350 V2! 🎉 #StanfordStyle #SneakerHeads',
      image: '/dripverse/images/posts/stanford_yeezy.jpg',
      likes: 1850,
      comments: 320,
      timestamp: '1 hour ago',
    },
    {
      user: {
        name: 'Emily Johnson',
        university: 'UC Berkeley',
        dripScore: 11200,
        avatar: '/dripverse/images/profiles/emily_johnson.jpg',
      },
      content: 'Dropped my new Off-White x Nike fit today! 🛍️ #CalStyle #StreetFashion',
      image: '/dripverse/images/posts/berkeley_offwhite.jpg',
      likes: 1650,
      comments: 280,
      timestamp: '2 hours ago',
    },
    {
      user: {
        name: 'Mike Thompson',
        university: 'UCLA',
        dripScore: 10800,
        avatar: '/dripverse/images/profiles/mike_thompson.jpg',
      },
      content: 'New fit alert! 🚨 Just picked up the latest Gucci x Balenciaga collaboration. #UCLACrew #LuxuryStreetwear',
      image: '/dripverse/images/posts/ucla_gucci.jpg',
      likes: 1450,
      comments: 240,
      timestamp: '3 hours ago',
    },
    {
      user: {
        name: 'Sarah Williams',
        university: 'NYU',
        dripScore: 11500,
        avatar: '/dripverse/images/profiles/sarah_williams.jpg',
      },
      content: 'Dropped my new Dior x Saint Laurent fit today! 🛍️ #NYUStyle #Fashionista',
      image: '/dripverse/images/posts/nyu_dior.jpg',
      likes: 1700,
      comments: 290,
      timestamp: '4 hours ago',
    },
    {
      user: {
        name: 'David Kim',
        university: 'Columbia University',
        dripScore: 12100,
        avatar: '/dripverse/images/profiles/david_kim.jpg',
      },
      content: 'Just got my hands on the new Prada x Adidas collaboration! 🎉 #ColumbiaStyle #LuxurySportswear',
      image: '/dripverse/images/posts/columbia_prada.jpg',
      likes: 1900,
      comments: 310,
      timestamp: '5 hours ago',
    },
    {
      user: {
        name: 'Rachel Lee',
        university: 'University of Chicago',
        dripScore: 10900,
        avatar: '/dripverse/images/profiles/rachel_lee.jpg',
      },
      content: 'Dropped my new Balenciaga x Crocs fit today! 🛍️ #ChicagoStyle #ComfortFashion',
      image: '/dripverse/images/posts/chicago_balenciaga.jpg',
      likes: 1500,
      comments: 260,
      timestamp: '6 hours ago',
    },
    {
      user: {
        name: 'James Brown',
        university: 'University of Michigan',
        dripScore: 11800,
        avatar: '/dripverse/images/profiles/james_brown.jpg',
      },
      content: 'New fit alert! 🚨 Just picked up the latest Louis Vuitton x Nike collaboration. #MichiganStyle #LuxuryAthletic',
      image: '/dripverse/images/posts/michigan_louisvuitton.jpg',
      likes: 1680,
      comments: 270,
      timestamp: '7 hours ago',
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4">
      {/* Filters */}
      <div className="mb-8">
        <div className="flex items-center gap-4">
          <button 
            onClick={() => setSelectedUniversity('All Universities')}
            className={`bg-white border border-gray-300 rounded-lg px-4 py-2 text-sm font-medium ${
              selectedUniversity === 'All Universities' ? 'text-red-500' : 'text-gray-500'
            }`}
          >
            All Universities
          </button>
          <button 
            onClick={() => setSelectedUniversity('Stanford University')}
            className={`bg-white border border-gray-300 rounded-lg px-4 py-2 text-sm font-medium ${
              selectedUniversity === 'Stanford University' ? 'text-red-500' : 'text-gray-500'
            }`}
          >
            Stanford
          </button>
          <button 
            onClick={() => setSelectedUniversity('UC Berkeley')}
            className={`bg-white border border-gray-300 rounded-lg px-4 py-2 text-sm font-medium ${
              selectedUniversity === 'UC Berkeley' ? 'text-red-500' : 'text-gray-500'
            }`}
          >
            Berkeley
          </button>
          <button 
            onClick={() => setSelectedUniversity('UCLA')}
            className={`bg-white border border-gray-300 rounded-lg px-4 py-2 text-sm font-medium ${
              selectedUniversity === 'UCLA' ? 'text-red-500' : 'text-gray-500'
            }`}
          >
            UCLA
          </button>
        </div>
      </div>

      {/* Filtered Posts Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts
          .filter(post => selectedUniversity === 'All Universities' || post.user.university === selectedUniversity)
          .map((post, index) => (
          <div key={index} className="bg-white rounded-xl shadow">
            <div className="p-4 border-b border-gray-200">
              <div className="flex items-center gap-4">
                <img
                  src={post.user.avatar}
                  alt={post.user.name}
                  className="w-10 h-10 rounded-full"
                />
                <div>
                  <Link to={`/post/${index}`} className="font-medium text-red-600 hover:text-red-800">{post.user.name}</Link>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <span>{post.user.university}</span>
                    <span className="text-primary-600">{post.user.dripScore}</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative aspect-video overflow-hidden p-4">
              <img
                src={post.image}
                alt={post.content}
                className="w-full h-full object-contain"
              />
            </div>
            <div className="p-4">
              <p className="text-gray-700 mb-4">{post.content}</p>
              <div className="flex items-center justify-between text-sm text-gray-600">
                <div className="flex items-center gap-4">
                  <button className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-primary-500" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>{post.likes} likes</span>
                  </button>
                  <button className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                    <span>{post.comments} comments</span>
                  </button>
                </div>
                <span className="text-gray-500">{post.timestamp}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export { Feed, PostDetail };

// Add a route for post detail view
const PostDetail = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const post = state?.post;

  if (!post) {
    navigate('/feed');
    return null;
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <button 
        onClick={() => navigate('/feed', { state: { fromPostDetail: true } })}
        className="mb-4 p-2 bg-white border border-gray-300 rounded-lg text-gray-600 hover:bg-gray-50"
      >
        ← Back to Feed
      </button>
      
      <div className="bg-white rounded-xl shadow">
        <div className="p-4 border-b border-gray-200">
          <div className="flex items-center gap-4">
            <img
              src={post.user.avatar}
              alt={post.user.name}
              className="w-12 h-12 rounded-full"
            />
            <div>
              <h2 className="text-2xl font-bold text-red-600">{post.user.name}</h2>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <span>{post.user.university}</span>
                <span className="text-primary-600">{post.user.dripScore}</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="relative aspect-video overflow-hidden p-4">
          <img
            src={post.image}
            alt={post.content}
            className="w-full h-full object-contain"
          />
        </div>
        
        <div className="p-4">
          <p className="text-gray-700 mb-4">{post.content}</p>
          
          <div className="mb-6">
            <div className="flex items-center gap-4 mb-2">
              <button className="flex items-center gap-2">
                <svg className="w-5 h-5 text-primary-500" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>{post.likes} likes</span>
              </button>
              <button className="flex items-center gap-2">
                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
                <span>{post.comments} comments</span>
              </button>
            </div>
            <span className="text-gray-500">{post.timestamp}</span>
          </div>

          <div className="mt-6">
            <h3 className="text-lg font-semibold mb-4">Comments</h3>
            <div className="space-y-4">
              {/* Add your comments here */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


