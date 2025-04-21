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
import type { PsaActualsApi } from './PsaActualsApi';
import { ProjOrigin } from './ProjOrigin';
import { ProjCostSales } from './ProjCostSales';
import { ProjPaymentStatus } from './ProjPaymentStatus';
import { LedgerPostingType } from './LedgerPostingType';
import { ProjType } from './ProjType';
import { ProjTransType } from './ProjTransType';
import { DimensionSets, DimensionSetsType } from './DimensionSets';

/**
 * This class represents the entity "PSAActuals" of service "d365_metadata".
 */
export class PsaActuals<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements PsaActualsType<T>
{
  /**
   * Technical entity name for PsaActuals.
   */
  static override _entityName = 'PSAActuals';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the PsaActuals entity.
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
   * Proj Funding Source Funding Source Id.
   * @nullable
   */
  declare projFundingSourceFundingSourceId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Pl Accrued Revenue On Acc.
   */
  declare plAccruedRevenueOnAcc: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Consumed Material Cost Without Never Ledger.
   */
  declare consumedMaterialCostWithoutNeverLedger: DeserializedType<
    T,
    'Edm.Decimal'
  >;
  /**
   * Pl Material Cost.
   */
  declare plMaterialCost: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Net Wip.
   */
  declare netWip: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Pl Accrued Revenue Production.
   */
  declare plAccruedRevenueProduction: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Material Invoiced Revenue.
   */
  declare materialInvoicedRevenue: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Consumed Labor Cost.
   */
  declare consumedLaborCost: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Proj Trans Date.
   */
  declare projTransDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Wip Production.
   */
  declare wipProduction: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Pl Accrued Revenue Profit.
   */
  declare plAccruedRevenueProfit: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Pl Accrued Revenue Subscription.
   */
  declare plAccruedRevenueSubscription: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Pl Cost Accrued Loss.
   */
  declare plCostAccruedLoss: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Pl Accrued Revenue Sales Value Fee.
   */
  declare plAccruedRevenueSalesValueFee: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Consumed Labor Qty Without No Never Ledger.
   */
  declare consumedLaborQtyWithoutNoNeverLedger: DeserializedType<
    T,
    'Edm.Decimal'
  >;
  /**
   * Pl Total Cost.
   */
  declare plTotalCost: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * On Acc Total.
   */
  declare onAccTotal: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Total Consumption.
   */
  declare totalConsumption: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Resource Company Id.
   * @nullable
   */
  declare resourceCompanyId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Transaction Origin.
   * @nullable
   */
  declare transactionOrigin?: ProjOrigin | null;
  /**
   * Pl Labor Qty Without No Never Ledger.
   */
  declare plLaborQtyWithoutNoNeverLedger: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Contract Id.
   * @nullable
   */
  declare contractId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Ledger Origin.
   * @nullable
   */
  declare ledgerOrigin?: ProjOrigin | null;
  /**
   * Cost Sales.
   * @nullable
   */
  declare costSales?: ProjCostSales | null;
  /**
   * Wip Material Cost.
   */
  declare wipMaterialCost: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Consumed Expense Cost.
   */
  declare consumedExpenseCost: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Invent Trans Id.
   * @nullable
   */
  declare inventTransId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Payment Status.
   * @nullable
   */
  declare paymentStatus?: ProjPaymentStatus | null;
  /**
   * Pl Labor Cost.
   */
  declare plLaborCost: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Posting Type.
   * @nullable
   */
  declare postingType?: LedgerPostingType | null;
  /**
   * Gross Wip.
   */
  declare grossWip: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Proj Type.
   * @nullable
   */
  declare projType?: ProjType | null;
  /**
   * Pl Accrued Revenue Sales Value Material.
   */
  declare plAccruedRevenueSalesValueMaterial: DeserializedType<
    T,
    'Edm.Decimal'
  >;
  /**
   * Pl Labor Qty.
   */
  declare plLaborQty: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Voucher.
   * @nullable
   */
  declare voucher?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Consumed Labor Qty.
   */
  declare consumedLaborQty: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Wip Sales Total.
   */
  declare wipSalesTotal: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Pl Total Accrued Revenue.
   */
  declare plTotalAccruedRevenue: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * On Acc Beg Bal.
   */
  declare onAccBegBal: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Pl Expense Cost.
   */
  declare plExpenseCost: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Pl Accrued Revenue Sales Value Expense.
   */
  declare plAccruedRevenueSalesValueExpense: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Pl Accrued Revenue Sales Value.
   */
  declare plAccruedRevenueSalesValue: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Expense Invoiced Revenue.
   */
  declare expenseInvoicedRevenue: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Fee Invoiced Revenue.
   */
  declare feeInvoicedRevenue: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Company Info Data Area.
   * @nullable
   */
  declare companyInfoDataArea?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Payroll Allocation.
   */
  declare payrollAllocation: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Labor Invoiced Qty.
   */
  declare laborInvoicedQty: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Empl Item Id.
   * @nullable
   */
  declare emplItemId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Qty.
   */
  declare qty: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Wip Profit.
   */
  declare wipProfit: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Wip Expense Cost.
   */
  declare wipExpenseCost: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Labor Invoiced Revenue.
   */
  declare laborInvoicedRevenue: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Consumed Labor Cost Without No Never Ledger.
   */
  declare consumedLaborCostWithoutNoNeverLedger: DeserializedType<
    T,
    'Edm.Decimal'
  >;
  /**
   * Pl Material Cost Without Never Ledger.
   */
  declare plMaterialCostWithoutNeverLedger: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Payment Date.
   */
  declare paymentDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Wip Subscription.
   */
  declare wipSubscription: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Resource Id.
   * @nullable
   */
  declare resourceId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Category Id.
   * @nullable
   */
  declare categoryId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Consumed Material Cost.
   */
  declare consumedMaterialCost: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * On Acc Pre Payment.
   */
  declare onAccPrePayment: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Subscription Id.
   * @nullable
   */
  declare subscriptionId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Total Invoiced Revenue.
   */
  declare totalInvoicedRevenue: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Wip Labor Cost.
   */
  declare wipLaborCost: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Wip Total Cost.
   */
  declare wipTotalCost: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Pl Invoiced Revenue On Account.
   */
  declare plInvoicedRevenueOnAccount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Pl Accrued Revenue Sales Value Labor.
   */
  declare plAccruedRevenueSalesValueLabor: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Amount Mst.
   */
  declare amountMst: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Default Dimension Display Value.
   * @nullable
   */
  declare defaultDimensionDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Ledger Trans Date.
   */
  declare ledgerTransDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Proj Trans Type.
   * @nullable
   */
  declare projTransType?: ProjTransType | null;
  /**
   * On Acc Deduction.
   */
  declare onAccDeduction: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Activity Number.
   * @nullable
   */
  declare activityNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Pl Invoiced Revenue.
   */
  declare plInvoicedRevenue: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Ledger Dimension Display Value.
   * @nullable
   */
  declare ledgerDimensionDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Proj Funding Source Contract Id.
   * @nullable
   */
  declare projFundingSourceContractId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * On Acc Milestone.
   */
  declare onAccMilestone: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Proj Adjust Ref Id.
   * @nullable
   */
  declare projAdjustRefId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Wip Cost Accrued Loss.
   */
  declare wipCostAccruedLoss: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Wip Sales Value.
   */
  declare wipSalesValue: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Wip Invoiced On Account.
   */
  declare wipInvoicedOnAccount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Pl Labor Cost Without No Never Ledger.
   */
  declare plLaborCostWithoutNoNeverLedger: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Proj Id.
   * @nullable
   */
  declare projId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sub Bill Deferral Cost Item.
   */
  declare subBillDeferralCostItem: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Sub Bill Deferral Sales Item.
   */
  declare subBillDeferralSalesItem: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Sub Bill Deferral Cost Hour.
   */
  declare subBillDeferralCostHour: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Sub Bill Deferral Sales Hour.
   */
  declare subBillDeferralSalesHour: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Sub Bill Deferral Cost Expense.
   */
  declare subBillDeferralCostExpense: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Sub Bill Deferral Sales Expense.
   */
  declare subBillDeferralSalesExpense: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * One-to-one navigation property to the {@link DimensionSets} entity.
   */
  declare dimensionSet?: DimensionSets<T> | null;

  constructor(_entityApi: PsaActualsApi<T>) {
    super(_entityApi);
  }
}

export interface PsaActualsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  transId: DeserializedType<T, 'Edm.String'>;
  projFundingSourceFundingSourceId?: DeserializedType<T, 'Edm.String'> | null;
  plAccruedRevenueOnAcc: DeserializedType<T, 'Edm.Decimal'>;
  consumedMaterialCostWithoutNeverLedger: DeserializedType<T, 'Edm.Decimal'>;
  plMaterialCost: DeserializedType<T, 'Edm.Decimal'>;
  netWip: DeserializedType<T, 'Edm.Decimal'>;
  plAccruedRevenueProduction: DeserializedType<T, 'Edm.Decimal'>;
  materialInvoicedRevenue: DeserializedType<T, 'Edm.Decimal'>;
  consumedLaborCost: DeserializedType<T, 'Edm.Decimal'>;
  projTransDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  wipProduction: DeserializedType<T, 'Edm.Decimal'>;
  plAccruedRevenueProfit: DeserializedType<T, 'Edm.Decimal'>;
  plAccruedRevenueSubscription: DeserializedType<T, 'Edm.Decimal'>;
  plCostAccruedLoss: DeserializedType<T, 'Edm.Decimal'>;
  plAccruedRevenueSalesValueFee: DeserializedType<T, 'Edm.Decimal'>;
  consumedLaborQtyWithoutNoNeverLedger: DeserializedType<T, 'Edm.Decimal'>;
  plTotalCost: DeserializedType<T, 'Edm.Decimal'>;
  onAccTotal: DeserializedType<T, 'Edm.Decimal'>;
  totalConsumption: DeserializedType<T, 'Edm.Decimal'>;
  resourceCompanyId?: DeserializedType<T, 'Edm.String'> | null;
  transactionOrigin?: ProjOrigin | null;
  plLaborQtyWithoutNoNeverLedger: DeserializedType<T, 'Edm.Decimal'>;
  contractId?: DeserializedType<T, 'Edm.String'> | null;
  ledgerOrigin?: ProjOrigin | null;
  costSales?: ProjCostSales | null;
  wipMaterialCost: DeserializedType<T, 'Edm.Decimal'>;
  consumedExpenseCost: DeserializedType<T, 'Edm.Decimal'>;
  inventTransId?: DeserializedType<T, 'Edm.String'> | null;
  paymentStatus?: ProjPaymentStatus | null;
  plLaborCost: DeserializedType<T, 'Edm.Decimal'>;
  postingType?: LedgerPostingType | null;
  grossWip: DeserializedType<T, 'Edm.Decimal'>;
  projType?: ProjType | null;
  plAccruedRevenueSalesValueMaterial: DeserializedType<T, 'Edm.Decimal'>;
  plLaborQty: DeserializedType<T, 'Edm.Decimal'>;
  voucher?: DeserializedType<T, 'Edm.String'> | null;
  consumedLaborQty: DeserializedType<T, 'Edm.Decimal'>;
  wipSalesTotal: DeserializedType<T, 'Edm.Decimal'>;
  plTotalAccruedRevenue: DeserializedType<T, 'Edm.Decimal'>;
  onAccBegBal: DeserializedType<T, 'Edm.Decimal'>;
  plExpenseCost: DeserializedType<T, 'Edm.Decimal'>;
  plAccruedRevenueSalesValueExpense: DeserializedType<T, 'Edm.Decimal'>;
  plAccruedRevenueSalesValue: DeserializedType<T, 'Edm.Decimal'>;
  expenseInvoicedRevenue: DeserializedType<T, 'Edm.Decimal'>;
  feeInvoicedRevenue: DeserializedType<T, 'Edm.Decimal'>;
  companyInfoDataArea?: DeserializedType<T, 'Edm.String'> | null;
  payrollAllocation: DeserializedType<T, 'Edm.Decimal'>;
  laborInvoicedQty: DeserializedType<T, 'Edm.Decimal'>;
  emplItemId?: DeserializedType<T, 'Edm.String'> | null;
  qty: DeserializedType<T, 'Edm.Decimal'>;
  wipProfit: DeserializedType<T, 'Edm.Decimal'>;
  wipExpenseCost: DeserializedType<T, 'Edm.Decimal'>;
  laborInvoicedRevenue: DeserializedType<T, 'Edm.Decimal'>;
  consumedLaborCostWithoutNoNeverLedger: DeserializedType<T, 'Edm.Decimal'>;
  plMaterialCostWithoutNeverLedger: DeserializedType<T, 'Edm.Decimal'>;
  paymentDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  wipSubscription: DeserializedType<T, 'Edm.Decimal'>;
  resourceId?: DeserializedType<T, 'Edm.String'> | null;
  categoryId?: DeserializedType<T, 'Edm.String'> | null;
  consumedMaterialCost: DeserializedType<T, 'Edm.Decimal'>;
  onAccPrePayment: DeserializedType<T, 'Edm.Decimal'>;
  subscriptionId?: DeserializedType<T, 'Edm.String'> | null;
  totalInvoicedRevenue: DeserializedType<T, 'Edm.Decimal'>;
  wipLaborCost: DeserializedType<T, 'Edm.Decimal'>;
  wipTotalCost: DeserializedType<T, 'Edm.Decimal'>;
  plInvoicedRevenueOnAccount: DeserializedType<T, 'Edm.Decimal'>;
  plAccruedRevenueSalesValueLabor: DeserializedType<T, 'Edm.Decimal'>;
  amountMst: DeserializedType<T, 'Edm.Decimal'>;
  defaultDimensionDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  ledgerTransDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  projTransType?: ProjTransType | null;
  onAccDeduction: DeserializedType<T, 'Edm.Decimal'>;
  activityNumber?: DeserializedType<T, 'Edm.String'> | null;
  plInvoicedRevenue: DeserializedType<T, 'Edm.Decimal'>;
  ledgerDimensionDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  projFundingSourceContractId?: DeserializedType<T, 'Edm.String'> | null;
  onAccMilestone: DeserializedType<T, 'Edm.Decimal'>;
  projAdjustRefId?: DeserializedType<T, 'Edm.String'> | null;
  wipCostAccruedLoss: DeserializedType<T, 'Edm.Decimal'>;
  wipSalesValue: DeserializedType<T, 'Edm.Decimal'>;
  wipInvoicedOnAccount: DeserializedType<T, 'Edm.Decimal'>;
  plLaborCostWithoutNoNeverLedger: DeserializedType<T, 'Edm.Decimal'>;
  projId?: DeserializedType<T, 'Edm.String'> | null;
  subBillDeferralCostItem: DeserializedType<T, 'Edm.Decimal'>;
  subBillDeferralSalesItem: DeserializedType<T, 'Edm.Decimal'>;
  subBillDeferralCostHour: DeserializedType<T, 'Edm.Decimal'>;
  subBillDeferralSalesHour: DeserializedType<T, 'Edm.Decimal'>;
  subBillDeferralCostExpense: DeserializedType<T, 'Edm.Decimal'>;
  subBillDeferralSalesExpense: DeserializedType<T, 'Edm.Decimal'>;
  dimensionSet?: DimensionSetsType<T> | null;
}
