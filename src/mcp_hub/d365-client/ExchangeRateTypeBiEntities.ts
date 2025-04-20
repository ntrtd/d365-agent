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
import type { ExchangeRateTypeBiEntitiesApi } from './ExchangeRateTypeBiEntitiesApi';

/**
 * This class represents the entity "ExchangeRateTypeBiEntities" of service "d365_metadata".
 */
export class ExchangeRateTypeBiEntities<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements ExchangeRateTypeBiEntitiesType<T>
{
  /**
   * Technical entity name for ExchangeRateTypeBiEntities.
   */
  static override _entityName = 'ExchangeRateTypeBiEntities';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ExchangeRateTypeBiEntities entity.
   */
  static _keys = ['Name'];
  /**
   * Name.
   */
  declare name: DeserializedType<T, 'Edm.String'>;
  /**
   * Sys Rec Version.
   */
  declare sysRecVersion: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Source Key.
   */
  declare sourceKey: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Calendar Id.
   * @nullable
   */
  declare calendarId?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: ExchangeRateTypeBiEntitiesApi<T>) {
    super(_entityApi);
  }
}

export interface ExchangeRateTypeBiEntitiesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  name: DeserializedType<T, 'Edm.String'>;
  sysRecVersion: DeserializedType<T, 'Edm.Int32'>;
  sourceKey: DeserializedType<T, 'Edm.Int64'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
  calendarId?: DeserializedType<T, 'Edm.String'> | null;
}
