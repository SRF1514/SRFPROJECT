interface SavedArticle {
  id: string;
  savedAt: string;
}

const STORAGE_KEY = 'srf_saved_articles';

export const savedArticlesService = {
  getSavedArticles(): SavedArticle[] {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : [];
  },

  saveArticle(id: string) {
    const saved = this.getSavedArticles();
    if (!saved.find(a => a.id === id)) {
      saved.push({ id, savedAt: new Date().toISOString() });
      localStorage.setItem(STORAGE_KEY, JSON.stringify(saved));
    }
  },

  unsaveArticle(id: string) {
    const saved = this.getSavedArticles();
    const filtered = saved.filter(a => a.id !== id);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(filtered));
  },

  isSaved(id: string): boolean {
    const saved = this.getSavedArticles();
    return saved.some(a => a.id === id);
  }
};
