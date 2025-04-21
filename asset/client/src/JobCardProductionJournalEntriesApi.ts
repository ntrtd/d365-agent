/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { JobCardProductionJournalEntries } from './JobCardProductionJournalEntries';
import { JobCardProductionJournalEntriesRequestBuilder } from './JobCardProductionJournalEntriesRequestBuilder';
import { OperationsApi } from './OperationsApi';
import { WarehousesApi } from './WarehousesApi';
import { DimensionSetsApi } from './DimensionSetsApi';
import { ItemBatchesApi } from './ItemBatchesApi';
import { OperationalSitesApi } from './OperationalSitesApi';
import { ProductSizesApi } from './ProductSizesApi';
import { ProductColorsApi } from './ProductColorsApi';
import { ProductVersionsApi } from './ProductVersionsApi';
import { ProductStylesApi } from './ProductStylesApi';
import { ProductionOrderHeadersApi } from './ProductionOrderHeadersApi';
import { NoYes } from './NoYes';
import { RouteOprPriority } from './RouteOprPriority';
import { RouteJobType } from './RouteJobType';
import { ProdErrorCause } from './ProdErrorCause';
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
export class JobCardProductionJournalEntriesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<JobCardProductionJournalEntries<DeSerializersT>, DeSerializersT>
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
  ): JobCardProductionJournalEntriesApi<DeSerializersT> {
    return new JobCardProductionJournalEntriesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link routeOperation} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ROUTE_OPERATION: OneToOneLink<
      JobCardProductionJournalEntries<DeSerializersT>,
      DeSerializersT,
      OperationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link warehouse} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WAREHOUSE: OneToOneLink<
      JobCardProductionJournalEntries<DeSerializersT>,
      DeSerializersT,
      WarehousesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link dimensionSet} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DIMENSION_SET: OneToOneLink<
      JobCardProductionJournalEntries<DeSerializersT>,
      DeSerializersT,
      DimensionSetsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link itemBatch} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ITEM_BATCH: OneToOneLink<
      JobCardProductionJournalEntries<DeSerializersT>,
      DeSerializersT,
      ItemBatchesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link productionSite} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCTION_SITE: OneToOneLink<
      JobCardProductionJournalEntries<DeSerializersT>,
      DeSerializersT,
      OperationalSitesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link productSize} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_SIZE: OneToOneLink<
      JobCardProductionJournalEntries<DeSerializersT>,
      DeSerializersT,
      ProductSizesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link productColor} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_COLOR: OneToOneLink<
      JobCardProductionJournalEntries<DeSerializersT>,
      DeSerializersT,
      ProductColorsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link productVersion} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_VERSION: OneToOneLink<
      JobCardProductionJournalEntries<DeSerializersT>,
      DeSerializersT,
      ProductVersionsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link productStyle} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_STYLE: OneToOneLink<
      JobCardProductionJournalEntries<DeSerializersT>,
      DeSerializersT,
      ProductStylesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link productionOrderHeader} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCTION_ORDER_HEADER: OneToOneLink<
      JobCardProductionJournalEntries<DeSerializersT>,
      DeSerializersT,
      ProductionOrderHeadersApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      OperationsApi<DeSerializersT>,
      WarehousesApi<DeSerializersT>,
      DimensionSetsApi<DeSerializersT>,
      ItemBatchesApi<DeSerializersT>,
      OperationalSitesApi<DeSerializersT>,
      ProductSizesApi<DeSerializersT>,
      ProductColorsApi<DeSerializersT>,
      ProductVersionsApi<DeSerializersT>,
      ProductStylesApi<DeSerializersT>,
      ProductionOrderHeadersApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      ROUTE_OPERATION: new OneToOneLink('RouteOperation', this, linkedApis[0]),
      WAREHOUSE: new OneToOneLink('Warehouse', this, linkedApis[1]),
      DIMENSION_SET: new OneToOneLink('DimensionSet', this, linkedApis[2]),
      ITEM_BATCH: new OneToOneLink('ItemBatch', this, linkedApis[3]),
      PRODUCTION_SITE: new OneToOneLink('ProductionSite', this, linkedApis[4]),
      PRODUCT_SIZE: new OneToOneLink('ProductSize', this, linkedApis[5]),
      PRODUCT_COLOR: new OneToOneLink('ProductColor', this, linkedApis[6]),
      PRODUCT_VERSION: new OneToOneLink('ProductVersion', this, linkedApis[7]),
      PRODUCT_STYLE: new OneToOneLink('ProductStyle', this, linkedApis[8]),
      PRODUCTION_ORDER_HEADER: new OneToOneLink(
        'ProductionOrderHeader',
        this,
        linkedApis[9]
      )
    };
    return this;
  }

  entityConstructor = JobCardProductionJournalEntries;

  requestBuilder(): JobCardProductionJournalEntriesRequestBuilder<DeSerializersT> {
    return new JobCardProductionJournalEntriesRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    JobCardProductionJournalEntries<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      JobCardProductionJournalEntries<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    JobCardProductionJournalEntries<DeSerializersT>,
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
    typeof JobCardProductionJournalEntries,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        JobCardProductionJournalEntries,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      JobCardProductionJournalEntries<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    JOURNAL_NUMBER: OrderableEdmTypeField<
      JobCardProductionJournalEntries<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    JOURNAL_LINE_NUMBER: OrderableEdmTypeField<
      JobCardProductionJournalEntries<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    OPERATIONS_RESOURCE_ID: OrderableEdmTypeField<
      JobCardProductionJournalEntries<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PICKING_LIST_JOURNAL_NUMBER: OrderableEdmTypeField<
      JobCardProductionJournalEntries<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ROUTE_OPERATION_ID: OrderableEdmTypeField<
      JobCardProductionJournalEntries<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRODUCT_CONFIGURATION_ID: OrderableEdmTypeField<
      JobCardProductionJournalEntries<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    JOB_PROCESSING_PERCENTAGE: OrderableEdmTypeField<
      JobCardProductionJournalEntries<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    POSTED_DATE_TIME: OrderableEdmTypeField<
      JobCardProductionJournalEntries<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    CONSUMPTION_DATE: OrderableEdmTypeField<
      JobCardProductionJournalEntries<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    IS_POSTED: EnumField<
      JobCardProductionJournalEntries<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    PRODUCTION_SITE_ID: OrderableEdmTypeField<
      JobCardProductionJournalEntries<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRODUCTION_JOB_ID: OrderableEdmTypeField<
      JobCardProductionJournalEntries<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRODUCT_SIZE_ID: OrderableEdmTypeField<
      JobCardProductionJournalEntries<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRODUCT_VERSION_ID: OrderableEdmTypeField<
      JobCardProductionJournalEntries<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    JOURNAL_DESCRIPTION: OrderableEdmTypeField<
      JobCardProductionJournalEntries<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SCHEDULED_END_TIME: OrderableEdmTypeField<
      JobCardProductionJournalEntries<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    ITEM_SERIAL_NUMBER: OrderableEdmTypeField<
      JobCardProductionJournalEntries<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INVENTORY_OWNER_ID: OrderableEdmTypeField<
      JobCardProductionJournalEntries<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    QUANTITY_COST_CATEGORY_UNIT_COST: OrderableEdmTypeField<
      JobCardProductionJournalEntries<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    HOURLY_COST_CATEGORY_RATE: OrderableEdmTypeField<
      JobCardProductionJournalEntries<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ROUTE_OPERATION_PRIORITY: EnumField<
      JobCardProductionJournalEntries<DeSerializers>,
      DeSerializersT,
      RouteOprPriority,
      true,
      true
    >;
    VOUCHER_NUMBER: OrderableEdmTypeField<
      JobCardProductionJournalEntries<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    JOURNAL_NAME: OrderableEdmTypeField<
      JobCardProductionJournalEntries<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REPORTED_GOOD_CATCH_WEIGHT_QUANTITY: OrderableEdmTypeField<
      JobCardProductionJournalEntries<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    REPORTED_GOOD_INVENTORY_QUANTITY: OrderableEdmTypeField<
      JobCardProductionJournalEntries<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    RECEIVED_INVENTORY_STATUS_ID: OrderableEdmTypeField<
      JobCardProductionJournalEntries<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REPORT_AS_FINISHED_PRODUCTION_JOURNAL_NUMBER: OrderableEdmTypeField<
      JobCardProductionJournalEntries<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRODUCTION_ORDER_NUMBER: OrderableEdmTypeField<
      JobCardProductionJournalEntries<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ROUTE_JOB_TYPE: EnumField<
      JobCardProductionJournalEntries<DeSerializers>,
      DeSerializersT,
      RouteJobType,
      true,
      true
    >;
    WILL_ROUTE_CARD_POSTING_AUTOMATICALLY_POST_PICKING_LIST: EnumField<
      JobCardProductionJournalEntries<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    WILL_LAST_OPERATION_ENDING_EXECUTE_REPORT_AS_FINISHED: EnumField<
      JobCardProductionJournalEntries<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    SCHEDULED_START_TIME: OrderableEdmTypeField<
      JobCardProductionJournalEntries<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    REPORTED_ERROR_CATCH_WEIGHT_QUANTITY: OrderableEdmTypeField<
      JobCardProductionJournalEntries<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    HOURS_ROUTE_COST_CATEGORY_ID: OrderableEdmTypeField<
      JobCardProductionJournalEntries<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ITEM_BATCH_NUMBER: OrderableEdmTypeField<
      JobCardProductionJournalEntries<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    WAREHOUSE_ID: OrderableEdmTypeField<
      JobCardProductionJournalEntries<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    QUANTITY_ROUTE_COST_CATEGORY_ID: OrderableEdmTypeField<
      JobCardProductionJournalEntries<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_OPERATION_COMPLETED: EnumField<
      JobCardProductionJournalEntries<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    PRODUCT_COLOR_ID: OrderableEdmTypeField<
      JobCardProductionJournalEntries<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REGISTERED_HOURS: OrderableEdmTypeField<
      JobCardProductionJournalEntries<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ERROR_CAUSE: EnumField<
      JobCardProductionJournalEntries<DeSerializers>,
      DeSerializersT,
      ProdErrorCause,
      true,
      true
    >;
    REPORTED_ERROR_INVENTORY_QUANTITY: OrderableEdmTypeField<
      JobCardProductionJournalEntries<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ROUTE_OPERATION_NUMBER: OrderableEdmTypeField<
      JobCardProductionJournalEntries<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    LICENSE_PLATE_NUMBER: OrderableEdmTypeField<
      JobCardProductionJournalEntries<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_JOB_ENDED: EnumField<
      JobCardProductionJournalEntries<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    DEFAULT_DIMENSION_DISPLAY_VALUE: OrderableEdmTypeField<
      JobCardProductionJournalEntries<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    POSTED_USER_ID: OrderableEdmTypeField<
      JobCardProductionJournalEntries<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRODUCT_STYLE_ID: OrderableEdmTypeField<
      JobCardProductionJournalEntries<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link routeOperation} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ROUTE_OPERATION: OneToOneLink<
      JobCardProductionJournalEntries<DeSerializersT>,
      DeSerializersT,
      OperationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link warehouse} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WAREHOUSE: OneToOneLink<
      JobCardProductionJournalEntries<DeSerializersT>,
      DeSerializersT,
      WarehousesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link dimensionSet} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DIMENSION_SET: OneToOneLink<
      JobCardProductionJournalEntries<DeSerializersT>,
      DeSerializersT,
      DimensionSetsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link itemBatch} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ITEM_BATCH: OneToOneLink<
      JobCardProductionJournalEntries<DeSerializersT>,
      DeSerializersT,
      ItemBatchesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link productionSite} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCTION_SITE: OneToOneLink<
      JobCardProductionJournalEntries<DeSerializersT>,
      DeSerializersT,
      OperationalSitesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link productSize} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_SIZE: OneToOneLink<
      JobCardProductionJournalEntries<DeSerializersT>,
      DeSerializersT,
      ProductSizesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link productColor} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_COLOR: OneToOneLink<
      JobCardProductionJournalEntries<DeSerializersT>,
      DeSerializersT,
      ProductColorsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link productVersion} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_VERSION: OneToOneLink<
      JobCardProductionJournalEntries<DeSerializersT>,
      DeSerializersT,
      ProductVersionsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link productStyle} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCT_STYLE: OneToOneLink<
      JobCardProductionJournalEntries<DeSerializersT>,
      DeSerializersT,
      ProductStylesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link productionOrderHeader} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCTION_ORDER_HEADER: OneToOneLink<
      JobCardProductionJournalEntries<DeSerializersT>,
      DeSerializersT,
      ProductionOrderHeadersApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<JobCardProductionJournalEntries<DeSerializers>>;
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
         * Static representation of the {@link journalNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        JOURNAL_NUMBER: fieldBuilder.buildEdmTypeField(
          'JournalNumber',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link journalLineNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        JOURNAL_LINE_NUMBER: fieldBuilder.buildEdmTypeField(
          'JournalLineNumber',
          'Edm.Decimal',
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
         * Static representation of the {@link pickingListJournalNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PICKING_LIST_JOURNAL_NUMBER: fieldBuilder.buildEdmTypeField(
          'PickingListJournalNumber',
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
         * Static representation of the {@link jobProcessingPercentage} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        JOB_PROCESSING_PERCENTAGE: fieldBuilder.buildEdmTypeField(
          'JobProcessingPercentage',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link postedDateTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        POSTED_DATE_TIME: fieldBuilder.buildEdmTypeField(
          'PostedDateTime',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link consumptionDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONSUMPTION_DATE: fieldBuilder.buildEdmTypeField(
          'ConsumptionDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link isPosted} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_POSTED: fieldBuilder.buildEnumField('IsPosted', NoYes, true),
        /**
         * Static representation of the {@link productionSiteId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCTION_SITE_ID: fieldBuilder.buildEdmTypeField(
          'ProductionSiteId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link productionJobId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCTION_JOB_ID: fieldBuilder.buildEdmTypeField(
          'ProductionJobId',
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
         * Static representation of the {@link productVersionId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_VERSION_ID: fieldBuilder.buildEdmTypeField(
          'ProductVersionId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link journalDescription} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        JOURNAL_DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'JournalDescription',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link scheduledEndTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SCHEDULED_END_TIME: fieldBuilder.buildEdmTypeField(
          'ScheduledEndTime',
          'Edm.Int32',
          false
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
         * Static representation of the {@link quantityCostCategoryUnitCost} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        QUANTITY_COST_CATEGORY_UNIT_COST: fieldBuilder.buildEdmTypeField(
          'QuantityCostCategoryUnitCost',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link hourlyCostCategoryRate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        HOURLY_COST_CATEGORY_RATE: fieldBuilder.buildEdmTypeField(
          'HourlyCostCategoryRate',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link routeOperationPriority} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ROUTE_OPERATION_PRIORITY: fieldBuilder.buildEnumField(
          'RouteOperationPriority',
          RouteOprPriority,
          true
        ),
        /**
         * Static representation of the {@link voucherNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VOUCHER_NUMBER: fieldBuilder.buildEdmTypeField(
          'VoucherNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link journalName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        JOURNAL_NAME: fieldBuilder.buildEdmTypeField(
          'JournalName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link reportedGoodCatchWeightQuantity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REPORTED_GOOD_CATCH_WEIGHT_QUANTITY: fieldBuilder.buildEdmTypeField(
          'ReportedGoodCatchWeightQuantity',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link reportedGoodInventoryQuantity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REPORTED_GOOD_INVENTORY_QUANTITY: fieldBuilder.buildEdmTypeField(
          'ReportedGoodInventoryQuantity',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link receivedInventoryStatusId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RECEIVED_INVENTORY_STATUS_ID: fieldBuilder.buildEdmTypeField(
          'ReceivedInventoryStatusId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link reportAsFinishedProductionJournalNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REPORT_AS_FINISHED_PRODUCTION_JOURNAL_NUMBER:
          fieldBuilder.buildEdmTypeField(
            'ReportAsFinishedProductionJournalNumber',
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
         * Static representation of the {@link routeJobType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ROUTE_JOB_TYPE: fieldBuilder.buildEnumField(
          'RouteJobType',
          RouteJobType,
          true
        ),
        /**
         * Static representation of the {@link willRouteCardPostingAutomaticallyPostPickingList} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WILL_ROUTE_CARD_POSTING_AUTOMATICALLY_POST_PICKING_LIST:
          fieldBuilder.buildEnumField(
            'WillRouteCardPostingAutomaticallyPostPickingList',
            NoYes,
            true
          ),
        /**
         * Static representation of the {@link willLastOperationEndingExecuteReportAsFinished} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WILL_LAST_OPERATION_ENDING_EXECUTE_REPORT_AS_FINISHED:
          fieldBuilder.buildEnumField(
            'WillLastOperationEndingExecuteReportAsFinished',
            NoYes,
            true
          ),
        /**
         * Static representation of the {@link scheduledStartTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SCHEDULED_START_TIME: fieldBuilder.buildEdmTypeField(
          'ScheduledStartTime',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link reportedErrorCatchWeightQuantity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REPORTED_ERROR_CATCH_WEIGHT_QUANTITY: fieldBuilder.buildEdmTypeField(
          'ReportedErrorCatchWeightQuantity',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link hoursRouteCostCategoryId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        HOURS_ROUTE_COST_CATEGORY_ID: fieldBuilder.buildEdmTypeField(
          'HoursRouteCostCategoryId',
          'Edm.String',
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
         * Static representation of the {@link quantityRouteCostCategoryId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        QUANTITY_ROUTE_COST_CATEGORY_ID: fieldBuilder.buildEdmTypeField(
          'QuantityRouteCostCategoryId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link isOperationCompleted} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_OPERATION_COMPLETED: fieldBuilder.buildEnumField(
          'IsOperationCompleted',
          NoYes,
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
         * Static representation of the {@link registeredHours} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REGISTERED_HOURS: fieldBuilder.buildEdmTypeField(
          'RegisteredHours',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link errorCause} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ERROR_CAUSE: fieldBuilder.buildEnumField(
          'ErrorCause',
          ProdErrorCause,
          true
        ),
        /**
         * Static representation of the {@link reportedErrorInventoryQuantity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REPORTED_ERROR_INVENTORY_QUANTITY: fieldBuilder.buildEdmTypeField(
          'ReportedErrorInventoryQuantity',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link routeOperationNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ROUTE_OPERATION_NUMBER: fieldBuilder.buildEdmTypeField(
          'RouteOperationNumber',
          'Edm.Int32',
          false
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
         * Static representation of the {@link isJobEnded} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_JOB_ENDED: fieldBuilder.buildEnumField('IsJobEnded', NoYes, true),
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
         * Static representation of the {@link postedUserId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        POSTED_USER_ID: fieldBuilder.buildEdmTypeField(
          'PostedUserId',
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
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', JobCardProductionJournalEntries)
      };
    }

    return this._schema;
  }
}
