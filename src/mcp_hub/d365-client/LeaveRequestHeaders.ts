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
import type { LeaveRequestHeadersApi } from './LeaveRequestHeadersApi';
import { LeaveRequestApprovalStatus } from './LeaveRequestApprovalStatus';
import { Workers, WorkersType } from './Workers';
import { ReasonCodes, ReasonCodesType } from './ReasonCodes';
import {
  LeaveRequestDetails,
  LeaveRequestDetailsType
} from './LeaveRequestDetails';

/**
 * This class represents the entity "LeaveRequestHeaders" of service "d365_metadata".
 */
export class LeaveRequestHeaders<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements LeaveRequestHeadersType<T>
{
  /**
   * Technical entity name for LeaveRequestHeaders.
   */
  static override _entityName = 'LeaveRequestHeaders';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the LeaveRequestHeaders entity.
   */
  static _keys = ['dataAreaId', 'RequestId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Request Id.
   */
  declare requestId: DeserializedType<T, 'Edm.String'>;
  /**
   * Request Date.
   */
  declare requestDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Personnel Number.
   * @nullable
   */
  declare personnelNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Reason Code Id.
   * @nullable
   */
  declare reasonCodeId?: DeserializedType<T, 'Edm.String'> | null;
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
   * One-to-one navigation property to the {@link Workers} entity.
   */
  declare worker?: Workers<T> | null;
  /**
   * One-to-one navigation property to the {@link ReasonCodes} entity.
   */
  declare reasonCode?: ReasonCodes<T> | null;
  /**
   * One-to-many navigation property to the {@link LeaveRequestDetails} entity.
   */
  declare leaveRequestDetails: LeaveRequestDetails<T>[];

  constructor(_entityApi: LeaveRequestHeadersApi<T>) {
    super(_entityApi);
  }
}

export interface LeaveRequestHeadersType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  requestId: DeserializedType<T, 'Edm.String'>;
  requestDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  personnelNumber?: DeserializedType<T, 'Edm.String'> | null;
  reasonCodeId?: DeserializedType<T, 'Edm.String'> | null;
  comment?: DeserializedType<T, 'Edm.String'> | null;
  status?: LeaveRequestApprovalStatus | null;
  worker?: WorkersType<T> | null;
  reasonCode?: ReasonCodesType<T> | null;
  leaveRequestDetails: LeaveRequestDetailsType<T>[];
}
