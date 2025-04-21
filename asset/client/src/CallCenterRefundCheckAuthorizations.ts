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
import type { CallCenterRefundCheckAuthorizationsApi } from './CallCenterRefundCheckAuthorizationsApi';
import { McrrcAuthStatus } from './McrrcAuthStatus';

/**
 * This class represents the entity "CallCenterRefundCheckAuthorizations" of service "d365_metadata".
 */
export class CallCenterRefundCheckAuthorizations<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements CallCenterRefundCheckAuthorizationsType<T>
{
  /**
   * Technical entity name for CallCenterRefundCheckAuthorizations.
   */
  static override _entityName = 'CallCenterRefundCheckAuthorizations';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the CallCenterRefundCheckAuthorizations entity.
   */
  static _keys = ['dataAreaId', 'SalesId', 'LineNumber'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Sales Id.
   */
  declare salesId: DeserializedType<T, 'Edm.String'>;
  /**
   * Line Number.
   */
  declare lineNumber: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Authorized Date Time.
   */
  declare authorizedDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Refund Check Settlement Line Number.
   */
  declare refundCheckSettlementLineNumber: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Authorization Status.
   * @nullable
   */
  declare authorizationStatus?: McrrcAuthStatus | null;
  /**
   * Authorized Amount.
   */
  declare authorizedAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Customer Payment Line Number.
   */
  declare customerPaymentLineNumber: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Authorized By.
   * @nullable
   */
  declare authorizedBy?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: CallCenterRefundCheckAuthorizationsApi<T>) {
    super(_entityApi);
  }
}

export interface CallCenterRefundCheckAuthorizationsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  salesId: DeserializedType<T, 'Edm.String'>;
  lineNumber: DeserializedType<T, 'Edm.Decimal'>;
  authorizedDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  refundCheckSettlementLineNumber: DeserializedType<T, 'Edm.Decimal'>;
  authorizationStatus?: McrrcAuthStatus | null;
  authorizedAmount: DeserializedType<T, 'Edm.Decimal'>;
  customerPaymentLineNumber: DeserializedType<T, 'Edm.Decimal'>;
  authorizedBy?: DeserializedType<T, 'Edm.String'> | null;
}
