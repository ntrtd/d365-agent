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
import type { PurchaseAgreementHeadersForAiApi } from './PurchaseAgreementHeadersForAiApi';
import { AgreementState } from './AgreementState';
import { CommitmentType } from './CommitmentType';
import { VendorsForAi, VendorsForAiType } from './VendorsForAi';
import {
  PurchaseAgreementLinesForAi,
  PurchaseAgreementLinesForAiType
} from './PurchaseAgreementLinesForAi';

/**
 * This class represents the entity "PurchaseAgreementHeadersForAI" of service "d365_metadata".
 */
export class PurchaseAgreementHeadersForAi<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements PurchaseAgreementHeadersForAiType<T>
{
  /**
   * Technical entity name for PurchaseAgreementHeadersForAi.
   */
  static override _entityName = 'PurchaseAgreementHeadersForAI';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the PurchaseAgreementHeadersForAi entity.
   */
  static _keys = ['dataAreaId', 'PurchaseAgreementId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Purchase Agreement Id.
   */
  declare purchaseAgreementId: DeserializedType<T, 'Edm.String'>;
  /**
   * Vendor Payment Method Specification Name.
   * @nullable
   */
  declare vendorPaymentMethodSpecificationName?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Document Title.
   * @nullable
   */
  declare documentTitle?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Agreement Vendor Data Area Id.
   * @nullable
   */
  declare agreementVendorDataAreaId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Currency Code.
   * @nullable
   */
  declare currencyCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Vendor Payment Method Name.
   * @nullable
   */
  declare vendorPaymentMethodName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Language Id.
   * @nullable
   */
  declare languageId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Agreement Status.
   * @nullable
   */
  declare agreementStatus?: AgreementState | null;
  /**
   * Agreement Vendor Account Number.
   * @nullable
   */
  declare agreementVendorAccountNumber?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Default Effective Date.
   */
  declare defaultEffectiveDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Default Commitment Type.
   * @nullable
   */
  declare defaultCommitmentType?: CommitmentType | null;
  /**
   * Agreement Created Date Time.
   */
  declare agreementCreatedDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Default Expiration Date.
   */
  declare defaultExpirationDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * One-to-one navigation property to the {@link VendorsForAi} entity.
   */
  declare agreementVendor?: VendorsForAi<T> | null;
  /**
   * One-to-many navigation property to the {@link PurchaseAgreementLinesForAi} entity.
   */
  declare purchaseAgreementLinesAi: PurchaseAgreementLinesForAi<T>[];

  constructor(_entityApi: PurchaseAgreementHeadersForAiApi<T>) {
    super(_entityApi);
  }
}

export interface PurchaseAgreementHeadersForAiType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  purchaseAgreementId: DeserializedType<T, 'Edm.String'>;
  vendorPaymentMethodSpecificationName?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  documentTitle?: DeserializedType<T, 'Edm.String'> | null;
  agreementVendorDataAreaId?: DeserializedType<T, 'Edm.String'> | null;
  currencyCode?: DeserializedType<T, 'Edm.String'> | null;
  vendorPaymentMethodName?: DeserializedType<T, 'Edm.String'> | null;
  languageId?: DeserializedType<T, 'Edm.String'> | null;
  agreementStatus?: AgreementState | null;
  agreementVendorAccountNumber?: DeserializedType<T, 'Edm.String'> | null;
  defaultEffectiveDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  defaultCommitmentType?: CommitmentType | null;
  agreementCreatedDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  defaultExpirationDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  agreementVendor?: VendorsForAiType<T> | null;
  purchaseAgreementLinesAi: PurchaseAgreementLinesForAiType<T>[];
}
