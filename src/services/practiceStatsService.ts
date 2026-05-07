
export interface PracticeStats {
  completedItems: number;
  mocksDone: number;
  avgScore: number;
  readiness: number;
  hoursPracticed: number;
}

const STORAGE_KEY = 'sierra_practice_stats';

export const practiceStatsService = {
  getStats(): PracticeStats {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      try {
        return JSON.parse(stored);
      } catch (e) {
        console.error('Failed to parse practice stats', e);
      }
    }
    return {
      completedItems: 0,
      mocksDone: 0,
      avgScore: 0,
      readiness: 0,
      hoursPracticed: 0
    };
  },

  saveStats(stats: PracticeStats) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(stats));
  },

  updateStats(update: Partial<PracticeStats>) {
    const current = this.getStats();
    const next = { ...current, ...update };
    this.saveStats(next);
    return next;
  }
};
