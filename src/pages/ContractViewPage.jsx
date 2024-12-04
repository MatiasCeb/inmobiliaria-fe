import { useEffect, useState, useRef } from 'react';
import { useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import './ContractViewPage.css';

const ContractViewPage = () => {
    const { id } = useParams();
    const [markdownContent, setMarkdownContent] = useState('');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const contractRef = useRef();

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

    // const downloadPDF = async () => {
    //     const element = contractRef.current;
    //     const canvas = await html2canvas(element, { scale: 2 });
    //     const imgData = canvas.toDataURL("image/png");

    //     const pdf = new jsPDF("p", "mm", "a4");
    //     const pdfWidth = pdf.internal.pageSize.getWidth();
    //     const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

    //     pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
    //     pdf.save("contract.pdf");
    // };

    /* TODO: metodo opcional de descarga de PDF para multiples paginas */

    const downloadPDF = async () => {
        const element = contractRef.current;
      
        // Renderiza el contenido HTML a un canvas con alta resolución
        const canvas = await html2canvas(element, { scale: 2 });
        const imgData = canvas.toDataURL("image/png");
      
        // Dimensiones del PDF
        const pdf = new jsPDF("p", "mm", "a4");
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = pdf.internal.pageSize.getHeight();
      
        // Dimensiones de la imagen en mm
        const imgWidth = pdfWidth;
        const imgHeight = (canvas.height * pdfWidth) / canvas.width;
      
        // Calcula el contenido visible por página en la misma escala
        const pageHeight = (canvas.width * pdfHeight) / pdfWidth;
        let yOffset = 0;
      
        // Genera cada página del PDF
        while (yOffset < canvas.height) {
          // Corta el fragmento actual del canvas
          const canvasFragment = document.createElement("canvas");
          canvasFragment.width = canvas.width;
          canvasFragment.height = Math.min(pageHeight, canvas.height - yOffset);
      
          const ctx = canvasFragment.getContext("2d");
          ctx.drawImage(
            canvas,
            0,
            yOffset,
            canvas.width,
            canvasFragment.height,
            0,
            0,
            canvasFragment.width,
            canvasFragment.height
          );
      
          const fragmentData = canvasFragment.toDataURL("image/png");
      
          // Agrega el fragmento como imagen al PDF
          pdf.addImage(
            fragmentData,
            "PNG",
            0,
            0,
            imgWidth,
            (canvasFragment.height * pdfWidth) / canvas.width
          );
      
          yOffset += pageHeight;
      
          // Si hay más contenido, agrega una nueva página
          if (yOffset < canvas.height) pdf.addPage();
        }
      
        pdf.save("contract.pdf");
      };
      
    if (loading) return <p>Cargando contrato...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <>
            <div style={{ padding: "20px" }}>
                <button onClick={downloadPDF} style={{ marginTop: "20px", padding: "10px 20px", backgroundColor: "#007BFF", color: "#fff", border: "none", borderRadius: "5px", cursor: "pointer" }}>
                    Descargar PDF
                </button>
                <div ref={contractRef} className="contract-container">
                    <ReactMarkdown>{markdownContent}</ReactMarkdown>
                </div>
            </div>
        </>
    );
};

export default ContractViewPage;
