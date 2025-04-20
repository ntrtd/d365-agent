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
import type { HcmWorkerAdvHolderTablesApi } from './HcmWorkerAdvHolderTablesApi';
import { NoYes } from './NoYes';

/**
 * This class represents the entity "HcmWorkerAdvHolderTables" of service "d365_metadata".
 */
export class HcmWorkerAdvHolderTables<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements HcmWorkerAdvHolderTablesType<T>
{
  /**
   * Technical entity name for HcmWorkerAdvHolderTables.
   */
  static override _entityName = 'HcmWorkerAdvHolderTables';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the HcmWorkerAdvHolderTables entity.
   */
  static _keys = [
    'EmployeeId',
    'PersonnelNumber',
    'Company',
    'ValidFrom',
    'ValidTo'
  ];
  /**
   * Employee Id.
   */
  declare employeeId: DeserializedType<T, 'Edm.String'>;
  /**
   * Personnel Number.
   */
  declare personnelNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Company.
   */
  declare company: DeserializedType<T, 'Edm.String'>;
  /**
   * Valid From.
   */
  declare validFrom: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Valid To.
   */
  declare validTo: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Work Type Id.
   * @nullable
   */
  declare workTypeId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Name.
   * @nullable
   */
  declare name?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Party Number.
   * @nullable
   */
  declare partyNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Advance Holder.
   * @nullable
   */
  declare advanceHolder?: NoYes | null;

  constructor(_entityApi: HcmWorkerAdvHolderTablesApi<T>) {
    super(_entityApi);
  }
}

export interface HcmWorkerAdvHolderTablesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  employeeId: DeserializedType<T, 'Edm.String'>;
  personnelNumber: DeserializedType<T, 'Edm.String'>;
  company: DeserializedType<T, 'Edm.String'>;
  validFrom: DeserializedType<T, 'Edm.DateTimeOffset'>;
  validTo: DeserializedType<T, 'Edm.DateTimeOffset'>;
  workTypeId?: DeserializedType<T, 'Edm.String'> | null;
  name?: DeserializedType<T, 'Edm.String'> | null;
  partyNumber?: DeserializedType<T, 'Edm.String'> | null;
  advanceHolder?: NoYes | null;
}
