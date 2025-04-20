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
import type { CurrencyIsoCodesApi } from './CurrencyIsoCodesApi';

/**
 * This class represents the entity "CurrencyISOCodes" of service "d365_metadata".
 */
export class CurrencyIsoCodes<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements CurrencyIsoCodesType<T>
{
  /**
   * Technical entity name for CurrencyIsoCodes.
   */
  static override _entityName = 'CurrencyISOCodes';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the CurrencyIsoCodes entity.
   */
  static _keys = ['ISOCurrencyCode'];
  /**
   * Iso Currency Code.
   */
  declare isoCurrencyCode: DeserializedType<T, 'Edm.String'>;
  /**
   * Iso Currency Code Num.
   */
  declare isoCurrencyCodeNum: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Iso Currency Name.
   * @nullable
   */
  declare isoCurrencyName?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: CurrencyIsoCodesApi<T>) {
    super(_entityApi);
  }
}

export interface CurrencyIsoCodesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  isoCurrencyCode: DeserializedType<T, 'Edm.String'>;
  isoCurrencyCodeNum: DeserializedType<T, 'Edm.Int32'>;
  isoCurrencyName?: DeserializedType<T, 'Edm.String'> | null;
}
