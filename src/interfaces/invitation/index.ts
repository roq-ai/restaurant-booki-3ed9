import { UserInterface } from 'interfaces/user';
import { RestaurantInterface } from 'interfaces/restaurant';
import { GetQueryInterface } from 'interfaces';

export interface InvitationInterface {
  id?: string;
  role: string;
  status: string;
  user_id?: string;
  restaurant_id?: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  restaurant?: RestaurantInterface;
  _count?: {};
}

export interface InvitationGetQueryInterface extends GetQueryInterface {
  id?: string;
  role?: string;
  status?: string;
  user_id?: string;
  restaurant_id?: string;
}
