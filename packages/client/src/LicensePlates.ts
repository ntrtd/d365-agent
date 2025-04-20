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
import type { LicensePlatesApi } from './LicensePlatesApi';
import {
  CycleCountingWarehouseWorkLinesV2,
  CycleCountingWarehouseWorkLinesV2Type
} from './CycleCountingWarehouseWorkLinesV2';
import {
  LicensePlateReceivingRegistrationsHistory,
  LicensePlateReceivingRegistrationsHistoryType
} from './LicensePlateReceivingRegistrationsHistory';
import {
  ItemArrivalJournalLinesV2,
  ItemArrivalJournalLinesV2Type
} from './ItemArrivalJournalLinesV2';
import {
  QualityOrderHeaders,
  QualityOrderHeadersType
} from './QualityOrderHeaders';
import {
  CycleCountingWarehouseWorkLinesV3,
  CycleCountingWarehouseWorkLinesV3Type
} from './CycleCountingWarehouseWorkLinesV3';
import {
  ItemArrivalJournalHeadersV2,
  ItemArrivalJournalHeadersV2Type
} from './ItemArrivalJournalHeadersV2';
import {
  OrderCommittedLicensePlateReservations,
  OrderCommittedLicensePlateReservationsType
} from './OrderCommittedLicensePlateReservations';
import {
  CycleCountingWarehouseWorkLines,
  CycleCountingWarehouseWorkLinesType
} from './CycleCountingWarehouseWorkLines';

/**
 * This class represents the entity "LicensePlates" of service "d365_metadata".
 */
export class LicensePlates<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements LicensePlatesType<T>
{
  /**
   * Technical entity name for LicensePlates.
   */
  static override _entityName = 'LicensePlates';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the LicensePlates entity.
   */
  static _keys = ['dataAreaId', 'LicensePlateNumber'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * License Plate Number.
   */
  declare licensePlateNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Level.
   */
  declare level: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Aging Date.
   */
  declare agingDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Container Type Id.
   * @nullable
   */
  declare containerTypeId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Parent License Plate Number.
   * @nullable
   */
  declare parentLicensePlateNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-many navigation property to the {@link CycleCountingWarehouseWorkLinesV2} entity.
   */
  declare cycleCountingWarehouseWorkLinesV2: CycleCountingWarehouseWorkLinesV2<T>[];
  /**
   * One-to-many navigation property to the {@link LicensePlateReceivingRegistrationsHistory} entity.
   */
  declare licensePlateReceivedDetails: LicensePlateReceivingRegistrationsHistory<T>[];
  /**
   * One-to-many navigation property to the {@link ItemArrivalJournalLinesV2} entity.
   */
  declare itemArrivalJournalLinesV2: ItemArrivalJournalLinesV2<T>[];
  /**
   * One-to-many navigation property to the {@link QualityOrderHeaders} entity.
   */
  declare qualityOrderHeaders: QualityOrderHeaders<T>[];
  /**
   * One-to-many navigation property to the {@link CycleCountingWarehouseWorkLinesV3} entity.
   */
  declare cycleCountingWarehouseWorkLinesV3: CycleCountingWarehouseWorkLinesV3<T>[];
  /**
   * One-to-many navigation property to the {@link ItemArrivalJournalHeadersV2} entity.
   */
  declare itemArrivalJournalHeadersV2: ItemArrivalJournalHeadersV2<T>[];
  /**
   * One-to-many navigation property to the {@link OrderCommittedLicensePlateReservations} entity.
   */
  declare orderCommittedLicensePlateReservations: OrderCommittedLicensePlateReservations<T>[];
  /**
   * One-to-many navigation property to the {@link CycleCountingWarehouseWorkLines} entity.
   */
  declare cycleCountingWarehouseWorkLines: CycleCountingWarehouseWorkLines<T>[];

  constructor(_entityApi: LicensePlatesApi<T>) {
    super(_entityApi);
  }
}

export interface LicensePlatesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  licensePlateNumber: DeserializedType<T, 'Edm.String'>;
  level: DeserializedType<T, 'Edm.Int32'>;
  agingDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  containerTypeId?: DeserializedType<T, 'Edm.String'> | null;
  parentLicensePlateNumber?: DeserializedType<T, 'Edm.String'> | null;
  cycleCountingWarehouseWorkLinesV2: CycleCountingWarehouseWorkLinesV2Type<T>[];
  licensePlateReceivedDetails: LicensePlateReceivingRegistrationsHistoryType<T>[];
  itemArrivalJournalLinesV2: ItemArrivalJournalLinesV2Type<T>[];
  qualityOrderHeaders: QualityOrderHeadersType<T>[];
  cycleCountingWarehouseWorkLinesV3: CycleCountingWarehouseWorkLinesV3Type<T>[];
  itemArrivalJournalHeadersV2: ItemArrivalJournalHeadersV2Type<T>[];
  orderCommittedLicensePlateReservations: OrderCommittedLicensePlateReservationsType<T>[];
  cycleCountingWarehouseWorkLines: CycleCountingWarehouseWorkLinesType<T>[];
}
