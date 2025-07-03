import React from 'react';

const Profile = () => {
  const user = {
    name: 'Alex Chen',
    university: 'Stanford University',
    major: 'Computer Science',
    dripScore: 15200,
    bio: 'Passionate about tech and streetwear. Founder of Stanford Streetwear Club.',
    achievements: [
      { name: 'Campus Style Leader', description: 'Top 10 dripper in Stanford' },
      { name: 'Brand Ambassador', description: 'Official ambassador for Nike' },
      { name: 'Drip Master', description: 'Achieved 15,000+ drip score' },
      { name: 'Style Influencer', description: '1,000+ followers on campus' },
      { name: 'Community Builder', description: 'Organized 10+ style events' },
      { name: 'Style Pioneer', description: 'Early adopter of DripVerse' },
      { name: 'Style Ambassador', description: 'Represented campus style internationally' }
    ],
    avatar: '/dripverse/images/profiles/alex_chen.jpg',
  };

  const posts = [
    {
      image: '/dripverse/images/posts/stanford_supreme_nike.jpg',
      caption: 'New Supreme x Nike fit drop! #StanfordStyle',
      likes: 1850,
      comments: 320,
      timestamp: '1 hour ago',
    },
    {
      image: '/dripverse/images/posts/stanford_gucci.jpg',
      caption: 'Just picked up the latest Gucci x Balenciaga collaboration! #LuxuryStreetwear',
      likes: 1650,
      comments: 280,
      timestamp: '2 hours ago',
    },
    {
      image: '/dripverse/images/posts/stanford_offwhite.jpg',
      caption: 'Dropped my new Off-White x Nike fit today! #StanfordStyle #StreetFashion',
      likes: 1450,
      comments: 240,
      timestamp: '3 hours ago',
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4">
      {/* Profile Header */}
      <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="relative w-40 h-40 md:w-64 md:h-64">
            <img
              src={user.avatar}
              alt="Profile"
              className="w-full h-full rounded-full object-cover border-4 border-white shadow"
            />
            <div className="absolute bottom-0 right-0 bg-white rounded-full p-1 shadow">
              <button className="bg-red-500 text-white rounded-full p-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                </svg>
              </button>
            </div>
          </div>
          <div>
            <div className="flex items-center gap-4 mb-4">
              <h1 className="text-3xl font-bold text-red-500">{user.name}</h1>
              <span className="text-2xl font-bold text-red-600">{user.dripScore}</span>
            </div>
            <div className="flex items-center gap-2 mb-2">
              <svg className="w-5 h-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              </svg>
              <span className="text-red-500">{user.university}</span>
            </div>
            <p className="text-red-500">{user.major}</p>
            <p className="mt-4 text-red-500">{user.bio}</p>
          </div>
        </div>
      </div>

      {/* Stats and Badges */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
        <div className="bg-white rounded-xl p-6 shadow">
          <h3 className="text-xl font-semibold text-red-500 mb-4">Stats</h3>
          <div className="grid grid-cols-2 gap-4">
            <div className="text-center">
              <div className="text-3xl font-bold text-red-600">1250</div>
              <div className="text-red-500">Followers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-red-600">250</div>
              <div className="text-red-500">Posts</div>
            </div>
          </div>
        </div>
        <div className="col-span-2 bg-white rounded-xl p-6 shadow">
          <h3 className="text-xl font-semibold text-red-500 mb-4">Badges</h3>
          <div className="flex flex-wrap gap-4">
            <div className="bg-red-500 text-white px-4 py-2 rounded-full text-sm font-medium">
              Campus Style Leader
            </div>
            <div className="bg-red-500 text-white px-4 py-2 rounded-full text-sm font-medium">
              Brand Ambassador
            </div>
            {/* Add more badges */}
          </div>
        </div>
      </div>

      {/* Style Feed */}
      <div>
        <h2 className="text-2xl font-bold text-red-500 mb-6">Style Feed</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {posts.map((post, index) => (
            <div key={index} className="bg-white rounded-xl shadow">
              <div className="aspect-video">
                <img
                  src={post.image}
                  alt={post.caption}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="p-4">
                <p className="text-sm text-gray-600">{post.caption}</p>
                <div className="flex items-center justify-between mt-2">
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-primary-500" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-gray-600">{post.likes}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                    <span className="text-gray-600">{post.comments}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Achievements */}
      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-6">Achievements</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {user.achievements.map((achievement, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold">{achievement.name}</h3>
                  <p className="text-gray-600">{achievement.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Profile;
