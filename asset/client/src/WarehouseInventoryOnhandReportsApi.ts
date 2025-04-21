/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { WarehouseInventoryOnhandReports } from './WarehouseInventoryOnhandReports';
import { WarehouseInventoryOnhandReportsRequestBuilder } from './WarehouseInventoryOnhandReportsRequestBuilder';
import { SourceSystemWarehouseInventoryOnhandReportLinesApi } from './SourceSystemWarehouseInventoryOnhandReportLinesApi';
import { WarehouseInventoryOnhandReportLinesApi } from './WarehouseInventoryOnhandReportLinesApi';
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
export class WarehouseInventoryOnhandReportsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<WarehouseInventoryOnhandReports<DeSerializersT>, DeSerializersT>
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
  ): WarehouseInventoryOnhandReportsApi<DeSerializersT> {
    return new WarehouseInventoryOnhandReportsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link sourceSystemWarehouseInventoryOnhandReportLine} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SOURCE_SYSTEM_WAREHOUSE_INVENTORY_ONHAND_REPORT_LINE: OneToManyLink<
      WarehouseInventoryOnhandReports<DeSerializersT>,
      DeSerializersT,
      SourceSystemWarehouseInventoryOnhandReportLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link warehouseInventoryOnhandReportLine} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WAREHOUSE_INVENTORY_ONHAND_REPORT_LINE: OneToManyLink<
      WarehouseInventoryOnhandReports<DeSerializersT>,
      DeSerializersT,
      WarehouseInventoryOnhandReportLinesApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      SourceSystemWarehouseInventoryOnhandReportLinesApi<DeSerializersT>,
      WarehouseInventoryOnhandReportLinesApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      SOURCE_SYSTEM_WAREHOUSE_INVENTORY_ONHAND_REPORT_LINE: new OneToManyLink(
        'SourceSystemWarehouseInventoryOnhandReportLine',
        this,
        linkedApis[0]
      ),
      WAREHOUSE_INVENTORY_ONHAND_REPORT_LINE: new OneToManyLink(
        'WarehouseInventoryOnhandReportLine',
        this,
        linkedApis[1]
      )
    };
    return this;
  }

  entityConstructor = WarehouseInventoryOnhandReports;

  requestBuilder(): WarehouseInventoryOnhandReportsRequestBuilder<DeSerializersT> {
    return new WarehouseInventoryOnhandReportsRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    WarehouseInventoryOnhandReports<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      WarehouseInventoryOnhandReports<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    WarehouseInventoryOnhandReports<DeSerializersT>,
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
    typeof WarehouseInventoryOnhandReports,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        WarehouseInventoryOnhandReports,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      WarehouseInventoryOnhandReports<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    REPORT_NUMBER: OrderableEdmTypeField<
      WarehouseInventoryOnhandReports<DeSerializers>,
      DeSerializersT,
      'Edm.Guid',
      false,
      true
    >;
    INCLUDE_ITEM_BATCH_NUMBER_DIMENSION: EnumField<
      WarehouseInventoryOnhandReports<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    INCLUDE_PRODUCT_COLOR_DIMENSION: EnumField<
      WarehouseInventoryOnhandReports<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    INCLUDE_ITEM_SERIAL_NUMBER_DIMENSION: EnumField<
      WarehouseInventoryOnhandReports<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    INCLUDE_PRODUCT_VERSION_DIMENSION: EnumField<
      WarehouseInventoryOnhandReports<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    REPORT_EXECUTION_TIME: OrderableEdmTypeField<
      WarehouseInventoryOnhandReports<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    INCLUDE_WAREHOUSE_LOCATION_DIMENSION: EnumField<
      WarehouseInventoryOnhandReports<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    INCLUDE_INVENTORY_STATUS_DIMENSION: EnumField<
      WarehouseInventoryOnhandReports<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    INCLUDE_INVENTORY_OWNER_DIMENSION: EnumField<
      WarehouseInventoryOnhandReports<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    INVENTORY_AS_OF_DATE: OrderableEdmTypeField<
      WarehouseInventoryOnhandReports<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    REPORT_NAME: OrderableEdmTypeField<
      WarehouseInventoryOnhandReports<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INCLUDE_PRODUCT_SIZE_DIMENSION: EnumField<
      WarehouseInventoryOnhandReports<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    INCLUDE_INVENTORY_PROFILE_DIMENSION: EnumField<
      WarehouseInventoryOnhandReports<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    INCLUDE_WAREHOUSE_DIMENSION: EnumField<
      WarehouseInventoryOnhandReports<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    INCLUDE_PRODUCT_CONFIGURATION_DIMENSION: EnumField<
      WarehouseInventoryOnhandReports<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    INCLUDE_INVENTORY_GTD_DIMENSION: EnumField<
      WarehouseInventoryOnhandReports<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    INCLUDE_PRODUCT_STYLE_DIMENSION: EnumField<
      WarehouseInventoryOnhandReports<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    INCLUDE_REGISTERED_AND_PICKED_TRANSACTIONS: EnumField<
      WarehouseInventoryOnhandReports<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link sourceSystemWarehouseInventoryOnhandReportLine} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SOURCE_SYSTEM_WAREHOUSE_INVENTORY_ONHAND_REPORT_LINE: OneToManyLink<
      WarehouseInventoryOnhandReports<DeSerializersT>,
      DeSerializersT,
      SourceSystemWarehouseInventoryOnhandReportLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link warehouseInventoryOnhandReportLine} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WAREHOUSE_INVENTORY_ONHAND_REPORT_LINE: OneToManyLink<
      WarehouseInventoryOnhandReports<DeSerializersT>,
      DeSerializersT,
      WarehouseInventoryOnhandReportLinesApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<WarehouseInventoryOnhandReports<DeSerializers>>;
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
         * Static representation of the {@link includeItemBatchNumberDimension} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INCLUDE_ITEM_BATCH_NUMBER_DIMENSION: fieldBuilder.buildEnumField(
          'IncludeItemBatchNumberDimension',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link includeProductColorDimension} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INCLUDE_PRODUCT_COLOR_DIMENSION: fieldBuilder.buildEnumField(
          'IncludeProductColorDimension',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link includeItemSerialNumberDimension} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INCLUDE_ITEM_SERIAL_NUMBER_DIMENSION: fieldBuilder.buildEnumField(
          'IncludeItemSerialNumberDimension',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link includeProductVersionDimension} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INCLUDE_PRODUCT_VERSION_DIMENSION: fieldBuilder.buildEnumField(
          'IncludeProductVersionDimension',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link reportExecutionTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REPORT_EXECUTION_TIME: fieldBuilder.buildEdmTypeField(
          'ReportExecutionTime',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link includeWarehouseLocationDimension} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INCLUDE_WAREHOUSE_LOCATION_DIMENSION: fieldBuilder.buildEnumField(
          'IncludeWarehouseLocationDimension',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link includeInventoryStatusDimension} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INCLUDE_INVENTORY_STATUS_DIMENSION: fieldBuilder.buildEnumField(
          'IncludeInventoryStatusDimension',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link includeInventoryOwnerDimension} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INCLUDE_INVENTORY_OWNER_DIMENSION: fieldBuilder.buildEnumField(
          'IncludeInventoryOwnerDimension',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link inventoryAsOfDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVENTORY_AS_OF_DATE: fieldBuilder.buildEdmTypeField(
          'InventoryAsOfDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link reportName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REPORT_NAME: fieldBuilder.buildEdmTypeField(
          'ReportName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link includeProductSizeDimension} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INCLUDE_PRODUCT_SIZE_DIMENSION: fieldBuilder.buildEnumField(
          'IncludeProductSizeDimension',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link includeInventoryProfileDimension} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INCLUDE_INVENTORY_PROFILE_DIMENSION: fieldBuilder.buildEnumField(
          'IncludeInventoryProfileDimension',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link includeWarehouseDimension} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INCLUDE_WAREHOUSE_DIMENSION: fieldBuilder.buildEnumField(
          'IncludeWarehouseDimension',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link includeProductConfigurationDimension} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INCLUDE_PRODUCT_CONFIGURATION_DIMENSION: fieldBuilder.buildEnumField(
          'IncludeProductConfigurationDimension',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link includeInventoryGtdDimension} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INCLUDE_INVENTORY_GTD_DIMENSION: fieldBuilder.buildEnumField(
          'IncludeInventoryGtdDimension',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link includeProductStyleDimension} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INCLUDE_PRODUCT_STYLE_DIMENSION: fieldBuilder.buildEnumField(
          'IncludeProductStyleDimension',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link includeRegisteredAndPickedTransactions} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INCLUDE_REGISTERED_AND_PICKED_TRANSACTIONS: fieldBuilder.buildEnumField(
          'IncludeRegisteredAndPickedTransactions',
          NoYes,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', WarehouseInventoryOnhandReports)
      };
    }

    return this._schema;
  }
}
