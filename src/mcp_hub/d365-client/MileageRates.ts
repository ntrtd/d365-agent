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
import type { MileageRatesApi } from './MileageRatesApi';
import { TrvMileageRateType } from './TrvMileageRateType';

/**
 * This class represents the entity "MileageRates" of service "d365_metadata".
 */
export class MileageRates<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements MileageRatesType<T>
{
  /**
   * Technical entity name for MileageRates.
   */
  static override _entityName = 'MileageRates';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the MileageRates entity.
   */
  static _keys = [
    'dataAreaId',
    'ExpenseCategory',
    'FromDate',
    'Quantity',
    'RateType',
    'VehicleType'
  ];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Expense Category.
   */
  declare expenseCategory: DeserializedType<T, 'Edm.String'>;
  /**
   * From Date.
   */
  declare fromDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Quantity.
   */
  declare quantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Rate Type.
   * @nullable
   */
  declare rateType?: TrvMileageRateType | null;
  /**
   * Vehicle Type.
   */
  declare vehicleType: DeserializedType<T, 'Edm.String'>;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * To Date.
   */
  declare toDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Rate.
   */
  declare rate: DeserializedType<T, 'Edm.Decimal'>;

  constructor(_entityApi: MileageRatesApi<T>) {
    super(_entityApi);
  }
}

export interface MileageRatesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  expenseCategory: DeserializedType<T, 'Edm.String'>;
  fromDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  quantity: DeserializedType<T, 'Edm.Decimal'>;
  rateType?: TrvMileageRateType | null;
  vehicleType: DeserializedType<T, 'Edm.String'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
  toDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  rate: DeserializedType<T, 'Edm.Decimal'>;
}
