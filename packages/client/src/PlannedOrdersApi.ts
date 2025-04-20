/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { PlannedOrders } from './PlannedOrders';
import { PlannedOrdersRequestBuilder } from './PlannedOrdersRequestBuilder';
import { PurchaseOrderHeadersV2Api } from './PurchaseOrderHeadersV2Api';
import { RouteHeadersApi } from './RouteHeadersApi';
import { ProductsV2Api } from './ProductsV2Api';
import { ReleasedProductsV2Api } from './ReleasedProductsV2Api';
import { VendorGroupsApi } from './VendorGroupsApi';
import { TransferOrderHeadersApi } from './TransferOrderHeadersApi';
import { VendorsV2Api } from './VendorsV2Api';
import { BillOfMaterialsHeadersApi } from './BillOfMaterialsHeadersApi';
import { ProductGroupsApi } from './ProductGroupsApi';
import { ReqPlanType } from './ReqPlanType';
import { NoYes } from './NoYes';
import { ReqPoStatus } from './ReqPoStatus';
import { SchedMethod } from './SchedMethod';
import { ReqRefType } from './ReqRefType';
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
export class PlannedOrdersApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<PlannedOrders<DeSerializersT>, DeSerializersT>
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
  ): PlannedOrdersApi<DeSerializersT> {
    return new PlannedOrdersApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link purchaseOrderHeader} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PURCHASE_ORDER_HEADER: OneToOneLink<
      PlannedOrders<DeSerializersT>,
      DeSerializersT,
      PurchaseOrderHeadersV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link routeHeader} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ROUTE_HEADER: OneToOneLink<
      PlannedOrders<DeSerializersT>,
      DeSerializersT,
      RouteHeadersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link product} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT: OneToOneLink<
      PlannedOrders<DeSerializersT>,
      DeSerializersT,
      ProductsV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link planningFormulaProduct} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PLANNING_FORMULA_PRODUCT: OneToOneLink<
      PlannedOrders<DeSerializersT>,
      DeSerializersT,
      ReleasedProductsV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link vendorGroup} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VENDOR_GROUP: OneToOneLink<
      PlannedOrders<DeSerializersT>,
      DeSerializersT,
      VendorGroupsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link transferOrderHeader} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TRANSFER_ORDER_HEADER: OneToOneLink<
      PlannedOrders<DeSerializersT>,
      DeSerializersT,
      TransferOrderHeadersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link vendor} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VENDOR: OneToOneLink<
      PlannedOrders<DeSerializersT>,
      DeSerializersT,
      VendorsV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link billOfMaterialsHeader} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BILL_OF_MATERIALS_HEADER: OneToOneLink<
      PlannedOrders<DeSerializersT>,
      DeSerializersT,
      BillOfMaterialsHeadersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link productGroup} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_GROUP: OneToOneLink<
      PlannedOrders<DeSerializersT>,
      DeSerializersT,
      ProductGroupsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      PurchaseOrderHeadersV2Api<DeSerializersT>,
      RouteHeadersApi<DeSerializersT>,
      ProductsV2Api<DeSerializersT>,
      ReleasedProductsV2Api<DeSerializersT>,
      VendorGroupsApi<DeSerializersT>,
      TransferOrderHeadersApi<DeSerializersT>,
      VendorsV2Api<DeSerializersT>,
      BillOfMaterialsHeadersApi<DeSerializersT>,
      ProductGroupsApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      PURCHASE_ORDER_HEADER: new OneToOneLink(
        'PurchaseOrderHeader',
        this,
        linkedApis[0]
      ),
      ROUTE_HEADER: new OneToOneLink('RouteHeader', this, linkedApis[1]),
      PRODUCT: new OneToOneLink('Product', this, linkedApis[2]),
      PLANNING_FORMULA_PRODUCT: new OneToOneLink(
        'PlanningFormulaProduct',
        this,
        linkedApis[3]
      ),
      VENDOR_GROUP: new OneToOneLink('VendorGroup', this, linkedApis[4]),
      TRANSFER_ORDER_HEADER: new OneToOneLink(
        'TransferOrderHeader',
        this,
        linkedApis[5]
      ),
      VENDOR: new OneToOneLink('Vendor', this, linkedApis[6]),
      BILL_OF_MATERIALS_HEADER: new OneToOneLink(
        'BillOfMaterialsHeader',
        this,
        linkedApis[7]
      ),
      PRODUCT_GROUP: new OneToOneLink('ProductGroup', this, linkedApis[8])
    };
    return this;
  }

  entityConstructor = PlannedOrders;

  requestBuilder(): PlannedOrdersRequestBuilder<DeSerializersT> {
    return new PlannedOrdersRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    PlannedOrders<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<PlannedOrders<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<PlannedOrders<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof PlannedOrders, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(PlannedOrders, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      PlannedOrders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    REQUIREMENT_PLAN_ID: OrderableEdmTypeField<
      PlannedOrders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PLANNED_ORDER_NUMBER: OrderableEdmTypeField<
      PlannedOrders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    REQUIREMENT_PLAN_TYPE: EnumField<
      PlannedOrders<DeSerializers>,
      DeSerializersT,
      ReqPlanType,
      true,
      true
    >;
    PRODUCT_SEARCH_NAME: OrderableEdmTypeField<
      PlannedOrders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BUYER_GROUP_ID: OrderableEdmTypeField<
      PlannedOrders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_LEAD_TIME_USING_WORKING_DAYS: EnumField<
      PlannedOrders<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    LEAD_TIME_DAYS: OrderableEdmTypeField<
      PlannedOrders<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    PRODUCT_CONFIGURATION_ID: OrderableEdmTypeField<
      PlannedOrders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PROCESSING_STATUS: EnumField<
      PlannedOrders<DeSerializers>,
      DeSerializersT,
      ReqPoStatus,
      true,
      true
    >;
    REQUIREMENT_WAREHOUSE_LOCATION_ID: OrderableEdmTypeField<
      PlannedOrders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    APPENDING_PURCHASE_ORDER_NUMBER: OrderableEdmTypeField<
      PlannedOrders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PURCHASE_UNIT_SYMBOL: OrderableEdmTypeField<
      PlannedOrders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REQUIREMENT_SITE_ID: OrderableEdmTypeField<
      PlannedOrders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRODUCT_DESCRIPTION: OrderableEdmTypeField<
      PlannedOrders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    APPENDING_TRANSFER_ORDER_NUMBER: OrderableEdmTypeField<
      PlannedOrders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRODUCT_NUMBER: OrderableEdmTypeField<
      PlannedOrders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRODUCT_SIZE_ID: OrderableEdmTypeField<
      PlannedOrders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ITEM_NUMBER: OrderableEdmTypeField<
      PlannedOrders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRODUCT_VERSION_ID: OrderableEdmTypeField<
      PlannedOrders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REQUIREMENT_PLAN_DESCRIPTION: OrderableEdmTypeField<
      PlannedOrders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DELIVERY_DATE: OrderableEdmTypeField<
      PlannedOrders<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    ORDER_TIME: OrderableEdmTypeField<
      PlannedOrders<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    SCHEDULING_METHOD: EnumField<
      PlannedOrders<DeSerializers>,
      DeSerializersT,
      SchedMethod,
      true,
      true
    >;
    SCHEDULED_END_DATE: OrderableEdmTypeField<
      PlannedOrders<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    SCHEDULED_START_DATE: OrderableEdmTypeField<
      PlannedOrders<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    INVENT_SERIAL_ID: OrderableEdmTypeField<
      PlannedOrders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRODUCT_GROUP_ID: OrderableEdmTypeField<
      PlannedOrders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PLANNED_ORDER_TYPE: EnumField<
      PlannedOrders<DeSerializers>,
      DeSerializersT,
      ReqRefType,
      true,
      true
    >;
    REQUIREMENT_QUANTITY: OrderableEdmTypeField<
      PlannedOrders<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    COST_AMOUNT: OrderableEdmTypeField<
      PlannedOrders<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    VENDOR_GROUP_ID: OrderableEdmTypeField<
      PlannedOrders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_BULK_ORDER: EnumField<
      PlannedOrders<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    PLANNING_FORMULA_ITEM_NUMBER: OrderableEdmTypeField<
      PlannedOrders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PLANNED_ORDER_MODIFIED_DATE_TIME: OrderableEdmTypeField<
      PlannedOrders<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    REQUIREMENT_WAREHOUSE_ID: OrderableEdmTypeField<
      PlannedOrders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REQUIREMENT_CATCH_WEIGHT_QUANTITY: OrderableEdmTypeField<
      PlannedOrders<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    YIELD_PERCENTAGE: OrderableEdmTypeField<
      PlannedOrders<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    INVENT_BATCH_ID: OrderableEdmTypeField<
      PlannedOrders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DELIVERY_TIME: OrderableEdmTypeField<
      PlannedOrders<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    VENDOR_ACCOUNT_NUMBER: OrderableEdmTypeField<
      PlannedOrders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LICENSE_PLATE_ID: OrderableEdmTypeField<
      PlannedOrders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRODUCT_COLOR_ID: OrderableEdmTypeField<
      PlannedOrders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_DIRECTLY_DERIVED_REQUIREMENT: EnumField<
      PlannedOrders<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    PLANNING_PRIORITY: OrderableEdmTypeField<
      PlannedOrders<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ORDER_DATE: OrderableEdmTypeField<
      PlannedOrders<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    BOM_ID: OrderableEdmTypeField<
      PlannedOrders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PURCHASE_QUANTITY: OrderableEdmTypeField<
      PlannedOrders<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PLANNED_ORDER_ROUTE_OPERATION_ID: OrderableEdmTypeField<
      PlannedOrders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_SEQUENCED_PLANNED_BATCH_ORDER: OrderableEdmTypeField<
      PlannedOrders<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      false,
      true
    >;
    REQUIREMENT_DATE: OrderableEdmTypeField<
      PlannedOrders<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    PRODUCT_STYLE_ID: OrderableEdmTypeField<
      PlannedOrders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REQUIREMENT_STATUS_ID: OrderableEdmTypeField<
      PlannedOrders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link purchaseOrderHeader} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PURCHASE_ORDER_HEADER: OneToOneLink<
      PlannedOrders<DeSerializersT>,
      DeSerializersT,
      PurchaseOrderHeadersV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link routeHeader} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ROUTE_HEADER: OneToOneLink<
      PlannedOrders<DeSerializersT>,
      DeSerializersT,
      RouteHeadersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link product} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT: OneToOneLink<
      PlannedOrders<DeSerializersT>,
      DeSerializersT,
      ProductsV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link planningFormulaProduct} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PLANNING_FORMULA_PRODUCT: OneToOneLink<
      PlannedOrders<DeSerializersT>,
      DeSerializersT,
      ReleasedProductsV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link vendorGroup} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VENDOR_GROUP: OneToOneLink<
      PlannedOrders<DeSerializersT>,
      DeSerializersT,
      VendorGroupsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link transferOrderHeader} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TRANSFER_ORDER_HEADER: OneToOneLink<
      PlannedOrders<DeSerializersT>,
      DeSerializersT,
      TransferOrderHeadersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link vendor} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VENDOR: OneToOneLink<
      PlannedOrders<DeSerializersT>,
      DeSerializersT,
      VendorsV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link billOfMaterialsHeader} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BILL_OF_MATERIALS_HEADER: OneToOneLink<
      PlannedOrders<DeSerializersT>,
      DeSerializersT,
      BillOfMaterialsHeadersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link productGroup} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_GROUP: OneToOneLink<
      PlannedOrders<DeSerializersT>,
      DeSerializersT,
      ProductGroupsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<PlannedOrders<DeSerializers>>;
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
         * Static representation of the {@link requirementPlanId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REQUIREMENT_PLAN_ID: fieldBuilder.buildEdmTypeField(
          'RequirementPlanId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link plannedOrderNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PLANNED_ORDER_NUMBER: fieldBuilder.buildEdmTypeField(
          'PlannedOrderNumber',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link requirementPlanType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REQUIREMENT_PLAN_TYPE: fieldBuilder.buildEnumField(
          'RequirementPlanType',
          ReqPlanType,
          true
        ),
        /**
         * Static representation of the {@link productSearchName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_SEARCH_NAME: fieldBuilder.buildEdmTypeField(
          'ProductSearchName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link buyerGroupId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BUYER_GROUP_ID: fieldBuilder.buildEdmTypeField(
          'BuyerGroupId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link isLeadTimeUsingWorkingDays} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_LEAD_TIME_USING_WORKING_DAYS: fieldBuilder.buildEnumField(
          'IsLeadTimeUsingWorkingDays',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link leadTimeDays} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LEAD_TIME_DAYS: fieldBuilder.buildEdmTypeField(
          'LeadTimeDays',
          'Edm.Int32',
          false
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
         * Static representation of the {@link processingStatus} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROCESSING_STATUS: fieldBuilder.buildEnumField(
          'ProcessingStatus',
          ReqPoStatus,
          true
        ),
        /**
         * Static representation of the {@link requirementWarehouseLocationId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REQUIREMENT_WAREHOUSE_LOCATION_ID: fieldBuilder.buildEdmTypeField(
          'RequirementWarehouseLocationId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link appendingPurchaseOrderNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        APPENDING_PURCHASE_ORDER_NUMBER: fieldBuilder.buildEdmTypeField(
          'AppendingPurchaseOrderNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link purchaseUnitSymbol} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PURCHASE_UNIT_SYMBOL: fieldBuilder.buildEdmTypeField(
          'PurchaseUnitSymbol',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link requirementSiteId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REQUIREMENT_SITE_ID: fieldBuilder.buildEdmTypeField(
          'RequirementSiteId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link productDescription} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'ProductDescription',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link appendingTransferOrderNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        APPENDING_TRANSFER_ORDER_NUMBER: fieldBuilder.buildEdmTypeField(
          'AppendingTransferOrderNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link productNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_NUMBER: fieldBuilder.buildEdmTypeField(
          'ProductNumber',
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
         * Static representation of the {@link itemNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ITEM_NUMBER: fieldBuilder.buildEdmTypeField(
          'ItemNumber',
          'Edm.String',
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
         * Static representation of the {@link requirementPlanDescription} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REQUIREMENT_PLAN_DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'RequirementPlanDescription',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link deliveryDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELIVERY_DATE: fieldBuilder.buildEdmTypeField(
          'DeliveryDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link orderTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ORDER_TIME: fieldBuilder.buildEdmTypeField(
          'OrderTime',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link schedulingMethod} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SCHEDULING_METHOD: fieldBuilder.buildEnumField(
          'SchedulingMethod',
          SchedMethod,
          true
        ),
        /**
         * Static representation of the {@link scheduledEndDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SCHEDULED_END_DATE: fieldBuilder.buildEdmTypeField(
          'ScheduledEndDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link scheduledStartDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SCHEDULED_START_DATE: fieldBuilder.buildEdmTypeField(
          'ScheduledStartDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link inventSerialId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVENT_SERIAL_ID: fieldBuilder.buildEdmTypeField(
          'InventSerialId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link productGroupId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_GROUP_ID: fieldBuilder.buildEdmTypeField(
          'ProductGroupId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link plannedOrderType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PLANNED_ORDER_TYPE: fieldBuilder.buildEnumField(
          'PlannedOrderType',
          ReqRefType,
          true
        ),
        /**
         * Static representation of the {@link requirementQuantity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REQUIREMENT_QUANTITY: fieldBuilder.buildEdmTypeField(
          'RequirementQuantity',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link costAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COST_AMOUNT: fieldBuilder.buildEdmTypeField(
          'CostAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link vendorGroupId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VENDOR_GROUP_ID: fieldBuilder.buildEdmTypeField(
          'VendorGroupId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link isBulkOrder} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_BULK_ORDER: fieldBuilder.buildEnumField('IsBulkOrder', NoYes, true),
        /**
         * Static representation of the {@link planningFormulaItemNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PLANNING_FORMULA_ITEM_NUMBER: fieldBuilder.buildEdmTypeField(
          'PlanningFormulaItemNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link plannedOrderModifiedDateTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PLANNED_ORDER_MODIFIED_DATE_TIME: fieldBuilder.buildEdmTypeField(
          'PlannedOrderModifiedDateTime',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link requirementWarehouseId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REQUIREMENT_WAREHOUSE_ID: fieldBuilder.buildEdmTypeField(
          'RequirementWarehouseId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link requirementCatchWeightQuantity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REQUIREMENT_CATCH_WEIGHT_QUANTITY: fieldBuilder.buildEdmTypeField(
          'RequirementCatchWeightQuantity',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link yieldPercentage} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        YIELD_PERCENTAGE: fieldBuilder.buildEdmTypeField(
          'YieldPercentage',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link inventBatchId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVENT_BATCH_ID: fieldBuilder.buildEdmTypeField(
          'InventBatchId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link deliveryTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELIVERY_TIME: fieldBuilder.buildEdmTypeField(
          'DeliveryTime',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link vendorAccountNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VENDOR_ACCOUNT_NUMBER: fieldBuilder.buildEdmTypeField(
          'VendorAccountNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link licensePlateId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LICENSE_PLATE_ID: fieldBuilder.buildEdmTypeField(
          'LicensePlateId',
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
         * Static representation of the {@link isDirectlyDerivedRequirement} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_DIRECTLY_DERIVED_REQUIREMENT: fieldBuilder.buildEnumField(
          'IsDirectlyDerivedRequirement',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link planningPriority} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PLANNING_PRIORITY: fieldBuilder.buildEdmTypeField(
          'PlanningPriority',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link orderDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ORDER_DATE: fieldBuilder.buildEdmTypeField(
          'OrderDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link bomId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BOM_ID: fieldBuilder.buildEdmTypeField('BOMId', 'Edm.String', true),
        /**
         * Static representation of the {@link purchaseQuantity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PURCHASE_QUANTITY: fieldBuilder.buildEdmTypeField(
          'PurchaseQuantity',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link plannedOrderRouteOperationId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PLANNED_ORDER_ROUTE_OPERATION_ID: fieldBuilder.buildEdmTypeField(
          'PlannedOrderRouteOperationId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link isSequencedPlannedBatchOrder} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_SEQUENCED_PLANNED_BATCH_ORDER: fieldBuilder.buildEdmTypeField(
          'IsSequencedPlannedBatchOrder',
          'Edm.Boolean',
          false
        ),
        /**
         * Static representation of the {@link requirementDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REQUIREMENT_DATE: fieldBuilder.buildEdmTypeField(
          'RequirementDate',
          'Edm.DateTimeOffset',
          false
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
         * Static representation of the {@link requirementStatusId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REQUIREMENT_STATUS_ID: fieldBuilder.buildEdmTypeField(
          'RequirementStatusId',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', PlannedOrders)
      };
    }

    return this._schema;
  }
}
