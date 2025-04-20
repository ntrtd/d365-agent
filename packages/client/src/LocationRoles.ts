/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import {
  Entity,
  DefaultDeSerializers,
  DeSerializers,
  DeserializedType
} from '@sap-cloud-sdk/odata-v4';
import type { LocationRolesApi } from './LocationRolesApi';
import { NoYes } from './NoYes';
import { LogisticsLocationRoleType } from './LogisticsLocationRoleType';

/**
 * This class represents the entity "LocationRoles" of service "d365_metadata".
 */
export class LocationRoles<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements LocationRolesType<T>
{
  /**
   * Technical entity name for LocationRoles.
   */
  static override _entityName = 'LocationRoles';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the LocationRoles entity.
   */
  static _keys = ['Purpose', 'Language'];
  /**
   * Purpose.
   */
  declare purpose: DeserializedType<T, 'Edm.String'>;
  /**
   * Language.
   */
  declare language: DeserializedType<T, 'Edm.String'>;
  /**
   * Contact Info.
   * @nullable
   */
  declare contactInfo?: NoYes | null;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Postal Address.
   * @nullable
   */
  declare postalAddress?: NoYes | null;
  /**
   * Type.
   * @nullable
   */
  declare type?: LogisticsLocationRoleType | null;
  /**
   * Disable Add Or Edit In Employee Self Service.
   * @nullable
   */
  declare disableAddOrEditInEmployeeSelfService?: NoYes | null;

  constructor(_entityApi: LocationRolesApi<T>) {
    super(_entityApi);
  }
}

export interface LocationRolesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  purpose: DeserializedType<T, 'Edm.String'>;
  language: DeserializedType<T, 'Edm.String'>;
  contactInfo?: NoYes | null;
  description?: DeserializedType<T, 'Edm.String'> | null;
  postalAddress?: NoYes | null;
  type?: LogisticsLocationRoleType | null;
  disableAddOrEditInEmployeeSelfService?: NoYes | null;
}
