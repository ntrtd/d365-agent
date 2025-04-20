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
import type { BlwiCurrenciesApi } from './BlwiCurrenciesApi';
import { NoYes } from './NoYes';

/**
 * This class represents the entity "BLWICurrencies" of service "d365_metadata".
 */
export class BlwiCurrencies<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements BlwiCurrenciesType<T>
{
  /**
   * Technical entity name for BlwiCurrencies.
   */
  static override _entityName = 'BLWICurrencies';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the BlwiCurrencies entity.
   */
  static _keys = ['dataAreaId', 'Currency'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Currency.
   */
  declare currency: DeserializedType<T, 'Edm.String'>;
  /**
   * Column Number.
   */
  declare columnNumber: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Report In This Currency.
   * @nullable
   */
  declare reportInThisCurrency?: NoYes | null;
  /**
   * Company.
   * @nullable
   */
  declare company?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: BlwiCurrenciesApi<T>) {
    super(_entityApi);
  }
}

export interface BlwiCurrenciesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  currency: DeserializedType<T, 'Edm.String'>;
  columnNumber: DeserializedType<T, 'Edm.Int32'>;
  reportInThisCurrency?: NoYes | null;
  company?: DeserializedType<T, 'Edm.String'> | null;
}
