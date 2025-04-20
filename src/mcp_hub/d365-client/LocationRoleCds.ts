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
import type { LocationRoleCdsApi } from './LocationRoleCdsApi';
import { NoYes } from './NoYes';
import { LogisticsLocationRoleType } from './LogisticsLocationRoleType';

/**
 * This class represents the entity "LocationRoleCDS" of service "d365_metadata".
 */
export class LocationRoleCds<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements LocationRoleCdsType<T>
{
  /**
   * Technical entity name for LocationRoleCds.
   */
  static override _entityName = 'LocationRoleCDS';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the LocationRoleCds entity.
   */
  static _keys = ['Purpose'];
  /**
   * Purpose.
   */
  declare purpose: DeserializedType<T, 'Edm.String'>;
  /**
   * Is Contact Information.
   * @nullable
   */
  declare isContactInformation?: NoYes | null;
  /**
   * Is Postal Address.
   * @nullable
   */
  declare isPostalAddress?: NoYes | null;
  /**
   * Type.
   * @nullable
   */
  declare type?: LogisticsLocationRoleType | null;

  constructor(_entityApi: LocationRoleCdsApi<T>) {
    super(_entityApi);
  }
}

export interface LocationRoleCdsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  purpose: DeserializedType<T, 'Edm.String'>;
  isContactInformation?: NoYes | null;
  isPostalAddress?: NoYes | null;
  type?: LogisticsLocationRoleType | null;
}
