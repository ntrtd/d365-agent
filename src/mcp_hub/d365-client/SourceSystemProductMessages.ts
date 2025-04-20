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
import type { SourceSystemProductMessagesApi } from './SourceSystemProductMessagesApi';
import { EcoResProductSubtype } from './EcoResProductSubtype';
import { NoYes } from './NoYes';
import { WhsSourceSystemProductMessageProcessingStatus } from './WhsSourceSystemProductMessageProcessingStatus';

/**
 * This class represents the entity "SourceSystemProductMessages" of service "d365_metadata".
 */
export class SourceSystemProductMessages<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements SourceSystemProductMessagesType<T>
{
  /**
   * Technical entity name for SourceSystemProductMessages.
   */
  static override _entityName = 'SourceSystemProductMessages';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the SourceSystemProductMessages entity.
   */
  static _keys = ['dataAreaId', 'MessageId', 'SourceSystemId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Message Id.
   */
  declare messageId: DeserializedType<T, 'Edm.String'>;
  /**
   * Source System Id.
   */
  declare sourceSystemId: DeserializedType<T, 'Edm.String'>;
  /**
   * Fields With Value.
   * @nullable
   */
  declare fieldsWithValue?: DeserializedType<T, 'Edm.Binary'> | null;
  /**
   * Product Dimension Group Name.
   * @nullable
   */
  declare productDimensionGroupName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Origin State Id.
   * @nullable
   */
  declare originStateId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Unit Cost Date.
   */
  declare unitCostDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Product Subtype.
   * @nullable
   */
  declare productSubtype?: EcoResProductSubtype | null;
  /**
   * Inventory Counting Reason Code Policy Name.
   * @nullable
   */
  declare inventoryCountingReasonCodePolicyName?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Update Product Variant Lifecycle State.
   * @nullable
   */
  declare updateProductVariantLifecycleState?: NoYes | null;
  /**
   * Product Volume.
   */
  declare productVolume: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Tare Product Weight.
   */
  declare tareProductWeight: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Search Name.
   * @nullable
   */
  declare searchName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Physical Dimension Group Id.
   * @nullable
   */
  declare physicalDimensionGroupId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Source System Product Number.
   * @nullable
   */
  declare sourceSystemProductNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Product Search Name.
   * @nullable
   */
  declare productSearchName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Inventory Reservation Hierarchy Name.
   * @nullable
   */
  declare inventoryReservationHierarchyName?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Shelf Advice Period Days.
   */
  declare shelfAdvicePeriodDays: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Storage Dimension Group Name.
   * @nullable
   */
  declare storageDimensionGroupName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * First Product Filter Group Id.
   * @nullable
   */
  declare firstProductFilterGroupId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * First Product Filter Code.
   * @nullable
   */
  declare firstProductFilterCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sixth Product Filter Code.
   * @nullable
   */
  declare sixthProductFilterCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Second Product Filter Group Id.
   * @nullable
   */
  declare secondProductFilterGroupId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Unit Cost Quantity.
   */
  declare unitCostQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Batch Number Group Code.
   * @nullable
   */
  declare batchNumberGroupCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Item Model Group Id.
   * @nullable
   */
  declare itemModelGroupId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Product Group Id.
   * @nullable
   */
  declare productGroupId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Gross Product Height.
   */
  declare grossProductHeight: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Tenth Product Filter Code.
   * @nullable
   */
  declare tenthProductFilterCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Shelf Life Period Days.
   */
  declare shelfLifePeriodDays: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Unit Conversion Sequence Group Id.
   * @nullable
   */
  declare unitConversionSequenceGroupId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Gross Product Depth.
   */
  declare grossProductDepth: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Product Lifecycle State Id.
   * @nullable
   */
  declare productLifecycleStateId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Processing Status.
   * @nullable
   */
  declare processingStatus?: WhsSourceSystemProductMessageProcessingStatus | null;
  /**
   * Tracking Dimension Group Name.
   * @nullable
   */
  declare trackingDimensionGroupName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Product Variant Unit Conversion Enabled.
   * @nullable
   */
  declare isProductVariantUnitConversionEnabled?: NoYes | null;
  /**
   * Template Name.
   * @nullable
   */
  declare templateName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Third Product Filter Code.
   * @nullable
   */
  declare thirdProductFilterCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Hazardous Material.
   * @nullable
   */
  declare isHazardousMaterial?: NoYes | null;
  /**
   * Origin Country Region Id.
   * @nullable
   */
  declare originCountryRegionId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Source System Item Number.
   * @nullable
   */
  declare sourceSystemItemNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Best Before Period Days.
   */
  declare bestBeforePeriodDays: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Fourth Product Filter Code.
   * @nullable
   */
  declare fourthProductFilterCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Second Product Filter Code.
   * @nullable
   */
  declare secondProductFilterCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Seventh Product Filter Code.
   * @nullable
   */
  declare seventhProductFilterCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Pack Size Category Id.
   * @nullable
   */
  declare packSizeCategoryId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Package Class Id.
   * @nullable
   */
  declare packageClassId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Unit Cost.
   */
  declare unitCost: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Serial Number Group Code.
   * @nullable
   */
  declare serialNumberGroupCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Packing Material Group Id.
   * @nullable
   */
  declare packingMaterialGroupId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Inventory Unit Symbol.
   * @nullable
   */
  declare inventoryUnitSymbol?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Fifth Product Filter Code.
   * @nullable
   */
  declare fifthProductFilterCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Ninth Product Filter Code.
   * @nullable
   */
  declare ninthProductFilterCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Net Product Weight.
   */
  declare netProductWeight: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Eighth Product Filter Code.
   * @nullable
   */
  declare eighthProductFilterCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Warehouse Mobile Device Description Line 1.
   * @nullable
   */
  declare warehouseMobileDeviceDescriptionLine1?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Warehouse Mobile Device Description Line 2.
   * @nullable
   */
  declare warehouseMobileDeviceDescriptionLine2?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Gross Product Width.
   */
  declare grossProductWidth: DeserializedType<T, 'Edm.Decimal'>;

  constructor(_entityApi: SourceSystemProductMessagesApi<T>) {
    super(_entityApi);
  }
}

export interface SourceSystemProductMessagesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  messageId: DeserializedType<T, 'Edm.String'>;
  sourceSystemId: DeserializedType<T, 'Edm.String'>;
  fieldsWithValue?: DeserializedType<T, 'Edm.Binary'> | null;
  productDimensionGroupName?: DeserializedType<T, 'Edm.String'> | null;
  originStateId?: DeserializedType<T, 'Edm.String'> | null;
  unitCostDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  productSubtype?: EcoResProductSubtype | null;
  inventoryCountingReasonCodePolicyName?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  updateProductVariantLifecycleState?: NoYes | null;
  productVolume: DeserializedType<T, 'Edm.Decimal'>;
  tareProductWeight: DeserializedType<T, 'Edm.Decimal'>;
  searchName?: DeserializedType<T, 'Edm.String'> | null;
  physicalDimensionGroupId?: DeserializedType<T, 'Edm.String'> | null;
  sourceSystemProductNumber?: DeserializedType<T, 'Edm.String'> | null;
  productSearchName?: DeserializedType<T, 'Edm.String'> | null;
  inventoryReservationHierarchyName?: DeserializedType<T, 'Edm.String'> | null;
  shelfAdvicePeriodDays: DeserializedType<T, 'Edm.Int32'>;
  storageDimensionGroupName?: DeserializedType<T, 'Edm.String'> | null;
  firstProductFilterGroupId?: DeserializedType<T, 'Edm.String'> | null;
  firstProductFilterCode?: DeserializedType<T, 'Edm.String'> | null;
  sixthProductFilterCode?: DeserializedType<T, 'Edm.String'> | null;
  secondProductFilterGroupId?: DeserializedType<T, 'Edm.String'> | null;
  unitCostQuantity: DeserializedType<T, 'Edm.Decimal'>;
  batchNumberGroupCode?: DeserializedType<T, 'Edm.String'> | null;
  itemModelGroupId?: DeserializedType<T, 'Edm.String'> | null;
  productGroupId?: DeserializedType<T, 'Edm.String'> | null;
  grossProductHeight: DeserializedType<T, 'Edm.Decimal'>;
  tenthProductFilterCode?: DeserializedType<T, 'Edm.String'> | null;
  shelfLifePeriodDays: DeserializedType<T, 'Edm.Int32'>;
  unitConversionSequenceGroupId?: DeserializedType<T, 'Edm.String'> | null;
  grossProductDepth: DeserializedType<T, 'Edm.Decimal'>;
  productLifecycleStateId?: DeserializedType<T, 'Edm.String'> | null;
  processingStatus?: WhsSourceSystemProductMessageProcessingStatus | null;
  trackingDimensionGroupName?: DeserializedType<T, 'Edm.String'> | null;
  isProductVariantUnitConversionEnabled?: NoYes | null;
  templateName?: DeserializedType<T, 'Edm.String'> | null;
  thirdProductFilterCode?: DeserializedType<T, 'Edm.String'> | null;
  isHazardousMaterial?: NoYes | null;
  originCountryRegionId?: DeserializedType<T, 'Edm.String'> | null;
  sourceSystemItemNumber?: DeserializedType<T, 'Edm.String'> | null;
  bestBeforePeriodDays: DeserializedType<T, 'Edm.Int32'>;
  fourthProductFilterCode?: DeserializedType<T, 'Edm.String'> | null;
  secondProductFilterCode?: DeserializedType<T, 'Edm.String'> | null;
  seventhProductFilterCode?: DeserializedType<T, 'Edm.String'> | null;
  packSizeCategoryId?: DeserializedType<T, 'Edm.String'> | null;
  packageClassId?: DeserializedType<T, 'Edm.String'> | null;
  unitCost: DeserializedType<T, 'Edm.Decimal'>;
  serialNumberGroupCode?: DeserializedType<T, 'Edm.String'> | null;
  packingMaterialGroupId?: DeserializedType<T, 'Edm.String'> | null;
  inventoryUnitSymbol?: DeserializedType<T, 'Edm.String'> | null;
  fifthProductFilterCode?: DeserializedType<T, 'Edm.String'> | null;
  ninthProductFilterCode?: DeserializedType<T, 'Edm.String'> | null;
  netProductWeight: DeserializedType<T, 'Edm.Decimal'>;
  eighthProductFilterCode?: DeserializedType<T, 'Edm.String'> | null;
  warehouseMobileDeviceDescriptionLine1?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  warehouseMobileDeviceDescriptionLine2?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  grossProductWidth: DeserializedType<T, 'Edm.Decimal'>;
}
