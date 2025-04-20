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
import type { AssetMaintenanceWarrantyLinesApi } from './AssetMaintenanceWarrantyLinesApi';
import { DayWeekMonthQuarterYear } from './DayWeekMonthQuarterYear';
import {
  AssetMaintenanceWarranties,
  AssetMaintenanceWarrantiesType
} from './AssetMaintenanceWarranties';

/**
 * This class represents the entity "AssetMaintenanceWarrantyLines" of service "d365_metadata".
 */
export class AssetMaintenanceWarrantyLines<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements AssetMaintenanceWarrantyLinesType<T>
{
  /**
   * Technical entity name for AssetMaintenanceWarrantyLines.
   */
  static override _entityName = 'AssetMaintenanceWarrantyLines';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the AssetMaintenanceWarrantyLines entity.
   */
  static _keys = ['dataAreaId', 'WarrantyId', 'LineNumber'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Warranty Id.
   */
  declare warrantyId: DeserializedType<T, 'Edm.String'>;
  /**
   * Line Number.
   */
  declare lineNumber: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Percent.
   */
  declare percent: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Interval.
   */
  declare interval: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Period.
   * @nullable
   */
  declare period?: DayWeekMonthQuarterYear | null;
  /**
   * One-to-one navigation property to the {@link AssetMaintenanceWarranties} entity.
   */
  declare assetMaintenanceWarranty?: AssetMaintenanceWarranties<T> | null;

  constructor(_entityApi: AssetMaintenanceWarrantyLinesApi<T>) {
    super(_entityApi);
  }
}

export interface AssetMaintenanceWarrantyLinesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  warrantyId: DeserializedType<T, 'Edm.String'>;
  lineNumber: DeserializedType<T, 'Edm.Decimal'>;
  percent: DeserializedType<T, 'Edm.Decimal'>;
  interval: DeserializedType<T, 'Edm.Int32'>;
  period?: DayWeekMonthQuarterYear | null;
  assetMaintenanceWarranty?: AssetMaintenanceWarrantiesType<T> | null;
}
