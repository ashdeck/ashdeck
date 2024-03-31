//@ts-nocheck
import {IConversation, IUser} from "@interfaces"

export const sample_chats_list = [
    {
        id: "1",
        name: "John",
        lastMessage: {
            id: 1,
            content: "Hello there!",
            timestamp: "2024-03-24T08:00:00Z",
            read: true,
            sender: {
                id: "user1",
                username: "john_doe",
                created_at: "2023-01-01T00:00:00Z",
                photo: "https://randomuser.me/api/portraits/men/81.jpg",
                is_admin: false,
                wallet_id: "wallet1",
                online: true
            },
            conversation: "conversation1"
        },
        last50Messages: [
            {
                id: 1,
                content: "Hello there!",
                timestamp: "2024-03-24T08:00:00Z",
                read: true,
                sender: {
                    id: "user1",
                    username: "john_doe",
                    created_at: "2023-01-01T00:00:00Z",
                    photo: "https://randomuser.me/api/portraits/men/43.jpg",
                    is_admin: false,
                    wallet_id: "wallet1",
                    online: true
                },
                conversation: "conversation1"
            },
        ]
    },
    {
        id: "2",
        name: "Alice",
        lastMessage: {
            id: 2,
            content: "Hi, how are you?",
            timestamp: "2024-03-23T15:30:00Z",
            read: false,
            sender: {
                id: "user2",
                username: "alice_smith",
                created_at: "2022-05-10T00:00:00Z",
                photo: "https://randomuser.me/api/portraits/women/81.jpg",
                is_admin: false,
                wallet_id: "wallet2",
                online: false
            },
            conversation: "conversation2"
        },
        last50Messages: [
            {
                id: 2,
                content: "Hi, how are you?",
                timestamp: "2024-03-23T15:30:00Z",
                read: false,
                sender: {
                    id: "user2",
                    username: "alice_smith",
                    created_at: "2022-05-10T00:00:00Z",
                    photo: "https://randomuser.me/api/portraits/women/43.jpg",
                    is_admin: false,
                    wallet_id: "wallet2",
                    online: true
                },
                conversation: "conversation2"
            },
        ]
    },
    {
        id: "1",
        name: "John",
        lastMessage: {
            id: 1,
            content: "Hello there!",
            timestamp: "2024-03-24T08:00:00Z",
            read: true,
            sender: {
                id: "user1",
                username: "john_doe",
                created_at: "2023-01-01T00:00:00Z",
                photo: "https://randomuser.me/api/portraits/men/81.jpg",
                is_admin: false,
                wallet_id: "wallet1",
                online: false
            },
            conversation: "conversation1"
        },
        last50Messages: [
            {
                id: 1,
                content: "Hello there!",
                timestamp: "2024-03-24T08:00:00Z",
                read: true,
                sender: {
                    id: "user1",
                    username: "john_doe",
                    created_at: "2023-01-01T00:00:00Z",
                    photo: "https://randomuser.me/api/portraits/men/43.jpg",
                    is_admin: false,
                    wallet_id: "wallet1",
                    online: true
                },
                conversation: "conversation1"
            },
        ]
    },
    {
        id: "2",
        name: "Alice",
        lastMessage: {
            id: 2,
            content: "Hi, how are you?",
            timestamp: "2024-03-23T15:30:00Z",
            read: false,
            sender: {
                id: "user2",
                username: "alice_smith",
                created_at: "2022-05-10T00:00:00Z",
                photo: "https://randomuser.me/api/portraits/women/81.jpg",
                is_admin: false,
                wallet_id: "wallet2",
                online: true
            },
            conversation: "conversation2"
        },
        last50Messages: [
            {
                id: 2,
                content: "Hi, how are you?",
                timestamp: "2024-03-23T15:30:00Z",
                read: false,
                sender: {
                    id: "user2",
                    username: "alice_smith",
                    created_at: "2022-05-10T00:00:00Z",
                    photo: "https://randomuser.me/api/portraits/women/43.jpg",
                    is_admin: false,
                    wallet_id: "wallet2",
                    online: true
                },
                conversation: "conversation2"
            },
        ]
    },
    {
        id: "1",
        name: "John",
        lastMessage: {
            id: 1,
            content: "Hello there!",
            timestamp: "2024-03-24T08:00:00Z",
            read: true,
            sender: {
                id: "user1",
                username: "john_doe",
                created_at: "2023-01-01T00:00:00Z",
                photo: "https://randomuser.me/api/portraits/men/81.jpg",
                is_admin: false,
                wallet_id: "wallet1",
                online: true
            },
            conversation: "conversation1"
        },
        last50Messages: [
            {
                id: 1,
                content: "Hello there!",
                timestamp: "2024-03-24T08:00:00Z",
                read: true,
                sender: {
                    id: "user1",
                    username: "john_doe",
                    created_at: "2023-01-01T00:00:00Z",
                    photo: "https://randomuser.me/api/portraits/men/43.jpg",
                    is_admin: false,
                    wallet_id: "wallet1",
                    online: true
                },
                conversation: "conversation1"
            },
        ]
    },
    {
        id: "2",
        name: "Alice",
        lastMessage: {
            id: 2,
            content: "Hi, how are you?",
            timestamp: "2024-03-23T15:30:00Z",
            read: false,
            sender: {
                id: "user2",
                username: "alice_smith",
                created_at: "2022-05-10T00:00:00Z",
                photo: "https://randomuser.me/api/portraits/women/81.jpg",
                is_admin: false,
                wallet_id: "wallet2",
                online: true
            },
            conversation: "conversation2"
        },
        last50Messages: [
            {
                id: 2,
                content: "Hi, how are you?",
                timestamp: "2024-03-23T15:30:00Z",
                read: false,
                sender: {
                    id: "user2",
                    username: "alice_smith",
                    created_at: "2022-05-10T00:00:00Z",
                    photo: "https://randomuser.me/api/portraits/women/43.jpg",
                    is_admin: false,
                    wallet_id: "wallet2",
                    online: true
                },
                conversation: "conversation2"
            },
        ]
    },
    {
        id: "1",
        name: "John",
        lastMessage: {
            id: 1,
            content: "Hello there!",
            timestamp: "2024-03-24T08:00:00Z",
            read: true,
            sender: {
                id: "user1",
                username: "john_doe",
                created_at: "2023-01-01T00:00:00Z",
                photo: "https://randomuser.me/api/portraits/men/81.jpg",
                is_admin: false,
                wallet_id: "wallet1",
                online: true
            },
            conversation: "conversation1"
        },
        last50Messages: [
            {
                id: 1,
                content: "Hello there!",
                timestamp: "2024-03-24T08:00:00Z",
                read: true,
                sender: {
                    id: "user1",
                    username: "john_doe",
                    created_at: "2023-01-01T00:00:00Z",
                    photo: "https://randomuser.me/api/portraits/men/43.jpg",
                    is_admin: false,
                    wallet_id: "wallet1",
                    online: true
                },
                conversation: "conversation1"
            },
        ]
    },
    {
        id: "2",
        name: "Alice",
        lastMessage: {
            id: 2,
            content: "Hi, how are you?",
            timestamp: "2024-03-23T15:30:00Z",
            read: false,
            sender: {
                id: "user2",
                username: "alice_smith",
                created_at: "2022-05-10T00:00:00Z",
                photo: "https://randomuser.me/api/portraits/women/81.jpg",
                is_admin: false,
                wallet_id: "wallet2",
                online: true
            },
            conversation: "conversation2"
        },
        last50Messages: [
            {
                id: 2,
                content: "Hi, how are you?",
                timestamp: "2024-03-23T15:30:00Z",
                read: false,
                sender: {
                    id: "user2",
                    username: "alice_smith",
                    created_at: "2022-05-10T00:00:00Z",
                    photo: "https://randomuser.me/api/portraits/women/43.jpg",
                    is_admin: false,
                    wallet_id: "wallet2",
                    online: true
                },
                conversation: "conversation2"
            },
        ]
    },
    {
        id: "1",
        name: "John",
        lastMessage: {
            id: 1,
            content: "Hello there!",
            timestamp: "2024-03-24T08:00:00Z",
            read: true,
            sender: {
                id: "user1",
                username: "john_doe",
                created_at: "2023-01-01T00:00:00Z",
                photo: "https://randomuser.me/api/portraits/men/81.jpg",
                is_admin: false,
                wallet_id: "wallet1",
                online: true
            },
            conversation: "conversation1"
        },
        last50Messages: [
            {
                id: 1,
                content: "Hello there!",
                timestamp: "2024-03-24T08:00:00Z",
                read: true,
                sender: {
                    id: "user1",
                    username: "john_doe",
                    created_at: "2023-01-01T00:00:00Z",
                    photo: "https://randomuser.me/api/portraits/men/43.jpg",
                    is_admin: false,
                    wallet_id: "wallet1",
                    online: true
                },
                conversation: "conversation1"
            },
        ]
    },
    {
        id: "2",
        name: "Alice",
        lastMessage: {
            id: 2,
            content: "Hi, how are you?",
            timestamp: "2024-03-23T15:30:00Z",
            read: false,
            sender: {
                id: "user2",
                username: "alice_smith",
                created_at: "2022-05-10T00:00:00Z",
                photo: "https://randomuser.me/api/portraits/women/81.jpg",
                is_admin: false,
                wallet_id: "wallet2",
                online: true
            },
            conversation: "conversation2"
        },
        last50Messages: [
            {
                id: 2,
                content: "Hi, how are you?",
                timestamp: "2024-03-23T15:30:00Z",
                read: false,
                sender: {
                    id: "user2",
                    username: "alice_smith",
                    created_at: "2022-05-10T00:00:00Z",
                    photo: "https://randomuser.me/api/portraits/women/43.jpg",
                    is_admin: false,
                    wallet_id: "wallet2",
                    online: true
                },
                conversation: "conversation2"
            },
        ]
    },
    {
        id: "1",
        name: "John",
        lastMessage: {
            id: 1,
            content: "Hello there!",
            timestamp: "2024-03-24T08:00:00Z",
            read: true,
            sender: {
                id: "user1",
                username: "john_doe",
                created_at: "2023-01-01T00:00:00Z",
                photo: "https://randomuser.me/api/portraits/men/81.jpg",
                is_admin: false,
                wallet_id: "wallet1",
                online: true
            },
            conversation: "conversation1"
        },
        last50Messages: [
            {
                id: 1,
                content: "Hello there!",
                timestamp: "2024-03-24T08:00:00Z",
                read: true,
                sender: {
                    id: "user1",
                    username: "john_doe",
                    created_at: "2023-01-01T00:00:00Z",
                    photo: "https://randomuser.me/api/portraits/men/43.jpg",
                    is_admin: false,
                    wallet_id: "wallet1",
                    online: true
                },
                conversation: "conversation1"
            },
        ]
    },
    {
        id: "2",
        name: "Alice",
        lastMessage: {
            id: 2,
            content: "Hi, how are you?",
            timestamp: "2024-03-23T15:30:00Z",
            read: false,
            sender: {
                id: "user2",
                username: "alice_smith",
                created_at: "2022-05-10T00:00:00Z",
                photo: "https://randomuser.me/api/portraits/women/81.jpg",
                is_admin: false,
                wallet_id: "wallet2",
                online: true
            },
            conversation: "conversation2"
        },
        last50Messages: [
            {
                id: 2,
                content: "Hi, how are you?",
                timestamp: "2024-03-23T15:30:00Z",
                read: false,
                sender: {
                    id: "user2",
                    username: "alice_smith",
                    created_at: "2022-05-10T00:00:00Z",
                    photo: "https://randomuser.me/api/portraits/women/43.jpg",
                    is_admin: false,
                    wallet_id: "wallet2",
                    online: true
                },
                conversation: "conversation2"
            },
        ]
    },
    {
        id: "1",
        name: "John",
        lastMessage: {
            id: 1,
            content: "Hello there!",
            timestamp: "2024-03-24T08:00:00Z",
            read: true,
            sender: {
                id: "user1",
                username: "john_doe",
                created_at: "2023-01-01T00:00:00Z",
                photo: "https://randomuser.me/api/portraits/men/81.jpg",
                is_admin: false,
                wallet_id: "wallet1",
                online: true
            },
            conversation: "conversation1"
        },
        last50Messages: [
            {
                id: 1,
                content: "Hello there!",
                timestamp: "2024-03-24T08:00:00Z",
                read: true,
                sender: {
                    id: "user1",
                    username: "john_doe",
                    created_at: "2023-01-01T00:00:00Z",
                    photo: "https://randomuser.me/api/portraits/men/43.jpg",
                    is_admin: false,
                    wallet_id: "wallet1",
                    online: true
                },
                conversation: "conversation1"
            },
        ]
    },
    {
        id: "2",
        name: "Alice",
        lastMessage: {
            id: 2,
            content: "Hi, how are you?",
            timestamp: "2024-03-23T15:30:00Z",
            read: false,
            sender: {
                id: "user2",
                username: "alice_smith",
                created_at: "2022-05-10T00:00:00Z",
                photo: "https://randomuser.me/api/portraits/women/81.jpg",
                is_admin: false,
                wallet_id: "wallet2",
                online: true
            },
            conversation: "conversation2"
        },
        last50Messages: [
            {
                id: 2,
                content: "Hi, how are you?",
                timestamp: "2024-03-23T15:30:00Z",
                read: false,
                sender: {
                    id: "user2",
                    username: "alice_smith",
                    created_at: "2022-05-10T00:00:00Z",
                    photo: "https://randomuser.me/api/portraits/women/43.jpg",
                    is_admin: false,
                    wallet_id: "wallet2",
                    online: true
                },
                conversation: "conversation2"
            },
        ]
    },

];

export const sample_user_data: IUser = {
    id: "user1",
    username: "jesulonimii",
    created_at: "2023-01-01T00:00:00Z",
    photo: "https://avatars.githubusercontent.com/u/70331030?v=4",
    is_admin: false,
    wallet_id: "5TmLhap6XiD3dSYjpbBje38CbpmJxtMxXYKBiHWMHrzb",
    online: true
}


export const sample_group_chat: IConversation = {
    last50Messages: [
        {
            content: "Hello, how are you?",
            read: true,
            id: 111,
            timestamp: "1992-03-08T15:13:16.688Z",
            sender: {
                id: "1234",
                username: "John Doe",
                created_at: "1992-03-08T15:10:16.688Z",
                photo: "https://randomuser.me/api/portraits/men/81.jpg",
                is_admin: false,
                wallet_id: "1234",
                online: true,
            },
            conversation: "Hello, how are you?",
        },
        {
            content: "I'm fine, thank you.",
            read: true,
            id: 222,
            timestamp: "1992-03-08T15:12:16.688Z",
            sender: {
                id: "1234",
                username: "Lisa Doe",
                created_at: "1992-03-08T15:10:16.688Z",
                photo: "https://randomuser.me/api/portraits/women/82.jpg",
                is_admin: false,
                wallet_id: "1234",
                online: true,
            },
            conversation: "",
        },
        {
            content: "How are you?",
            read: true,
            id: 333,
            timestamp: "1992-03-08T15:11:16.688Z",
            sender: {
                id: "1234",
                username: "jesulonimii",
                created_at: "1992-03-08T15:10:16.688Z",
                photo: "https://randomuser.me/api/portraits/men/83.jpg",
                is_admin: false,
                wallet_id: "1234",
                online: true,
            },
            conversation: "",
        },
        {
            content: "I'm good, thank you.",
            read: true,
            id: 444,
            timestamp: "1992-03-08T15:10:16.688Z",
            sender: {
                id: "1234",
                username: "Jane Doe",
                created_at: "1992-03-08T15:10:16.688Z",
                photo: "https://randomuser.me/api/portraits/women/84.jpg",
                is_admin: false,
                wallet_id: "1234",
                online: true,
                token: "",
                publicKey: "",
            },
            conversation: "",
        },
    ],
    id: "001",
    name: "Solgram Group Chat",
    lastMessage: {
        content: "Hello, how are you?",
        read: true,
        id: 0,
        timestamp: "",
        sender: {
            id: "1234",
            username: "John Doe",
            created_at: "1992-03-08T15:10:16.688Z",
            photo: "/logo.png",
            is_admin: false,
            wallet_id: "1234",
            online: false,
            token: "1234",
            publicKey: "1234",
        },
        conversation: "",
    },
    sender: {
        id: "",
        username: "",
        created_at: "",
        photo: "",
        is_admin: false,
        wallet_id: "",
        online: false,
    },
    is_group: true,
}
