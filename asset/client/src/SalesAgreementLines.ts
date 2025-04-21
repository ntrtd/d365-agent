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
import type { SalesAgreementLinesApi } from './SalesAgreementLinesApi';
import { CommitmentType } from './CommitmentType';
import { NoYes } from './NoYes';
import { Warehouses, WarehousesType } from './Warehouses';
import { SalesAgreements, SalesAgreementsType } from './SalesAgreements';
import {
  ReleasedProductsV2,
  ReleasedProductsV2Type
} from './ReleasedProductsV2';
import { UnitsOfMeasure, UnitsOfMeasureType } from './UnitsOfMeasure';
import { DimensionSets, DimensionSetsType } from './DimensionSets';
import { Projects, ProjectsType } from './Projects';
import { OperationalSites, OperationalSitesType } from './OperationalSites';
import {
  SalesAgreementLineNotes,
  SalesAgreementLineNotesType
} from './SalesAgreementLineNotes';
import {
  SalesAgreementLineFulfillment,
  SalesAgreementLineFulfillmentType
} from './SalesAgreementLineFulfillment';

/**
 * This class represents the entity "SalesAgreementLines" of service "d365_metadata".
 */
export class SalesAgreementLines<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements SalesAgreementLinesType<T>
{
  /**
   * Technical entity name for SalesAgreementLines.
   */
  static override _entityName = 'SalesAgreementLines';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the SalesAgreementLines entity.
   */
  static _keys = ['dataAreaId', 'SalesAgreementId', 'LineNumber'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Sales Agreement Id.
   */
  declare salesAgreementId: DeserializedType<T, 'Edm.String'>;
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
   * Invoice Customer Account Number.
   * @nullable
   */
  declare invoiceCustomerAccountNumber?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Inventory Profile Id.
   * @nullable
   */
  declare inventoryProfileId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Expiration Date.
   */
  declare expirationDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Sales Product Category Name.
   * @nullable
   */
  declare salesProductCategoryName?: DeserializedType<T, 'Edm.String'> | null;
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
   * Price Quantity.
   */
  declare priceQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Delivery Mode Code.
   * @nullable
   */
  declare deliveryModeCode?: DeserializedType<T, 'Edm.String'> | null;
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
   * Is Commitment Maximum Enforced.
   * @nullable
   */
  declare isCommitmentMaximumEnforced?: NoYes | null;
  /**
   * Line Discount Percentage.
   */
  declare lineDiscountPercentage: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Will Rebate Calculation Exclude Line.
   * @nullable
   */
  declare willRebateCalculationExcludeLine?: NoYes | null;
  /**
   * Price.
   */
  declare price: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Commission Sales Representative Group Id.
   * @nullable
   */
  declare commissionSalesRepresentativeGroupId?: DeserializedType<
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
   * Sales Agreement Legal Entity Id.
   * @nullable
   */
  declare salesAgreementLegalEntityId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Committed Catch Weight Quantity.
   */
  declare committedCatchWeightQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Committed Amount.
   */
  declare committedAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Agreement Customer Account Number.
   * @nullable
   */
  declare agreementCustomerAccountNumber?: DeserializedType<
    T,
    'Edm.String'
  > | null;
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
   * Shipping Warehouse Id.
   * @nullable
   */
  declare shippingWarehouseId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Price And Discount Fixed.
   * @nullable
   */
  declare isPriceAndDiscountFixed?: NoYes | null;
  /**
   * Shipping Site Id.
   * @nullable
   */
  declare shippingSiteId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Product Style Id.
   * @nullable
   */
  declare productStyleId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Kitting Bom Id.
   * @nullable
   */
  declare kittingBomId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Kitting Invent Trans Id.
   * @nullable
   */
  declare kittingInventTransId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-one navigation property to the {@link Warehouses} entity.
   */
  declare shippingWarehouse?: Warehouses<T> | null;
  /**
   * One-to-one navigation property to the {@link SalesAgreements} entity.
   */
  declare salesAgreementHeader?: SalesAgreements<T> | null;
  /**
   * One-to-one navigation property to the {@link ReleasedProductsV2} entity.
   */
  declare releasedProduct?: ReleasedProductsV2<T> | null;
  /**
   * One-to-one navigation property to the {@link UnitsOfMeasure} entity.
   */
  declare unit?: UnitsOfMeasure<T> | null;
  /**
   * One-to-one navigation property to the {@link DimensionSets} entity.
   */
  declare defaultLedgerDimension?: DimensionSets<T> | null;
  /**
   * One-to-one navigation property to the {@link Projects} entity.
   */
  declare project?: Projects<T> | null;
  /**
   * One-to-one navigation property to the {@link OperationalSites} entity.
   */
  declare shippingSite?: OperationalSites<T> | null;
  /**
   * One-to-many navigation property to the {@link SalesAgreementLineNotes} entity.
   */
  declare salesAgreementLineNotes: SalesAgreementLineNotes<T>[];
  /**
   * One-to-one navigation property to the {@link SalesAgreementLineFulfillment} entity.
   */
  declare salesAgreementLinesFulfillment?: SalesAgreementLineFulfillment<T> | null;

  constructor(_entityApi: SalesAgreementLinesApi<T>) {
    super(_entityApi);
  }
}

export interface SalesAgreementLinesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  salesAgreementId: DeserializedType<T, 'Edm.String'>;
  lineNumber: DeserializedType<T, 'Edm.Decimal'>;
  productConfigurationId?: DeserializedType<T, 'Edm.String'> | null;
  invoiceCustomerAccountNumber?: DeserializedType<T, 'Edm.String'> | null;
  inventoryProfileId?: DeserializedType<T, 'Edm.String'> | null;
  expirationDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  salesProductCategoryName?: DeserializedType<T, 'Edm.String'> | null;
  productSizeId?: DeserializedType<T, 'Edm.String'> | null;
  itemNumber?: DeserializedType<T, 'Edm.String'> | null;
  productVersionId?: DeserializedType<T, 'Edm.String'> | null;
  minimumReleaseAmount: DeserializedType<T, 'Edm.Decimal'>;
  priceQuantity: DeserializedType<T, 'Edm.Decimal'>;
  deliveryModeCode?: DeserializedType<T, 'Edm.String'> | null;
  committedQuantity: DeserializedType<T, 'Edm.Decimal'>;
  projectCategoryId?: DeserializedType<T, 'Edm.String'> | null;
  effectiveDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  commitmentType?: CommitmentType | null;
  isCommitmentMaximumEnforced?: NoYes | null;
  lineDiscountPercentage: DeserializedType<T, 'Edm.Decimal'>;
  willRebateCalculationExcludeLine?: NoYes | null;
  price: DeserializedType<T, 'Edm.Decimal'>;
  commissionSalesRepresentativeGroupId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  maximumReleaseAmount: DeserializedType<T, 'Edm.Decimal'>;
  unitSymbol?: DeserializedType<T, 'Edm.String'> | null;
  projectActivityNumber?: DeserializedType<T, 'Edm.String'> | null;
  salesAgreementLegalEntityId?: DeserializedType<T, 'Edm.String'> | null;
  committedCatchWeightQuantity: DeserializedType<T, 'Edm.Decimal'>;
  committedAmount: DeserializedType<T, 'Edm.Decimal'>;
  agreementCustomerAccountNumber?: DeserializedType<T, 'Edm.String'> | null;
  defaultLedgerDimensionDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  lineDiscountAmount: DeserializedType<T, 'Edm.Decimal'>;
  productColorId?: DeserializedType<T, 'Edm.String'> | null;
  projectId?: DeserializedType<T, 'Edm.String'> | null;
  shippingWarehouseId?: DeserializedType<T, 'Edm.String'> | null;
  isPriceAndDiscountFixed?: NoYes | null;
  shippingSiteId?: DeserializedType<T, 'Edm.String'> | null;
  productStyleId?: DeserializedType<T, 'Edm.String'> | null;
  kittingBomId?: DeserializedType<T, 'Edm.String'> | null;
  kittingInventTransId?: DeserializedType<T, 'Edm.String'> | null;
  shippingWarehouse?: WarehousesType<T> | null;
  salesAgreementHeader?: SalesAgreementsType<T> | null;
  releasedProduct?: ReleasedProductsV2Type<T> | null;
  unit?: UnitsOfMeasureType<T> | null;
  defaultLedgerDimension?: DimensionSetsType<T> | null;
  project?: ProjectsType<T> | null;
  shippingSite?: OperationalSitesType<T> | null;
  salesAgreementLineNotes: SalesAgreementLineNotesType<T>[];
  salesAgreementLinesFulfillment?: SalesAgreementLineFulfillmentType<T> | null;
}
