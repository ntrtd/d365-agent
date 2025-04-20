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
import type { RebateAndDeductionsPostingProfilesApi } from './RebateAndDeductionsPostingProfilesApi';
import { ModuleInventCustVend } from './ModuleInventCustVend';
import { TamRebateType } from './TamRebateType';
import { TamRebatePostingAccountType } from './TamRebatePostingAccountType';
import { TamRebatePaymentType } from './TamRebatePaymentType';
import { TamRebateDynamicAccount } from './TamRebateDynamicAccount';
import {
  RebateAndDeductionAgreementHeaders,
  RebateAndDeductionAgreementHeadersType
} from './RebateAndDeductionAgreementHeaders';
import {
  RebateAndDeductionsAgreementDeals,
  RebateAndDeductionsAgreementDealsType
} from './RebateAndDeductionsAgreementDeals';

/**
 * This class represents the entity "RebateAndDeductionsPostingProfiles" of service "d365_metadata".
 */
export class RebateAndDeductionsPostingProfiles<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements RebateAndDeductionsPostingProfilesType<T>
{
  /**
   * Technical entity name for RebateAndDeductionsPostingProfiles.
   */
  static override _entityName = 'RebateAndDeductionsPostingProfiles';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the RebateAndDeductionsPostingProfiles entity.
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
   * Posting Rebate Type.
   * @nullable
   */
  declare postingRebateType?: TamRebateType | null;
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
   * One-to-many navigation property to the {@link RebateAndDeductionAgreementHeaders} entity.
   */
  declare rebateAndDeductionsAgreementHeaders: RebateAndDeductionAgreementHeaders<T>[];
  /**
   * One-to-many navigation property to the {@link RebateAndDeductionAgreementHeaders} entity.
   */
  declare guaranteeAssignedRebateAndDeductionsAgreementHeaders: RebateAndDeductionAgreementHeaders<T>[];
  /**
   * One-to-many navigation property to the {@link RebateAndDeductionsAgreementDeals} entity.
   */
  declare dealGuaranteeAssignedRebateAndDeductionsAgreementDeals: RebateAndDeductionsAgreementDeals<T>[];
  /**
   * One-to-many navigation property to the {@link RebateAndDeductionsAgreementDeals} entity.
   */
  declare dealAssignedRebateAndDeductionsAgreementDeals: RebateAndDeductionsAgreementDeals<T>[];

  constructor(_entityApi: RebateAndDeductionsPostingProfilesApi<T>) {
    super(_entityApi);
  }
}

export interface RebateAndDeductionsPostingProfilesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  postingProfileModule?: ModuleInventCustVend | null;
  postingProfileId: DeserializedType<T, 'Edm.String'>;
  postingLegalEntityId: DeserializedType<T, 'Edm.String'>;
  rebateLedgerJournalNameId?: DeserializedType<T, 'Edm.String'> | null;
  postingRebateType?: TamRebateType | null;
  provisionDebitType?: TamRebatePostingAccountType | null;
  rebateCreditType?: TamRebatePostingAccountType | null;
  provisionCreditMainAccountIdDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  rebatePaymentType?: TamRebatePaymentType | null;
  salesTaxItemGroupCode?: DeserializedType<T, 'Edm.String'> | null;
  writeOffLedgerJournalNameId?: DeserializedType<T, 'Edm.String'> | null;
  provisionLedgerJournalNameId?: DeserializedType<T, 'Edm.String'> | null;
  rebateMainAccountIdDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  provisionDebitMainAccountIdDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  rebateLegalEntityId?: DeserializedType<T, 'Edm.String'> | null;
  postingAccountType?: TamRebatePostingAccountType | null;
  postingProfileDescription?: DeserializedType<T, 'Edm.String'> | null;
  rebateDealPostingDynamicAccountRule?: TamRebateDynamicAccount | null;
  writeOffMainAccountIdDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  rebateAndDeductionsAgreementHeaders: RebateAndDeductionAgreementHeadersType<T>[];
  guaranteeAssignedRebateAndDeductionsAgreementHeaders: RebateAndDeductionAgreementHeadersType<T>[];
  dealGuaranteeAssignedRebateAndDeductionsAgreementDeals: RebateAndDeductionsAgreementDealsType<T>[];
  dealAssignedRebateAndDeductionsAgreementDeals: RebateAndDeductionsAgreementDealsType<T>[];
}
