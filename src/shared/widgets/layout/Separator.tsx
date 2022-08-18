interface SeparatorProps {
  type?: 'dotted' | 'dashed' | 'solid'
  color?: string;
  padding?: 1 | 2 | 3 | 4 | 5;
  height?: 1 | 2 | 3 | 4 | 5;
}

const Separator = (props: SeparatorProps) => {
  const {
    type = 'dotted',
    color = '#222',
    padding = 1,
    height = 5
  } = props;
  return <>
    <div
      style={{
        borderTopWidth: height,
        borderTopStyle: type,
        borderTopColor: color,
        margin: `${20 * padding}px 0`,
      }}
    >

    </div>
  </>
};

export default  Separator;
