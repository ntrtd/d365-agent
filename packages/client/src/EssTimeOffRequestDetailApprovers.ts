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
import type { EssTimeOffRequestDetailApproversApi } from './EssTimeOffRequestDetailApproversApi';
import { LeaveHalfDayDefinition } from './LeaveHalfDayDefinition';

/**
 * This class represents the entity "EssTimeOffRequestDetailApprovers" of service "d365_metadata".
 */
export class EssTimeOffRequestDetailApprovers<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements EssTimeOffRequestDetailApproversType<T>
{
  /**
   * Technical entity name for EssTimeOffRequestDetailApprovers.
   */
  static override _entityName = 'EssTimeOffRequestDetailApprovers';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the EssTimeOffRequestDetailApprovers entity.
   */
  static _keys = ['LeaveDate', 'LeaveTypeId'];
  /**
   * Leave Date.
   */
  declare leaveDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Leave Type Id.
   */
  declare leaveTypeId: DeserializedType<T, 'Edm.String'>;
  /**
   * Half Day Definition.
   * @nullable
   */
  declare halfDayDefinition?: LeaveHalfDayDefinition | null;
  /**
   * Request Id.
   * @nullable
   */
  declare requestId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Workflow Personnel Number.
   * @nullable
   */
  declare workflowPersonnelNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Amount.
   */
  declare amount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Company Id.
   * @nullable
   */
  declare companyId?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: EssTimeOffRequestDetailApproversApi<T>) {
    super(_entityApi);
  }
}

export interface EssTimeOffRequestDetailApproversType<
  T extends DeSerializers = DefaultDeSerializers
> {
  leaveDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  leaveTypeId: DeserializedType<T, 'Edm.String'>;
  halfDayDefinition?: LeaveHalfDayDefinition | null;
  requestId?: DeserializedType<T, 'Edm.String'> | null;
  workflowPersonnelNumber?: DeserializedType<T, 'Edm.String'> | null;
  amount: DeserializedType<T, 'Edm.Decimal'>;
  companyId?: DeserializedType<T, 'Edm.String'> | null;
}
