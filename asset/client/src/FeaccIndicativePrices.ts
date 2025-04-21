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
import type { FeaccIndicativePricesApi } from './FeaccIndicativePricesApi';

/**
 * This class represents the entity "FEACCIndicativePrices" of service "d365_metadata".
 */
export class FeaccIndicativePrices<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements FeaccIndicativePricesType<T>
{
  /**
   * Technical entity name for FeaccIndicativePrices.
   */
  static override _entityName = 'FEACCIndicativePrices';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the FeaccIndicativePrices entity.
   */
  static _keys = ['dataAreaId', 'TNVEDCode', 'CustomsCode', 'FromDate'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Tnved Code.
   */
  declare tnvedCode: DeserializedType<T, 'Edm.String'>;
  /**
   * Customs Code.
   */
  declare customsCode: DeserializedType<T, 'Edm.String'>;
  /**
   * From Date.
   */
  declare fromDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Currency.
   * @nullable
   */
  declare currency?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Price For Import.
   */
  declare priceForImport: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Quantity.
   */
  declare quantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Price For Export.
   */
  declare priceForExport: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Unit.
   * @nullable
   */
  declare unit?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: FeaccIndicativePricesApi<T>) {
    super(_entityApi);
  }
}

export interface FeaccIndicativePricesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  tnvedCode: DeserializedType<T, 'Edm.String'>;
  customsCode: DeserializedType<T, 'Edm.String'>;
  fromDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
  currency?: DeserializedType<T, 'Edm.String'> | null;
  priceForImport: DeserializedType<T, 'Edm.Decimal'>;
  quantity: DeserializedType<T, 'Edm.Decimal'>;
  priceForExport: DeserializedType<T, 'Edm.Decimal'>;
  unit?: DeserializedType<T, 'Edm.String'> | null;
}
