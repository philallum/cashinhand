# Local Help Hub

A platform connecting people with skills to those who need help, built with Supabase and [Your Frontend Framework].

## Features

- User profiles with skills and availability management
- Task posting and management system
- Real-time messaging between users
- Skill-based matching system

## Tech Stack

- Backend: Supabase (PostgreSQL)
- Frontend: [Your Frontend Framework]
- Authentication: Supabase Auth
- Real-time: Supabase Realtime

## Getting Started

1. Clone the repository:
```bash
git clone [your-repo-url]
cd local-help-hub
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
Create a `.env` file in the root directory and add:
```bash
SUPABASE_URL=your_supabase_url
SUPABASE_ANON_KEY=your_supabase_anon_key
```

4. Run the development server:
```bash
npm run dev
```

## Database Schema

The application uses the following main tables:
- profiles: User profiles extending Supabase auth
- skills: Available skills in the system
- user_skills: Junction table for user-skill relationships
- user_availability: User availability schedules
- tasks: Task listings
- messages: Direct messaging system

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.