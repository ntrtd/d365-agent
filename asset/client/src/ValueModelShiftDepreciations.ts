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
import type { ValueModelShiftDepreciationsApi } from './ValueModelShiftDepreciationsApi';
import { TypeOfIndustryIn } from './TypeOfIndustryIn';
import { TypeOfShiftIn } from './TypeOfShiftIn';

/**
 * This class represents the entity "ValueModelShiftDepreciations" of service "d365_metadata".
 */
export class ValueModelShiftDepreciations<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements ValueModelShiftDepreciationsType<T>
{
  /**
   * Technical entity name for ValueModelShiftDepreciations.
   */
  static override _entityName = 'ValueModelShiftDepreciations';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ValueModelShiftDepreciations entity.
   */
  static _keys = [
    'dataAreaId',
    'FixedAssetNumber',
    'ValueModel',
    'FromDate',
    'ToDate'
  ];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Fixed Asset Number.
   */
  declare fixedAssetNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Value Model.
   */
  declare valueModel: DeserializedType<T, 'Edm.String'>;
  /**
   * From Date.
   */
  declare fromDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * To Date.
   */
  declare toDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Type Of Industry.
   * @nullable
   */
  declare typeOfIndustry?: TypeOfIndustryIn | null;
  /**
   * Shift Percentage.
   */
  declare shiftPercentage: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Type Of Shift.
   * @nullable
   */
  declare typeOfShift?: TypeOfShiftIn | null;

  constructor(_entityApi: ValueModelShiftDepreciationsApi<T>) {
    super(_entityApi);
  }
}

export interface ValueModelShiftDepreciationsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  fixedAssetNumber: DeserializedType<T, 'Edm.String'>;
  valueModel: DeserializedType<T, 'Edm.String'>;
  fromDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  toDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  typeOfIndustry?: TypeOfIndustryIn | null;
  shiftPercentage: DeserializedType<T, 'Edm.Decimal'>;
  typeOfShift?: TypeOfShiftIn | null;
}
