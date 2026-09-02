// ────────────────────────────────────────────────────────────
// LEGO‑Modul: AtmoBoard – atmosphärischer Schachbrett‑Layer
// ────────────────────────────────────────────────────────────

class AtmoBoard {
    constructor(canvas, boardSize = 8) {
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
        this.boardSize = boardSize;
        this.cellSize = canvas.width / boardSize;
        this.angle = 0;
        this.particles = [];
        this.lines = [];
        this.colors = {
            light: { r: 60, g: 80, b: 100 },
            dark: { r: 30, g: 50, b: 60 }
        };
        this.mood = 'neutral'; // 'cool', 'warm', 'golden', 'neon'
        this.running = true;
        this.initLines();
    }

    initLines() {
        // Erzeuge fließende Linien zwischen Feldern
        for (let i = 0; i < 12; i++) {
            const start = {
                x: Math.random() * this.canvas.width,
                y: Math.random() * this.canvas.height
            };
            const end = {
                x: Math.random() * this.canvas.width,
                y: Math.random() * this.canvas.height
            };
            this.lines.push({
                start, end,
                progress: Math.random(),
                speed: 0.002 + Math.random() * 0.005,
                width: 0.5 + Math.random() * 1.5,
                color: `rgba(100,200,255,${0.05 + Math.random() * 0.1})`
            });
        }
    }

    setMood(mood) {
        this.mood = mood;
        // Passe Farben an
        switch(mood) {
            case 'cool':
                this.colors.light = { r: 40, g: 80, b: 140 };
                this.colors.dark = { r: 20, g: 40, b: 80 };
                break;
            case 'warm':
                this.colors.light = { r: 200, g: 120, b: 60 };
                this.colors.dark = { r: 120, g: 60, b: 30 };
                break;
            case 'golden':
                this.colors.light = { r: 255, g: 215, b: 0 };
                this.colors.dark = { r: 180, g: 140, b: 0 };
                break;
            case 'neon':
                this.colors.light = { r: 0, g: 255, b: 200 };
                this.colors.dark = { r: 0, g: 150, b: 120 };
                break;
            default:
                this.colors.light = { r: 60, g: 80, b: 100 };
                this.colors.dark = { r: 30, g: 50, b: 60 };
        }
    }

    draw() {
        const ctx = this.ctx;
        const w = this.canvas.width;
        const h = this.canvas.height;
        const cs = this.cellSize;

        // 1. Hintergrund mit leichtem Puls
        const pulse = 0.5 + Math.sin(this.angle) * 0.2;
        ctx.fillStyle = `rgba(0,0,0,${0.3 + pulse * 0.1})`;
        ctx.fillRect(0, 0, w, h);

        // 2. Fließende Linien (wie Geo‑Matrix)
        for (const line of this.lines) {
            const progress = (line.progress + this.angle * line.speed) % 1;
            const x1 = line.start.x + (line.end.x - line.start.x) * progress;
            const y1 = line.start.y + (line.end.y - line.start.y) * progress;
            const x2 = line.start.x + (line.end.x - line.start.x) * ((progress + 0.15) % 1);
            const y2 = line.start.y + (line.end.y - line.start.y) * ((progress + 0.15) % 1);

            ctx.beginPath();
            ctx.moveTo(x1, y1);
            ctx.lineTo(x2, y2);
            ctx.strokeStyle = line.color;
            ctx.lineWidth = line.width;
            ctx.stroke();
        }

        // 3. Schachfeld‑Gitter mit atmosphärischem Puls
        for (let r = 0; r < this.boardSize; r++) {
            for (let c = 0; c < this.boardSize; c++) {
                const x = c * cs;
                const y = r * cs;
                const light = (r + c) % 2 === 0;
                const color = light ? this.colors.light : this.colors.dark;

                // Tiefenpuls – je nach Position und Zeit
                const depthFactor = Math.sin(r * 0.5 + c * 0.3 + this.angle * 0.5) * 0.15 + 0.85;
                const rCol = Math.floor(color.r * depthFactor);
                const gCol = Math.floor(color.g * depthFactor);
                const bCol = Math.floor(color.b * depthFactor);

                ctx.fillStyle = `rgba(${rCol}, ${gCol}, ${bCol}, 0.3)`;
                ctx.fillRect(x, y, cs, cs);

                // Neon‑Glow an den Rändern
                ctx.strokeStyle = `rgba(${rCol+20}, ${gCol+20}, ${bCol+30}, 0.05)`;
                ctx.lineWidth = 0.5;
                ctx.strokeRect(x, y, cs, cs);
            }
        }

        // 4. Partikel (ziehen über das Brett)
        if (Math.random() > 0.92) {
            this.particles.push({
                x: Math.random() * w,
                y: Math.random() * h,
                vx: (Math.random() - 0.5) * 0.5,
                vy: (Math.random() - 0.5) * 0.5,
                life: 1,
                size: 1 + Math.random() * 2,
                color: `rgba(100,200,255,${0.1 + Math.random() * 0.3})`
            });
        }

        this.particles = this.particles.filter(p => {
            p.x += p.vx;
            p.y += p.vy;
            p.life -= 0.002;
            if (p.life <= 0) return false;
            ctx.fillStyle = p.color;
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.size * p.life, 0, Math.PI * 2);
            ctx.fill();
            return true;
        });

        this.angle += 0.008;
    }

    resize(width, height) {
        this.canvas.width = width;
        this.canvas.height = height;
        this.cellSize = width / this.boardSize;
    }

    start() {
        this.running = true;
        this.loop();
    }

    loop() {
        if (!this.running) return;
        this.draw();
        requestAnimationFrame(() => this.loop());
    }

    stop() {
        this.running = false;
    }
}
