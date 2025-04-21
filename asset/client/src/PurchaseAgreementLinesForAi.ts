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
import type { PurchaseAgreementLinesForAiApi } from './PurchaseAgreementLinesForAiApi';
import { CommitmentType } from './CommitmentType';
import { NoYes } from './NoYes';
import {
  ReleasedProductsForAi,
  ReleasedProductsForAiType
} from './ReleasedProductsForAi';
import {
  PurchaseAgreementHeadersForAi,
  PurchaseAgreementHeadersForAiType
} from './PurchaseAgreementHeadersForAi';

/**
 * This class represents the entity "PurchaseAgreementLinesForAI" of service "d365_metadata".
 */
export class PurchaseAgreementLinesForAi<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements PurchaseAgreementLinesForAiType<T>
{
  /**
   * Technical entity name for PurchaseAgreementLinesForAi.
   */
  static override _entityName = 'PurchaseAgreementLinesForAI';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the PurchaseAgreementLinesForAi entity.
   */
  static _keys = ['dataAreaId', 'LineNumber', 'PurchaseAgreementId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Line Number.
   */
  declare lineNumber: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Purchase Agreement Id.
   */
  declare purchaseAgreementId: DeserializedType<T, 'Edm.String'>;
  /**
   * Item Number.
   * @nullable
   */
  declare itemNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Minimum Release Amount.
   */
  declare minimumReleaseAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Product Version Id.
   * @nullable
   */
  declare productVersionId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Commitment Type.
   * @nullable
   */
  declare commitmentType?: CommitmentType | null;
  /**
   * Line Discount Percentage.
   */
  declare lineDiscountPercentage: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Product Style Id.
   * @nullable
   */
  declare productStyleId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Price And Discount Fixed.
   * @nullable
   */
  declare isPriceAndDiscountFixed?: NoYes | null;
  /**
   * Product Configuration Id.
   * @nullable
   */
  declare productConfigurationId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Maximum Release Amount.
   */
  declare maximumReleaseAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Committed Amount.
   */
  declare committedAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Procurement Product Category Name.
   * @nullable
   */
  declare procurementProductCategoryName?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Is Commitment Maximum Enforced.
   * @nullable
   */
  declare isCommitmentMaximumEnforced?: NoYes | null;
  /**
   * Project Id.
   * @nullable
   */
  declare projectId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Unit Symbol.
   * @nullable
   */
  declare unitSymbol?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Agreement Vendor Data Area Id.
   * @nullable
   */
  declare agreementVendorDataAreaId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Receiving Site Id.
   * @nullable
   */
  declare receivingSiteId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Price.
   */
  declare price: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Committed Quantity.
   */
  declare committedQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Receiving Warehouse Id.
   * @nullable
   */
  declare receivingWarehouseId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Agreement Vendor Account Number.
   * @nullable
   */
  declare agreementVendorAccountNumber?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Product Color Id.
   * @nullable
   */
  declare productColorId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Expiration Date.
   */
  declare expirationDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Price Quantity.
   */
  declare priceQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Effective Date.
   */
  declare effectiveDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Product Size Id.
   * @nullable
   */
  declare productSizeId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-one navigation property to the {@link ReleasedProductsForAi} entity.
   */
  declare releasedProduct?: ReleasedProductsForAi<T> | null;
  /**
   * One-to-one navigation property to the {@link PurchaseAgreementHeadersForAi} entity.
   */
  declare purchaseAgreementHeader?: PurchaseAgreementHeadersForAi<T> | null;

  constructor(_entityApi: PurchaseAgreementLinesForAiApi<T>) {
    super(_entityApi);
  }
}

export interface PurchaseAgreementLinesForAiType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  lineNumber: DeserializedType<T, 'Edm.Decimal'>;
  purchaseAgreementId: DeserializedType<T, 'Edm.String'>;
  itemNumber?: DeserializedType<T, 'Edm.String'> | null;
  minimumReleaseAmount: DeserializedType<T, 'Edm.Decimal'>;
  productVersionId?: DeserializedType<T, 'Edm.String'> | null;
  commitmentType?: CommitmentType | null;
  lineDiscountPercentage: DeserializedType<T, 'Edm.Decimal'>;
  productStyleId?: DeserializedType<T, 'Edm.String'> | null;
  isPriceAndDiscountFixed?: NoYes | null;
  productConfigurationId?: DeserializedType<T, 'Edm.String'> | null;
  maximumReleaseAmount: DeserializedType<T, 'Edm.Decimal'>;
  committedAmount: DeserializedType<T, 'Edm.Decimal'>;
  procurementProductCategoryName?: DeserializedType<T, 'Edm.String'> | null;
  isCommitmentMaximumEnforced?: NoYes | null;
  projectId?: DeserializedType<T, 'Edm.String'> | null;
  unitSymbol?: DeserializedType<T, 'Edm.String'> | null;
  agreementVendorDataAreaId?: DeserializedType<T, 'Edm.String'> | null;
  receivingSiteId?: DeserializedType<T, 'Edm.String'> | null;
  price: DeserializedType<T, 'Edm.Decimal'>;
  committedQuantity: DeserializedType<T, 'Edm.Decimal'>;
  receivingWarehouseId?: DeserializedType<T, 'Edm.String'> | null;
  agreementVendorAccountNumber?: DeserializedType<T, 'Edm.String'> | null;
  productColorId?: DeserializedType<T, 'Edm.String'> | null;
  expirationDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  priceQuantity: DeserializedType<T, 'Edm.Decimal'>;
  effectiveDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  productSizeId?: DeserializedType<T, 'Edm.String'> | null;
  releasedProduct?: ReleasedProductsForAiType<T> | null;
  purchaseAgreementHeader?: PurchaseAgreementHeadersForAiType<T> | null;
}
