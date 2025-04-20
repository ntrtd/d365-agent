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
import type { ProjectContractLinesApi } from './ProjectContractLinesApi';
import { PsaProjAmountVsUnit } from './PsaProjAmountVsUnit';
import { ProjContractBillingMethod } from './ProjContractBillingMethod';
import { NoYes } from './NoYes';
import { InvoiceScheduleType } from './InvoiceScheduleType';
import { PsaContractLineType } from './PsaContractLineType';
import { DimensionSets, DimensionSetsType } from './DimensionSets';

/**
 * This class represents the entity "ProjectContractLines" of service "d365_metadata".
 */
export class ProjectContractLines<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements ProjectContractLinesType<T>
{
  /**
   * Technical entity name for ProjectContractLines.
   */
  static override _entityName = 'ProjectContractLines';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ProjectContractLines entity.
   */
  static _keys = ['dataAreaId', 'ProjectContractId', 'LineSequenceNumber'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Project Contract Id.
   */
  declare projectContractId: DeserializedType<T, 'Edm.String'>;
  /**
   * Line Sequence Number.
   */
  declare lineSequenceNumber: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Vat Commodity Code.
   * @nullable
   */
  declare vatCommodityCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Budget Method.
   * @nullable
   */
  declare budgetMethod?: PsaProjAmountVsUnit | null;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Billing Method.
   * @nullable
   */
  declare billingMethod?: ProjContractBillingMethod | null;
  /**
   * Default Ledger Dimension Display Value.
   * @nullable
   */
  declare defaultLedgerDimensionDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Fee Percentage.
   */
  declare feePercentage: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Fee Category Id.
   * @nullable
   */
  declare feeCategoryId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Are Fee Transactions Included.
   * @nullable
   */
  declare areFeeTransactionsIncluded?: NoYes | null;
  /**
   * Line Project Id.
   * @nullable
   */
  declare lineProjectId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Are Hour Transactions Included.
   * @nullable
   */
  declare areHourTransactionsIncluded?: NoYes | null;
  /**
   * Maximum Retail Price.
   */
  declare maximumRetailPrice: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Unit Price.
   */
  declare unitPrice: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Sales Tax Group Code.
   * @nullable
   */
  declare salesTaxGroupCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Tds Group Code.
   * @nullable
   */
  declare tdsGroupCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Fee Project Id.
   * @nullable
   */
  declare feeProjectId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Invoice Schedule Type.
   * @nullable
   */
  declare invoiceScheduleType?: InvoiceScheduleType | null;
  /**
   * Line Type.
   * @nullable
   */
  declare lineType?: PsaContractLineType | null;
  /**
   * Paid Amount.
   */
  declare paidAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Customer Retention Term Id.
   * @nullable
   */
  declare customerRetentionTermId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Tcs Group Code.
   * @nullable
   */
  declare tcsGroupCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Retainage Percentage.
   */
  declare retainagePercentage: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Unit Symbol.
   * @nullable
   */
  declare unitSymbol?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Start Date.
   */
  declare startDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Are Expense Transactions Included.
   * @nullable
   */
  declare areExpenseTransactionsIncluded?: NoYes | null;
  /**
   * Line Amount.
   */
  declare lineAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Assessable Value.
   */
  declare assessableValue: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * End Date.
   */
  declare endDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Is Indirect Cost Included.
   * @nullable
   */
  declare isIndirectCostIncluded?: NoYes | null;
  /**
   * Change Order Number.
   * @nullable
   */
  declare changeOrderNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Are Item Transactions Included.
   * @nullable
   */
  declare areItemTransactionsIncluded?: NoYes | null;
  /**
   * Quantity.
   */
  declare quantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Contract Line Id.
   * @nullable
   */
  declare contractLineId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-one navigation property to the {@link DimensionSets} entity.
   */
  declare defaultDimensionDimensionSet?: DimensionSets<T> | null;

  constructor(_entityApi: ProjectContractLinesApi<T>) {
    super(_entityApi);
  }
}

export interface ProjectContractLinesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  projectContractId: DeserializedType<T, 'Edm.String'>;
  lineSequenceNumber: DeserializedType<T, 'Edm.Int32'>;
  vatCommodityCode?: DeserializedType<T, 'Edm.String'> | null;
  budgetMethod?: PsaProjAmountVsUnit | null;
  description?: DeserializedType<T, 'Edm.String'> | null;
  billingMethod?: ProjContractBillingMethod | null;
  defaultLedgerDimensionDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  feePercentage: DeserializedType<T, 'Edm.Decimal'>;
  feeCategoryId?: DeserializedType<T, 'Edm.String'> | null;
  areFeeTransactionsIncluded?: NoYes | null;
  lineProjectId?: DeserializedType<T, 'Edm.String'> | null;
  areHourTransactionsIncluded?: NoYes | null;
  maximumRetailPrice: DeserializedType<T, 'Edm.Decimal'>;
  unitPrice: DeserializedType<T, 'Edm.Decimal'>;
  salesTaxGroupCode?: DeserializedType<T, 'Edm.String'> | null;
  tdsGroupCode?: DeserializedType<T, 'Edm.String'> | null;
  feeProjectId?: DeserializedType<T, 'Edm.String'> | null;
  invoiceScheduleType?: InvoiceScheduleType | null;
  lineType?: PsaContractLineType | null;
  paidAmount: DeserializedType<T, 'Edm.Decimal'>;
  customerRetentionTermId?: DeserializedType<T, 'Edm.String'> | null;
  tcsGroupCode?: DeserializedType<T, 'Edm.String'> | null;
  retainagePercentage: DeserializedType<T, 'Edm.Decimal'>;
  unitSymbol?: DeserializedType<T, 'Edm.String'> | null;
  startDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  areExpenseTransactionsIncluded?: NoYes | null;
  lineAmount: DeserializedType<T, 'Edm.Decimal'>;
  assessableValue: DeserializedType<T, 'Edm.Decimal'>;
  endDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  isIndirectCostIncluded?: NoYes | null;
  changeOrderNumber?: DeserializedType<T, 'Edm.String'> | null;
  areItemTransactionsIncluded?: NoYes | null;
  quantity: DeserializedType<T, 'Edm.Decimal'>;
  contractLineId?: DeserializedType<T, 'Edm.String'> | null;
  defaultDimensionDimensionSet?: DimensionSetsType<T> | null;
}
