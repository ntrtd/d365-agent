/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { SourceSystemWarehouseInventoryOnhandReportLines } from './SourceSystemWarehouseInventoryOnhandReportLines';
import { SourceSystemWarehouseInventoryOnhandReportLinesRequestBuilder } from './SourceSystemWarehouseInventoryOnhandReportLinesRequestBuilder';
import { WarehouseInventoryOnhandReportsApi } from './WarehouseInventoryOnhandReportsApi';
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
  OneToOneLink
} from '@sap-cloud-sdk/odata-v4';
export class SourceSystemWarehouseInventoryOnhandReportLinesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<
      SourceSystemWarehouseInventoryOnhandReportLines<DeSerializersT>,
      DeSerializersT
    >
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
  ): SourceSystemWarehouseInventoryOnhandReportLinesApi<DeSerializersT> {
    return new SourceSystemWarehouseInventoryOnhandReportLinesApi(
      deSerializers
    );
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link warehouseInventoryOnhandReport} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WAREHOUSE_INVENTORY_ONHAND_REPORT: OneToOneLink<
      SourceSystemWarehouseInventoryOnhandReportLines<DeSerializersT>,
      DeSerializersT,
      WarehouseInventoryOnhandReportsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [WarehouseInventoryOnhandReportsApi<DeSerializersT>]
  ): this {
    this.navigationPropertyFields = {
      WAREHOUSE_INVENTORY_ONHAND_REPORT: new OneToOneLink(
        'WarehouseInventoryOnhandReport',
        this,
        linkedApis[0]
      )
    };
    return this;
  }

  entityConstructor = SourceSystemWarehouseInventoryOnhandReportLines;

  requestBuilder(): SourceSystemWarehouseInventoryOnhandReportLinesRequestBuilder<DeSerializersT> {
    return new SourceSystemWarehouseInventoryOnhandReportLinesRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    SourceSystemWarehouseInventoryOnhandReportLines<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      SourceSystemWarehouseInventoryOnhandReportLines<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    SourceSystemWarehouseInventoryOnhandReportLines<DeSerializersT>,
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
    typeof SourceSystemWarehouseInventoryOnhandReportLines,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        SourceSystemWarehouseInventoryOnhandReportLines,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      SourceSystemWarehouseInventoryOnhandReportLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    REPORT_NUMBER: OrderableEdmTypeField<
      SourceSystemWarehouseInventoryOnhandReportLines<DeSerializers>,
      DeSerializersT,
      'Edm.Guid',
      false,
      true
    >;
    PRODUCT_CONFIGURATION_ID: OrderableEdmTypeField<
      SourceSystemWarehouseInventoryOnhandReportLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PRODUCT_SIZE_ID: OrderableEdmTypeField<
      SourceSystemWarehouseInventoryOnhandReportLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PRODUCT_COLOR_ID: OrderableEdmTypeField<
      SourceSystemWarehouseInventoryOnhandReportLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PRODUCT_STYLE_ID: OrderableEdmTypeField<
      SourceSystemWarehouseInventoryOnhandReportLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PRODUCT_VERSION_ID: OrderableEdmTypeField<
      SourceSystemWarehouseInventoryOnhandReportLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    WAREHOUSE_ID: OrderableEdmTypeField<
      SourceSystemWarehouseInventoryOnhandReportLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    WAREHOUSE_LOCATION_ID: OrderableEdmTypeField<
      SourceSystemWarehouseInventoryOnhandReportLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    INVENTORY_STATUS_ID: OrderableEdmTypeField<
      SourceSystemWarehouseInventoryOnhandReportLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ITEM_BATCH_NUMBER: OrderableEdmTypeField<
      SourceSystemWarehouseInventoryOnhandReportLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ITEM_SERIAL_NUMBER: OrderableEdmTypeField<
      SourceSystemWarehouseInventoryOnhandReportLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    INVENTORY_GTD_ID: OrderableEdmTypeField<
      SourceSystemWarehouseInventoryOnhandReportLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    INVENTORY_OWNER_ID: OrderableEdmTypeField<
      SourceSystemWarehouseInventoryOnhandReportLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    INVENTORY_PROFILE_ID: OrderableEdmTypeField<
      SourceSystemWarehouseInventoryOnhandReportLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SOURCE_SYSTEM_INVENTORY_OWNER_ID: OrderableEdmTypeField<
      SourceSystemWarehouseInventoryOnhandReportLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SOURCE_SYSTEM_ITEM_NUMBER: OrderableEdmTypeField<
      SourceSystemWarehouseInventoryOnhandReportLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ON_HAND_QUANTITY: OrderableEdmTypeField<
      SourceSystemWarehouseInventoryOnhandReportLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    SOURCE_SYSTEM_ITEM_MASTER_NUMBER: OrderableEdmTypeField<
      SourceSystemWarehouseInventoryOnhandReportLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link warehouseInventoryOnhandReport} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WAREHOUSE_INVENTORY_ONHAND_REPORT: OneToOneLink<
      SourceSystemWarehouseInventoryOnhandReportLines<DeSerializersT>,
      DeSerializersT,
      WarehouseInventoryOnhandReportsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<
      SourceSystemWarehouseInventoryOnhandReportLines<DeSerializers>
    >;
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
         * Static representation of the {@link reportNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REPORT_NUMBER: fieldBuilder.buildEdmTypeField(
          'ReportNumber',
          'Edm.Guid',
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
         * Static representation of the {@link productColorId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_COLOR_ID: fieldBuilder.buildEdmTypeField(
          'ProductColorId',
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
         * Static representation of the {@link productVersionId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_VERSION_ID: fieldBuilder.buildEdmTypeField(
          'ProductVersionId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link warehouseId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WAREHOUSE_ID: fieldBuilder.buildEdmTypeField(
          'WarehouseId',
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
         * Static representation of the {@link itemSerialNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ITEM_SERIAL_NUMBER: fieldBuilder.buildEdmTypeField(
          'ItemSerialNumber',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link inventoryGtdId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVENTORY_GTD_ID: fieldBuilder.buildEdmTypeField(
          'InventoryGtdId',
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
         * Static representation of the {@link inventoryProfileId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVENTORY_PROFILE_ID: fieldBuilder.buildEdmTypeField(
          'InventoryProfileId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link sourceSystemInventoryOwnerId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SOURCE_SYSTEM_INVENTORY_OWNER_ID: fieldBuilder.buildEdmTypeField(
          'SourceSystemInventoryOwnerId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link sourceSystemItemNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SOURCE_SYSTEM_ITEM_NUMBER: fieldBuilder.buildEdmTypeField(
          'SourceSystemItemNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link onHandQuantity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ON_HAND_QUANTITY: fieldBuilder.buildEdmTypeField(
          'OnHandQuantity',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link sourceSystemItemMasterNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SOURCE_SYSTEM_ITEM_MASTER_NUMBER: fieldBuilder.buildEdmTypeField(
          'SourceSystemItemMasterNumber',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields(
          '*',
          SourceSystemWarehouseInventoryOnhandReportLines
        )
      };
    }

    return this._schema;
  }
}
