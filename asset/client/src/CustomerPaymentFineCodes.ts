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
import type { CustomerPaymentFineCodesApi } from './CustomerPaymentFineCodesApi';

/**
 * This class represents the entity "CustomerPaymentFineCodes" of service "d365_metadata".
 */
export class CustomerPaymentFineCodes<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements CustomerPaymentFineCodesType<T>
{
  /**
   * Technical entity name for CustomerPaymentFineCodes.
   */
  static override _entityName = 'CustomerPaymentFineCodes';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the CustomerPaymentFineCodes entity.
   */
  static _keys = ['dataAreaId', 'FineCode'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Fine Code.
   */
  declare fineCode: DeserializedType<T, 'Edm.String'>;
  /**
   * Days.
   */
  declare days: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Fine Percent.
   */
  declare finePercent: DeserializedType<T, 'Edm.Decimal'>;

  constructor(_entityApi: CustomerPaymentFineCodesApi<T>) {
    super(_entityApi);
  }
}

export interface CustomerPaymentFineCodesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  fineCode: DeserializedType<T, 'Edm.String'>;
  days: DeserializedType<T, 'Edm.Int32'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
  finePercent: DeserializedType<T, 'Edm.Decimal'>;
}
