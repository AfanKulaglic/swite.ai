// Template Service - Handles all template operations
import { supabase } from '../supabase/client';
import { Database } from '../supabase/types';

type Template = Database['public']['Tables']['templates']['Row'];
type TemplateInsert = Database['public']['Tables']['templates']['Insert'];
type TemplateUpdate = Database['public']['Tables']['templates']['Update'];

export class TemplateService {
  /**
   * Get all active templates
   */
  static async getAllTemplates() {
    const { data, error } = await supabase
      .from('templates')
      .select(`
        *,
        category:template_categories(*)
      `)
      .eq('is_active', true)
      .order('usage_count', { ascending: false });

    if (error) throw error;
    return data;
  }

  /**
   * Get template by ID
   */
  static async getTemplateById(id: string) {
    const { data, error } = await supabase
      .from('templates')
      .select(`
        *,
        category:template_categories(*)
      `)
      .eq('id', id)
      .single();

    if (error) throw error;
    return data;
  }

  /**
   * Get template by slug
   */
  static async getTemplateBySlug(slug: string) {
    const { data, error } = await supabase
      .from('templates')
      .select(`
        *,
        category:template_categories(*)
      `)
      .eq('slug', slug)
      .single();

    if (error) throw error;
    return data;
  }

  /**
   * Search templates by tags (traditional filtering)
   */
  static async searchByTags(tags: string[], categoryId?: string) {
    const { data, error } = await supabase
      .rpc('search_templates_by_filters', {
        search_tags: tags,
        search_category: categoryId || null,
        limit_count: 10
      });

    if (error) throw error;
    return data;
  }

  /**
   * Search templates by semantic similarity (AI-powered)
   * Note: Requires embeddings to be generated first
   */
  static async searchBySimilarity(
    queryEmbedding: number[],
    threshold: number = 0.7,
    limit: number = 5
  ) {
    const { data, error } = await supabase
      .rpc('search_templates_by_embedding', {
        query_embedding: queryEmbedding,
        match_threshold: threshold,
        match_count: limit
      });

    if (error) throw error;
    return data;
  }

  /**
   * Hybrid search: Combine tag filtering + semantic search
   */
  static async hybridSearch(
    tags: string[],
    queryEmbedding?: number[],
    categoryId?: string
  ) {
    // First, filter by tags
    let query = supabase
      .from('templates')
      .select('*')
      .eq('is_active', true);

    if (categoryId) {
      query = query.eq('category_id', categoryId);
    }

    if (tags.length > 0) {
      query = query.contains('tags', tags);
    }

    const { data: tagFiltered, error: tagError } = await query;
    if (tagError) throw tagError;

    // If we have embeddings, rank by similarity
    if (queryEmbedding && tagFiltered) {
      // This would require a more complex query or post-processing
      // For now, return tag-filtered results
      return tagFiltered;
    }

    return tagFiltered;
  }

  /**
   * Get templates by category
   */
  static async getTemplatesByCategory(categorySlug: string) {
    const { data, error } = await supabase
      .from('templates')
      .select(`
        *,
        category:template_categories!inner(*)
      `)
      .eq('category.slug', categorySlug)
      .eq('is_active', true);

    if (error) throw error;
    return data;
  }

  /**
   * Get popular templates
   */
  static async getPopularTemplates(limit: number = 6) {
    const { data, error } = await supabase
      .from('templates')
      .select('*')
      .eq('is_active', true)
      .order('usage_count', { ascending: false })
      .limit(limit);

    if (error) throw error;
    return data;
  }

  /**
   * Create a new template (admin only)
   */
  static async createTemplate(template: TemplateInsert) {
    const { data, error } = await supabase
      .from('templates')
      .insert(template)
      .select()
      .single();

    if (error) throw error;
    return data;
  }

  /**
   * Update template
   */
  static async updateTemplate(id: string, updates: TemplateUpdate) {
    const { data, error } = await supabase
      .from('templates')
      .update(updates)
      .eq('id', id)
      .select()
      .single();

    if (error) throw error;
    return data;
  }

  /**
   * Delete template (soft delete by setting is_active = false)
   */
  static async deleteTemplate(id: string) {
    const { error } = await supabase
      .from('templates')
      .update({ is_active: false })
      .eq('id', id);

    if (error) throw error;
  }

  /**
   * Get all template categories
   */
  static async getCategories() {
    const { data, error } = await supabase
      .from('template_categories')
      .select('*')
      .order('name');

    if (error) throw error;
    return data;
  }

  /**
   * Get all template tags
   */
  static async getTags() {
    const { data, error } = await supabase
      .from('template_tags')
      .select('*')
      .order('name');

    if (error) throw error;
    return data;
  }
}
