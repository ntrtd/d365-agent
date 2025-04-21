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
import type { MyLeaveRequestsApi } from './MyLeaveRequestsApi';
import { LeaveRequestApprovalStatus } from './LeaveRequestApprovalStatus';
import { LeaveHalfDayDefinition } from './LeaveHalfDayDefinition';

/**
 * This class represents the entity "MyLeaveRequests" of service "d365_metadata".
 */
export class MyLeaveRequests<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements MyLeaveRequestsType<T>
{
  /**
   * Technical entity name for MyLeaveRequests.
   */
  static override _entityName = 'MyLeaveRequests';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the MyLeaveRequests entity.
   */
  static _keys = ['dataAreaId', 'RequestId', 'LeaveType', 'LeaveDate'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Request Id.
   */
  declare requestId: DeserializedType<T, 'Edm.String'>;
  /**
   * Leave Type.
   */
  declare leaveType: DeserializedType<T, 'Edm.String'>;
  /**
   * Leave Date.
   */
  declare leaveDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Reason Code Id.
   * @nullable
   */
  declare reasonCodeId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Personnel Number.
   * @nullable
   */
  declare personnelNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Request Date.
   */
  declare requestDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Comment.
   * @nullable
   */
  declare comment?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Status.
   * @nullable
   */
  declare status?: LeaveRequestApprovalStatus | null;
  /**
   * Amount.
   */
  declare amount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Half Day Definition.
   * @nullable
   */
  declare halfDayDefinition?: LeaveHalfDayDefinition | null;

  constructor(_entityApi: MyLeaveRequestsApi<T>) {
    super(_entityApi);
  }
}

export interface MyLeaveRequestsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  requestId: DeserializedType<T, 'Edm.String'>;
  leaveType: DeserializedType<T, 'Edm.String'>;
  leaveDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  reasonCodeId?: DeserializedType<T, 'Edm.String'> | null;
  personnelNumber?: DeserializedType<T, 'Edm.String'> | null;
  requestDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  comment?: DeserializedType<T, 'Edm.String'> | null;
  status?: LeaveRequestApprovalStatus | null;
  amount: DeserializedType<T, 'Edm.Decimal'>;
  halfDayDefinition?: LeaveHalfDayDefinition | null;
}
