import MapQuestStatic from '../../../shared/widgets/mapquest/MapQuestStatic';

export const MapQuestStaticDemo = () => {
  return <div>
    <h1>Map Quest</h1>
    <MapQuestStatic city="Trieste" width={300} height={200} API_KEY="Go3ZWai1i4nd2o7kBuAUs4y7pnpjXdZn" />
    <hr/>
    <MapQuestStatic city="Roma" style={{ border: '1px solid blue'}} API_KEY="Go3ZWai1i4nd2o7kBuAUs4y7pnpjXdZn"  />
    <hr/>
    <MapQuestStatic city="Milan" width={600} height={100} API_KEY="Go3ZWai1i4nd2o7kBuAUs4y7pnpjXdZn" />
  </div>
};
