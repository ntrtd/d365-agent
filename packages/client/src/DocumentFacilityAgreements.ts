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
import type { DocumentFacilityAgreementsApi } from './DocumentFacilityAgreementsApi';
import { BankLgAmountCalcType } from './BankLgAmountCalcType';

/**
 * This class represents the entity "DocumentFacilityAgreements" of service "d365_metadata".
 */
export class DocumentFacilityAgreements<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements DocumentFacilityAgreementsType<T>
{
  /**
   * Technical entity name for DocumentFacilityAgreements.
   */
  static override _entityName = 'DocumentFacilityAgreements';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the DocumentFacilityAgreements entity.
   */
  static _keys = ['dataAreaId', 'AgreementNumber', 'FacilityType'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Agreement Number.
   */
  declare agreementNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Facility Type.
   */
  declare facilityType: DeserializedType<T, 'Edm.String'>;
  /**
   * End Date.
   */
  declare endDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Lg Extension Commission Percentage.
   */
  declare lgExtensionCommissionPercentage: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Lg Increase Value Commission Calc Method.
   * @nullable
   */
  declare lgIncreaseValueCommissionCalcMethod?: BankLgAmountCalcType | null;
  /**
   * Bank Account.
   * @nullable
   */
  declare bankAccount?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Lg Issuance Commission Amount.
   */
  declare lgIssuanceCommissionAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Start Date.
   */
  declare startDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Lg Issuance Commission Calc Method.
   * @nullable
   */
  declare lgIssuanceCommissionCalcMethod?: BankLgAmountCalcType | null;
  /**
   * Lg Decrease Value Commission Amount.
   */
  declare lgDecreaseValueCommissionAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Lg Extension Commission Amount.
   */
  declare lgExtensionCommissionAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Lg Cash Margin Calc Method.
   * @nullable
   */
  declare lgCashMarginCalcMethod?: BankLgAmountCalcType | null;
  /**
   * Lg Decrease Value Commission Calc Method.
   * @nullable
   */
  declare lgDecreaseValueCommissionCalcMethod?: BankLgAmountCalcType | null;
  /**
   * Lg Decrease Value Commission Percentage.
   */
  declare lgDecreaseValueCommissionPercentage: DeserializedType<
    T,
    'Edm.Decimal'
  >;
  /**
   * Amount Used.
   */
  declare amountUsed: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Amount Limit.
   */
  declare amountLimit: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Lg Increase Value Commission Percentage.
   */
  declare lgIncreaseValueCommissionPercentage: DeserializedType<
    T,
    'Edm.Decimal'
  >;
  /**
   * Lg Cash Margin Percentage.
   */
  declare lgCashMarginPercentage: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Lg Cash Margin Amount.
   */
  declare lgCashMarginAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Lg Extension Commission Calc Method.
   * @nullable
   */
  declare lgExtensionCommissionCalcMethod?: BankLgAmountCalcType | null;
  /**
   * Lg Increase Value Commission Amount.
   */
  declare lgIncreaseValueCommissionAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Lg Issuance Commission Percentage.
   */
  declare lgIssuanceCommissionPercentage: DeserializedType<T, 'Edm.Decimal'>;

  constructor(_entityApi: DocumentFacilityAgreementsApi<T>) {
    super(_entityApi);
  }
}

export interface DocumentFacilityAgreementsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  agreementNumber: DeserializedType<T, 'Edm.String'>;
  facilityType: DeserializedType<T, 'Edm.String'>;
  endDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  lgExtensionCommissionPercentage: DeserializedType<T, 'Edm.Decimal'>;
  lgIncreaseValueCommissionCalcMethod?: BankLgAmountCalcType | null;
  bankAccount?: DeserializedType<T, 'Edm.String'> | null;
  lgIssuanceCommissionAmount: DeserializedType<T, 'Edm.Decimal'>;
  startDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  lgIssuanceCommissionCalcMethod?: BankLgAmountCalcType | null;
  lgDecreaseValueCommissionAmount: DeserializedType<T, 'Edm.Decimal'>;
  lgExtensionCommissionAmount: DeserializedType<T, 'Edm.Decimal'>;
  lgCashMarginCalcMethod?: BankLgAmountCalcType | null;
  lgDecreaseValueCommissionCalcMethod?: BankLgAmountCalcType | null;
  lgDecreaseValueCommissionPercentage: DeserializedType<T, 'Edm.Decimal'>;
  amountUsed: DeserializedType<T, 'Edm.Decimal'>;
  amountLimit: DeserializedType<T, 'Edm.Decimal'>;
  lgIncreaseValueCommissionPercentage: DeserializedType<T, 'Edm.Decimal'>;
  lgCashMarginPercentage: DeserializedType<T, 'Edm.Decimal'>;
  lgCashMarginAmount: DeserializedType<T, 'Edm.Decimal'>;
  lgExtensionCommissionCalcMethod?: BankLgAmountCalcType | null;
  lgIncreaseValueCommissionAmount: DeserializedType<T, 'Edm.Decimal'>;
  lgIssuanceCommissionPercentage: DeserializedType<T, 'Edm.Decimal'>;
}
