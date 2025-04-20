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
import type { PaymentPurposeCodesApi } from './PaymentPurposeCodesApi';

/**
 * This class represents the entity "PaymentPurposeCodes" of service "d365_metadata".
 */
export class PaymentPurposeCodes<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements PaymentPurposeCodesType<T>
{
  /**
   * Technical entity name for PaymentPurposeCodes.
   */
  static override _entityName = 'PaymentPurposeCodes';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the PaymentPurposeCodes entity.
   */
  static _keys = ['dataAreaId', 'CodeId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Code Id.
   */
  declare codeId: DeserializedType<T, 'Edm.String'>;
  /**
   * Name.
   * @nullable
   */
  declare name?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Description Text.
   * @nullable
   */
  declare descriptionText?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Text.
   * @nullable
   */
  declare text?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: PaymentPurposeCodesApi<T>) {
    super(_entityApi);
  }
}

export interface PaymentPurposeCodesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  codeId: DeserializedType<T, 'Edm.String'>;
  name?: DeserializedType<T, 'Edm.String'> | null;
  descriptionText?: DeserializedType<T, 'Edm.String'> | null;
  text?: DeserializedType<T, 'Edm.String'> | null;
}
