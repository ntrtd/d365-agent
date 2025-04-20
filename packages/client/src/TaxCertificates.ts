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
import type { TaxCertificatesApi } from './TaxCertificatesApi';
import { TaxCertificateType } from './TaxCertificateType';

/**
 * This class represents the entity "TaxCertificates" of service "d365_metadata".
 */
export class TaxCertificates<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements TaxCertificatesType<T>
{
  /**
   * Technical entity name for TaxCertificates.
   */
  static override _entityName = 'TaxCertificates';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the TaxCertificates entity.
   */
  static _keys = ['dataAreaId', 'UserId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * User Id.
   */
  declare userId: DeserializedType<T, 'Edm.String'>;
  /**
   * Certificates Reference.
   * @nullable
   */
  declare certificatesReference?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Certificate Type.
   * @nullable
   */
  declare certificateType?: TaxCertificateType | null;
  /**
   * Company.
   * @nullable
   */
  declare company?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: TaxCertificatesApi<T>) {
    super(_entityApi);
  }
}

export interface TaxCertificatesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  userId: DeserializedType<T, 'Edm.String'>;
  certificatesReference?: DeserializedType<T, 'Edm.String'> | null;
  certificateType?: TaxCertificateType | null;
  company?: DeserializedType<T, 'Edm.String'> | null;
}
