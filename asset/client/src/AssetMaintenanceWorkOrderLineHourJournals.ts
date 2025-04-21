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
import type { AssetMaintenanceWorkOrderLineHourJournalsApi } from './AssetMaintenanceWorkOrderLineHourJournalsApi';
import { NoYes } from './NoYes';
import { Workers, WorkersType } from './Workers';

/**
 * This class represents the entity "AssetMaintenanceWorkOrderLineHourJournals" of service "d365_metadata".
 */
export class AssetMaintenanceWorkOrderLineHourJournals<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements AssetMaintenanceWorkOrderLineHourJournalsType<T>
{
  /**
   * Technical entity name for AssetMaintenanceWorkOrderLineHourJournals.
   */
  static override _entityName = 'AssetMaintenanceWorkOrderLineHourJournals';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the AssetMaintenanceWorkOrderLineHourJournals entity.
   */
  static _keys = [
    'dataAreaId',
    'WorkOrderId',
    'WorkOrderJobNumber',
    'HourConsumptionNumber',
    'HourConsumptionLineNumber',
    'Voucher'
  ];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Work Order Id.
   */
  declare workOrderId: DeserializedType<T, 'Edm.String'>;
  /**
   * Work Order Job Number.
   */
  declare workOrderJobNumber: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Hour Consumption Number.
   */
  declare hourConsumptionNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Hour Consumption Line Number.
   */
  declare hourConsumptionLineNumber: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Voucher.
   */
  declare voucher: DeserializedType<T, 'Edm.String'>;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Resource Consumed Hours.
   */
  declare resourceConsumedHours: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Is Line Posted.
   * @nullable
   */
  declare isLinePosted?: NoYes | null;
  /**
   * Personnel Number.
   * @nullable
   */
  declare personnelNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Voucher Date.
   */
  declare voucherDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Category Id.
   * @nullable
   */
  declare categoryId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Line Property Id.
   * @nullable
   */
  declare linePropertyId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-one navigation property to the {@link Workers} entity.
   */
  declare worker?: Workers<T> | null;

  constructor(_entityApi: AssetMaintenanceWorkOrderLineHourJournalsApi<T>) {
    super(_entityApi);
  }
}

export interface AssetMaintenanceWorkOrderLineHourJournalsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  workOrderId: DeserializedType<T, 'Edm.String'>;
  workOrderJobNumber: DeserializedType<T, 'Edm.Int64'>;
  hourConsumptionNumber: DeserializedType<T, 'Edm.String'>;
  hourConsumptionLineNumber: DeserializedType<T, 'Edm.Decimal'>;
  voucher: DeserializedType<T, 'Edm.String'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
  resourceConsumedHours: DeserializedType<T, 'Edm.Decimal'>;
  isLinePosted?: NoYes | null;
  personnelNumber?: DeserializedType<T, 'Edm.String'> | null;
  voucherDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  categoryId?: DeserializedType<T, 'Edm.String'> | null;
  linePropertyId?: DeserializedType<T, 'Edm.String'> | null;
  worker?: WorkersType<T> | null;
}
