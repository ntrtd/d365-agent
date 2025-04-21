/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ShippingParameters } from './ShippingParameters';
import { ShippingParametersRequestBuilder } from './ShippingParametersRequestBuilder';
import { NoYes } from './NoYes';
import { InventAdjustmentSpec } from './InventAdjustmentSpec';
import { ErrorTolerance } from './ErrorTolerance';
import { ItmCostPostingDatePrinciple } from './ItmCostPostingDatePrinciple';
import {
  CustomField,
  defaultDeSerializers,
  DefaultDeSerializers,
  DeSerializers,
  AllFields,
  entityBuilder,
  EntityBuilderType,
  EntityApi,
  FieldBuilder,
  OrderableEdmTypeField,
  EnumField
} from '@sap-cloud-sdk/odata-v4';
export class ShippingParametersApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<ShippingParameters<DeSerializersT>, DeSerializersT>
{
  public deSerializers: DeSerializersT;

  private constructor(
    deSerializers: DeSerializersT = defaultDeSerializers as any
  ) {
    this.deSerializers = deSerializers;
  }

  /**
   * Do not use this method or the constructor directly.
   * Use the service function as described in the documentation to get an API instance.
   */
  public static _privateFactory<
    DeSerializersT extends DeSerializers = DefaultDeSerializers
  >(
    deSerializers: DeSerializersT = defaultDeSerializers as any
  ): ShippingParametersApi<DeSerializersT> {
    return new ShippingParametersApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = ShippingParameters;

  requestBuilder(): ShippingParametersRequestBuilder<DeSerializersT> {
    return new ShippingParametersRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    ShippingParameters<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<ShippingParameters<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    ShippingParameters<DeSerializersT>,
    DeSerializersT,
    NullableT
  > {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<
    typeof ShippingParameters,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        ShippingParameters,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      ShippingParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    RENTAL_CONTAINER_SHIPMENT_STATUS_ID: OrderableEdmTypeField<
      ShippingParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DEFAULT_COSTING_VERSION_ID: OrderableEdmTypeField<
      ShippingParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ACTIVATE: EnumField<
      ShippingParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    IS_OVER_UNDER_NON_SHIP_PURCH: EnumField<
      ShippingParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    COST_POSTING_SPECIFICATION_RULE: EnumField<
      ShippingParameters<DeSerializers>,
      DeSerializersT,
      InventAdjustmentSpec,
      true,
      true
    >;
    VOYAGE_CREATOR_WEIGHT_TOLERANCE_PERCENTAGE: OrderableEdmTypeField<
      ShippingParameters<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    MULTIPLE_VENDOR_PER_FOLIO_TOLERANCE: EnumField<
      ShippingParameters<DeSerializers>,
      DeSerializersT,
      ErrorTolerance,
      true,
      true
    >;
    IS_OVER_UNDER_NON_GIT_PURCH: EnumField<
      ShippingParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    SHIPPING_EXCHANGE_RATE_TYPE_NAME: OrderableEdmTypeField<
      ShippingParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SERVICE_PROVIDER_VENDOR_INVOICE_TOLERANCE: EnumField<
      ShippingParameters<DeSerializers>,
      DeSerializersT,
      ErrorTolerance,
      true,
      true
    >;
    OVER_UNDER_DELIVERY_INVENTORY_MOVEMENT_JOURNAL_NAME_ID: OrderableEdmTypeField<
      ShippingParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CLOSED_GOODS_IN_TRANSIT_ORDER_RECEIPT_GRACE_PERIOD_DAYS: OrderableEdmTypeField<
      ShippingParameters<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    WILL_LANDED_COST_CALCULATION_ALLOW_ZERO_COST: EnumField<
      ShippingParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    MULTIPLE_VENDOR_INVOICE_PER_COST_TRANSACTION_TOLERANCE: EnumField<
      ShippingParameters<DeSerializers>,
      DeSerializersT,
      ErrorTolerance,
      true,
      true
    >;
    WILL_LANDED_COST_CALCULATION_USE_SHIPPING_EXCHANGE_RATE: EnumField<
      ShippingParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    COST_CALCULATION_MISSING_ITEM_VOLUME_TOLERANCE: EnumField<
      ShippingParameters<DeSerializers>,
      DeSerializersT,
      ErrorTolerance,
      true,
      true
    >;
    COSTED_SHIPMENT_STATUS_ID: OrderableEdmTypeField<
      ShippingParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RENTAL_CONTAINER_JOURNEY_TEMPLATE_ID: OrderableEdmTypeField<
      ShippingParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COSTING_READY_SHIPMENT_STATUS_ID: OrderableEdmTypeField<
      ShippingParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MULTIPLE_WAREHOUSE_PER_VOYAGE_TOLERANCE: EnumField<
      ShippingParameters<DeSerializers>,
      DeSerializersT,
      ErrorTolerance,
      true,
      true
    >;
    IS_CONTAINER_HEADER_CARTONS_AUTOMATICALLY_UPDATED: EnumField<
      ShippingParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ALLOW_CREATE_VOYAGE_IN_BATCH: EnumField<
      ShippingParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    IN_TRANSIT_SHIPMENT_STATUS_ID: OrderableEdmTypeField<
      ShippingParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    WILL_COST_ACCRUAL_USE_VENDOR_INVOICE_VOUCHER_NUMBER: EnumField<
      ShippingParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    GENERATE_VOYAGE_EDITOR_DATA_MANUALLY: EnumField<
      ShippingParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    WILL_MOVING_AVERAGE_POST_ADJUSTMENT_AS_VARIANCE: EnumField<
      ShippingParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    COST_ADJUSTMENT_ACCOUNTING_DATE_RULE: EnumField<
      ShippingParameters<DeSerializers>,
      DeSerializersT,
      ItmCostPostingDatePrinciple,
      true,
      true
    >;
    SINGLETON_KEY: OrderableEdmTypeField<
      ShippingParameters<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    PURCHASE_ORDER_LINE_QUANTITY_UPDATE_TOLERANCE: EnumField<
      ShippingParameters<DeSerializers>,
      DeSerializersT,
      ErrorTolerance,
      true,
      true
    >;
    UNDER_DELIVERY_INVENTORY_TRANSFER_JOURNAL_NAME_ID: OrderableEdmTypeField<
      ShippingParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    KEEP_AUTO_TRACKING_DIM_NUMBER: EnumField<
      ShippingParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    WILL_COSTING_USE_LANDED_COST_TYPE_CHARGE_ACCRUAL_MAIN_ACCOUNT: EnumField<
      ShippingParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    MULTIPLE_DELIVERY_MODE_PER_VOYAGE_TOLERANCE: EnumField<
      ShippingParameters<DeSerializers>,
      DeSerializersT,
      ErrorTolerance,
      true,
      true
    >;
    PRE_COSTED_SHIPMENT_STATUS_ID: OrderableEdmTypeField<
      ShippingParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VOYAGE_CREATOR_VOLUME_TOLERANCE_PERCENTAGE: OrderableEdmTypeField<
      ShippingParameters<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ITEM_ARRIVAL_JOURNAL_NAME_ID: OrderableEdmTypeField<
      ShippingParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<ShippingParameters<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link dataAreaId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DATA_AREA_ID: fieldBuilder.buildEdmTypeField(
          'dataAreaId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link rentalContainerShipmentStatusId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RENTAL_CONTAINER_SHIPMENT_STATUS_ID: fieldBuilder.buildEdmTypeField(
          'RentalContainerShipmentStatusId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link defaultCostingVersionId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFAULT_COSTING_VERSION_ID: fieldBuilder.buildEdmTypeField(
          'DefaultCostingVersionId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link activate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACTIVATE: fieldBuilder.buildEnumField('Activate', NoYes, true),
        /**
         * Static representation of the {@link isOverUnderNonShipPurch} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_OVER_UNDER_NON_SHIP_PURCH: fieldBuilder.buildEnumField(
          'IsOverUnderNonShipPurch',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link costPostingSpecificationRule} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COST_POSTING_SPECIFICATION_RULE: fieldBuilder.buildEnumField(
          'CostPostingSpecificationRule',
          InventAdjustmentSpec,
          true
        ),
        /**
         * Static representation of the {@link voyageCreatorWeightTolerancePercentage} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VOYAGE_CREATOR_WEIGHT_TOLERANCE_PERCENTAGE:
          fieldBuilder.buildEdmTypeField(
            'VoyageCreatorWeightTolerancePercentage',
            'Edm.Decimal',
            false
          ),
        /**
         * Static representation of the {@link multipleVendorPerFolioTolerance} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MULTIPLE_VENDOR_PER_FOLIO_TOLERANCE: fieldBuilder.buildEnumField(
          'MultipleVendorPerFolioTolerance',
          ErrorTolerance,
          true
        ),
        /**
         * Static representation of the {@link isOverUnderNonGitPurch} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_OVER_UNDER_NON_GIT_PURCH: fieldBuilder.buildEnumField(
          'IsOverUnderNonGITPurch',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link shippingExchangeRateTypeName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHIPPING_EXCHANGE_RATE_TYPE_NAME: fieldBuilder.buildEdmTypeField(
          'ShippingExchangeRateTypeName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link serviceProviderVendorInvoiceTolerance} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SERVICE_PROVIDER_VENDOR_INVOICE_TOLERANCE: fieldBuilder.buildEnumField(
          'ServiceProviderVendorInvoiceTolerance',
          ErrorTolerance,
          true
        ),
        /**
         * Static representation of the {@link overUnderDeliveryInventoryMovementJournalNameId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OVER_UNDER_DELIVERY_INVENTORY_MOVEMENT_JOURNAL_NAME_ID:
          fieldBuilder.buildEdmTypeField(
            'OverUnderDeliveryInventoryMovementJournalNameId',
            'Edm.String',
            true
          ),
        /**
         * Static representation of the {@link closedGoodsInTransitOrderReceiptGracePeriodDays} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CLOSED_GOODS_IN_TRANSIT_ORDER_RECEIPT_GRACE_PERIOD_DAYS:
          fieldBuilder.buildEdmTypeField(
            'ClosedGoodsInTransitOrderReceiptGracePeriodDays',
            'Edm.Int32',
            false
          ),
        /**
         * Static representation of the {@link willLandedCostCalculationAllowZeroCost} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WILL_LANDED_COST_CALCULATION_ALLOW_ZERO_COST:
          fieldBuilder.buildEnumField(
            'WillLandedCostCalculationAllowZeroCost',
            NoYes,
            true
          ),
        /**
         * Static representation of the {@link multipleVendorInvoicePerCostTransactionTolerance} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MULTIPLE_VENDOR_INVOICE_PER_COST_TRANSACTION_TOLERANCE:
          fieldBuilder.buildEnumField(
            'MultipleVendorInvoicePerCostTransactionTolerance',
            ErrorTolerance,
            true
          ),
        /**
         * Static representation of the {@link willLandedCostCalculationUseShippingExchangeRate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WILL_LANDED_COST_CALCULATION_USE_SHIPPING_EXCHANGE_RATE:
          fieldBuilder.buildEnumField(
            'WillLandedCostCalculationUseShippingExchangeRate',
            NoYes,
            true
          ),
        /**
         * Static representation of the {@link costCalculationMissingItemVolumeTolerance} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COST_CALCULATION_MISSING_ITEM_VOLUME_TOLERANCE:
          fieldBuilder.buildEnumField(
            'CostCalculationMissingItemVolumeTolerance',
            ErrorTolerance,
            true
          ),
        /**
         * Static representation of the {@link costedShipmentStatusId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COSTED_SHIPMENT_STATUS_ID: fieldBuilder.buildEdmTypeField(
          'CostedShipmentStatusId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link rentalContainerJourneyTemplateId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RENTAL_CONTAINER_JOURNEY_TEMPLATE_ID: fieldBuilder.buildEdmTypeField(
          'RentalContainerJourneyTemplateId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link costingReadyShipmentStatusId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COSTING_READY_SHIPMENT_STATUS_ID: fieldBuilder.buildEdmTypeField(
          'CostingReadyShipmentStatusId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link multipleWarehousePerVoyageTolerance} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MULTIPLE_WAREHOUSE_PER_VOYAGE_TOLERANCE: fieldBuilder.buildEnumField(
          'MultipleWarehousePerVoyageTolerance',
          ErrorTolerance,
          true
        ),
        /**
         * Static representation of the {@link isContainerHeaderCartonsAutomaticallyUpdated} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_CONTAINER_HEADER_CARTONS_AUTOMATICALLY_UPDATED:
          fieldBuilder.buildEnumField(
            'IsContainerHeaderCartonsAutomaticallyUpdated',
            NoYes,
            true
          ),
        /**
         * Static representation of the {@link allowCreateVoyageInBatch} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ALLOW_CREATE_VOYAGE_IN_BATCH: fieldBuilder.buildEnumField(
          'AllowCreateVoyageInBatch',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link inTransitShipmentStatusId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IN_TRANSIT_SHIPMENT_STATUS_ID: fieldBuilder.buildEdmTypeField(
          'InTransitShipmentStatusId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link willCostAccrualUseVendorInvoiceVoucherNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WILL_COST_ACCRUAL_USE_VENDOR_INVOICE_VOUCHER_NUMBER:
          fieldBuilder.buildEnumField(
            'WillCostAccrualUseVendorInvoiceVoucherNumber',
            NoYes,
            true
          ),
        /**
         * Static representation of the {@link generateVoyageEditorDataManually} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GENERATE_VOYAGE_EDITOR_DATA_MANUALLY: fieldBuilder.buildEnumField(
          'GenerateVoyageEditorDataManually',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link willMovingAveragePostAdjustmentAsVariance} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WILL_MOVING_AVERAGE_POST_ADJUSTMENT_AS_VARIANCE:
          fieldBuilder.buildEnumField(
            'WillMovingAveragePostAdjustmentAsVariance',
            NoYes,
            true
          ),
        /**
         * Static representation of the {@link costAdjustmentAccountingDateRule} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COST_ADJUSTMENT_ACCOUNTING_DATE_RULE: fieldBuilder.buildEnumField(
          'CostAdjustmentAccountingDateRule',
          ItmCostPostingDatePrinciple,
          true
        ),
        /**
         * Static representation of the {@link singletonKey} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SINGLETON_KEY: fieldBuilder.buildEdmTypeField(
          'SingletonKey',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link purchaseOrderLineQuantityUpdateTolerance} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PURCHASE_ORDER_LINE_QUANTITY_UPDATE_TOLERANCE:
          fieldBuilder.buildEnumField(
            'PurchaseOrderLineQuantityUpdateTolerance',
            ErrorTolerance,
            true
          ),
        /**
         * Static representation of the {@link underDeliveryInventoryTransferJournalNameId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        UNDER_DELIVERY_INVENTORY_TRANSFER_JOURNAL_NAME_ID:
          fieldBuilder.buildEdmTypeField(
            'UnderDeliveryInventoryTransferJournalNameId',
            'Edm.String',
            true
          ),
        /**
         * Static representation of the {@link keepAutoTrackingDimNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        KEEP_AUTO_TRACKING_DIM_NUMBER: fieldBuilder.buildEnumField(
          'KeepAutoTrackingDimNumber',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link willCostingUseLandedCostTypeChargeAccrualMainAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WILL_COSTING_USE_LANDED_COST_TYPE_CHARGE_ACCRUAL_MAIN_ACCOUNT:
          fieldBuilder.buildEnumField(
            'WillCostingUseLandedCostTypeChargeAccrualMainAccount',
            NoYes,
            true
          ),
        /**
         * Static representation of the {@link multipleDeliveryModePerVoyageTolerance} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MULTIPLE_DELIVERY_MODE_PER_VOYAGE_TOLERANCE:
          fieldBuilder.buildEnumField(
            'MultipleDeliveryModePerVoyageTolerance',
            ErrorTolerance,
            true
          ),
        /**
         * Static representation of the {@link preCostedShipmentStatusId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRE_COSTED_SHIPMENT_STATUS_ID: fieldBuilder.buildEdmTypeField(
          'PreCostedShipmentStatusId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link voyageCreatorVolumeTolerancePercentage} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VOYAGE_CREATOR_VOLUME_TOLERANCE_PERCENTAGE:
          fieldBuilder.buildEdmTypeField(
            'VoyageCreatorVolumeTolerancePercentage',
            'Edm.Decimal',
            false
          ),
        /**
         * Static representation of the {@link itemArrivalJournalNameId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ITEM_ARRIVAL_JOURNAL_NAME_ID: fieldBuilder.buildEdmTypeField(
          'ItemArrivalJournalNameId',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', ShippingParameters)
      };
    }

    return this._schema;
  }
}
