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
import type { BeginningBalanceOnAccTransactionsApi } from './BeginningBalanceOnAccTransactionsApi';
import { DetailSummary } from './DetailSummary';
import { Projects, ProjectsType } from './Projects';
import { DimensionSets, DimensionSetsType } from './DimensionSets';

/**
 * This class represents the entity "BeginningBalanceOnAccTransactions" of service "d365_metadata".
 */
export class BeginningBalanceOnAccTransactions<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements BeginningBalanceOnAccTransactionsType<T>
{
  /**
   * Technical entity name for BeginningBalanceOnAccTransactions.
   */
  static override _entityName = 'BeginningBalanceOnAccTransactions';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the BeginningBalanceOnAccTransactions entity.
   */
  static _keys = ['dataAreaId', 'JournalId', 'LineNumber'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Journal Id.
   */
  declare journalId: DeserializedType<T, 'Edm.String'>;
  /**
   * Line Number.
   */
  declare lineNumber: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Item Sales Tax Group.
   * @nullable
   */
  declare itemSalesTaxGroup?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Journal Description.
   * @nullable
   */
  declare journalDescription?: DeserializedType<T, 'Edm.String'> | null;
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
   * Revenue.
   */
  declare revenue: DeserializedType<T, 'Edm.Decimal'>;
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
   * Project Date.
   */
  declare projectDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
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

  constructor(_entityApi: BeginningBalanceOnAccTransactionsApi<T>) {
    super(_entityApi);
  }
}

export interface BeginningBalanceOnAccTransactionsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  journalId: DeserializedType<T, 'Edm.String'>;
  lineNumber: DeserializedType<T, 'Edm.Decimal'>;
  itemSalesTaxGroup?: DeserializedType<T, 'Edm.String'> | null;
  journalDescription?: DeserializedType<T, 'Edm.String'> | null;
  description?: DeserializedType<T, 'Edm.String'> | null;
  journalName?: DeserializedType<T, 'Edm.String'> | null;
  salesCurrency?: DeserializedType<T, 'Edm.String'> | null;
  revenue: DeserializedType<T, 'Edm.Decimal'>;
  voucherDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  fundingSourceId?: DeserializedType<T, 'Edm.String'> | null;
  salesPrice: DeserializedType<T, 'Edm.Decimal'>;
  journalDetailSummary?: DetailSummary | null;
  voucher?: DeserializedType<T, 'Edm.String'> | null;
  projectDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  projectId?: DeserializedType<T, 'Edm.String'> | null;
  salesTaxGroup?: DeserializedType<T, 'Edm.String'> | null;
  defaultDimensionDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  projectRole?: ProjectsType<T> | null;
  dimensionSet?: DimensionSetsType<T> | null;
}
