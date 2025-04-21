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
import type { SigningLimitRevocationReasonCodesApi } from './SigningLimitRevocationReasonCodesApi';

/**
 * This class represents the entity "SigningLimitRevocationReasonCodes" of service "d365_metadata".
 */
export class SigningLimitRevocationReasonCodes<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements SigningLimitRevocationReasonCodesType<T>
{
  /**
   * Technical entity name for SigningLimitRevocationReasonCodes.
   */
  static override _entityName = 'SigningLimitRevocationReasonCodes';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the SigningLimitRevocationReasonCodes entity.
   */
  static _keys = ['ReasonCode'];
  /**
   * Reason Code.
   */
  declare reasonCode: DeserializedType<T, 'Edm.String'>;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: SigningLimitRevocationReasonCodesApi<T>) {
    super(_entityApi);
  }
}

export interface SigningLimitRevocationReasonCodesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  reasonCode: DeserializedType<T, 'Edm.String'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
}
