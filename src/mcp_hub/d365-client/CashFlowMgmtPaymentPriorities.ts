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
import type { CashFlowMgmtPaymentPrioritiesApi } from './CashFlowMgmtPaymentPrioritiesApi';

/**
 * This class represents the entity "CashFlowMgmtPaymentPriorities" of service "d365_metadata".
 */
export class CashFlowMgmtPaymentPriorities<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements CashFlowMgmtPaymentPrioritiesType<T>
{
  /**
   * Technical entity name for CashFlowMgmtPaymentPriorities.
   */
  static override _entityName = 'CashFlowMgmtPaymentPriorities';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the CashFlowMgmtPaymentPriorities entity.
   */
  static _keys = ['PriorityCode'];
  /**
   * Priority Code.
   */
  declare priorityCode: DeserializedType<T, 'Edm.String'>;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Matching Priority.
   */
  declare matchingPriority: DeserializedType<T, 'Edm.Decimal'>;

  constructor(_entityApi: CashFlowMgmtPaymentPrioritiesApi<T>) {
    super(_entityApi);
  }
}

export interface CashFlowMgmtPaymentPrioritiesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  priorityCode: DeserializedType<T, 'Edm.String'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
  matchingPriority: DeserializedType<T, 'Edm.Decimal'>;
}
