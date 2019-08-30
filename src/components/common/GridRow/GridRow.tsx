import styledComponents from 'styled-components';

interface IGridRow extends React.HTMLProps<HTMLDivElement> {
  columns?: number;
  textAlign?: 'right' | 'left' | 'center';
  verticalAlign?: 'start' | 'end' | 'center';
  columnWidth?: string;
  gridTemplate?: string;
}

interface IGridItem {
  start: number;
  end: number;
}

const getGridTemplate = (props: IGridRow): string => props.gridTemplate || `repeat(${props.columns || 1}, ${props.columnWidth || '1fr'})`;

const GridRow = styledComponents.div<IGridRow>`
      display: grid;
      text-align: ${props => `${props.textAlign || 'left'}`};
      align-items: ${props => `${props.verticalAlign || 'start'}`};
      grid-template-columns: ${props => getGridTemplate(props)};
      gap: 16px;
      white-space: ${props => (props.columnWidth === 'min-content' ? 'nowrap' : 'normal')};
`;

export const GridItem = styledComponents.div<IGridItem>`
      grid-column-start: ${props => props.start};
      grid-column-end: ${props => props.end};
`;

export default GridRow;