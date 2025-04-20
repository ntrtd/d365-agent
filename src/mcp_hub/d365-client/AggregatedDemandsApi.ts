/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { AggregatedDemands } from './AggregatedDemands';
import { AggregatedDemandsRequestBuilder } from './AggregatedDemandsRequestBuilder';
import { ReqDemPlanDemandCategory } from './ReqDemPlanDemandCategory';
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
export class AggregatedDemandsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<AggregatedDemands<DeSerializersT>, DeSerializersT>
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
  ): AggregatedDemandsApi<DeSerializersT> {
    return new AggregatedDemandsApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = AggregatedDemands;

  requestBuilder(): AggregatedDemandsRequestBuilder<DeSerializersT> {
    return new AggregatedDemandsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    AggregatedDemands<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<AggregatedDemands<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<AggregatedDemands<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<
    typeof AggregatedDemands,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        AggregatedDemands,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      AggregatedDemands<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    DEMAND_CATEGORY: EnumField<
      AggregatedDemands<DeSerializers>,
      DeSerializersT,
      ReqDemPlanDemandCategory,
      true,
      true
    >;
    CUSTOMER_ADDRESS_COUNTRY_REGION_CODE: OrderableEdmTypeField<
      AggregatedDemands<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    CUSTOMER_ADDRESS_STATE_ID: OrderableEdmTypeField<
      AggregatedDemands<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    CUSTOMER_GROUP_ID: OrderableEdmTypeField<
      AggregatedDemands<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    CUSTOMER_ACCOUNT_NUMBER: OrderableEdmTypeField<
      AggregatedDemands<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PRODUCT_ALLOCATION_KEY_ID: OrderableEdmTypeField<
      AggregatedDemands<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PRODUCT_CONFIGURATION_ID: OrderableEdmTypeField<
      AggregatedDemands<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ITEM_NUMBER: OrderableEdmTypeField<
      AggregatedDemands<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PRODUCT_COLOR_ID: OrderableEdmTypeField<
      AggregatedDemands<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PRODUCT_SIZE_ID: OrderableEdmTypeField<
      AggregatedDemands<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PRODUCT_STYLE_ID: OrderableEdmTypeField<
      AggregatedDemands<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    DELIVERING_WAREHOUSE_ID: OrderableEdmTypeField<
      AggregatedDemands<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    DELIVERING_SITE_ID: OrderableEdmTypeField<
      AggregatedDemands<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    INVENTORY_STATUS_ID: OrderableEdmTypeField<
      AggregatedDemands<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    DEMAND_DATE: OrderableEdmTypeField<
      AggregatedDemands<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    DEMAND_QUANTITY_CONFIDENCE_INTERVAL_LOWER_BOUND: OrderableEdmTypeField<
      AggregatedDemands<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    DEMAND_QUANTITY_CONFIDENCE_INTERVAL_UPPER_BOUND: OrderableEdmTypeField<
      AggregatedDemands<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    DEMAND_QUANTITY: OrderableEdmTypeField<
      AggregatedDemands<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ALL_FIELDS: AllFields<AggregatedDemands<DeSerializers>>;
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
         * Static representation of the {@link demandCategory} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEMAND_CATEGORY: fieldBuilder.buildEnumField(
          'DemandCategory',
          ReqDemPlanDemandCategory,
          true
        ),
        /**
         * Static representation of the {@link customerAddressCountryRegionCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUSTOMER_ADDRESS_COUNTRY_REGION_CODE: fieldBuilder.buildEdmTypeField(
          'CustomerAddressCountryRegionCode',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link customerAddressStateId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUSTOMER_ADDRESS_STATE_ID: fieldBuilder.buildEdmTypeField(
          'CustomerAddressStateId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link customerGroupId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUSTOMER_GROUP_ID: fieldBuilder.buildEdmTypeField(
          'CustomerGroupId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link customerAccountNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUSTOMER_ACCOUNT_NUMBER: fieldBuilder.buildEdmTypeField(
          'CustomerAccountNumber',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link productAllocationKeyId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_ALLOCATION_KEY_ID: fieldBuilder.buildEdmTypeField(
          'ProductAllocationKeyId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link productConfigurationId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_CONFIGURATION_ID: fieldBuilder.buildEdmTypeField(
          'ProductConfigurationId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link itemNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ITEM_NUMBER: fieldBuilder.buildEdmTypeField(
          'ItemNumber',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link productColorId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_COLOR_ID: fieldBuilder.buildEdmTypeField(
          'ProductColorId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link productSizeId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_SIZE_ID: fieldBuilder.buildEdmTypeField(
          'ProductSizeId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link productStyleId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_STYLE_ID: fieldBuilder.buildEdmTypeField(
          'ProductStyleId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link deliveringWarehouseId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELIVERING_WAREHOUSE_ID: fieldBuilder.buildEdmTypeField(
          'DeliveringWarehouseId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link deliveringSiteId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELIVERING_SITE_ID: fieldBuilder.buildEdmTypeField(
          'DeliveringSiteId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link inventoryStatusId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVENTORY_STATUS_ID: fieldBuilder.buildEdmTypeField(
          'InventoryStatusId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link demandDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEMAND_DATE: fieldBuilder.buildEdmTypeField(
          'DemandDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link demandQuantityConfidenceIntervalLowerBound} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEMAND_QUANTITY_CONFIDENCE_INTERVAL_LOWER_BOUND:
          fieldBuilder.buildEdmTypeField(
            'DemandQuantityConfidenceIntervalLowerBound',
            'Edm.Decimal',
            false
          ),
        /**
         * Static representation of the {@link demandQuantityConfidenceIntervalUpperBound} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEMAND_QUANTITY_CONFIDENCE_INTERVAL_UPPER_BOUND:
          fieldBuilder.buildEdmTypeField(
            'DemandQuantityConfidenceIntervalUpperBound',
            'Edm.Decimal',
            false
          ),
        /**
         * Static representation of the {@link demandQuantity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEMAND_QUANTITY: fieldBuilder.buildEdmTypeField(
          'DemandQuantity',
          'Edm.Decimal',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', AggregatedDemands)
      };
    }

    return this._schema;
  }
}
