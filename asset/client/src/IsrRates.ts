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
import type { IsrRatesApi } from './IsrRatesApi';

/**
 * This class represents the entity "ISRRates" of service "d365_metadata".
 */
export class IsrRates<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements IsrRatesType<T>
{
  /**
   * Technical entity name for IsrRates.
   */
  static override _entityName = 'ISRRates';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the IsrRates entity.
   */
  static _keys = ['dataAreaId', 'Year', 'Month', 'MaximumAmount'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Year.
   */
  declare year: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Month.
   */
  declare month: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Maximum Amount.
   */
  declare maximumAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Rate.
   */
  declare rate: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Fixed Amount.
   */
  declare fixedAmount: DeserializedType<T, 'Edm.Decimal'>;

  constructor(_entityApi: IsrRatesApi<T>) {
    super(_entityApi);
  }
}

export interface IsrRatesType<T extends DeSerializers = DefaultDeSerializers> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  year: DeserializedType<T, 'Edm.Int32'>;
  month: DeserializedType<T, 'Edm.Int32'>;
  maximumAmount: DeserializedType<T, 'Edm.Decimal'>;
  rate: DeserializedType<T, 'Edm.Decimal'>;
  fixedAmount: DeserializedType<T, 'Edm.Decimal'>;
}
