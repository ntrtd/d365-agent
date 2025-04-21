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
import type { GupRebateAndDeductionsPostingProfilesApi } from './GupRebateAndDeductionsPostingProfilesApi';
import { ModuleInventCustVend } from './ModuleInventCustVend';
import { TamRebateType } from './TamRebateType';
import { TamRebatePostingAccountType } from './TamRebatePostingAccountType';
import { TamRebatePaymentType } from './TamRebatePaymentType';
import { NoYes } from './NoYes';
import { TamRebateDynamicAccount } from './TamRebateDynamicAccount';
import { JournalNames, JournalNamesType } from './JournalNames';
import {
  DimensionCombinations,
  DimensionCombinationsType
} from './DimensionCombinations';
import {
  GupRebateAndDeductionsAgreementHeaders,
  GupRebateAndDeductionsAgreementHeadersType
} from './GupRebateAndDeductionsAgreementHeaders';

/**
 * This class represents the entity "GUPRebateAndDeductionsPostingProfiles" of service "d365_metadata".
 */
export class GupRebateAndDeductionsPostingProfiles<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements GupRebateAndDeductionsPostingProfilesType<T>
{
  /**
   * Technical entity name for GupRebateAndDeductionsPostingProfiles.
   */
  static override _entityName = 'GUPRebateAndDeductionsPostingProfiles';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the GupRebateAndDeductionsPostingProfiles entity.
   */
  static _keys = [
    'dataAreaId',
    'PostingProfileModule',
    'PostingProfileId',
    'PostingLegalEntityId'
  ];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Posting Profile Module.
   * @nullable
   */
  declare postingProfileModule?: ModuleInventCustVend | null;
  /**
   * Posting Profile Id.
   */
  declare postingProfileId: DeserializedType<T, 'Edm.String'>;
  /**
   * Posting Legal Entity Id.
   */
  declare postingLegalEntityId: DeserializedType<T, 'Edm.String'>;
  /**
   * Rebate Ledger Journal Name Id.
   * @nullable
   */
  declare rebateLedgerJournalNameId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Ledger Journal Name Id Fund.
   * @nullable
   */
  declare ledgerJournalNameIdFund?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Posting Rebate Type.
   * @nullable
   */
  declare postingRebateType?: TamRebateType | null;
  /**
   * Fund Ledger Dimension Display Value.
   * @nullable
   */
  declare fundLedgerDimensionDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Provision Debit Type.
   * @nullable
   */
  declare provisionDebitType?: TamRebatePostingAccountType | null;
  /**
   * Rebate Credit Type.
   * @nullable
   */
  declare rebateCreditType?: TamRebatePostingAccountType | null;
  /**
   * Provision Credit Main Account Id Display Value.
   * @nullable
   */
  declare provisionCreditMainAccountIdDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Rebate Payment Type.
   * @nullable
   */
  declare rebatePaymentType?: TamRebatePaymentType | null;
  /**
   * Sales Tax Item Group Code.
   * @nullable
   */
  declare salesTaxItemGroupCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Tax Item Group Fund.
   * @nullable
   */
  declare taxItemGroupFund?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Write Off Ledger Journal Name Id.
   * @nullable
   */
  declare writeOffLedgerJournalNameId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Provision Ledger Journal Name Id.
   * @nullable
   */
  declare provisionLedgerJournalNameId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Rebate Main Account Id Display Value.
   * @nullable
   */
  declare rebateMainAccountIdDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Provision Debit Main Account Id Display Value.
   * @nullable
   */
  declare provisionDebitMainAccountIdDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Rebate Legal Entity Id.
   * @nullable
   */
  declare rebateLegalEntityId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Posting Account Type.
   * @nullable
   */
  declare postingAccountType?: TamRebatePostingAccountType | null;
  /**
   * Price Includes Sales Tax.
   * @nullable
   */
  declare priceIncludesSalesTax?: NoYes | null;
  /**
   * Posting Profile Description.
   * @nullable
   */
  declare postingProfileDescription?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Rebate Deal Posting Dynamic Account Rule.
   * @nullable
   */
  declare rebateDealPostingDynamicAccountRule?: TamRebateDynamicAccount | null;
  /**
   * Write Off Main Account Id Display Value.
   * @nullable
   */
  declare writeOffMainAccountIdDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * One-to-one navigation property to the {@link JournalNames} entity.
   */
  declare provisionLedgerJournalName?: JournalNames<T> | null;
  /**
   * One-to-one navigation property to the {@link JournalNames} entity.
   */
  declare rebateLedgerJournalName?: JournalNames<T> | null;
  /**
   * One-to-one navigation property to the {@link JournalNames} entity.
   */
  declare writeOffLedgerJournalName?: JournalNames<T> | null;
  /**
   * One-to-one navigation property to the {@link DimensionCombinations} entity.
   */
  declare writeOffLedgerDimensionCombination?: DimensionCombinations<T> | null;
  /**
   * One-to-one navigation property to the {@link DimensionCombinations} entity.
   */
  declare provisionDebitLedgerDimensionCombination?: DimensionCombinations<T> | null;
  /**
   * One-to-one navigation property to the {@link DimensionCombinations} entity.
   */
  declare rebateLedgerDimensionCombination?: DimensionCombinations<T> | null;
  /**
   * One-to-one navigation property to the {@link DimensionCombinations} entity.
   */
  declare provisionCreditLedgerDimensionCombination?: DimensionCombinations<T> | null;
  /**
   * One-to-many navigation property to the {@link GupRebateAndDeductionsAgreementHeaders} entity.
   */
  declare rebateAndDeductionsAgreementHeaders: GupRebateAndDeductionsAgreementHeaders<T>[];
  /**
   * One-to-many navigation property to the {@link GupRebateAndDeductionsAgreementHeaders} entity.
   */
  declare guaranteeAssignedRebateAndDeductionsAgreementHeaders: GupRebateAndDeductionsAgreementHeaders<T>[];

  constructor(_entityApi: GupRebateAndDeductionsPostingProfilesApi<T>) {
    super(_entityApi);
  }
}

export interface GupRebateAndDeductionsPostingProfilesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  postingProfileModule?: ModuleInventCustVend | null;
  postingProfileId: DeserializedType<T, 'Edm.String'>;
  postingLegalEntityId: DeserializedType<T, 'Edm.String'>;
  rebateLedgerJournalNameId?: DeserializedType<T, 'Edm.String'> | null;
  ledgerJournalNameIdFund?: DeserializedType<T, 'Edm.String'> | null;
  postingRebateType?: TamRebateType | null;
  fundLedgerDimensionDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  provisionDebitType?: TamRebatePostingAccountType | null;
  rebateCreditType?: TamRebatePostingAccountType | null;
  provisionCreditMainAccountIdDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  rebatePaymentType?: TamRebatePaymentType | null;
  salesTaxItemGroupCode?: DeserializedType<T, 'Edm.String'> | null;
  taxItemGroupFund?: DeserializedType<T, 'Edm.String'> | null;
  writeOffLedgerJournalNameId?: DeserializedType<T, 'Edm.String'> | null;
  provisionLedgerJournalNameId?: DeserializedType<T, 'Edm.String'> | null;
  rebateMainAccountIdDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  provisionDebitMainAccountIdDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  rebateLegalEntityId?: DeserializedType<T, 'Edm.String'> | null;
  postingAccountType?: TamRebatePostingAccountType | null;
  priceIncludesSalesTax?: NoYes | null;
  postingProfileDescription?: DeserializedType<T, 'Edm.String'> | null;
  rebateDealPostingDynamicAccountRule?: TamRebateDynamicAccount | null;
  writeOffMainAccountIdDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  provisionLedgerJournalName?: JournalNamesType<T> | null;
  rebateLedgerJournalName?: JournalNamesType<T> | null;
  writeOffLedgerJournalName?: JournalNamesType<T> | null;
  writeOffLedgerDimensionCombination?: DimensionCombinationsType<T> | null;
  provisionDebitLedgerDimensionCombination?: DimensionCombinationsType<T> | null;
  rebateLedgerDimensionCombination?: DimensionCombinationsType<T> | null;
  provisionCreditLedgerDimensionCombination?: DimensionCombinationsType<T> | null;
  rebateAndDeductionsAgreementHeaders: GupRebateAndDeductionsAgreementHeadersType<T>[];
  guaranteeAssignedRebateAndDeductionsAgreementHeaders: GupRebateAndDeductionsAgreementHeadersType<T>[];
}
