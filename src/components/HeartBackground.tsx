export function HeartBackground({ size = 'large' }: { size?: 'small' | 'medium' | 'large' }) {
  const sizes = {
    small: { width: 120, height: 120, blur: 15 },
    medium: { width: 180, height: 180, blur: 20 },
    large: { width: 240, height: 240, blur: 30 }
  };

  const { width, height, blur } = sizes[size];

  return (
    <div className="absolute inset-0 flex items-center justify-center overflow-hidden opacity-40">
      <svg
        width={width}
        height={height}
        viewBox="0 0 100 100"
        className="absolute"
        style={{ filter: `blur(${blur}px)` }}
      >
        {/* Heart shape path */}
        <path
          d="M50,90 C50,90 10,60 10,35 C10,20 20,10 30,10 C40,10 50,20 50,20 C50,20 60,10 70,10 C80,10 90,20 90,35 C90,60 50,90 50,90 Z"
          fill="#ef4444"
          opacity="0.8"
        />
      </svg>
      
      {/* Additional hearts for depth */}
      <svg
        width={width * 0.7}
        height={height * 0.7}
        viewBox="0 0 100 100"
        className="absolute"
        style={{ filter: `blur(${blur * 0.5}px)` }}
      >
        <path
          d="M50,90 C50,90 10,60 10,35 C10,20 20,10 30,10 C40,10 50,20 50,20 C50,20 60,10 70,10 C80,10 90,20 90,35 C90,60 50,90 50,90 Z"
          fill="#dc2626"
          opacity="0.6"
        />
      </svg>
    </div>
  );
}
