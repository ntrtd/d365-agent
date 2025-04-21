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
import type { EssLeaveApprovedRequestsApi } from './EssLeaveApprovedRequestsApi';
import { LeaveTypeRequestType } from './LeaveTypeRequestType';
import { LeaveAmountUnit } from './LeaveAmountUnit';
import { LeaveRequestHalfDayDefination } from './LeaveRequestHalfDayDefination';

/**
 * This class represents the entity "EssLeaveApprovedRequests" of service "d365_metadata".
 */
export class EssLeaveApprovedRequests<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements EssLeaveApprovedRequestsType<T>
{
  /**
   * Technical entity name for EssLeaveApprovedRequests.
   */
  static override _entityName = 'EssLeaveApprovedRequests';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the EssLeaveApprovedRequests entity.
   */
  static _keys = [
    'dataAreaId',
    'StartDate',
    'EndDate',
    'RequestType',
    'PersonnelNumber'
  ];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Start Date.
   */
  declare startDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * End Date.
   */
  declare endDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Request Type.
   * @nullable
   */
  declare requestType?: LeaveTypeRequestType | null;
  /**
   * Personnel Number.
   */
  declare personnelNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Leave Unit.
   * @nullable
   */
  declare leaveUnit?: LeaveAmountUnit | null;
  /**
   * Request Id.
   * @nullable
   */
  declare requestId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Amount.
   */
  declare amount: DeserializedType<T, 'Edm.Decimal'>;
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

  constructor(_entityApi: EssLeaveApprovedRequestsApi<T>) {
    super(_entityApi);
  }
}

export interface EssLeaveApprovedRequestsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  startDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  endDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  requestType?: LeaveTypeRequestType | null;
  personnelNumber: DeserializedType<T, 'Edm.String'>;
  leaveUnit?: LeaveAmountUnit | null;
  requestId?: DeserializedType<T, 'Edm.String'> | null;
  amount: DeserializedType<T, 'Edm.Decimal'>;
  type?: DeserializedType<T, 'Edm.String'> | null;
  halfDayDefinition?: LeaveRequestHalfDayDefination | null;
}
