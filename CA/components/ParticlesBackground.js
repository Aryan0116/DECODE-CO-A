function ParticlesBackground() {
    try {
        const { theme } = React.useContext(ThemeContext);
        
        React.useEffect(() => {
            // Create container if it doesn't exist
            let container = document.getElementById('particles-container');
            if (!container) {
                container = document.createElement('div');
                container.id = 'particles-container';
                container.style.position = 'fixed';
                container.style.top = '0';
                container.style.left = '0';
                container.style.width = '100%';
                container.style.height = '100%';
                container.style.zIndex = '-1';
                container.style.pointerEvents = 'none';
                document.body.appendChild(container);
            }
            
            const initParticles = async () => {
                try {
                    // Check if tsParticles is available
                    if (typeof window.tsParticles === 'undefined') {
                        console.error("tsParticles not loaded. Attempting to load dynamically.");
                        
                        // Try to load tsParticles dynamically if not available
                        const script = document.createElement('script');
                        script.src = "https://cdn.jsdelivr.net/npm/tsparticles-slim@2.12.0/tsparticles.slim.min.js";
                        script.async = true;
                        
                        // Wait for script to load before initializing
                        script.onload = () => {
                            console.log("tsParticles loaded dynamically.");
                            loadParticles();
                        };
                        
                        document.head.appendChild(script);
                        return;
                    }
                    
                    loadParticles();
                } catch (error) {
                    console.error("Error initializing particles:", error);
                }
            };
            
            const loadParticles = async () => {
                try {
                    // Before loading, check if there's an existing instance and destroy it
                    if (window.tsParticles.dom().length > 0) {
                        await window.tsParticles.destroy();
                    }
                    
                    // Configure and load particles
                    await window.tsParticles.load("particles-container", {
                        fullScreen: {
                            enable: false
                        },
                        fpsLimit: 60,
                        particles: {
                            number: {
                                value: 30,
                                density: {
                                    enable: true,
                                    value_area: 800
                                }
                            },
                            color: {
                                value: theme === 'dark' ? "#ffffff" : "#3b82f6"
                            },
                            shape: {
                                type: "circle"
                            },
                            opacity: {
                                value: 0.3,
                                random: true
                            },
                            size: {
                                value: 3,
                                random: true
                            },
                            move: {
                                enable: true,
                                speed: 1,
                                direction: "none",
                                random: true,
                                straight: false,
                                out_mode: "out",
                                bounce: false
                            }
                        },
                        interactivity: {
                            detectsOn: "window",
                            events: {
                                onHover: {
                                    enable: true,
                                    mode: "grab"
                                },
                                onClick: {
                                    enable: true,
                                    mode: "push"
                                },
                                resize: true
                            },
                            modes: {
                                grab: {
                                    distance: 140,
                                    links: {
                                        opacity: 0.5
                                    }
                                },
                                push: {
                                    quantity: 3
                                }
                            }
                        },
                        detectRetina: true
                    });
                    
                    console.log("Particles successfully initialized");
                } catch (loadError) {
                    console.error("Error loading particles:", loadError);
                }
            };
            
            // Initialize particles with a delay to ensure DOM is ready
            const timer = setTimeout(() => {
                initParticles();
            }, 800); // Increased delay to ensure DOM is fully loaded
            
            return () => {
                clearTimeout(timer);
                // Clean up particles if needed
                if (window.tsParticles) {
                    try {
                        window.tsParticles.destroy("particles-container");
                    } catch (error) {
                        console.error("Error cleaning up particles:", error);
                    }
                }
            };
        }, [theme]); // Re-initialize when theme changes
        
        return null;
    } catch (error) {
        console.error('ParticlesBackground component error:', error);
        reportError(error);
        return null;
    }
}