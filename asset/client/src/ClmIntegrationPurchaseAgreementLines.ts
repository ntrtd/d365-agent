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
import type { ClmIntegrationPurchaseAgreementLinesApi } from './ClmIntegrationPurchaseAgreementLinesApi';
import { NoYes } from './NoYes';
import { CommitmentType } from './CommitmentType';
import { Warehouses, WarehousesType } from './Warehouses';
import { OperationalSites, OperationalSitesType } from './OperationalSites';
import {
  ClmIntegrationPurchaseAgreements,
  ClmIntegrationPurchaseAgreementsType
} from './ClmIntegrationPurchaseAgreements';
import { DimensionSets, DimensionSetsType } from './DimensionSets';
import { Projects, ProjectsType } from './Projects';
import {
  ReleasedProductsV2,
  ReleasedProductsV2Type
} from './ReleasedProductsV2';
import { UnitsOfMeasure, UnitsOfMeasureType } from './UnitsOfMeasure';

/**
 * This class represents the entity "CLMIntegrationPurchaseAgreementLines" of service "d365_metadata".
 */
export class ClmIntegrationPurchaseAgreementLines<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements ClmIntegrationPurchaseAgreementLinesType<T>
{
  /**
   * Technical entity name for ClmIntegrationPurchaseAgreementLines.
   */
  static override _entityName = 'CLMIntegrationPurchaseAgreementLines';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ClmIntegrationPurchaseAgreementLines entity.
   */
  static _keys = ['dataAreaId', 'PurchaseAgreementId', 'LineNumber'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Purchase Agreement Id.
   */
  declare purchaseAgreementId: DeserializedType<T, 'Edm.String'>;
  /**
   * Line Number.
   */
  declare lineNumber: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Purchase Agreement Legal Entity Id.
   * @nullable
   */
  declare purchaseAgreementLegalEntityId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Product Variant Number.
   * @nullable
   */
  declare productVariantNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * External Contract Id.
   * @nullable
   */
  declare externalContractId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Product Style Id.
   * @nullable
   */
  declare productStyleId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Committed Amount.
   */
  declare committedAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Agreement Vendor Account Number.
   * @nullable
   */
  declare agreementVendorAccountNumber?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Invoice Vendor Account Number.
   * @nullable
   */
  declare invoiceVendorAccountNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Committed Quantity.
   */
  declare committedQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Receiving Site Id.
   * @nullable
   */
  declare receivingSiteId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Committed Catch Weight Quantity.
   */
  declare committedCatchWeightQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Price Quantity.
   */
  declare priceQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Line Discount Amount.
   */
  declare lineDiscountAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Item Number.
   * @nullable
   */
  declare itemNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Ship Calendar Id.
   * @nullable
   */
  declare shipCalendarId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Maximum Release Amount.
   */
  declare maximumReleaseAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Inventory Profile Id.
   * @nullable
   */
  declare inventoryProfileId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Price And Discount Fixed.
   * @nullable
   */
  declare isPriceAndDiscountFixed?: NoYes | null;
  /**
   * Product Size Id.
   * @nullable
   */
  declare productSizeId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Line Discount Percentage.
   */
  declare lineDiscountPercentage: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Unit Symbol.
   * @nullable
   */
  declare unitSymbol?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Commitment Type.
   * @nullable
   */
  declare commitmentType?: CommitmentType | null;
  /**
   * Product Configuration Id.
   * @nullable
   */
  declare productConfigurationId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Project Activity Number.
   * @nullable
   */
  declare projectActivityNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Product Version Id.
   * @nullable
   */
  declare productVersionId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Project Id.
   * @nullable
   */
  declare projectId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Effective Date.
   */
  declare effectiveDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Is Commitment Maximum Enforced.
   * @nullable
   */
  declare isCommitmentMaximumEnforced?: NoYes | null;
  /**
   * Price.
   */
  declare price: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * External Contract Line Id.
   * @nullable
   */
  declare externalContractLineId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Product Color Id.
   * @nullable
   */
  declare productColorId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Project Category Id.
   * @nullable
   */
  declare projectCategoryId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Procurement Product Category Name.
   * @nullable
   */
  declare procurementProductCategoryName?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Minimum Release Amount.
   */
  declare minimumReleaseAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Default Ledger Dimension Display Value.
   * @nullable
   */
  declare defaultLedgerDimensionDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Expiration Date.
   */
  declare expirationDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Receiving Warehouse Id.
   * @nullable
   */
  declare receivingWarehouseId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-one navigation property to the {@link Warehouses} entity.
   */
  declare receivingWarehouse?: Warehouses<T> | null;
  /**
   * One-to-one navigation property to the {@link OperationalSites} entity.
   */
  declare receivingSite?: OperationalSites<T> | null;
  /**
   * One-to-one navigation property to the {@link ClmIntegrationPurchaseAgreements} entity.
   */
  declare clmIntegrationPurchaseAgreement?: ClmIntegrationPurchaseAgreements<T> | null;
  /**
   * One-to-one navigation property to the {@link DimensionSets} entity.
   */
  declare defaultLedgerDimension?: DimensionSets<T> | null;
  /**
   * One-to-one navigation property to the {@link Projects} entity.
   */
  declare project?: Projects<T> | null;
  /**
   * One-to-one navigation property to the {@link ReleasedProductsV2} entity.
   */
  declare releasedProduct?: ReleasedProductsV2<T> | null;
  /**
   * One-to-one navigation property to the {@link UnitsOfMeasure} entity.
   */
  declare unit?: UnitsOfMeasure<T> | null;

  constructor(_entityApi: ClmIntegrationPurchaseAgreementLinesApi<T>) {
    super(_entityApi);
  }
}

export interface ClmIntegrationPurchaseAgreementLinesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  purchaseAgreementId: DeserializedType<T, 'Edm.String'>;
  lineNumber: DeserializedType<T, 'Edm.Decimal'>;
  purchaseAgreementLegalEntityId?: DeserializedType<T, 'Edm.String'> | null;
  productVariantNumber?: DeserializedType<T, 'Edm.String'> | null;
  externalContractId?: DeserializedType<T, 'Edm.String'> | null;
  productStyleId?: DeserializedType<T, 'Edm.String'> | null;
  committedAmount: DeserializedType<T, 'Edm.Decimal'>;
  agreementVendorAccountNumber?: DeserializedType<T, 'Edm.String'> | null;
  invoiceVendorAccountNumber?: DeserializedType<T, 'Edm.String'> | null;
  committedQuantity: DeserializedType<T, 'Edm.Decimal'>;
  receivingSiteId?: DeserializedType<T, 'Edm.String'> | null;
  committedCatchWeightQuantity: DeserializedType<T, 'Edm.Decimal'>;
  priceQuantity: DeserializedType<T, 'Edm.Decimal'>;
  lineDiscountAmount: DeserializedType<T, 'Edm.Decimal'>;
  itemNumber?: DeserializedType<T, 'Edm.String'> | null;
  shipCalendarId?: DeserializedType<T, 'Edm.String'> | null;
  maximumReleaseAmount: DeserializedType<T, 'Edm.Decimal'>;
  inventoryProfileId?: DeserializedType<T, 'Edm.String'> | null;
  isPriceAndDiscountFixed?: NoYes | null;
  productSizeId?: DeserializedType<T, 'Edm.String'> | null;
  lineDiscountPercentage: DeserializedType<T, 'Edm.Decimal'>;
  unitSymbol?: DeserializedType<T, 'Edm.String'> | null;
  commitmentType?: CommitmentType | null;
  productConfigurationId?: DeserializedType<T, 'Edm.String'> | null;
  projectActivityNumber?: DeserializedType<T, 'Edm.String'> | null;
  productVersionId?: DeserializedType<T, 'Edm.String'> | null;
  projectId?: DeserializedType<T, 'Edm.String'> | null;
  effectiveDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  isCommitmentMaximumEnforced?: NoYes | null;
  price: DeserializedType<T, 'Edm.Decimal'>;
  externalContractLineId?: DeserializedType<T, 'Edm.String'> | null;
  productColorId?: DeserializedType<T, 'Edm.String'> | null;
  projectCategoryId?: DeserializedType<T, 'Edm.String'> | null;
  procurementProductCategoryName?: DeserializedType<T, 'Edm.String'> | null;
  minimumReleaseAmount: DeserializedType<T, 'Edm.Decimal'>;
  defaultLedgerDimensionDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  expirationDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  receivingWarehouseId?: DeserializedType<T, 'Edm.String'> | null;
  receivingWarehouse?: WarehousesType<T> | null;
  receivingSite?: OperationalSitesType<T> | null;
  clmIntegrationPurchaseAgreement?: ClmIntegrationPurchaseAgreementsType<T> | null;
  defaultLedgerDimension?: DimensionSetsType<T> | null;
  project?: ProjectsType<T> | null;
  releasedProduct?: ReleasedProductsV2Type<T> | null;
  unit?: UnitsOfMeasureType<T> | null;
}
