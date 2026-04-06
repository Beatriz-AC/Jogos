import { useState } from "react";
import styles from "./contato.module.css";

const Contato = () => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [mensagem, setMensagem] = useState("");
  const [erro, setErro] = useState("");
  const [sucesso, setSucesso] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    setErro("");
    setSucesso("");

    if (!nome || !email || !mensagem) {
      setErro("Preencha todos os campos!");
      return;
    }

    if (!email.includes("@")) {
      setErro("Email inválido!");
      return;
    }

    if (mensagem.length < 10) {
      setErro("A mensagem precisa ter no mínimo 10 caracteres!");
      return;
    }

    setSucesso("Mensagem enviada com sucesso! 🎮");

    setNome("");
    setEmail("");
    setMensagem("");
  };

  return (
    <div className={styles.page}>
      <h1>Contato</h1>

      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          type="text"
          placeholder="Nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          className={styles.input}
        />

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={styles.input}
        />

        <textarea
          placeholder="Mensagem"
          value={mensagem}
          onChange={(e) => setMensagem(e.target.value)}
          className={styles.textarea}
        />

        <button type="submit" className={styles.button}>
          Enviar
        </button>
      </form>

      {erro && <p className={styles.erro}>{erro}</p>}
      {sucesso && <p className={styles.sucesso}>{sucesso}</p>}
    </div>
  );
};

export default Contato;