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
import type { LeaveBuySellRequestsApi } from './LeaveBuySellRequestsApi';
import { UnknownNoYes } from './UnknownNoYes';
import { LeaveBuySellRequestType } from './LeaveBuySellRequestType';
import { LeaveBuySellRequestApprovalStatus } from './LeaveBuySellRequestApprovalStatus';
import {
  LeaveBuySellPolicies,
  LeaveBuySellPoliciesType
} from './LeaveBuySellPolicies';
import { LeaveTypes, LeaveTypesType } from './LeaveTypes';
import { Workers, WorkersType } from './Workers';

/**
 * This class represents the entity "LeaveBuySellRequests" of service "d365_metadata".
 */
export class LeaveBuySellRequests<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements LeaveBuySellRequestsType<T>
{
  /**
   * Technical entity name for LeaveBuySellRequests.
   */
  static override _entityName = 'LeaveBuySellRequests';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the LeaveBuySellRequests entity.
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
   * Request Type.
   * @nullable
   */
  declare requestType?: LeaveBuySellRequestType | null;
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
   * Policy Id.
   * @nullable
   */
  declare policyId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Status.
   * @nullable
   */
  declare status?: LeaveBuySellRequestApprovalStatus | null;
  /**
   * Is Submitted On Behalf Of.
   * @nullable
   */
  declare isSubmittedOnBehalfOf?: UnknownNoYes | null;
  /**
   * One-to-one navigation property to the {@link LeaveBuySellPolicies} entity.
   */
  declare leaveBuySellPolicy?: LeaveBuySellPolicies<T> | null;
  /**
   * One-to-one navigation property to the {@link LeaveTypes} entity.
   */
  declare leaveType?: LeaveTypes<T> | null;
  /**
   * One-to-one navigation property to the {@link Workers} entity.
   */
  declare worker?: Workers<T> | null;

  constructor(_entityApi: LeaveBuySellRequestsApi<T>) {
    super(_entityApi);
  }
}

export interface LeaveBuySellRequestsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  requestId: DeserializedType<T, 'Edm.String'>;
  requestDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  isSubmittedByHumanResources?: UnknownNoYes | null;
  requestType?: LeaveBuySellRequestType | null;
  leaveTypeId?: DeserializedType<T, 'Edm.String'> | null;
  isSubmittedByManager?: UnknownNoYes | null;
  personnelNumber?: DeserializedType<T, 'Edm.String'> | null;
  amount: DeserializedType<T, 'Edm.Decimal'>;
  submittedByUser?: DeserializedType<T, 'Edm.String'> | null;
  policyId?: DeserializedType<T, 'Edm.String'> | null;
  status?: LeaveBuySellRequestApprovalStatus | null;
  isSubmittedOnBehalfOf?: UnknownNoYes | null;
  leaveBuySellPolicy?: LeaveBuySellPoliciesType<T> | null;
  leaveType?: LeaveTypesType<T> | null;
  worker?: WorkersType<T> | null;
}
