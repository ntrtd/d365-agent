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
import type { TaxTransSubledgerJournalAccountEntryBiEntitiesApi } from './TaxTransSubledgerJournalAccountEntryBiEntitiesApi';
import { TaxTransRelationshipType } from './TaxTransRelationshipType';

/**
 * This class represents the entity "TaxTransSubledgerJournalAccountEntryBiEntities" of service "d365_metadata".
 */
export class TaxTransSubledgerJournalAccountEntryBiEntities<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements TaxTransSubledgerJournalAccountEntryBiEntitiesType<T>
{
  /**
   * Technical entity name for TaxTransSubledgerJournalAccountEntryBiEntities.
   */
  static override _entityName =
    'TaxTransSubledgerJournalAccountEntryBiEntities';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the TaxTransSubledgerJournalAccountEntryBiEntities entity.
   */
  static _keys = ['dataAreaId', 'SourceKey'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Source Key.
   */
  declare sourceKey: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Tax Trans Relationship.
   * @nullable
   */
  declare taxTransRelationship?: TaxTransRelationshipType | null;
  /**
   * Tax Trans.
   */
  declare taxTrans: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Subledger Journal Account Entry.
   */
  declare subledgerJournalAccountEntry: DeserializedType<T, 'Edm.Int64'>;

  constructor(
    _entityApi: TaxTransSubledgerJournalAccountEntryBiEntitiesApi<T>
  ) {
    super(_entityApi);
  }
}

export interface TaxTransSubledgerJournalAccountEntryBiEntitiesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  sourceKey: DeserializedType<T, 'Edm.Int64'>;
  taxTransRelationship?: TaxTransRelationshipType | null;
  taxTrans: DeserializedType<T, 'Edm.Int64'>;
  subledgerJournalAccountEntry: DeserializedType<T, 'Edm.Int64'>;
}
