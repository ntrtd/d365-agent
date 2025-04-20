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
import type { RetailUserDefinedCertificateProfileSettingsApi } from './RetailUserDefinedCertificateProfileSettingsApi';
import { RetailUserDefinedCertificateProfileLineLocationType } from './RetailUserDefinedCertificateProfileLineLocationType';

/**
 * This class represents the entity "RetailUserDefinedCertificateProfileSettings" of service "d365_metadata".
 */
export class RetailUserDefinedCertificateProfileSettings<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements RetailUserDefinedCertificateProfileSettingsType<T>
{
  /**
   * Technical entity name for RetailUserDefinedCertificateProfileSettings.
   */
  static override _entityName = 'RetailUserDefinedCertificateProfileSettings';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the RetailUserDefinedCertificateProfileSettings entity.
   */
  static _keys = ['CertificateProfile', 'LegalEntity', 'Priority'];
  /**
   * Certificate Profile.
   */
  declare certificateProfile: DeserializedType<T, 'Edm.String'>;
  /**
   * Legal Entity.
   */
  declare legalEntity: DeserializedType<T, 'Edm.String'>;
  /**
   * Priority.
   */
  declare priority: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Key Vault Certificate.
   * @nullable
   */
  declare keyVaultCertificate?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Comments.
   * @nullable
   */
  declare comments?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Name.
   * @nullable
   */
  declare name?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Store Name.
   * @nullable
   */
  declare storeName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Store Location.
   * @nullable
   */
  declare storeLocation?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Location Type.
   * @nullable
   */
  declare locationType?: RetailUserDefinedCertificateProfileLineLocationType | null;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Thumbprint.
   * @nullable
   */
  declare thumbprint?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: RetailUserDefinedCertificateProfileSettingsApi<T>) {
    super(_entityApi);
  }
}

export interface RetailUserDefinedCertificateProfileSettingsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  certificateProfile: DeserializedType<T, 'Edm.String'>;
  legalEntity: DeserializedType<T, 'Edm.String'>;
  priority: DeserializedType<T, 'Edm.Int32'>;
  keyVaultCertificate?: DeserializedType<T, 'Edm.String'> | null;
  comments?: DeserializedType<T, 'Edm.String'> | null;
  name?: DeserializedType<T, 'Edm.String'> | null;
  storeName?: DeserializedType<T, 'Edm.String'> | null;
  storeLocation?: DeserializedType<T, 'Edm.String'> | null;
  locationType?: RetailUserDefinedCertificateProfileLineLocationType | null;
  description?: DeserializedType<T, 'Edm.String'> | null;
  thumbprint?: DeserializedType<T, 'Edm.String'> | null;
}
