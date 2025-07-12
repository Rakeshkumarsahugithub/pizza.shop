export default function Loading() {
  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      background: 'linear-gradient(135deg, #fff6f6 0%, #f3e7ff 100%)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 9999,
    }}>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 20,
      }}>
        {/* Animated Pizza */}
        <div style={{
          width: 80,
          height: 80,
          position: 'relative',
          animation: 'spin 2s linear infinite',
        }}>
          <svg width="80" height="80" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="48" fill="#ffe5b4" stroke="#d100b6" strokeWidth="4" />
            <path d="M50 50 L50 10 A40 40 0 0 1 90 50 Z" fill="#ff9800" />
            <circle cx="70" cy="30" r="6" fill="#d100b6" />
            <circle cx="80" cy="55" r="5" fill="#b0008b" />
            <circle cx="60" cy="20" r="4" fill="#fff" />
            <circle cx="75" cy="40" r="3" fill="#fff" />
          </svg>
        </div>
        
        {/* Loading Text */}
        <div style={{
          fontSize: 24,
          fontWeight: 700,
          color: '#d100b6',
          letterSpacing: 1,
        }}>
          Loading...
        </div>
        
        {/* Simple Progress Bar */}
        <div style={{
          width: 200,
          height: 4,
          background: '#f0f0f0',
          borderRadius: 2,
          overflow: 'hidden',
        }}>
          <div style={{
            width: '30%',
            height: '100%',
            background: 'linear-gradient(90deg, #d100b6, #ff9800)',
            borderRadius: 2,
            animation: 'loading 1.5s ease-in-out infinite',
          }} />
        </div>
      </div>
      
      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes spin {
            100% { transform: rotate(360deg); }
          }
          @keyframes loading {
            0% { transform: translateX(-100%); }
            50% { transform: translateX(100%); }
            100% { transform: translateX(-100%); }
          }
        `
      }} />
    </div>
  );
} 