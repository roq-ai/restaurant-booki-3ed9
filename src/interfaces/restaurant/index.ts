import { InvitationInterface } from 'interfaces/invitation';
import { MenuInterface } from 'interfaces/menu';
import { TableInterface } from 'interfaces/table';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface RestaurantInterface {
  id?: string;
  description?: string;
  address?: string;
  opening_hours?: string;
  closing_hours?: string;
  name: string;
  created_at?: any;
  updated_at?: any;
  user_id: string;
  tenant_id: string;
  invitation?: InvitationInterface[];
  menu?: MenuInterface[];
  table?: TableInterface[];
  user?: UserInterface;
  _count?: {
    invitation?: number;
    menu?: number;
    table?: number;
  };
}

export interface RestaurantGetQueryInterface extends GetQueryInterface {
  id?: string;
  description?: string;
  address?: string;
  opening_hours?: string;
  closing_hours?: string;
  name?: string;
  user_id?: string;
  tenant_id?: string;
}
