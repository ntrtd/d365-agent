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
import type { BudgetReservationLine_PsnBiEntitiesApi } from './BudgetReservationLine_PsnBiEntitiesApi';
import { NoYes } from './NoYes';

/**
 * This class represents the entity "BudgetReservationLine_PSNBiEntities" of service "d365_metadata".
 */
export class BudgetReservationLine_PsnBiEntities<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements BudgetReservationLine_PsnBiEntitiesType<T>
{
  /**
   * Technical entity name for BudgetReservationLine_PsnBiEntities.
   */
  static override _entityName = 'BudgetReservationLine_PSNBiEntities';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the BudgetReservationLine_PsnBiEntities entity.
   */
  static _keys = ['dataAreaId', 'BudgetReservationHeader_PSN', 'LineNumber'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Budget Reservation Header Psn.
   */
  declare budgetReservationHeaderPsn: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Line Number.
   */
  declare lineNumber: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Procurement Category.
   */
  declare procurementCategory: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Proj Tax Item Group Id.
   * @nullable
   */
  declare projTaxItemGroupId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Activity Number.
   * @nullable
   */
  declare activityNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Do Update Accounting Distributions.
   * @nullable
   */
  declare doUpdateAccountingDistributions?: NoYes | null;
  /**
   * Proj Trans Id.
   * @nullable
   */
  declare projTransId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Proj Sales Unit Id.
   * @nullable
   */
  declare projSalesUnitId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Transaction Text.
   * @nullable
   */
  declare transactionText?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sys Data Area Id.
   * @nullable
   */
  declare sysDataAreaId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Proj Line Property Id.
   * @nullable
   */
  declare projLinePropertyId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sys Rec Version.
   */
  declare sysRecVersion: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Proj Category Id.
   * @nullable
   */
  declare projCategoryId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Currency.
   * @nullable
   */
  declare currency?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Proj Worker.
   */
  declare projWorker: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Proj Id.
   * @nullable
   */
  declare projId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Proj Sales Currency Id.
   * @nullable
   */
  declare projSalesCurrencyId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Accounting Distribution Template.
   */
  declare accountingDistributionTemplate: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Source Key.
   */
  declare sourceKey: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Source Document Line.
   */
  declare sourceDocumentLine: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Proj Tax Group Id.
   * @nullable
   */
  declare projTaxGroupId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Unit Price.
   */
  declare unitPrice: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Purch Req Line.
   */
  declare purchReqLine: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Proj Sales Price.
   */
  declare projSalesPrice: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Line Amount.
   */
  declare lineAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Quantity.
   */
  declare quantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Created On.
   */
  declare createdOn: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Ledger Dimension Values Json.
   * @nullable
   */
  declare ledgerDimensionValuesJson?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: BudgetReservationLine_PsnBiEntitiesApi<T>) {
    super(_entityApi);
  }
}

export interface BudgetReservationLine_PsnBiEntitiesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  budgetReservationHeaderPsn: DeserializedType<T, 'Edm.Int64'>;
  lineNumber: DeserializedType<T, 'Edm.Int32'>;
  procurementCategory: DeserializedType<T, 'Edm.Int64'>;
  projTaxItemGroupId?: DeserializedType<T, 'Edm.String'> | null;
  activityNumber?: DeserializedType<T, 'Edm.String'> | null;
  doUpdateAccountingDistributions?: NoYes | null;
  projTransId?: DeserializedType<T, 'Edm.String'> | null;
  projSalesUnitId?: DeserializedType<T, 'Edm.String'> | null;
  transactionText?: DeserializedType<T, 'Edm.String'> | null;
  sysDataAreaId?: DeserializedType<T, 'Edm.String'> | null;
  projLinePropertyId?: DeserializedType<T, 'Edm.String'> | null;
  sysRecVersion: DeserializedType<T, 'Edm.Int32'>;
  projCategoryId?: DeserializedType<T, 'Edm.String'> | null;
  currency?: DeserializedType<T, 'Edm.String'> | null;
  projWorker: DeserializedType<T, 'Edm.Int64'>;
  projId?: DeserializedType<T, 'Edm.String'> | null;
  projSalesCurrencyId?: DeserializedType<T, 'Edm.String'> | null;
  accountingDistributionTemplate: DeserializedType<T, 'Edm.Int64'>;
  sourceKey: DeserializedType<T, 'Edm.Int64'>;
  sourceDocumentLine: DeserializedType<T, 'Edm.Int64'>;
  projTaxGroupId?: DeserializedType<T, 'Edm.String'> | null;
  unitPrice: DeserializedType<T, 'Edm.Decimal'>;
  purchReqLine: DeserializedType<T, 'Edm.Int64'>;
  projSalesPrice: DeserializedType<T, 'Edm.Decimal'>;
  lineAmount: DeserializedType<T, 'Edm.Decimal'>;
  quantity: DeserializedType<T, 'Edm.Decimal'>;
  createdOn: DeserializedType<T, 'Edm.DateTimeOffset'>;
  ledgerDimensionValuesJson?: DeserializedType<T, 'Edm.String'> | null;
}
