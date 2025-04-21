/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { CycleCountingWarehouseWorkLines } from './CycleCountingWarehouseWorkLines';
import { CycleCountingWarehouseWorkLinesRequestBuilder } from './CycleCountingWarehouseWorkLinesRequestBuilder';
import { WarehouseLocationsApi } from './WarehouseLocationsApi';
import { ProductSizesApi } from './ProductSizesApi';
import { ProductColorsApi } from './ProductColorsApi';
import { ReleasedProductsV2Api } from './ReleasedProductsV2Api';
import { ProductStylesApi } from './ProductStylesApi';
import { LicensePlatesApi } from './LicensePlatesApi';
import { NoYes } from './NoYes';
import { WhsWorkStatus } from './WhsWorkStatus';
import { WhsAcceptReject } from './WhsAcceptReject';
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
export class CycleCountingWarehouseWorkLinesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<CycleCountingWarehouseWorkLines<DeSerializersT>, DeSerializersT>
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
  ): CycleCountingWarehouseWorkLinesApi<DeSerializersT> {
    return new CycleCountingWarehouseWorkLinesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link warehouseLocation} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WAREHOUSE_LOCATION: OneToOneLink<
      CycleCountingWarehouseWorkLines<DeSerializersT>,
      DeSerializersT,
      WarehouseLocationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link productSize} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_SIZE: OneToOneLink<
      CycleCountingWarehouseWorkLines<DeSerializersT>,
      DeSerializersT,
      ProductSizesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link productColor} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_COLOR: OneToOneLink<
      CycleCountingWarehouseWorkLines<DeSerializersT>,
      DeSerializersT,
      ProductColorsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link releasedProductV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RELEASED_PRODUCT_V_2: OneToOneLink<
      CycleCountingWarehouseWorkLines<DeSerializersT>,
      DeSerializersT,
      ReleasedProductsV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link productStyle} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_STYLE: OneToOneLink<
      CycleCountingWarehouseWorkLines<DeSerializersT>,
      DeSerializersT,
      ProductStylesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link licensePlate} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LICENSE_PLATE: OneToOneLink<
      CycleCountingWarehouseWorkLines<DeSerializersT>,
      DeSerializersT,
      LicensePlatesApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      WarehouseLocationsApi<DeSerializersT>,
      ProductSizesApi<DeSerializersT>,
      ProductColorsApi<DeSerializersT>,
      ReleasedProductsV2Api<DeSerializersT>,
      ProductStylesApi<DeSerializersT>,
      LicensePlatesApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      WAREHOUSE_LOCATION: new OneToOneLink(
        'WarehouseLocation',
        this,
        linkedApis[0]
      ),
      PRODUCT_SIZE: new OneToOneLink('ProductSize', this, linkedApis[1]),
      PRODUCT_COLOR: new OneToOneLink('ProductColor', this, linkedApis[2]),
      RELEASED_PRODUCT_V_2: new OneToOneLink(
        'ReleasedProductV2',
        this,
        linkedApis[3]
      ),
      PRODUCT_STYLE: new OneToOneLink('ProductStyle', this, linkedApis[4]),
      LICENSE_PLATE: new OneToOneLink('LicensePlate', this, linkedApis[5])
    };
    return this;
  }

  entityConstructor = CycleCountingWarehouseWorkLines;

  requestBuilder(): CycleCountingWarehouseWorkLinesRequestBuilder<DeSerializersT> {
    return new CycleCountingWarehouseWorkLinesRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    CycleCountingWarehouseWorkLines<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      CycleCountingWarehouseWorkLines<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    CycleCountingWarehouseWorkLines<DeSerializersT>,
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
    typeof CycleCountingWarehouseWorkLines,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        CycleCountingWarehouseWorkLines,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      CycleCountingWarehouseWorkLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    INVENTORY_OWNER_ID: OrderableEdmTypeField<
      CycleCountingWarehouseWorkLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    INVENTORY_STATUS_ID: OrderableEdmTypeField<
      CycleCountingWarehouseWorkLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ITEM_BATCH_NUMBER: OrderableEdmTypeField<
      CycleCountingWarehouseWorkLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ITEM_NUMBER: OrderableEdmTypeField<
      CycleCountingWarehouseWorkLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ITEM_SERIAL_NUMBER: OrderableEdmTypeField<
      CycleCountingWarehouseWorkLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LICENSE_PLATE_NUMBER: OrderableEdmTypeField<
      CycleCountingWarehouseWorkLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LINE_NUMBER: OrderableEdmTypeField<
      CycleCountingWarehouseWorkLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PRODUCT_COLOR_ID: OrderableEdmTypeField<
      CycleCountingWarehouseWorkLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PRODUCT_CONFIGURATION_ID: OrderableEdmTypeField<
      CycleCountingWarehouseWorkLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PRODUCT_SIZE_ID: OrderableEdmTypeField<
      CycleCountingWarehouseWorkLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PRODUCT_STYLE_ID: OrderableEdmTypeField<
      CycleCountingWarehouseWorkLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    WAREHOUSE_LOCATION_ID: OrderableEdmTypeField<
      CycleCountingWarehouseWorkLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    WAREHOUSE_WORK_ID: OrderableEdmTypeField<
      CycleCountingWarehouseWorkLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ADJUSTMENT_WAREHOUSE_WORK_ID: OrderableEdmTypeField<
      CycleCountingWarehouseWorkLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EXPECTED_QUANTITY: OrderableEdmTypeField<
      CycleCountingWarehouseWorkLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    COUNTED_QUANTITY: OrderableEdmTypeField<
      CycleCountingWarehouseWorkLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    WAREHOUSE_ID: OrderableEdmTypeField<
      CycleCountingWarehouseWorkLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_DISCREPANCY_REGISTERED: EnumField<
      CycleCountingWarehouseWorkLines<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    WORK_CREATED_DATE_TIME: OrderableEdmTypeField<
      CycleCountingWarehouseWorkLines<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    IS_REGISTERED: EnumField<
      CycleCountingWarehouseWorkLines<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    WORK_STATUS: EnumField<
      CycleCountingWarehouseWorkLines<DeSerializers>,
      DeSerializersT,
      WhsWorkStatus,
      true,
      true
    >;
    WAREHOUSE_MOBILE_DEVICE_USER_ID: OrderableEdmTypeField<
      CycleCountingWarehouseWorkLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REVIEW_RESULT: EnumField<
      CycleCountingWarehouseWorkLines<DeSerializers>,
      DeSerializersT,
      WhsAcceptReject,
      true,
      true
    >;
    WORK_CLOSED_DATE_TIME: OrderableEdmTypeField<
      CycleCountingWarehouseWorkLines<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link warehouseLocation} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WAREHOUSE_LOCATION: OneToOneLink<
      CycleCountingWarehouseWorkLines<DeSerializersT>,
      DeSerializersT,
      WarehouseLocationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link productSize} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_SIZE: OneToOneLink<
      CycleCountingWarehouseWorkLines<DeSerializersT>,
      DeSerializersT,
      ProductSizesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link productColor} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_COLOR: OneToOneLink<
      CycleCountingWarehouseWorkLines<DeSerializersT>,
      DeSerializersT,
      ProductColorsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link releasedProductV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RELEASED_PRODUCT_V_2: OneToOneLink<
      CycleCountingWarehouseWorkLines<DeSerializersT>,
      DeSerializersT,
      ReleasedProductsV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link productStyle} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_STYLE: OneToOneLink<
      CycleCountingWarehouseWorkLines<DeSerializersT>,
      DeSerializersT,
      ProductStylesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link licensePlate} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LICENSE_PLATE: OneToOneLink<
      CycleCountingWarehouseWorkLines<DeSerializersT>,
      DeSerializersT,
      LicensePlatesApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<CycleCountingWarehouseWorkLines<DeSerializers>>;
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
         * Static representation of the {@link inventoryOwnerId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVENTORY_OWNER_ID: fieldBuilder.buildEdmTypeField(
          'InventoryOwnerId',
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
         * Static representation of the {@link itemBatchNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ITEM_BATCH_NUMBER: fieldBuilder.buildEdmTypeField(
          'ItemBatchNumber',
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
         * Static representation of the {@link itemSerialNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ITEM_SERIAL_NUMBER: fieldBuilder.buildEdmTypeField(
          'ItemSerialNumber',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link licensePlateNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LICENSE_PLATE_NUMBER: fieldBuilder.buildEdmTypeField(
          'LicensePlateNumber',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link lineNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LINE_NUMBER: fieldBuilder.buildEdmTypeField(
          'LineNumber',
          'Edm.Decimal',
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
         * Static representation of the {@link productConfigurationId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_CONFIGURATION_ID: fieldBuilder.buildEdmTypeField(
          'ProductConfigurationId',
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
         * Static representation of the {@link warehouseLocationId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WAREHOUSE_LOCATION_ID: fieldBuilder.buildEdmTypeField(
          'WarehouseLocationId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link warehouseWorkId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WAREHOUSE_WORK_ID: fieldBuilder.buildEdmTypeField(
          'WarehouseWorkId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link adjustmentWarehouseWorkId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADJUSTMENT_WAREHOUSE_WORK_ID: fieldBuilder.buildEdmTypeField(
          'AdjustmentWarehouseWorkId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link expectedQuantity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXPECTED_QUANTITY: fieldBuilder.buildEdmTypeField(
          'ExpectedQuantity',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link countedQuantity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COUNTED_QUANTITY: fieldBuilder.buildEdmTypeField(
          'CountedQuantity',
          'Edm.Decimal',
          false
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
         * Static representation of the {@link isDiscrepancyRegistered} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_DISCREPANCY_REGISTERED: fieldBuilder.buildEnumField(
          'IsDiscrepancyRegistered',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link workCreatedDateTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WORK_CREATED_DATE_TIME: fieldBuilder.buildEdmTypeField(
          'WorkCreatedDateTime',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link isRegistered} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_REGISTERED: fieldBuilder.buildEnumField('IsRegistered', NoYes, true),
        /**
         * Static representation of the {@link workStatus} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WORK_STATUS: fieldBuilder.buildEnumField(
          'WorkStatus',
          WhsWorkStatus,
          true
        ),
        /**
         * Static representation of the {@link warehouseMobileDeviceUserId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WAREHOUSE_MOBILE_DEVICE_USER_ID: fieldBuilder.buildEdmTypeField(
          'WarehouseMobileDeviceUserId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link reviewResult} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REVIEW_RESULT: fieldBuilder.buildEnumField(
          'ReviewResult',
          WhsAcceptReject,
          true
        ),
        /**
         * Static representation of the {@link workClosedDateTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WORK_CLOSED_DATE_TIME: fieldBuilder.buildEdmTypeField(
          'WorkClosedDateTime',
          'Edm.DateTimeOffset',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', CycleCountingWarehouseWorkLines)
      };
    }

    return this._schema;
  }
}
