export const socialNetworks = [
    {
        id: 1,
        platform: 'youtube',
        type: 'video',
        platformType: 'free'
    },
    {
        id: 2,
        platform: 'facebook',
        type: 'story',
        platformType: 'free'
    },
    {
        id: 3,
        platform: 'tiktok',
        type: 'video',
        platformType: 'premium'
    },
    {
        id: 4,
        platform: 'instagram',
        type: 'story',
        platformType: 'free'
    },
    {
        id: 5,
        platform: 'whatsapp',
        type: 'message',
        platformType: 'premium'
    },
];

export const data = {
    U1: {
        user_id: '1',
        name: 'Juan Perez',
        age: 15,
        status: 'active',
        amountAvailable: 200,
        subscriptionType: 'premium',
        subscriptions: [1,2,4],
        notifications: [
            'youtube added a new video',
            'youtube added a new video',
            'youtube added a new video',
            'youtube added a new video',
        ],
    },
    U2: {
        user_id: '2',
        name: 'Maria Gonzalez',
        age: 18,
        status: 'inactive',
        amountAvailable: 20,
        subscriptionType: 'free',
        subscriptions: [1,3],
        notifications: [
            'instagram added a new story',
            'tiktok added a new video',
        ],
    },
    U3: {
        user_id: '3',
        name: 'Carlos Sanchez',
        age: 20,
        status: 'active',
        amountAvailable: 100,
        subscriptionType: 'free',
        subscriptions: [1,5],
        notifications: [
            'youtube added a new video',
            'facebook added a new story',
        ],
    },
    U4: {
        user_id: '4',
        name: 'Lucia Ramirez',
        age: 17,
        status: 'inactive',
        amountAvailable: 10,
        subscriptionType: 'premium',
        subscriptions: [4,3],
        notifications: ['tiktok added a new video'],
    },
    U5: {
        user_id: '5',
        name: 'Pedro Torres',
        age: 22,
        status: 'active',
        amountAvailable: 300,
        subscriptionType: 'premium',
        subscriptions: [3],
        notifications: [
            'youtube added a new video',
            'instagram added a new story',
        ],
    },
    U6: {
        user_id: '6',
        name: 'Sofia Martinez',
        age: 16,
        status: 'active',
        amountAvailable: 600,
        subscriptionType: 'free',
        subscriptions: [1,4],
        notifications: [
            'facebook added a new story',
            'whatsapp added a new message',
        ],
    },
};
