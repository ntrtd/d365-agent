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
import type { LeaveRequestsV2Api } from './LeaveRequestsV2Api';
import { UnknownNoYes } from './UnknownNoYes';
import { LeaveHalfDayDefinition } from './LeaveHalfDayDefinition';
import { LeaveRequestApprovalStatus } from './LeaveRequestApprovalStatus';
import { LeaveTypes, LeaveTypesType } from './LeaveTypes';
import { Workers, WorkersType } from './Workers';
import { ReasonCodes, ReasonCodesType } from './ReasonCodes';

/**
 * This class represents the entity "LeaveRequestsV2" of service "d365_metadata".
 */
export class LeaveRequestsV2<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements LeaveRequestsV2Type<T>
{
  /**
   * Technical entity name for LeaveRequestsV2.
   */
  static override _entityName = 'LeaveRequestsV2';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the LeaveRequestsV2 entity.
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
   * Request Date.
   */
  declare requestDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Is Submitted By Human Resources.
   * @nullable
   */
  declare isSubmittedByHumanResources?: UnknownNoYes | null;
  /**
   * Half Day Definition.
   * @nullable
   */
  declare halfDayDefinition?: LeaveHalfDayDefinition | null;
  /**
   * Is Submitted By Manager.
   * @nullable
   */
  declare isSubmittedByManager?: UnknownNoYes | null;
  /**
   * Personnel Number.
   * @nullable
   */
  declare personnelNumber?: DeserializedType<T, 'Edm.String'> | null;
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
   * Is Submitted By Absence Manager.
   * @nullable
   */
  declare isSubmittedByAbsenceManager?: UnknownNoYes | null;
  /**
   * Is Submitted On Behalf Of.
   * @nullable
   */
  declare isSubmittedOnBehalfOf?: UnknownNoYes | null;
  /**
   * One-to-one navigation property to the {@link LeaveTypes} entity.
   */
  declare leaveRequestV2LeaveType?: LeaveTypes<T> | null;
  /**
   * One-to-one navigation property to the {@link Workers} entity.
   */
  declare worker?: Workers<T> | null;
  /**
   * One-to-one navigation property to the {@link ReasonCodes} entity.
   */
  declare reasonCode?: ReasonCodes<T> | null;

  constructor(_entityApi: LeaveRequestsV2Api<T>) {
    super(_entityApi);
  }
}

export interface LeaveRequestsV2Type<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  requestId: DeserializedType<T, 'Edm.String'>;
  leaveType: DeserializedType<T, 'Edm.String'>;
  leaveDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  requestDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  isSubmittedByHumanResources?: UnknownNoYes | null;
  halfDayDefinition?: LeaveHalfDayDefinition | null;
  isSubmittedByManager?: UnknownNoYes | null;
  personnelNumber?: DeserializedType<T, 'Edm.String'> | null;
  amount: DeserializedType<T, 'Edm.Decimal'>;
  submittedByUser?: DeserializedType<T, 'Edm.String'> | null;
  reasonCodeId?: DeserializedType<T, 'Edm.String'> | null;
  comment?: DeserializedType<T, 'Edm.String'> | null;
  status?: LeaveRequestApprovalStatus | null;
  isSubmittedByAbsenceManager?: UnknownNoYes | null;
  isSubmittedOnBehalfOf?: UnknownNoYes | null;
  leaveRequestV2LeaveType?: LeaveTypesType<T> | null;
  worker?: WorkersType<T> | null;
  reasonCode?: ReasonCodesType<T> | null;
}
