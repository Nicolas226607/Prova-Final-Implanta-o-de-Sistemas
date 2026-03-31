const SUPABASE_URL = 'https://bpntxpesbtdrelwsuzsu.supabase.co';
const SUPABASE_KEY = 'sb_publishable_shp85IEfzgCqGHVsLAvWhw_H0odwHmh';

const { createClient } = window.supabase;
const client = createClient(SUPABASE_URL, SUPABASE_KEY);

// Espera o HTML carregar (evita erro de null)
document.addEventListener("DOMContentLoaded", () => {

  const form = document.getElementById("form");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const nome = document.getElementById('nome').value.trim();
    const celular = document.getElementById('celular').value.trim();
    const email = document.getElementById('email').value.trim();

    // ✅ Validação
    if (!nome || !celular || !email) {
      alert("Preencha todos os campos!");
      return;
    }

    try {
      const { data, error } = await client
        .from('Pacientes')
        .insert([
          { nome: nome, celular: celular, email: email }
        ]);

      if (error) {
        console.error("Erro Supabase:", error);
        alert("Erro: " + error.message);
        return;
      }

      alert("Paciente cadastrado com sucesso!");
      form.reset();

    } catch (err) {
      console.error("Erro geral:", err);
      alert("Erro inesperado!");
    }
  });

});