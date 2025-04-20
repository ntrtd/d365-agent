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
import type { PayRateConversionsApi } from './PayRateConversionsApi';
import { HrmCompPayFrequencyPeriod } from './HrmCompPayFrequencyPeriod';
import {
  CompFixedPlanTables,
  CompFixedPlanTablesType
} from './CompFixedPlanTables';
import {
  PayIntV1CompFixedPlanTables,
  PayIntV1CompFixedPlanTablesType
} from './PayIntV1CompFixedPlanTables';

/**
 * This class represents the entity "PayRateConversions" of service "d365_metadata".
 */
export class PayRateConversions<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements PayRateConversionsType<T>
{
  /**
   * Technical entity name for PayRateConversions.
   */
  static override _entityName = 'PayRateConversions';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the PayRateConversions entity.
   */
  static _keys = ['dataAreaId', 'PayRateConversion'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Pay Rate Conversion.
   */
  declare payRateConversion: DeserializedType<T, 'Edm.String'>;
  /**
   * Weekly Conversion Factor.
   */
  declare weeklyConversionFactor: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Monthly Conversion Factor.
   */
  declare monthlyConversionFactor: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Period.
   * @nullable
   */
  declare period?: HrmCompPayFrequencyPeriod | null;
  /**
   * Annual Conversion Factor.
   */
  declare annualConversionFactor: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Hourly Conversion Factor.
   */
  declare hourlyConversionFactor: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * One-to-many navigation property to the {@link CompFixedPlanTables} entity.
   */
  declare compFixedPlanTable: CompFixedPlanTables<T>[];
  /**
   * One-to-many navigation property to the {@link PayIntV1CompFixedPlanTables} entity.
   */
  declare payIntV1CompFixedPlanTable: PayIntV1CompFixedPlanTables<T>[];

  constructor(_entityApi: PayRateConversionsApi<T>) {
    super(_entityApi);
  }
}

export interface PayRateConversionsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  payRateConversion: DeserializedType<T, 'Edm.String'>;
  weeklyConversionFactor: DeserializedType<T, 'Edm.Decimal'>;
  monthlyConversionFactor: DeserializedType<T, 'Edm.Decimal'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
  period?: HrmCompPayFrequencyPeriod | null;
  annualConversionFactor: DeserializedType<T, 'Edm.Decimal'>;
  hourlyConversionFactor: DeserializedType<T, 'Edm.Decimal'>;
  compFixedPlanTable: CompFixedPlanTablesType<T>[];
  payIntV1CompFixedPlanTable: PayIntV1CompFixedPlanTablesType<T>[];
}
