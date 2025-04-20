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
import type { PsaForecastsApi } from './PsaForecastsApi';
import { NoYes } from './NoYes';
import { ProjPaymentStatus } from './ProjPaymentStatus';
import { ProjType } from './ProjType';
import { ProjTransType } from './ProjTransType';
import { ProjCostSales } from './ProjCostSales';
import { LedgerPostingType } from './LedgerPostingType';
import { DimensionSets, DimensionSetsType } from './DimensionSets';

/**
 * This class represents the entity "PSAForecasts" of service "d365_metadata".
 */
export class PsaForecasts<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements PsaForecastsType<T>
{
  /**
   * Technical entity name for PsaForecasts.
   */
  static override _entityName = 'PSAForecasts';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the PsaForecasts entity.
   */
  static _keys = ['dataAreaId', 'TransId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Trans Id.
   */
  declare transId: DeserializedType<T, 'Edm.String'>;
  /**
   * Qty.
   */
  declare qty: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Amount Mst.
   */
  declare amountMst: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * P Laccrued Revenue Production.
   */
  declare pLaccruedRevenueProduction: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Psa Indirect Component.
   * @nullable
   */
  declare psaIndirectComponent?: NoYes | null;
  /**
   * Voucher.
   * @nullable
   */
  declare voucher?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Labor Invoiced Revenue.
   */
  declare laborInvoicedRevenue: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Wip Invoiced On Account.
   */
  declare wipInvoicedOnAccount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Payment Date.
   */
  declare paymentDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Total Consumption.
   */
  declare totalConsumption: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * On Acc Pre Payment.
   */
  declare onAccPrePayment: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Resource Company Id.
   * @nullable
   */
  declare resourceCompanyId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Resource.
   */
  declare resource: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Labor Invoiced Qty.
   */
  declare laborInvoicedQty: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Consumed Labor Cost.
   */
  declare consumedLaborCost: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Expense Invoiced Revenue.
   */
  declare expenseInvoicedRevenue: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Payment Status.
   * @nullable
   */
  declare paymentStatus?: ProjPaymentStatus | null;
  /**
   * Wip Sales Value.
   */
  declare wipSalesValue: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Wip Production.
   */
  declare wipProduction: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Gross Wip.
   */
  declare grossWip: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Pl Material Cost Without Never Ledger.
   */
  declare plMaterialCostWithoutNeverLedger: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * On Acc Beg Bal.
   */
  declare onAccBegBal: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Fee Invoiced Revenue.
   */
  declare feeInvoicedRevenue: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Wip Total Cost.
   */
  declare wipTotalCost: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Proj Type.
   * @nullable
   */
  declare projType?: ProjType | null;
  /**
   * P Laccrued Revenue Profit.
   */
  declare pLaccruedRevenueProfit: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Pl Invoiced Revenue On Account.
   */
  declare plInvoicedRevenueOnAccount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Activity Number.
   * @nullable
   */
  declare activityNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Total Invoiced Revenue.
   */
  declare totalInvoicedRevenue: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Default Dimension Display Value.
   * @nullable
   */
  declare defaultDimensionDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Material Invoiced Revenue.
   */
  declare materialInvoicedRevenue: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Consumed Material Cost.
   */
  declare consumedMaterialCost: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Consumed Labor Cost Without No Never Ledger.
   */
  declare consumedLaborCostWithoutNoNeverLedger: DeserializedType<
    T,
    'Edm.Decimal'
  >;
  /**
   * P Laccrued Revenue Sales Value.
   */
  declare pLaccruedRevenueSalesValue: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Proj Trans Type.
   * @nullable
   */
  declare projTransType?: ProjTransType | null;
  /**
   * On Acc Total.
   */
  declare onAccTotal: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Pl Labor Qty.
   */
  declare plLaborQty: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Wip Expense Cost.
   */
  declare wipExpenseCost: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Proj Funding Source Funding Source Id.
   * @nullable
   */
  declare projFundingSourceFundingSourceId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Pl Labor Cost.
   */
  declare plLaborCost: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * P Laccrued Revenue Subscription.
   */
  declare pLaccruedRevenueSubscription: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Consumed Labor Qty Without No Never Ledger.
   */
  declare consumedLaborQtyWithoutNoNeverLedger: DeserializedType<
    T,
    'Edm.Decimal'
  >;
  /**
   * Pl Accrued Revenue On Acc.
   */
  declare plAccruedRevenueOnAcc: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Pl Labor Cost Without No Never Ledger.
   */
  declare plLaborCostWithoutNoNeverLedger: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Net Wip.
   */
  declare netWip: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Pl Material Cost.
   */
  declare plMaterialCost: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Proj Trans Date.
   */
  declare projTransDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Proj Table Proj Id.
   * @nullable
   */
  declare projTableProjId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Ledger Dimension Display Value.
   * @nullable
   */
  declare ledgerDimensionDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Cost Sales.
   * @nullable
   */
  declare costSales?: ProjCostSales | null;
  /**
   * Consumed Material Cost Without Never Ledger.
   */
  declare consumedMaterialCostWithoutNeverLedger: DeserializedType<
    T,
    'Edm.Decimal'
  >;
  /**
   * Subscription Id.
   * @nullable
   */
  declare subscriptionId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Pl Invoiced Revenue.
   */
  declare plInvoicedRevenue: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Wip Material Cost.
   */
  declare wipMaterialCost: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Resource Id.
   * @nullable
   */
  declare resourceId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Model Id.
   * @nullable
   */
  declare modelId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Pl Total Accrued Revenue.
   */
  declare plTotalAccruedRevenue: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Proj Funding Source Contract Id.
   * @nullable
   */
  declare projFundingSourceContractId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Pl Labor Qty Without No Never Ledger.
   */
  declare plLaborQtyWithoutNoNeverLedger: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Resource Category.
   */
  declare resourceCategory: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Consumed Expense Cost.
   */
  declare consumedExpenseCost: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Wip Labor Cost.
   */
  declare wipLaborCost: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Consumed Labor Qty.
   */
  declare consumedLaborQty: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Pl Expense Cost.
   */
  declare plExpenseCost: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Empl Item Id.
   * @nullable
   */
  declare emplItemId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Wip Cost Accrued Loss.
   */
  declare wipCostAccruedLoss: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Posting Type.
   * @nullable
   */
  declare postingType?: LedgerPostingType | null;
  /**
   * On Acc Milestone.
   */
  declare onAccMilestone: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Pl Total Cost.
   */
  declare plTotalCost: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Ledger Trans Date.
   */
  declare ledgerTransDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Pl Cost Accrued Loss.
   */
  declare plCostAccruedLoss: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Payroll Allocation.
   */
  declare payrollAllocation: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Wip Profit.
   */
  declare wipProfit: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Wip Subscription.
   */
  declare wipSubscription: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Proj Id.
   * @nullable
   */
  declare projId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Wip Sales Total.
   */
  declare wipSalesTotal: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * On Acc Deduction.
   */
  declare onAccDeduction: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Contract Id.
   * @nullable
   */
  declare contractId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Category Id.
   * @nullable
   */
  declare categoryId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Elimination.
   * @nullable
   */
  declare elimination?: NoYes | null;
  /**
   * One-to-one navigation property to the {@link DimensionSets} entity.
   */
  declare dimensionSet?: DimensionSets<T> | null;

  constructor(_entityApi: PsaForecastsApi<T>) {
    super(_entityApi);
  }
}

export interface PsaForecastsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  transId: DeserializedType<T, 'Edm.String'>;
  qty: DeserializedType<T, 'Edm.Decimal'>;
  amountMst: DeserializedType<T, 'Edm.Decimal'>;
  pLaccruedRevenueProduction: DeserializedType<T, 'Edm.Decimal'>;
  psaIndirectComponent?: NoYes | null;
  voucher?: DeserializedType<T, 'Edm.String'> | null;
  laborInvoicedRevenue: DeserializedType<T, 'Edm.Decimal'>;
  wipInvoicedOnAccount: DeserializedType<T, 'Edm.Decimal'>;
  paymentDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  totalConsumption: DeserializedType<T, 'Edm.Decimal'>;
  onAccPrePayment: DeserializedType<T, 'Edm.Decimal'>;
  resourceCompanyId?: DeserializedType<T, 'Edm.String'> | null;
  resource: DeserializedType<T, 'Edm.Int64'>;
  laborInvoicedQty: DeserializedType<T, 'Edm.Decimal'>;
  consumedLaborCost: DeserializedType<T, 'Edm.Decimal'>;
  expenseInvoicedRevenue: DeserializedType<T, 'Edm.Decimal'>;
  paymentStatus?: ProjPaymentStatus | null;
  wipSalesValue: DeserializedType<T, 'Edm.Decimal'>;
  wipProduction: DeserializedType<T, 'Edm.Decimal'>;
  grossWip: DeserializedType<T, 'Edm.Decimal'>;
  plMaterialCostWithoutNeverLedger: DeserializedType<T, 'Edm.Decimal'>;
  onAccBegBal: DeserializedType<T, 'Edm.Decimal'>;
  feeInvoicedRevenue: DeserializedType<T, 'Edm.Decimal'>;
  wipTotalCost: DeserializedType<T, 'Edm.Decimal'>;
  projType?: ProjType | null;
  pLaccruedRevenueProfit: DeserializedType<T, 'Edm.Decimal'>;
  plInvoicedRevenueOnAccount: DeserializedType<T, 'Edm.Decimal'>;
  activityNumber?: DeserializedType<T, 'Edm.String'> | null;
  totalInvoicedRevenue: DeserializedType<T, 'Edm.Decimal'>;
  defaultDimensionDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  materialInvoicedRevenue: DeserializedType<T, 'Edm.Decimal'>;
  consumedMaterialCost: DeserializedType<T, 'Edm.Decimal'>;
  consumedLaborCostWithoutNoNeverLedger: DeserializedType<T, 'Edm.Decimal'>;
  pLaccruedRevenueSalesValue: DeserializedType<T, 'Edm.Decimal'>;
  projTransType?: ProjTransType | null;
  onAccTotal: DeserializedType<T, 'Edm.Decimal'>;
  plLaborQty: DeserializedType<T, 'Edm.Decimal'>;
  wipExpenseCost: DeserializedType<T, 'Edm.Decimal'>;
  projFundingSourceFundingSourceId?: DeserializedType<T, 'Edm.String'> | null;
  plLaborCost: DeserializedType<T, 'Edm.Decimal'>;
  pLaccruedRevenueSubscription: DeserializedType<T, 'Edm.Decimal'>;
  consumedLaborQtyWithoutNoNeverLedger: DeserializedType<T, 'Edm.Decimal'>;
  plAccruedRevenueOnAcc: DeserializedType<T, 'Edm.Decimal'>;
  plLaborCostWithoutNoNeverLedger: DeserializedType<T, 'Edm.Decimal'>;
  netWip: DeserializedType<T, 'Edm.Decimal'>;
  plMaterialCost: DeserializedType<T, 'Edm.Decimal'>;
  projTransDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  projTableProjId?: DeserializedType<T, 'Edm.String'> | null;
  ledgerDimensionDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  costSales?: ProjCostSales | null;
  consumedMaterialCostWithoutNeverLedger: DeserializedType<T, 'Edm.Decimal'>;
  subscriptionId?: DeserializedType<T, 'Edm.String'> | null;
  plInvoicedRevenue: DeserializedType<T, 'Edm.Decimal'>;
  wipMaterialCost: DeserializedType<T, 'Edm.Decimal'>;
  resourceId?: DeserializedType<T, 'Edm.String'> | null;
  modelId?: DeserializedType<T, 'Edm.String'> | null;
  plTotalAccruedRevenue: DeserializedType<T, 'Edm.Decimal'>;
  projFundingSourceContractId?: DeserializedType<T, 'Edm.String'> | null;
  plLaborQtyWithoutNoNeverLedger: DeserializedType<T, 'Edm.Decimal'>;
  resourceCategory: DeserializedType<T, 'Edm.Int64'>;
  consumedExpenseCost: DeserializedType<T, 'Edm.Decimal'>;
  wipLaborCost: DeserializedType<T, 'Edm.Decimal'>;
  consumedLaborQty: DeserializedType<T, 'Edm.Decimal'>;
  plExpenseCost: DeserializedType<T, 'Edm.Decimal'>;
  emplItemId?: DeserializedType<T, 'Edm.String'> | null;
  wipCostAccruedLoss: DeserializedType<T, 'Edm.Decimal'>;
  postingType?: LedgerPostingType | null;
  onAccMilestone: DeserializedType<T, 'Edm.Decimal'>;
  plTotalCost: DeserializedType<T, 'Edm.Decimal'>;
  ledgerTransDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  plCostAccruedLoss: DeserializedType<T, 'Edm.Decimal'>;
  payrollAllocation: DeserializedType<T, 'Edm.Decimal'>;
  wipProfit: DeserializedType<T, 'Edm.Decimal'>;
  wipSubscription: DeserializedType<T, 'Edm.Decimal'>;
  projId?: DeserializedType<T, 'Edm.String'> | null;
  wipSalesTotal: DeserializedType<T, 'Edm.Decimal'>;
  onAccDeduction: DeserializedType<T, 'Edm.Decimal'>;
  contractId?: DeserializedType<T, 'Edm.String'> | null;
  categoryId?: DeserializedType<T, 'Edm.String'> | null;
  elimination?: NoYes | null;
  dimensionSet?: DimensionSetsType<T> | null;
}
