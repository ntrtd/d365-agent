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
import type { DenominationsApi } from './DenominationsApi';

/**
 * This class represents the entity "Denominations" of service "d365_metadata".
 */
export class Denominations<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements DenominationsType<T>
{
  /**
   * Technical entity name for Denominations.
   */
  static override _entityName = 'Denominations';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the Denominations entity.
   */
  static _keys = ['dataAreaId', 'Name'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Name.
   */
  declare name: DeserializedType<T, 'Edm.String'>;
  /**
   * Value.
   */
  declare value: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Currency.
   * @nullable
   */
  declare currency?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Currency Name.
   * @nullable
   */
  declare currencyName?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: DenominationsApi<T>) {
    super(_entityApi);
  }
}

export interface DenominationsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  name: DeserializedType<T, 'Edm.String'>;
  value: DeserializedType<T, 'Edm.Decimal'>;
  currency?: DeserializedType<T, 'Edm.String'> | null;
  currencyName?: DeserializedType<T, 'Edm.String'> | null;
}
