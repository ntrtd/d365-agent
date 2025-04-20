/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ReqItemCoverageDecouplingPointPeriodSettings } from './ReqItemCoverageDecouplingPointPeriodSettings';
import { ReqItemCoverageDecouplingPointPeriodSettingsRequestBuilder } from './ReqItemCoverageDecouplingPointPeriodSettingsRequestBuilder';
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
  OrderableEdmTypeField
} from '@sap-cloud-sdk/odata-v4';
export class ReqItemCoverageDecouplingPointPeriodSettingsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<
      ReqItemCoverageDecouplingPointPeriodSettings<DeSerializersT>,
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
  ): ReqItemCoverageDecouplingPointPeriodSettingsApi<DeSerializersT> {
    return new ReqItemCoverageDecouplingPointPeriodSettingsApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = ReqItemCoverageDecouplingPointPeriodSettings;

  requestBuilder(): ReqItemCoverageDecouplingPointPeriodSettingsRequestBuilder<DeSerializersT> {
    return new ReqItemCoverageDecouplingPointPeriodSettingsRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    ReqItemCoverageDecouplingPointPeriodSettings<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      ReqItemCoverageDecouplingPointPeriodSettings<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    ReqItemCoverageDecouplingPointPeriodSettings<DeSerializersT>,
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
    typeof ReqItemCoverageDecouplingPointPeriodSettings,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        ReqItemCoverageDecouplingPointPeriodSettings,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      ReqItemCoverageDecouplingPointPeriodSettings<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ITEM_NUMBER: OrderableEdmTypeField<
      ReqItemCoverageDecouplingPointPeriodSettings<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    COVERAGE_WAREHOUSE_LOCATION_ID: OrderableEdmTypeField<
      ReqItemCoverageDecouplingPointPeriodSettings<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    COVERAGE_ITEM_BATCH_NUMBER: OrderableEdmTypeField<
      ReqItemCoverageDecouplingPointPeriodSettings<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    COVERAGE_PRODUCT_COLOR_ID: OrderableEdmTypeField<
      ReqItemCoverageDecouplingPointPeriodSettings<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    COVERAGE_PRODUCT_SIZE_ID: OrderableEdmTypeField<
      ReqItemCoverageDecouplingPointPeriodSettings<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    COVERAGE_PRODUCT_STYLE_ID: OrderableEdmTypeField<
      ReqItemCoverageDecouplingPointPeriodSettings<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    COVERAGE_PRODUCT_VERSION_ID: OrderableEdmTypeField<
      ReqItemCoverageDecouplingPointPeriodSettings<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    COVERAGE_WAREHOUSE_ID: OrderableEdmTypeField<
      ReqItemCoverageDecouplingPointPeriodSettings<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    COVERAGE_ITEM_SERIAL_NUMBER: OrderableEdmTypeField<
      ReqItemCoverageDecouplingPointPeriodSettings<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    COVERAGE_SITE_ID: OrderableEdmTypeField<
      ReqItemCoverageDecouplingPointPeriodSettings<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    COVERAGE_INVENTORY_STATUS_ID: OrderableEdmTypeField<
      ReqItemCoverageDecouplingPointPeriodSettings<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    COVERAGE_PRODUCT_CONFIGURATION_ID: OrderableEdmTypeField<
      ReqItemCoverageDecouplingPointPeriodSettings<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    FROM_DATE: OrderableEdmTypeField<
      ReqItemCoverageDecouplingPointPeriodSettings<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    LEAD_TIME_FACTOR: OrderableEdmTypeField<
      ReqItemCoverageDecouplingPointPeriodSettings<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    MAXIMUM_INVENT_ONHAND_QUANTITY: OrderableEdmTypeField<
      ReqItemCoverageDecouplingPointPeriodSettings<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    YELLOW_QUANTITY: OrderableEdmTypeField<
      ReqItemCoverageDecouplingPointPeriodSettings<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    REORDER_POINT_QUANTITY: OrderableEdmTypeField<
      ReqItemCoverageDecouplingPointPeriodSettings<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    DECOUPLED_LEAD_TIME: OrderableEdmTypeField<
      ReqItemCoverageDecouplingPointPeriodSettings<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    CALCULATED_MAXIMUM_ONHAND_QUANTITY: OrderableEdmTypeField<
      ReqItemCoverageDecouplingPointPeriodSettings<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    MINIMUM_INVENT_ONHAND_QUANTITY: OrderableEdmTypeField<
      ReqItemCoverageDecouplingPointPeriodSettings<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    CALCULATED_REORDER_POINT_QUANTITY: OrderableEdmTypeField<
      ReqItemCoverageDecouplingPointPeriodSettings<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    TO_DATE: OrderableEdmTypeField<
      ReqItemCoverageDecouplingPointPeriodSettings<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    CALCULATED_MINIMUM_ONHAND_QUANTITY: OrderableEdmTypeField<
      ReqItemCoverageDecouplingPointPeriodSettings<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    RED_BASE_QUANTITY: OrderableEdmTypeField<
      ReqItemCoverageDecouplingPointPeriodSettings<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    VARIABILITY_FACTOR: OrderableEdmTypeField<
      ReqItemCoverageDecouplingPointPeriodSettings<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    GREEN_QUANTITY: OrderableEdmTypeField<
      ReqItemCoverageDecouplingPointPeriodSettings<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    RED_SAFETY_QUANTITY: OrderableEdmTypeField<
      ReqItemCoverageDecouplingPointPeriodSettings<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    AVERAGE_DAILY_USAGE: OrderableEdmTypeField<
      ReqItemCoverageDecouplingPointPeriodSettings<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    DEMAND_ADJUSTMENT_FACTOR: OrderableEdmTypeField<
      ReqItemCoverageDecouplingPointPeriodSettings<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ALL_FIELDS: AllFields<
      ReqItemCoverageDecouplingPointPeriodSettings<DeSerializers>
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
         * Static representation of the {@link fromDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FROM_DATE: fieldBuilder.buildEdmTypeField(
          'FromDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link leadTimeFactor} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LEAD_TIME_FACTOR: fieldBuilder.buildEdmTypeField(
          'LeadTimeFactor',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link maximumInventOnhandQuantity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MAXIMUM_INVENT_ONHAND_QUANTITY: fieldBuilder.buildEdmTypeField(
          'MaximumInventOnhandQuantity',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link yellowQuantity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        YELLOW_QUANTITY: fieldBuilder.buildEdmTypeField(
          'YellowQuantity',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link reorderPointQuantity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REORDER_POINT_QUANTITY: fieldBuilder.buildEdmTypeField(
          'ReorderPointQuantity',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link decoupledLeadTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DECOUPLED_LEAD_TIME: fieldBuilder.buildEdmTypeField(
          'DecoupledLeadTime',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link calculatedMaximumOnhandQuantity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CALCULATED_MAXIMUM_ONHAND_QUANTITY: fieldBuilder.buildEdmTypeField(
          'CalculatedMaximumOnhandQuantity',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link minimumInventOnhandQuantity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MINIMUM_INVENT_ONHAND_QUANTITY: fieldBuilder.buildEdmTypeField(
          'MinimumInventOnhandQuantity',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link calculatedReorderPointQuantity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CALCULATED_REORDER_POINT_QUANTITY: fieldBuilder.buildEdmTypeField(
          'CalculatedReorderPointQuantity',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link toDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TO_DATE: fieldBuilder.buildEdmTypeField(
          'ToDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link calculatedMinimumOnhandQuantity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CALCULATED_MINIMUM_ONHAND_QUANTITY: fieldBuilder.buildEdmTypeField(
          'CalculatedMinimumOnhandQuantity',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link redBaseQuantity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RED_BASE_QUANTITY: fieldBuilder.buildEdmTypeField(
          'RedBaseQuantity',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link variabilityFactor} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VARIABILITY_FACTOR: fieldBuilder.buildEdmTypeField(
          'VariabilityFactor',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link greenQuantity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GREEN_QUANTITY: fieldBuilder.buildEdmTypeField(
          'GreenQuantity',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link redSafetyQuantity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RED_SAFETY_QUANTITY: fieldBuilder.buildEdmTypeField(
          'RedSafetyQuantity',
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
         * Static representation of the {@link demandAdjustmentFactor} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEMAND_ADJUSTMENT_FACTOR: fieldBuilder.buildEdmTypeField(
          'DemandAdjustmentFactor',
          'Edm.Decimal',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields(
          '*',
          ReqItemCoverageDecouplingPointPeriodSettings
        )
      };
    }

    return this._schema;
  }
}
