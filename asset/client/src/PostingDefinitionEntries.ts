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
import type { PostingDefinitionEntriesApi } from './PostingDefinitionEntriesApi';
import { JournalizingDefinitionSignId } from './JournalizingDefinitionSignId';
import {
  DimensionCombinations,
  DimensionCombinationsType
} from './DimensionCombinations';

/**
 * This class represents the entity "PostingDefinitionEntries" of service "d365_metadata".
 */
export class PostingDefinitionEntries<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements PostingDefinitionEntriesType<T>
{
  /**
   * Technical entity name for PostingDefinitionEntries.
   */
  static override _entityName = 'PostingDefinitionEntries';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the PostingDefinitionEntries entity.
   */
  static _keys = [
    'dataAreaId',
    'MatchCriteriaLedgerAccountDisplayValue',
    'MatchCriteriaLedgerAccountAccountStructure',
    'GeneratedEntryLedgerAccountDisplayValue',
    'PostingDefinitionId',
    'ValidFrom'
  ];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Match Criteria Ledger Account Display Value.
   */
  declare matchCriteriaLedgerAccountDisplayValue: DeserializedType<
    T,
    'Edm.String'
  >;
  /**
   * Match Criteria Ledger Account Account Structure.
   */
  declare matchCriteriaLedgerAccountAccountStructure: DeserializedType<
    T,
    'Edm.String'
  >;
  /**
   * Generated Entry Ledger Account Display Value.
   */
  declare generatedEntryLedgerAccountDisplayValue: DeserializedType<
    T,
    'Edm.String'
  >;
  /**
   * Posting Definition Id.
   */
  declare postingDefinitionId: DeserializedType<T, 'Edm.String'>;
  /**
   * Valid From.
   */
  declare validFrom: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Generated Entries Debit Credit.
   * @nullable
   */
  declare generatedEntriesDebitCredit?: JournalizingDefinitionSignId | null;
  /**
   * Priority.
   */
  declare priority: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Generated Entry Ledger Account Account Structure.
   * @nullable
   */
  declare generatedEntryLedgerAccountAccountStructure?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * One-to-one navigation property to the {@link DimensionCombinations} entity.
   */
  declare dimensionCombination?: DimensionCombinations<T> | null;

  constructor(_entityApi: PostingDefinitionEntriesApi<T>) {
    super(_entityApi);
  }
}

export interface PostingDefinitionEntriesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  matchCriteriaLedgerAccountDisplayValue: DeserializedType<T, 'Edm.String'>;
  matchCriteriaLedgerAccountAccountStructure: DeserializedType<T, 'Edm.String'>;
  generatedEntryLedgerAccountDisplayValue: DeserializedType<T, 'Edm.String'>;
  postingDefinitionId: DeserializedType<T, 'Edm.String'>;
  validFrom: DeserializedType<T, 'Edm.DateTimeOffset'>;
  generatedEntriesDebitCredit?: JournalizingDefinitionSignId | null;
  priority: DeserializedType<T, 'Edm.Int32'>;
  generatedEntryLedgerAccountAccountStructure?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  dimensionCombination?: DimensionCombinationsType<T> | null;
}
