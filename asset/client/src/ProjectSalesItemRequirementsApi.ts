/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ProjectSalesItemRequirements } from './ProjectSalesItemRequirements';
import { ProjectSalesItemRequirementsRequestBuilder } from './ProjectSalesItemRequirementsRequestBuilder';
import { DimensionSetsApi } from './DimensionSetsApi';
import { DimensionCombinationsApi } from './DimensionCombinationsApi';
import { TradeLineDlvType } from './TradeLineDlvType';
import { NoYes } from './NoYes';
import { InventRefType } from './InventRefType';
import { Timezone } from './Timezone';
import { SalesDeliveryDateControlType } from './SalesDeliveryDateControlType';
import { LineDeliveryType } from './LineDeliveryType';
import { ItemReservation } from './ItemReservation';
import { SalesStatus } from './SalesStatus';
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
  OneToOneLink
} from '@sap-cloud-sdk/odata-v4';
export class ProjectSalesItemRequirementsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<ProjectSalesItemRequirements<DeSerializersT>, DeSerializersT>
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
  ): ProjectSalesItemRequirementsApi<DeSerializersT> {
    return new ProjectSalesItemRequirementsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link dimensionSet} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DIMENSION_SET: OneToOneLink<
      ProjectSalesItemRequirements<DeSerializersT>,
      DeSerializersT,
      DimensionSetsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link dimensionCombination} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DIMENSION_COMBINATION: OneToOneLink<
      ProjectSalesItemRequirements<DeSerializersT>,
      DeSerializersT,
      DimensionCombinationsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      DimensionSetsApi<DeSerializersT>,
      DimensionCombinationsApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      DIMENSION_SET: new OneToOneLink('DimensionSet', this, linkedApis[0]),
      DIMENSION_COMBINATION: new OneToOneLink(
        'DimensionCombination',
        this,
        linkedApis[1]
      )
    };
    return this;
  }

  entityConstructor = ProjectSalesItemRequirements;

  requestBuilder(): ProjectSalesItemRequirementsRequestBuilder<DeSerializersT> {
    return new ProjectSalesItemRequirementsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    ProjectSalesItemRequirements<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      ProjectSalesItemRequirements<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    ProjectSalesItemRequirements<DeSerializersT>,
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
    typeof ProjectSalesItemRequirements,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        ProjectSalesItemRequirements,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      ProjectSalesItemRequirements<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PROJECT_TRANSACTION_ID: OrderableEdmTypeField<
      ProjectSalesItemRequirements<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    QUANTITY_ORDERED: OrderableEdmTypeField<
      ProjectSalesItemRequirements<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    DELIVERY_TYPE: EnumField<
      ProjectSalesItemRequirements<DeSerializers>,
      DeSerializersT,
      TradeLineDlvType,
      true,
      true
    >;
    ITEM_ROUTE_ID: OrderableEdmTypeField<
      ProjectSalesItemRequirements<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRICE_UNIT: OrderableEdmTypeField<
      ProjectSalesItemRequirements<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    INVOICE_ACCOUNT: OrderableEdmTypeField<
      ProjectSalesItemRequirements<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FORMATTED_DELVERY_ADDRESS: OrderableEdmTypeField<
      ProjectSalesItemRequirements<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PROJECT_CATEGORY_ID: OrderableEdmTypeField<
      ProjectSalesItemRequirements<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DELIVERY_ADDRESS_DESCRIPTION: OrderableEdmTypeField<
      ProjectSalesItemRequirements<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MODE_OF_DELIVERY: OrderableEdmTypeField<
      ProjectSalesItemRequirements<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SHIPPING_DATE_REQUESTED: OrderableEdmTypeField<
      ProjectSalesItemRequirements<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    SHIPPING_WAREHOUSE_ID: OrderableEdmTypeField<
      ProjectSalesItemRequirements<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COST_PRICE: OrderableEdmTypeField<
      ProjectSalesItemRequirements<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    IS_STATUS_STOPPED: EnumField<
      ProjectSalesItemRequirements<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    PRODUCT_STYLE_ID: OrderableEdmTypeField<
      ProjectSalesItemRequirements<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REFERENCE_LOT: OrderableEdmTypeField<
      ProjectSalesItemRequirements<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRODUCT_CONFIGURATION_ID: OrderableEdmTypeField<
      ProjectSalesItemRequirements<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INVENT_TRANSACTION_ID: OrderableEdmTypeField<
      ProjectSalesItemRequirements<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TAX_ITEM_GROUP: OrderableEdmTypeField<
      ProjectSalesItemRequirements<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_PARTIAL_DELIVERY_PREVENTED: EnumField<
      ProjectSalesItemRequirements<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ITEM_BATCH_NUMBER: OrderableEdmTypeField<
      ProjectSalesItemRequirements<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DELIVERY_ADDRESS_COUNTRY_REGION_ID: OrderableEdmTypeField<
      ProjectSalesItemRequirements<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DELIVERY_ADDRESS_LATITUDE: OrderableEdmTypeField<
      ProjectSalesItemRequirements<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    DELIVERY_ADDRESS_CITY: OrderableEdmTypeField<
      ProjectSalesItemRequirements<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PROJECT_ID: OrderableEdmTypeField<
      ProjectSalesItemRequirements<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PROJECT_LINE_PROPERTY_ID: OrderableEdmTypeField<
      ProjectSalesItemRequirements<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DELIVERY_ADDRESS_DISTRICT_NAME: OrderableEdmTypeField<
      ProjectSalesItemRequirements<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DELIVERY_ADDRESS_COUNTY_ID: OrderableEdmTypeField<
      ProjectSalesItemRequirements<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRODUCT_SIZE_ID: OrderableEdmTypeField<
      ProjectSalesItemRequirements<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SHIPPING_DATE_CONFIRMED: OrderableEdmTypeField<
      ProjectSalesItemRequirements<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    DELIVERY_ADDRESS_ZIP_CODE: OrderableEdmTypeField<
      ProjectSalesItemRequirements<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    AUTO_BATCH_RESERVATION: EnumField<
      ProjectSalesItemRequirements<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    DELIVERY_ADDRESS_DUNS_NUMBER: OrderableEdmTypeField<
      ProjectSalesItemRequirements<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REFERENCE_NUMBER: OrderableEdmTypeField<
      ProjectSalesItemRequirements<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REMAIN_INVENT_FINANCIAL: OrderableEdmTypeField<
      ProjectSalesItemRequirements<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    DELIVERY_ADDRESS_STREET_NUMBER: OrderableEdmTypeField<
      ProjectSalesItemRequirements<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SHIPPING_SITE_ID: OrderableEdmTypeField<
      ProjectSalesItemRequirements<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_DELIVERY_ADDRESS_PRIVATE: EnumField<
      ProjectSalesItemRequirements<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ORDERED_INVENTORY_STATUS_ID: OrderableEdmTypeField<
      ProjectSalesItemRequirements<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DELIVERY_ADDRESS_COUNTRY_REGION_ISO_CODE: OrderableEdmTypeField<
      ProjectSalesItemRequirements<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    NET_AMOUNT: OrderableEdmTypeField<
      ProjectSalesItemRequirements<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    BAR_CODE: OrderableEdmTypeField<
      ProjectSalesItemRequirements<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CURRENCY_CODE: OrderableEdmTypeField<
      ProjectSalesItemRequirements<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DELIVERY_ADDRESS_LOCATION_ID: OrderableEdmTypeField<
      ProjectSalesItemRequirements<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REFERENCE_TYPE: EnumField<
      ProjectSalesItemRequirements<DeSerializers>,
      DeSerializersT,
      InventRefType,
      true,
      true
    >;
    PRODUCT_VERSION_ID: OrderableEdmTypeField<
      ProjectSalesItemRequirements<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TAX_GROUP: OrderableEdmTypeField<
      ProjectSalesItemRequirements<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RECEIPT_DATE_REQUESTED: OrderableEdmTypeField<
      ProjectSalesItemRequirements<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    SALES_UNIT: OrderableEdmTypeField<
      ProjectSalesItemRequirements<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SALES_CATEGORY_NAME: OrderableEdmTypeField<
      ProjectSalesItemRequirements<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    OVERDELIVERY: OrderableEdmTypeField<
      ProjectSalesItemRequirements<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    DELIVERY_ADDRESS_STREET: OrderableEdmTypeField<
      ProjectSalesItemRequirements<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SCRAP: EnumField<
      ProjectSalesItemRequirements<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    IS_DELIVERY_ADDRESS_ORDER_SPECIFIC: EnumField<
      ProjectSalesItemRequirements<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    NAME: OrderableEdmTypeField<
      ProjectSalesItemRequirements<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ITEM_BOM_ID: OrderableEdmTypeField<
      ProjectSalesItemRequirements<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DELIVERY_NAME: OrderableEdmTypeField<
      ProjectSalesItemRequirements<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SALES_PRICE: OrderableEdmTypeField<
      ProjectSalesItemRequirements<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    SALES_QUANTITY: OrderableEdmTypeField<
      ProjectSalesItemRequirements<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    RECEIPT_DATE_CONFIRMED: OrderableEdmTypeField<
      ProjectSalesItemRequirements<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    ITEM_ID: OrderableEdmTypeField<
      ProjectSalesItemRequirements<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DELIVERY_ADDRESS_LONGITUDE: OrderableEdmTypeField<
      ProjectSalesItemRequirements<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    DELIVERY_ADDRESS_TIME_ZONE: EnumField<
      ProjectSalesItemRequirements<DeSerializers>,
      DeSerializersT,
      Timezone,
      true,
      true
    >;
    DEFAULT_DIMENSION_DISPLAY_VALUE: OrderableEdmTypeField<
      ProjectSalesItemRequirements<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRODUCT_COLOR_ID: OrderableEdmTypeField<
      ProjectSalesItemRequirements<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DELIVERY_DATE_CONTROL: EnumField<
      ProjectSalesItemRequirements<DeSerializers>,
      DeSerializersT,
      SalesDeliveryDateControlType,
      true,
      true
    >;
    DELIVERY_ADDRESS_STATE_ID: OrderableEdmTypeField<
      ProjectSalesItemRequirements<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SHIP_DATE: OrderableEdmTypeField<
      ProjectSalesItemRequirements<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    DELIVERY_BUILDING_COMPLIMENT: OrderableEdmTypeField<
      ProjectSalesItemRequirements<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    UNDERDELIVERY: OrderableEdmTypeField<
      ProjectSalesItemRequirements<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ACTIVITY_NUMBER: OrderableEdmTypeField<
      ProjectSalesItemRequirements<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DELIVERY_ADDRESS_POST_BOX: OrderableEdmTypeField<
      ProjectSalesItemRequirements<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DELIVERY_CFOP_ID: OrderableEdmTypeField<
      ProjectSalesItemRequirements<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LEDGER_DIMENSION_DISPLAY_VALUE: OrderableEdmTypeField<
      ProjectSalesItemRequirements<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INVENT_TRANSACTION_RETURN_ID: OrderableEdmTypeField<
      ProjectSalesItemRequirements<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REMAIN_INVENT_PHYSICAL: OrderableEdmTypeField<
      ProjectSalesItemRequirements<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    SERVICE_ORDER_ID: OrderableEdmTypeField<
      ProjectSalesItemRequirements<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LINE_DELIVERY_TYPE: EnumField<
      ProjectSalesItemRequirements<DeSerializers>,
      DeSerializersT,
      LineDeliveryType,
      true,
      true
    >;
    BAR_CODE_TYPE: OrderableEdmTypeField<
      ProjectSalesItemRequirements<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DELIVERY_TERMS: OrderableEdmTypeField<
      ProjectSalesItemRequirements<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RESERVATION: EnumField<
      ProjectSalesItemRequirements<DeSerializers>,
      DeSerializersT,
      ItemReservation,
      true,
      true
    >;
    INVENT_DELIVER_NOW: OrderableEdmTypeField<
      ProjectSalesItemRequirements<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    SALES_STATUS: EnumField<
      ProjectSalesItemRequirements<DeSerializers>,
      DeSerializersT,
      SalesStatus,
      true,
      true
    >;
    SAME_BATCH_SELECTION: EnumField<
      ProjectSalesItemRequirements<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link dimensionSet} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DIMENSION_SET: OneToOneLink<
      ProjectSalesItemRequirements<DeSerializersT>,
      DeSerializersT,
      DimensionSetsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link dimensionCombination} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DIMENSION_COMBINATION: OneToOneLink<
      ProjectSalesItemRequirements<DeSerializersT>,
      DeSerializersT,
      DimensionCombinationsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<ProjectSalesItemRequirements<DeSerializers>>;
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
         * Static representation of the {@link projectTransactionId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROJECT_TRANSACTION_ID: fieldBuilder.buildEdmTypeField(
          'ProjectTransactionId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link quantityOrdered} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        QUANTITY_ORDERED: fieldBuilder.buildEdmTypeField(
          'QuantityOrdered',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link deliveryType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELIVERY_TYPE: fieldBuilder.buildEnumField(
          'DeliveryType',
          TradeLineDlvType,
          true
        ),
        /**
         * Static representation of the {@link itemRouteId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ITEM_ROUTE_ID: fieldBuilder.buildEdmTypeField(
          'ItemRouteId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link priceUnit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRICE_UNIT: fieldBuilder.buildEdmTypeField(
          'PriceUnit',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link invoiceAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVOICE_ACCOUNT: fieldBuilder.buildEdmTypeField(
          'InvoiceAccount',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link formattedDelveryAddress} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FORMATTED_DELVERY_ADDRESS: fieldBuilder.buildEdmTypeField(
          'FormattedDelveryAddress',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link projectCategoryId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROJECT_CATEGORY_ID: fieldBuilder.buildEdmTypeField(
          'ProjectCategoryId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link deliveryAddressDescription} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELIVERY_ADDRESS_DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'DeliveryAddressDescription',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link modeOfDelivery} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MODE_OF_DELIVERY: fieldBuilder.buildEdmTypeField(
          'ModeOfDelivery',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link shippingDateRequested} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHIPPING_DATE_REQUESTED: fieldBuilder.buildEdmTypeField(
          'ShippingDateRequested',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link shippingWarehouseId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHIPPING_WAREHOUSE_ID: fieldBuilder.buildEdmTypeField(
          'ShippingWarehouseId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link costPrice} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COST_PRICE: fieldBuilder.buildEdmTypeField(
          'CostPrice',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link isStatusStopped} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_STATUS_STOPPED: fieldBuilder.buildEnumField(
          'IsStatusStopped',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link productStyleId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_STYLE_ID: fieldBuilder.buildEdmTypeField(
          'ProductStyleId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link referenceLot} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REFERENCE_LOT: fieldBuilder.buildEdmTypeField(
          'ReferenceLot',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link productConfigurationId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_CONFIGURATION_ID: fieldBuilder.buildEdmTypeField(
          'ProductConfigurationId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link inventTransactionId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVENT_TRANSACTION_ID: fieldBuilder.buildEdmTypeField(
          'InventTransactionId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link taxItemGroup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_ITEM_GROUP: fieldBuilder.buildEdmTypeField(
          'TaxItemGroup',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link isPartialDeliveryPrevented} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_PARTIAL_DELIVERY_PREVENTED: fieldBuilder.buildEnumField(
          'IsPartialDeliveryPrevented',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link itemBatchNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ITEM_BATCH_NUMBER: fieldBuilder.buildEdmTypeField(
          'ItemBatchNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link deliveryAddressCountryRegionId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELIVERY_ADDRESS_COUNTRY_REGION_ID: fieldBuilder.buildEdmTypeField(
          'DeliveryAddressCountryRegionId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link deliveryAddressLatitude} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELIVERY_ADDRESS_LATITUDE: fieldBuilder.buildEdmTypeField(
          'DeliveryAddressLatitude',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link deliveryAddressCity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELIVERY_ADDRESS_CITY: fieldBuilder.buildEdmTypeField(
          'DeliveryAddressCity',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link projectId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROJECT_ID: fieldBuilder.buildEdmTypeField(
          'ProjectId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link projectLinePropertyId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROJECT_LINE_PROPERTY_ID: fieldBuilder.buildEdmTypeField(
          'ProjectLinePropertyId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link deliveryAddressDistrictName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELIVERY_ADDRESS_DISTRICT_NAME: fieldBuilder.buildEdmTypeField(
          'DeliveryAddressDistrictName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link deliveryAddressCountyId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELIVERY_ADDRESS_COUNTY_ID: fieldBuilder.buildEdmTypeField(
          'DeliveryAddressCountyId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link productSizeId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_SIZE_ID: fieldBuilder.buildEdmTypeField(
          'ProductSizeId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link shippingDateConfirmed} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHIPPING_DATE_CONFIRMED: fieldBuilder.buildEdmTypeField(
          'ShippingDateConfirmed',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link deliveryAddressZipCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELIVERY_ADDRESS_ZIP_CODE: fieldBuilder.buildEdmTypeField(
          'DeliveryAddressZipCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link autoBatchReservation} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AUTO_BATCH_RESERVATION: fieldBuilder.buildEnumField(
          'AutoBatchReservation',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link deliveryAddressDunsNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELIVERY_ADDRESS_DUNS_NUMBER: fieldBuilder.buildEdmTypeField(
          'DeliveryAddressDunsNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link referenceNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REFERENCE_NUMBER: fieldBuilder.buildEdmTypeField(
          'ReferenceNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link remainInventFinancial} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REMAIN_INVENT_FINANCIAL: fieldBuilder.buildEdmTypeField(
          'RemainInventFinancial',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link deliveryAddressStreetNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELIVERY_ADDRESS_STREET_NUMBER: fieldBuilder.buildEdmTypeField(
          'DeliveryAddressStreetNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link shippingSiteId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHIPPING_SITE_ID: fieldBuilder.buildEdmTypeField(
          'ShippingSiteId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link isDeliveryAddressPrivate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_DELIVERY_ADDRESS_PRIVATE: fieldBuilder.buildEnumField(
          'IsDeliveryAddressPrivate',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link orderedInventoryStatusId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ORDERED_INVENTORY_STATUS_ID: fieldBuilder.buildEdmTypeField(
          'OrderedInventoryStatusId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link deliveryAddressCountryRegionIsoCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELIVERY_ADDRESS_COUNTRY_REGION_ISO_CODE:
          fieldBuilder.buildEdmTypeField(
            'DeliveryAddressCountryRegionISOCode',
            'Edm.String',
            true
          ),
        /**
         * Static representation of the {@link netAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NET_AMOUNT: fieldBuilder.buildEdmTypeField(
          'NetAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link barCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BAR_CODE: fieldBuilder.buildEdmTypeField('BarCode', 'Edm.String', true),
        /**
         * Static representation of the {@link currencyCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CURRENCY_CODE: fieldBuilder.buildEdmTypeField(
          'CurrencyCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link deliveryAddressLocationId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELIVERY_ADDRESS_LOCATION_ID: fieldBuilder.buildEdmTypeField(
          'DeliveryAddressLocationId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link referenceType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REFERENCE_TYPE: fieldBuilder.buildEnumField(
          'ReferenceType',
          InventRefType,
          true
        ),
        /**
         * Static representation of the {@link productVersionId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_VERSION_ID: fieldBuilder.buildEdmTypeField(
          'ProductVersionId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link taxGroup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_GROUP: fieldBuilder.buildEdmTypeField(
          'TaxGroup',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link receiptDateRequested} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RECEIPT_DATE_REQUESTED: fieldBuilder.buildEdmTypeField(
          'ReceiptDateRequested',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link salesUnit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_UNIT: fieldBuilder.buildEdmTypeField(
          'SalesUnit',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link salesCategoryName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_CATEGORY_NAME: fieldBuilder.buildEdmTypeField(
          'SalesCategoryName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link overdelivery} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OVERDELIVERY: fieldBuilder.buildEdmTypeField(
          'Overdelivery',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link deliveryAddressStreet} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELIVERY_ADDRESS_STREET: fieldBuilder.buildEdmTypeField(
          'DeliveryAddressStreet',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link scrap} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SCRAP: fieldBuilder.buildEnumField('Scrap', NoYes, true),
        /**
         * Static representation of the {@link isDeliveryAddressOrderSpecific} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_DELIVERY_ADDRESS_ORDER_SPECIFIC: fieldBuilder.buildEnumField(
          'IsDeliveryAddressOrderSpecific',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link name} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NAME: fieldBuilder.buildEdmTypeField('Name', 'Edm.String', true),
        /**
         * Static representation of the {@link itemBomId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ITEM_BOM_ID: fieldBuilder.buildEdmTypeField(
          'ItemBOMId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link deliveryName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELIVERY_NAME: fieldBuilder.buildEdmTypeField(
          'DeliveryName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link salesPrice} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_PRICE: fieldBuilder.buildEdmTypeField(
          'SalesPrice',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link salesQuantity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_QUANTITY: fieldBuilder.buildEdmTypeField(
          'SalesQuantity',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link receiptDateConfirmed} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RECEIPT_DATE_CONFIRMED: fieldBuilder.buildEdmTypeField(
          'ReceiptDateConfirmed',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link itemId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ITEM_ID: fieldBuilder.buildEdmTypeField('ItemId', 'Edm.String', true),
        /**
         * Static representation of the {@link deliveryAddressLongitude} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELIVERY_ADDRESS_LONGITUDE: fieldBuilder.buildEdmTypeField(
          'DeliveryAddressLongitude',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link deliveryAddressTimeZone} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELIVERY_ADDRESS_TIME_ZONE: fieldBuilder.buildEnumField(
          'DeliveryAddressTimeZone',
          Timezone,
          true
        ),
        /**
         * Static representation of the {@link defaultDimensionDisplayValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFAULT_DIMENSION_DISPLAY_VALUE: fieldBuilder.buildEdmTypeField(
          'DefaultDimensionDisplayValue',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link productColorId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_COLOR_ID: fieldBuilder.buildEdmTypeField(
          'ProductColorId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link deliveryDateControl} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELIVERY_DATE_CONTROL: fieldBuilder.buildEnumField(
          'DeliveryDateControl',
          SalesDeliveryDateControlType,
          true
        ),
        /**
         * Static representation of the {@link deliveryAddressStateId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELIVERY_ADDRESS_STATE_ID: fieldBuilder.buildEdmTypeField(
          'DeliveryAddressStateId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link shipDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHIP_DATE: fieldBuilder.buildEdmTypeField(
          'ShipDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link deliveryBuildingCompliment} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELIVERY_BUILDING_COMPLIMENT: fieldBuilder.buildEdmTypeField(
          'DeliveryBuildingCompliment',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link underdelivery} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        UNDERDELIVERY: fieldBuilder.buildEdmTypeField(
          'Underdelivery',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link activityNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACTIVITY_NUMBER: fieldBuilder.buildEdmTypeField(
          'ActivityNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link deliveryAddressPostBox} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELIVERY_ADDRESS_POST_BOX: fieldBuilder.buildEdmTypeField(
          'DeliveryAddressPostBox',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link deliveryCfopId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELIVERY_CFOP_ID: fieldBuilder.buildEdmTypeField(
          'DeliveryCFOPId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link ledgerDimensionDisplayValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LEDGER_DIMENSION_DISPLAY_VALUE: fieldBuilder.buildEdmTypeField(
          'LedgerDimensionDisplayValue',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link inventTransactionReturnId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVENT_TRANSACTION_RETURN_ID: fieldBuilder.buildEdmTypeField(
          'InventTransactionReturnId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link remainInventPhysical} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REMAIN_INVENT_PHYSICAL: fieldBuilder.buildEdmTypeField(
          'RemainInventPhysical',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link serviceOrderId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SERVICE_ORDER_ID: fieldBuilder.buildEdmTypeField(
          'ServiceOrderId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link lineDeliveryType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LINE_DELIVERY_TYPE: fieldBuilder.buildEnumField(
          'LineDeliveryType',
          LineDeliveryType,
          true
        ),
        /**
         * Static representation of the {@link barCodeType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BAR_CODE_TYPE: fieldBuilder.buildEdmTypeField(
          'BarCodeType',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link deliveryTerms} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELIVERY_TERMS: fieldBuilder.buildEdmTypeField(
          'DeliveryTerms',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link reservation} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RESERVATION: fieldBuilder.buildEnumField(
          'Reservation',
          ItemReservation,
          true
        ),
        /**
         * Static representation of the {@link inventDeliverNow} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVENT_DELIVER_NOW: fieldBuilder.buildEdmTypeField(
          'InventDeliverNow',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link salesStatus} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_STATUS: fieldBuilder.buildEnumField(
          'SalesStatus',
          SalesStatus,
          true
        ),
        /**
         * Static representation of the {@link sameBatchSelection} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SAME_BATCH_SELECTION: fieldBuilder.buildEnumField(
          'SameBatchSelection',
          NoYes,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', ProjectSalesItemRequirements)
      };
    }

    return this._schema;
  }
}
