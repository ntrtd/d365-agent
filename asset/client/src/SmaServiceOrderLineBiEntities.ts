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
import type { SmaServiceOrderLineBiEntitiesApi } from './SmaServiceOrderLineBiEntitiesApi';
import { LedgerJournalAcType } from './LedgerJournalAcType';
import { SmaServiceOrderStatus } from './SmaServiceOrderStatus';
import { SmaTransactionType } from './SmaTransactionType';
import { NoYes } from './NoYes';
import { SmaServiceOrderOrigin } from './SmaServiceOrderOrigin';

/**
 * This class represents the entity "SMAServiceOrderLineBiEntities" of service "d365_metadata".
 */
export class SmaServiceOrderLineBiEntities<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements SmaServiceOrderLineBiEntitiesType<T>
{
  /**
   * Technical entity name for SmaServiceOrderLineBiEntities.
   */
  static override _entityName = 'SMAServiceOrderLineBiEntities';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the SmaServiceOrderLineBiEntities entity.
   */
  static _keys = ['dataAreaId', 'ServiceOrderId', 'ServiceOrderLineNum'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Service Order Id.
   */
  declare serviceOrderId: DeserializedType<T, 'Edm.String'>;
  /**
   * Service Order Line Num.
   */
  declare serviceOrderLineNum: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Date Range To.
   */
  declare dateRangeTo: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Proj Trans Id.
   * @nullable
   */
  declare projTransId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Offset Account Type Expense.
   * @nullable
   */
  declare offsetAccountTypeExpense?: LedgerJournalAcType | null;
  /**
   * Sys Data Area Id.
   * @nullable
   */
  declare sysDataAreaId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Qty.
   */
  declare qty: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Service Order Status.
   * @nullable
   */
  declare serviceOrderStatus?: SmaServiceOrderStatus | null;
  /**
   * Proj Id.
   * @nullable
   */
  declare projId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Description Service.
   * @nullable
   */
  declare descriptionService?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Invent Dim Id.
   * @nullable
   */
  declare inventDimId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Transaction Type.
   * @nullable
   */
  declare transactionType?: SmaTransactionType | null;
  /**
   * Proj Category Id.
   * @nullable
   */
  declare projCategoryId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Activity Number.
   * @nullable
   */
  declare activityNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Date Calculated.
   */
  declare dateCalculated: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Proj Tax Item Group.
   * @nullable
   */
  declare projTaxItemGroup?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Date Range From.
   */
  declare dateRangeFrom: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Tax Group Expense.
   * @nullable
   */
  declare taxGroupExpense?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Currency Id Cost.
   * @nullable
   */
  declare currencyIdCost?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Service Time End Before.
   */
  declare serviceTimeEndBefore: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Proj Sales Price.
   */
  declare projSalesPrice: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Time Sheet Start Time.
   */
  declare timeSheetStartTime: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Sys Rec Version.
   */
  declare sysRecVersion: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Tax Item Group Expense.
   * @nullable
   */
  declare taxItemGroupExpense?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Unit.
   * @nullable
   */
  declare unit?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Service Task Id.
   * @nullable
   */
  declare serviceTaskId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Date Execution.
   */
  declare dateExecution: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Proj Currency Code.
   * @nullable
   */
  declare projCurrencyCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Proj Tax Group.
   * @nullable
   */
  declare projTaxGroup?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Service Object Id.
   * @nullable
   */
  declare serviceObjectId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Proj Line Property Id.
   * @nullable
   */
  declare projLinePropertyId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Agreement Line Num.
   */
  declare agreementLineNum: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Source Key.
   */
  declare sourceKey: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Sign Off.
   * @nullable
   */
  declare signOff?: NoYes | null;
  /**
   * Is Sales Price Modified.
   * @nullable
   */
  declare isSalesPriceModified?: NoYes | null;
  /**
   * Activity Id.
   * @nullable
   */
  declare activityId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Item Id.
   * @nullable
   */
  declare itemId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Proj Cost Price.
   */
  declare projCostPrice: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Worker.
   */
  declare worker: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Time Sheet End Time.
   */
  declare timeSheetEndTime: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Service Object Relation Id.
   * @nullable
   */
  declare serviceObjectRelationId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Agreement Id.
   * @nullable
   */
  declare agreementId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Proj Trans Txt.
   * @nullable
   */
  declare projTransTxt?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Origin.
   * @nullable
   */
  declare origin?: SmaServiceOrderOrigin | null;
  /**
   * Invoice Id.
   * @nullable
   */
  declare invoiceId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Service Time Start After.
   */
  declare serviceTimeStartAfter: DeserializedType<T, 'Edm.Int32'>;

  constructor(_entityApi: SmaServiceOrderLineBiEntitiesApi<T>) {
    super(_entityApi);
  }
}

export interface SmaServiceOrderLineBiEntitiesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  serviceOrderId: DeserializedType<T, 'Edm.String'>;
  serviceOrderLineNum: DeserializedType<T, 'Edm.Decimal'>;
  dateRangeTo: DeserializedType<T, 'Edm.DateTimeOffset'>;
  projTransId?: DeserializedType<T, 'Edm.String'> | null;
  offsetAccountTypeExpense?: LedgerJournalAcType | null;
  sysDataAreaId?: DeserializedType<T, 'Edm.String'> | null;
  qty: DeserializedType<T, 'Edm.Decimal'>;
  serviceOrderStatus?: SmaServiceOrderStatus | null;
  projId?: DeserializedType<T, 'Edm.String'> | null;
  descriptionService?: DeserializedType<T, 'Edm.String'> | null;
  inventDimId?: DeserializedType<T, 'Edm.String'> | null;
  transactionType?: SmaTransactionType | null;
  projCategoryId?: DeserializedType<T, 'Edm.String'> | null;
  activityNumber?: DeserializedType<T, 'Edm.String'> | null;
  description?: DeserializedType<T, 'Edm.String'> | null;
  dateCalculated: DeserializedType<T, 'Edm.DateTimeOffset'>;
  projTaxItemGroup?: DeserializedType<T, 'Edm.String'> | null;
  dateRangeFrom: DeserializedType<T, 'Edm.DateTimeOffset'>;
  taxGroupExpense?: DeserializedType<T, 'Edm.String'> | null;
  currencyIdCost?: DeserializedType<T, 'Edm.String'> | null;
  serviceTimeEndBefore: DeserializedType<T, 'Edm.Int32'>;
  projSalesPrice: DeserializedType<T, 'Edm.Decimal'>;
  timeSheetStartTime: DeserializedType<T, 'Edm.Int32'>;
  sysRecVersion: DeserializedType<T, 'Edm.Int32'>;
  taxItemGroupExpense?: DeserializedType<T, 'Edm.String'> | null;
  unit?: DeserializedType<T, 'Edm.String'> | null;
  serviceTaskId?: DeserializedType<T, 'Edm.String'> | null;
  dateExecution: DeserializedType<T, 'Edm.DateTimeOffset'>;
  projCurrencyCode?: DeserializedType<T, 'Edm.String'> | null;
  projTaxGroup?: DeserializedType<T, 'Edm.String'> | null;
  serviceObjectId?: DeserializedType<T, 'Edm.String'> | null;
  projLinePropertyId?: DeserializedType<T, 'Edm.String'> | null;
  agreementLineNum: DeserializedType<T, 'Edm.Int32'>;
  sourceKey: DeserializedType<T, 'Edm.Int64'>;
  signOff?: NoYes | null;
  isSalesPriceModified?: NoYes | null;
  activityId?: DeserializedType<T, 'Edm.String'> | null;
  itemId?: DeserializedType<T, 'Edm.String'> | null;
  projCostPrice: DeserializedType<T, 'Edm.Decimal'>;
  worker: DeserializedType<T, 'Edm.Int64'>;
  timeSheetEndTime: DeserializedType<T, 'Edm.Int32'>;
  serviceObjectRelationId?: DeserializedType<T, 'Edm.String'> | null;
  agreementId?: DeserializedType<T, 'Edm.String'> | null;
  projTransTxt?: DeserializedType<T, 'Edm.String'> | null;
  origin?: SmaServiceOrderOrigin | null;
  invoiceId?: DeserializedType<T, 'Edm.String'> | null;
  serviceTimeStartAfter: DeserializedType<T, 'Edm.Int32'>;
}
