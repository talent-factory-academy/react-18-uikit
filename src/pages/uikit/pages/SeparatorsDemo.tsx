import Separator from '../../../shared/widgets/layout/Separator';

 const SeparatorsDemo = () => {
  return <div>

    <h1>Separators</h1>

    <Separator />
    <Separator type="dashed" />
    <Separator type="solid" />
    <Separator type="solid" padding={2} height={1} color="orange" />
    <Separator type="dashed" padding={3} height={3} color="purple" />
  </div>
};

export default SeparatorsDemo;
