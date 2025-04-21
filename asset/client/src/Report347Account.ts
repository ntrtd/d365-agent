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
import type { Report347AccountApi } from './Report347AccountApi';

/**
 * This class represents the entity "Report347Account" of service "d365_metadata".
 */
export class Report347Account<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements Report347AccountType<T>
{
  /**
   * Technical entity name for Report347Account.
   */
  static override _entityName = 'Report347Account';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the Report347Account entity.
   */
  static _keys = ['dataAreaId', 'MainAccount'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Main Account.
   */
  declare mainAccount: DeserializedType<T, 'Edm.String'>;
  /**
   * Name.
   * @nullable
   */
  declare name?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: Report347AccountApi<T>) {
    super(_entityApi);
  }
}

export interface Report347AccountType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  mainAccount: DeserializedType<T, 'Edm.String'>;
  name?: DeserializedType<T, 'Edm.String'> | null;
}
