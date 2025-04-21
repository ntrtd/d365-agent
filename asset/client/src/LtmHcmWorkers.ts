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
import type { LtmHcmWorkersApi } from './LtmHcmWorkersApi';

/**
 * This class represents the entity "LTMHcmWorkers" of service "d365_metadata".
 */
export class LtmHcmWorkers<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements LtmHcmWorkersType<T>
{
  /**
   * Technical entity name for LtmHcmWorkers.
   */
  static override _entityName = 'LTMHcmWorkers';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the LtmHcmWorkers entity.
   */
  static _keys = ['dataAreaId', 'PersonnelNumber'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Personnel Number.
   */
  declare personnelNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Concept 3.
   * @nullable
   */
  declare concept3?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Country Doc Type Id.
   * @nullable
   */
  declare countryDocTypeId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Tax Payer Type Id.
   * @nullable
   */
  declare taxPayerTypeId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Concept 1.
   * @nullable
   */
  declare concept1?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Country Region Id.
   * @nullable
   */
  declare countryRegionId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Concept 2.
   * @nullable
   */
  declare concept2?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * State Doc Type Id.
   * @nullable
   */
  declare stateDocTypeId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * State Doc Num.
   * @nullable
   */
  declare stateDocNum?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * State Id.
   * @nullable
   */
  declare stateId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Country Doc Num.
   * @nullable
   */
  declare countryDocNum?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Note 3.
   * @nullable
   */
  declare note3?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Note 2.
   * @nullable
   */
  declare note2?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Note 1.
   * @nullable
   */
  declare note1?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: LtmHcmWorkersApi<T>) {
    super(_entityApi);
  }
}

export interface LtmHcmWorkersType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  personnelNumber: DeserializedType<T, 'Edm.String'>;
  concept3?: DeserializedType<T, 'Edm.String'> | null;
  countryDocTypeId?: DeserializedType<T, 'Edm.String'> | null;
  taxPayerTypeId?: DeserializedType<T, 'Edm.String'> | null;
  concept1?: DeserializedType<T, 'Edm.String'> | null;
  countryRegionId?: DeserializedType<T, 'Edm.String'> | null;
  concept2?: DeserializedType<T, 'Edm.String'> | null;
  stateDocTypeId?: DeserializedType<T, 'Edm.String'> | null;
  stateDocNum?: DeserializedType<T, 'Edm.String'> | null;
  stateId?: DeserializedType<T, 'Edm.String'> | null;
  countryDocNum?: DeserializedType<T, 'Edm.String'> | null;
  note3?: DeserializedType<T, 'Edm.String'> | null;
  note2?: DeserializedType<T, 'Edm.String'> | null;
  note1?: DeserializedType<T, 'Edm.String'> | null;
}
