/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { AssetMaintenanceJobTypeHourForecasts } from './AssetMaintenanceJobTypeHourForecasts';
import { AssetMaintenanceJobTypeHourForecastsRequestBuilder } from './AssetMaintenanceJobTypeHourForecastsRequestBuilder';
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
export class AssetMaintenanceJobTypeHourForecastsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<
      AssetMaintenanceJobTypeHourForecasts<DeSerializersT>,
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
  ): AssetMaintenanceJobTypeHourForecastsApi<DeSerializersT> {
    return new AssetMaintenanceJobTypeHourForecastsApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = AssetMaintenanceJobTypeHourForecasts;

  requestBuilder(): AssetMaintenanceJobTypeHourForecastsRequestBuilder<DeSerializersT> {
    return new AssetMaintenanceJobTypeHourForecastsRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    AssetMaintenanceJobTypeHourForecasts<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      AssetMaintenanceJobTypeHourForecasts<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    AssetMaintenanceJobTypeHourForecasts<DeSerializersT>,
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
    typeof AssetMaintenanceJobTypeHourForecasts,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        AssetMaintenanceJobTypeHourForecasts,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      AssetMaintenanceJobTypeHourForecasts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    MAINTENANCE_ASSET_ID: OrderableEdmTypeField<
      AssetMaintenanceJobTypeHourForecasts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    FUNCTIONAL_LOCATION_ID: OrderableEdmTypeField<
      AssetMaintenanceJobTypeHourForecasts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    JOB_TRADE_ID: OrderableEdmTypeField<
      AssetMaintenanceJobTypeHourForecasts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    JOB_TYPE_ID: OrderableEdmTypeField<
      AssetMaintenanceJobTypeHourForecasts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    JOB_VARIANT_ID: OrderableEdmTypeField<
      AssetMaintenanceJobTypeHourForecasts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    MODEL_ID: OrderableEdmTypeField<
      AssetMaintenanceJobTypeHourForecasts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    MODEL_PRODUCT_ID: OrderableEdmTypeField<
      AssetMaintenanceJobTypeHourForecasts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    MAINTENANCE_ASSET_TYPE_ID: OrderableEdmTypeField<
      AssetMaintenanceJobTypeHourForecasts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PRODUCT_ID: OrderableEdmTypeField<
      AssetMaintenanceJobTypeHourForecasts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    FORECAST_CATEGORY_ID: OrderableEdmTypeField<
      AssetMaintenanceJobTypeHourForecasts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    FORECAST_LINE_PROPERTY_ID: OrderableEdmTypeField<
      AssetMaintenanceJobTypeHourForecasts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    FORECAST_HOURS: OrderableEdmTypeField<
      AssetMaintenanceJobTypeHourForecasts<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    FORECAST_CURRENCY_ID: OrderableEdmTypeField<
      AssetMaintenanceJobTypeHourForecasts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FORECAST_MODEL_ID: OrderableEdmTypeField<
      AssetMaintenanceJobTypeHourForecasts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FORECAST_PROJECT_ID: OrderableEdmTypeField<
      AssetMaintenanceJobTypeHourForecasts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<AssetMaintenanceJobTypeHourForecasts<DeSerializers>>;
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
         * Static representation of the {@link maintenanceAssetId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MAINTENANCE_ASSET_ID: fieldBuilder.buildEdmTypeField(
          'MaintenanceAssetId',
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
          false
        ),
        /**
         * Static representation of the {@link jobTradeId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        JOB_TRADE_ID: fieldBuilder.buildEdmTypeField(
          'JobTradeId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link jobTypeId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        JOB_TYPE_ID: fieldBuilder.buildEdmTypeField(
          'JobTypeId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link jobVariantId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        JOB_VARIANT_ID: fieldBuilder.buildEdmTypeField(
          'JobVariantId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link modelId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MODEL_ID: fieldBuilder.buildEdmTypeField(
          'ModelId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link modelProductId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MODEL_PRODUCT_ID: fieldBuilder.buildEdmTypeField(
          'ModelProductId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link maintenanceAssetTypeId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MAINTENANCE_ASSET_TYPE_ID: fieldBuilder.buildEdmTypeField(
          'MaintenanceAssetTypeId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link productId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_ID: fieldBuilder.buildEdmTypeField(
          'ProductId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link forecastCategoryId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FORECAST_CATEGORY_ID: fieldBuilder.buildEdmTypeField(
          'ForecastCategoryId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link forecastLinePropertyId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FORECAST_LINE_PROPERTY_ID: fieldBuilder.buildEdmTypeField(
          'ForecastLinePropertyId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link forecastHours} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FORECAST_HOURS: fieldBuilder.buildEdmTypeField(
          'ForecastHours',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link forecastCurrencyId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FORECAST_CURRENCY_ID: fieldBuilder.buildEdmTypeField(
          'ForecastCurrencyId',
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
         * Static representation of the {@link forecastProjectId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FORECAST_PROJECT_ID: fieldBuilder.buildEdmTypeField(
          'ForecastProjectId',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', AssetMaintenanceJobTypeHourForecasts)
      };
    }

    return this._schema;
  }
}
