import { supabase } from '../supabaseClient';

export interface ModuleProgress {
  id?: string;
  user_id?: string;
  module_id: string;
  completed_at?: string;
}

export interface MinigameResult {
  id?: string;
  user_id?: string;
  game_name: string;
  score: string;
  completed_at?: string;
}

export interface Note {
  id?: string;
  user_id?: string;
  title: string;
  content: string;
  created_at?: string;
  updated_at?: string;
}

export interface Task {
  id?: string;
  user_id?: string;
  title: string;
  is_completed: boolean;
  created_at?: string;
}

export const supabaseData = {
  // Modules
  async getCompletedModules() {
    const { data, error } = await supabase
      .from('modules_completed')
      .select('*');
    if (error) throw error;
    return data as ModuleProgress[];
  },

  async markModuleCompleted(moduleId: string) {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) throw new Error('User not authenticated');

    const { data, error } = await supabase
      .from('modules_completed')
      .upsert({ 
        module_id: moduleId,
        user_id: user.id
      }, { onConflict: 'user_id, module_id' })
      .select();
    if (error) throw error;
    return data;
  },

  // Minigames
  async getMinigameResults() {
    const { data, error } = await supabase
      .from('minigame_results')
      .select('*')
      .order('completed_at', { ascending: false });
    if (error) throw error;
    return data as MinigameResult[];
  },

  async saveMinigameResult(gameName: string, score: number) {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) throw new Error('User not authenticated');

    const { data, error } = await supabase
      .from('minigame_results')
      .insert({ 
        game_name: gameName, 
        score,
        user_id: user.id
      })
      .select();
    if (error) throw error;
    return data;
  },

  // Notes
  async getNotes() {
    const { data, error } = await supabase
      .from('notes')
      .select('*')
      .order('updated_at', { ascending: false });
    if (error) throw error;
    return data as Note[];
  },

  async createNote(title: string, content: string) {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) throw new Error('User not authenticated');

    const { data, error } = await supabase
      .from('notes')
      .insert({ 
        title, 
        content,
        user_id: user.id
      })
      .select();
    if (error) throw error;
    return data;
  },

  async updateNote(id: string, title: string, content: string) {
    const { data, error } = await supabase
      .from('notes')
      .update({ title, content, updated_at: new Date().toISOString() })
      .eq('id', id)
      .select();
    if (error) throw error;
    return data;
  },

  async deleteNote(id: string) {
    const { error } = await supabase
      .from('notes')
      .delete()
      .eq('id', id);
    if (error) throw error;
  },

  // Tasks
  async getTasks() {
    const { data, error } = await supabase
      .from('tasks')
      .select('*')
      .order('created_at', { ascending: true });
    if (error) throw error;
    return data as Task[];
  },

  async createTask(title: string) {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) throw new Error('User not authenticated');

    const { data, error } = await supabase
      .from('tasks')
      .insert({ 
        title,
        user_id: user.id
      })
      .select();
    if (error) throw error;
    return data;
  },

  async updateTask(id: string, isCompleted: boolean) {
    const { data, error } = await supabase
      .from('tasks')
      .update({ is_completed: isCompleted })
      .eq('id', id)
      .select();
    if (error) throw error;
    return data;
  },

  async deleteTask(id: string) {
    const { error } = await supabase
      .from('tasks')
      .delete()
      .eq('id', id);
    if (error) throw error;
  }
};
