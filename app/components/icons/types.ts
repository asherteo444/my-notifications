export interface BaseIconProps {
  size?: number | string;
  className?: string;
  color?: string;
  strokeWidth?: number;
  'aria-label'?: string;
  'aria-hidden'?: boolean;
}

export interface IconProps extends BaseIconProps {
  onClick?: () => void;
}

export const defaultIconProps: Partial<BaseIconProps> = {
  size: 24,
  strokeWidth: 2,
  'aria-hidden': true,
}; 