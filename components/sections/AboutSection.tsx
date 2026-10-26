import React from 'react';
import { ArrowDownRight, ArrowUpRight } from 'lucide-react';

const FILES = 'abcdefgh';
const pieces: Record<string, string> = { b1: '♘', g8: '♚' };
const routeSquares = new Set(['b1', 'c3', 'd5', 'f6']);

const ChessBoard = () => (
  <div className="board-wrap">
    <div className="board-label board-label-top font-mono">64 SQUARES <span>/</span> MANY WAYS THROUGH</div>
    <div className="chessboard" role="img" aria-label="Hand-drawn chessboard with a knight's path marked across the squares">
      {Array.from({ length: 64 }, (_, i) => {
        const row = Math.floor(i / 8);
        const col = i % 8;
        const square = `${FILES[col]}${8 - row}`;
        const dark = (row + col) % 2 === 1;
        const mark = routeSquares.has(square);
        return (
          <span key={square} className={`board-square ${dark ? 'is-dark' : 'is-light'} ${mark ? 'is-marked' : ''} ${square === 'b1' ? 'start-square' : ''}`}>
            {pieces[square] && <span className={`chess-piece ${square === 'g8' ? 'black-piece' : ''}`}>{pieces[square]}</span>}
            {square === 'a8' && <span className="coordinate-tag">8</span>}
            {square === 'h1' && <span className="coordinate-tag coordinate-file">h</span>}
          </span>
        );
      })}
      <svg className="knight-path" viewBox="0 0 800 800" preserveAspectRatio="none" aria-hidden="true">
        <path d="M150 750 C152 706 149 664 151 650 C188 649 219 651 250 650 L250 550 C286 548 318 552 350 550 L350 350 C388 350 421 350 450 350 L450 250 C489 249 521 251 550 250" />
        <circle cx="550" cy="250" r="11" />
      </svg>
      <span className="board-signature font-note" aria-hidden="true">take your time</span>
    </div>
    <div className="board-coordinates font-mono"><span>a</span><span>b</span><span>c</span><span>d</span><span>e</span><span>f</span><span>g</span><span>h</span></div>
    <p className="board-caption font-mono">KNIGHT'S PATH <span>—</span> FIND YOUR OWN LINE</p>
  </div>
);

export const AboutSection = () => (
  <section id="about" className="relative pb-20 pt-14 md:pb-28 md:pt-20">
    <div className="mb-10 flex flex-wrap items-center justify-between gap-3 font-mono text-[10px] uppercase tracking-[.2em] text-muted md:mb-14">
      <span><i className="section-mark" /> Field notes / Katlego Munisola</span>
      <span>Gaborone, Botswana <b>·</b> CS &amp; Software Engineering</span>
    </div>

    <div className="grid items-center gap-12 lg:grid-cols-[1.08fr_.92fr] lg:gap-14">
      <div>
        <p className="font-mono text-xs uppercase tracking-[.18em] text-accent">Software, security &amp; curiosity</p>
        <h1 className="hero-title mt-5 max-w-3xl text-[clamp(3.4rem,8vw,7.5rem)] leading-[.88] tracking-[-.065em] text-ink">
          Think a few<br /><em>moves ahead.</em>
        </h1>
        <p className="mt-7 max-w-xl text-base leading-7 text-muted md:text-lg md:leading-8">
          I’m Katlego, a Computer Science and Software Engineering graduate, former BTC DevOps intern, and founder of Ponalo Digital. I build software for local needs, with security and thoughtful systems in mind.
        </p>
        <div className="mt-6 flex flex-wrap gap-2">
          {['Application security', 'Software development', 'Secure systems'].map(tag => <span key={tag} className="topic-tag">{tag}</span>)}
        </div>
        <div className="mt-8 flex flex-wrap gap-3">
          <a href="#projects" className="ink-button">See what I’ve made <ArrowDownRight size={16} aria-hidden="true" /></a>
          <a href="/resume.pdf" target="_blank" rel="noreferrer" className="paper-button">Résumé <ArrowUpRight size={15} aria-hidden="true" /></a>
        </div>
        <p className="hand-note mt-8 -rotate-2 text-2xl text-accent">patterns are everywhere <span>↗</span></p>
      </div>
      <ChessBoard />
    </div>

    <div className="about-note mt-20 grid gap-5 border-y border-ink/20 py-7 md:grid-cols-[.48fr_1.52fr] md:items-start md:gap-10 md:py-9">
      <p className="font-mono text-[10px] uppercase tracking-[.2em] text-accent">A little about me <span className="text-muted">/ 01</span></p>
      <div className="grid gap-4 text-sm leading-7 text-muted md:grid-cols-2 md:gap-10 md:text-base">
        <p>I graduated from BIUST in Computer Science and Software Engineering. At BTC, I worked on a SIM registration site and BOCRA API integration, supported CI/CD, and improved the PASELA mobile app experience.</p>
        <p>I now lead Ponalo Digital, building apps and websites for Botswana SMEs. I’m developing a WhatsApp lead and payment tool selected for the MASA Innovation Program 2026/27.</p>
      </div>
    </div>

    <div className="mt-10">
      <div className="mb-5 flex items-baseline justify-between gap-3">
        <p className="font-mono text-[10px] uppercase tracking-[.2em] text-accent">Off the board <span className="text-muted">/ 02</span></p>
        <span className="hand-note text-xl text-muted">other ways I make a mark</span>
      </div>
      <div className="hobby-grid grid grid-cols-1 gap-3 sm:grid-cols-3">
        <div className="hobby-card hobby-chess">
          <div className="hobby-art hobby-checker" aria-hidden="true">
            {Array.from({ length: 16 }, (_, i) => <span key={i} className={(Math.floor(i / 4) + i % 4) % 2 === 0 ? 'square-dark' : 'square-light'} />)}
            <span className="hobby-knight font-serif">♞</span>
          </div>
          <div className="hobby-meta"><span>01 / strategy</span><strong>Chess</strong></div>
        </div>
        <div className="hobby-card hobby-drawing">
          <div className="hobby-art" aria-hidden="true">
            <svg viewBox="0 0 180 112" fill="none"><path d="M12 86c26-56 28 32 52-18s31-37 39-8 22 14 30-5 19-32 36-27" /><path className="pencil-line" d="m139 19 29 5-4 28" /><path className="pencil-dot" d="M34 22h2" /></svg>
          </div>
          <div className="hobby-meta"><span>02 / observation</span><strong>Drawing</strong></div>
        </div>
        <div className="hobby-card hobby-skate">
          <div className="hobby-art" aria-hidden="true">
            <svg viewBox="0 0 180 112" fill="none"><path d="M24 68c24-3 43-20 72-21 20 0 39 9 58 24l-12 14H43L24 68Z" /><path className="skate-detail" d="m54 59 5-26 16 24m35-9 9-27 14 31" /><circle cx="53" cy="88" r="8" /><circle cx="133" cy="88" r="8" /><path className="motion-line" d="M12 25c9 0 15 0 23 4m-20 9 14-2" /></svg>
          </div>
          <div className="hobby-meta"><span>03 / momentum</span><strong>Skateboarding</strong></div>
        </div>
      </div>
    </div>
  </section>
);
