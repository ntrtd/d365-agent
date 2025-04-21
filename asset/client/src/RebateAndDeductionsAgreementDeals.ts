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
import type { RebateAndDeductionsAgreementDealsApi } from './RebateAndDeductionsAgreementDealsApi';
import { ModuleInventCustVend } from './ModuleInventCustVend';
import { NoYes } from './NoYes';
import { TamRebateDealWorkflowState } from './TamRebateDealWorkflowState';
import { TamRebateReconciliation } from './TamRebateReconciliation';
import { TamRebateType } from './TamRebateType';
import { TamRebateOutputType } from './TamRebateOutputType';
import { TamRebateTypeGup } from './TamRebateTypeGup';
import {
  RebateAndDeductionAgreementHeaders,
  RebateAndDeductionAgreementHeadersType
} from './RebateAndDeductionAgreementHeaders';
import {
  RebateStatusTables,
  RebateStatusTablesType
} from './RebateStatusTables';
import {
  RebateAndDeductionsPostingProfiles,
  RebateAndDeductionsPostingProfilesType
} from './RebateAndDeductionsPostingProfiles';

/**
 * This class represents the entity "RebateAndDeductionsAgreementDeals" of service "d365_metadata".
 */
export class RebateAndDeductionsAgreementDeals<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements RebateAndDeductionsAgreementDealsType<T>
{
  /**
   * Technical entity name for RebateAndDeductionsAgreementDeals.
   */
  static override _entityName = 'RebateAndDeductionsAgreementDeals';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the RebateAndDeductionsAgreementDeals entity.
   */
  static _keys = ['DealNumber'];
  /**
   * Deal Number.
   */
  declare dealNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Deal Module.
   * @nullable
   */
  declare dealModule?: ModuleInventCustVend | null;
  /**
   * Guarantee Posting Profile Id.
   * @nullable
   */
  declare guaranteePostingProfileId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Deal Active.
   * @nullable
   */
  declare isDealActive?: NoYes | null;
  /**
   * Rebate And Deductions Status Id.
   * @nullable
   */
  declare rebateAndDeductionsStatusId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Deal Document Notes.
   * @nullable
   */
  declare dealDocumentNotes?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Deal Description.
   * @nullable
   */
  declare dealDescription?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Deal Currency Code.
   * @nullable
   */
  declare dealCurrencyCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Deal Valid To Date.
   */
  declare dealValidToDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Workflow State.
   * @nullable
   */
  declare workflowState?: TamRebateDealWorkflowState | null;
  /**
   * Deal Reconciliation.
   * @nullable
   */
  declare dealReconciliation?: TamRebateReconciliation | null;
  /**
   * Matched By Order Account.
   * @nullable
   */
  declare matchedByOrderAccount?: NoYes | null;
  /**
   * Deal Valid From Date.
   */
  declare dealValidFromDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Deal Type.
   * @nullable
   */
  declare dealType?: TamRebateType | null;
  /**
   * Will Rebate Deal Processing Proceed Guarantee Cumulative.
   * @nullable
   */
  declare willRebateDealProcessingProceedGuaranteeCumulative?: NoYes | null;
  /**
   * Deal Output Type.
   * @nullable
   */
  declare dealOutputType?: TamRebateOutputType | null;
  /**
   * Deal Posting Profile Id.
   * @nullable
   */
  declare dealPostingProfileId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Rebate Company Id.
   * @nullable
   */
  declare rebateCompanyId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Rebate Agreement Type.
   * @nullable
   */
  declare rebateAgreementType?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Rebate Type Gup.
   * @nullable
   */
  declare rebateTypeGup?: TamRebateTypeGup | null;
  /**
   * Recipient.
   * @nullable
   */
  declare recipient?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-many navigation property to the {@link RebateAndDeductionAgreementHeaders} entity.
   */
  declare rebateAndDeductionsAgreementHeaders: RebateAndDeductionAgreementHeaders<T>[];
  /**
   * One-to-one navigation property to the {@link RebateStatusTables} entity.
   */
  declare rebateAndDeductionsStatus?: RebateStatusTables<T> | null;
  /**
   * One-to-one navigation property to the {@link RebateAndDeductionsPostingProfiles} entity.
   */
  declare dealGuaranteeRebateAndDeductionsPostingProfile?: RebateAndDeductionsPostingProfiles<T> | null;
  /**
   * One-to-one navigation property to the {@link RebateAndDeductionsPostingProfiles} entity.
   */
  declare dealRebateAndDeductionsPostingProfile?: RebateAndDeductionsPostingProfiles<T> | null;

  constructor(_entityApi: RebateAndDeductionsAgreementDealsApi<T>) {
    super(_entityApi);
  }
}

export interface RebateAndDeductionsAgreementDealsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dealNumber: DeserializedType<T, 'Edm.String'>;
  dealModule?: ModuleInventCustVend | null;
  guaranteePostingProfileId?: DeserializedType<T, 'Edm.String'> | null;
  isDealActive?: NoYes | null;
  rebateAndDeductionsStatusId?: DeserializedType<T, 'Edm.String'> | null;
  dealDocumentNotes?: DeserializedType<T, 'Edm.String'> | null;
  dealDescription?: DeserializedType<T, 'Edm.String'> | null;
  dealCurrencyCode?: DeserializedType<T, 'Edm.String'> | null;
  dealValidToDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  workflowState?: TamRebateDealWorkflowState | null;
  dealReconciliation?: TamRebateReconciliation | null;
  matchedByOrderAccount?: NoYes | null;
  dealValidFromDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  dealType?: TamRebateType | null;
  willRebateDealProcessingProceedGuaranteeCumulative?: NoYes | null;
  dealOutputType?: TamRebateOutputType | null;
  dealPostingProfileId?: DeserializedType<T, 'Edm.String'> | null;
  rebateCompanyId?: DeserializedType<T, 'Edm.String'> | null;
  rebateAgreementType?: DeserializedType<T, 'Edm.String'> | null;
  rebateTypeGup?: TamRebateTypeGup | null;
  recipient?: DeserializedType<T, 'Edm.String'> | null;
  rebateAndDeductionsAgreementHeaders: RebateAndDeductionAgreementHeadersType<T>[];
  rebateAndDeductionsStatus?: RebateStatusTablesType<T> | null;
  dealGuaranteeRebateAndDeductionsPostingProfile?: RebateAndDeductionsPostingProfilesType<T> | null;
  dealRebateAndDeductionsPostingProfile?: RebateAndDeductionsPostingProfilesType<T> | null;
}
