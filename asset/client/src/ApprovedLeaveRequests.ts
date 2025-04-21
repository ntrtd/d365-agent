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
import type { ApprovedLeaveRequestsApi } from './ApprovedLeaveRequestsApi';
import { LeaveTypeRequestType } from './LeaveTypeRequestType';
import { LeaveRequestHalfDayDefination } from './LeaveRequestHalfDayDefination';

/**
 * This class represents the entity "ApprovedLeaveRequests" of service "d365_metadata".
 */
export class ApprovedLeaveRequests<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements ApprovedLeaveRequestsType<T>
{
  /**
   * Technical entity name for ApprovedLeaveRequests.
   */
  static override _entityName = 'ApprovedLeaveRequests';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ApprovedLeaveRequests entity.
   */
  static _keys = ['StartDate', 'EndDate', 'Amount'];
  /**
   * Start Date.
   */
  declare startDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * End Date.
   */
  declare endDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Amount.
   */
  declare amount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Personnel Number.
   * @nullable
   */
  declare personnelNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Leave Unit.
   * @nullable
   */
  declare leaveUnit?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Request Id.
   * @nullable
   */
  declare requestId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Request Type.
   * @nullable
   */
  declare requestType?: LeaveTypeRequestType | null;
  /**
   * Type.
   * @nullable
   */
  declare type?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Half Day Definition.
   * @nullable
   */
  declare halfDayDefinition?: LeaveRequestHalfDayDefination | null;

  constructor(_entityApi: ApprovedLeaveRequestsApi<T>) {
    super(_entityApi);
  }
}

export interface ApprovedLeaveRequestsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  startDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  endDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  amount: DeserializedType<T, 'Edm.Decimal'>;
  personnelNumber?: DeserializedType<T, 'Edm.String'> | null;
  leaveUnit?: DeserializedType<T, 'Edm.String'> | null;
  requestId?: DeserializedType<T, 'Edm.String'> | null;
  requestType?: LeaveTypeRequestType | null;
  type?: DeserializedType<T, 'Edm.String'> | null;
  halfDayDefinition?: LeaveRequestHalfDayDefination | null;
}
