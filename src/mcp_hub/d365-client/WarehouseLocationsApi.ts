/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { WarehouseLocations } from './WarehouseLocations';
import { WarehouseLocationsRequestBuilder } from './WarehouseLocationsRequestBuilder';
import { RouteCardProductionJournalEntriesApi } from './RouteCardProductionJournalEntriesApi';
import { ItemCoverageSettingsApi } from './ItemCoverageSettingsApi';
import { WarehouseWorkPolicyLocationsApi } from './WarehouseWorkPolicyLocationsApi';
import { CycleCountingWarehouseWorkLinesV2Api } from './CycleCountingWarehouseWorkLinesV2Api';
import { WarehouseAislesApi } from './WarehouseAislesApi';
import { WarehouseZonesApi } from './WarehouseZonesApi';
import { WarehousesApi } from './WarehousesApi';
import { ItemArrivalJournalLinesV2Api } from './ItemArrivalJournalLinesV2Api';
import { RebateAndDeductionAgreementHeadersApi } from './RebateAndDeductionAgreementHeadersApi';
import { ProductionPickingListJournalEntriesApi } from './ProductionPickingListJournalEntriesApi';
import { QualityOrderHeadersApi } from './QualityOrderHeadersApi';
import { AssetMaintenanceAssetBillOfMaterialsV2Api } from './AssetMaintenanceAssetBillOfMaterialsV2Api';
import { AssetMaintenanceWorkOrderLineProductJournalsApi } from './AssetMaintenanceWorkOrderLineProductJournalsApi';
import { CycleCountingWarehouseWorkLinesV3Api } from './CycleCountingWarehouseWorkLinesV3Api';
import { ItemArrivalJournalHeadersV2Api } from './ItemArrivalJournalHeadersV2Api';
import { CycleCountingWarehouseWorkLinesApi } from './CycleCountingWarehouseWorkLinesApi';
import { NoYes } from './NoYes';
import { WmsLocationType } from './WmsLocationType';
import { WhsLocationStatus } from './WhsLocationStatus';
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
export class WarehouseLocationsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<WarehouseLocations<DeSerializersT>, DeSerializersT>
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
  ): WarehouseLocationsApi<DeSerializersT> {
    return new WarehouseLocationsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link routeCardProductionJournalEntries} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ROUTE_CARD_PRODUCTION_JOURNAL_ENTRIES: OneToManyLink<
      WarehouseLocations<DeSerializersT>,
      DeSerializersT,
      RouteCardProductionJournalEntriesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link itemCoverageSettings} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ITEM_COVERAGE_SETTINGS: OneToManyLink<
      WarehouseLocations<DeSerializersT>,
      DeSerializersT,
      ItemCoverageSettingsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link warehouseWorkPolicyLocations} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WAREHOUSE_WORK_POLICY_LOCATIONS: OneToManyLink<
      WarehouseLocations<DeSerializersT>,
      DeSerializersT,
      WarehouseWorkPolicyLocationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link cycleCountingWarehouseWorkLinesV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CYCLE_COUNTING_WAREHOUSE_WORK_LINES_V_2: OneToManyLink<
      WarehouseLocations<DeSerializersT>,
      DeSerializersT,
      CycleCountingWarehouseWorkLinesV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link warehouseAisle} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WAREHOUSE_AISLE: OneToOneLink<
      WarehouseLocations<DeSerializersT>,
      DeSerializersT,
      WarehouseAislesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link destinationWarehouseLocation} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DESTINATION_WAREHOUSE_LOCATION: OneToOneLink<
      WarehouseLocations<DeSerializersT>,
      DeSerializersT,
      WarehouseLocationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link warehouseLocations} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WAREHOUSE_LOCATIONS: OneToManyLink<
      WarehouseLocations<DeSerializersT>,
      DeSerializersT,
      WarehouseLocationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link secondAdditionalWarehouseZone} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SECOND_ADDITIONAL_WAREHOUSE_ZONE: OneToOneLink<
      WarehouseLocations<DeSerializersT>,
      DeSerializersT,
      WarehouseZonesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link warehouse} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WAREHOUSE: OneToOneLink<
      WarehouseLocations<DeSerializersT>,
      DeSerializersT,
      WarehousesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link firstAdditionalWarehouseZone} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FIRST_ADDITIONAL_WAREHOUSE_ZONE: OneToOneLink<
      WarehouseLocations<DeSerializersT>,
      DeSerializersT,
      WarehouseZonesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link thirdAdditionalWarehouseZone} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    THIRD_ADDITIONAL_WAREHOUSE_ZONE: OneToOneLink<
      WarehouseLocations<DeSerializersT>,
      DeSerializersT,
      WarehouseZonesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link warehouseZone} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WAREHOUSE_ZONE: OneToOneLink<
      WarehouseLocations<DeSerializersT>,
      DeSerializersT,
      WarehouseZonesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link itemArrivalJournalLinesV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ITEM_ARRIVAL_JOURNAL_LINES_V_2: OneToManyLink<
      WarehouseLocations<DeSerializersT>,
      DeSerializersT,
      ItemArrivalJournalLinesV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link rebateAndDeductionsAgreementHeaders} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    REBATE_AND_DEDUCTIONS_AGREEMENT_HEADERS: OneToManyLink<
      WarehouseLocations<DeSerializersT>,
      DeSerializersT,
      RebateAndDeductionAgreementHeadersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link productionPickingListJournalEntries} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCTION_PICKING_LIST_JOURNAL_ENTRIES: OneToManyLink<
      WarehouseLocations<DeSerializersT>,
      DeSerializersT,
      ProductionPickingListJournalEntriesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link qualityOrderHeaders} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    QUALITY_ORDER_HEADERS: OneToManyLink<
      WarehouseLocations<DeSerializersT>,
      DeSerializersT,
      QualityOrderHeadersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link maintenanceAssetBillOfMaterialsWarehouseLocation} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MAINTENANCE_ASSET_BILL_OF_MATERIALS_WAREHOUSE_LOCATION: OneToManyLink<
      WarehouseLocations<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceAssetBillOfMaterialsV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link workOrderLineProductConsumptionLinesStorageProductWarehouseLocation} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WORK_ORDER_LINE_PRODUCT_CONSUMPTION_LINES_STORAGE_PRODUCT_WAREHOUSE_LOCATION: OneToManyLink<
      WarehouseLocations<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceWorkOrderLineProductJournalsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link cycleCountingWarehouseWorkLinesV3} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CYCLE_COUNTING_WAREHOUSE_WORK_LINES_V_3: OneToManyLink<
      WarehouseLocations<DeSerializersT>,
      DeSerializersT,
      CycleCountingWarehouseWorkLinesV3Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link itemArrivalJournalHeadersV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ITEM_ARRIVAL_JOURNAL_HEADERS_V_2: OneToManyLink<
      WarehouseLocations<DeSerializersT>,
      DeSerializersT,
      ItemArrivalJournalHeadersV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link cycleCountingWarehouseWorkLines} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CYCLE_COUNTING_WAREHOUSE_WORK_LINES: OneToManyLink<
      WarehouseLocations<DeSerializersT>,
      DeSerializersT,
      CycleCountingWarehouseWorkLinesApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      RouteCardProductionJournalEntriesApi<DeSerializersT>,
      ItemCoverageSettingsApi<DeSerializersT>,
      WarehouseWorkPolicyLocationsApi<DeSerializersT>,
      CycleCountingWarehouseWorkLinesV2Api<DeSerializersT>,
      WarehouseAislesApi<DeSerializersT>,
      WarehouseLocationsApi<DeSerializersT>,
      WarehouseLocationsApi<DeSerializersT>,
      WarehouseZonesApi<DeSerializersT>,
      WarehousesApi<DeSerializersT>,
      WarehouseZonesApi<DeSerializersT>,
      WarehouseZonesApi<DeSerializersT>,
      WarehouseZonesApi<DeSerializersT>,
      ItemArrivalJournalLinesV2Api<DeSerializersT>,
      RebateAndDeductionAgreementHeadersApi<DeSerializersT>,
      ProductionPickingListJournalEntriesApi<DeSerializersT>,
      QualityOrderHeadersApi<DeSerializersT>,
      AssetMaintenanceAssetBillOfMaterialsV2Api<DeSerializersT>,
      AssetMaintenanceWorkOrderLineProductJournalsApi<DeSerializersT>,
      CycleCountingWarehouseWorkLinesV3Api<DeSerializersT>,
      ItemArrivalJournalHeadersV2Api<DeSerializersT>,
      CycleCountingWarehouseWorkLinesApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      ROUTE_CARD_PRODUCTION_JOURNAL_ENTRIES: new OneToManyLink(
        'RouteCardProductionJournalEntries',
        this,
        linkedApis[0]
      ),
      ITEM_COVERAGE_SETTINGS: new OneToManyLink(
        'ItemCoverageSettings',
        this,
        linkedApis[1]
      ),
      WAREHOUSE_WORK_POLICY_LOCATIONS: new OneToManyLink(
        'WarehouseWorkPolicyLocations',
        this,
        linkedApis[2]
      ),
      CYCLE_COUNTING_WAREHOUSE_WORK_LINES_V_2: new OneToManyLink(
        'CycleCountingWarehouseWorkLinesV2',
        this,
        linkedApis[3]
      ),
      WAREHOUSE_AISLE: new OneToOneLink('WarehouseAisle', this, linkedApis[4]),
      DESTINATION_WAREHOUSE_LOCATION: new OneToOneLink(
        'DestinationWarehouseLocation',
        this,
        linkedApis[5]
      ),
      WAREHOUSE_LOCATIONS: new OneToManyLink(
        'WarehouseLocations',
        this,
        linkedApis[6]
      ),
      SECOND_ADDITIONAL_WAREHOUSE_ZONE: new OneToOneLink(
        'SecondAdditionalWarehouseZone',
        this,
        linkedApis[7]
      ),
      WAREHOUSE: new OneToOneLink('Warehouse', this, linkedApis[8]),
      FIRST_ADDITIONAL_WAREHOUSE_ZONE: new OneToOneLink(
        'FirstAdditionalWarehouseZone',
        this,
        linkedApis[9]
      ),
      THIRD_ADDITIONAL_WAREHOUSE_ZONE: new OneToOneLink(
        'ThirdAdditionalWarehouseZone',
        this,
        linkedApis[10]
      ),
      WAREHOUSE_ZONE: new OneToOneLink('WarehouseZone', this, linkedApis[11]),
      ITEM_ARRIVAL_JOURNAL_LINES_V_2: new OneToManyLink(
        'ItemArrivalJournalLinesV2',
        this,
        linkedApis[12]
      ),
      REBATE_AND_DEDUCTIONS_AGREEMENT_HEADERS: new OneToManyLink(
        'RebateAndDeductionsAgreementHeaders',
        this,
        linkedApis[13]
      ),
      PRODUCTION_PICKING_LIST_JOURNAL_ENTRIES: new OneToManyLink(
        'ProductionPickingListJournalEntries',
        this,
        linkedApis[14]
      ),
      QUALITY_ORDER_HEADERS: new OneToManyLink(
        'QualityOrderHeaders',
        this,
        linkedApis[15]
      ),
      MAINTENANCE_ASSET_BILL_OF_MATERIALS_WAREHOUSE_LOCATION: new OneToManyLink(
        'MaintenanceAssetBillOfMaterials_WarehouseLocation',
        this,
        linkedApis[16]
      ),
      WORK_ORDER_LINE_PRODUCT_CONSUMPTION_LINES_STORAGE_PRODUCT_WAREHOUSE_LOCATION:
        new OneToManyLink(
          'WorkOrderLineProductConsumptionLines_StorageProductWarehouseLocation',
          this,
          linkedApis[17]
        ),
      CYCLE_COUNTING_WAREHOUSE_WORK_LINES_V_3: new OneToManyLink(
        'CycleCountingWarehouseWorkLinesV3',
        this,
        linkedApis[18]
      ),
      ITEM_ARRIVAL_JOURNAL_HEADERS_V_2: new OneToManyLink(
        'ItemArrivalJournalHeadersV2',
        this,
        linkedApis[19]
      ),
      CYCLE_COUNTING_WAREHOUSE_WORK_LINES: new OneToManyLink(
        'CycleCountingWarehouseWorkLines',
        this,
        linkedApis[20]
      )
    };
    return this;
  }

  entityConstructor = WarehouseLocations;

  requestBuilder(): WarehouseLocationsRequestBuilder<DeSerializersT> {
    return new WarehouseLocationsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    WarehouseLocations<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<WarehouseLocations<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    WarehouseLocations<DeSerializersT>,
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
    typeof WarehouseLocations,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        WarehouseLocations,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      WarehouseLocations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    WAREHOUSE_ID: OrderableEdmTypeField<
      WarehouseLocations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    WAREHOUSE_LOCATION_ID: OrderableEdmTypeField<
      WarehouseLocations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    GENERATE_CHECK_DIGITS: EnumField<
      WarehouseLocations<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    IS_LOCATION_ACTIVITY_DATE_TIME_MAINTAINED: EnumField<
      WarehouseLocations<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    IS_DEFAULT_PRODUCTION_INPUT_WAREHOUSE_LOCATION: EnumField<
      WarehouseLocations<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    THIRD_ADDITIONAL_WAREHOUSE_ZONE_ID: OrderableEdmTypeField<
      WarehouseLocations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_DEFAULT_KANBAN_FINISHED_GOODS_WAREHOUSE_LOCATION: EnumField<
      WarehouseLocations<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    WAREHOUSE_LOCATION_TYPE: EnumField<
      WarehouseLocations<DeSerializers>,
      DeSerializersT,
      WmsLocationType,
      true,
      true
    >;
    SHELF_ID: OrderableEdmTypeField<
      WarehouseLocations<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    LAST_ACTIVITY_DATE_TIME: OrderableEdmTypeField<
      WarehouseLocations<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    IS_DEFAULT_PRODUCTION_FINISHED_GOODS_WAREHOUSE_LOCATION: EnumField<
      WarehouseLocations<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    INPUT_WAREHOUSE_LOCATION_BLOCKING_CAUSE_ID: OrderableEdmTypeField<
      WarehouseLocations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ITEM_NUMBER_IN_LOCATION: OrderableEdmTypeField<
      WarehouseLocations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_DEFAULT_RETAIL_STORE_RETURN_WAREHOUSE_LOCATION: EnumField<
      WarehouseLocations<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    IS_DEFAULT_ISSUE_WAREHOUSE_LOCATION: EnumField<
      WarehouseLocations<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    WAREHOUSE_AISLE_ID: OrderableEdmTypeField<
      WarehouseLocations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BIN_ID: OrderableEdmTypeField<
      WarehouseLocations<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    CHECK_DIGITS: OrderableEdmTypeField<
      WarehouseLocations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SECOND_ADDITIONAL_WAREHOUSE_ZONE_ID: OrderableEdmTypeField<
      WarehouseLocations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    WAREHOUSE_LOCATION_PROFILE_ID: OrderableEdmTypeField<
      WarehouseLocations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_DEFAULT_SHIPMENT_MAINTENANCE_WAREHOUSE_LOCATION: EnumField<
      WarehouseLocations<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    INPUT_STORE_AREA_ID: OrderableEdmTypeField<
      WarehouseLocations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PHYSICAL_DEPTH: OrderableEdmTypeField<
      WarehouseLocations<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    IS_DEFAULT_CREDIT_ONLY_RETURN_WAREHOUSE_LOCATION: EnumField<
      WarehouseLocations<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    WAREHOUSE_ZONE_ID: OrderableEdmTypeField<
      WarehouseLocations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PICKING_STORE_AREA_ID: OrderableEdmTypeField<
      WarehouseLocations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_DEFAULT_SORTING_WAREHOUSE_LOCATION: EnumField<
      WarehouseLocations<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    IS_DEFAULT_RECEIPT_WAREHOUSE_LOCATION: EnumField<
      WarehouseLocations<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    LAST_COUNTED_UTC_DATE_TIME: OrderableEdmTypeField<
      WarehouseLocations<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    AGING_DATE: OrderableEdmTypeField<
      WarehouseLocations<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    DESTINATION_WAREHOUSE_LOCATION_ID: OrderableEdmTypeField<
      WarehouseLocations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PHYSICAL_WIDTH: OrderableEdmTypeField<
      WarehouseLocations<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    LOCATION_STATUS: EnumField<
      WarehouseLocations<DeSerializers>,
      DeSerializersT,
      WhsLocationStatus,
      true,
      true
    >;
    IS_DEFAULT_QUALITY_MAINTENANCE_WAREHOUSE_LOCATION: EnumField<
      WarehouseLocations<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    PHYSICAL_MAXIMUM_STORAGE_VOLUME: OrderableEdmTypeField<
      WarehouseLocations<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PHYSICAL_HEIGHT_ABOVE_GROUND: OrderableEdmTypeField<
      WarehouseLocations<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    IS_SORT_ORDER_CODE_MANUAL: EnumField<
      WarehouseLocations<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    RACK_ID: OrderableEdmTypeField<
      WarehouseLocations<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    SORT_ORDER_CODE: OrderableEdmTypeField<
      WarehouseLocations<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    PHYSICAL_MAXIMUM_STORAGE_WEIGHT: OrderableEdmTypeField<
      WarehouseLocations<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    IS_DEFAULT_FINAL_SHIPMENT_WAREHOUSE_LOCATION: EnumField<
      WarehouseLocations<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    IS_DEFAULT_RETAIL_STORE_WAREHOUSE_LOCATION: EnumField<
      WarehouseLocations<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    FIRST_ADDITIONAL_WAREHOUSE_ZONE_ID: OrderableEdmTypeField<
      WarehouseLocations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_WAREHOUSE_LOCATION_ID_MANUAL: EnumField<
      WarehouseLocations<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    IS_ITEM_IN_LOCATION_MAINTAINED: EnumField<
      WarehouseLocations<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    PHYSICAL_HEIGHT: OrderableEdmTypeField<
      WarehouseLocations<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    OUTPUT_WAREHOUSE_LOCATION_BLOCKING_CAUSE_ID: OrderableEdmTypeField<
      WarehouseLocations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_LOCATION_STATUS_MAINTAINED: EnumField<
      WarehouseLocations<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link routeCardProductionJournalEntries} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ROUTE_CARD_PRODUCTION_JOURNAL_ENTRIES: OneToManyLink<
      WarehouseLocations<DeSerializersT>,
      DeSerializersT,
      RouteCardProductionJournalEntriesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link itemCoverageSettings} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ITEM_COVERAGE_SETTINGS: OneToManyLink<
      WarehouseLocations<DeSerializersT>,
      DeSerializersT,
      ItemCoverageSettingsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link warehouseWorkPolicyLocations} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WAREHOUSE_WORK_POLICY_LOCATIONS: OneToManyLink<
      WarehouseLocations<DeSerializersT>,
      DeSerializersT,
      WarehouseWorkPolicyLocationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link cycleCountingWarehouseWorkLinesV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CYCLE_COUNTING_WAREHOUSE_WORK_LINES_V_2: OneToManyLink<
      WarehouseLocations<DeSerializersT>,
      DeSerializersT,
      CycleCountingWarehouseWorkLinesV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link warehouseAisle} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WAREHOUSE_AISLE: OneToOneLink<
      WarehouseLocations<DeSerializersT>,
      DeSerializersT,
      WarehouseAislesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link destinationWarehouseLocation} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DESTINATION_WAREHOUSE_LOCATION: OneToOneLink<
      WarehouseLocations<DeSerializersT>,
      DeSerializersT,
      WarehouseLocationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link warehouseLocations} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WAREHOUSE_LOCATIONS: OneToManyLink<
      WarehouseLocations<DeSerializersT>,
      DeSerializersT,
      WarehouseLocationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link secondAdditionalWarehouseZone} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SECOND_ADDITIONAL_WAREHOUSE_ZONE: OneToOneLink<
      WarehouseLocations<DeSerializersT>,
      DeSerializersT,
      WarehouseZonesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link warehouse} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WAREHOUSE: OneToOneLink<
      WarehouseLocations<DeSerializersT>,
      DeSerializersT,
      WarehousesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link firstAdditionalWarehouseZone} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FIRST_ADDITIONAL_WAREHOUSE_ZONE: OneToOneLink<
      WarehouseLocations<DeSerializersT>,
      DeSerializersT,
      WarehouseZonesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link thirdAdditionalWarehouseZone} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    THIRD_ADDITIONAL_WAREHOUSE_ZONE: OneToOneLink<
      WarehouseLocations<DeSerializersT>,
      DeSerializersT,
      WarehouseZonesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link warehouseZone} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WAREHOUSE_ZONE: OneToOneLink<
      WarehouseLocations<DeSerializersT>,
      DeSerializersT,
      WarehouseZonesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link itemArrivalJournalLinesV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ITEM_ARRIVAL_JOURNAL_LINES_V_2: OneToManyLink<
      WarehouseLocations<DeSerializersT>,
      DeSerializersT,
      ItemArrivalJournalLinesV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link rebateAndDeductionsAgreementHeaders} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    REBATE_AND_DEDUCTIONS_AGREEMENT_HEADERS: OneToManyLink<
      WarehouseLocations<DeSerializersT>,
      DeSerializersT,
      RebateAndDeductionAgreementHeadersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link productionPickingListJournalEntries} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRODUCTION_PICKING_LIST_JOURNAL_ENTRIES: OneToManyLink<
      WarehouseLocations<DeSerializersT>,
      DeSerializersT,
      ProductionPickingListJournalEntriesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link qualityOrderHeaders} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    QUALITY_ORDER_HEADERS: OneToManyLink<
      WarehouseLocations<DeSerializersT>,
      DeSerializersT,
      QualityOrderHeadersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link maintenanceAssetBillOfMaterialsWarehouseLocation} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MAINTENANCE_ASSET_BILL_OF_MATERIALS_WAREHOUSE_LOCATION: OneToManyLink<
      WarehouseLocations<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceAssetBillOfMaterialsV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link workOrderLineProductConsumptionLinesStorageProductWarehouseLocation} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WORK_ORDER_LINE_PRODUCT_CONSUMPTION_LINES_STORAGE_PRODUCT_WAREHOUSE_LOCATION: OneToManyLink<
      WarehouseLocations<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceWorkOrderLineProductJournalsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link cycleCountingWarehouseWorkLinesV3} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CYCLE_COUNTING_WAREHOUSE_WORK_LINES_V_3: OneToManyLink<
      WarehouseLocations<DeSerializersT>,
      DeSerializersT,
      CycleCountingWarehouseWorkLinesV3Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link itemArrivalJournalHeadersV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ITEM_ARRIVAL_JOURNAL_HEADERS_V_2: OneToManyLink<
      WarehouseLocations<DeSerializersT>,
      DeSerializersT,
      ItemArrivalJournalHeadersV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link cycleCountingWarehouseWorkLines} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CYCLE_COUNTING_WAREHOUSE_WORK_LINES: OneToManyLink<
      WarehouseLocations<DeSerializersT>,
      DeSerializersT,
      CycleCountingWarehouseWorkLinesApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<WarehouseLocations<DeSerializers>>;
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
         * Static representation of the {@link generateCheckDigits} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GENERATE_CHECK_DIGITS: fieldBuilder.buildEnumField(
          'GenerateCheckDigits',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link isLocationActivityDateTimeMaintained} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_LOCATION_ACTIVITY_DATE_TIME_MAINTAINED: fieldBuilder.buildEnumField(
          'IsLocationActivityDateTimeMaintained',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link isDefaultProductionInputWarehouseLocation} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_DEFAULT_PRODUCTION_INPUT_WAREHOUSE_LOCATION:
          fieldBuilder.buildEnumField(
            'IsDefaultProductionInputWarehouseLocation',
            NoYes,
            true
          ),
        /**
         * Static representation of the {@link thirdAdditionalWarehouseZoneId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        THIRD_ADDITIONAL_WAREHOUSE_ZONE_ID: fieldBuilder.buildEdmTypeField(
          'ThirdAdditionalWarehouseZoneId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link isDefaultKanbanFinishedGoodsWarehouseLocation} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_DEFAULT_KANBAN_FINISHED_GOODS_WAREHOUSE_LOCATION:
          fieldBuilder.buildEnumField(
            'IsDefaultKanbanFinishedGoodsWarehouseLocation',
            NoYes,
            true
          ),
        /**
         * Static representation of the {@link warehouseLocationType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WAREHOUSE_LOCATION_TYPE: fieldBuilder.buildEnumField(
          'WarehouseLocationType',
          WmsLocationType,
          true
        ),
        /**
         * Static representation of the {@link shelfId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHELF_ID: fieldBuilder.buildEdmTypeField('ShelfId', 'Edm.Int32', false),
        /**
         * Static representation of the {@link lastActivityDateTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LAST_ACTIVITY_DATE_TIME: fieldBuilder.buildEdmTypeField(
          'LastActivityDateTime',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link isDefaultProductionFinishedGoodsWarehouseLocation} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_DEFAULT_PRODUCTION_FINISHED_GOODS_WAREHOUSE_LOCATION:
          fieldBuilder.buildEnumField(
            'IsDefaultProductionFinishedGoodsWarehouseLocation',
            NoYes,
            true
          ),
        /**
         * Static representation of the {@link inputWarehouseLocationBlockingCauseId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INPUT_WAREHOUSE_LOCATION_BLOCKING_CAUSE_ID:
          fieldBuilder.buildEdmTypeField(
            'InputWarehouseLocationBlockingCauseId',
            'Edm.String',
            true
          ),
        /**
         * Static representation of the {@link itemNumberInLocation} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ITEM_NUMBER_IN_LOCATION: fieldBuilder.buildEdmTypeField(
          'ItemNumberInLocation',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link isDefaultRetailStoreReturnWarehouseLocation} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_DEFAULT_RETAIL_STORE_RETURN_WAREHOUSE_LOCATION:
          fieldBuilder.buildEnumField(
            'IsDefaultRetailStoreReturnWarehouseLocation',
            NoYes,
            true
          ),
        /**
         * Static representation of the {@link isDefaultIssueWarehouseLocation} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_DEFAULT_ISSUE_WAREHOUSE_LOCATION: fieldBuilder.buildEnumField(
          'IsDefaultIssueWarehouseLocation',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link warehouseAisleId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WAREHOUSE_AISLE_ID: fieldBuilder.buildEdmTypeField(
          'WarehouseAisleId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link binId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BIN_ID: fieldBuilder.buildEdmTypeField('BinId', 'Edm.Int32', false),
        /**
         * Static representation of the {@link checkDigits} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CHECK_DIGITS: fieldBuilder.buildEdmTypeField(
          'CheckDigits',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link secondAdditionalWarehouseZoneId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SECOND_ADDITIONAL_WAREHOUSE_ZONE_ID: fieldBuilder.buildEdmTypeField(
          'SecondAdditionalWarehouseZoneId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link warehouseLocationProfileId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WAREHOUSE_LOCATION_PROFILE_ID: fieldBuilder.buildEdmTypeField(
          'WarehouseLocationProfileId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link isDefaultShipmentMaintenanceWarehouseLocation} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_DEFAULT_SHIPMENT_MAINTENANCE_WAREHOUSE_LOCATION:
          fieldBuilder.buildEnumField(
            'IsDefaultShipmentMaintenanceWarehouseLocation',
            NoYes,
            true
          ),
        /**
         * Static representation of the {@link inputStoreAreaId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INPUT_STORE_AREA_ID: fieldBuilder.buildEdmTypeField(
          'InputStoreAreaId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link physicalDepth} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PHYSICAL_DEPTH: fieldBuilder.buildEdmTypeField(
          'PhysicalDepth',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link isDefaultCreditOnlyReturnWarehouseLocation} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_DEFAULT_CREDIT_ONLY_RETURN_WAREHOUSE_LOCATION:
          fieldBuilder.buildEnumField(
            'IsDefaultCreditOnlyReturnWarehouseLocation',
            NoYes,
            true
          ),
        /**
         * Static representation of the {@link warehouseZoneId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WAREHOUSE_ZONE_ID: fieldBuilder.buildEdmTypeField(
          'WarehouseZoneId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link pickingStoreAreaId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PICKING_STORE_AREA_ID: fieldBuilder.buildEdmTypeField(
          'PickingStoreAreaId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link isDefaultSortingWarehouseLocation} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_DEFAULT_SORTING_WAREHOUSE_LOCATION: fieldBuilder.buildEnumField(
          'IsDefaultSortingWarehouseLocation',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link isDefaultReceiptWarehouseLocation} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_DEFAULT_RECEIPT_WAREHOUSE_LOCATION: fieldBuilder.buildEnumField(
          'IsDefaultReceiptWarehouseLocation',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link lastCountedUtcDateTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LAST_COUNTED_UTC_DATE_TIME: fieldBuilder.buildEdmTypeField(
          'LastCountedUTCDateTime',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link agingDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AGING_DATE: fieldBuilder.buildEdmTypeField(
          'AgingDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link destinationWarehouseLocationId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DESTINATION_WAREHOUSE_LOCATION_ID: fieldBuilder.buildEdmTypeField(
          'DestinationWarehouseLocationId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link physicalWidth} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PHYSICAL_WIDTH: fieldBuilder.buildEdmTypeField(
          'PhysicalWidth',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link locationStatus} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LOCATION_STATUS: fieldBuilder.buildEnumField(
          'LocationStatus',
          WhsLocationStatus,
          true
        ),
        /**
         * Static representation of the {@link isDefaultQualityMaintenanceWarehouseLocation} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_DEFAULT_QUALITY_MAINTENANCE_WAREHOUSE_LOCATION:
          fieldBuilder.buildEnumField(
            'IsDefaultQualityMaintenanceWarehouseLocation',
            NoYes,
            true
          ),
        /**
         * Static representation of the {@link physicalMaximumStorageVolume} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PHYSICAL_MAXIMUM_STORAGE_VOLUME: fieldBuilder.buildEdmTypeField(
          'PhysicalMaximumStorageVolume',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link physicalHeightAboveGround} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PHYSICAL_HEIGHT_ABOVE_GROUND: fieldBuilder.buildEdmTypeField(
          'PhysicalHeightAboveGround',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link isSortOrderCodeManual} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_SORT_ORDER_CODE_MANUAL: fieldBuilder.buildEnumField(
          'IsSortOrderCodeManual',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link rackId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RACK_ID: fieldBuilder.buildEdmTypeField('RackId', 'Edm.Int32', false),
        /**
         * Static representation of the {@link sortOrderCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SORT_ORDER_CODE: fieldBuilder.buildEdmTypeField(
          'SortOrderCode',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link physicalMaximumStorageWeight} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PHYSICAL_MAXIMUM_STORAGE_WEIGHT: fieldBuilder.buildEdmTypeField(
          'PhysicalMaximumStorageWeight',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link isDefaultFinalShipmentWarehouseLocation} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_DEFAULT_FINAL_SHIPMENT_WAREHOUSE_LOCATION:
          fieldBuilder.buildEnumField(
            'IsDefaultFinalShipmentWarehouseLocation',
            NoYes,
            true
          ),
        /**
         * Static representation of the {@link isDefaultRetailStoreWarehouseLocation} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_DEFAULT_RETAIL_STORE_WAREHOUSE_LOCATION: fieldBuilder.buildEnumField(
          'IsDefaultRetailStoreWarehouseLocation',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link firstAdditionalWarehouseZoneId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FIRST_ADDITIONAL_WAREHOUSE_ZONE_ID: fieldBuilder.buildEdmTypeField(
          'FirstAdditionalWarehouseZoneId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link isWarehouseLocationIdManual} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_WAREHOUSE_LOCATION_ID_MANUAL: fieldBuilder.buildEnumField(
          'IsWarehouseLocationIdManual',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link isItemInLocationMaintained} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_ITEM_IN_LOCATION_MAINTAINED: fieldBuilder.buildEnumField(
          'IsItemInLocationMaintained',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link physicalHeight} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PHYSICAL_HEIGHT: fieldBuilder.buildEdmTypeField(
          'PhysicalHeight',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link outputWarehouseLocationBlockingCauseId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OUTPUT_WAREHOUSE_LOCATION_BLOCKING_CAUSE_ID:
          fieldBuilder.buildEdmTypeField(
            'OutputWarehouseLocationBlockingCauseId',
            'Edm.String',
            true
          ),
        /**
         * Static representation of the {@link isLocationStatusMaintained} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_LOCATION_STATUS_MAINTAINED: fieldBuilder.buildEnumField(
          'IsLocationStatusMaintained',
          NoYes,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', WarehouseLocations)
      };
    }

    return this._schema;
  }
}
