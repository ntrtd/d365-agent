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
import type { JournalNamesApi } from './JournalNamesApi';
import { NewVoucher } from './NewVoucher';
import { NoYes } from './NoYes';
import { DetailSummary } from './DetailSummary';
import { LedgerJournalFeePosting } from './LedgerJournalFeePosting';
import { LedgerJournalDateInitTypeRu } from './LedgerJournalDateInitTypeRu';
import { LedgerJournalType } from './LedgerJournalType';
import { CurrentOperationsTax } from './CurrentOperationsTax';
import { LedgerJournalAcType } from './LedgerJournalAcType';
import {
  CustomerPaymentMethods,
  CustomerPaymentMethodsType
} from './CustomerPaymentMethods';
import {
  AssetParametersProposalJournalNames,
  AssetParametersProposalJournalNamesType
} from './AssetParametersProposalJournalNames';
import {
  GupRebateAndDeductionsPostingProfiles,
  GupRebateAndDeductionsPostingProfilesType
} from './GupRebateAndDeductionsPostingProfiles';
import { BudgetParameters, BudgetParametersType } from './BudgetParameters';
import {
  LedgerInterCompanyAccounts,
  LedgerInterCompanyAccountsType
} from './LedgerInterCompanyAccounts';
import {
  DimensionCombinations,
  DimensionCombinationsType
} from './DimensionCombinations';
import { DimensionSets, DimensionSetsType } from './DimensionSets';
import { BankAccounts, BankAccountsType } from './BankAccounts';
import {
  VendorPaymentMethods,
  VendorPaymentMethodsType
} from './VendorPaymentMethods';

/**
 * This class represents the entity "JournalNames" of service "d365_metadata".
 */
export class JournalNames<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements JournalNamesType<T>
{
  /**
   * Technical entity name for JournalNames.
   */
  static override _entityName = 'JournalNames';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the JournalNames entity.
   */
  static _keys = ['dataAreaId', 'Name'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Name.
   */
  declare name: DeserializedType<T, 'Edm.String'>;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Voucher Series Code.
   * @nullable
   */
  declare voucherSeriesCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Workflow Id.
   * @nullable
   */
  declare workflowId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Currency.
   * @nullable
   */
  declare currency?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * New Voucher.
   * @nullable
   */
  declare newVoucher?: NewVoucher | null;
  /**
   * Private For User Group.
   * @nullable
   */
  declare privateForUserGroup?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Voucher Allocation At Posting.
   * @nullable
   */
  declare voucherAllocationAtPosting?: NoYes | null;
  /**
   * Allow Only Positive Debits And Credits.
   * @nullable
   */
  declare allowOnlyPositiveDebitsAndCredits?: NoYes | null;
  /**
   * Voucher Series Company Id.
   * @nullable
   */
  declare voucherSeriesCompanyId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Default Financial Dimension Display Value.
   * @nullable
   */
  declare defaultFinancialDimensionDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Hide Sales Tax Fields In Journal Entry Forms.
   * @nullable
   */
  declare hideSalesTaxFieldsInJournalEntryForms?: NoYes | null;
  /**
   * Document Number.
   * @nullable
   */
  declare documentNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Detail Level.
   * @nullable
   */
  declare detailLevel?: DetailSummary | null;
  /**
   * Amounts Include Sales Tax.
   * @nullable
   */
  declare amountsIncludeSalesTax?: NoYes | null;
  /**
   * Fees Posting.
   * @nullable
   */
  declare feesPosting?: LedgerJournalFeePosting | null;
  /**
   * Is Workflow Approval Active.
   * @nullable
   */
  declare isWorkflowApprovalActive?: NoYes | null;
  /**
   * Prepayment Journal Voucher.
   * @nullable
   */
  declare prepaymentJournalVoucher?: NoYes | null;
  /**
   * Delete Lines After Posting.
   * @nullable
   */
  declare deleteLinesAfterPosting?: NoYes | null;
  /**
   * Offset Account Display Value.
   * @nullable
   */
  declare offsetAccountDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Override Sales Tax.
   * @nullable
   */
  declare overrideSalesTax?: NoYes | null;
  /**
   * Approval User Group.
   * @nullable
   */
  declare approvalUserGroup?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Posting Line Limit.
   */
  declare postingLineLimit: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Principle Of Date Initialization.
   * @nullable
   */
  declare principleOfDateInitialization?: LedgerJournalDateInitTypeRu | null;
  /**
   * Type.
   * @nullable
   */
  declare type?: LedgerJournalType | null;
  /**
   * Default Cash Account.
   * @nullable
   */
  declare defaultCashAccount?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Fixed Exchange Rate.
   * @nullable
   */
  declare isFixedExchangeRate?: NoYes | null;
  /**
   * Is Approval Active.
   * @nullable
   */
  declare isApprovalActive?: NoYes | null;
  /**
   * End Balance Control.
   * @nullable
   */
  declare endBalanceControl?: NoYes | null;
  /**
   * Is Fixed Offset Account.
   * @nullable
   */
  declare isFixedOffsetAccount?: NoYes | null;
  /**
   * Posting Layer.
   * @nullable
   */
  declare postingLayer?: CurrentOperationsTax | null;
  /**
   * Posting Date Control.
   * @nullable
   */
  declare postingDateControl?: NoYes | null;
  /**
   * Offset Account Type.
   * @nullable
   */
  declare offsetAccountType?: LedgerJournalAcType | null;
  /**
   * Generate Payments Before Posting.
   * @nullable
   */
  declare generatePaymentsBeforePosting?: NoYes | null;
  /**
   * Requires Simulation Validation It.
   * @nullable
   */
  declare requiresSimulationValidationIt?: NoYes | null;
  /**
   * One-to-many navigation property to the {@link CustomerPaymentMethods} entity.
   */
  declare customerPaymentMethod: CustomerPaymentMethods<T>[];
  /**
   * One-to-many navigation property to the {@link AssetParametersProposalJournalNames} entity.
   */
  declare assetParameterProposalJournalName: AssetParametersProposalJournalNames<T>[];
  /**
   * One-to-many navigation property to the {@link GupRebateAndDeductionsPostingProfiles} entity.
   */
  declare provisionJournalNameAssignedRebateAndDeductionsPostingProfiles: GupRebateAndDeductionsPostingProfiles<T>[];
  /**
   * One-to-many navigation property to the {@link GupRebateAndDeductionsPostingProfiles} entity.
   */
  declare rebateJournalNameAssignedRebateAndDeductionsPostingProfiles: GupRebateAndDeductionsPostingProfiles<T>[];
  /**
   * One-to-many navigation property to the {@link GupRebateAndDeductionsPostingProfiles} entity.
   */
  declare writeOffJournalNameAssignedRebateAndDeductionsPostingProfiles: GupRebateAndDeductionsPostingProfiles<T>[];
  /**
   * One-to-many navigation property to the {@link BudgetParameters} entity.
   */
  declare budgetJournalName: BudgetParameters<T>[];
  /**
   * One-to-many navigation property to the {@link LedgerInterCompanyAccounts} entity.
   */
  declare ledgerIntercompanyJournalName: LedgerInterCompanyAccounts<T>[];
  /**
   * One-to-one navigation property to the {@link DimensionCombinations} entity.
   */
  declare dimensionCombination?: DimensionCombinations<T> | null;
  /**
   * One-to-one navigation property to the {@link DimensionSets} entity.
   */
  declare dimensionSet?: DimensionSets<T> | null;
  /**
   * One-to-many navigation property to the {@link BankAccounts} entity.
   */
  declare bankAccount: BankAccounts<T>[];
  /**
   * One-to-many navigation property to the {@link VendorPaymentMethods} entity.
   */
  declare vendorPaymentMethod: VendorPaymentMethods<T>[];

  constructor(_entityApi: JournalNamesApi<T>) {
    super(_entityApi);
  }
}

export interface JournalNamesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  name: DeserializedType<T, 'Edm.String'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
  voucherSeriesCode?: DeserializedType<T, 'Edm.String'> | null;
  workflowId?: DeserializedType<T, 'Edm.String'> | null;
  currency?: DeserializedType<T, 'Edm.String'> | null;
  newVoucher?: NewVoucher | null;
  privateForUserGroup?: DeserializedType<T, 'Edm.String'> | null;
  voucherAllocationAtPosting?: NoYes | null;
  allowOnlyPositiveDebitsAndCredits?: NoYes | null;
  voucherSeriesCompanyId?: DeserializedType<T, 'Edm.String'> | null;
  defaultFinancialDimensionDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  hideSalesTaxFieldsInJournalEntryForms?: NoYes | null;
  documentNumber?: DeserializedType<T, 'Edm.String'> | null;
  detailLevel?: DetailSummary | null;
  amountsIncludeSalesTax?: NoYes | null;
  feesPosting?: LedgerJournalFeePosting | null;
  isWorkflowApprovalActive?: NoYes | null;
  prepaymentJournalVoucher?: NoYes | null;
  deleteLinesAfterPosting?: NoYes | null;
  offsetAccountDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  overrideSalesTax?: NoYes | null;
  approvalUserGroup?: DeserializedType<T, 'Edm.String'> | null;
  postingLineLimit: DeserializedType<T, 'Edm.Int32'>;
  principleOfDateInitialization?: LedgerJournalDateInitTypeRu | null;
  type?: LedgerJournalType | null;
  defaultCashAccount?: DeserializedType<T, 'Edm.String'> | null;
  isFixedExchangeRate?: NoYes | null;
  isApprovalActive?: NoYes | null;
  endBalanceControl?: NoYes | null;
  isFixedOffsetAccount?: NoYes | null;
  postingLayer?: CurrentOperationsTax | null;
  postingDateControl?: NoYes | null;
  offsetAccountType?: LedgerJournalAcType | null;
  generatePaymentsBeforePosting?: NoYes | null;
  requiresSimulationValidationIt?: NoYes | null;
  customerPaymentMethod: CustomerPaymentMethodsType<T>[];
  assetParameterProposalJournalName: AssetParametersProposalJournalNamesType<T>[];
  provisionJournalNameAssignedRebateAndDeductionsPostingProfiles: GupRebateAndDeductionsPostingProfilesType<T>[];
  rebateJournalNameAssignedRebateAndDeductionsPostingProfiles: GupRebateAndDeductionsPostingProfilesType<T>[];
  writeOffJournalNameAssignedRebateAndDeductionsPostingProfiles: GupRebateAndDeductionsPostingProfilesType<T>[];
  budgetJournalName: BudgetParametersType<T>[];
  ledgerIntercompanyJournalName: LedgerInterCompanyAccountsType<T>[];
  dimensionCombination?: DimensionCombinationsType<T> | null;
  dimensionSet?: DimensionSetsType<T> | null;
  bankAccount: BankAccountsType<T>[];
  vendorPaymentMethod: VendorPaymentMethodsType<T>[];
}
