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
import type { DualWriteCertificateTypesApi } from './DualWriteCertificateTypesApi';
import { NoYes } from './NoYes';

/**
 * This class represents the entity "DualWriteCertificateTypes" of service "d365_metadata".
 */
export class DualWriteCertificateTypes<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements DualWriteCertificateTypesType<T>
{
  /**
   * Technical entity name for DualWriteCertificateTypes.
   */
  static override _entityName = 'DualWriteCertificateTypes';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the DualWriteCertificateTypes entity.
   */
  static _keys = ['CertificateType', 'CharacteristicType'];
  /**
   * Certificate Type.
   */
  declare certificateType: DeserializedType<T, 'Edm.String'>;
  /**
   * Characteristic Type.
   */
  declare characteristicType: DeserializedType<T, 'Edm.String'>;
  /**
   * Require Renewal.
   * @nullable
   */
  declare requireRenewal?: NoYes | null;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: DualWriteCertificateTypesApi<T>) {
    super(_entityApi);
  }
}

export interface DualWriteCertificateTypesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  certificateType: DeserializedType<T, 'Edm.String'>;
  characteristicType: DeserializedType<T, 'Edm.String'>;
  requireRenewal?: NoYes | null;
  description?: DeserializedType<T, 'Edm.String'> | null;
}
