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
import type { BeginningBalanceCostSaleTransactionsApi } from './BeginningBalanceCostSaleTransactionsApi';
import { ProjTransStatusPostedInvoiced } from './ProjTransStatusPostedInvoiced';
import { BegBalProjTransTypeCost } from './BegBalProjTransTypeCost';
import { DetailSummary } from './DetailSummary';
import { ProjLedgerStatus } from './ProjLedgerStatus';
import { JournalTables, JournalTablesType } from './JournalTables';
import { Projects, ProjectsType } from './Projects';
import { DimensionSets, DimensionSetsType } from './DimensionSets';

/**
 * This class represents the entity "BeginningBalanceCostSaleTransactions" of service "d365_metadata".
 */
export class BeginningBalanceCostSaleTransactions<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements BeginningBalanceCostSaleTransactionsType<T>
{
  /**
   * Technical entity name for BeginningBalanceCostSaleTransactions.
   */
  static override _entityName = 'BeginningBalanceCostSaleTransactions';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the BeginningBalanceCostSaleTransactions entity.
   */
  static _keys = ['dataAreaId', 'LineNumber', 'JournalId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Line Number.
   */
  declare lineNumber: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Journal Id.
   */
  declare journalId: DeserializedType<T, 'Edm.String'>;
  /**
   * Item Sales Tax Group.
   * @nullable
   */
  declare itemSalesTaxGroup?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Voucher.
   * @nullable
   */
  declare voucher?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Journal Name.
   * @nullable
   */
  declare journalName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Resource.
   * @nullable
   */
  declare resource?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Cost Amount.
   */
  declare costAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Line Property Id.
   * @nullable
   */
  declare linePropertyId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Voucher Date.
   */
  declare voucherDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Activity Number.
   * @nullable
   */
  declare activityNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Transaction Status.
   * @nullable
   */
  declare transactionStatus?: ProjTransStatusPostedInvoiced | null;
  /**
   * Default Dimension Display Value.
   * @nullable
   */
  declare defaultDimensionDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Transaction Type.
   * @nullable
   */
  declare transactionType?: BegBalProjTransTypeCost | null;
  /**
   * Journal Detail Summary.
   * @nullable
   */
  declare journalDetailSummary?: DetailSummary | null;
  /**
   * Sales Amount.
   */
  declare salesAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Sales Price.
   */
  declare salesPrice: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Sales Currency.
   * @nullable
   */
  declare salesCurrency?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sales Tax Group.
   * @nullable
   */
  declare salesTaxGroup?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Project Date.
   */
  declare projectDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Journal Description.
   * @nullable
   */
  declare journalDescription?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Project Id.
   * @nullable
   */
  declare projectId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Item Id.
   * @nullable
   */
  declare itemId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Cost Price.
   */
  declare costPrice: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Funding Source Id.
   * @nullable
   */
  declare fundingSourceId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Cost Status.
   * @nullable
   */
  declare costStatus?: ProjLedgerStatus | null;
  /**
   * Quantity.
   */
  declare quantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Can Accrue Revenue.
   */
  declare canAccrueRevenue: DeserializedType<T, 'Edm.Boolean'>;
  /**
   * Category Id.
   * @nullable
   */
  declare categoryId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-one navigation property to the {@link JournalTables} entity.
   */
  declare journalHeader?: JournalTables<T> | null;
  /**
   * One-to-one navigation property to the {@link Projects} entity.
   */
  declare projectRole?: Projects<T> | null;
  /**
   * One-to-one navigation property to the {@link DimensionSets} entity.
   */
  declare dimensionSet?: DimensionSets<T> | null;

  constructor(_entityApi: BeginningBalanceCostSaleTransactionsApi<T>) {
    super(_entityApi);
  }
}

export interface BeginningBalanceCostSaleTransactionsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  lineNumber: DeserializedType<T, 'Edm.Decimal'>;
  journalId: DeserializedType<T, 'Edm.String'>;
  itemSalesTaxGroup?: DeserializedType<T, 'Edm.String'> | null;
  voucher?: DeserializedType<T, 'Edm.String'> | null;
  journalName?: DeserializedType<T, 'Edm.String'> | null;
  resource?: DeserializedType<T, 'Edm.String'> | null;
  costAmount: DeserializedType<T, 'Edm.Decimal'>;
  linePropertyId?: DeserializedType<T, 'Edm.String'> | null;
  voucherDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  activityNumber?: DeserializedType<T, 'Edm.String'> | null;
  transactionStatus?: ProjTransStatusPostedInvoiced | null;
  defaultDimensionDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  transactionType?: BegBalProjTransTypeCost | null;
  journalDetailSummary?: DetailSummary | null;
  salesAmount: DeserializedType<T, 'Edm.Decimal'>;
  salesPrice: DeserializedType<T, 'Edm.Decimal'>;
  salesCurrency?: DeserializedType<T, 'Edm.String'> | null;
  description?: DeserializedType<T, 'Edm.String'> | null;
  salesTaxGroup?: DeserializedType<T, 'Edm.String'> | null;
  projectDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  journalDescription?: DeserializedType<T, 'Edm.String'> | null;
  projectId?: DeserializedType<T, 'Edm.String'> | null;
  itemId?: DeserializedType<T, 'Edm.String'> | null;
  costPrice: DeserializedType<T, 'Edm.Decimal'>;
  fundingSourceId?: DeserializedType<T, 'Edm.String'> | null;
  costStatus?: ProjLedgerStatus | null;
  quantity: DeserializedType<T, 'Edm.Decimal'>;
  canAccrueRevenue: DeserializedType<T, 'Edm.Boolean'>;
  categoryId?: DeserializedType<T, 'Edm.String'> | null;
  journalHeader?: JournalTablesType<T> | null;
  projectRole?: ProjectsType<T> | null;
  dimensionSet?: DimensionSetsType<T> | null;
}
