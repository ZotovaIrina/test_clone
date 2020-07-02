import styledComponents from 'styled-components';

interface IGridRow extends React.HTMLProps<HTMLDivElement> {
  columns?: number;
  justifyContent?: 'space-between' | 'start' | 'center' | 'end';
  justifyItems?: 'space-between' | 'start' | 'center' | 'end';
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
      justify-content: ${props => `${props.justifyContent ? props.justifyContent : 'start'}`};
      justify-items: ${props => `${props.justifyItems ? props.justifyItems : ''}`};
      align-items: ${props => `${props.verticalAlign || 'start'}`};
      grid-template-columns: ${props => getGridTemplate(props)};
      gap: ${props => props.theme.spacing.gap};
      white-space: ${props => (props.columnWidth === 'min-content' ? 'nowrap' : 'normal')};
`;

export const GridItem = styledComponents.div<IGridItem>`
      grid-column-start: ${props => props.start};
      grid-column-end: ${props => props.end};
`;

export default GridRow;