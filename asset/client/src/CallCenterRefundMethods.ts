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
import type { CallCenterRefundMethodsApi } from './CallCenterRefundMethodsApi';

/**
 * This class represents the entity "CallCenterRefundMethods" of service "d365_metadata".
 */
export class CallCenterRefundMethods<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements CallCenterRefundMethodsType<T>
{
  /**
   * Technical entity name for CallCenterRefundMethods.
   */
  static override _entityName = 'CallCenterRefundMethods';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the CallCenterRefundMethods entity.
   */
  static _keys = ['dataAreaId', 'CurrencyCode'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Currency Code.
   */
  declare currencyCode: DeserializedType<T, 'Edm.String'>;
  /**
   * Tender Type Id.
   * @nullable
   */
  declare tenderTypeId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Payment Mode.
   * @nullable
   */
  declare paymentMode?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: CallCenterRefundMethodsApi<T>) {
    super(_entityApi);
  }
}

export interface CallCenterRefundMethodsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  currencyCode: DeserializedType<T, 'Edm.String'>;
  tenderTypeId?: DeserializedType<T, 'Edm.String'> | null;
  paymentMode?: DeserializedType<T, 'Edm.String'> | null;
}
