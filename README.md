# Schema Journey

An interactive, therapeutic experience based on the Young Schema Questionnaire (YSQ).

## What is this?

Schema Journey transforms the clinical Young Schema Questionnaire into a beautiful, mindful experience. Instead of feeling like a test, it feels like a journey of self-discovery with warm visuals, smooth animations, ambient sounds, and thoughtful design.

## Features

- **118 Questions** covering 18 maladaptive schemas
- **Conversational Flow** - Questions presented one at a time, like a gentle conversation
- **Beautiful Animations** - Smooth transitions and visual feedback using Framer Motion
- **Ambient Audio** - Background tones and interactive sounds for each interaction
- **Warm Color Palette** - Animated gradient backgrounds that shift as you progress
- **Personalized Results** - Visual representation of your schema scores with insights

## Getting Started

Install dependencies:
```bash
npm install
```

Start the development server:
```bash
npm run dev
```

Build for production:
```bash
npm run build
```

## The Experience

1. **Landing Page** - A warm welcome that sets the intention
2. **Question Flow** - 118 questions presented conversationally with a 6-point scale
3. **Results** - Your top schemas visualized with descriptions and scores

## Customization

### Audio
The app uses the Web Audio API to generate ambient tones and interactive sounds. You can customize the frequencies and patterns in `src/hooks/useAudio.js`.

To add your own background music:
1. Add audio files to `public/audio/`
2. Update `AudioController.jsx` to load and play your audio files

### Visual Theme
All colors and animations are in `src/index.css`. The gradient background and particle effects can be customized in `src/components/Background.jsx`.

### Questions
The questions and schema data are in `src/data/questions.js`. Each schema has a color and description that you can customize.

## Schema Information

This questionnaire assesses 18 maladaptive schemas:

1. Emotional Deprivation
2. Abandonment
3. Mistrust/Abuse
4. Social Isolation
5. Defectiveness
6. Failure
7. Dependency/Incompetence
8. Vulnerability to Harm
9. Enmeshment
10. Subjugation
11. Self-Sacrifice
12. Fear of Losing Control
13. Emotional Constriction
14. Unrelenting Standards
15. Entitlement
16. Insufficient Self-Control
17. Approval-Seeking
18. Negativity/Pessimism

## Credits

Based on the Young Schema Questionnaire by Dr. Jeffrey Young.
Open source version from [mihaeu/maladaptive-schema-questionnaire](https://github.com/mihaeu/maladaptive-schema-questionnaire)

## License

MIT
