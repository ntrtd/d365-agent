/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { QualityOrderHeaders } from './QualityOrderHeaders';
import { QualityOrderHeadersRequestBuilder } from './QualityOrderHeadersRequestBuilder';
import { ItemBatchAttributeValuesV2Api } from './ItemBatchAttributeValuesV2Api';
import { PurchaseOrderHeadersV2Api } from './PurchaseOrderHeadersV2Api';
import { WorkersApi } from './WorkersApi';
import { WarehouseLocationsApi } from './WarehouseLocationsApi';
import { OperationsApi } from './OperationsApi';
import { RouteHeadersApi } from './RouteHeadersApi';
import { SalesOrderHeadersV2Api } from './SalesOrderHeadersV2Api';
import { WarehousesApi } from './WarehousesApi';
import { ItemBatchesApi } from './ItemBatchesApi';
import { DimensionSetsApi } from './DimensionSetsApi';
import { ProductSizesApi } from './ProductSizesApi';
import { CustomersV3Api } from './CustomersV3Api';
import { VendorsV2Api } from './VendorsV2Api';
import { OperationalSitesApi } from './OperationalSitesApi';
import { ProductColorsApi } from './ProductColorsApi';
import { ProductVersionsApi } from './ProductVersionsApi';
import { ReleasedProductsV2Api } from './ReleasedProductsV2Api';
import { ProductStylesApi } from './ProductStylesApi';
import { ProductionOrderHeadersApi } from './ProductionOrderHeadersApi';
import { SalesOrderHeadersV3Api } from './SalesOrderHeadersV3Api';
import { LicensePlatesApi } from './LicensePlatesApi';
import { InboundShipmentOrderHeadersApi } from './InboundShipmentOrderHeadersApi';
import { NoYes } from './NoYes';
import { InventTestReferenceType } from './InventTestReferenceType';
import { InventTestOrderStatus } from './InventTestOrderStatus';
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
  OneToManyLink,
  OneToOneLink
} from '@sap-cloud-sdk/odata-v4';
export class QualityOrderHeadersApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<QualityOrderHeaders<DeSerializersT>, DeSerializersT>
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
  ): QualityOrderHeadersApi<DeSerializersT> {
    return new QualityOrderHeadersApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link itemBatchAttributeValues} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ITEM_BATCH_ATTRIBUTE_VALUES: OneToManyLink<
      QualityOrderHeaders<DeSerializersT>,
      DeSerializersT,
      ItemBatchAttributeValuesV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link purchaseOrderHeaderV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PURCHASE_ORDER_HEADER_V_2: OneToOneLink<
      QualityOrderHeaders<DeSerializersT>,
      DeSerializersT,
      PurchaseOrderHeadersV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link validatingWorker} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VALIDATING_WORKER: OneToOneLink<
      QualityOrderHeaders<DeSerializersT>,
      DeSerializersT,
      WorkersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link warehouseLocation} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WAREHOUSE_LOCATION: OneToOneLink<
      QualityOrderHeaders<DeSerializersT>,
      DeSerializersT,
      WarehouseLocationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link routeOperation} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ROUTE_OPERATION: OneToOneLink<
      QualityOrderHeaders<DeSerializersT>,
      DeSerializersT,
      OperationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link routeHeader} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ROUTE_HEADER: OneToOneLink<
      QualityOrderHeaders<DeSerializersT>,
      DeSerializersT,
      RouteHeadersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link salesOrderHeaderV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SALES_ORDER_HEADER_V_2: OneToOneLink<
      QualityOrderHeaders<DeSerializersT>,
      DeSerializersT,
      SalesOrderHeadersV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link warehouse} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WAREHOUSE: OneToOneLink<
      QualityOrderHeaders<DeSerializersT>,
      DeSerializersT,
      WarehousesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link itemBatch} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ITEM_BATCH: OneToOneLink<
      QualityOrderHeaders<DeSerializersT>,
      DeSerializersT,
      ItemBatchesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link dimensionSet} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DIMENSION_SET: OneToOneLink<
      QualityOrderHeaders<DeSerializersT>,
      DeSerializersT,
      DimensionSetsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link productSize} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_SIZE: OneToOneLink<
      QualityOrderHeaders<DeSerializersT>,
      DeSerializersT,
      ProductSizesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link customerV3} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CUSTOMER_V_3: OneToOneLink<
      QualityOrderHeaders<DeSerializersT>,
      DeSerializersT,
      CustomersV3Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link vendorV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VENDOR_V_2: OneToOneLink<
      QualityOrderHeaders<DeSerializersT>,
      DeSerializersT,
      VendorsV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link inventorySite} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    INVENTORY_SITE: OneToOneLink<
      QualityOrderHeaders<DeSerializersT>,
      DeSerializersT,
      OperationalSitesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link productColor} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_COLOR: OneToOneLink<
      QualityOrderHeaders<DeSerializersT>,
      DeSerializersT,
      ProductColorsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link productVersion} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_VERSION: OneToOneLink<
      QualityOrderHeaders<DeSerializersT>,
      DeSerializersT,
      ProductVersionsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link releasedProductV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RELEASED_PRODUCT_V_2: OneToOneLink<
      QualityOrderHeaders<DeSerializersT>,
      DeSerializersT,
      ReleasedProductsV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link productStyle} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_STYLE: OneToOneLink<
      QualityOrderHeaders<DeSerializersT>,
      DeSerializersT,
      ProductStylesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link productionOrderHeader} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCTION_ORDER_HEADER: OneToOneLink<
      QualityOrderHeaders<DeSerializersT>,
      DeSerializersT,
      ProductionOrderHeadersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link salesOrderHeaderV3} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SALES_ORDER_HEADER_V_3: OneToOneLink<
      QualityOrderHeaders<DeSerializersT>,
      DeSerializersT,
      SalesOrderHeadersV3Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link licensePlate} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LICENSE_PLATE: OneToOneLink<
      QualityOrderHeaders<DeSerializersT>,
      DeSerializersT,
      LicensePlatesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link inboundShipmentOrderHeader} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    INBOUND_SHIPMENT_ORDER_HEADER: OneToOneLink<
      QualityOrderHeaders<DeSerializersT>,
      DeSerializersT,
      InboundShipmentOrderHeadersApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      ItemBatchAttributeValuesV2Api<DeSerializersT>,
      PurchaseOrderHeadersV2Api<DeSerializersT>,
      WorkersApi<DeSerializersT>,
      WarehouseLocationsApi<DeSerializersT>,
      OperationsApi<DeSerializersT>,
      RouteHeadersApi<DeSerializersT>,
      SalesOrderHeadersV2Api<DeSerializersT>,
      WarehousesApi<DeSerializersT>,
      ItemBatchesApi<DeSerializersT>,
      DimensionSetsApi<DeSerializersT>,
      ProductSizesApi<DeSerializersT>,
      CustomersV3Api<DeSerializersT>,
      VendorsV2Api<DeSerializersT>,
      OperationalSitesApi<DeSerializersT>,
      ProductColorsApi<DeSerializersT>,
      ProductVersionsApi<DeSerializersT>,
      ReleasedProductsV2Api<DeSerializersT>,
      ProductStylesApi<DeSerializersT>,
      ProductionOrderHeadersApi<DeSerializersT>,
      SalesOrderHeadersV3Api<DeSerializersT>,
      LicensePlatesApi<DeSerializersT>,
      InboundShipmentOrderHeadersApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      ITEM_BATCH_ATTRIBUTE_VALUES: new OneToManyLink(
        'ItemBatchAttributeValues',
        this,
        linkedApis[0]
      ),
      PURCHASE_ORDER_HEADER_V_2: new OneToOneLink(
        'PurchaseOrderHeaderV2',
        this,
        linkedApis[1]
      ),
      VALIDATING_WORKER: new OneToOneLink(
        'ValidatingWorker',
        this,
        linkedApis[2]
      ),
      WAREHOUSE_LOCATION: new OneToOneLink(
        'WarehouseLocation',
        this,
        linkedApis[3]
      ),
      ROUTE_OPERATION: new OneToOneLink('RouteOperation', this, linkedApis[4]),
      ROUTE_HEADER: new OneToOneLink('RouteHeader', this, linkedApis[5]),
      SALES_ORDER_HEADER_V_2: new OneToOneLink(
        'SalesOrderHeaderV2',
        this,
        linkedApis[6]
      ),
      WAREHOUSE: new OneToOneLink('Warehouse', this, linkedApis[7]),
      ITEM_BATCH: new OneToOneLink('ItemBatch', this, linkedApis[8]),
      DIMENSION_SET: new OneToOneLink('DimensionSet', this, linkedApis[9]),
      PRODUCT_SIZE: new OneToOneLink('ProductSize', this, linkedApis[10]),
      CUSTOMER_V_3: new OneToOneLink('CustomerV3', this, linkedApis[11]),
      VENDOR_V_2: new OneToOneLink('VendorV2', this, linkedApis[12]),
      INVENTORY_SITE: new OneToOneLink('InventorySite', this, linkedApis[13]),
      PRODUCT_COLOR: new OneToOneLink('ProductColor', this, linkedApis[14]),
      PRODUCT_VERSION: new OneToOneLink('ProductVersion', this, linkedApis[15]),
      RELEASED_PRODUCT_V_2: new OneToOneLink(
        'ReleasedProductV2',
        this,
        linkedApis[16]
      ),
      PRODUCT_STYLE: new OneToOneLink('ProductStyle', this, linkedApis[17]),
      PRODUCTION_ORDER_HEADER: new OneToOneLink(
        'ProductionOrderHeader',
        this,
        linkedApis[18]
      ),
      SALES_ORDER_HEADER_V_3: new OneToOneLink(
        'SalesOrderHeaderV3',
        this,
        linkedApis[19]
      ),
      LICENSE_PLATE: new OneToOneLink('LicensePlate', this, linkedApis[20]),
      INBOUND_SHIPMENT_ORDER_HEADER: new OneToOneLink(
        'InboundShipmentOrderHeader',
        this,
        linkedApis[21]
      )
    };
    return this;
  }

  entityConstructor = QualityOrderHeaders;

  requestBuilder(): QualityOrderHeadersRequestBuilder<DeSerializersT> {
    return new QualityOrderHeadersRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    QualityOrderHeaders<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<QualityOrderHeaders<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    QualityOrderHeaders<DeSerializersT>,
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
    typeof QualityOrderHeaders,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        QualityOrderHeaders,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      QualityOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    QUALITY_ORDER_NUMBER: OrderableEdmTypeField<
      QualityOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    OPERATIONS_RESOURCE_ID: OrderableEdmTypeField<
      QualityOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PASSED_BATCH_DISPOSITION_CODE: OrderableEdmTypeField<
      QualityOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ROUTE_OPERATION_ID: OrderableEdmTypeField<
      QualityOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRODUCT_CONFIGURATION_ID: OrderableEdmTypeField<
      QualityOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VALIDATED_DATE_TIME: OrderableEdmTypeField<
      QualityOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    INVENTORY_STATUS_ID: OrderableEdmTypeField<
      QualityOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_INVENTORY_STATUS_DEFAULTED_WITH_TEST_MEASUREMENT: EnumField<
      QualityOrderHeaders<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    SALES_ORDER_NUMBER: OrderableEdmTypeField<
      QualityOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    QUALITY_TEST_GROUP_ID: OrderableEdmTypeField<
      QualityOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REFERENCE_INVENTORY_LOT_ID: OrderableEdmTypeField<
      QualityOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ROUTE_ID: OrderableEdmTypeField<
      QualityOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INVENTORY_SITE_ID: OrderableEdmTypeField<
      QualityOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRODUCT_SIZE_ID: OrderableEdmTypeField<
      QualityOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ITEM_NUMBER: OrderableEdmTypeField<
      QualityOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ACCEPTABLE_QUALITY_LEVEL_PERCENTAGE: OrderableEdmTypeField<
      QualityOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    IS_BATCH_DISPOSITION_STATUS_DEFAULTED_WITH_TEST_MEASUREMENT: EnumField<
      QualityOrderHeaders<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    PRODUCT_VERSION_ID: OrderableEdmTypeField<
      QualityOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRODUCT_NAME: OrderableEdmTypeField<
      QualityOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ITEM_SERIAL_NUMBER: OrderableEdmTypeField<
      QualityOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INVENTORY_OWNER_ID: OrderableEdmTypeField<
      QualityOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INVENTORY_QUANTITY: OrderableEdmTypeField<
      QualityOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    FAILED_ORDER_INVENTORY_STATUS_ID: OrderableEdmTypeField<
      QualityOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    WAREHOUSE_LOCATION_ID: OrderableEdmTypeField<
      QualityOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ITEM_SAMPLING_ID: OrderableEdmTypeField<
      QualityOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRODUCTION_ORDER_NUMBER: OrderableEdmTypeField<
      QualityOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_BATCH_ATTRIBUTE_VALUE_DEFAULTED_WITH_TEST_MEASUREMENT: EnumField<
      QualityOrderHeaders<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    CUSTOMER_ACCOUNT_NUMBER: OrderableEdmTypeField<
      QualityOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INVENTORY_LOT_ID: OrderableEdmTypeField<
      QualityOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FAILED_BATCH_DISPOSITION_CODE: OrderableEdmTypeField<
      QualityOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VALIDATING_PERSONNEL_NUMBER: OrderableEdmTypeField<
      QualityOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PASSED_INVENTORY_STATUS_ID: OrderableEdmTypeField<
      QualityOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PURCHASE_ORDER_NUMBER: OrderableEdmTypeField<
      QualityOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    QUALITY_ORDER_POLICY_TYPE: EnumField<
      QualityOrderHeaders<DeSerializers>,
      DeSerializersT,
      InventTestReferenceType,
      true,
      true
    >;
    ITEM_BATCH_NUMBER: OrderableEdmTypeField<
      QualityOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    WAREHOUSE_ID: OrderableEdmTypeField<
      QualityOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    QUALITY_ORDER_STATUS: EnumField<
      QualityOrderHeaders<DeSerializers>,
      DeSerializersT,
      InventTestOrderStatus,
      true,
      true
    >;
    PRODUCTION_ORDER_ROUTE_OPERATION_NUMBER: OrderableEdmTypeField<
      QualityOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    DEFAULT_LEDGER_DIMENSION_DISPLAY_VALUE: OrderableEdmTypeField<
      QualityOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VENDOR_ACCOUNT_NUMBER: OrderableEdmTypeField<
      QualityOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRODUCT_COLOR_ID: OrderableEdmTypeField<
      QualityOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CATCH_WEIGHT_QUANTITY: OrderableEdmTypeField<
      QualityOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    IS_DESTRUCTIVE_TEST: EnumField<
      QualityOrderHeaders<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    IS_QUALITY_ORDER_FAILURE_CREATING_QUANTINE_ORDER: EnumField<
      QualityOrderHeaders<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    LICENSE_PLATE_NUMBER: OrderableEdmTypeField<
      QualityOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRODUCT_STYLE_ID: OrderableEdmTypeField<
      QualityOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INBOUND_SHIPMENT_ORDER_NUMBER: OrderableEdmTypeField<
      QualityOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link itemBatchAttributeValues} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ITEM_BATCH_ATTRIBUTE_VALUES: OneToManyLink<
      QualityOrderHeaders<DeSerializersT>,
      DeSerializersT,
      ItemBatchAttributeValuesV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link purchaseOrderHeaderV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PURCHASE_ORDER_HEADER_V_2: OneToOneLink<
      QualityOrderHeaders<DeSerializersT>,
      DeSerializersT,
      PurchaseOrderHeadersV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link validatingWorker} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VALIDATING_WORKER: OneToOneLink<
      QualityOrderHeaders<DeSerializersT>,
      DeSerializersT,
      WorkersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link warehouseLocation} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WAREHOUSE_LOCATION: OneToOneLink<
      QualityOrderHeaders<DeSerializersT>,
      DeSerializersT,
      WarehouseLocationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link routeOperation} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ROUTE_OPERATION: OneToOneLink<
      QualityOrderHeaders<DeSerializersT>,
      DeSerializersT,
      OperationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link routeHeader} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ROUTE_HEADER: OneToOneLink<
      QualityOrderHeaders<DeSerializersT>,
      DeSerializersT,
      RouteHeadersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link salesOrderHeaderV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SALES_ORDER_HEADER_V_2: OneToOneLink<
      QualityOrderHeaders<DeSerializersT>,
      DeSerializersT,
      SalesOrderHeadersV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link warehouse} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WAREHOUSE: OneToOneLink<
      QualityOrderHeaders<DeSerializersT>,
      DeSerializersT,
      WarehousesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link itemBatch} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ITEM_BATCH: OneToOneLink<
      QualityOrderHeaders<DeSerializersT>,
      DeSerializersT,
      ItemBatchesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link dimensionSet} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DIMENSION_SET: OneToOneLink<
      QualityOrderHeaders<DeSerializersT>,
      DeSerializersT,
      DimensionSetsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link productSize} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_SIZE: OneToOneLink<
      QualityOrderHeaders<DeSerializersT>,
      DeSerializersT,
      ProductSizesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link customerV3} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CUSTOMER_V_3: OneToOneLink<
      QualityOrderHeaders<DeSerializersT>,
      DeSerializersT,
      CustomersV3Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link vendorV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VENDOR_V_2: OneToOneLink<
      QualityOrderHeaders<DeSerializersT>,
      DeSerializersT,
      VendorsV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link inventorySite} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    INVENTORY_SITE: OneToOneLink<
      QualityOrderHeaders<DeSerializersT>,
      DeSerializersT,
      OperationalSitesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link productColor} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_COLOR: OneToOneLink<
      QualityOrderHeaders<DeSerializersT>,
      DeSerializersT,
      ProductColorsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link productVersion} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_VERSION: OneToOneLink<
      QualityOrderHeaders<DeSerializersT>,
      DeSerializersT,
      ProductVersionsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link releasedProductV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RELEASED_PRODUCT_V_2: OneToOneLink<
      QualityOrderHeaders<DeSerializersT>,
      DeSerializersT,
      ReleasedProductsV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link productStyle} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_STYLE: OneToOneLink<
      QualityOrderHeaders<DeSerializersT>,
      DeSerializersT,
      ProductStylesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link productionOrderHeader} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCTION_ORDER_HEADER: OneToOneLink<
      QualityOrderHeaders<DeSerializersT>,
      DeSerializersT,
      ProductionOrderHeadersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link salesOrderHeaderV3} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SALES_ORDER_HEADER_V_3: OneToOneLink<
      QualityOrderHeaders<DeSerializersT>,
      DeSerializersT,
      SalesOrderHeadersV3Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link licensePlate} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LICENSE_PLATE: OneToOneLink<
      QualityOrderHeaders<DeSerializersT>,
      DeSerializersT,
      LicensePlatesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link inboundShipmentOrderHeader} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    INBOUND_SHIPMENT_ORDER_HEADER: OneToOneLink<
      QualityOrderHeaders<DeSerializersT>,
      DeSerializersT,
      InboundShipmentOrderHeadersApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<QualityOrderHeaders<DeSerializers>>;
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
         * Static representation of the {@link qualityOrderNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        QUALITY_ORDER_NUMBER: fieldBuilder.buildEdmTypeField(
          'QualityOrderNumber',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link operationsResourceId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OPERATIONS_RESOURCE_ID: fieldBuilder.buildEdmTypeField(
          'OperationsResourceId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link passedBatchDispositionCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PASSED_BATCH_DISPOSITION_CODE: fieldBuilder.buildEdmTypeField(
          'PassedBatchDispositionCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link routeOperationId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ROUTE_OPERATION_ID: fieldBuilder.buildEdmTypeField(
          'RouteOperationId',
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
         * Static representation of the {@link validatedDateTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VALIDATED_DATE_TIME: fieldBuilder.buildEdmTypeField(
          'ValidatedDateTime',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link inventoryStatusId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVENTORY_STATUS_ID: fieldBuilder.buildEdmTypeField(
          'InventoryStatusId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link isInventoryStatusDefaultedWithTestMeasurement} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_INVENTORY_STATUS_DEFAULTED_WITH_TEST_MEASUREMENT:
          fieldBuilder.buildEnumField(
            'IsInventoryStatusDefaultedWithTestMeasurement',
            NoYes,
            true
          ),
        /**
         * Static representation of the {@link salesOrderNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_ORDER_NUMBER: fieldBuilder.buildEdmTypeField(
          'SalesOrderNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link qualityTestGroupId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        QUALITY_TEST_GROUP_ID: fieldBuilder.buildEdmTypeField(
          'QualityTestGroupId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link referenceInventoryLotId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REFERENCE_INVENTORY_LOT_ID: fieldBuilder.buildEdmTypeField(
          'ReferenceInventoryLotId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link routeId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ROUTE_ID: fieldBuilder.buildEdmTypeField('RouteId', 'Edm.String', true),
        /**
         * Static representation of the {@link inventorySiteId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVENTORY_SITE_ID: fieldBuilder.buildEdmTypeField(
          'InventorySiteId',
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
         * Static representation of the {@link acceptableQualityLevelPercentage} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACCEPTABLE_QUALITY_LEVEL_PERCENTAGE: fieldBuilder.buildEdmTypeField(
          'AcceptableQualityLevelPercentage',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link isBatchDispositionStatusDefaultedWithTestMeasurement} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_BATCH_DISPOSITION_STATUS_DEFAULTED_WITH_TEST_MEASUREMENT:
          fieldBuilder.buildEnumField(
            'IsBatchDispositionStatusDefaultedWithTestMeasurement',
            NoYes,
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
         * Static representation of the {@link productName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_NAME: fieldBuilder.buildEdmTypeField(
          'ProductName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link itemSerialNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ITEM_SERIAL_NUMBER: fieldBuilder.buildEdmTypeField(
          'ItemSerialNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link inventoryOwnerId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVENTORY_OWNER_ID: fieldBuilder.buildEdmTypeField(
          'InventoryOwnerId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link inventoryQuantity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVENTORY_QUANTITY: fieldBuilder.buildEdmTypeField(
          'InventoryQuantity',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link failedOrderInventoryStatusId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FAILED_ORDER_INVENTORY_STATUS_ID: fieldBuilder.buildEdmTypeField(
          'FailedOrderInventoryStatusId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link warehouseLocationId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WAREHOUSE_LOCATION_ID: fieldBuilder.buildEdmTypeField(
          'WarehouseLocationId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link itemSamplingId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ITEM_SAMPLING_ID: fieldBuilder.buildEdmTypeField(
          'ItemSamplingId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link productionOrderNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCTION_ORDER_NUMBER: fieldBuilder.buildEdmTypeField(
          'ProductionOrderNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link isBatchAttributeValueDefaultedWithTestMeasurement} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_BATCH_ATTRIBUTE_VALUE_DEFAULTED_WITH_TEST_MEASUREMENT:
          fieldBuilder.buildEnumField(
            'IsBatchAttributeValueDefaultedWithTestMeasurement',
            NoYes,
            true
          ),
        /**
         * Static representation of the {@link customerAccountNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUSTOMER_ACCOUNT_NUMBER: fieldBuilder.buildEdmTypeField(
          'CustomerAccountNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link inventoryLotId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVENTORY_LOT_ID: fieldBuilder.buildEdmTypeField(
          'InventoryLotId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link failedBatchDispositionCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FAILED_BATCH_DISPOSITION_CODE: fieldBuilder.buildEdmTypeField(
          'FailedBatchDispositionCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link validatingPersonnelNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VALIDATING_PERSONNEL_NUMBER: fieldBuilder.buildEdmTypeField(
          'ValidatingPersonnelNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link passedInventoryStatusId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PASSED_INVENTORY_STATUS_ID: fieldBuilder.buildEdmTypeField(
          'PassedInventoryStatusId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link purchaseOrderNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PURCHASE_ORDER_NUMBER: fieldBuilder.buildEdmTypeField(
          'PurchaseOrderNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link qualityOrderPolicyType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        QUALITY_ORDER_POLICY_TYPE: fieldBuilder.buildEnumField(
          'QualityOrderPolicyType',
          InventTestReferenceType,
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
         * Static representation of the {@link warehouseId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WAREHOUSE_ID: fieldBuilder.buildEdmTypeField(
          'WarehouseId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link qualityOrderStatus} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        QUALITY_ORDER_STATUS: fieldBuilder.buildEnumField(
          'QualityOrderStatus',
          InventTestOrderStatus,
          true
        ),
        /**
         * Static representation of the {@link productionOrderRouteOperationNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCTION_ORDER_ROUTE_OPERATION_NUMBER: fieldBuilder.buildEdmTypeField(
          'ProductionOrderRouteOperationNumber',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link defaultLedgerDimensionDisplayValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFAULT_LEDGER_DIMENSION_DISPLAY_VALUE: fieldBuilder.buildEdmTypeField(
          'DefaultLedgerDimensionDisplayValue',
          'Edm.String',
          true
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
         * Static representation of the {@link productColorId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_COLOR_ID: fieldBuilder.buildEdmTypeField(
          'ProductColorId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link catchWeightQuantity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CATCH_WEIGHT_QUANTITY: fieldBuilder.buildEdmTypeField(
          'CatchWeightQuantity',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link isDestructiveTest} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_DESTRUCTIVE_TEST: fieldBuilder.buildEnumField(
          'IsDestructiveTest',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link isQualityOrderFailureCreatingQuantineOrder} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_QUALITY_ORDER_FAILURE_CREATING_QUANTINE_ORDER:
          fieldBuilder.buildEnumField(
            'IsQualityOrderFailureCreatingQuantineOrder',
            NoYes,
            true
          ),
        /**
         * Static representation of the {@link licensePlateNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LICENSE_PLATE_NUMBER: fieldBuilder.buildEdmTypeField(
          'LicensePlateNumber',
          'Edm.String',
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
         * Static representation of the {@link inboundShipmentOrderNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INBOUND_SHIPMENT_ORDER_NUMBER: fieldBuilder.buildEdmTypeField(
          'InboundShipmentOrderNumber',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', QualityOrderHeaders)
      };
    }

    return this._schema;
  }
}
