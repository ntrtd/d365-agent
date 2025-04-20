/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ProductGroups } from './ProductGroups';
import { ProductGroupsRequestBuilder } from './ProductGroupsRequestBuilder';
import { SupplyForecastEntriesApi } from './SupplyForecastEntriesApi';
import { ReleasedProductsV2Api } from './ReleasedProductsV2Api';
import { RecSetupBasesApi } from './RecSetupBasesApi';
import { PlannedOrdersApi } from './PlannedOrdersApi';
import { RevRecRevenueType } from './RevRecRevenueType';
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
  EnumField,
  OneToManyLink
} from '@sap-cloud-sdk/odata-v4';
export class ProductGroupsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<ProductGroups<DeSerializersT>, DeSerializersT>
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
  ): ProductGroupsApi<DeSerializersT> {
    return new ProductGroupsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link supplyForecastEntries} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SUPPLY_FORECAST_ENTRIES: OneToManyLink<
      ProductGroups<DeSerializersT>,
      DeSerializersT,
      SupplyForecastEntriesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link releasedProductsV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RELEASED_PRODUCTS_V_2: OneToManyLink<
      ProductGroups<DeSerializersT>,
      DeSerializersT,
      ReleasedProductsV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link revRecSetupBasis} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    REV_REC_SETUP_BASIS: OneToManyLink<
      ProductGroups<DeSerializersT>,
      DeSerializersT,
      RecSetupBasesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link plannedOrders} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PLANNED_ORDERS: OneToManyLink<
      ProductGroups<DeSerializersT>,
      DeSerializersT,
      PlannedOrdersApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      SupplyForecastEntriesApi<DeSerializersT>,
      ReleasedProductsV2Api<DeSerializersT>,
      RecSetupBasesApi<DeSerializersT>,
      PlannedOrdersApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      SUPPLY_FORECAST_ENTRIES: new OneToManyLink(
        'SupplyForecastEntries',
        this,
        linkedApis[0]
      ),
      RELEASED_PRODUCTS_V_2: new OneToManyLink(
        'ReleasedProductsV2',
        this,
        linkedApis[1]
      ),
      REV_REC_SETUP_BASIS: new OneToManyLink(
        'RevRecSetupBasis',
        this,
        linkedApis[2]
      ),
      PLANNED_ORDERS: new OneToManyLink('PlannedOrders', this, linkedApis[3])
    };
    return this;
  }

  entityConstructor = ProductGroups;

  requestBuilder(): ProductGroupsRequestBuilder<DeSerializersT> {
    return new ProductGroupsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    ProductGroups<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<ProductGroups<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<ProductGroups<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof ProductGroups, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(ProductGroups, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      ProductGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    GROUP_ID: OrderableEdmTypeField<
      ProductGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    DEFAULT_FORECAST_ALLOCATION_KEY_ID: OrderableEdmTypeField<
      ProductGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    GROUP_NAME: OrderableEdmTypeField<
      ProductGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DEFAULT_SALES_SALES_TAX_ITEM_GROUP_CODE: OrderableEdmTypeField<
      ProductGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DEFAULT_PURCHASE_SALES_TAX_ITEM_GROUP_CODE: OrderableEdmTypeField<
      ProductGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SHIPMENT_PHYSICAL_LOAD_TEMPLATE_ID: OrderableEdmTypeField<
      ProductGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REV_REC_REVENUE_TYPE: EnumField<
      ProductGroups<DeSerializers>,
      DeSerializersT,
      RevRecRevenueType,
      true,
      true
    >;
    REV_REC_DEFAULT_REVENUE_RECOGNITION_SCHEDULE: OrderableEdmTypeField<
      ProductGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REV_REC_MEDIAN_PRICE: EnumField<
      ProductGroups<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    REV_REC_MEDIAN_PRICE_MINIMUM_TOLERANCE: OrderableEdmTypeField<
      ProductGroups<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    REV_REC_MEDIAN_PRICE_MAXIMUM_TOLERANCE: OrderableEdmTypeField<
      ProductGroups<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    REV_REC_EXCLUDE_FROM_CARVE_OUT: EnumField<
      ProductGroups<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    REV_REC_REVENUE_RECOGNITION_ENABLED: EnumField<
      ProductGroups<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link supplyForecastEntries} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SUPPLY_FORECAST_ENTRIES: OneToManyLink<
      ProductGroups<DeSerializersT>,
      DeSerializersT,
      SupplyForecastEntriesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link releasedProductsV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RELEASED_PRODUCTS_V_2: OneToManyLink<
      ProductGroups<DeSerializersT>,
      DeSerializersT,
      ReleasedProductsV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link revRecSetupBasis} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    REV_REC_SETUP_BASIS: OneToManyLink<
      ProductGroups<DeSerializersT>,
      DeSerializersT,
      RecSetupBasesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link plannedOrders} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PLANNED_ORDERS: OneToManyLink<
      ProductGroups<DeSerializersT>,
      DeSerializersT,
      PlannedOrdersApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<ProductGroups<DeSerializers>>;
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
         * Static representation of the {@link groupId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GROUP_ID: fieldBuilder.buildEdmTypeField(
          'GroupId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link defaultForecastAllocationKeyId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFAULT_FORECAST_ALLOCATION_KEY_ID: fieldBuilder.buildEdmTypeField(
          'DefaultForecastAllocationKeyId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link groupName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GROUP_NAME: fieldBuilder.buildEdmTypeField(
          'GroupName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link defaultSalesSalesTaxItemGroupCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFAULT_SALES_SALES_TAX_ITEM_GROUP_CODE: fieldBuilder.buildEdmTypeField(
          'DefaultSalesSalesTaxItemGroupCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link defaultPurchaseSalesTaxItemGroupCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFAULT_PURCHASE_SALES_TAX_ITEM_GROUP_CODE:
          fieldBuilder.buildEdmTypeField(
            'DefaultPurchaseSalesTaxItemGroupCode',
            'Edm.String',
            true
          ),
        /**
         * Static representation of the {@link shipmentPhysicalLoadTemplateId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHIPMENT_PHYSICAL_LOAD_TEMPLATE_ID: fieldBuilder.buildEdmTypeField(
          'ShipmentPhysicalLoadTemplateId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link revRecRevenueType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REV_REC_REVENUE_TYPE: fieldBuilder.buildEnumField(
          'RevRecRevenueType',
          RevRecRevenueType,
          true
        ),
        /**
         * Static representation of the {@link revRecDefaultRevenueRecognitionSchedule} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REV_REC_DEFAULT_REVENUE_RECOGNITION_SCHEDULE:
          fieldBuilder.buildEdmTypeField(
            'RevRecDefaultRevenueRecognitionSchedule',
            'Edm.String',
            true
          ),
        /**
         * Static representation of the {@link revRecMedianPrice} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REV_REC_MEDIAN_PRICE: fieldBuilder.buildEnumField(
          'RevRecMedianPrice',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link revRecMedianPriceMinimumTolerance} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REV_REC_MEDIAN_PRICE_MINIMUM_TOLERANCE: fieldBuilder.buildEdmTypeField(
          'RevRecMedianPriceMinimumTolerance',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link revRecMedianPriceMaximumTolerance} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REV_REC_MEDIAN_PRICE_MAXIMUM_TOLERANCE: fieldBuilder.buildEdmTypeField(
          'RevRecMedianPriceMaximumTolerance',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link revRecExcludeFromCarveOut} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REV_REC_EXCLUDE_FROM_CARVE_OUT: fieldBuilder.buildEnumField(
          'RevRecExcludeFromCarveOut',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link revRecRevenueRecognitionEnabled} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REV_REC_REVENUE_RECOGNITION_ENABLED: fieldBuilder.buildEnumField(
          'RevRecRevenueRecognitionEnabled',
          NoYes,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', ProductGroups)
      };
    }

    return this._schema;
  }
}
