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
import type { WarehouseInventoryOnhandReportsApi } from './WarehouseInventoryOnhandReportsApi';
import { NoYes } from './NoYes';
import {
  SourceSystemWarehouseInventoryOnhandReportLines,
  SourceSystemWarehouseInventoryOnhandReportLinesType
} from './SourceSystemWarehouseInventoryOnhandReportLines';
import {
  WarehouseInventoryOnhandReportLines,
  WarehouseInventoryOnhandReportLinesType
} from './WarehouseInventoryOnhandReportLines';

/**
 * This class represents the entity "WarehouseInventoryOnhandReports" of service "d365_metadata".
 */
export class WarehouseInventoryOnhandReports<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements WarehouseInventoryOnhandReportsType<T>
{
  /**
   * Technical entity name for WarehouseInventoryOnhandReports.
   */
  static override _entityName = 'WarehouseInventoryOnhandReports';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the WarehouseInventoryOnhandReports entity.
   */
  static _keys = ['dataAreaId', 'ReportNumber'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Report Number.
   */
  declare reportNumber: DeserializedType<T, 'Edm.Guid'>;
  /**
   * Include Item Batch Number Dimension.
   * @nullable
   */
  declare includeItemBatchNumberDimension?: NoYes | null;
  /**
   * Include Product Color Dimension.
   * @nullable
   */
  declare includeProductColorDimension?: NoYes | null;
  /**
   * Include Item Serial Number Dimension.
   * @nullable
   */
  declare includeItemSerialNumberDimension?: NoYes | null;
  /**
   * Include Product Version Dimension.
   * @nullable
   */
  declare includeProductVersionDimension?: NoYes | null;
  /**
   * Report Execution Time.
   */
  declare reportExecutionTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Include Warehouse Location Dimension.
   * @nullable
   */
  declare includeWarehouseLocationDimension?: NoYes | null;
  /**
   * Include Inventory Status Dimension.
   * @nullable
   */
  declare includeInventoryStatusDimension?: NoYes | null;
  /**
   * Include Inventory Owner Dimension.
   * @nullable
   */
  declare includeInventoryOwnerDimension?: NoYes | null;
  /**
   * Inventory As Of Date.
   */
  declare inventoryAsOfDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Report Name.
   * @nullable
   */
  declare reportName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Include Product Size Dimension.
   * @nullable
   */
  declare includeProductSizeDimension?: NoYes | null;
  /**
   * Include Inventory Profile Dimension.
   * @nullable
   */
  declare includeInventoryProfileDimension?: NoYes | null;
  /**
   * Include Warehouse Dimension.
   * @nullable
   */
  declare includeWarehouseDimension?: NoYes | null;
  /**
   * Include Product Configuration Dimension.
   * @nullable
   */
  declare includeProductConfigurationDimension?: NoYes | null;
  /**
   * Include Inventory Gtd Dimension.
   * @nullable
   */
  declare includeInventoryGtdDimension?: NoYes | null;
  /**
   * Include Product Style Dimension.
   * @nullable
   */
  declare includeProductStyleDimension?: NoYes | null;
  /**
   * Include Registered And Picked Transactions.
   * @nullable
   */
  declare includeRegisteredAndPickedTransactions?: NoYes | null;
  /**
   * One-to-many navigation property to the {@link SourceSystemWarehouseInventoryOnhandReportLines} entity.
   */
  declare sourceSystemWarehouseInventoryOnhandReportLine: SourceSystemWarehouseInventoryOnhandReportLines<T>[];
  /**
   * One-to-many navigation property to the {@link WarehouseInventoryOnhandReportLines} entity.
   */
  declare warehouseInventoryOnhandReportLine: WarehouseInventoryOnhandReportLines<T>[];

  constructor(_entityApi: WarehouseInventoryOnhandReportsApi<T>) {
    super(_entityApi);
  }
}

export interface WarehouseInventoryOnhandReportsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  reportNumber: DeserializedType<T, 'Edm.Guid'>;
  includeItemBatchNumberDimension?: NoYes | null;
  includeProductColorDimension?: NoYes | null;
  includeItemSerialNumberDimension?: NoYes | null;
  includeProductVersionDimension?: NoYes | null;
  reportExecutionTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  includeWarehouseLocationDimension?: NoYes | null;
  includeInventoryStatusDimension?: NoYes | null;
  includeInventoryOwnerDimension?: NoYes | null;
  inventoryAsOfDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  reportName?: DeserializedType<T, 'Edm.String'> | null;
  includeProductSizeDimension?: NoYes | null;
  includeInventoryProfileDimension?: NoYes | null;
  includeWarehouseDimension?: NoYes | null;
  includeProductConfigurationDimension?: NoYes | null;
  includeInventoryGtdDimension?: NoYes | null;
  includeProductStyleDimension?: NoYes | null;
  includeRegisteredAndPickedTransactions?: NoYes | null;
  sourceSystemWarehouseInventoryOnhandReportLine: SourceSystemWarehouseInventoryOnhandReportLinesType<T>[];
  warehouseInventoryOnhandReportLine: WarehouseInventoryOnhandReportLinesType<T>[];
}
