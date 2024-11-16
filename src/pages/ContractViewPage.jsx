import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import './ContractViewPage.css'; 

const ContractViewPage = () => {
  const { id } = useParams();
  const [markdownContent, setMarkdownContent] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMarkdown = async () => {
      try {
        const response = await fetch(`http://localhost:8080/contracts/${id}/markdown`);
        if (!response.ok) {
          throw new Error('Error al cargar el contrato');
        }
        const data = await response.text();
        setMarkdownContent(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchMarkdown();
  }, [id]);

  if (loading) return <p>Cargando contrato...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="contract-view">
      <ReactMarkdown>{markdownContent}</ReactMarkdown>
    </div>
  );
};

export default ContractViewPage;
