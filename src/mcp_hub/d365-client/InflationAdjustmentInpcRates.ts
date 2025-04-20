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
import type { InflationAdjustmentInpcRatesApi } from './InflationAdjustmentInpcRatesApi';
import { MonthsOfYear } from './MonthsOfYear';

/**
 * This class represents the entity "InflationAdjustmentInpcRates" of service "d365_metadata".
 */
export class InflationAdjustmentInpcRates<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements InflationAdjustmentInpcRatesType<T>
{
  /**
   * Technical entity name for InflationAdjustmentInpcRates.
   */
  static override _entityName = 'InflationAdjustmentInpcRates';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the InflationAdjustmentInpcRates entity.
   */
  static _keys = ['dataAreaId', 'Year', 'Month'];
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
   * @nullable
   */
  declare month?: MonthsOfYear | null;
  /**
   * Inflation Rate.
   */
  declare inflationRate: DeserializedType<T, 'Edm.Decimal'>;

  constructor(_entityApi: InflationAdjustmentInpcRatesApi<T>) {
    super(_entityApi);
  }
}

export interface InflationAdjustmentInpcRatesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  year: DeserializedType<T, 'Edm.Int32'>;
  month?: MonthsOfYear | null;
  inflationRate: DeserializedType<T, 'Edm.Decimal'>;
}
