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
import type { SubBillScheduleLinePlaceHoldsApi } from './SubBillScheduleLinePlaceHoldsApi';

/**
 * This class represents the entity "SubBillScheduleLinePlaceHolds" of service "d365_metadata".
 */
export class SubBillScheduleLinePlaceHolds<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements SubBillScheduleLinePlaceHoldsType<T>
{
  /**
   * Technical entity name for SubBillScheduleLinePlaceHolds.
   */
  static override _entityName = 'SubBillScheduleLinePlaceHolds';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the SubBillScheduleLinePlaceHolds entity.
   */
  static _keys = ['dataAreaId', 'ScheduleNumber', 'LineNum'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Schedule Number.
   */
  declare scheduleNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Line Num.
   */
  declare lineNum: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Hold Date.
   */
  declare holdDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Hold Notes.
   * @nullable
   */
  declare holdNotes?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Adjust Schedule.
   */
  declare adjustSchedule: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Hold Reason Code.
   * @nullable
   */
  declare holdReasonCode?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: SubBillScheduleLinePlaceHoldsApi<T>) {
    super(_entityApi);
  }
}

export interface SubBillScheduleLinePlaceHoldsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  scheduleNumber: DeserializedType<T, 'Edm.String'>;
  lineNum: DeserializedType<T, 'Edm.Decimal'>;
  holdDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  holdNotes?: DeserializedType<T, 'Edm.String'> | null;
  adjustSchedule: DeserializedType<T, 'Edm.Int32'>;
  holdReasonCode?: DeserializedType<T, 'Edm.String'> | null;
}
