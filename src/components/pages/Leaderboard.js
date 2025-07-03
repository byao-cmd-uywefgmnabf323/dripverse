import React from 'react';

const Leaderboard = () => {
  const topUsers = [
    {
      rank: 1,
      user: {
        name: 'Alex Chen',
        university: 'Stanford University',
        dripScore: 15200,
        avatar: '/dripverse/images/profiles/alex_chen.jpg',
      },
    },
    {
      rank: 2,
      user: {
        name: 'Emily Johnson',
        university: 'UC Berkeley',
        dripScore: 14800,
        avatar: '/dripverse/images/profiles/emily_johnson.jpg',
      },
    },
    {
      rank: 3,
      user: {
        name: 'Mike Thompson',
        university: 'UCLA',
        dripScore: 14500,
        avatar: '/dripverse/images/profiles/mike_thompson.jpg',
      },
    },
    {
      rank: 4,
      user: {
        name: 'Sarah Williams',
        university: 'NYU',
        dripScore: 14200,
        avatar: '/dripverse/images/profiles/sarah_williams.jpg',
      },
    },
    {
      rank: 5,
      user: {
        name: 'David Kim',
        university: 'Columbia University',
        dripScore: 13900,
        avatar: '/dripverse/images/profiles/david_kim.jpg',
      },
    },
    {
      rank: 6,
      user: {
        name: 'Rachel Lee',
        university: 'University of Chicago',
        dripScore: 13600,
        avatar: '/dripverse/images/profiles/rachel_lee.jpg',
      },
    },
    {
      rank: 7,
      user: {
        name: 'James Brown',
        university: 'University of Michigan',
        dripScore: 13300,
        avatar: '/dripverse/images/profiles/james_brown.jpg',
      },
    },
    {
      rank: 8,
      user: {
        name: 'Jessica Chen',
        university: 'Harvard University',
        dripScore: 13000,
        avatar: '/dripverse/images/profiles/jessica_chen.jpg',
      },
    },
    {
      rank: 9,
      user: {
        name: 'William Tan',
        university: 'MIT',
        dripScore: 12700,
        avatar: '/dripverse/images/profiles/william_tan.jpg',
      },
    },
    {
      rank: 10,
      user: {
        name: 'Sophia Garcia',
        university: 'University of Texas',
        dripScore: 12400,
        avatar: '/dripverse/images/profiles/sophia_garcia.jpg',
      },
    }
  ];

  const topUniversities = [
    {
      name: 'Stanford University',
      dripScore: 150000,
      logo: '/dripverse/images/universities/stanford.png',
    },
    {
      name: 'UC Berkeley',
      dripScore: 145000,
      logo: '/dripverse/images/universities/berkeley.png',
    },
    {
      name: 'UCLA',
      dripScore: 140000,
      logo: '/dripverse/images/universities/ucla.png',
    },
    {
      name: 'NYU',
      dripScore: 135000,
      logo: '/dripverse/images/universities/nyu.png',
    },
    {
      name: 'Columbia University',
      dripScore: 130000,
      logo: '/dripverse/images/universities/columbia.png',
    },
    {
      name: 'University of Chicago',
      dripScore: 125000,
      logo: '/dripverse/images/universities/chicago.png',
    },
    {
      name: 'University of Michigan',
      dripScore: 120000,
      logo: '/dripverse/images/universities/michigan.png',
    },
    {
      name: 'Harvard University',
      dripScore: 115000,
      logo: '/dripverse/images/universities/harvard.png',
    },
    {
      name: 'MIT',
      dripScore: 110000,
      logo: '/dripverse/images/universities/mit.png',
    },
    {
      name: 'University of Washington',
      dripScore: 105000,
      logo: '/dripverse/images/universities/washington.png',
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4">
      {/* Top Users Section */}
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-red-500 mb-6">Top Drippers</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {topUsers.map((user, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg">
              <div className="p-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center">
                    <span className="text-2xl font-bold text-red-500">#{user.rank}</span>
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <img
                        src={user.user.avatar}
                        alt={user.user.name}
                        className="w-10 h-10 rounded-full"
                      />
                      <div>
                        <h3 className="font-medium text-red-500">{user.user.name}</h3>
                        <p className="text-sm text-red-500">{user.user.university}</p>
                      </div>
                    </div>
                    <div className="mt-2 flex items-center gap-2">
                      <span className="text-2xl font-bold text-red-600">
                        {user.user.dripScore}
                      </span>
                      <span className="text-sm text-red-500">DripScore</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Top Universities Section */}
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-red-500 mb-6">Top Campuses</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {topUniversities.map((university, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg">
              <div className="p-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center">
                    <span className="text-2xl font-bold text-red-500">#{index + 1}</span>
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <img
                        src={university.logo}
                        alt={university.name}
                        className="w-10 h-10 rounded-full"
                      />
                      <div>
                        <h3 className="font-medium text-red-500">{university.name}</h3>
                      </div>
                    </div>
                    <div className="mt-2 flex items-center gap-2">
                      <span className="text-2xl font-bold text-red-600">
                        {university.dripScore}
                      </span>
                      <span className="text-sm text-red-500">Campus DripScore</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Trending Fits Section */}
      <div>
        <h2 className="text-3xl font-bold mb-6">Trending Fits</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Add trending fits grid */}
        </div>
      </div>
    </div>
  );
};

export default Leaderboard;
