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
import type { WarehouseIntegrationSourceSystemReleasedProductsApi } from './WarehouseIntegrationSourceSystemReleasedProductsApi';
import { EcoResProductSubtype } from './EcoResProductSubtype';
import { NoYes } from './NoYes';

/**
 * This class represents the entity "WarehouseIntegrationSourceSystemReleasedProducts" of service "d365_metadata".
 */
export class WarehouseIntegrationSourceSystemReleasedProducts<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements WarehouseIntegrationSourceSystemReleasedProductsType<T>
{
  /**
   * Technical entity name for WarehouseIntegrationSourceSystemReleasedProducts.
   */
  static override _entityName =
    'WarehouseIntegrationSourceSystemReleasedProducts';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the WarehouseIntegrationSourceSystemReleasedProducts entity.
   */
  static _keys = ['dataAreaId', 'ItemNumber'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Item Number.
   */
  declare itemNumber: DeserializedType<T, 'Edm.String'>;
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
   * Inventory Counting Reason Code Policy Name.
   * @nullable
   */
  declare inventoryCountingReasonCodePolicyName?: DeserializedType<
    T,
    'Edm.String'
  > | null;
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
   * Storage Dimension Group Name.
   * @nullable
   */
  declare storageDimensionGroupName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Shelf Advice Period Days.
   */
  declare shelfAdvicePeriodDays: DeserializedType<T, 'Edm.Int32'>;
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
   * Source System Item Master Number.
   * @nullable
   */
  declare sourceSystemItemMasterNumber?: DeserializedType<
    T,
    'Edm.String'
  > | null;
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
   * Product Sub Type.
   * @nullable
   */
  declare productSubType?: EcoResProductSubtype | null;
  /**
   * Tracking Dimension Group Name.
   * @nullable
   */
  declare trackingDimensionGroupName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Product Number.
   * @nullable
   */
  declare productNumber?: DeserializedType<T, 'Edm.String'> | null;
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
   * Source System Id.
   * @nullable
   */
  declare sourceSystemId?: DeserializedType<T, 'Edm.String'> | null;
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
   * Gross Depth.
   */
  declare grossDepth: DeserializedType<T, 'Edm.Decimal'>;
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

  constructor(
    _entityApi: WarehouseIntegrationSourceSystemReleasedProductsApi<T>
  ) {
    super(_entityApi);
  }
}

export interface WarehouseIntegrationSourceSystemReleasedProductsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  itemNumber: DeserializedType<T, 'Edm.String'>;
  productDimensionGroupName?: DeserializedType<T, 'Edm.String'> | null;
  originStateId?: DeserializedType<T, 'Edm.String'> | null;
  unitCostDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  inventoryCountingReasonCodePolicyName?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  productVolume: DeserializedType<T, 'Edm.Decimal'>;
  tareProductWeight: DeserializedType<T, 'Edm.Decimal'>;
  searchName?: DeserializedType<T, 'Edm.String'> | null;
  physicalDimensionGroupId?: DeserializedType<T, 'Edm.String'> | null;
  sourceSystemProductNumber?: DeserializedType<T, 'Edm.String'> | null;
  productSearchName?: DeserializedType<T, 'Edm.String'> | null;
  inventoryReservationHierarchyName?: DeserializedType<T, 'Edm.String'> | null;
  storageDimensionGroupName?: DeserializedType<T, 'Edm.String'> | null;
  shelfAdvicePeriodDays: DeserializedType<T, 'Edm.Int32'>;
  firstProductFilterGroupId?: DeserializedType<T, 'Edm.String'> | null;
  firstProductFilterCode?: DeserializedType<T, 'Edm.String'> | null;
  sixthProductFilterCode?: DeserializedType<T, 'Edm.String'> | null;
  sourceSystemItemMasterNumber?: DeserializedType<T, 'Edm.String'> | null;
  secondProductFilterGroupId?: DeserializedType<T, 'Edm.String'> | null;
  unitCostQuantity: DeserializedType<T, 'Edm.Decimal'>;
  batchNumberGroupCode?: DeserializedType<T, 'Edm.String'> | null;
  itemModelGroupId?: DeserializedType<T, 'Edm.String'> | null;
  productGroupId?: DeserializedType<T, 'Edm.String'> | null;
  grossProductHeight: DeserializedType<T, 'Edm.Decimal'>;
  tenthProductFilterCode?: DeserializedType<T, 'Edm.String'> | null;
  shelfLifePeriodDays: DeserializedType<T, 'Edm.Int32'>;
  unitConversionSequenceGroupId?: DeserializedType<T, 'Edm.String'> | null;
  productSubType?: EcoResProductSubtype | null;
  trackingDimensionGroupName?: DeserializedType<T, 'Edm.String'> | null;
  productNumber?: DeserializedType<T, 'Edm.String'> | null;
  thirdProductFilterCode?: DeserializedType<T, 'Edm.String'> | null;
  isHazardousMaterial?: NoYes | null;
  originCountryRegionId?: DeserializedType<T, 'Edm.String'> | null;
  sourceSystemItemNumber?: DeserializedType<T, 'Edm.String'> | null;
  bestBeforePeriodDays: DeserializedType<T, 'Edm.Int32'>;
  fourthProductFilterCode?: DeserializedType<T, 'Edm.String'> | null;
  sourceSystemId?: DeserializedType<T, 'Edm.String'> | null;
  secondProductFilterCode?: DeserializedType<T, 'Edm.String'> | null;
  seventhProductFilterCode?: DeserializedType<T, 'Edm.String'> | null;
  grossDepth: DeserializedType<T, 'Edm.Decimal'>;
  packSizeCategoryId?: DeserializedType<T, 'Edm.String'> | null;
  packageClassId?: DeserializedType<T, 'Edm.String'> | null;
  unitCost: DeserializedType<T, 'Edm.Decimal'>;
  serialNumberGroupCode?: DeserializedType<T, 'Edm.String'> | null;
  packingMaterialGroupId?: DeserializedType<T, 'Edm.String'> | null;
  inventoryUnitSymbol?: DeserializedType<T, 'Edm.String'> | null;
  fifthProductFilterCode?: DeserializedType<T, 'Edm.String'> | null;
  ninthProductFilterCode?: DeserializedType<T, 'Edm.String'> | null;
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
