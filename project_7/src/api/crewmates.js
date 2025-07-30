import { supabase } from "../supabase";

export async function fetchCrewmates() {
    const { data, error } = await supabase
        .from('crewmates')
        .select('*')
        .order('created_at', { ascending: false });
    if (error) throw error;
    return data;
}

export async function fetchCrewmates(id) {
    const { data, error } = await supabase
        .from('crewmates')
        .select('*')
        .eq('id', id)
        .single();
    if (error) throw error;
    return data;
}

export async function createCrewmate(crewmate) {
    const { data, error } = await supabase
        .from('crewmates')
        .insert([crewmate])
        .select()
        .single();
    if (error) throw error;
    return data;
}

export async function updateCrewmate(id, updates) {
    const { data, error } = await supabase
        .from('crewmates')
        .update(updates)
        .eq('id', id)
        .select()
        .single();
    if (error) throw error;
    return data;
}

export async function deleteCrewmate(id) {
    const { data, error } = await supabase
        .from('crewmates')
        .delete()
        .eq('id', id)
    if (error) throw error;
}