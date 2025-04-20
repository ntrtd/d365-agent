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
import type { CashFlowMgmtPaymentRequestTypesApi } from './CashFlowMgmtPaymentRequestTypesApi';
import { CfmCashFlowDirection } from './CfmCashFlowDirection';

/**
 * This class represents the entity "CashFlowMgmtPaymentRequestTypes" of service "d365_metadata".
 */
export class CashFlowMgmtPaymentRequestTypes<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements CashFlowMgmtPaymentRequestTypesType<T>
{
  /**
   * Technical entity name for CashFlowMgmtPaymentRequestTypes.
   */
  static override _entityName = 'CashFlowMgmtPaymentRequestTypes';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the CashFlowMgmtPaymentRequestTypes entity.
   */
  static _keys = ['PaymentRequestType'];
  /**
   * Payment Request Type.
   */
  declare paymentRequestType: DeserializedType<T, 'Edm.String'>;
  /**
   * Priority Code.
   * @nullable
   */
  declare priorityCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Workflow.
   * @nullable
   */
  declare workflow?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Direction.
   * @nullable
   */
  declare direction?: CfmCashFlowDirection | null;

  constructor(_entityApi: CashFlowMgmtPaymentRequestTypesApi<T>) {
    super(_entityApi);
  }
}

export interface CashFlowMgmtPaymentRequestTypesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  paymentRequestType: DeserializedType<T, 'Edm.String'>;
  priorityCode?: DeserializedType<T, 'Edm.String'> | null;
  workflow?: DeserializedType<T, 'Edm.String'> | null;
  description?: DeserializedType<T, 'Edm.String'> | null;
  direction?: CfmCashFlowDirection | null;
}
