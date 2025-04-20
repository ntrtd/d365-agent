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
import type { JournalTablesApi } from './JournalTablesApi';
import { ProjJournalVoucherChange } from './ProjJournalVoucherChange';
import { NoYes } from './NoYes';
import { ProjJournalType } from './ProjJournalType';
import { ProjJournalVoucherDateChange } from './ProjJournalVoucherDateChange';
import { JournalVoucherDraw } from './JournalVoucherDraw';
import { DetailSummary } from './DetailSummary';
import { JournalTrans, JournalTransType } from './JournalTrans';
import {
  BeginningBalanceCostSaleTransactions,
  BeginningBalanceCostSaleTransactionsType
} from './BeginningBalanceCostSaleTransactions';

/**
 * This class represents the entity "JournalTables" of service "d365_metadata".
 */
export class JournalTables<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements JournalTablesType<T>
{
  /**
   * Technical entity name for JournalTables.
   */
  static override _entityName = 'JournalTables';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the JournalTables entity.
   */
  static _keys = ['dataAreaId', 'JournalBatchNumber'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Journal Batch Number.
   */
  declare journalBatchNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Project Id.
   * @nullable
   */
  declare projectId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * New Voucher By.
   * @nullable
   */
  declare newVoucherBy?: ProjJournalVoucherChange | null;
  /**
   * Status.
   * @nullable
   */
  declare status?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Delete Lines After Posting.
   * @nullable
   */
  declare deleteLinesAfterPosting?: NoYes | null;
  /**
   * Journal Type.
   * @nullable
   */
  declare journalType?: ProjJournalType | null;
  /**
   * Set Voucher Date To.
   * @nullable
   */
  declare setVoucherDateTo?: ProjJournalVoucherDateChange | null;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Journal Name.
   * @nullable
   */
  declare journalName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Txt.
   * @nullable
   */
  declare txt?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Resource Company Id.
   * @nullable
   */
  declare resourceCompanyId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Proj Line Property.
   * @nullable
   */
  declare projLineProperty?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Number Sequence Code.
   * @nullable
   */
  declare numberSequenceCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Resource Id.
   * @nullable
   */
  declare resourceId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Proj Category.
   * @nullable
   */
  declare projCategory?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Project Date.
   */
  declare projectDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Posted.
   * @nullable
   */
  declare posted?: NoYes | null;
  /**
   * Selection By.
   * @nullable
   */
  declare selectionBy?: JournalVoucherDraw | null;
  /**
   * Detail Summary.
   * @nullable
   */
  declare detailSummary?: DetailSummary | null;
  /**
   * Approve.
   * @nullable
   */
  declare approve?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Posted User Id.
   * @nullable
   */
  declare postedUserId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-many navigation property to the {@link JournalTrans} entity.
   */
  declare journalTrans: JournalTrans<T>[];
  /**
   * One-to-many navigation property to the {@link BeginningBalanceCostSaleTransactions} entity.
   */
  declare journalLines: BeginningBalanceCostSaleTransactions<T>[];

  constructor(_entityApi: JournalTablesApi<T>) {
    super(_entityApi);
  }
}

export interface JournalTablesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  journalBatchNumber: DeserializedType<T, 'Edm.String'>;
  projectId?: DeserializedType<T, 'Edm.String'> | null;
  newVoucherBy?: ProjJournalVoucherChange | null;
  status?: DeserializedType<T, 'Edm.String'> | null;
  deleteLinesAfterPosting?: NoYes | null;
  journalType?: ProjJournalType | null;
  setVoucherDateTo?: ProjJournalVoucherDateChange | null;
  description?: DeserializedType<T, 'Edm.String'> | null;
  journalName?: DeserializedType<T, 'Edm.String'> | null;
  txt?: DeserializedType<T, 'Edm.String'> | null;
  resourceCompanyId?: DeserializedType<T, 'Edm.String'> | null;
  projLineProperty?: DeserializedType<T, 'Edm.String'> | null;
  numberSequenceCode?: DeserializedType<T, 'Edm.String'> | null;
  resourceId?: DeserializedType<T, 'Edm.String'> | null;
  projCategory?: DeserializedType<T, 'Edm.String'> | null;
  projectDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  posted?: NoYes | null;
  selectionBy?: JournalVoucherDraw | null;
  detailSummary?: DetailSummary | null;
  approve?: DeserializedType<T, 'Edm.String'> | null;
  postedUserId?: DeserializedType<T, 'Edm.String'> | null;
  journalTrans: JournalTransType<T>[];
  journalLines: BeginningBalanceCostSaleTransactionsType<T>[];
}
