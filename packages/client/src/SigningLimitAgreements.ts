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
import type { SigningLimitAgreementsApi } from './SigningLimitAgreementsApi';

/**
 * This class represents the entity "SigningLimitAgreements" of service "d365_metadata".
 */
export class SigningLimitAgreements<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements SigningLimitAgreementsType<T>
{
  /**
   * Technical entity name for SigningLimitAgreements.
   */
  static override _entityName = 'SigningLimitAgreements';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the SigningLimitAgreements entity.
   */
  static _keys = ['AgreementName'];
  /**
   * Agreement Name.
   */
  declare agreementName: DeserializedType<T, 'Edm.String'>;
  /**
   * Url.
   * @nullable
   */
  declare url?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Attestation Period.
   */
  declare attestationPeriod: DeserializedType<T, 'Edm.Int32'>;

  constructor(_entityApi: SigningLimitAgreementsApi<T>) {
    super(_entityApi);
  }
}

export interface SigningLimitAgreementsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  agreementName: DeserializedType<T, 'Edm.String'>;
  url?: DeserializedType<T, 'Edm.String'> | null;
  attestationPeriod: DeserializedType<T, 'Edm.Int32'>;
}
