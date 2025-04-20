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
import type { LtmDocumentClassificationAdditionalsApi } from './LtmDocumentClassificationAdditionalsApi';
import { LtmAdditionalFieldBehavior } from './LtmAdditionalFieldBehavior';

/**
 * This class represents the entity "LTMDocumentClassificationAdditionals" of service "d365_metadata".
 */
export class LtmDocumentClassificationAdditionals<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements LtmDocumentClassificationAdditionalsType<T>
{
  /**
   * Technical entity name for LtmDocumentClassificationAdditionals.
   */
  static override _entityName = 'LTMDocumentClassificationAdditionals';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the LtmDocumentClassificationAdditionals entity.
   */
  static _keys = ['dataAreaId', 'DocumentClassificationId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Document Classification Id.
   */
  declare documentClassificationId: DeserializedType<T, 'Edm.String'>;
  /**
   * Ad Cumulative Amount Behavior.
   * @nullable
   */
  declare adCumulativeAmountBehavior?: LtmAdditionalFieldBehavior | null;
  /**
   * Ad Holder Account Num Behavior.
   * @nullable
   */
  declare adHolderAccountNumBehavior?: LtmAdditionalFieldBehavior | null;
  /**
   * Ad Fees Behavior.
   * @nullable
   */
  declare adFeesBehavior?: LtmAdditionalFieldBehavior | null;
  /**
   * Ad List 05 Behavior.
   * @nullable
   */
  declare adList05Behavior?: LtmAdditionalFieldBehavior | null;
  /**
   * Ad List 06 Behavior.
   * @nullable
   */
  declare adList06Behavior?: LtmAdditionalFieldBehavior | null;
  /**
   * Ad Check Source Behavior.
   * @nullable
   */
  declare adCheckSourceBehavior?: LtmAdditionalFieldBehavior | null;
  /**
   * Ad Cumulative Base Behavior.
   * @nullable
   */
  declare adCumulativeBaseBehavior?: LtmAdditionalFieldBehavior | null;
  /**
   * Ad List 10 Behavior.
   * @nullable
   */
  declare adList10Behavior?: LtmAdditionalFieldBehavior | null;
  /**
   * Ad Bank Group Behavior.
   * @nullable
   */
  declare adBankGroupBehavior?: LtmAdditionalFieldBehavior | null;
  /**
   * Ad Tax Payer Type Id Behavior.
   * @nullable
   */
  declare adTaxPayerTypeIdBehavior?: LtmAdditionalFieldBehavior | null;
  /**
   * Ad Holder Account Mask.
   * @nullable
   */
  declare adHolderAccountMask?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Ad List 07 Behavior.
   * @nullable
   */
  declare adList07Behavior?: LtmAdditionalFieldBehavior | null;
  /**
   * Ad Country Region Id Behavior.
   * @nullable
   */
  declare adCountryRegionIdBehavior?: LtmAdditionalFieldBehavior | null;
  /**
   * Ad Original Amount Behavior.
   * @nullable
   */
  declare adOriginalAmountBehavior?: LtmAdditionalFieldBehavior | null;
  /**
   * Ad State Id Behavior.
   * @nullable
   */
  declare adStateIdBehavior?: LtmAdditionalFieldBehavior | null;
  /**
   * Ad Beneficiary Behavior.
   * @nullable
   */
  declare adBeneficiaryBehavior?: LtmAdditionalFieldBehavior | null;
  /**
   * Ad State Doc Num Behavior.
   * @nullable
   */
  declare adStateDocNumBehavior?: LtmAdditionalFieldBehavior | null;
  /**
   * Ad List 08 Behavior.
   * @nullable
   */
  declare adList08Behavior?: LtmAdditionalFieldBehavior | null;
  /**
   * Ad Concept 1 Behavior.
   * @nullable
   */
  declare adConcept1Behavior?: LtmAdditionalFieldBehavior | null;
  /**
   * Ad List 01 Behavior.
   * @nullable
   */
  declare adList01Behavior?: LtmAdditionalFieldBehavior | null;
  /**
   * Ad List 02 Behavior.
   * @nullable
   */
  declare adList02Behavior?: LtmAdditionalFieldBehavior | null;
  /**
   * Ad Doc Num Behavior.
   * @nullable
   */
  declare adDocNumBehavior?: LtmAdditionalFieldBehavior | null;
  /**
   * Ad List 09 Behavior.
   * @nullable
   */
  declare adList09Behavior?: LtmAdditionalFieldBehavior | null;
  /**
   * Ad Concept 3 Behavior.
   * @nullable
   */
  declare adConcept3Behavior?: LtmAdditionalFieldBehavior | null;
  /**
   * Ad List 03 Behavior.
   * @nullable
   */
  declare adList03Behavior?: LtmAdditionalFieldBehavior | null;
  /**
   * Ad List 04 Behavior.
   * @nullable
   */
  declare adList04Behavior?: LtmAdditionalFieldBehavior | null;
  /**
   * Ad Tax Rate Behavior.
   * @nullable
   */
  declare adTaxRateBehavior?: LtmAdditionalFieldBehavior | null;
  /**
   * Ad Concept 2 Behavior.
   * @nullable
   */
  declare adConcept2Behavior?: LtmAdditionalFieldBehavior | null;
  /**
   * Ad Bussines Name Behavior.
   * @nullable
   */
  declare adBussinesNameBehavior?: LtmAdditionalFieldBehavior | null;
  /**
   * Ad Base Amount Behavior.
   * @nullable
   */
  declare adBaseAmountBehavior?: LtmAdditionalFieldBehavior | null;

  constructor(_entityApi: LtmDocumentClassificationAdditionalsApi<T>) {
    super(_entityApi);
  }
}

export interface LtmDocumentClassificationAdditionalsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  documentClassificationId: DeserializedType<T, 'Edm.String'>;
  adCumulativeAmountBehavior?: LtmAdditionalFieldBehavior | null;
  adHolderAccountNumBehavior?: LtmAdditionalFieldBehavior | null;
  adFeesBehavior?: LtmAdditionalFieldBehavior | null;
  adList05Behavior?: LtmAdditionalFieldBehavior | null;
  adList06Behavior?: LtmAdditionalFieldBehavior | null;
  adCheckSourceBehavior?: LtmAdditionalFieldBehavior | null;
  adCumulativeBaseBehavior?: LtmAdditionalFieldBehavior | null;
  adList10Behavior?: LtmAdditionalFieldBehavior | null;
  adBankGroupBehavior?: LtmAdditionalFieldBehavior | null;
  adTaxPayerTypeIdBehavior?: LtmAdditionalFieldBehavior | null;
  adHolderAccountMask?: DeserializedType<T, 'Edm.String'> | null;
  adList07Behavior?: LtmAdditionalFieldBehavior | null;
  adCountryRegionIdBehavior?: LtmAdditionalFieldBehavior | null;
  adOriginalAmountBehavior?: LtmAdditionalFieldBehavior | null;
  adStateIdBehavior?: LtmAdditionalFieldBehavior | null;
  adBeneficiaryBehavior?: LtmAdditionalFieldBehavior | null;
  adStateDocNumBehavior?: LtmAdditionalFieldBehavior | null;
  adList08Behavior?: LtmAdditionalFieldBehavior | null;
  adConcept1Behavior?: LtmAdditionalFieldBehavior | null;
  adList01Behavior?: LtmAdditionalFieldBehavior | null;
  adList02Behavior?: LtmAdditionalFieldBehavior | null;
  adDocNumBehavior?: LtmAdditionalFieldBehavior | null;
  adList09Behavior?: LtmAdditionalFieldBehavior | null;
  adConcept3Behavior?: LtmAdditionalFieldBehavior | null;
  adList03Behavior?: LtmAdditionalFieldBehavior | null;
  adList04Behavior?: LtmAdditionalFieldBehavior | null;
  adTaxRateBehavior?: LtmAdditionalFieldBehavior | null;
  adConcept2Behavior?: LtmAdditionalFieldBehavior | null;
  adBussinesNameBehavior?: LtmAdditionalFieldBehavior | null;
  adBaseAmountBehavior?: LtmAdditionalFieldBehavior | null;
}
