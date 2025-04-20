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
import type { PartyEmployeeRelationshipsApi } from './PartyEmployeeRelationshipsApi';
import { LedgerJournalAcType } from './LedgerJournalAcType';
import {
  DimensionCombinations,
  DimensionCombinationsType
} from './DimensionCombinations';

/**
 * This class represents the entity "PartyEmployeeRelationships" of service "d365_metadata".
 */
export class PartyEmployeeRelationships<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements PartyEmployeeRelationshipsType<T>
{
  /**
   * Technical entity name for PartyEmployeeRelationships.
   */
  static override _entityName = 'PartyEmployeeRelationships';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the PartyEmployeeRelationships entity.
   */
  static _keys = ['dataAreaId', 'TrvHcmWorker_PersonnelNumber'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Trv Hcm Worker Personnel Number.
   */
  declare trvHcmWorkerPersonnelNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Account Type.
   * @nullable
   */
  declare accountType?: LedgerJournalAcType | null;
  /**
   * Per Diem.
   */
  declare perDiem: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Account Display Value.
   * @nullable
   */
  declare accountDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-one navigation property to the {@link DimensionCombinations} entity.
   */
  declare dimensionCombination?: DimensionCombinations<T> | null;

  constructor(_entityApi: PartyEmployeeRelationshipsApi<T>) {
    super(_entityApi);
  }
}

export interface PartyEmployeeRelationshipsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  trvHcmWorkerPersonnelNumber: DeserializedType<T, 'Edm.String'>;
  accountType?: LedgerJournalAcType | null;
  perDiem: DeserializedType<T, 'Edm.Decimal'>;
  accountDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  dimensionCombination?: DimensionCombinationsType<T> | null;
}
