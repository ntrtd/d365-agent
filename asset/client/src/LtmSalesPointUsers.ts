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
import type { LtmSalesPointUsersApi } from './LtmSalesPointUsersApi';

/**
 * This class represents the entity "LTMSalesPointUsers" of service "d365_metadata".
 */
export class LtmSalesPointUsers<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements LtmSalesPointUsersType<T>
{
  /**
   * Technical entity name for LtmSalesPointUsers.
   */
  static override _entityName = 'LTMSalesPointUsers';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the LtmSalesPointUsers entity.
   */
  static _keys = ['dataAreaId', 'UserId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * User Id.
   */
  declare userId: DeserializedType<T, 'Edm.String'>;
  /**
   * Sales Point Id.
   * @nullable
   */
  declare salesPointId?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: LtmSalesPointUsersApi<T>) {
    super(_entityApi);
  }
}

export interface LtmSalesPointUsersType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  userId: DeserializedType<T, 'Edm.String'>;
  salesPointId?: DeserializedType<T, 'Edm.String'> | null;
}
