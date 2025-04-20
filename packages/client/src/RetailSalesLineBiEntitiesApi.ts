/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RetailSalesLineBiEntities } from './RetailSalesLineBiEntities';
import { RetailSalesLineBiEntitiesRequestBuilder } from './RetailSalesLineBiEntitiesRequestBuilder';
import { RetailFulfillmentLineStatus } from './RetailFulfillmentLineStatus';
import { RetailSalesLineQuantityColumnsVersion } from './RetailSalesLineQuantityColumnsVersion';
import { NoYes } from './NoYes';
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
export class RetailSalesLineBiEntitiesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<RetailSalesLineBiEntities<DeSerializersT>, DeSerializersT>
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
  ): RetailSalesLineBiEntitiesApi<DeSerializersT> {
    return new RetailSalesLineBiEntitiesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = RetailSalesLineBiEntities;

  requestBuilder(): RetailSalesLineBiEntitiesRequestBuilder<DeSerializersT> {
    return new RetailSalesLineBiEntitiesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    RetailSalesLineBiEntities<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      RetailSalesLineBiEntities<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    RetailSalesLineBiEntities<DeSerializersT>,
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
    typeof RetailSalesLineBiEntities,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        RetailSalesLineBiEntities,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      RetailSalesLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SALES_LINE: OrderableEdmTypeField<
      RetailSalesLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    FULFILLMENT_STATUS: EnumField<
      RetailSalesLineBiEntities<DeSerializers>,
      DeSerializersT,
      RetailFulfillmentLineStatus,
      true,
      true
    >;
    FULFILLMENT_STORE_ID: OrderableEdmTypeField<
      RetailSalesLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PICKUP_END_TIME: OrderableEdmTypeField<
      RetailSalesLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    PICKUP_START_TIME: OrderableEdmTypeField<
      RetailSalesLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    QUANTITY_PICKED: OrderableEdmTypeField<
      RetailSalesLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    QUANTITY_PACKED: OrderableEdmTypeField<
      RetailSalesLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    QUANTITY_INVOICED: OrderableEdmTypeField<
      RetailSalesLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    QUANTITY_NOT_PROCESSED: OrderableEdmTypeField<
      RetailSalesLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    QUANTITY_COLUMNS_VERSION: EnumField<
      RetailSalesLineBiEntities<DeSerializers>,
      DeSerializersT,
      RetailSalesLineQuantityColumnsVersion,
      true,
      true
    >;
    QUANTITY_PHYSICALLY_RESERVED: OrderableEdmTypeField<
      RetailSalesLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    INFORMATION: OrderableEdmTypeField<
      RetailSalesLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_PRICE_LOCKED: EnumField<
      RetailSalesLineBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    PERIODIC_DISCOUNT: OrderableEdmTypeField<
      RetailSalesLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    SUB_INFOCODE_ID: OrderableEdmTypeField<
      RetailSalesLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SYS_DATA_AREA_ID: OrderableEdmTypeField<
      RetailSalesLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SYS_REC_VERSION: OrderableEdmTypeField<
      RetailSalesLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    RETAIL_PRODUCT_LIST_LINE_UPDATE_ID: OrderableEdmTypeField<
      RetailSalesLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LINE_DSC_AMOUNT: OrderableEdmTypeField<
      RetailSalesLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    INVENT_TRANS_ID: OrderableEdmTypeField<
      RetailSalesLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TAX_EXEMPT_PRICE_INCLUSIVE_REDUCTION_AMOUNT: OrderableEdmTypeField<
      RetailSalesLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    LINE_MANUAL_DISCOUNT_PERCENTAGE: OrderableEdmTypeField<
      RetailSalesLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PERIODIC_PERCENTAGE_DISCOUNT: OrderableEdmTypeField<
      RetailSalesLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    LISTING_ID: OrderableEdmTypeField<
      RetailSalesLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SOURCE_KEY: OrderableEdmTypeField<
      RetailSalesLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    TOTAL_DISCOUNT: OrderableEdmTypeField<
      RetailSalesLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    RETURN_REASON_CODE_ID: OrderableEdmTypeField<
      RetailSalesLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LINE_MANUAL_DISCOUNT_AMOUNT: OrderableEdmTypeField<
      RetailSalesLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    TENDER_DISCOUNT: OrderableEdmTypeField<
      RetailSalesLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    TOTAL_PCT_DISCOUNT: OrderableEdmTypeField<
      RetailSalesLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    IS_PRICE_KEYED_IN: EnumField<
      RetailSalesLineBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    LINE_PERCENTAGE_DISCOUNT: OrderableEdmTypeField<
      RetailSalesLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    TAX_EXEMPT_PRICE_INCLUSIVE_ORIGINAL_PRICE: OrderableEdmTypeField<
      RetailSalesLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ORIGINAL_PRICE: OrderableEdmTypeField<
      RetailSalesLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    INFOCODE_ID: OrderableEdmTypeField<
      RetailSalesLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TENDER_DISCOUNT_PERCENTAGE: OrderableEdmTypeField<
      RetailSalesLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    IS_PRICE_OVERRIDDEN: EnumField<
      RetailSalesLineBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    PRICE_OVERRIDE_REASON_CODE: OrderableEdmTypeField<
      RetailSalesLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CATALOG: OrderableEdmTypeField<
      RetailSalesLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    ALL_FIELDS: AllFields<RetailSalesLineBiEntities<DeSerializers>>;
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
         * Static representation of the {@link salesLine} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_LINE: fieldBuilder.buildEdmTypeField(
          'SalesLine',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link fulfillmentStatus} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FULFILLMENT_STATUS: fieldBuilder.buildEnumField(
          'FulfillmentStatus',
          RetailFulfillmentLineStatus,
          true
        ),
        /**
         * Static representation of the {@link fulfillmentStoreId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FULFILLMENT_STORE_ID: fieldBuilder.buildEdmTypeField(
          'FulfillmentStoreId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link pickupEndTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PICKUP_END_TIME: fieldBuilder.buildEdmTypeField(
          'PickupEndTime',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link pickupStartTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PICKUP_START_TIME: fieldBuilder.buildEdmTypeField(
          'PickupStartTime',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link quantityPicked} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        QUANTITY_PICKED: fieldBuilder.buildEdmTypeField(
          'QuantityPicked',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link quantityPacked} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        QUANTITY_PACKED: fieldBuilder.buildEdmTypeField(
          'QuantityPacked',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link quantityInvoiced} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        QUANTITY_INVOICED: fieldBuilder.buildEdmTypeField(
          'QuantityInvoiced',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link quantityNotProcessed} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        QUANTITY_NOT_PROCESSED: fieldBuilder.buildEdmTypeField(
          'QuantityNotProcessed',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link quantityColumnsVersion} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        QUANTITY_COLUMNS_VERSION: fieldBuilder.buildEnumField(
          'QuantityColumnsVersion',
          RetailSalesLineQuantityColumnsVersion,
          true
        ),
        /**
         * Static representation of the {@link quantityPhysicallyReserved} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        QUANTITY_PHYSICALLY_RESERVED: fieldBuilder.buildEdmTypeField(
          'QuantityPhysicallyReserved',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link information} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INFORMATION: fieldBuilder.buildEdmTypeField(
          'Information',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link isPriceLocked} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_PRICE_LOCKED: fieldBuilder.buildEnumField(
          'IsPriceLocked',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link periodicDiscount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PERIODIC_DISCOUNT: fieldBuilder.buildEdmTypeField(
          'PeriodicDiscount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link subInfocodeId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUB_INFOCODE_ID: fieldBuilder.buildEdmTypeField(
          'SubInfocodeId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link sysDataAreaId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SYS_DATA_AREA_ID: fieldBuilder.buildEdmTypeField(
          'SysDataAreaId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link sysRecVersion} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SYS_REC_VERSION: fieldBuilder.buildEdmTypeField(
          'SysRecVersion',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link retailProductListLineUpdateId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RETAIL_PRODUCT_LIST_LINE_UPDATE_ID: fieldBuilder.buildEdmTypeField(
          'RetailProductListLineUpdateId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link lineDscAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LINE_DSC_AMOUNT: fieldBuilder.buildEdmTypeField(
          'LineDscAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link inventTransId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVENT_TRANS_ID: fieldBuilder.buildEdmTypeField(
          'InventTransId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link taxExemptPriceInclusiveReductionAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_EXEMPT_PRICE_INCLUSIVE_REDUCTION_AMOUNT:
          fieldBuilder.buildEdmTypeField(
            'TaxExemptPriceInclusiveReductionAmount',
            'Edm.Decimal',
            false
          ),
        /**
         * Static representation of the {@link lineManualDiscountPercentage} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LINE_MANUAL_DISCOUNT_PERCENTAGE: fieldBuilder.buildEdmTypeField(
          'LineManualDiscountPercentage',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link periodicPercentageDiscount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PERIODIC_PERCENTAGE_DISCOUNT: fieldBuilder.buildEdmTypeField(
          'PeriodicPercentageDiscount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link listingId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LISTING_ID: fieldBuilder.buildEdmTypeField(
          'ListingId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link sourceKey} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SOURCE_KEY: fieldBuilder.buildEdmTypeField(
          'SourceKey',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link totalDiscount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TOTAL_DISCOUNT: fieldBuilder.buildEdmTypeField(
          'TotalDiscount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link returnReasonCodeId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RETURN_REASON_CODE_ID: fieldBuilder.buildEdmTypeField(
          'ReturnReasonCodeId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link lineManualDiscountAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LINE_MANUAL_DISCOUNT_AMOUNT: fieldBuilder.buildEdmTypeField(
          'LineManualDiscountAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link tenderDiscount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TENDER_DISCOUNT: fieldBuilder.buildEdmTypeField(
          'TenderDiscount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link totalPctDiscount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TOTAL_PCT_DISCOUNT: fieldBuilder.buildEdmTypeField(
          'TotalPctDiscount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link isPriceKeyedIn} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_PRICE_KEYED_IN: fieldBuilder.buildEnumField(
          'IsPriceKeyedIn',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link linePercentageDiscount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LINE_PERCENTAGE_DISCOUNT: fieldBuilder.buildEdmTypeField(
          'LinePercentageDiscount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link taxExemptPriceInclusiveOriginalPrice} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_EXEMPT_PRICE_INCLUSIVE_ORIGINAL_PRICE:
          fieldBuilder.buildEdmTypeField(
            'TaxExemptPriceInclusiveOriginalPrice',
            'Edm.Decimal',
            false
          ),
        /**
         * Static representation of the {@link originalPrice} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ORIGINAL_PRICE: fieldBuilder.buildEdmTypeField(
          'OriginalPrice',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link infocodeId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INFOCODE_ID: fieldBuilder.buildEdmTypeField(
          'InfocodeId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link tenderDiscountPercentage} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TENDER_DISCOUNT_PERCENTAGE: fieldBuilder.buildEdmTypeField(
          'TenderDiscountPercentage',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link isPriceOverridden} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_PRICE_OVERRIDDEN: fieldBuilder.buildEnumField(
          'IsPriceOverridden',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link priceOverrideReasonCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRICE_OVERRIDE_REASON_CODE: fieldBuilder.buildEdmTypeField(
          'PriceOverrideReasonCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link catalog} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CATALOG: fieldBuilder.buildEdmTypeField('Catalog', 'Edm.Int64', false),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', RetailSalesLineBiEntities)
      };
    }

    return this._schema;
  }
}
