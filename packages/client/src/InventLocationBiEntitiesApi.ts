/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { InventLocationBiEntities } from './InventLocationBiEntities';
import { InventLocationBiEntitiesRequestBuilder } from './InventLocationBiEntitiesRequestBuilder';
import { NoYes } from './NoYes';
import { WhsAutoUpdateShipment } from './WhsAutoUpdateShipment';
import { InventLocationType } from './InventLocationType';
import { WhsLoadReleaseReservationPolicy } from './WhsLoadReleaseReservationPolicy';
import { InventCountingGroupBr } from './InventCountingGroupBr';
import { WhsAllowMarkingReservationRemoval } from './WhsAllowMarkingReservationRemoval';
import { InventProfileTypeRu } from './InventProfileTypeRu';
import { WhsRawMaterialPolicy } from './WhsRawMaterialPolicy';
import { WhsReleaseToWarehouseRule } from './WhsReleaseToWarehouseRule';
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
export class InventLocationBiEntitiesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<InventLocationBiEntities<DeSerializersT>, DeSerializersT>
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
  ): InventLocationBiEntitiesApi<DeSerializersT> {
    return new InventLocationBiEntitiesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = InventLocationBiEntities;

  requestBuilder(): InventLocationBiEntitiesRequestBuilder<DeSerializersT> {
    return new InventLocationBiEntitiesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    InventLocationBiEntities<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      InventLocationBiEntities<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    InventLocationBiEntities<DeSerializersT>,
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
    typeof InventLocationBiEntities,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        InventLocationBiEntities,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      InventLocationBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    INVENT_LOCATION_ID: OrderableEdmTypeField<
      InventLocationBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    MANUAL: EnumField<
      InventLocationBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    INVENT_LOCATION_ID_TRANSIT: OrderableEdmTypeField<
      InventLocationBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRINT_BOL_BEFORE_SHIP_CONFIRM: EnumField<
      InventLocationBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    DEFAULT_KANBAN_FINISHED_GOODS_LOCATION: OrderableEdmTypeField<
      InventLocationBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BRANCH_NUMBER: OrderableEdmTypeField<
      InventLocationBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SYS_MODIFIED_DATE_TIME: OrderableEdmTypeField<
      InventLocationBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    CUST_ACCOUNT_HU: OrderableEdmTypeField<
      InventLocationBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALLOW_LABOR_STANDARDS: EnumField<
      InventLocationBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    WHS_PROD_ORDER_BACKFLUSH_MUST_USE_RESERVED_QTY: EnumField<
      InventLocationBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    WMS_RACK_NAME_ACTIVE: EnumField<
      InventLocationBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    DEFAULT_SHIP_MAINTENANCE_LOC: OrderableEdmTypeField<
      InventLocationBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SYS_CREATED_DATE_TIME: OrderableEdmTypeField<
      InventLocationBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    WMS_LOCATION_ID_DEFAULT_RECEIPT: OrderableEdmTypeField<
      InventLocationBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    WMS_LEVEL_NAME_ACTIVE: EnumField<
      InventLocationBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    INVENT_PROFILE_ID_RU: OrderableEdmTypeField<
      InventLocationBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DEFAULT_PRODUCTION_INPUT_LOCATION: OrderableEdmTypeField<
      InventLocationBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RESERVE_AT_LOAD_POST: EnumField<
      InventLocationBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    INVENT_LOCATION_ID_REQ_MAIN: OrderableEdmTypeField<
      InventLocationBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    WMS_AISLE_NAME_ACTIVE: EnumField<
      InventLocationBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    VEND_ACCOUNT: OrderableEdmTypeField<
      InventLocationBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    WAREHOUSE_AUTO_RELEASE_RESERVATION: EnumField<
      InventLocationBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    AUTO_UPDATE_SHIPMENT: EnumField<
      InventLocationBiEntities<DeSerializers>,
      DeSerializersT,
      WhsAutoUpdateShipment,
      true,
      true
    >;
    DEFAULT_PRODUCTION_FINISH_GOODS_LOCATION: OrderableEdmTypeField<
      InventLocationBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    UNIQUE_CHECK_DIGITS: EnumField<
      InventLocationBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    INVENT_LOCATION_ID_QUARANTINE: OrderableEdmTypeField<
      InventLocationBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VEND_ACCOUNT_CUSTOM_RU: OrderableEdmTypeField<
      InventLocationBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DECREMENT_LOAD_LINE: EnumField<
      InventLocationBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    WMS_RACK_FORMAT: OrderableEdmTypeField<
      InventLocationBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INVENT_LOCATION_TYPE: EnumField<
      InventLocationBiEntities<DeSerializers>,
      DeSerializersT,
      InventLocationType,
      true,
      true
    >;
    DEFAULT_STATUS_ID: OrderableEdmTypeField<
      InventLocationBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    WMS_LOCATION_ID_GOODS_IN_ROUTE_RU: OrderableEdmTypeField<
      InventLocationBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    NUMBER_SEQUENCE_GROUP_RU: OrderableEdmTypeField<
      InventLocationBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LOAD_RELEASE_RESERVATION_POLICY: EnumField<
      InventLocationBiEntities<DeSerializers>,
      DeSerializersT,
      WhsLoadReleaseReservationPolicy,
      true,
      true
    >;
    INVENT_USE_DEFAULT_PRODUCTION_LOCATION_FOR_FORMULA_BOM: EnumField<
      InventLocationBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    REQ_REFILL: EnumField<
      InventLocationBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    REQ_CALENDAR_ID: OrderableEdmTypeField<
      InventLocationBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    WORK_PROCESSING_POLICY_NAME: OrderableEdmTypeField<
      InventLocationBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ENABLE_QUALITY_MANAGEMENT: EnumField<
      InventLocationBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    SYS_CREATED_BY: OrderableEdmTypeField<
      InventLocationBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INVENT_SITE_ID: OrderableEdmTypeField<
      InventLocationBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FSH_STORE: EnumField<
      InventLocationBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    WM_SLOCATION_ID_DEFAULT_ISSUE: OrderableEdmTypeField<
      InventLocationBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INVENT_COUNTING_GROUP_BR: EnumField<
      InventLocationBiEntities<DeSerializers>,
      DeSerializersT,
      InventCountingGroupBr,
      true,
      true
    >;
    NAME: OrderableEdmTypeField<
      InventLocationBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REMOVE_INVENT_BLOCKING_ON_STATUS_CHANGE: EnumField<
      InventLocationBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ALLOW_MARKING_RESERVATION_REMOVAL: EnumField<
      InventLocationBiEntities<DeSerializers>,
      DeSerializersT,
      WhsAllowMarkingReservationRemoval,
      true,
      true
    >;
    INVENT_PROFILE_TYPE_RU: EnumField<
      InventLocationBiEntities<DeSerializers>,
      DeSerializersT,
      InventProfileTypeRu,
      true,
      true
    >;
    SYS_DATA_AREA_ID: OrderableEdmTypeField<
      InventLocationBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DEFAULT_CONTAINER_TYPE_CODE: OrderableEdmTypeField<
      InventLocationBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RBO_DEFAULT_WMS_LOCATION_ID: OrderableEdmTypeField<
      InventLocationBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DEFAULT_QUALITY_MAINTENANCE_LOCATION: OrderableEdmTypeField<
      InventLocationBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RETAIL_INVENT_NEG_PHYSICAL: EnumField<
      InventLocationBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    INVENT_LOCATION_ID_GOODS_IN_ROUTE_RU: OrderableEdmTypeField<
      InventLocationBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    WMS_POSITION_FORMAT: OrderableEdmTypeField<
      InventLocationBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SYS_REC_VERSION: OrderableEdmTypeField<
      InventLocationBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    WHS_ENABLED: EnumField<
      InventLocationBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    HMIM_DOMESTIC_LANGUAGE: OrderableEdmTypeField<
      InventLocationBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INVENT_LOCATION_LEVEL: OrderableEdmTypeField<
      InventLocationBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    SOURCE_KEY: OrderableEdmTypeField<
      InventLocationBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    HMIM_EXPORT_LANGUAGE: OrderableEdmTypeField<
      InventLocationBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    WHS_RAW_MATERIAL_POLICY: EnumField<
      InventLocationBiEntities<DeSerializers>,
      DeSerializersT,
      WhsRawMaterialPolicy,
      true,
      true
    >;
    WMS_LEVEL_FORMAT: OrderableEdmTypeField<
      InventLocationBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ACTIVITY_TYPE_RU: OrderableEdmTypeField<
      InventLocationBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RETAIL_WMS_LOCATION_ID_DEFAULT_RETURN: OrderableEdmTypeField<
      InventLocationBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RBO_DEFAULT_INVENT_PROFILE_ID_RU: OrderableEdmTypeField<
      InventLocationBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CYCLE_COUNT_ALLOW_PALLET_MOVE: EnumField<
      InventLocationBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    WMS_POSITION_NAME_ACTIVE: EnumField<
      InventLocationBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    PROD_RESERVE_ONLY_WHSE: EnumField<
      InventLocationBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    CUST_ACCOUNT_BR: OrderableEdmTypeField<
      InventLocationBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RETAIL_INVENT_NEG_FINANCIAL: EnumField<
      InventLocationBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    RETAIL_WEIGHT_EX_1: OrderableEdmTypeField<
      InventLocationBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    SYS_MODIFIED_BY: OrderableEdmTypeField<
      InventLocationBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DEFAULT_RETURN_CREDIT_ONLY_LOCATION: OrderableEdmTypeField<
      InventLocationBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RELEASE_TO_WAREHOUSE_RULE: EnumField<
      InventLocationBiEntities<DeSerializers>,
      DeSerializersT,
      WhsReleaseToWarehouseRule,
      true,
      true
    >;
    ALL_FIELDS: AllFields<InventLocationBiEntities<DeSerializers>>;
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
         * Static representation of the {@link inventLocationId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVENT_LOCATION_ID: fieldBuilder.buildEdmTypeField(
          'InventLocationId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link manual} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MANUAL: fieldBuilder.buildEnumField('Manual', NoYes, true),
        /**
         * Static representation of the {@link inventLocationIdTransit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVENT_LOCATION_ID_TRANSIT: fieldBuilder.buildEdmTypeField(
          'InventLocationIdTransit',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link printBolBeforeShipConfirm} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRINT_BOL_BEFORE_SHIP_CONFIRM: fieldBuilder.buildEnumField(
          'PrintBOLBeforeShipConfirm',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link defaultKanbanFinishedGoodsLocation} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFAULT_KANBAN_FINISHED_GOODS_LOCATION: fieldBuilder.buildEdmTypeField(
          'DefaultKanbanFinishedGoodsLocation',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link branchNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BRANCH_NUMBER: fieldBuilder.buildEdmTypeField(
          'BranchNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link sysModifiedDateTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SYS_MODIFIED_DATE_TIME: fieldBuilder.buildEdmTypeField(
          'SysModifiedDateTime',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link custAccountHu} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUST_ACCOUNT_HU: fieldBuilder.buildEdmTypeField(
          'CustAccount_HU',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link allowLaborStandards} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ALLOW_LABOR_STANDARDS: fieldBuilder.buildEnumField(
          'AllowLaborStandards',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link whsProdOrderBackflushMustUseReservedQty} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WHS_PROD_ORDER_BACKFLUSH_MUST_USE_RESERVED_QTY:
          fieldBuilder.buildEnumField(
            'WHSProdOrderBackflushMustUseReservedQty',
            NoYes,
            true
          ),
        /**
         * Static representation of the {@link wmsRackNameActive} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WMS_RACK_NAME_ACTIVE: fieldBuilder.buildEnumField(
          'WMSRackNameActive',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link defaultShipMaintenanceLoc} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFAULT_SHIP_MAINTENANCE_LOC: fieldBuilder.buildEdmTypeField(
          'DefaultShipMaintenanceLoc',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link sysCreatedDateTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SYS_CREATED_DATE_TIME: fieldBuilder.buildEdmTypeField(
          'SysCreatedDateTime',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link wmsLocationIdDefaultReceipt} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WMS_LOCATION_ID_DEFAULT_RECEIPT: fieldBuilder.buildEdmTypeField(
          'WMSLocationIdDefaultReceipt',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link wmsLevelNameActive} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WMS_LEVEL_NAME_ACTIVE: fieldBuilder.buildEnumField(
          'WMSLevelNameActive',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link inventProfileIdRu} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVENT_PROFILE_ID_RU: fieldBuilder.buildEdmTypeField(
          'InventProfileId_RU',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link defaultProductionInputLocation} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFAULT_PRODUCTION_INPUT_LOCATION: fieldBuilder.buildEdmTypeField(
          'DefaultProductionInputLocation',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link reserveAtLoadPost} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RESERVE_AT_LOAD_POST: fieldBuilder.buildEnumField(
          'ReserveAtLoadPost',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link inventLocationIdReqMain} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVENT_LOCATION_ID_REQ_MAIN: fieldBuilder.buildEdmTypeField(
          'InventLocationIdReqMain',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link wmsAisleNameActive} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WMS_AISLE_NAME_ACTIVE: fieldBuilder.buildEnumField(
          'WMSAisleNameActive',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link vendAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VEND_ACCOUNT: fieldBuilder.buildEdmTypeField(
          'VendAccount',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link warehouseAutoReleaseReservation} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WAREHOUSE_AUTO_RELEASE_RESERVATION: fieldBuilder.buildEnumField(
          'WarehouseAutoReleaseReservation',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link autoUpdateShipment} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AUTO_UPDATE_SHIPMENT: fieldBuilder.buildEnumField(
          'AutoUpdateShipment',
          WhsAutoUpdateShipment,
          true
        ),
        /**
         * Static representation of the {@link defaultProductionFinishGoodsLocation} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFAULT_PRODUCTION_FINISH_GOODS_LOCATION:
          fieldBuilder.buildEdmTypeField(
            'DefaultProductionFinishGoodsLocation',
            'Edm.String',
            true
          ),
        /**
         * Static representation of the {@link uniqueCheckDigits} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        UNIQUE_CHECK_DIGITS: fieldBuilder.buildEnumField(
          'UniqueCheckDigits',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link inventLocationIdQuarantine} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVENT_LOCATION_ID_QUARANTINE: fieldBuilder.buildEdmTypeField(
          'InventLocationIdQuarantine',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link vendAccountCustomRu} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VEND_ACCOUNT_CUSTOM_RU: fieldBuilder.buildEdmTypeField(
          'VendAccountCustom_RU',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link decrementLoadLine} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DECREMENT_LOAD_LINE: fieldBuilder.buildEnumField(
          'DecrementLoadLine',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link wmsRackFormat} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WMS_RACK_FORMAT: fieldBuilder.buildEdmTypeField(
          'WMSRackFormat',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link inventLocationType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVENT_LOCATION_TYPE: fieldBuilder.buildEnumField(
          'InventLocationType',
          InventLocationType,
          true
        ),
        /**
         * Static representation of the {@link defaultStatusId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFAULT_STATUS_ID: fieldBuilder.buildEdmTypeField(
          'DefaultStatusId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link wmsLocationIdGoodsInRouteRu} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WMS_LOCATION_ID_GOODS_IN_ROUTE_RU: fieldBuilder.buildEdmTypeField(
          'WMSLocationIdGoodsInRoute_RU',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link numberSequenceGroupRu} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NUMBER_SEQUENCE_GROUP_RU: fieldBuilder.buildEdmTypeField(
          'NumberSequenceGroup_RU',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link loadReleaseReservationPolicy} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LOAD_RELEASE_RESERVATION_POLICY: fieldBuilder.buildEnumField(
          'LoadReleaseReservationPolicy',
          WhsLoadReleaseReservationPolicy,
          true
        ),
        /**
         * Static representation of the {@link inventUseDefaultProductionLocationForFormulaBom} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVENT_USE_DEFAULT_PRODUCTION_LOCATION_FOR_FORMULA_BOM:
          fieldBuilder.buildEnumField(
            'InventUseDefaultProductionLocationForFormulaBOM',
            NoYes,
            true
          ),
        /**
         * Static representation of the {@link reqRefill} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REQ_REFILL: fieldBuilder.buildEnumField('ReqRefill', NoYes, true),
        /**
         * Static representation of the {@link reqCalendarId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REQ_CALENDAR_ID: fieldBuilder.buildEdmTypeField(
          'ReqCalendarId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link workProcessingPolicyName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WORK_PROCESSING_POLICY_NAME: fieldBuilder.buildEdmTypeField(
          'WorkProcessingPolicyName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link enableQualityManagement} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ENABLE_QUALITY_MANAGEMENT: fieldBuilder.buildEnumField(
          'EnableQualityManagement',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link sysCreatedBy} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SYS_CREATED_BY: fieldBuilder.buildEdmTypeField(
          'SysCreatedBy',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link inventSiteId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVENT_SITE_ID: fieldBuilder.buildEdmTypeField(
          'InventSiteId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link fshStore} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FSH_STORE: fieldBuilder.buildEnumField('FSHStore', NoYes, true),
        /**
         * Static representation of the {@link wmSlocationIdDefaultIssue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WM_SLOCATION_ID_DEFAULT_ISSUE: fieldBuilder.buildEdmTypeField(
          'WMSlocationIdDefaultIssue',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link inventCountingGroupBr} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVENT_COUNTING_GROUP_BR: fieldBuilder.buildEnumField(
          'InventCountingGroup_BR',
          InventCountingGroupBr,
          true
        ),
        /**
         * Static representation of the {@link name} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NAME: fieldBuilder.buildEdmTypeField('Name', 'Edm.String', true),
        /**
         * Static representation of the {@link removeInventBlockingOnStatusChange} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REMOVE_INVENT_BLOCKING_ON_STATUS_CHANGE: fieldBuilder.buildEnumField(
          'RemoveInventBlockingOnStatusChange',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link allowMarkingReservationRemoval} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ALLOW_MARKING_RESERVATION_REMOVAL: fieldBuilder.buildEnumField(
          'AllowMarkingReservationRemoval',
          WhsAllowMarkingReservationRemoval,
          true
        ),
        /**
         * Static representation of the {@link inventProfileTypeRu} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVENT_PROFILE_TYPE_RU: fieldBuilder.buildEnumField(
          'InventProfileType_RU',
          InventProfileTypeRu,
          true
        ),
        /**
         * Static representation of the {@link sysDataAreaId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SYS_DATA_AREA_ID: fieldBuilder.buildEdmTypeField(
          'SysDataAreaId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link defaultContainerTypeCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFAULT_CONTAINER_TYPE_CODE: fieldBuilder.buildEdmTypeField(
          'DefaultContainerTypeCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link rboDefaultWmsLocationId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RBO_DEFAULT_WMS_LOCATION_ID: fieldBuilder.buildEdmTypeField(
          'RBODefaultWMSLocationId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link defaultQualityMaintenanceLocation} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFAULT_QUALITY_MAINTENANCE_LOCATION: fieldBuilder.buildEdmTypeField(
          'DefaultQualityMaintenanceLocation',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link retailInventNegPhysical} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RETAIL_INVENT_NEG_PHYSICAL: fieldBuilder.buildEnumField(
          'RetailInventNegPhysical',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link inventLocationIdGoodsInRouteRu} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVENT_LOCATION_ID_GOODS_IN_ROUTE_RU: fieldBuilder.buildEdmTypeField(
          'InventLocationIdGoodsInRoute_RU',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link wmsPositionFormat} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WMS_POSITION_FORMAT: fieldBuilder.buildEdmTypeField(
          'WMSPositionFormat',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link sysRecVersion} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SYS_REC_VERSION: fieldBuilder.buildEdmTypeField(
          'SysRecVersion',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link whsEnabled} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WHS_ENABLED: fieldBuilder.buildEnumField('WHSEnabled', NoYes, true),
        /**
         * Static representation of the {@link hmimDomesticLanguage} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        HMIM_DOMESTIC_LANGUAGE: fieldBuilder.buildEdmTypeField(
          'HMIMDomesticLanguage',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link inventLocationLevel} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVENT_LOCATION_LEVEL: fieldBuilder.buildEdmTypeField(
          'InventLocationLevel',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link sourceKey} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SOURCE_KEY: fieldBuilder.buildEdmTypeField(
          'SourceKey',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link hmimExportLanguage} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        HMIM_EXPORT_LANGUAGE: fieldBuilder.buildEdmTypeField(
          'HMIMExportLanguage',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link whsRawMaterialPolicy} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WHS_RAW_MATERIAL_POLICY: fieldBuilder.buildEnumField(
          'WHSRawMaterialPolicy',
          WhsRawMaterialPolicy,
          true
        ),
        /**
         * Static representation of the {@link wmsLevelFormat} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WMS_LEVEL_FORMAT: fieldBuilder.buildEdmTypeField(
          'WMSLevelFormat',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link activityTypeRu} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACTIVITY_TYPE_RU: fieldBuilder.buildEdmTypeField(
          'ActivityType_RU',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link retailWmsLocationIdDefaultReturn} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RETAIL_WMS_LOCATION_ID_DEFAULT_RETURN: fieldBuilder.buildEdmTypeField(
          'RetailWMSLocationIdDefaultReturn',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link rboDefaultInventProfileIdRu} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RBO_DEFAULT_INVENT_PROFILE_ID_RU: fieldBuilder.buildEdmTypeField(
          'RBODefaultInventProfileId_RU',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link cycleCountAllowPalletMove} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CYCLE_COUNT_ALLOW_PALLET_MOVE: fieldBuilder.buildEnumField(
          'CycleCountAllowPalletMove',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link wmsPositionNameActive} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WMS_POSITION_NAME_ACTIVE: fieldBuilder.buildEnumField(
          'WMSPositionNameActive',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link prodReserveOnlyWhse} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROD_RESERVE_ONLY_WHSE: fieldBuilder.buildEnumField(
          'ProdReserveOnlyWhse',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link custAccountBr} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUST_ACCOUNT_BR: fieldBuilder.buildEdmTypeField(
          'CustAccount_BR',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link retailInventNegFinancial} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RETAIL_INVENT_NEG_FINANCIAL: fieldBuilder.buildEnumField(
          'RetailInventNegFinancial',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link retailWeightEx1} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RETAIL_WEIGHT_EX_1: fieldBuilder.buildEdmTypeField(
          'RetailWeightEx1',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link sysModifiedBy} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SYS_MODIFIED_BY: fieldBuilder.buildEdmTypeField(
          'SysModifiedBy',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link defaultReturnCreditOnlyLocation} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFAULT_RETURN_CREDIT_ONLY_LOCATION: fieldBuilder.buildEdmTypeField(
          'DefaultReturnCreditOnlyLocation',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link releaseToWarehouseRule} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RELEASE_TO_WAREHOUSE_RULE: fieldBuilder.buildEnumField(
          'ReleaseToWarehouseRule',
          WhsReleaseToWarehouseRule,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', InventLocationBiEntities)
      };
    }

    return this._schema;
  }
}
