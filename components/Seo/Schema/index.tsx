type SchemaProps = {
  schema: object;
};

const Schema = ({ schema }: SchemaProps) => (
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
  />
);

export default Schema;