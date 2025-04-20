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
import type { SubBillDeferralParametersApi } from './SubBillDeferralParametersApi';
import { SubBillDeferralPostingMethod } from './SubBillDeferralPostingMethod';
import { SubBillDeferralDiscountDeferralOption } from './SubBillDeferralDiscountDeferralOption';
import { NoYes } from './NoYes';
import { SubBillDeferralDefaultDeferralStartDate } from './SubBillDeferralDefaultDeferralStartDate';
import { SubBillDeferralShortTermDeferralMethod } from './SubBillDeferralShortTermDeferralMethod';
import { SubBillDeferralRecJournalLineDescType } from './SubBillDeferralRecJournalLineDescType';

/**
 * This class represents the entity "SubBillDeferralParametersCollection" of service "d365_metadata".
 */
export class SubBillDeferralParameters<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements SubBillDeferralParametersType<T>
{
  /**
   * Technical entity name for SubBillDeferralParameters.
   */
  static override _entityName = 'SubBillDeferralParametersCollection';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the SubBillDeferralParameters entity.
   */
  static _keys = ['dataAreaId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Posting Method.
   * @nullable
   */
  declare postingMethod?: SubBillDeferralPostingMethod | null;
  /**
   * Discount Deferral Option.
   * @nullable
   */
  declare discountDeferralOption?: SubBillDeferralDiscountDeferralOption | null;
  /**
   * Summarize Recognition Journal.
   * @nullable
   */
  declare summarizeRecognitionJournal?: NoYes | null;
  /**
   * Consolidate Prior Periods.
   * @nullable
   */
  declare consolidatePriorPeriods?: NoYes | null;
  /**
   * Purchase Discount Deferral Option.
   * @nullable
   */
  declare purchaseDiscountDeferralOption?: SubBillDeferralDiscountDeferralOption | null;
  /**
   * Default Deferral Start Date.
   * @nullable
   */
  declare defaultDeferralStartDate?: SubBillDeferralDefaultDeferralStartDate | null;
  /**
   * Reverse Profit Loss On Credit.
   * @nullable
   */
  declare reverseProfitLossOnCredit?: NoYes | null;
  /**
   * Default Journal Name.
   * @nullable
   */
  declare defaultJournalName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Show Missing Deferral Setup Message.
   * @nullable
   */
  declare showMissingDeferralSetupMessage?: NoYes | null;
  /**
   * Short Term Deferral Method.
   * @nullable
   */
  declare shortTermDeferralMethod?: SubBillDeferralShortTermDeferralMethod | null;
  /**
   * Rec Journal Line Desc Type.
   * @nullable
   */
  declare recJournalLineDescType?: SubBillDeferralRecJournalLineDescType | null;
  /**
   * Automatically Post General Journals.
   * @nullable
   */
  declare automaticallyPostGeneralJournals?: NoYes | null;
  /**
   * Equal Per Period.
   * @nullable
   */
  declare equalPerPeriod?: NoYes | null;

  constructor(_entityApi: SubBillDeferralParametersApi<T>) {
    super(_entityApi);
  }
}

export interface SubBillDeferralParametersType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  postingMethod?: SubBillDeferralPostingMethod | null;
  discountDeferralOption?: SubBillDeferralDiscountDeferralOption | null;
  summarizeRecognitionJournal?: NoYes | null;
  consolidatePriorPeriods?: NoYes | null;
  purchaseDiscountDeferralOption?: SubBillDeferralDiscountDeferralOption | null;
  defaultDeferralStartDate?: SubBillDeferralDefaultDeferralStartDate | null;
  reverseProfitLossOnCredit?: NoYes | null;
  defaultJournalName?: DeserializedType<T, 'Edm.String'> | null;
  showMissingDeferralSetupMessage?: NoYes | null;
  shortTermDeferralMethod?: SubBillDeferralShortTermDeferralMethod | null;
  recJournalLineDescType?: SubBillDeferralRecJournalLineDescType | null;
  automaticallyPostGeneralJournals?: NoYes | null;
  equalPerPeriod?: NoYes | null;
}
