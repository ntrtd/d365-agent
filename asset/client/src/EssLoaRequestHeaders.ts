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
import type { EssLoaRequestHeadersApi } from './EssLoaRequestHeadersApi';
import { NoYes } from './NoYes';
import { UnknownNoYes } from './UnknownNoYes';
import { LeaveRequestType } from './LeaveRequestType';
import { LeaveRequestApprovalStatus } from './LeaveRequestApprovalStatus';

/**
 * This class represents the entity "EssLoaRequestHeaders" of service "d365_metadata".
 */
export class EssLoaRequestHeaders<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements EssLoaRequestHeadersType<T>
{
  /**
   * Technical entity name for EssLoaRequestHeaders.
   */
  static override _entityName = 'EssLoaRequestHeaders';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the EssLoaRequestHeaders entity.
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
   * Canceled.
   * @nullable
   */
  declare canceled?: NoYes | null;
  /**
   * Is Submitted By Human Resources.
   * @nullable
   */
  declare isSubmittedByHumanResources?: UnknownNoYes | null;
  /**
   * Request Type.
   * @nullable
   */
  declare requestType?: LeaveRequestType | null;
  /**
   * Leave Type Id.
   * @nullable
   */
  declare leaveTypeId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Submitted By Manager.
   * @nullable
   */
  declare isSubmittedByManager?: UnknownNoYes | null;
  /**
   * First Half Of End Date.
   * @nullable
   */
  declare firstHalfOfEndDate?: NoYes | null;
  /**
   * Personnel Number.
   * @nullable
   */
  declare personnelNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Second Half Of Start Date.
   * @nullable
   */
  declare secondHalfOfStartDate?: NoYes | null;
  /**
   * Amount.
   */
  declare amount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Submitted By User.
   * @nullable
   */
  declare submittedByUser?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Previous Request Id.
   * @nullable
   */
  declare previousRequestId?: DeserializedType<T, 'Edm.String'> | null;
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
   * Is Submitted By Absence Manager.
   * @nullable
   */
  declare isSubmittedByAbsenceManager?: UnknownNoYes | null;
  /**
   * Is Submitted On Behalf Of.
   * @nullable
   */
  declare isSubmittedOnBehalfOf?: UnknownNoYes | null;

  constructor(_entityApi: EssLoaRequestHeadersApi<T>) {
    super(_entityApi);
  }
}

export interface EssLoaRequestHeadersType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  requestId: DeserializedType<T, 'Edm.String'>;
  requestDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  canceled?: NoYes | null;
  isSubmittedByHumanResources?: UnknownNoYes | null;
  requestType?: LeaveRequestType | null;
  leaveTypeId?: DeserializedType<T, 'Edm.String'> | null;
  isSubmittedByManager?: UnknownNoYes | null;
  firstHalfOfEndDate?: NoYes | null;
  personnelNumber?: DeserializedType<T, 'Edm.String'> | null;
  secondHalfOfStartDate?: NoYes | null;
  amount: DeserializedType<T, 'Edm.Decimal'>;
  submittedByUser?: DeserializedType<T, 'Edm.String'> | null;
  previousRequestId?: DeserializedType<T, 'Edm.String'> | null;
  reasonCodeId?: DeserializedType<T, 'Edm.String'> | null;
  comment?: DeserializedType<T, 'Edm.String'> | null;
  startDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  status?: LeaveRequestApprovalStatus | null;
  endDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  isSubmittedByAbsenceManager?: UnknownNoYes | null;
  isSubmittedOnBehalfOf?: UnknownNoYes | null;
}
