/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { AssetMaintenanceParameters } from './AssetMaintenanceParameters';
import { AssetMaintenanceParametersRequestBuilder } from './AssetMaintenanceParametersRequestBuilder';
import { EntAssetProductReportLanguage } from './EntAssetProductReportLanguage';
import { NoYes } from './NoYes';
import { EntAssetObjectViewType } from './EntAssetObjectViewType';
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
export class AssetMaintenanceParametersApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<AssetMaintenanceParameters<DeSerializersT>, DeSerializersT>
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
  ): AssetMaintenanceParametersApi<DeSerializersT> {
    return new AssetMaintenanceParametersApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = AssetMaintenanceParameters;

  requestBuilder(): AssetMaintenanceParametersRequestBuilder<DeSerializersT> {
    return new AssetMaintenanceParametersRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    AssetMaintenanceParameters<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      AssetMaintenanceParameters<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    AssetMaintenanceParameters<DeSerializersT>,
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
    typeof AssetMaintenanceParameters,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        AssetMaintenanceParameters,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      AssetMaintenanceParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    FUNCTIONAL_LOCATION_ID: OrderableEdmTypeField<
      AssetMaintenanceParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PROJ_ID_FORECAST: OrderableEdmTypeField<
      AssetMaintenanceParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    WORK_ORDER_REPORT_LANGUAGE: EnumField<
      AssetMaintenanceParameters<DeSerializers>,
      DeSerializersT,
      EntAssetProductReportLanguage,
      true,
      true
    >;
    PREVENTIVE_WORK_ORDER_TYPE_ID: OrderableEdmTypeField<
      AssetMaintenanceParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DEFAULT_REQUEST_TYPE_ID: OrderableEdmTypeField<
      AssetMaintenanceParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ITEM_CATEGORY: OrderableEdmTypeField<
      AssetMaintenanceParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    STANDARD_CALENDAR_ID: OrderableEdmTypeField<
      AssetMaintenanceParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FORECAST_MODEL_ID: OrderableEdmTypeField<
      AssetMaintenanceParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    JOURNAL_EXPENSE: OrderableEdmTypeField<
      AssetMaintenanceParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    JOURNAL_ITEM: OrderableEdmTypeField<
      AssetMaintenanceParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COST_CATEGORY: OrderableEdmTypeField<
      AssetMaintenanceParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    WORK_ORDER_RELATED_FORMAT: OrderableEdmTypeField<
      AssetMaintenanceParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FUNCTIONAL_LOCATION_LEVEL: OrderableEdmTypeField<
      AssetMaintenanceParameters<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    BING_KEY: OrderableEdmTypeField<
      AssetMaintenanceParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    WORK_ORDER_COPY_DESCRIPTION: EnumField<
      AssetMaintenanceParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    EMPL_CATEGORY: OrderableEdmTypeField<
      AssetMaintenanceParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    WORK_ORDER_COPY_FAULT_2_REQUEST: EnumField<
      AssetMaintenanceParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    DEFAULT_WORK_ORDER_TYPE_ID: OrderableEdmTypeField<
      AssetMaintenanceParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    STANDARD_MAINTENANCE_ASSET_VIEW_TYPE: EnumField<
      AssetMaintenanceParameters<DeSerializers>,
      DeSerializersT,
      EntAssetObjectViewType,
      true,
      true
    >;
    JOURNAL_HOUR: OrderableEdmTypeField<
      AssetMaintenanceParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<AssetMaintenanceParameters<DeSerializers>>;
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
         * Static representation of the {@link functionalLocationId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FUNCTIONAL_LOCATION_ID: fieldBuilder.buildEdmTypeField(
          'FunctionalLocationId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link projIdForecast} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROJ_ID_FORECAST: fieldBuilder.buildEdmTypeField(
          'ProjIdForecast',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link workOrderReportLanguage} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WORK_ORDER_REPORT_LANGUAGE: fieldBuilder.buildEnumField(
          'WorkOrderReportLanguage',
          EntAssetProductReportLanguage,
          true
        ),
        /**
         * Static representation of the {@link preventiveWorkOrderTypeId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PREVENTIVE_WORK_ORDER_TYPE_ID: fieldBuilder.buildEdmTypeField(
          'PreventiveWorkOrderTypeId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link defaultRequestTypeId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFAULT_REQUEST_TYPE_ID: fieldBuilder.buildEdmTypeField(
          'DefaultRequestTypeId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link itemCategory} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ITEM_CATEGORY: fieldBuilder.buildEdmTypeField(
          'ItemCategory',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link standardCalendarId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STANDARD_CALENDAR_ID: fieldBuilder.buildEdmTypeField(
          'StandardCalendarId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link forecastModelId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FORECAST_MODEL_ID: fieldBuilder.buildEdmTypeField(
          'ForecastModelId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link journalExpense} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        JOURNAL_EXPENSE: fieldBuilder.buildEdmTypeField(
          'JournalExpense',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link journalItem} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        JOURNAL_ITEM: fieldBuilder.buildEdmTypeField(
          'JournalItem',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link costCategory} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COST_CATEGORY: fieldBuilder.buildEdmTypeField(
          'CostCategory',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link workOrderRelatedFormat} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WORK_ORDER_RELATED_FORMAT: fieldBuilder.buildEdmTypeField(
          'WorkOrderRelatedFormat',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link functionalLocationLevel} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FUNCTIONAL_LOCATION_LEVEL: fieldBuilder.buildEdmTypeField(
          'FunctionalLocationLevel',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link bingKey} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BING_KEY: fieldBuilder.buildEdmTypeField('BingKey', 'Edm.String', true),
        /**
         * Static representation of the {@link workOrderCopyDescription} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WORK_ORDER_COPY_DESCRIPTION: fieldBuilder.buildEnumField(
          'WorkOrderCopyDescription',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link emplCategory} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EMPL_CATEGORY: fieldBuilder.buildEdmTypeField(
          'EmplCategory',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link workOrderCopyFault2Request} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WORK_ORDER_COPY_FAULT_2_REQUEST: fieldBuilder.buildEnumField(
          'WorkOrderCopyFault2Request',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link defaultWorkOrderTypeId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFAULT_WORK_ORDER_TYPE_ID: fieldBuilder.buildEdmTypeField(
          'DefaultWorkOrderTypeId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link standardMaintenanceAssetViewType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STANDARD_MAINTENANCE_ASSET_VIEW_TYPE: fieldBuilder.buildEnumField(
          'StandardMaintenanceAssetViewType',
          EntAssetObjectViewType,
          true
        ),
        /**
         * Static representation of the {@link journalHour} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        JOURNAL_HOUR: fieldBuilder.buildEdmTypeField(
          'JournalHour',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', AssetMaintenanceParameters)
      };
    }

    return this._schema;
  }
}
