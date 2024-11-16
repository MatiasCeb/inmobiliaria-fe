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

    const downloadPDF = async () => {
        const element = contractRef.current;
        const canvas = await html2canvas(element, { scale: 2 });
        const imgData = canvas.toDataURL("image/png");

        const pdf = new jsPDF("p", "mm", "a4");
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

        pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
        pdf.save("contract.pdf");
    };

    /* TODO: metodo opcional de descarga de PDF para multiples paginas */
    
    // const downloadPDF = async () => {
    //     const element = contractRef.current;
      
    //     // Captura el contenido como una imagen (canvas)
    //     const canvas = await html2canvas(element, { scale: 2 });
    //     const imgData = canvas.toDataURL("image/png");
      
    //     // Inicializa el PDF
    //     const pdf = new jsPDF("p", "mm", "a4");
      
    //     // Tamaño del canvas en píxeles
    //     const canvasWidth = canvas.width;
    //     const canvasHeight = canvas.height;
      
    //     // Dimensiones del PDF
    //     const pdfWidth = pdf.internal.pageSize.getWidth();
    //     const pdfHeight = pdf.internal.pageSize.getHeight();
      
    //     // Escala el contenido para encajar en el ancho del PDF
    //     const scaleFactor = pdfWidth / canvasWidth;
    //     const scaledHeight = canvasHeight * scaleFactor;
      
    //     // Divide el contenido si excede la altura del PDF
    //     let yOffset = 0;
      
    //     while (yOffset < canvasHeight) {
    //       // Recorta una sección del canvas
    //       const pageCanvas = document.createElement("canvas");
    //       pageCanvas.width = canvasWidth;
    //       pageCanvas.height = Math.min(canvasHeight - yOffset, pdfHeight / scaleFactor);
    //       const context = pageCanvas.getContext("2d");
      
    //       context.drawImage(
    //         canvas,
    //         0,
    //         yOffset,
    //         canvasWidth,
    //         pageCanvas.height,
    //         0,
    //         0,
    //         canvasWidth,
    //         pageCanvas.height
    //       );
      
    //       // Convierte la sección en una imagen
    //       const pageData = pageCanvas.toDataURL("image/png");
      
    //       // Añade la imagen al PDF
    //       pdf.addImage(pageData, "PNG", 0, 0, pdfWidth, pdfHeight);
      
    //       yOffset += pageCanvas.height;
      
    //       // Añade una nueva página si no es la última sección
    //       if (yOffset < canvasHeight) {
    //         pdf.addPage();
    //       }
    //     }
      
    //     // Guarda el PDF
    //     pdf.save("contract.pdf");
    //   };

      

    if (loading) return <p>Cargando contrato...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <>
            <div style={{ padding: "20px" }}>
                <button onClick={downloadPDF} style={{ marginTop: "20px", padding: "10px 20px", backgroundColor: "#007BFF", color: "#fff", border: "none", borderRadius: "5px", cursor: "pointer" }}>
                    Descargar PDF
                </button>
                <div ref={contractRef} className="contract-view">
                    <ReactMarkdown>{markdownContent}</ReactMarkdown>
                </div>
            </div>
        </>
    );
};

export default ContractViewPage;
