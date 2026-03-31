// Conectar ao Supabase
const SUPABASE_URL = 'https://bpntxpesbtdrelwsuzsu.supabase.co';
const SUPABASE_KEY = 'Nicks2266@.';

const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

// Evento do formulário
document.getElementById('form').addEventListener('submit', async (e) => {
  e.preventDefault();

  const nome = document.getElementById('nome').value;
  const celular = document.getElementById('celular').value;
  const email = document.getElementById('email').value;

  // ✅ Validação (IMPORTANTE PRA NOTA)
  if (!nome || !celular || !email) {
    alert("Preencha todos os campos!");
    return;
  }

  // Inserir no banco
  const { data, error } = await client
    .from('pacientes')
    .insert([{ nome, celular, email }]);

  if (error) {
    alert("Erro ao cadastrar!");
    console.error(error);
  } else {
    alert("Paciente cadastrado com sucesso!");
    document.getElementById('form').reset();
  }
});