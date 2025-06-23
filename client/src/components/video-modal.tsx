import { X, Play } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function VideoModal() {
  const closeVideoModal = () => {
    const modal = document.getElementById("videoModal");
    if (modal) {
      modal.classList.add("hidden");
      document.body.style.overflow = "auto";
    }
  };

  return (
    <div 
      id="videoModal" 
      className="fixed inset-0 bg-black/80 z-50 hidden flex items-center justify-center p-4"
      onClick={(e) => {
        if (e.target === e.currentTarget) closeVideoModal();
      }}
    >
      <div className="bg-white rounded-2xl p-6 max-w-4xl w-full animate-scale-in">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-2xl font-poppins font-bold">Property Walkthrough</h3>
          <Button
            variant="ghost"
            size="icon"
            onClick={closeVideoModal}
            className="text-gray-500 hover:text-gray-700"
          >
            <X className="h-6 w-6" />
          </Button>
        </div>
        
        <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center relative overflow-hidden">
          {/* Sample property interior image */}
          <img
            src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=675"
            alt="Property interior walkthrough"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black/20">
            <button className="bg-white/90 text-navy w-16 h-16 rounded-full flex items-center justify-center hover:bg-white transition-colors duration-300 group">
              <Play className="h-6 w-6 ml-1 group-hover:scale-110 transition-transform duration-200" />
            </button>
          </div>
        </div>
        
        <div className="mt-4 text-center">
          <p className="text-warm-gray">Click play to start the virtual tour of this stunning property</p>
        </div>
      </div>
    </div>
  );
}
