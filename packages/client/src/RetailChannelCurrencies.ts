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
import type { RetailChannelCurrenciesApi } from './RetailChannelCurrenciesApi';

/**
 * This class represents the entity "RetailChannelCurrencies" of service "d365_metadata".
 */
export class RetailChannelCurrencies<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements RetailChannelCurrenciesType<T>
{
  /**
   * Technical entity name for RetailChannelCurrencies.
   */
  static override _entityName = 'RetailChannelCurrencies';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the RetailChannelCurrencies entity.
   */
  static _keys = ['CurrencyCode', 'OMOperatingUnitNumber'];
  /**
   * Currency Code.
   */
  declare currencyCode: DeserializedType<T, 'Edm.String'>;
  /**
   * Om Operating Unit Number.
   */
  declare omOperatingUnitNumber: DeserializedType<T, 'Edm.String'>;

  constructor(_entityApi: RetailChannelCurrenciesApi<T>) {
    super(_entityApi);
  }
}

export interface RetailChannelCurrenciesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  currencyCode: DeserializedType<T, 'Edm.String'>;
  omOperatingUnitNumber: DeserializedType<T, 'Edm.String'>;
}
