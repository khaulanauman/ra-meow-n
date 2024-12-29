export type GameState = 
  | 'empty' 
  | 'empty_pot' 
  | 'boiling_pot'
  | 'boiling_pot_ready'
  | 'ramen_pot'
  | 'ramen_pot_ready'
  | 'ramen_bowl'
  | 'ramen_spices'
  | 'ramen_final';

export interface Position {
  x: number;
  y: number;
}