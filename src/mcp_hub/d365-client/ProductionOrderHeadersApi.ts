/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ProductionOrderHeaders } from './ProductionOrderHeaders';
import { ProductionOrderHeadersRequestBuilder } from './ProductionOrderHeadersRequestBuilder';
import { RouteCardProductionJournalEntriesApi } from './RouteCardProductionJournalEntriesApi';
import { ProductionPoolsApi } from './ProductionPoolsApi';
import { ReleasedProductsV2Api } from './ReleasedProductsV2Api';
import { DimensionSetsApi } from './DimensionSetsApi';
import { ProductionOrderBillOfMaterialLinesApi } from './ProductionOrderBillOfMaterialLinesApi';
import { JobCardProductionJournalEntriesApi } from './JobCardProductionJournalEntriesApi';
import { ProductionOrderRouteOperationsApi } from './ProductionOrderRouteOperationsApi';
import { ProductionPickingListJournalEntriesApi } from './ProductionPickingListJournalEntriesApi';
import { ProductionOrderRouteJobsApi } from './ProductionOrderRouteJobsApi';
import { QualityOrderHeadersApi } from './QualityOrderHeadersApi';
import { ReportAsFinishedProductionJournalEntriesApi } from './ReportAsFinishedProductionJournalEntriesApi';
import { NoYes } from './NoYes';
import { ProdWhsReleasePolicy } from './ProdWhsReleasePolicy';
import { ProdStatus } from './ProdStatus';
import { ProdPostingType } from './ProdPostingType';
import { ProdSchedStatus } from './ProdSchedStatus';
import { ProdReservation } from './ProdReservation';
import { SchedDirection } from './SchedDirection';
import { CostProfitSet } from './CostProfitSet';
import { ProdBackStatus } from './ProdBackStatus';
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
export class ProductionOrderHeadersApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<ProductionOrderHeaders<DeSerializersT>, DeSerializersT>
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
  ): ProductionOrderHeadersApi<DeSerializersT> {
    return new ProductionOrderHeadersApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link routeCardProductionJournalEntries} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ROUTE_CARD_PRODUCTION_JOURNAL_ENTRIES: OneToManyLink<
      ProductionOrderHeaders<DeSerializersT>,
      DeSerializersT,
      RouteCardProductionJournalEntriesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link productionPool} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCTION_POOL: OneToOneLink<
      ProductionOrderHeaders<DeSerializersT>,
      DeSerializersT,
      ProductionPoolsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link releasedProductV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RELEASED_PRODUCT_V_2: OneToOneLink<
      ProductionOrderHeaders<DeSerializersT>,
      DeSerializersT,
      ReleasedProductsV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link dimensionSet} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DIMENSION_SET: OneToOneLink<
      ProductionOrderHeaders<DeSerializersT>,
      DeSerializersT,
      DimensionSetsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link parentProductionOrderHeader} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PARENT_PRODUCTION_ORDER_HEADER: OneToOneLink<
      ProductionOrderHeaders<DeSerializersT>,
      DeSerializersT,
      ProductionOrderHeadersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link childProductionOrderHeaders} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CHILD_PRODUCTION_ORDER_HEADERS: OneToManyLink<
      ProductionOrderHeaders<DeSerializersT>,
      DeSerializersT,
      ProductionOrderHeadersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link produtionOrderBomLines} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUTION_ORDER_BOM_LINES: OneToManyLink<
      ProductionOrderHeaders<DeSerializersT>,
      DeSerializersT,
      ProductionOrderBillOfMaterialLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link jobCardProductionJournalEntries} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JOB_CARD_PRODUCTION_JOURNAL_ENTRIES: OneToManyLink<
      ProductionOrderHeaders<DeSerializersT>,
      DeSerializersT,
      JobCardProductionJournalEntriesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link produtionOrderRouteOperations} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUTION_ORDER_ROUTE_OPERATIONS: OneToManyLink<
      ProductionOrderHeaders<DeSerializersT>,
      DeSerializersT,
      ProductionOrderRouteOperationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link productionPickingListJournalEntries} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCTION_PICKING_LIST_JOURNAL_ENTRIES: OneToManyLink<
      ProductionOrderHeaders<DeSerializersT>,
      DeSerializersT,
      ProductionPickingListJournalEntriesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link productionOrderRouteJobs} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCTION_ORDER_ROUTE_JOBS: OneToManyLink<
      ProductionOrderHeaders<DeSerializersT>,
      DeSerializersT,
      ProductionOrderRouteJobsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link qualityOrderHeaders} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    QUALITY_ORDER_HEADERS: OneToManyLink<
      ProductionOrderHeaders<DeSerializersT>,
      DeSerializersT,
      QualityOrderHeadersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link reportAsFinishedProductionJournalEntries} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    REPORT_AS_FINISHED_PRODUCTION_JOURNAL_ENTRIES: OneToManyLink<
      ProductionOrderHeaders<DeSerializersT>,
      DeSerializersT,
      ReportAsFinishedProductionJournalEntriesApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      RouteCardProductionJournalEntriesApi<DeSerializersT>,
      ProductionPoolsApi<DeSerializersT>,
      ReleasedProductsV2Api<DeSerializersT>,
      DimensionSetsApi<DeSerializersT>,
      ProductionOrderHeadersApi<DeSerializersT>,
      ProductionOrderHeadersApi<DeSerializersT>,
      ProductionOrderBillOfMaterialLinesApi<DeSerializersT>,
      JobCardProductionJournalEntriesApi<DeSerializersT>,
      ProductionOrderRouteOperationsApi<DeSerializersT>,
      ProductionPickingListJournalEntriesApi<DeSerializersT>,
      ProductionOrderRouteJobsApi<DeSerializersT>,
      QualityOrderHeadersApi<DeSerializersT>,
      ReportAsFinishedProductionJournalEntriesApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      ROUTE_CARD_PRODUCTION_JOURNAL_ENTRIES: new OneToManyLink(
        'RouteCardProductionJournalEntries',
        this,
        linkedApis[0]
      ),
      PRODUCTION_POOL: new OneToOneLink('ProductionPool', this, linkedApis[1]),
      RELEASED_PRODUCT_V_2: new OneToOneLink(
        'ReleasedProductV2',
        this,
        linkedApis[2]
      ),
      DIMENSION_SET: new OneToOneLink('DimensionSet', this, linkedApis[3]),
      PARENT_PRODUCTION_ORDER_HEADER: new OneToOneLink(
        'ParentProductionOrderHeader',
        this,
        linkedApis[4]
      ),
      CHILD_PRODUCTION_ORDER_HEADERS: new OneToManyLink(
        'ChildProductionOrderHeaders',
        this,
        linkedApis[5]
      ),
      PRODUTION_ORDER_BOM_LINES: new OneToManyLink(
        'ProdutionOrderBOMLines',
        this,
        linkedApis[6]
      ),
      JOB_CARD_PRODUCTION_JOURNAL_ENTRIES: new OneToManyLink(
        'JobCardProductionJournalEntries',
        this,
        linkedApis[7]
      ),
      PRODUTION_ORDER_ROUTE_OPERATIONS: new OneToManyLink(
        'ProdutionOrderRouteOperations',
        this,
        linkedApis[8]
      ),
      PRODUCTION_PICKING_LIST_JOURNAL_ENTRIES: new OneToManyLink(
        'ProductionPickingListJournalEntries',
        this,
        linkedApis[9]
      ),
      PRODUCTION_ORDER_ROUTE_JOBS: new OneToManyLink(
        'ProductionOrderRouteJobs',
        this,
        linkedApis[10]
      ),
      QUALITY_ORDER_HEADERS: new OneToManyLink(
        'QualityOrderHeaders',
        this,
        linkedApis[11]
      ),
      REPORT_AS_FINISHED_PRODUCTION_JOURNAL_ENTRIES: new OneToManyLink(
        'ReportAsFinishedProductionJournalEntries',
        this,
        linkedApis[12]
      )
    };
    return this;
  }

  entityConstructor = ProductionOrderHeaders;

  requestBuilder(): ProductionOrderHeadersRequestBuilder<DeSerializersT> {
    return new ProductionOrderHeadersRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    ProductionOrderHeaders<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      ProductionOrderHeaders<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    ProductionOrderHeaders<DeSerializersT>,
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
    typeof ProductionOrderHeaders,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        ProductionOrderHeaders,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      ProductionOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PRODUCTION_ORDER_NUMBER: OrderableEdmTypeField<
      ProductionOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ARE_ROUTE_JOBS_GENERATED: EnumField<
      ProductionOrderHeaders<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    SCHEDULED_QUANTITY: OrderableEdmTypeField<
      ProductionOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    SOURCE_PLANNED_ORDER_NUMBER: OrderableEdmTypeField<
      ProductionOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_PRODUCTION_ORDER_SCHEDULING_LOCKED: EnumField<
      ProductionOrderHeaders<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    WAREHOUSE_RELEASE_RESERVATION_REQUIREMENT_RULE: EnumField<
      ProductionOrderHeaders<DeSerializers>,
      DeSerializersT,
      ProdWhsReleasePolicy,
      true,
      true
    >;
    DEMAND_PRODUCTION_ORDER_NUMBER: OrderableEdmTypeField<
      ProductionOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ITEM_NUMBER: OrderableEdmTypeField<
      ProductionOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SKIP_CREATE_PRODUCTION_ROUTE_OPERATIONS: EnumField<
      ProductionOrderHeaders<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    SCHEDULED_END_TIME: OrderableEdmTypeField<
      ProductionOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    SOURCE_ROUTE_ID: OrderableEdmTypeField<
      ProductionOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRODUCTION_GROUP_ID: OrderableEdmTypeField<
      ProductionOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRODUCTION_ORDER_STATUS: EnumField<
      ProductionOrderHeaders<DeSerializers>,
      DeSerializersT,
      ProdStatus,
      true,
      true
    >;
    PRODUCT_STYLE_ID: OrderableEdmTypeField<
      ProductionOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    STARTED_DATE: OrderableEdmTypeField<
      ProductionOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    SOURCE_MASTER_PLAN_ID: OrderableEdmTypeField<
      ProductionOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LICENSE_PLATE_NUMBER: OrderableEdmTypeField<
      ProductionOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRODUCT_CONFIGURATION_ID: OrderableEdmTypeField<
      ProductionOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_PRODUCTION_ROUTE_OPERATION_VALID: EnumField<
      ProductionOrderHeaders<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    PRODUCTION_CONSUMPTION_WIDTH_CONVERSION_FACTOR: OrderableEdmTypeField<
      ProductionOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ITEM_BATCH_NUMBER: OrderableEdmTypeField<
      ProductionOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DEMAND_INVENTORY_JOURNAL_NUMBER: OrderableEdmTypeField<
      ProductionOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SCHEDULED_START_DATE: OrderableEdmTypeField<
      ProductionOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    SUBCONTRACTING_PURCHASE_ORDER_NUMBER: OrderableEdmTypeField<
      ProductionOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DELIVERY_DATE: OrderableEdmTypeField<
      ProductionOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    STARTED_QUANTITY: OrderableEdmTypeField<
      ProductionOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    SCHEDULED_DATE: OrderableEdmTypeField<
      ProductionOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    PRODUCT_SIZE_ID: OrderableEdmTypeField<
      ProductionOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRODUCTION_CONSUMPTION_DEPTH_CONVERSION_FACTOR: OrderableEdmTypeField<
      ProductionOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PRODUCTION_ORDER_LEDGER_POSTING_RULE: EnumField<
      ProductionOrderHeaders<DeSerializers>,
      DeSerializersT,
      ProdPostingType,
      true,
      true
    >;
    DEMAND_PRODUCTION_ORDER_HEADER_INVENTORY_LOT_ID: OrderableEdmTypeField<
      ProductionOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRODUCTION_POOL_ID: OrderableEdmTypeField<
      ProductionOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INVENTORY_STATUS_ID: OrderableEdmTypeField<
      ProductionOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DEMAND_PRODUCTION_ORDER_LINE_INVENTORY_LOT_ID: OrderableEdmTypeField<
      ProductionOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INVENTORY_OWNER_ID: OrderableEdmTypeField<
      ProductionOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SCHEDULING_METHOD: EnumField<
      ProductionOrderHeaders<DeSerializers>,
      DeSerializersT,
      ProdSchedStatus,
      true,
      true
    >;
    DEMAND_SALES_ORDER_NUMBER: OrderableEdmTypeField<
      ProductionOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REMAINING_REPORT_AS_FINISHED_QUANTITY: OrderableEdmTypeField<
      ProductionOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    AUTO_RESERVATION_MODE: EnumField<
      ProductionOrderHeaders<DeSerializers>,
      DeSerializersT,
      ProdReservation,
      true,
      true
    >;
    PRODUCTION_WAREHOUSE_LOCATION_ID: OrderableEdmTypeField<
      ProductionOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SOURCE_BOM_VERSION_VALIDITY_DATE: OrderableEdmTypeField<
      ProductionOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    PRODUCTION_WAREHOUSE_ID: OrderableEdmTypeField<
      ProductionOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LAST_SCHEDULING_DATE_DIRECTION: EnumField<
      ProductionOrderHeaders<DeSerializers>,
      DeSerializersT,
      SchedDirection,
      true,
      true
    >;
    PRODUCTION_ORDER_NAME: OrderableEdmTypeField<
      ProductionOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DEMAND_TRANSFER_ORDER_NUMBER: OrderableEdmTypeField<
      ProductionOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    WORKING_TIME_SCHEDULING_PROPERTY_ID: OrderableEdmTypeField<
      ProductionOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ESTIMATED_DATE: OrderableEdmTypeField<
      ProductionOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    PRODUCT_SERIAL_NUMBER: OrderableEdmTypeField<
      ProductionOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRODUCT_VERSION_ID: OrderableEdmTypeField<
      ProductionOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REPORTED_AS_FINISHED_DATE: OrderableEdmTypeField<
      ProductionOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    LAST_SCHEDULING_TIME: OrderableEdmTypeField<
      ProductionOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    PRODUCTION_CONSUMPTION_DENSITY_CONVERSION_FACTOR: OrderableEdmTypeField<
      ProductionOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PRODUCTION_LEVEL: OrderableEdmTypeField<
      ProductionOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    INVENTORY_LOT_ID: OrderableEdmTypeField<
      ProductionOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRODUCTION_CONSUMPTION_HEIGHT_CONVERSION_FACTOR: OrderableEdmTypeField<
      ProductionOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PLANNING_PRIORITY: OrderableEdmTypeField<
      ProductionOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PRODUCTION_ORDER_PRIORITY: OrderableEdmTypeField<
      ProductionOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    ESTIMATED_QUANTITY: OrderableEdmTypeField<
      ProductionOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    DELIVERY_TIME: OrderableEdmTypeField<
      ProductionOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    DEFAULT_LEDGER_DIMENSION_DISPLAY_VALUE: OrderableEdmTypeField<
      ProductionOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ENDED_DATE: OrderableEdmTypeField<
      ProductionOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    PARENT_PRODUCTION_ORDER_NUMBER: OrderableEdmTypeField<
      ProductionOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRODUCT_COLOR_ID: OrderableEdmTypeField<
      ProductionOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRODUCTION_SITE_ID: OrderableEdmTypeField<
      ProductionOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    GANTT_CHART_COLOR_NUMBER: OrderableEdmTypeField<
      ProductionOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    SOURCE_BOM_ID: OrderableEdmTypeField<
      ProductionOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SCHEDULED_END_DATE: OrderableEdmTypeField<
      ProductionOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    LAST_SCHEDULING_DATE: OrderableEdmTypeField<
      ProductionOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    DEMAND_SALES_ORDER_LINE_INVENTORY_LOT_ID: OrderableEdmTypeField<
      ProductionOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SUBCONTRACTING_PURCHASE_ORDER_LINE_INVENTORY_LOT_ID: OrderableEdmTypeField<
      ProductionOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DEMAND_INVENTORY_JOURNAL_LINE_INVENTORY_LOT_ID: OrderableEdmTypeField<
      ProductionOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RELEASED_DATE: OrderableEdmTypeField<
      ProductionOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    SKIP_CREATE_PRODUCTION_BOM_LINES: EnumField<
      ProductionOrderHeaders<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    PRODUCTION_ORDER_PROFIT_SETTING_METHOD: EnumField<
      ProductionOrderHeaders<DeSerializers>,
      DeSerializersT,
      CostProfitSet,
      true,
      true
    >;
    DEMAND_TRANSFER_ORDER_LINE_RECEIVING_INVENTORY_LOT_ID: OrderableEdmTypeField<
      ProductionOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRODUCTION_ORDER_REMAINDER_STATUS: EnumField<
      ProductionOrderHeaders<DeSerializers>,
      DeSerializersT,
      ProdBackStatus,
      true,
      true
    >;
    SCHEDULED_START_TIME: OrderableEdmTypeField<
      ProductionOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    DEMAND_PRODUCTION_ORDER_LINE_NUMBER: OrderableEdmTypeField<
      ProductionOrderHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link routeCardProductionJournalEntries} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ROUTE_CARD_PRODUCTION_JOURNAL_ENTRIES: OneToManyLink<
      ProductionOrderHeaders<DeSerializersT>,
      DeSerializersT,
      RouteCardProductionJournalEntriesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link productionPool} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCTION_POOL: OneToOneLink<
      ProductionOrderHeaders<DeSerializersT>,
      DeSerializersT,
      ProductionPoolsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link releasedProductV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RELEASED_PRODUCT_V_2: OneToOneLink<
      ProductionOrderHeaders<DeSerializersT>,
      DeSerializersT,
      ReleasedProductsV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link dimensionSet} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DIMENSION_SET: OneToOneLink<
      ProductionOrderHeaders<DeSerializersT>,
      DeSerializersT,
      DimensionSetsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link parentProductionOrderHeader} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PARENT_PRODUCTION_ORDER_HEADER: OneToOneLink<
      ProductionOrderHeaders<DeSerializersT>,
      DeSerializersT,
      ProductionOrderHeadersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link childProductionOrderHeaders} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CHILD_PRODUCTION_ORDER_HEADERS: OneToManyLink<
      ProductionOrderHeaders<DeSerializersT>,
      DeSerializersT,
      ProductionOrderHeadersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link produtionOrderBomLines} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUTION_ORDER_BOM_LINES: OneToManyLink<
      ProductionOrderHeaders<DeSerializersT>,
      DeSerializersT,
      ProductionOrderBillOfMaterialLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link jobCardProductionJournalEntries} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JOB_CARD_PRODUCTION_JOURNAL_ENTRIES: OneToManyLink<
      ProductionOrderHeaders<DeSerializersT>,
      DeSerializersT,
      JobCardProductionJournalEntriesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link produtionOrderRouteOperations} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUTION_ORDER_ROUTE_OPERATIONS: OneToManyLink<
      ProductionOrderHeaders<DeSerializersT>,
      DeSerializersT,
      ProductionOrderRouteOperationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link productionPickingListJournalEntries} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCTION_PICKING_LIST_JOURNAL_ENTRIES: OneToManyLink<
      ProductionOrderHeaders<DeSerializersT>,
      DeSerializersT,
      ProductionPickingListJournalEntriesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link productionOrderRouteJobs} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCTION_ORDER_ROUTE_JOBS: OneToManyLink<
      ProductionOrderHeaders<DeSerializersT>,
      DeSerializersT,
      ProductionOrderRouteJobsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link qualityOrderHeaders} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    QUALITY_ORDER_HEADERS: OneToManyLink<
      ProductionOrderHeaders<DeSerializersT>,
      DeSerializersT,
      QualityOrderHeadersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link reportAsFinishedProductionJournalEntries} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    REPORT_AS_FINISHED_PRODUCTION_JOURNAL_ENTRIES: OneToManyLink<
      ProductionOrderHeaders<DeSerializersT>,
      DeSerializersT,
      ReportAsFinishedProductionJournalEntriesApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<ProductionOrderHeaders<DeSerializers>>;
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
         * Static representation of the {@link productionOrderNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCTION_ORDER_NUMBER: fieldBuilder.buildEdmTypeField(
          'ProductionOrderNumber',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link areRouteJobsGenerated} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ARE_ROUTE_JOBS_GENERATED: fieldBuilder.buildEnumField(
          'AreRouteJobsGenerated',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link scheduledQuantity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SCHEDULED_QUANTITY: fieldBuilder.buildEdmTypeField(
          'ScheduledQuantity',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link sourcePlannedOrderNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SOURCE_PLANNED_ORDER_NUMBER: fieldBuilder.buildEdmTypeField(
          'SourcePlannedOrderNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link isProductionOrderSchedulingLocked} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_PRODUCTION_ORDER_SCHEDULING_LOCKED: fieldBuilder.buildEnumField(
          'IsProductionOrderSchedulingLocked',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link warehouseReleaseReservationRequirementRule} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WAREHOUSE_RELEASE_RESERVATION_REQUIREMENT_RULE:
          fieldBuilder.buildEnumField(
            'WarehouseReleaseReservationRequirementRule',
            ProdWhsReleasePolicy,
            true
          ),
        /**
         * Static representation of the {@link demandProductionOrderNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEMAND_PRODUCTION_ORDER_NUMBER: fieldBuilder.buildEdmTypeField(
          'DemandProductionOrderNumber',
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
         * Static representation of the {@link skipCreateProductionRouteOperations} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SKIP_CREATE_PRODUCTION_ROUTE_OPERATIONS: fieldBuilder.buildEnumField(
          'SkipCreateProductionRouteOperations',
          NoYes,
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
         * Static representation of the {@link sourceRouteId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SOURCE_ROUTE_ID: fieldBuilder.buildEdmTypeField(
          'SourceRouteId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link productionGroupId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCTION_GROUP_ID: fieldBuilder.buildEdmTypeField(
          'ProductionGroupId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link productionOrderStatus} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCTION_ORDER_STATUS: fieldBuilder.buildEnumField(
          'ProductionOrderStatus',
          ProdStatus,
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
         * Static representation of the {@link startedDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STARTED_DATE: fieldBuilder.buildEdmTypeField(
          'StartedDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link sourceMasterPlanId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SOURCE_MASTER_PLAN_ID: fieldBuilder.buildEdmTypeField(
          'SourceMasterPlanId',
          'Edm.String',
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
         * Static representation of the {@link productConfigurationId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_CONFIGURATION_ID: fieldBuilder.buildEdmTypeField(
          'ProductConfigurationId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link isProductionRouteOperationValid} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_PRODUCTION_ROUTE_OPERATION_VALID: fieldBuilder.buildEnumField(
          'IsProductionRouteOperationValid',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link productionConsumptionWidthConversionFactor} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCTION_CONSUMPTION_WIDTH_CONVERSION_FACTOR:
          fieldBuilder.buildEdmTypeField(
            'ProductionConsumptionWidthConversionFactor',
            'Edm.Decimal',
            false
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
         * Static representation of the {@link demandInventoryJournalNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEMAND_INVENTORY_JOURNAL_NUMBER: fieldBuilder.buildEdmTypeField(
          'DemandInventoryJournalNumber',
          'Edm.String',
          true
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
         * Static representation of the {@link subcontractingPurchaseOrderNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUBCONTRACTING_PURCHASE_ORDER_NUMBER: fieldBuilder.buildEdmTypeField(
          'SubcontractingPurchaseOrderNumber',
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
         * Static representation of the {@link startedQuantity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STARTED_QUANTITY: fieldBuilder.buildEdmTypeField(
          'StartedQuantity',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link scheduledDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SCHEDULED_DATE: fieldBuilder.buildEdmTypeField(
          'ScheduledDate',
          'Edm.DateTimeOffset',
          false
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
         * Static representation of the {@link productionConsumptionDepthConversionFactor} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCTION_CONSUMPTION_DEPTH_CONVERSION_FACTOR:
          fieldBuilder.buildEdmTypeField(
            'ProductionConsumptionDepthConversionFactor',
            'Edm.Decimal',
            false
          ),
        /**
         * Static representation of the {@link productionOrderLedgerPostingRule} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCTION_ORDER_LEDGER_POSTING_RULE: fieldBuilder.buildEnumField(
          'ProductionOrderLedgerPostingRule',
          ProdPostingType,
          true
        ),
        /**
         * Static representation of the {@link demandProductionOrderHeaderInventoryLotId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEMAND_PRODUCTION_ORDER_HEADER_INVENTORY_LOT_ID:
          fieldBuilder.buildEdmTypeField(
            'DemandProductionOrderHeaderInventoryLotId',
            'Edm.String',
            true
          ),
        /**
         * Static representation of the {@link productionPoolId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCTION_POOL_ID: fieldBuilder.buildEdmTypeField(
          'ProductionPoolId',
          'Edm.String',
          true
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
         * Static representation of the {@link demandProductionOrderLineInventoryLotId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEMAND_PRODUCTION_ORDER_LINE_INVENTORY_LOT_ID:
          fieldBuilder.buildEdmTypeField(
            'DemandProductionOrderLineInventoryLotId',
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
         * Static representation of the {@link schedulingMethod} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SCHEDULING_METHOD: fieldBuilder.buildEnumField(
          'SchedulingMethod',
          ProdSchedStatus,
          true
        ),
        /**
         * Static representation of the {@link demandSalesOrderNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEMAND_SALES_ORDER_NUMBER: fieldBuilder.buildEdmTypeField(
          'DemandSalesOrderNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link remainingReportAsFinishedQuantity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REMAINING_REPORT_AS_FINISHED_QUANTITY: fieldBuilder.buildEdmTypeField(
          'RemainingReportAsFinishedQuantity',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link autoReservationMode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AUTO_RESERVATION_MODE: fieldBuilder.buildEnumField(
          'AutoReservationMode',
          ProdReservation,
          true
        ),
        /**
         * Static representation of the {@link productionWarehouseLocationId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCTION_WAREHOUSE_LOCATION_ID: fieldBuilder.buildEdmTypeField(
          'ProductionWarehouseLocationId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link sourceBomVersionValidityDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SOURCE_BOM_VERSION_VALIDITY_DATE: fieldBuilder.buildEdmTypeField(
          'SourceBOMVersionValidityDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link productionWarehouseId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCTION_WAREHOUSE_ID: fieldBuilder.buildEdmTypeField(
          'ProductionWarehouseId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link lastSchedulingDateDirection} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LAST_SCHEDULING_DATE_DIRECTION: fieldBuilder.buildEnumField(
          'LastSchedulingDateDirection',
          SchedDirection,
          true
        ),
        /**
         * Static representation of the {@link productionOrderName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCTION_ORDER_NAME: fieldBuilder.buildEdmTypeField(
          'ProductionOrderName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link demandTransferOrderNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEMAND_TRANSFER_ORDER_NUMBER: fieldBuilder.buildEdmTypeField(
          'DemandTransferOrderNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link workingTimeSchedulingPropertyId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WORKING_TIME_SCHEDULING_PROPERTY_ID: fieldBuilder.buildEdmTypeField(
          'WorkingTimeSchedulingPropertyId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link estimatedDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ESTIMATED_DATE: fieldBuilder.buildEdmTypeField(
          'EstimatedDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link productSerialNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_SERIAL_NUMBER: fieldBuilder.buildEdmTypeField(
          'ProductSerialNumber',
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
         * Static representation of the {@link reportedAsFinishedDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REPORTED_AS_FINISHED_DATE: fieldBuilder.buildEdmTypeField(
          'ReportedAsFinishedDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link lastSchedulingTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LAST_SCHEDULING_TIME: fieldBuilder.buildEdmTypeField(
          'LastSchedulingTime',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link productionConsumptionDensityConversionFactor} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCTION_CONSUMPTION_DENSITY_CONVERSION_FACTOR:
          fieldBuilder.buildEdmTypeField(
            'ProductionConsumptionDensityConversionFactor',
            'Edm.Decimal',
            false
          ),
        /**
         * Static representation of the {@link productionLevel} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCTION_LEVEL: fieldBuilder.buildEdmTypeField(
          'ProductionLevel',
          'Edm.Int32',
          false
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
         * Static representation of the {@link productionConsumptionHeightConversionFactor} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCTION_CONSUMPTION_HEIGHT_CONVERSION_FACTOR:
          fieldBuilder.buildEdmTypeField(
            'ProductionConsumptionHeightConversionFactor',
            'Edm.Decimal',
            false
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
         * Static representation of the {@link productionOrderPriority} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCTION_ORDER_PRIORITY: fieldBuilder.buildEdmTypeField(
          'ProductionOrderPriority',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link estimatedQuantity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ESTIMATED_QUANTITY: fieldBuilder.buildEdmTypeField(
          'EstimatedQuantity',
          'Edm.Decimal',
          false
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
         * Static representation of the {@link defaultLedgerDimensionDisplayValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFAULT_LEDGER_DIMENSION_DISPLAY_VALUE: fieldBuilder.buildEdmTypeField(
          'DefaultLedgerDimensionDisplayValue',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link endedDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ENDED_DATE: fieldBuilder.buildEdmTypeField(
          'EndedDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link parentProductionOrderNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PARENT_PRODUCTION_ORDER_NUMBER: fieldBuilder.buildEdmTypeField(
          'ParentProductionOrderNumber',
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
         * Static representation of the {@link productionSiteId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCTION_SITE_ID: fieldBuilder.buildEdmTypeField(
          'ProductionSiteId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link ganttChartColorNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GANTT_CHART_COLOR_NUMBER: fieldBuilder.buildEdmTypeField(
          'GanttChartColorNumber',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link sourceBomId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SOURCE_BOM_ID: fieldBuilder.buildEdmTypeField(
          'SourceBOMId',
          'Edm.String',
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
         * Static representation of the {@link lastSchedulingDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LAST_SCHEDULING_DATE: fieldBuilder.buildEdmTypeField(
          'LastSchedulingDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link demandSalesOrderLineInventoryLotId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEMAND_SALES_ORDER_LINE_INVENTORY_LOT_ID:
          fieldBuilder.buildEdmTypeField(
            'DemandSalesOrderLineInventoryLotId',
            'Edm.String',
            true
          ),
        /**
         * Static representation of the {@link subcontractingPurchaseOrderLineInventoryLotId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUBCONTRACTING_PURCHASE_ORDER_LINE_INVENTORY_LOT_ID:
          fieldBuilder.buildEdmTypeField(
            'SubcontractingPurchaseOrderLineInventoryLotId',
            'Edm.String',
            true
          ),
        /**
         * Static representation of the {@link demandInventoryJournalLineInventoryLotId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEMAND_INVENTORY_JOURNAL_LINE_INVENTORY_LOT_ID:
          fieldBuilder.buildEdmTypeField(
            'DemandInventoryJournalLineInventoryLotId',
            'Edm.String',
            true
          ),
        /**
         * Static representation of the {@link releasedDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RELEASED_DATE: fieldBuilder.buildEdmTypeField(
          'ReleasedDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link skipCreateProductionBomLines} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SKIP_CREATE_PRODUCTION_BOM_LINES: fieldBuilder.buildEnumField(
          'SkipCreateProductionBOMLines',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link productionOrderProfitSettingMethod} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCTION_ORDER_PROFIT_SETTING_METHOD: fieldBuilder.buildEnumField(
          'ProductionOrderProfitSettingMethod',
          CostProfitSet,
          true
        ),
        /**
         * Static representation of the {@link demandTransferOrderLineReceivingInventoryLotId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEMAND_TRANSFER_ORDER_LINE_RECEIVING_INVENTORY_LOT_ID:
          fieldBuilder.buildEdmTypeField(
            'DemandTransferOrderLineReceivingInventoryLotId',
            'Edm.String',
            true
          ),
        /**
         * Static representation of the {@link productionOrderRemainderStatus} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCTION_ORDER_REMAINDER_STATUS: fieldBuilder.buildEnumField(
          'ProductionOrderRemainderStatus',
          ProdBackStatus,
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
         * Static representation of the {@link demandProductionOrderLineNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEMAND_PRODUCTION_ORDER_LINE_NUMBER: fieldBuilder.buildEdmTypeField(
          'DemandProductionOrderLineNumber',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', ProductionOrderHeaders)
      };
    }

    return this._schema;
  }
}
