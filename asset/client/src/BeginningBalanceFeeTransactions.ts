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
import type { BeginningBalanceFeeTransactionsApi } from './BeginningBalanceFeeTransactionsApi';
import { ProjTransStatusPostedInvoiced } from './ProjTransStatusPostedInvoiced';
import { DetailSummary } from './DetailSummary';
import { Projects, ProjectsType } from './Projects';
import { DimensionSets, DimensionSetsType } from './DimensionSets';

/**
 * This class represents the entity "BeginningBalanceFeeTransactions" of service "d365_metadata".
 */
export class BeginningBalanceFeeTransactions<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements BeginningBalanceFeeTransactionsType<T>
{
  /**
   * Technical entity name for BeginningBalanceFeeTransactions.
   */
  static override _entityName = 'BeginningBalanceFeeTransactions';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the BeginningBalanceFeeTransactions entity.
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
   * Resource.
   * @nullable
   */
  declare resource?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Journal Description.
   * @nullable
   */
  declare journalDescription?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Transaction Status.
   * @nullable
   */
  declare transactionStatus?: ProjTransStatusPostedInvoiced | null;
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
   * Sales Currency.
   * @nullable
   */
  declare salesCurrency?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Category Id.
   * @nullable
   */
  declare categoryId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Voucher Date.
   */
  declare voucherDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Funding Source Id.
   * @nullable
   */
  declare fundingSourceId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sales Price.
   */
  declare salesPrice: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Journal Detail Summary.
   * @nullable
   */
  declare journalDetailSummary?: DetailSummary | null;
  /**
   * Voucher.
   * @nullable
   */
  declare voucher?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sales Amount.
   */
  declare salesAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Project Date.
   */
  declare projectDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Line Property Id.
   * @nullable
   */
  declare linePropertyId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Can Accrue Revenue.
   */
  declare canAccrueRevenue: DeserializedType<T, 'Edm.Boolean'>;
  /**
   * Project Id.
   * @nullable
   */
  declare projectId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sales Tax Group.
   * @nullable
   */
  declare salesTaxGroup?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Default Dimension Display Value.
   * @nullable
   */
  declare defaultDimensionDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * One-to-one navigation property to the {@link Projects} entity.
   */
  declare projectRole?: Projects<T> | null;
  /**
   * One-to-one navigation property to the {@link DimensionSets} entity.
   */
  declare dimensionSet?: DimensionSets<T> | null;

  constructor(_entityApi: BeginningBalanceFeeTransactionsApi<T>) {
    super(_entityApi);
  }
}

export interface BeginningBalanceFeeTransactionsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  lineNumber: DeserializedType<T, 'Edm.Decimal'>;
  journalId: DeserializedType<T, 'Edm.String'>;
  itemSalesTaxGroup?: DeserializedType<T, 'Edm.String'> | null;
  resource?: DeserializedType<T, 'Edm.String'> | null;
  journalDescription?: DeserializedType<T, 'Edm.String'> | null;
  transactionStatus?: ProjTransStatusPostedInvoiced | null;
  description?: DeserializedType<T, 'Edm.String'> | null;
  journalName?: DeserializedType<T, 'Edm.String'> | null;
  salesCurrency?: DeserializedType<T, 'Edm.String'> | null;
  categoryId?: DeserializedType<T, 'Edm.String'> | null;
  voucherDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  fundingSourceId?: DeserializedType<T, 'Edm.String'> | null;
  salesPrice: DeserializedType<T, 'Edm.Decimal'>;
  journalDetailSummary?: DetailSummary | null;
  voucher?: DeserializedType<T, 'Edm.String'> | null;
  salesAmount: DeserializedType<T, 'Edm.Decimal'>;
  projectDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  linePropertyId?: DeserializedType<T, 'Edm.String'> | null;
  canAccrueRevenue: DeserializedType<T, 'Edm.Boolean'>;
  projectId?: DeserializedType<T, 'Edm.String'> | null;
  salesTaxGroup?: DeserializedType<T, 'Edm.String'> | null;
  defaultDimensionDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  projectRole?: ProjectsType<T> | null;
  dimensionSet?: DimensionSetsType<T> | null;
}
