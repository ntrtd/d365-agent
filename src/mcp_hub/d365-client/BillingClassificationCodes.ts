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
import type { BillingClassificationCodesApi } from './BillingClassificationCodesApi';

/**
 * This class represents the entity "BillingClassificationCodes" of service "d365_metadata".
 */
export class BillingClassificationCodes<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements BillingClassificationCodesType<T>
{
  /**
   * Technical entity name for BillingClassificationCodes.
   */
  static override _entityName = 'BillingClassificationCodes';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the BillingClassificationCodes entity.
   */
  static _keys = ['dataAreaId', 'BillingCode'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Billing Code.
   */
  declare billingCode: DeserializedType<T, 'Edm.String'>;
  /**
   * Billing Classification.
   * @nullable
   */
  declare billingClassification?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: BillingClassificationCodesApi<T>) {
    super(_entityApi);
  }
}

export interface BillingClassificationCodesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  billingCode: DeserializedType<T, 'Edm.String'>;
  billingClassification?: DeserializedType<T, 'Edm.String'> | null;
}
