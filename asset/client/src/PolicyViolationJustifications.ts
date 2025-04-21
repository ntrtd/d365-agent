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
import type { PolicyViolationJustificationsApi } from './PolicyViolationJustificationsApi';
import { TrvWorkflowAction } from './TrvWorkflowAction';
import { TrvPolicyViolationJustificationTypeEnum } from './TrvPolicyViolationJustificationTypeEnum';

/**
 * This class represents the entity "PolicyViolationJustifications" of service "d365_metadata".
 */
export class PolicyViolationJustifications<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements PolicyViolationJustificationsType<T>
{
  /**
   * Technical entity name for PolicyViolationJustifications.
   */
  static override _entityName = 'PolicyViolationJustifications';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the PolicyViolationJustifications entity.
   */
  static _keys = ['JustificationId'];
  /**
   * Justification Id.
   */
  declare justificationId: DeserializedType<T, 'Edm.Guid'>;
  /**
   * Personnel Number.
   * @nullable
   */
  declare personnelNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Justification Text.
   * @nullable
   */
  declare justificationText?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Action.
   * @nullable
   */
  declare action?: TrvWorkflowAction | null;
  /**
   * Violating Record Id.
   * @nullable
   */
  declare violatingRecordId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Violation Justification Type.
   * @nullable
   */
  declare violationJustificationType?: TrvPolicyViolationJustificationTypeEnum | null;

  constructor(_entityApi: PolicyViolationJustificationsApi<T>) {
    super(_entityApi);
  }
}

export interface PolicyViolationJustificationsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  justificationId: DeserializedType<T, 'Edm.Guid'>;
  personnelNumber?: DeserializedType<T, 'Edm.String'> | null;
  justificationText?: DeserializedType<T, 'Edm.String'> | null;
  action?: TrvWorkflowAction | null;
  violatingRecordId?: DeserializedType<T, 'Edm.String'> | null;
  violationJustificationType?: TrvPolicyViolationJustificationTypeEnum | null;
}
