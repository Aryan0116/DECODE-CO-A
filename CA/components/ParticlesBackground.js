function ParticlesBackground() {
    try {
        const { theme } = React.useContext(ThemeContext);
        
        React.useEffect(() => {
            const initParticles = async () => {
                try {
                    // Check if container exists
                    const container = document.getElementById('particles-container');
                    if (!container) {
                        console.error("Particles container not found");
                        return;
                    }
                    
                    // Check if tsParticles is available
                    if (!window.tsParticles) {
                        console.error("tsParticles not loaded");
                        return;
                    }
                    
                    // Clear any existing particles
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
                } catch (error) {
                    console.error("Error initializing particles:", error);
                }
            };
            
            // Initialize particles with a delay to ensure DOM is ready
            const timer = setTimeout(() => {
                initParticles();
            }, 500);
            
            return () => {
                clearTimeout(timer);
                // Clean up particles if needed
                if (window.tsParticles) {
                    try {
                        window.tsParticles.destroy();
                    } catch (error) {
                        console.error("Error cleaning up particles:", error);
                    }
                }
            };
        }, [theme]);
        
        return null;
    } catch (error) {
        console.error('ParticlesBackground component error:', error);
        reportError(error);
        return null;
    }
}
