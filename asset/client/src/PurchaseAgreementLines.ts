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
import type { PurchaseAgreementLinesApi } from './PurchaseAgreementLinesApi';
import { CommitmentType } from './CommitmentType';
import { NoYes } from './NoYes';
import { Warehouses, WarehousesType } from './Warehouses';
import { OperationalSites, OperationalSitesType } from './OperationalSites';
import {
  ReleasedProductsV2,
  ReleasedProductsV2Type
} from './ReleasedProductsV2';
import { DimensionSets, DimensionSetsType } from './DimensionSets';
import { Projects, ProjectsType } from './Projects';
import { UnitsOfMeasure, UnitsOfMeasureType } from './UnitsOfMeasure';
import {
  PurchaseAgreementLineNotes,
  PurchaseAgreementLineNotesType
} from './PurchaseAgreementLineNotes';
import {
  PurchaseAgreementLineFulfillment,
  PurchaseAgreementLineFulfillmentType
} from './PurchaseAgreementLineFulfillment';

/**
 * This class represents the entity "PurchaseAgreementLines" of service "d365_metadata".
 */
export class PurchaseAgreementLines<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements PurchaseAgreementLinesType<T>
{
  /**
   * Technical entity name for PurchaseAgreementLines.
   */
  static override _entityName = 'PurchaseAgreementLines';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the PurchaseAgreementLines entity.
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
   * Product Configuration Id.
   * @nullable
   */
  declare productConfigurationId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Inventory Profile Id.
   * @nullable
   */
  declare inventoryProfileId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Purchase Agreement Legal Entity Id.
   * @nullable
   */
  declare purchaseAgreementLegalEntityId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Expiration Date.
   */
  declare expirationDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Product Size Id.
   * @nullable
   */
  declare productSizeId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Item Number.
   * @nullable
   */
  declare itemNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Product Version Id.
   * @nullable
   */
  declare productVersionId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Minimum Release Amount.
   */
  declare minimumReleaseAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Receiving Site Id.
   * @nullable
   */
  declare receivingSiteId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Price Quantity.
   */
  declare priceQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Committed Quantity.
   */
  declare committedQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Project Category Id.
   * @nullable
   */
  declare projectCategoryId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Effective Date.
   */
  declare effectiveDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
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
   * Is Commitment Maximum Enforced.
   * @nullable
   */
  declare isCommitmentMaximumEnforced?: NoYes | null;
  /**
   * Price.
   */
  declare price: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Receiving Warehouse Id.
   * @nullable
   */
  declare receivingWarehouseId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Procurement Product Category Name.
   * @nullable
   */
  declare procurementProductCategoryName?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Maximum Release Amount.
   */
  declare maximumReleaseAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Unit Symbol.
   * @nullable
   */
  declare unitSymbol?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Project Activity Number.
   * @nullable
   */
  declare projectActivityNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Committed Catch Weight Quantity.
   */
  declare committedCatchWeightQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Committed Amount.
   */
  declare committedAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Default Ledger Dimension Display Value.
   * @nullable
   */
  declare defaultLedgerDimensionDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Line Discount Amount.
   */
  declare lineDiscountAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Product Color Id.
   * @nullable
   */
  declare productColorId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Project Id.
   * @nullable
   */
  declare projectId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Price And Discount Fixed.
   * @nullable
   */
  declare isPriceAndDiscountFixed?: NoYes | null;
  /**
   * Product Style Id.
   * @nullable
   */
  declare productStyleId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-one navigation property to the {@link Warehouses} entity.
   */
  declare warehouse?: Warehouses<T> | null;
  /**
   * One-to-one navigation property to the {@link OperationalSites} entity.
   */
  declare operationalSite?: OperationalSites<T> | null;
  /**
   * One-to-one navigation property to the {@link ReleasedProductsV2} entity.
   */
  declare releasedProductV2?: ReleasedProductsV2<T> | null;
  /**
   * One-to-one navigation property to the {@link DimensionSets} entity.
   */
  declare dimensionSet?: DimensionSets<T> | null;
  /**
   * One-to-one navigation property to the {@link Projects} entity.
   */
  declare project?: Projects<T> | null;
  /**
   * One-to-one navigation property to the {@link UnitsOfMeasure} entity.
   */
  declare unitOfMeasure?: UnitsOfMeasure<T> | null;
  /**
   * One-to-many navigation property to the {@link PurchaseAgreementLineNotes} entity.
   */
  declare purchaseAgreementLineNote: PurchaseAgreementLineNotes<T>[];
  /**
   * One-to-one navigation property to the {@link PurchaseAgreementLineFulfillment} entity.
   */
  declare purchaseAgreementLinesFulfillment?: PurchaseAgreementLineFulfillment<T> | null;

  constructor(_entityApi: PurchaseAgreementLinesApi<T>) {
    super(_entityApi);
  }
}

export interface PurchaseAgreementLinesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  purchaseAgreementId: DeserializedType<T, 'Edm.String'>;
  lineNumber: DeserializedType<T, 'Edm.Decimal'>;
  productConfigurationId?: DeserializedType<T, 'Edm.String'> | null;
  inventoryProfileId?: DeserializedType<T, 'Edm.String'> | null;
  purchaseAgreementLegalEntityId?: DeserializedType<T, 'Edm.String'> | null;
  expirationDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  productSizeId?: DeserializedType<T, 'Edm.String'> | null;
  itemNumber?: DeserializedType<T, 'Edm.String'> | null;
  productVersionId?: DeserializedType<T, 'Edm.String'> | null;
  minimumReleaseAmount: DeserializedType<T, 'Edm.Decimal'>;
  receivingSiteId?: DeserializedType<T, 'Edm.String'> | null;
  priceQuantity: DeserializedType<T, 'Edm.Decimal'>;
  committedQuantity: DeserializedType<T, 'Edm.Decimal'>;
  projectCategoryId?: DeserializedType<T, 'Edm.String'> | null;
  effectiveDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  commitmentType?: CommitmentType | null;
  lineDiscountPercentage: DeserializedType<T, 'Edm.Decimal'>;
  isCommitmentMaximumEnforced?: NoYes | null;
  price: DeserializedType<T, 'Edm.Decimal'>;
  receivingWarehouseId?: DeserializedType<T, 'Edm.String'> | null;
  procurementProductCategoryName?: DeserializedType<T, 'Edm.String'> | null;
  maximumReleaseAmount: DeserializedType<T, 'Edm.Decimal'>;
  unitSymbol?: DeserializedType<T, 'Edm.String'> | null;
  projectActivityNumber?: DeserializedType<T, 'Edm.String'> | null;
  committedCatchWeightQuantity: DeserializedType<T, 'Edm.Decimal'>;
  committedAmount: DeserializedType<T, 'Edm.Decimal'>;
  defaultLedgerDimensionDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  lineDiscountAmount: DeserializedType<T, 'Edm.Decimal'>;
  productColorId?: DeserializedType<T, 'Edm.String'> | null;
  projectId?: DeserializedType<T, 'Edm.String'> | null;
  isPriceAndDiscountFixed?: NoYes | null;
  productStyleId?: DeserializedType<T, 'Edm.String'> | null;
  warehouse?: WarehousesType<T> | null;
  operationalSite?: OperationalSitesType<T> | null;
  releasedProductV2?: ReleasedProductsV2Type<T> | null;
  dimensionSet?: DimensionSetsType<T> | null;
  project?: ProjectsType<T> | null;
  unitOfMeasure?: UnitsOfMeasureType<T> | null;
  purchaseAgreementLineNote: PurchaseAgreementLineNotesType<T>[];
  purchaseAgreementLinesFulfillment?: PurchaseAgreementLineFulfillmentType<T> | null;
}
