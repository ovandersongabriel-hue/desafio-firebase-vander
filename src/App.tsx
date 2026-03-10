import React, { useState } from 'react';
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyA7tNb57IEOZK53c4H-744CKtTdoFigqKE",
  authDomain: "desafio-vander.firebaseapp.com",
  projectId: "desafio-vander",
  storageBucket: "desafio-vander.firebasestorage.app",
  messagingSenderId: "1003933759088",
  appId: "1:1003933759088:web:89a0e0c42d6ce43141e6b5",
  measurementId: "G-F7QMMQB9XD"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

function App() {
  const [nome, setNome] = useState('');
  const [endereco, setEndereco] = useState('');

  const salvarNoFirebase = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!nome || !endereco) {
      alert("Por favor, preencha todos os campos!");
      return;
    }

    try {
      
      await addDoc(collection(db, "usuarios"), {
        nome: nome,
        endereco: endereco,
        data_envio: new Date().toLocaleString()
      });
      
      alert("✅ SUCESSO! Dados gravados no desafio-vander!");
      setNome('');
      setEndereco('');
    } catch (error) {
      console.error("Erro:", error);
      alert("Erro ao salvar. Verifique se clicou em 'Criar Banco' no Firebase.");
    }
  };

  return (
    <div style={{ padding: '40px', fontFamily: 'Arial, sans-serif', textAlign: 'center' }}>
      <h1>Desafio Flugo - Cadastro</h1>
      <form onSubmit={salvarNoFirebase} style={{ display: 'inline-block', textAlign: 'left' }}>
        <div style={{ marginBottom: '15px' }}>
          <label style={{ display: 'block' }}>Nome:</label>
          <input 
            type="text"
            value={nome} 
            onChange={(e) => setNome(e.target.value)} 
            style={{ width: '300px', padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
          />
        </div>
        <div style={{ marginBottom: '15px' }}>
          <label style={{ display: 'block' }}>Endereço:</label>
          <input 
            type="text"
            value={endereco} 
            onChange={(e) => setEndereco(e.target.value)} 
            style={{ width: '300px', padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
          />
        </div>
        <button 
          type="submit" 
          style={{ 
            width: '100%', 
            padding: '12px', 
            background: '#28a745', 
            color: 'white', 
            border: 'none', 
            borderRadius: '5px', 
            cursor: 'pointer',
            fontSize: '16px'
          }}
        >
          Enviar para o Banco de Dados
        </button>
      </form>
    </div>
  );
}

export default App;