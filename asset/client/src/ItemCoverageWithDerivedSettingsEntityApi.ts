/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ItemCoverageWithDerivedSettingsEntity } from './ItemCoverageWithDerivedSettingsEntity';
import { ItemCoverageWithDerivedSettingsEntityRequestBuilder } from './ItemCoverageWithDerivedSettingsEntityRequestBuilder';
import { NoYes } from './NoYes';
import { ReqMinSatisfy } from './ReqMinSatisfy';
import { ReqCovType } from './ReqCovType';
import { ReqOnHandConsumptionStrategy } from './ReqOnHandConsumptionStrategy';
import { ReqPoType } from './ReqPoType';
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
export class ItemCoverageWithDerivedSettingsEntityApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<
      ItemCoverageWithDerivedSettingsEntity<DeSerializersT>,
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
  ): ItemCoverageWithDerivedSettingsEntityApi<DeSerializersT> {
    return new ItemCoverageWithDerivedSettingsEntityApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = ItemCoverageWithDerivedSettingsEntity;

  requestBuilder(): ItemCoverageWithDerivedSettingsEntityRequestBuilder<DeSerializersT> {
    return new ItemCoverageWithDerivedSettingsEntityRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    ItemCoverageWithDerivedSettingsEntity<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      ItemCoverageWithDerivedSettingsEntity<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    ItemCoverageWithDerivedSettingsEntity<DeSerializersT>,
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
    typeof ItemCoverageWithDerivedSettingsEntity,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        ItemCoverageWithDerivedSettingsEntity,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      ItemCoverageWithDerivedSettingsEntity<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ITEM_NUMBER: OrderableEdmTypeField<
      ItemCoverageWithDerivedSettingsEntity<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    COVERAGE_WAREHOUSE_LOCATION_ID: OrderableEdmTypeField<
      ItemCoverageWithDerivedSettingsEntity<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    COVERAGE_ITEM_BATCH_NUMBER: OrderableEdmTypeField<
      ItemCoverageWithDerivedSettingsEntity<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    COVERAGE_PRODUCT_COLOR_ID: OrderableEdmTypeField<
      ItemCoverageWithDerivedSettingsEntity<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    COVERAGE_PRODUCT_SIZE_ID: OrderableEdmTypeField<
      ItemCoverageWithDerivedSettingsEntity<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    COVERAGE_PRODUCT_STYLE_ID: OrderableEdmTypeField<
      ItemCoverageWithDerivedSettingsEntity<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    COVERAGE_PRODUCT_VERSION_ID: OrderableEdmTypeField<
      ItemCoverageWithDerivedSettingsEntity<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    COVERAGE_WAREHOUSE_ID: OrderableEdmTypeField<
      ItemCoverageWithDerivedSettingsEntity<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    COVERAGE_ITEM_SERIAL_NUMBER: OrderableEdmTypeField<
      ItemCoverageWithDerivedSettingsEntity<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    COVERAGE_SITE_ID: OrderableEdmTypeField<
      ItemCoverageWithDerivedSettingsEntity<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    COVERAGE_INVENTORY_STATUS_ID: OrderableEdmTypeField<
      ItemCoverageWithDerivedSettingsEntity<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    COVERAGE_PRODUCT_CONFIGURATION_ID: OrderableEdmTypeField<
      ItemCoverageWithDerivedSettingsEntity<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    COVERAGE_PERIOD_DAYS: OrderableEdmTypeField<
      ItemCoverageWithDerivedSettingsEntity<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    VENDOR_ACCOUNT_NUMBER: OrderableEdmTypeField<
      ItemCoverageWithDerivedSettingsEntity<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    APPROVED_REQUISITION_TIME_FENCE_DAYS: OrderableEdmTypeField<
      ItemCoverageWithDerivedSettingsEntity<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    LAST_PLANNING_FORMULA_PRIORITY_CHANGED_DATE: OrderableEdmTypeField<
      ItemCoverageWithDerivedSettingsEntity<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    PROCUREMENT_LEAD_TIME_DAYS: OrderableEdmTypeField<
      ItemCoverageWithDerivedSettingsEntity<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    DEFAULT_PLANNING_FORMULA_PRIORITY: OrderableEdmTypeField<
      ItemCoverageWithDerivedSettingsEntity<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    IS_PROCUREMENT_LEAD_TIME_OVERRIDDEN: EnumField<
      ItemCoverageWithDerivedSettingsEntity<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    AUTOMATIC_FIRMING_TIME_FENCE_DAYS: OrderableEdmTypeField<
      ItemCoverageWithDerivedSettingsEntity<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    IS_CONSUME_ON_HAND_OVERRIDDEN: EnumField<
      ItemCoverageWithDerivedSettingsEntity<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    PRODUCTION_LEAD_TIME_DAYS: OrderableEdmTypeField<
      ItemCoverageWithDerivedSettingsEntity<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    MINIMUM_ON_HAND_FULFILLMENT_METHOD: EnumField<
      ItemCoverageWithDerivedSettingsEntity<DeSerializers>,
      DeSerializersT,
      ReqMinSatisfy,
      true,
      true
    >;
    PLANNING_FORMULA_ITEM_NUMBER: OrderableEdmTypeField<
      ItemCoverageWithDerivedSettingsEntity<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MAXIMUM_ON_HAND_INVENTORY_QUANTITY: OrderableEdmTypeField<
      ItemCoverageWithDerivedSettingsEntity<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ARE_TIME_FENCES_OVERRIDDEN: EnumField<
      ItemCoverageWithDerivedSettingsEntity<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    FREEZE_TIME_FENCE_DAYS: OrderableEdmTypeField<
      ItemCoverageWithDerivedSettingsEntity<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    IS_TRANSFER_LEAD_TIME_OVERRIDDEN: EnumField<
      ItemCoverageWithDerivedSettingsEntity<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    CAPACITY_SCHEDULING_TIME_FENCE_DAYS: OrderableEdmTypeField<
      ItemCoverageWithDerivedSettingsEntity<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    NEGATIVE_DAYS: OrderableEdmTypeField<
      ItemCoverageWithDerivedSettingsEntity<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    MINIMUM_ON_HAND_INVENTORY_QUANTITY: OrderableEdmTypeField<
      ItemCoverageWithDerivedSettingsEntity<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    COVERAGE_INVENTORY_DIMENSION_ID: OrderableEdmTypeField<
      ItemCoverageWithDerivedSettingsEntity<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MAXIMUM_ON_HAND_INVENTORY_SAFETY_KEY_ID: OrderableEdmTypeField<
      ItemCoverageWithDerivedSettingsEntity<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    POSITIVE_DAYS: OrderableEdmTypeField<
      ItemCoverageWithDerivedSettingsEntity<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    COVERAGE_TIME_FENCE_DAYS: OrderableEdmTypeField<
      ItemCoverageWithDerivedSettingsEntity<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    CURRENT_PLANNING_FORMULA_PRIORITY: OrderableEdmTypeField<
      ItemCoverageWithDerivedSettingsEntity<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    PRODUCT_COVERAGE_GROUP_ID: OrderableEdmTypeField<
      ItemCoverageWithDerivedSettingsEntity<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MINIMUM_ON_HAND_INVENTORY_SAFETY_KEY_ID: OrderableEdmTypeField<
      ItemCoverageWithDerivedSettingsEntity<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ARE_COVERAGE_GROUP_SETTINGS_OVERRIDDEN: EnumField<
      ItemCoverageWithDerivedSettingsEntity<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    IS_TRANSFER_LEAD_TIME_USING_WORKING_DAYS: EnumField<
      ItemCoverageWithDerivedSettingsEntity<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    IS_PROCUMENT_LEAD_TIME_USING_WORKING_DAYS: EnumField<
      ItemCoverageWithDerivedSettingsEntity<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    MUST_USE_LATEST_POSSIBLE_SUPPLY_FIRST: EnumField<
      ItemCoverageWithDerivedSettingsEntity<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    BOM_OR_FORMULA_EXPLOSION_TIME_FENCE_DAYS: OrderableEdmTypeField<
      ItemCoverageWithDerivedSettingsEntity<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    ARE_GENERAL_SETTINGS_OVERRIDDEN: EnumField<
      ItemCoverageWithDerivedSettingsEntity<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    DEFAULT_PLANNED_TRANSFER_ORDER_FROM_WAREHOUSE_ID: OrderableEdmTypeField<
      ItemCoverageWithDerivedSettingsEntity<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COVERAGE_METHOD: EnumField<
      ItemCoverageWithDerivedSettingsEntity<DeSerializers>,
      DeSerializersT,
      ReqCovType,
      true,
      true
    >;
    CONSUME_ON_HAND_INVENTORY_METHOD: EnumField<
      ItemCoverageWithDerivedSettingsEntity<DeSerializers>,
      DeSerializersT,
      ReqOnHandConsumptionStrategy,
      true,
      true
    >;
    TRANSFER_LEAD_TIME_DAYS: OrderableEdmTypeField<
      ItemCoverageWithDerivedSettingsEntity<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    PLANNED_ORDER_TYPE: EnumField<
      ItemCoverageWithDerivedSettingsEntity<DeSerializers>,
      DeSerializersT,
      ReqPoType,
      true,
      true
    >;
    IS_PLANNED_ORDER_TYPE_OVERRIDDEN: EnumField<
      ItemCoverageWithDerivedSettingsEntity<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    IS_PRODUCTION_LEAD_TIME_USING_WORKING_DAYS: EnumField<
      ItemCoverageWithDerivedSettingsEntity<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    IS_PRODUCTION_LEAD_TIME_OVERRIDDEN: EnumField<
      ItemCoverageWithDerivedSettingsEntity<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    IS_MINIMUM_ON_HAND_SAFETY_PERIOD_USED: EnumField<
      ItemCoverageWithDerivedSettingsEntity<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ORDER_SPIKE_THRESHOLD: OrderableEdmTypeField<
      ItemCoverageWithDerivedSettingsEntity<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    AVERAGE_DAILY_USAGE: OrderableEdmTypeField<
      ItemCoverageWithDerivedSettingsEntity<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    DISTRIBUTION_BASED_ADU_ENABLED: EnumField<
      ItemCoverageWithDerivedSettingsEntity<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    USE_DECOUPLING_POINT_PERIOD_SETTINGS: EnumField<
      ItemCoverageWithDerivedSettingsEntity<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    REORDER_POINT: OrderableEdmTypeField<
      ItemCoverageWithDerivedSettingsEntity<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ORDER_CYCLE: OrderableEdmTypeField<
      ItemCoverageWithDerivedSettingsEntity<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    ALL_FIELDS: AllFields<ItemCoverageWithDerivedSettingsEntity<DeSerializers>>;
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
         * Static representation of the {@link itemNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ITEM_NUMBER: fieldBuilder.buildEdmTypeField(
          'ItemNumber',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link coverageWarehouseLocationId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COVERAGE_WAREHOUSE_LOCATION_ID: fieldBuilder.buildEdmTypeField(
          'CoverageWarehouseLocationId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link coverageItemBatchNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COVERAGE_ITEM_BATCH_NUMBER: fieldBuilder.buildEdmTypeField(
          'CoverageItemBatchNumber',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link coverageProductColorId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COVERAGE_PRODUCT_COLOR_ID: fieldBuilder.buildEdmTypeField(
          'CoverageProductColorId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link coverageProductSizeId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COVERAGE_PRODUCT_SIZE_ID: fieldBuilder.buildEdmTypeField(
          'CoverageProductSizeId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link coverageProductStyleId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COVERAGE_PRODUCT_STYLE_ID: fieldBuilder.buildEdmTypeField(
          'CoverageProductStyleId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link coverageProductVersionId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COVERAGE_PRODUCT_VERSION_ID: fieldBuilder.buildEdmTypeField(
          'CoverageProductVersionId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link coverageWarehouseId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COVERAGE_WAREHOUSE_ID: fieldBuilder.buildEdmTypeField(
          'CoverageWarehouseId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link coverageItemSerialNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COVERAGE_ITEM_SERIAL_NUMBER: fieldBuilder.buildEdmTypeField(
          'CoverageItemSerialNumber',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link coverageSiteId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COVERAGE_SITE_ID: fieldBuilder.buildEdmTypeField(
          'CoverageSiteId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link coverageInventoryStatusId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COVERAGE_INVENTORY_STATUS_ID: fieldBuilder.buildEdmTypeField(
          'CoverageInventoryStatusId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link coverageProductConfigurationId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COVERAGE_PRODUCT_CONFIGURATION_ID: fieldBuilder.buildEdmTypeField(
          'CoverageProductConfigurationId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link coveragePeriodDays} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COVERAGE_PERIOD_DAYS: fieldBuilder.buildEdmTypeField(
          'CoveragePeriodDays',
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
         * Static representation of the {@link approvedRequisitionTimeFenceDays} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        APPROVED_REQUISITION_TIME_FENCE_DAYS: fieldBuilder.buildEdmTypeField(
          'ApprovedRequisitionTimeFenceDays',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link lastPlanningFormulaPriorityChangedDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LAST_PLANNING_FORMULA_PRIORITY_CHANGED_DATE:
          fieldBuilder.buildEdmTypeField(
            'LastPlanningFormulaPriorityChangedDate',
            'Edm.DateTimeOffset',
            false
          ),
        /**
         * Static representation of the {@link procurementLeadTimeDays} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROCUREMENT_LEAD_TIME_DAYS: fieldBuilder.buildEdmTypeField(
          'ProcurementLeadTimeDays',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link defaultPlanningFormulaPriority} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFAULT_PLANNING_FORMULA_PRIORITY: fieldBuilder.buildEdmTypeField(
          'DefaultPlanningFormulaPriority',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link isProcurementLeadTimeOverridden} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_PROCUREMENT_LEAD_TIME_OVERRIDDEN: fieldBuilder.buildEnumField(
          'IsProcurementLeadTimeOverridden',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link automaticFirmingTimeFenceDays} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AUTOMATIC_FIRMING_TIME_FENCE_DAYS: fieldBuilder.buildEdmTypeField(
          'AutomaticFirmingTimeFenceDays',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link isConsumeOnHandOverridden} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_CONSUME_ON_HAND_OVERRIDDEN: fieldBuilder.buildEnumField(
          'IsConsumeOnHandOverridden',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link productionLeadTimeDays} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCTION_LEAD_TIME_DAYS: fieldBuilder.buildEdmTypeField(
          'ProductionLeadTimeDays',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link minimumOnHandFulfillmentMethod} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MINIMUM_ON_HAND_FULFILLMENT_METHOD: fieldBuilder.buildEnumField(
          'MinimumOnHandFulfillmentMethod',
          ReqMinSatisfy,
          true
        ),
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
         * Static representation of the {@link maximumOnHandInventoryQuantity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MAXIMUM_ON_HAND_INVENTORY_QUANTITY: fieldBuilder.buildEdmTypeField(
          'MaximumOnHandInventoryQuantity',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link areTimeFencesOverridden} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ARE_TIME_FENCES_OVERRIDDEN: fieldBuilder.buildEnumField(
          'AreTimeFencesOverridden',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link freezeTimeFenceDays} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FREEZE_TIME_FENCE_DAYS: fieldBuilder.buildEdmTypeField(
          'FreezeTimeFenceDays',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link isTransferLeadTimeOverridden} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_TRANSFER_LEAD_TIME_OVERRIDDEN: fieldBuilder.buildEnumField(
          'IsTransferLeadTimeOverridden',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link capacitySchedulingTimeFenceDays} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CAPACITY_SCHEDULING_TIME_FENCE_DAYS: fieldBuilder.buildEdmTypeField(
          'CapacitySchedulingTimeFenceDays',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link negativeDays} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NEGATIVE_DAYS: fieldBuilder.buildEdmTypeField(
          'NegativeDays',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link minimumOnHandInventoryQuantity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MINIMUM_ON_HAND_INVENTORY_QUANTITY: fieldBuilder.buildEdmTypeField(
          'MinimumOnHandInventoryQuantity',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link coverageInventoryDimensionId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COVERAGE_INVENTORY_DIMENSION_ID: fieldBuilder.buildEdmTypeField(
          'CoverageInventoryDimensionId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link maximumOnHandInventorySafetyKeyId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MAXIMUM_ON_HAND_INVENTORY_SAFETY_KEY_ID: fieldBuilder.buildEdmTypeField(
          'MaximumOnHandInventorySafetyKeyId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link positiveDays} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        POSITIVE_DAYS: fieldBuilder.buildEdmTypeField(
          'PositiveDays',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link coverageTimeFenceDays} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COVERAGE_TIME_FENCE_DAYS: fieldBuilder.buildEdmTypeField(
          'CoverageTimeFenceDays',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link currentPlanningFormulaPriority} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CURRENT_PLANNING_FORMULA_PRIORITY: fieldBuilder.buildEdmTypeField(
          'CurrentPlanningFormulaPriority',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link productCoverageGroupId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_COVERAGE_GROUP_ID: fieldBuilder.buildEdmTypeField(
          'ProductCoverageGroupId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link minimumOnHandInventorySafetyKeyId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MINIMUM_ON_HAND_INVENTORY_SAFETY_KEY_ID: fieldBuilder.buildEdmTypeField(
          'MinimumOnHandInventorySafetyKeyId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link areCoverageGroupSettingsOverridden} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ARE_COVERAGE_GROUP_SETTINGS_OVERRIDDEN: fieldBuilder.buildEnumField(
          'AreCoverageGroupSettingsOverridden',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link isTransferLeadTimeUsingWorkingDays} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_TRANSFER_LEAD_TIME_USING_WORKING_DAYS: fieldBuilder.buildEnumField(
          'IsTransferLeadTimeUsingWorkingDays',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link isProcumentLeadTimeUsingWorkingDays} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_PROCUMENT_LEAD_TIME_USING_WORKING_DAYS: fieldBuilder.buildEnumField(
          'IsProcumentLeadTimeUsingWorkingDays',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link mustUseLatestPossibleSupplyFirst} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MUST_USE_LATEST_POSSIBLE_SUPPLY_FIRST: fieldBuilder.buildEnumField(
          'MustUseLatestPossibleSupplyFirst',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link bomOrFormulaExplosionTimeFenceDays} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BOM_OR_FORMULA_EXPLOSION_TIME_FENCE_DAYS:
          fieldBuilder.buildEdmTypeField(
            'BOMOrFormulaExplosionTimeFenceDays',
            'Edm.Int32',
            false
          ),
        /**
         * Static representation of the {@link areGeneralSettingsOverridden} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ARE_GENERAL_SETTINGS_OVERRIDDEN: fieldBuilder.buildEnumField(
          'AreGeneralSettingsOverridden',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link defaultPlannedTransferOrderFromWarehouseId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFAULT_PLANNED_TRANSFER_ORDER_FROM_WAREHOUSE_ID:
          fieldBuilder.buildEdmTypeField(
            'DefaultPlannedTransferOrderFromWarehouseId',
            'Edm.String',
            true
          ),
        /**
         * Static representation of the {@link coverageMethod} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COVERAGE_METHOD: fieldBuilder.buildEnumField(
          'CoverageMethod',
          ReqCovType,
          true
        ),
        /**
         * Static representation of the {@link consumeOnHandInventoryMethod} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONSUME_ON_HAND_INVENTORY_METHOD: fieldBuilder.buildEnumField(
          'ConsumeOnHandInventoryMethod',
          ReqOnHandConsumptionStrategy,
          true
        ),
        /**
         * Static representation of the {@link transferLeadTimeDays} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSFER_LEAD_TIME_DAYS: fieldBuilder.buildEdmTypeField(
          'TransferLeadTimeDays',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link plannedOrderType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PLANNED_ORDER_TYPE: fieldBuilder.buildEnumField(
          'PlannedOrderType',
          ReqPoType,
          true
        ),
        /**
         * Static representation of the {@link isPlannedOrderTypeOverridden} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_PLANNED_ORDER_TYPE_OVERRIDDEN: fieldBuilder.buildEnumField(
          'IsPlannedOrderTypeOverridden',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link isProductionLeadTimeUsingWorkingDays} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_PRODUCTION_LEAD_TIME_USING_WORKING_DAYS: fieldBuilder.buildEnumField(
          'IsProductionLeadTimeUsingWorkingDays',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link isProductionLeadTimeOverridden} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_PRODUCTION_LEAD_TIME_OVERRIDDEN: fieldBuilder.buildEnumField(
          'IsProductionLeadTimeOverridden',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link isMinimumOnHandSafetyPeriodUsed} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_MINIMUM_ON_HAND_SAFETY_PERIOD_USED: fieldBuilder.buildEnumField(
          'IsMinimumOnHandSafetyPeriodUsed',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link orderSpikeThreshold} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ORDER_SPIKE_THRESHOLD: fieldBuilder.buildEdmTypeField(
          'OrderSpikeThreshold',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link averageDailyUsage} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AVERAGE_DAILY_USAGE: fieldBuilder.buildEdmTypeField(
          'AverageDailyUsage',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link distributionBasedAduEnabled} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DISTRIBUTION_BASED_ADU_ENABLED: fieldBuilder.buildEnumField(
          'DistributionBasedADUEnabled',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link useDecouplingPointPeriodSettings} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        USE_DECOUPLING_POINT_PERIOD_SETTINGS: fieldBuilder.buildEnumField(
          'UseDecouplingPointPeriodSettings',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link reorderPoint} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REORDER_POINT: fieldBuilder.buildEdmTypeField(
          'ReorderPoint',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link orderCycle} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ORDER_CYCLE: fieldBuilder.buildEdmTypeField(
          'OrderCycle',
          'Edm.Int32',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', ItemCoverageWithDerivedSettingsEntity)
      };
    }

    return this._schema;
  }
}
