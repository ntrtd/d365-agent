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
import type { ShippingParametersApi } from './ShippingParametersApi';
import { NoYes } from './NoYes';
import { InventAdjustmentSpec } from './InventAdjustmentSpec';
import { ErrorTolerance } from './ErrorTolerance';
import { ItmCostPostingDatePrinciple } from './ItmCostPostingDatePrinciple';

/**
 * This class represents the entity "ShippingParameters" of service "d365_metadata".
 */
export class ShippingParameters<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements ShippingParametersType<T>
{
  /**
   * Technical entity name for ShippingParameters.
   */
  static override _entityName = 'ShippingParameters';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ShippingParameters entity.
   */
  static _keys = ['dataAreaId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Rental Container Shipment Status Id.
   * @nullable
   */
  declare rentalContainerShipmentStatusId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Default Costing Version Id.
   * @nullable
   */
  declare defaultCostingVersionId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Activate.
   * @nullable
   */
  declare activate?: NoYes | null;
  /**
   * Is Over Under Non Ship Purch.
   * @nullable
   */
  declare isOverUnderNonShipPurch?: NoYes | null;
  /**
   * Cost Posting Specification Rule.
   * @nullable
   */
  declare costPostingSpecificationRule?: InventAdjustmentSpec | null;
  /**
   * Voyage Creator Weight Tolerance Percentage.
   */
  declare voyageCreatorWeightTolerancePercentage: DeserializedType<
    T,
    'Edm.Decimal'
  >;
  /**
   * Multiple Vendor Per Folio Tolerance.
   * @nullable
   */
  declare multipleVendorPerFolioTolerance?: ErrorTolerance | null;
  /**
   * Is Over Under Non Git Purch.
   * @nullable
   */
  declare isOverUnderNonGitPurch?: NoYes | null;
  /**
   * Shipping Exchange Rate Type Name.
   * @nullable
   */
  declare shippingExchangeRateTypeName?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Service Provider Vendor Invoice Tolerance.
   * @nullable
   */
  declare serviceProviderVendorInvoiceTolerance?: ErrorTolerance | null;
  /**
   * Over Under Delivery Inventory Movement Journal Name Id.
   * @nullable
   */
  declare overUnderDeliveryInventoryMovementJournalNameId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Closed Goods In Transit Order Receipt Grace Period Days.
   */
  declare closedGoodsInTransitOrderReceiptGracePeriodDays: DeserializedType<
    T,
    'Edm.Int32'
  >;
  /**
   * Will Landed Cost Calculation Allow Zero Cost.
   * @nullable
   */
  declare willLandedCostCalculationAllowZeroCost?: NoYes | null;
  /**
   * Multiple Vendor Invoice Per Cost Transaction Tolerance.
   * @nullable
   */
  declare multipleVendorInvoicePerCostTransactionTolerance?: ErrorTolerance | null;
  /**
   * Will Landed Cost Calculation Use Shipping Exchange Rate.
   * @nullable
   */
  declare willLandedCostCalculationUseShippingExchangeRate?: NoYes | null;
  /**
   * Cost Calculation Missing Item Volume Tolerance.
   * @nullable
   */
  declare costCalculationMissingItemVolumeTolerance?: ErrorTolerance | null;
  /**
   * Costed Shipment Status Id.
   * @nullable
   */
  declare costedShipmentStatusId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Rental Container Journey Template Id.
   * @nullable
   */
  declare rentalContainerJourneyTemplateId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Costing Ready Shipment Status Id.
   * @nullable
   */
  declare costingReadyShipmentStatusId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Multiple Warehouse Per Voyage Tolerance.
   * @nullable
   */
  declare multipleWarehousePerVoyageTolerance?: ErrorTolerance | null;
  /**
   * Is Container Header Cartons Automatically Updated.
   * @nullable
   */
  declare isContainerHeaderCartonsAutomaticallyUpdated?: NoYes | null;
  /**
   * Allow Create Voyage In Batch.
   * @nullable
   */
  declare allowCreateVoyageInBatch?: NoYes | null;
  /**
   * In Transit Shipment Status Id.
   * @nullable
   */
  declare inTransitShipmentStatusId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Will Cost Accrual Use Vendor Invoice Voucher Number.
   * @nullable
   */
  declare willCostAccrualUseVendorInvoiceVoucherNumber?: NoYes | null;
  /**
   * Generate Voyage Editor Data Manually.
   * @nullable
   */
  declare generateVoyageEditorDataManually?: NoYes | null;
  /**
   * Will Moving Average Post Adjustment As Variance.
   * @nullable
   */
  declare willMovingAveragePostAdjustmentAsVariance?: NoYes | null;
  /**
   * Cost Adjustment Accounting Date Rule.
   * @nullable
   */
  declare costAdjustmentAccountingDateRule?: ItmCostPostingDatePrinciple | null;
  /**
   * Singleton Key.
   */
  declare singletonKey: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Purchase Order Line Quantity Update Tolerance.
   * @nullable
   */
  declare purchaseOrderLineQuantityUpdateTolerance?: ErrorTolerance | null;
  /**
   * Under Delivery Inventory Transfer Journal Name Id.
   * @nullable
   */
  declare underDeliveryInventoryTransferJournalNameId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Keep Auto Tracking Dim Number.
   * @nullable
   */
  declare keepAutoTrackingDimNumber?: NoYes | null;
  /**
   * Will Costing Use Landed Cost Type Charge Accrual Main Account.
   * @nullable
   */
  declare willCostingUseLandedCostTypeChargeAccrualMainAccount?: NoYes | null;
  /**
   * Multiple Delivery Mode Per Voyage Tolerance.
   * @nullable
   */
  declare multipleDeliveryModePerVoyageTolerance?: ErrorTolerance | null;
  /**
   * Pre Costed Shipment Status Id.
   * @nullable
   */
  declare preCostedShipmentStatusId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Voyage Creator Volume Tolerance Percentage.
   */
  declare voyageCreatorVolumeTolerancePercentage: DeserializedType<
    T,
    'Edm.Decimal'
  >;
  /**
   * Item Arrival Journal Name Id.
   * @nullable
   */
  declare itemArrivalJournalNameId?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: ShippingParametersApi<T>) {
    super(_entityApi);
  }
}

export interface ShippingParametersType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  rentalContainerShipmentStatusId?: DeserializedType<T, 'Edm.String'> | null;
  defaultCostingVersionId?: DeserializedType<T, 'Edm.String'> | null;
  activate?: NoYes | null;
  isOverUnderNonShipPurch?: NoYes | null;
  costPostingSpecificationRule?: InventAdjustmentSpec | null;
  voyageCreatorWeightTolerancePercentage: DeserializedType<T, 'Edm.Decimal'>;
  multipleVendorPerFolioTolerance?: ErrorTolerance | null;
  isOverUnderNonGitPurch?: NoYes | null;
  shippingExchangeRateTypeName?: DeserializedType<T, 'Edm.String'> | null;
  serviceProviderVendorInvoiceTolerance?: ErrorTolerance | null;
  overUnderDeliveryInventoryMovementJournalNameId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  closedGoodsInTransitOrderReceiptGracePeriodDays: DeserializedType<
    T,
    'Edm.Int32'
  >;
  willLandedCostCalculationAllowZeroCost?: NoYes | null;
  multipleVendorInvoicePerCostTransactionTolerance?: ErrorTolerance | null;
  willLandedCostCalculationUseShippingExchangeRate?: NoYes | null;
  costCalculationMissingItemVolumeTolerance?: ErrorTolerance | null;
  costedShipmentStatusId?: DeserializedType<T, 'Edm.String'> | null;
  rentalContainerJourneyTemplateId?: DeserializedType<T, 'Edm.String'> | null;
  costingReadyShipmentStatusId?: DeserializedType<T, 'Edm.String'> | null;
  multipleWarehousePerVoyageTolerance?: ErrorTolerance | null;
  isContainerHeaderCartonsAutomaticallyUpdated?: NoYes | null;
  allowCreateVoyageInBatch?: NoYes | null;
  inTransitShipmentStatusId?: DeserializedType<T, 'Edm.String'> | null;
  willCostAccrualUseVendorInvoiceVoucherNumber?: NoYes | null;
  generateVoyageEditorDataManually?: NoYes | null;
  willMovingAveragePostAdjustmentAsVariance?: NoYes | null;
  costAdjustmentAccountingDateRule?: ItmCostPostingDatePrinciple | null;
  singletonKey: DeserializedType<T, 'Edm.Int32'>;
  purchaseOrderLineQuantityUpdateTolerance?: ErrorTolerance | null;
  underDeliveryInventoryTransferJournalNameId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  keepAutoTrackingDimNumber?: NoYes | null;
  willCostingUseLandedCostTypeChargeAccrualMainAccount?: NoYes | null;
  multipleDeliveryModePerVoyageTolerance?: ErrorTolerance | null;
  preCostedShipmentStatusId?: DeserializedType<T, 'Edm.String'> | null;
  voyageCreatorVolumeTolerancePercentage: DeserializedType<T, 'Edm.Decimal'>;
  itemArrivalJournalNameId?: DeserializedType<T, 'Edm.String'> | null;
}
