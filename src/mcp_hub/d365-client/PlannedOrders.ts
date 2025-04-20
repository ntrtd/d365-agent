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
import type { PlannedOrdersApi } from './PlannedOrdersApi';
import { ReqPlanType } from './ReqPlanType';
import { NoYes } from './NoYes';
import { ReqPoStatus } from './ReqPoStatus';
import { SchedMethod } from './SchedMethod';
import { ReqRefType } from './ReqRefType';
import {
  PurchaseOrderHeadersV2,
  PurchaseOrderHeadersV2Type
} from './PurchaseOrderHeadersV2';
import { RouteHeaders, RouteHeadersType } from './RouteHeaders';
import { ProductsV2, ProductsV2Type } from './ProductsV2';
import {
  ReleasedProductsV2,
  ReleasedProductsV2Type
} from './ReleasedProductsV2';
import { VendorGroups, VendorGroupsType } from './VendorGroups';
import {
  TransferOrderHeaders,
  TransferOrderHeadersType
} from './TransferOrderHeaders';
import { VendorsV2, VendorsV2Type } from './VendorsV2';
import {
  BillOfMaterialsHeaders,
  BillOfMaterialsHeadersType
} from './BillOfMaterialsHeaders';
import { ProductGroups, ProductGroupsType } from './ProductGroups';

/**
 * This class represents the entity "PlannedOrders" of service "d365_metadata".
 */
export class PlannedOrders<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements PlannedOrdersType<T>
{
  /**
   * Technical entity name for PlannedOrders.
   */
  static override _entityName = 'PlannedOrders';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the PlannedOrders entity.
   */
  static _keys = ['dataAreaId', 'RequirementPlanId', 'PlannedOrderNumber'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Requirement Plan Id.
   */
  declare requirementPlanId: DeserializedType<T, 'Edm.String'>;
  /**
   * Planned Order Number.
   */
  declare plannedOrderNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Requirement Plan Type.
   * @nullable
   */
  declare requirementPlanType?: ReqPlanType | null;
  /**
   * Product Search Name.
   * @nullable
   */
  declare productSearchName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Buyer Group Id.
   * @nullable
   */
  declare buyerGroupId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Lead Time Using Working Days.
   * @nullable
   */
  declare isLeadTimeUsingWorkingDays?: NoYes | null;
  /**
   * Lead Time Days.
   */
  declare leadTimeDays: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Product Configuration Id.
   * @nullable
   */
  declare productConfigurationId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Processing Status.
   * @nullable
   */
  declare processingStatus?: ReqPoStatus | null;
  /**
   * Requirement Warehouse Location Id.
   * @nullable
   */
  declare requirementWarehouseLocationId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Appending Purchase Order Number.
   * @nullable
   */
  declare appendingPurchaseOrderNumber?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Purchase Unit Symbol.
   * @nullable
   */
  declare purchaseUnitSymbol?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Requirement Site Id.
   * @nullable
   */
  declare requirementSiteId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Product Description.
   * @nullable
   */
  declare productDescription?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Appending Transfer Order Number.
   * @nullable
   */
  declare appendingTransferOrderNumber?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Product Number.
   * @nullable
   */
  declare productNumber?: DeserializedType<T, 'Edm.String'> | null;
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
   * Requirement Plan Description.
   * @nullable
   */
  declare requirementPlanDescription?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Delivery Date.
   */
  declare deliveryDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Order Time.
   */
  declare orderTime: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Scheduling Method.
   * @nullable
   */
  declare schedulingMethod?: SchedMethod | null;
  /**
   * Scheduled End Date.
   */
  declare scheduledEndDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Scheduled Start Date.
   */
  declare scheduledStartDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Invent Serial Id.
   * @nullable
   */
  declare inventSerialId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Product Group Id.
   * @nullable
   */
  declare productGroupId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Planned Order Type.
   * @nullable
   */
  declare plannedOrderType?: ReqRefType | null;
  /**
   * Requirement Quantity.
   */
  declare requirementQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Cost Amount.
   */
  declare costAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Vendor Group Id.
   * @nullable
   */
  declare vendorGroupId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Bulk Order.
   * @nullable
   */
  declare isBulkOrder?: NoYes | null;
  /**
   * Planning Formula Item Number.
   * @nullable
   */
  declare planningFormulaItemNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Planned Order Modified Date Time.
   */
  declare plannedOrderModifiedDateTime: DeserializedType<
    T,
    'Edm.DateTimeOffset'
  >;
  /**
   * Requirement Warehouse Id.
   * @nullable
   */
  declare requirementWarehouseId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Requirement Catch Weight Quantity.
   */
  declare requirementCatchWeightQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Yield Percentage.
   */
  declare yieldPercentage: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Invent Batch Id.
   * @nullable
   */
  declare inventBatchId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Delivery Time.
   */
  declare deliveryTime: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Vendor Account Number.
   * @nullable
   */
  declare vendorAccountNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * License Plate Id.
   * @nullable
   */
  declare licensePlateId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Product Color Id.
   * @nullable
   */
  declare productColorId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Directly Derived Requirement.
   * @nullable
   */
  declare isDirectlyDerivedRequirement?: NoYes | null;
  /**
   * Planning Priority.
   */
  declare planningPriority: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Order Date.
   */
  declare orderDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Bom Id.
   * @nullable
   */
  declare bomId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Purchase Quantity.
   */
  declare purchaseQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Planned Order Route Operation Id.
   * @nullable
   */
  declare plannedOrderRouteOperationId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Is Sequenced Planned Batch Order.
   */
  declare isSequencedPlannedBatchOrder: DeserializedType<T, 'Edm.Boolean'>;
  /**
   * Requirement Date.
   */
  declare requirementDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Product Style Id.
   * @nullable
   */
  declare productStyleId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Requirement Status Id.
   * @nullable
   */
  declare requirementStatusId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-one navigation property to the {@link PurchaseOrderHeadersV2} entity.
   */
  declare purchaseOrderHeader?: PurchaseOrderHeadersV2<T> | null;
  /**
   * One-to-one navigation property to the {@link RouteHeaders} entity.
   */
  declare routeHeader?: RouteHeaders<T> | null;
  /**
   * One-to-one navigation property to the {@link ProductsV2} entity.
   */
  declare product?: ProductsV2<T> | null;
  /**
   * One-to-one navigation property to the {@link ReleasedProductsV2} entity.
   */
  declare planningFormulaProduct?: ReleasedProductsV2<T> | null;
  /**
   * One-to-one navigation property to the {@link VendorGroups} entity.
   */
  declare vendorGroup?: VendorGroups<T> | null;
  /**
   * One-to-one navigation property to the {@link TransferOrderHeaders} entity.
   */
  declare transferOrderHeader?: TransferOrderHeaders<T> | null;
  /**
   * One-to-one navigation property to the {@link VendorsV2} entity.
   */
  declare vendor?: VendorsV2<T> | null;
  /**
   * One-to-one navigation property to the {@link BillOfMaterialsHeaders} entity.
   */
  declare billOfMaterialsHeader?: BillOfMaterialsHeaders<T> | null;
  /**
   * One-to-one navigation property to the {@link ProductGroups} entity.
   */
  declare productGroup?: ProductGroups<T> | null;

  constructor(_entityApi: PlannedOrdersApi<T>) {
    super(_entityApi);
  }
}

export interface PlannedOrdersType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  requirementPlanId: DeserializedType<T, 'Edm.String'>;
  plannedOrderNumber: DeserializedType<T, 'Edm.String'>;
  requirementPlanType?: ReqPlanType | null;
  productSearchName?: DeserializedType<T, 'Edm.String'> | null;
  buyerGroupId?: DeserializedType<T, 'Edm.String'> | null;
  isLeadTimeUsingWorkingDays?: NoYes | null;
  leadTimeDays: DeserializedType<T, 'Edm.Int32'>;
  productConfigurationId?: DeserializedType<T, 'Edm.String'> | null;
  processingStatus?: ReqPoStatus | null;
  requirementWarehouseLocationId?: DeserializedType<T, 'Edm.String'> | null;
  appendingPurchaseOrderNumber?: DeserializedType<T, 'Edm.String'> | null;
  purchaseUnitSymbol?: DeserializedType<T, 'Edm.String'> | null;
  requirementSiteId?: DeserializedType<T, 'Edm.String'> | null;
  productDescription?: DeserializedType<T, 'Edm.String'> | null;
  appendingTransferOrderNumber?: DeserializedType<T, 'Edm.String'> | null;
  productNumber?: DeserializedType<T, 'Edm.String'> | null;
  productSizeId?: DeserializedType<T, 'Edm.String'> | null;
  itemNumber?: DeserializedType<T, 'Edm.String'> | null;
  productVersionId?: DeserializedType<T, 'Edm.String'> | null;
  requirementPlanDescription?: DeserializedType<T, 'Edm.String'> | null;
  deliveryDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  orderTime: DeserializedType<T, 'Edm.Int32'>;
  schedulingMethod?: SchedMethod | null;
  scheduledEndDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  scheduledStartDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  inventSerialId?: DeserializedType<T, 'Edm.String'> | null;
  productGroupId?: DeserializedType<T, 'Edm.String'> | null;
  plannedOrderType?: ReqRefType | null;
  requirementQuantity: DeserializedType<T, 'Edm.Decimal'>;
  costAmount: DeserializedType<T, 'Edm.Decimal'>;
  vendorGroupId?: DeserializedType<T, 'Edm.String'> | null;
  isBulkOrder?: NoYes | null;
  planningFormulaItemNumber?: DeserializedType<T, 'Edm.String'> | null;
  plannedOrderModifiedDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  requirementWarehouseId?: DeserializedType<T, 'Edm.String'> | null;
  requirementCatchWeightQuantity: DeserializedType<T, 'Edm.Decimal'>;
  yieldPercentage: DeserializedType<T, 'Edm.Decimal'>;
  inventBatchId?: DeserializedType<T, 'Edm.String'> | null;
  deliveryTime: DeserializedType<T, 'Edm.Int32'>;
  vendorAccountNumber?: DeserializedType<T, 'Edm.String'> | null;
  licensePlateId?: DeserializedType<T, 'Edm.String'> | null;
  productColorId?: DeserializedType<T, 'Edm.String'> | null;
  isDirectlyDerivedRequirement?: NoYes | null;
  planningPriority: DeserializedType<T, 'Edm.Decimal'>;
  orderDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  bomId?: DeserializedType<T, 'Edm.String'> | null;
  purchaseQuantity: DeserializedType<T, 'Edm.Decimal'>;
  plannedOrderRouteOperationId?: DeserializedType<T, 'Edm.String'> | null;
  isSequencedPlannedBatchOrder: DeserializedType<T, 'Edm.Boolean'>;
  requirementDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  productStyleId?: DeserializedType<T, 'Edm.String'> | null;
  requirementStatusId?: DeserializedType<T, 'Edm.String'> | null;
  purchaseOrderHeader?: PurchaseOrderHeadersV2Type<T> | null;
  routeHeader?: RouteHeadersType<T> | null;
  product?: ProductsV2Type<T> | null;
  planningFormulaProduct?: ReleasedProductsV2Type<T> | null;
  vendorGroup?: VendorGroupsType<T> | null;
  transferOrderHeader?: TransferOrderHeadersType<T> | null;
  vendor?: VendorsV2Type<T> | null;
  billOfMaterialsHeader?: BillOfMaterialsHeadersType<T> | null;
  productGroup?: ProductGroupsType<T> | null;
}
