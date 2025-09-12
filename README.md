# Student SafeSpace 

## 🌟 Mental Health Support Platform for Students

A comprehensive, privacy-first mental health platform designed specifically for college students. Student SafeSpace provides anonymous support, professional counseling access, and wellness tracking in a stigma-free environment.

![Student SafeSpace Hero](src/assets/hero-mental-health.jpg)

## ✨ Features

### 🔐 Privacy & Anonymity First
- **Anonymous by default** - Ephemeral handles that rotate per session
- **End-to-end encryption** for all communications
- **Optional identity reveal** with explicit consent and audit logging
- **GDPR compliant** data handling

### 🧠 Mental Health Screening & Triage
- **PHQ-9 Depression Assessment** - Validated screening tool
- **GAD-7 Anxiety Assessment** - Professional anxiety evaluation  
- **Intelligent triage mapping** to 7 specialized problem interfaces
- **Progress tracking** with mood journaling and goal setting

### 💬 Anonymous Peer Support
- **Real-time anonymous chat** with other students facing similar challenges
- **Moderated safe spaces** with automated content filtering
- **Problem-specific chat rooms** (relationships, career anxiety, academic stress, etc.)
- **Ephemeral messaging** with 30-day auto-deletion

### 🩺 Professional Counselor Access
- **Anonymous booking system** with optional identity reveal
- **Multiple contact methods** - phone, video, or in-person
- **Crisis triage** with immediate professional routing
- **24/7 availability** for urgent mental health needs

### 📚 Curated Resource Library
- **Problem-specific resources** (videos, audio guides, articles, PDFs)
- **Evidence-based content** from mental health professionals
- **Multilingual support** (English, Hindi, Kashmiri, Urdu)
- **Offline accessibility** with service worker caching

### 📊 Wellness Tracking & Analytics
- **Mood journaling** with pattern recognition
- **Goal setting and progress monitoring**
- **Assessment history** with trend analysis
- **Personalized insights** and recommendations

### 🌍 Cultural Sensitivity & Accessibility
- **Regional language support** including Kashmiri and Hindi
- **Cultural mental health considerations** for South Asian students
- **WCAG AA accessibility** compliance
- **Reduced motion support** for users with vestibular disorders

## 🎯 Supported Problem Areas

1. **Relationship Issues** - Breakups, family conflicts, friendship challenges
2. **Placement & Career Anxiety** - Job search stress, interview anxiety, career planning
3. **Academic Stress** - Exam pressure, performance anxiety, study-life balance
4. **Family & Personal Issues** - Home conflicts, identity issues, personal growth
5. **Sleep & Burnout** - Sleep disorders, exhaustion, recovery strategies
6. **Social Isolation** - Loneliness, social anxiety, campus integration
7. **General & Mixed Concerns** - Multiple issues requiring flexible support

## 🛠 Technology Stack

### Frontend
- **React 18** with TypeScript for type safety
- **Vite** for fast development and optimized builds
- **Tailwind CSS** with custom design system
- **Framer Motion** for smooth animations and interactions
- **Shadcn/UI** components with extensive customization

### State Management & i18n
- **Zustand** for lightweight, performant state management
- **React-i18next** for comprehensive internationalization
- **Persistent storage** with localStorage integration

### Audio & UX Enhancements
- **Web Audio API** for calming ambient sounds
- **Blob cursor** with reduced-motion fallbacks
- **Glassmorphism design** with ambient visual effects
- **Responsive design** optimized for all devices

### Backend Integration Ready
- **Supabase** integration prepared for:
  - Anonymous authentication
  - Real-time chat functionality
  - Encrypted data storage
  - Row-level security policies
- **API contracts** defined for counselor booking
- **Webhook support** for crisis intervention

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd student-safespace
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env
   # Edit .env with your configuration
   ```

4. **Start development server**
   ```bash
   npm run dev
   ```

5. **Open in browser**
   ```
   http://localhost:8080
   ```

### Environment Variables

```env
VITE_SUPABASE_URL=your_supabase_project_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
VITE_API_BASE_URL=https://api.your-domain.com
TWILIO_ACCOUNT_SID=your_twilio_sid
TWILIO_AUTH_TOKEN=your_twilio_token
TWILIO_PROXY_SERVICE_SID=your_proxy_service_sid
```

## 📱 User Journey

1. **Landing & Language Selection** - Choose preferred language
2. **Privacy Consent** - Understand data handling and anonymity
3. **Mental Health Screening** - Complete PHQ-9 and GAD-7 assessments
4. **Triage & Routing** - Get matched to appropriate support interface
5. **Support Access** - Join peer chat, book counselor, access resources
6. **Progress Tracking** - Monitor wellness journey with insights

## 🔒 Privacy & Security

### Data Protection
- **Anonymous tokens** instead of personal identifiers
- **AES-256 encryption** for sensitive data at rest
- **TLS encryption** for all data in transit
- **Automatic data deletion** after specified retention periods

### Crisis Intervention
- **Automated risk assessment** during screening
- **Immediate professional routing** for high-risk users
- **24/7 crisis helpline** integration
- **Emergency contact protocols** clearly displayed

### Compliance
- **HIPAA considerations** for health data
- **Student privacy** protections (FERPA compliance ready)
- **International privacy laws** (GDPR, local regulations)
- **Institutional review** processes supported

## 🌐 Internationalization

### Supported Languages
- **English** (en) - Default
- **Hindi** (hi) - हिंदी
- **Kashmiri** (ks) - کٲشُر  
- **Urdu** (ur) - اردو (planned)

### Cultural Adaptations
- **Region-specific resources** for South Asian mental health
- **Cultural stigma considerations** in messaging and support
- **Family dynamics awareness** in relationship guidance
- **Academic pressure context** specific to Indian/South Asian education systems

## 🧪 Testing

### Unit Tests
```bash
npm run test
```

### E2E Tests (Optional)
```bash
npm run test:e2e
```

### Accessibility Testing
```bash
npm run test:a11y
```

## 📦 Build & Deployment

### Production Build
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

### Docker Deployment
```bash
docker build -t student-safespace .
docker run -p 8080:8080 student-safespace
```

## 🤝 Contributing

We welcome contributions that improve mental health support for students. Please read our [Contributing Guidelines](CONTRIBUTING.md) and [Code of Conduct](CODE_OF_CONDUCT.md).

### Development Guidelines
- **Mental health sensitivity** in all communications
- **Privacy-first** development approach
- **Accessibility** considerations in all UI changes
- **Cultural sensitivity** for diverse student populations
- **Evidence-based** approaches to mental health features

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Crisis Resources

**If you or someone you know is in immediate danger, please contact:**

- **National Suicide Prevention Lifeline**: 988
- **Crisis Text Line**: Text HOME to 741741
- **International Association for Suicide Prevention**: https://www.iasp.info/resources/Crisis_Centres/

## 📞 Support & Contact

- **Technical Issues**: [GitHub Issues](https://github.com/your-repo/issues)
- **Mental Health Resources**: [Resources Page](/resources)
- **Privacy Concerns**: privacy@student-safespace.org
- **General Support**: support@student-safespace.org

---

**Remember: This platform provides peer support and professional referrals, but is not a replacement for emergency mental health services. Always seek immediate professional help in crisis situations.**

## 🎯 Roadmap

### Immediate (v1.0)
- [x] Core screening and triage system
- [x] Anonymous peer chat functionality  
- [x] Counselor booking system
- [x] Resource library with search
- [x] Progress tracking and mood journaling
- [x] Multilingual support (EN, HI, KS)

### Short-term (v1.1-1.2)
- [ ] Supabase backend integration
- [ ] Real-time chat with WebSocket
- [ ] Advanced crisis detection algorithms
- [ ] Mobile app (React Native/Capacitor)
- [ ] Offline mode for resources

### Medium-term (v2.0)
- [ ] AI-powered mood analysis
- [ ] Predictive wellness insights
- [ ] Campus integration APIs
- [ ] Group therapy session support
- [ ] Advanced analytics dashboard

### Long-term (v3.0+)
- [ ] VR/AR therapy sessions
- [ ] Biometric integration
- [ ] Machine learning personalization
- [ ] Research data contribution platform