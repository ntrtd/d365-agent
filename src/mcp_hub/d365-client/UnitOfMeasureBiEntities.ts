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
import type { UnitOfMeasureBiEntitiesApi } from './UnitOfMeasureBiEntitiesApi';
import { UnitOfMeasureSystemOfUnits } from './UnitOfMeasureSystemOfUnits';
import { UnitOfMeasureClass } from './UnitOfMeasureClass';

/**
 * This class represents the entity "UnitOfMeasureBiEntities" of service "d365_metadata".
 */
export class UnitOfMeasureBiEntities<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements UnitOfMeasureBiEntitiesType<T>
{
  /**
   * Technical entity name for UnitOfMeasureBiEntities.
   */
  static override _entityName = 'UnitOfMeasureBiEntities';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the UnitOfMeasureBiEntities entity.
   */
  static _keys = ['Symbol'];
  /**
   * Symbol.
   */
  declare symbol: DeserializedType<T, 'Edm.String'>;
  /**
   * Sys Rec Version.
   */
  declare sysRecVersion: DeserializedType<T, 'Edm.Int32'>;
  /**
   * System Of Units.
   * @nullable
   */
  declare systemOfUnits?: UnitOfMeasureSystemOfUnits | null;
  /**
   * Source Key.
   */
  declare sourceKey: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Sys Modified Date Time.
   */
  declare sysModifiedDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Unit Of Measure Class.
   * @nullable
   */
  declare unitOfMeasureClass?: UnitOfMeasureClass | null;
  /**
   * Decimal Precision.
   */
  declare decimalPrecision: DeserializedType<T, 'Edm.Int32'>;

  constructor(_entityApi: UnitOfMeasureBiEntitiesApi<T>) {
    super(_entityApi);
  }
}

export interface UnitOfMeasureBiEntitiesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  symbol: DeserializedType<T, 'Edm.String'>;
  sysRecVersion: DeserializedType<T, 'Edm.Int32'>;
  systemOfUnits?: UnitOfMeasureSystemOfUnits | null;
  sourceKey: DeserializedType<T, 'Edm.Int64'>;
  sysModifiedDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  unitOfMeasureClass?: UnitOfMeasureClass | null;
  decimalPrecision: DeserializedType<T, 'Edm.Int32'>;
}
