// [WEBMAYS COPYRIGHT - Todos os direitos reservados (Torres Beauty Academy @TorresBeautyAcademy)]
// [AI-FILE-PURPOSE]: Titulo com contraste romano + italico. Nos dados, o trecho em italico fica entre asteriscos: "Sobre *Steffani Torres*".

/**
 * [AI-COMPONENT]: EditorialTitle
 * @param {Object} props
 * @param {string} props.text - Texto com o trecho em italico entre asteriscos
 * @param {string} [props.as] - Tag do titulo (padrao h2)
 * @param {string} [props.className]
 * @example <EditorialTitle text="Venha nos *visitar*" className="results-title" />
 */
export function EditorialTitle({ text, as: Tag = "h2", className, id }) {
  return (
    <Tag className={className} id={id}>
      {text.split("*").map((part, idx) =>
        idx % 2 === 1 ? <em key={idx}>{part}</em> : part
      )}
    </Tag>
  );
}
