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
import type { HcmWorkerPersonIdentificationNumberDualWriteApi } from './HcmWorkerPersonIdentificationNumberDualWriteApi';
import { NoYes } from './NoYes';
import { Workers, WorkersType } from './Workers';

/**
 * This class represents the entity "HcmWorkerPersonIdentificationNumberDualWrite" of service "d365_metadata".
 */
export class HcmWorkerPersonIdentificationNumberDualWrite<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements HcmWorkerPersonIdentificationNumberDualWriteType<T>
{
  /**
   * Technical entity name for HcmWorkerPersonIdentificationNumberDualWrite.
   */
  static override _entityName = 'HcmWorkerPersonIdentificationNumberDualWrite';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the HcmWorkerPersonIdentificationNumberDualWrite entity.
   */
  static _keys = [
    'WorkerNumber',
    'IdentificationTypeId',
    'IdentificationNumber'
  ];
  /**
   * Worker Number.
   */
  declare workerNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Identification Type Id.
   */
  declare identificationTypeId: DeserializedType<T, 'Edm.String'>;
  /**
   * Identification Number.
   */
  declare identificationNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Expiration Date.
   */
  declare expirationDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Primary.
   * @nullable
   */
  declare isPrimary?: NoYes | null;
  /**
   * Issuing Agency Id.
   * @nullable
   */
  declare issuingAgencyId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Issue Date.
   */
  declare issueDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Party Number.
   * @nullable
   */
  declare partyNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Entry Type.
   * @nullable
   */
  declare entryType?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-one navigation property to the {@link Workers} entity.
   */
  declare worker?: Workers<T> | null;

  constructor(_entityApi: HcmWorkerPersonIdentificationNumberDualWriteApi<T>) {
    super(_entityApi);
  }
}

export interface HcmWorkerPersonIdentificationNumberDualWriteType<
  T extends DeSerializers = DefaultDeSerializers
> {
  workerNumber: DeserializedType<T, 'Edm.String'>;
  identificationTypeId: DeserializedType<T, 'Edm.String'>;
  identificationNumber: DeserializedType<T, 'Edm.String'>;
  expirationDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
  isPrimary?: NoYes | null;
  issuingAgencyId?: DeserializedType<T, 'Edm.String'> | null;
  issueDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  partyNumber?: DeserializedType<T, 'Edm.String'> | null;
  entryType?: DeserializedType<T, 'Edm.String'> | null;
  worker?: WorkersType<T> | null;
}
