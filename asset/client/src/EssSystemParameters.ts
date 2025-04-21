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
import type { EssSystemParametersApi } from './EssSystemParametersApi';

/**
 * This class represents the entity "EssSystemParameters" of service "d365_metadata".
 */
export class EssSystemParameters<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements EssSystemParametersType<T>
{
  /**
   * Technical entity name for EssSystemParameters.
   */
  static override _entityName = 'EssSystemParameters';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the EssSystemParameters entity.
   */
  static _keys = ['Key'];
  /**
   * Key.
   */
  declare key: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Organization Privacy Statement Url.
   * @nullable
   */
  declare organizationPrivacyStatementUrl?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * System Language Id.
   * @nullable
   */
  declare systemLanguageId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Organization Legal Terms Url.
   * @nullable
   */
  declare organizationLegalTermsUrl?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: EssSystemParametersApi<T>) {
    super(_entityApi);
  }
}

export interface EssSystemParametersType<
  T extends DeSerializers = DefaultDeSerializers
> {
  key: DeserializedType<T, 'Edm.Int32'>;
  organizationPrivacyStatementUrl?: DeserializedType<T, 'Edm.String'> | null;
  systemLanguageId?: DeserializedType<T, 'Edm.String'> | null;
  organizationLegalTermsUrl?: DeserializedType<T, 'Edm.String'> | null;
}
