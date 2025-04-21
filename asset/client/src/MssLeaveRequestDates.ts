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
import type { MssLeaveRequestDatesApi } from './MssLeaveRequestDatesApi';
import { LeaveRequestApprovalStatus } from './LeaveRequestApprovalStatus';
import { LeaveHalfDayDefinition } from './LeaveHalfDayDefinition';

/**
 * This class represents the entity "MssLeaveRequestDates" of service "d365_metadata".
 */
export class MssLeaveRequestDates<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements MssLeaveRequestDatesType<T>
{
  /**
   * Technical entity name for MssLeaveRequestDates.
   */
  static override _entityName = 'MssLeaveRequestDates';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the MssLeaveRequestDates entity.
   */
  static _keys = ['dataAreaId', 'RequestId', 'LeaveTypeId', 'LeaveDate'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Request Id.
   */
  declare requestId: DeserializedType<T, 'Edm.String'>;
  /**
   * Leave Type Id.
   */
  declare leaveTypeId: DeserializedType<T, 'Edm.String'>;
  /**
   * Leave Date.
   */
  declare leaveDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Personnel Number.
   * @nullable
   */
  declare personnelNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Leave Request Status.
   * @nullable
   */
  declare leaveRequestStatus?: LeaveRequestApprovalStatus | null;
  /**
   * Amount.
   */
  declare amount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Manager Personnel Number.
   * @nullable
   */
  declare managerPersonnelNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Half Day Definition.
   * @nullable
   */
  declare halfDayDefinition?: LeaveHalfDayDefinition | null;

  constructor(_entityApi: MssLeaveRequestDatesApi<T>) {
    super(_entityApi);
  }
}

export interface MssLeaveRequestDatesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  requestId: DeserializedType<T, 'Edm.String'>;
  leaveTypeId: DeserializedType<T, 'Edm.String'>;
  leaveDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  personnelNumber?: DeserializedType<T, 'Edm.String'> | null;
  leaveRequestStatus?: LeaveRequestApprovalStatus | null;
  amount: DeserializedType<T, 'Edm.Decimal'>;
  managerPersonnelNumber?: DeserializedType<T, 'Edm.String'> | null;
  halfDayDefinition?: LeaveHalfDayDefinition | null;
}
