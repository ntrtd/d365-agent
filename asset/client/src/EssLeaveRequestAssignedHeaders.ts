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
import type { EssLeaveRequestAssignedHeadersApi } from './EssLeaveRequestAssignedHeadersApi';
import { UnknownNoYes } from './UnknownNoYes';
import { LeaveClassification } from './LeaveClassification';
import { LeaveRequestApprovalStatus } from './LeaveRequestApprovalStatus';
import {
  EssLeaveRequestAssignedDetails,
  EssLeaveRequestAssignedDetailsType
} from './EssLeaveRequestAssignedDetails';
import { EssWorkers, EssWorkersType } from './EssWorkers';

/**
 * This class represents the entity "EssLeaveRequestAssignedHeaders" of service "d365_metadata".
 */
export class EssLeaveRequestAssignedHeaders<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements EssLeaveRequestAssignedHeadersType<T>
{
  /**
   * Technical entity name for EssLeaveRequestAssignedHeaders.
   */
  static override _entityName = 'EssLeaveRequestAssignedHeaders';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the EssLeaveRequestAssignedHeaders entity.
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
   * Is Submitted By Human Resources.
   * @nullable
   */
  declare isSubmittedByHumanResources?: UnknownNoYes | null;
  /**
   * Is Submitted By Manager.
   * @nullable
   */
  declare isSubmittedByManager?: UnknownNoYes | null;
  /**
   * Leave Classification.
   * @nullable
   */
  declare leaveClassification?: LeaveClassification | null;
  /**
   * Personnel Number.
   * @nullable
   */
  declare personnelNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Submitted By User.
   * @nullable
   */
  declare submittedByUser?: DeserializedType<T, 'Edm.String'> | null;
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
   * Start Date.
   */
  declare startDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Status.
   * @nullable
   */
  declare status?: LeaveRequestApprovalStatus | null;
  /**
   * End Date.
   */
  declare endDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Is Submitted On Behalf Of.
   * @nullable
   */
  declare isSubmittedOnBehalfOf?: UnknownNoYes | null;
  /**
   * One-to-many navigation property to the {@link EssLeaveRequestAssignedDetails} entity.
   */
  declare details: EssLeaveRequestAssignedDetails<T>[];
  /**
   * One-to-one navigation property to the {@link EssWorkers} entity.
   */
  declare submittedBy?: EssWorkers<T> | null;

  constructor(_entityApi: EssLeaveRequestAssignedHeadersApi<T>) {
    super(_entityApi);
  }
}

export interface EssLeaveRequestAssignedHeadersType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  requestId: DeserializedType<T, 'Edm.String'>;
  requestDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  isSubmittedByHumanResources?: UnknownNoYes | null;
  isSubmittedByManager?: UnknownNoYes | null;
  leaveClassification?: LeaveClassification | null;
  personnelNumber?: DeserializedType<T, 'Edm.String'> | null;
  submittedByUser?: DeserializedType<T, 'Edm.String'> | null;
  reasonCodeId?: DeserializedType<T, 'Edm.String'> | null;
  comment?: DeserializedType<T, 'Edm.String'> | null;
  startDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  status?: LeaveRequestApprovalStatus | null;
  endDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  isSubmittedOnBehalfOf?: UnknownNoYes | null;
  details: EssLeaveRequestAssignedDetailsType<T>[];
  submittedBy?: EssWorkersType<T> | null;
}
