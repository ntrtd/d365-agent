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
import type { SubBillSchedulelineRemoveHoldsApi } from './SubBillSchedulelineRemoveHoldsApi';

/**
 * This class represents the entity "SubBillSchedulelineRemoveHolds" of service "d365_metadata".
 */
export class SubBillSchedulelineRemoveHolds<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements SubBillSchedulelineRemoveHoldsType<T>
{
  /**
   * Technical entity name for SubBillSchedulelineRemoveHolds.
   */
  static override _entityName = 'SubBillSchedulelineRemoveHolds';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the SubBillSchedulelineRemoveHolds entity.
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
   * Removal Date.
   */
  declare removalDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Deferral Date.
   */
  declare deferralDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Resume Date.
   */
  declare resumeDate: DeserializedType<T, 'Edm.DateTimeOffset'>;

  constructor(_entityApi: SubBillSchedulelineRemoveHoldsApi<T>) {
    super(_entityApi);
  }
}

export interface SubBillSchedulelineRemoveHoldsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  scheduleNumber: DeserializedType<T, 'Edm.String'>;
  lineNum: DeserializedType<T, 'Edm.Decimal'>;
  removalDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  deferralDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  resumeDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
}
