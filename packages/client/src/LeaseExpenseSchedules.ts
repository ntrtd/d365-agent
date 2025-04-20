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
import type { LeaseExpenseSchedulesApi } from './LeaseExpenseSchedulesApi';
import { NoYes } from './NoYes';
import { LedgerJournalAcType } from './LedgerJournalAcType';
import {
  DimensionCombinations,
  DimensionCombinationsType
} from './DimensionCombinations';

/**
 * This class represents the entity "LeaseExpenseSchedules" of service "d365_metadata".
 */
export class LeaseExpenseSchedules<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements LeaseExpenseSchedulesType<T>
{
  /**
   * Technical entity name for LeaseExpenseSchedules.
   */
  static override _entityName = 'LeaseExpenseSchedules';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the LeaseExpenseSchedules entity.
   */
  static _keys = ['dataAreaId', 'LineNumber', 'LeaseId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Line Number.
   */
  declare lineNumber: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Lease Id.
   */
  declare leaseId: DeserializedType<T, 'Edm.String'>;
  /**
   * Payment Amount.
   */
  declare paymentAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Offset Ledger Dimension Display Value.
   * @nullable
   */
  declare offsetLedgerDimensionDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Schedule Line Date.
   */
  declare scheduleLineDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Journal Batch Number.
   * @nullable
   */
  declare journalBatchNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Expense Type.
   * @nullable
   */
  declare expenseType?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Company.
   * @nullable
   */
  declare company?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Fin Tag Display Value.
   * @nullable
   */
  declare finTagDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Latest Journal Num.
   * @nullable
   */
  declare latestJournalNum?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Reversed.
   * @nullable
   */
  declare reversed?: NoYes | null;
  /**
   * Journal Posted.
   * @nullable
   */
  declare journalPosted?: NoYes | null;
  /**
   * Invoice.
   * @nullable
   */
  declare invoice?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Journal Created.
   * @nullable
   */
  declare journalCreated?: NoYes | null;
  /**
   * Offset Account Type.
   * @nullable
   */
  declare offsetAccountType?: LedgerJournalAcType | null;
  /**
   * One-to-one navigation property to the {@link DimensionCombinations} entity.
   */
  declare dimensionCombinationEntity?: DimensionCombinations<T> | null;

  constructor(_entityApi: LeaseExpenseSchedulesApi<T>) {
    super(_entityApi);
  }
}

export interface LeaseExpenseSchedulesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  lineNumber: DeserializedType<T, 'Edm.Int32'>;
  leaseId: DeserializedType<T, 'Edm.String'>;
  paymentAmount: DeserializedType<T, 'Edm.Decimal'>;
  offsetLedgerDimensionDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  scheduleLineDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  journalBatchNumber?: DeserializedType<T, 'Edm.String'> | null;
  expenseType?: DeserializedType<T, 'Edm.String'> | null;
  company?: DeserializedType<T, 'Edm.String'> | null;
  finTagDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  latestJournalNum?: DeserializedType<T, 'Edm.String'> | null;
  reversed?: NoYes | null;
  journalPosted?: NoYes | null;
  invoice?: DeserializedType<T, 'Edm.String'> | null;
  journalCreated?: NoYes | null;
  offsetAccountType?: LedgerJournalAcType | null;
  dimensionCombinationEntity?: DimensionCombinationsType<T> | null;
}
