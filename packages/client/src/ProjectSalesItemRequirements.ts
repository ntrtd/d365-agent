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
import type { ProjectSalesItemRequirementsApi } from './ProjectSalesItemRequirementsApi';
import { TradeLineDlvType } from './TradeLineDlvType';
import { NoYes } from './NoYes';
import { InventRefType } from './InventRefType';
import { Timezone } from './Timezone';
import { SalesDeliveryDateControlType } from './SalesDeliveryDateControlType';
import { LineDeliveryType } from './LineDeliveryType';
import { ItemReservation } from './ItemReservation';
import { SalesStatus } from './SalesStatus';
import { DimensionSets, DimensionSetsType } from './DimensionSets';
import {
  DimensionCombinations,
  DimensionCombinationsType
} from './DimensionCombinations';

/**
 * This class represents the entity "ProjectSalesItemRequirements" of service "d365_metadata".
 */
export class ProjectSalesItemRequirements<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements ProjectSalesItemRequirementsType<T>
{
  /**
   * Technical entity name for ProjectSalesItemRequirements.
   */
  static override _entityName = 'ProjectSalesItemRequirements';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ProjectSalesItemRequirements entity.
   */
  static _keys = ['dataAreaId', 'ProjectTransactionId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Project Transaction Id.
   */
  declare projectTransactionId: DeserializedType<T, 'Edm.String'>;
  /**
   * Quantity Ordered.
   */
  declare quantityOrdered: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Delivery Type.
   * @nullable
   */
  declare deliveryType?: TradeLineDlvType | null;
  /**
   * Item Route Id.
   * @nullable
   */
  declare itemRouteId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Price Unit.
   */
  declare priceUnit: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Invoice Account.
   * @nullable
   */
  declare invoiceAccount?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Formatted Delvery Address.
   * @nullable
   */
  declare formattedDelveryAddress?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Project Category Id.
   * @nullable
   */
  declare projectCategoryId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Delivery Address Description.
   * @nullable
   */
  declare deliveryAddressDescription?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Mode Of Delivery.
   * @nullable
   */
  declare modeOfDelivery?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Shipping Date Requested.
   */
  declare shippingDateRequested: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Shipping Warehouse Id.
   * @nullable
   */
  declare shippingWarehouseId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Cost Price.
   */
  declare costPrice: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Is Status Stopped.
   * @nullable
   */
  declare isStatusStopped?: NoYes | null;
  /**
   * Product Style Id.
   * @nullable
   */
  declare productStyleId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Reference Lot.
   * @nullable
   */
  declare referenceLot?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Product Configuration Id.
   * @nullable
   */
  declare productConfigurationId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Invent Transaction Id.
   * @nullable
   */
  declare inventTransactionId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Tax Item Group.
   * @nullable
   */
  declare taxItemGroup?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Partial Delivery Prevented.
   * @nullable
   */
  declare isPartialDeliveryPrevented?: NoYes | null;
  /**
   * Item Batch Number.
   * @nullable
   */
  declare itemBatchNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Delivery Address Country Region Id.
   * @nullable
   */
  declare deliveryAddressCountryRegionId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Delivery Address Latitude.
   */
  declare deliveryAddressLatitude: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Delivery Address City.
   * @nullable
   */
  declare deliveryAddressCity?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Project Id.
   * @nullable
   */
  declare projectId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Project Line Property Id.
   * @nullable
   */
  declare projectLinePropertyId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Delivery Address District Name.
   * @nullable
   */
  declare deliveryAddressDistrictName?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Delivery Address County Id.
   * @nullable
   */
  declare deliveryAddressCountyId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Product Size Id.
   * @nullable
   */
  declare productSizeId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Shipping Date Confirmed.
   */
  declare shippingDateConfirmed: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Delivery Address Zip Code.
   * @nullable
   */
  declare deliveryAddressZipCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Auto Batch Reservation.
   * @nullable
   */
  declare autoBatchReservation?: NoYes | null;
  /**
   * Delivery Address Duns Number.
   * @nullable
   */
  declare deliveryAddressDunsNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Reference Number.
   * @nullable
   */
  declare referenceNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Remain Invent Financial.
   */
  declare remainInventFinancial: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Delivery Address Street Number.
   * @nullable
   */
  declare deliveryAddressStreetNumber?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Shipping Site Id.
   * @nullable
   */
  declare shippingSiteId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Delivery Address Private.
   * @nullable
   */
  declare isDeliveryAddressPrivate?: NoYes | null;
  /**
   * Ordered Inventory Status Id.
   * @nullable
   */
  declare orderedInventoryStatusId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Delivery Address Country Region Iso Code.
   * @nullable
   */
  declare deliveryAddressCountryRegionIsoCode?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Net Amount.
   */
  declare netAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Bar Code.
   * @nullable
   */
  declare barCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Currency Code.
   * @nullable
   */
  declare currencyCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Delivery Address Location Id.
   * @nullable
   */
  declare deliveryAddressLocationId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Reference Type.
   * @nullable
   */
  declare referenceType?: InventRefType | null;
  /**
   * Product Version Id.
   * @nullable
   */
  declare productVersionId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Tax Group.
   * @nullable
   */
  declare taxGroup?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Receipt Date Requested.
   */
  declare receiptDateRequested: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Sales Unit.
   * @nullable
   */
  declare salesUnit?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sales Category Name.
   * @nullable
   */
  declare salesCategoryName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Overdelivery.
   */
  declare overdelivery: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Delivery Address Street.
   * @nullable
   */
  declare deliveryAddressStreet?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Scrap.
   * @nullable
   */
  declare scrap?: NoYes | null;
  /**
   * Is Delivery Address Order Specific.
   * @nullable
   */
  declare isDeliveryAddressOrderSpecific?: NoYes | null;
  /**
   * Name.
   * @nullable
   */
  declare name?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Item Bom Id.
   * @nullable
   */
  declare itemBomId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Delivery Name.
   * @nullable
   */
  declare deliveryName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sales Price.
   */
  declare salesPrice: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Sales Quantity.
   */
  declare salesQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Receipt Date Confirmed.
   */
  declare receiptDateConfirmed: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Item Id.
   * @nullable
   */
  declare itemId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Delivery Address Longitude.
   */
  declare deliveryAddressLongitude: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Delivery Address Time Zone.
   * @nullable
   */
  declare deliveryAddressTimeZone?: Timezone | null;
  /**
   * Default Dimension Display Value.
   * @nullable
   */
  declare defaultDimensionDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Product Color Id.
   * @nullable
   */
  declare productColorId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Delivery Date Control.
   * @nullable
   */
  declare deliveryDateControl?: SalesDeliveryDateControlType | null;
  /**
   * Delivery Address State Id.
   * @nullable
   */
  declare deliveryAddressStateId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Ship Date.
   */
  declare shipDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Delivery Building Compliment.
   * @nullable
   */
  declare deliveryBuildingCompliment?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Underdelivery.
   */
  declare underdelivery: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Activity Number.
   * @nullable
   */
  declare activityNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Delivery Address Post Box.
   * @nullable
   */
  declare deliveryAddressPostBox?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Delivery Cfop Id.
   * @nullable
   */
  declare deliveryCfopId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Ledger Dimension Display Value.
   * @nullable
   */
  declare ledgerDimensionDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Invent Transaction Return Id.
   * @nullable
   */
  declare inventTransactionReturnId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Remain Invent Physical.
   */
  declare remainInventPhysical: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Service Order Id.
   * @nullable
   */
  declare serviceOrderId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Line Delivery Type.
   * @nullable
   */
  declare lineDeliveryType?: LineDeliveryType | null;
  /**
   * Bar Code Type.
   * @nullable
   */
  declare barCodeType?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Delivery Terms.
   * @nullable
   */
  declare deliveryTerms?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Reservation.
   * @nullable
   */
  declare reservation?: ItemReservation | null;
  /**
   * Invent Deliver Now.
   */
  declare inventDeliverNow: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Sales Status.
   * @nullable
   */
  declare salesStatus?: SalesStatus | null;
  /**
   * Same Batch Selection.
   * @nullable
   */
  declare sameBatchSelection?: NoYes | null;
  /**
   * One-to-one navigation property to the {@link DimensionSets} entity.
   */
  declare dimensionSet?: DimensionSets<T> | null;
  /**
   * One-to-one navigation property to the {@link DimensionCombinations} entity.
   */
  declare dimensionCombination?: DimensionCombinations<T> | null;

  constructor(_entityApi: ProjectSalesItemRequirementsApi<T>) {
    super(_entityApi);
  }
}

export interface ProjectSalesItemRequirementsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  projectTransactionId: DeserializedType<T, 'Edm.String'>;
  quantityOrdered: DeserializedType<T, 'Edm.Decimal'>;
  deliveryType?: TradeLineDlvType | null;
  itemRouteId?: DeserializedType<T, 'Edm.String'> | null;
  priceUnit: DeserializedType<T, 'Edm.Decimal'>;
  invoiceAccount?: DeserializedType<T, 'Edm.String'> | null;
  formattedDelveryAddress?: DeserializedType<T, 'Edm.String'> | null;
  projectCategoryId?: DeserializedType<T, 'Edm.String'> | null;
  deliveryAddressDescription?: DeserializedType<T, 'Edm.String'> | null;
  modeOfDelivery?: DeserializedType<T, 'Edm.String'> | null;
  shippingDateRequested: DeserializedType<T, 'Edm.DateTimeOffset'>;
  shippingWarehouseId?: DeserializedType<T, 'Edm.String'> | null;
  costPrice: DeserializedType<T, 'Edm.Decimal'>;
  isStatusStopped?: NoYes | null;
  productStyleId?: DeserializedType<T, 'Edm.String'> | null;
  referenceLot?: DeserializedType<T, 'Edm.String'> | null;
  productConfigurationId?: DeserializedType<T, 'Edm.String'> | null;
  inventTransactionId?: DeserializedType<T, 'Edm.String'> | null;
  taxItemGroup?: DeserializedType<T, 'Edm.String'> | null;
  isPartialDeliveryPrevented?: NoYes | null;
  itemBatchNumber?: DeserializedType<T, 'Edm.String'> | null;
  deliveryAddressCountryRegionId?: DeserializedType<T, 'Edm.String'> | null;
  deliveryAddressLatitude: DeserializedType<T, 'Edm.Decimal'>;
  deliveryAddressCity?: DeserializedType<T, 'Edm.String'> | null;
  projectId?: DeserializedType<T, 'Edm.String'> | null;
  projectLinePropertyId?: DeserializedType<T, 'Edm.String'> | null;
  deliveryAddressDistrictName?: DeserializedType<T, 'Edm.String'> | null;
  deliveryAddressCountyId?: DeserializedType<T, 'Edm.String'> | null;
  productSizeId?: DeserializedType<T, 'Edm.String'> | null;
  shippingDateConfirmed: DeserializedType<T, 'Edm.DateTimeOffset'>;
  deliveryAddressZipCode?: DeserializedType<T, 'Edm.String'> | null;
  autoBatchReservation?: NoYes | null;
  deliveryAddressDunsNumber?: DeserializedType<T, 'Edm.String'> | null;
  referenceNumber?: DeserializedType<T, 'Edm.String'> | null;
  remainInventFinancial: DeserializedType<T, 'Edm.Decimal'>;
  deliveryAddressStreetNumber?: DeserializedType<T, 'Edm.String'> | null;
  shippingSiteId?: DeserializedType<T, 'Edm.String'> | null;
  isDeliveryAddressPrivate?: NoYes | null;
  orderedInventoryStatusId?: DeserializedType<T, 'Edm.String'> | null;
  deliveryAddressCountryRegionIsoCode?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  netAmount: DeserializedType<T, 'Edm.Decimal'>;
  barCode?: DeserializedType<T, 'Edm.String'> | null;
  currencyCode?: DeserializedType<T, 'Edm.String'> | null;
  deliveryAddressLocationId?: DeserializedType<T, 'Edm.String'> | null;
  referenceType?: InventRefType | null;
  productVersionId?: DeserializedType<T, 'Edm.String'> | null;
  taxGroup?: DeserializedType<T, 'Edm.String'> | null;
  receiptDateRequested: DeserializedType<T, 'Edm.DateTimeOffset'>;
  salesUnit?: DeserializedType<T, 'Edm.String'> | null;
  salesCategoryName?: DeserializedType<T, 'Edm.String'> | null;
  overdelivery: DeserializedType<T, 'Edm.Decimal'>;
  deliveryAddressStreet?: DeserializedType<T, 'Edm.String'> | null;
  scrap?: NoYes | null;
  isDeliveryAddressOrderSpecific?: NoYes | null;
  name?: DeserializedType<T, 'Edm.String'> | null;
  itemBomId?: DeserializedType<T, 'Edm.String'> | null;
  deliveryName?: DeserializedType<T, 'Edm.String'> | null;
  salesPrice: DeserializedType<T, 'Edm.Decimal'>;
  salesQuantity: DeserializedType<T, 'Edm.Decimal'>;
  receiptDateConfirmed: DeserializedType<T, 'Edm.DateTimeOffset'>;
  itemId?: DeserializedType<T, 'Edm.String'> | null;
  deliveryAddressLongitude: DeserializedType<T, 'Edm.Decimal'>;
  deliveryAddressTimeZone?: Timezone | null;
  defaultDimensionDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  productColorId?: DeserializedType<T, 'Edm.String'> | null;
  deliveryDateControl?: SalesDeliveryDateControlType | null;
  deliveryAddressStateId?: DeserializedType<T, 'Edm.String'> | null;
  shipDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  deliveryBuildingCompliment?: DeserializedType<T, 'Edm.String'> | null;
  underdelivery: DeserializedType<T, 'Edm.Decimal'>;
  activityNumber?: DeserializedType<T, 'Edm.String'> | null;
  deliveryAddressPostBox?: DeserializedType<T, 'Edm.String'> | null;
  deliveryCfopId?: DeserializedType<T, 'Edm.String'> | null;
  ledgerDimensionDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  inventTransactionReturnId?: DeserializedType<T, 'Edm.String'> | null;
  remainInventPhysical: DeserializedType<T, 'Edm.Decimal'>;
  serviceOrderId?: DeserializedType<T, 'Edm.String'> | null;
  lineDeliveryType?: LineDeliveryType | null;
  barCodeType?: DeserializedType<T, 'Edm.String'> | null;
  deliveryTerms?: DeserializedType<T, 'Edm.String'> | null;
  reservation?: ItemReservation | null;
  inventDeliverNow: DeserializedType<T, 'Edm.Decimal'>;
  salesStatus?: SalesStatus | null;
  sameBatchSelection?: NoYes | null;
  dimensionSet?: DimensionSetsType<T> | null;
  dimensionCombination?: DimensionCombinationsType<T> | null;
}
