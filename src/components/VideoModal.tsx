import { motion, AnimatePresence } from 'motion/react';
import { X, Play, Pause, Volume2, VolumeX, RotateCcw, Sparkles } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  theme: 'dark' | 'light';
}

export default function VideoModal({ isOpen, onClose, theme }: VideoModalProps) {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [progress, setProgress] = useState(25);
  const [duration, setDuration] = useState('00:00');
  const [currentTime, setCurrentTime] = useState('00:00');
  const videoRef = useRef<HTMLVideoElement | null>(null);

  // Handle modal open/close video state
  useEffect(() => {
    if (!isOpen) {
      if (videoRef.current) {
        videoRef.current.pause();
      }
      return;
    }
    
    setIsPlaying(true);
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play().catch(() => {});
    }
  }, [isOpen]);

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      const current = videoRef.current.currentTime;
      const total = videoRef.current.duration || 1;
      setProgress((current / total) * 100);
      
      const currentMins = Math.floor(current / 60);
      const currentSecs = Math.floor(current % 60);
      setCurrentTime(`${currentMins < 10 ? '0' : ''}${currentMins}:${currentSecs < 10 ? '0' : ''}${currentSecs}`);
    }
  };

  const handleLoadedMetadata = () => {
    if (videoRef.current) {
      const total = videoRef.current.duration;
      const totalMins = Math.floor(total / 60);
      const totalSecs = Math.floor(total % 60);
      setDuration(`${totalMins < 10 ? '0' : ''}${totalMins}:${totalSecs < 10 ? '0' : ''}${totalSecs}`);
    }
  };

  const handleTogglePlay = () => {
    setIsPlaying(!isPlaying);
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play().catch(() => {});
      }
    }
  };

  const handleToggleMute = () => {
    setIsMuted(!isMuted);
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
    }
  };

  const handleRestart = () => {
    setProgress(0);
    setCurrentTime('00:00');
    setIsPlaying(true);
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play().catch(() => {});
    }
  };

  const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
    if (videoRef.current) {
      const rect = e.currentTarget.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const clickedValue = (x / rect.width) * (videoRef.current.duration || 1);
      videoRef.current.currentTime = clickedValue;
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-100 flex items-center justify-center p-4 sm:p-6 md:p-10 overflow-hidden">
          {/* Backdrop Blur overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-slate-950/80 backdrop-blur-md cursor-pointer"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.93, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.93, y: 15 }}
            transition={{ type: 'spring', damping: 25, stiffness: 220 }}
            className={`w-full max-w-4xl rounded-3xl border overflow-hidden shadow-2xl relative z-10 ${
              theme === 'dark' 
                ? 'bg-[#0b1120] border-slate-800 text-white shadow-[0_25px_60px_rgba(59,130,246,0.15)]' 
                : 'bg-white border-slate-200 text-slate-900 shadow-[0_25px_60px_rgba(0,0,0,0.15)]'
            }`}
          >
            {/* Upper control strip */}
            <div className={`px-6 py-4 border-b flex items-center justify-between ${
              theme === 'dark' ? 'bg-slate-900/40 border-slate-800' : 'bg-slate-50 border-slate-200'
            }`}>
              <div className="flex items-center space-x-2.5">
                <span className="w-2.5 h-2.5 bg-blue-500 rounded-full animate-pulse" />
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400">
                  CheatLock System Demonstration | Playback Node
                </span>
                <span className="hidden sm:inline-flex items-center space-x-1.5 px-2 py-0.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[9px] font-mono leading-none">
                  <Sparkles className="w-3 h-3 text-blue-400" />
                  <span>Mobile Proctors Ready</span>
                </span>
              </div>
              <button
                onClick={onClose}
                className={`p-1.5 rounded-lg border transition-all cursor-pointer ${
                  theme === 'dark' 
                    ? 'border-slate-800 hover:bg-slate-800 text-slate-400 hover:text-white' 
                    : 'border-slate-200 hover:bg-slate-100 text-slate-600 hover:text-slate-900'
                }`}
              >
                <X className="w-4.5 h-4.5" />
              </button>
            </div>

            {/* Simulated Video Player Box */}
            <div className="relative aspect-video bg-black flex items-center justify-center overflow-hidden group">
              {/* Demo Video Tag */}
              <video
                ref={videoRef}
                src="/demo_video.mp4"
                className="absolute inset-0 w-full h-full object-cover"
                playsInline
                autoPlay
                loop
                muted={isMuted}
                onTimeUpdate={handleTimeUpdate}
                onLoadedMetadata={handleLoadedMetadata}
              />

              {/* High Fidelity Screen Interface simulation graphics */}
              <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,_transparent_40%,_rgba(0,0,0,0.4)_150%)]" />
              <div className="absolute inset-0 bg-grid-white/[0.015] pointer-events-none" />



              {/* Live Overlay Indicators mimicking actual proctor overlay screen inside mockup */}
              <div className="absolute top-6 left-6 font-mono text-[9px] text-blue-400/80 space-y-1 select-none pointer-events-none text-left">
                <div>SOURCE_NODE: CORE_SIM_P4</div>
                <div>RENDER_RATE: 60FPS | V-SYNC</div>
                <div>SECURE_SHIELD: COMPLIANT</div>
              </div>

              <div className="absolute top-6 right-6 flex items-center space-x-2 bg-emerald-500/10 border border-emerald-500/30 px-2 py-0.5 rounded text-emerald-400 font-mono text-[9px] font-bold uppercase tracking-wider pointer-events-none select-none">
                <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-ping" />
                <span>DEMO_STREAMING</span>
              </div>

              {/* Interactive Player Controls panel bar */}
              <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black via-black/80 to-transparent p-4 flex flex-col space-y-3 z-20">
                {/* Timeline Slider bar indicator */}
                <div 
                  className="relative group/bar h-1.5 bg-white/20 rounded-full overflow-hidden cursor-pointer"
                  onClick={handleSeek}
                >
                  <div 
                    className="absolute top-0 left-0 h-full bg-blue-500 rounded-full transition-all duration-75"
                    style={{ width: `${progress}%` }}
                  />
                </div>

                {/* Control elements */}
                <div className="flex items-center justify-between text-xs font-mono text-white/90">
                  <div className="flex items-center space-x-4">
                    {/* Play/Pause */}
                    <button
                      onClick={handleTogglePlay}
                      className="p-1 px-1.5 rounded hover:bg-white/10 text-white shrink-0 cursor-pointer"
                    >
                      {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                    </button>

                    {/* Restart */}
                    <button
                      onClick={handleRestart}
                      className="p-1 px-1.5 rounded hover:bg-white/10 text-white shrink-0 cursor-pointer"
                      title="Restart video"
                    >
                      <RotateCcw className="w-3.5 h-3.5" />
                    </button>

                    {/* Timer indicator */}
                    <span className="text-[10px] text-slate-350 select-none">
                      {currentTime} / {duration}
                    </span>
                  </div>

                  <div className="flex items-center space-x-4">
                    {/* Mute toggle */}
                    <button
                      onClick={handleToggleMute}
                      className="p-1 px-1.5 rounded hover:bg-white/10 text-white shrink-0 cursor-pointer"
                    >
                      {isMuted ? <VolumeX className="w-4 h-4 text-red-400" /> : <Volume2 className="w-4 h-4" />}
                    </button>

                    <span className="bg-white/10 text-[9px] px-2 py-0.5 rounded font-black tracking-widest uppercase text-slate-300">
                      1080P HD
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Lower Information strip */}
            <div className={`p-4 text-center text-[11px] font-mono ${
              theme === 'dark' ? 'bg-slate-900/60 text-slate-500' : 'bg-slate-50 text-slate-500'
            }`}>
              <span>Equip your academic infrastructure with CheatLock for total integrity. </span>
              <button
                onClick={onClose}
                className="text-blue-500 font-extrabold hover:underline"
              >
                Close demo screen
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
