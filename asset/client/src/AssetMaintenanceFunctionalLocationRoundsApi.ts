/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { AssetMaintenanceFunctionalLocationRounds } from './AssetMaintenanceFunctionalLocationRounds';
import { AssetMaintenanceFunctionalLocationRoundsRequestBuilder } from './AssetMaintenanceFunctionalLocationRoundsRequestBuilder';
import { AssetMaintenanceRoundsApi } from './AssetMaintenanceRoundsApi';
import { AssetMaintenanceJobTypesApi } from './AssetMaintenanceJobTypesApi';
import { AssetMaintenanceProductsApi } from './AssetMaintenanceProductsApi';
import { AssetMaintenanceJobTradesApi } from './AssetMaintenanceJobTradesApi';
import { AssetMaintenanceModelsApi } from './AssetMaintenanceModelsApi';
import { AssetMaintenanceJobVariantsApi } from './AssetMaintenanceJobVariantsApi';
import { AssetMaintenanceFunctionalLocationsApi } from './AssetMaintenanceFunctionalLocationsApi';
import { AssetMaintenanceAssetTypesApi } from './AssetMaintenanceAssetTypesApi';
import { DayWeekMonthQuarterYear } from './DayWeekMonthQuarterYear';
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
export class AssetMaintenanceFunctionalLocationRoundsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<
      AssetMaintenanceFunctionalLocationRounds<DeSerializersT>,
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
  ): AssetMaintenanceFunctionalLocationRoundsApi<DeSerializersT> {
    return new AssetMaintenanceFunctionalLocationRoundsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link assetMaintenanceRound} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_MAINTENANCE_ROUND: OneToOneLink<
      AssetMaintenanceFunctionalLocationRounds<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceRoundsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link assetMaintenanceJobType} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_MAINTENANCE_JOB_TYPE: OneToOneLink<
      AssetMaintenanceFunctionalLocationRounds<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceJobTypesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link assetMaintenanceProduct} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_MAINTENANCE_PRODUCT: OneToOneLink<
      AssetMaintenanceFunctionalLocationRounds<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceProductsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link assetMaintenanceJobTrade} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_MAINTENANCE_JOB_TRADE: OneToOneLink<
      AssetMaintenanceFunctionalLocationRounds<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceJobTradesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link assetMaintenanceModel} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_MAINTENANCE_MODEL: OneToOneLink<
      AssetMaintenanceFunctionalLocationRounds<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceModelsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link assetMaintenanceJobVariant} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_MAINTENANCE_JOB_VARIANT: OneToOneLink<
      AssetMaintenanceFunctionalLocationRounds<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceJobVariantsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link assetMaintenanceFunctionalLocation} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_MAINTENANCE_FUNCTIONAL_LOCATION: OneToOneLink<
      AssetMaintenanceFunctionalLocationRounds<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceFunctionalLocationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link assetMaintenanceAssetType} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_MAINTENANCE_ASSET_TYPE: OneToOneLink<
      AssetMaintenanceFunctionalLocationRounds<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceAssetTypesApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      AssetMaintenanceRoundsApi<DeSerializersT>,
      AssetMaintenanceJobTypesApi<DeSerializersT>,
      AssetMaintenanceProductsApi<DeSerializersT>,
      AssetMaintenanceJobTradesApi<DeSerializersT>,
      AssetMaintenanceModelsApi<DeSerializersT>,
      AssetMaintenanceJobVariantsApi<DeSerializersT>,
      AssetMaintenanceFunctionalLocationsApi<DeSerializersT>,
      AssetMaintenanceAssetTypesApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      ASSET_MAINTENANCE_ROUND: new OneToOneLink(
        'AssetMaintenanceRound',
        this,
        linkedApis[0]
      ),
      ASSET_MAINTENANCE_JOB_TYPE: new OneToOneLink(
        'AssetMaintenanceJobType',
        this,
        linkedApis[1]
      ),
      ASSET_MAINTENANCE_PRODUCT: new OneToOneLink(
        'AssetMaintenanceProduct',
        this,
        linkedApis[2]
      ),
      ASSET_MAINTENANCE_JOB_TRADE: new OneToOneLink(
        'AssetMaintenanceJobTrade',
        this,
        linkedApis[3]
      ),
      ASSET_MAINTENANCE_MODEL: new OneToOneLink(
        'AssetMaintenanceModel',
        this,
        linkedApis[4]
      ),
      ASSET_MAINTENANCE_JOB_VARIANT: new OneToOneLink(
        'AssetMaintenanceJobVariant',
        this,
        linkedApis[5]
      ),
      ASSET_MAINTENANCE_FUNCTIONAL_LOCATION: new OneToOneLink(
        'AssetMaintenanceFunctionalLocation',
        this,
        linkedApis[6]
      ),
      ASSET_MAINTENANCE_ASSET_TYPE: new OneToOneLink(
        'AssetMaintenanceAssetType',
        this,
        linkedApis[7]
      )
    };
    return this;
  }

  entityConstructor = AssetMaintenanceFunctionalLocationRounds;

  requestBuilder(): AssetMaintenanceFunctionalLocationRoundsRequestBuilder<DeSerializersT> {
    return new AssetMaintenanceFunctionalLocationRoundsRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    AssetMaintenanceFunctionalLocationRounds<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      AssetMaintenanceFunctionalLocationRounds<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    AssetMaintenanceFunctionalLocationRounds<DeSerializersT>,
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
    typeof AssetMaintenanceFunctionalLocationRounds,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        AssetMaintenanceFunctionalLocationRounds,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      AssetMaintenanceFunctionalLocationRounds<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    FUNCTIONAL_LOCATION_ID: OrderableEdmTypeField<
      AssetMaintenanceFunctionalLocationRounds<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    MAINTENANCE_ASSET_TYPE_ID: OrderableEdmTypeField<
      AssetMaintenanceFunctionalLocationRounds<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PRODUCT_ID: OrderableEdmTypeField<
      AssetMaintenanceFunctionalLocationRounds<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    MODEL_PRODUCT_ID: OrderableEdmTypeField<
      AssetMaintenanceFunctionalLocationRounds<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    MODEL_ID: OrderableEdmTypeField<
      AssetMaintenanceFunctionalLocationRounds<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ROUND_ID: OrderableEdmTypeField<
      AssetMaintenanceFunctionalLocationRounds<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PERIOD_TYPE: EnumField<
      AssetMaintenanceFunctionalLocationRounds<DeSerializers>,
      DeSerializersT,
      DayWeekMonthQuarterYear,
      true,
      true
    >;
    JOB_VARIANT_ID: OrderableEdmTypeField<
      AssetMaintenanceFunctionalLocationRounds<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PERIOD_LENGTH: OrderableEdmTypeField<
      AssetMaintenanceFunctionalLocationRounds<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    START_DATE: OrderableEdmTypeField<
      AssetMaintenanceFunctionalLocationRounds<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    JOB_TYPE_ID: OrderableEdmTypeField<
      AssetMaintenanceFunctionalLocationRounds<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    JOB_TRADE_ID: OrderableEdmTypeField<
      AssetMaintenanceFunctionalLocationRounds<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link assetMaintenanceRound} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_MAINTENANCE_ROUND: OneToOneLink<
      AssetMaintenanceFunctionalLocationRounds<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceRoundsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link assetMaintenanceJobType} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_MAINTENANCE_JOB_TYPE: OneToOneLink<
      AssetMaintenanceFunctionalLocationRounds<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceJobTypesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link assetMaintenanceProduct} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_MAINTENANCE_PRODUCT: OneToOneLink<
      AssetMaintenanceFunctionalLocationRounds<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceProductsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link assetMaintenanceJobTrade} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_MAINTENANCE_JOB_TRADE: OneToOneLink<
      AssetMaintenanceFunctionalLocationRounds<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceJobTradesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link assetMaintenanceModel} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_MAINTENANCE_MODEL: OneToOneLink<
      AssetMaintenanceFunctionalLocationRounds<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceModelsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link assetMaintenanceJobVariant} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_MAINTENANCE_JOB_VARIANT: OneToOneLink<
      AssetMaintenanceFunctionalLocationRounds<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceJobVariantsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link assetMaintenanceFunctionalLocation} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_MAINTENANCE_FUNCTIONAL_LOCATION: OneToOneLink<
      AssetMaintenanceFunctionalLocationRounds<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceFunctionalLocationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link assetMaintenanceAssetType} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_MAINTENANCE_ASSET_TYPE: OneToOneLink<
      AssetMaintenanceFunctionalLocationRounds<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceAssetTypesApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<
      AssetMaintenanceFunctionalLocationRounds<DeSerializers>
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
         * Static representation of the {@link functionalLocationId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FUNCTIONAL_LOCATION_ID: fieldBuilder.buildEdmTypeField(
          'FunctionalLocationId',
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
         * Static representation of the {@link modelProductId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MODEL_PRODUCT_ID: fieldBuilder.buildEdmTypeField(
          'ModelProductId',
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
         * Static representation of the {@link roundId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ROUND_ID: fieldBuilder.buildEdmTypeField(
          'RoundId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link periodType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PERIOD_TYPE: fieldBuilder.buildEnumField(
          'PeriodType',
          DayWeekMonthQuarterYear,
          true
        ),
        /**
         * Static representation of the {@link jobVariantId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        JOB_VARIANT_ID: fieldBuilder.buildEdmTypeField(
          'JobVariantId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link periodLength} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PERIOD_LENGTH: fieldBuilder.buildEdmTypeField(
          'PeriodLength',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link startDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        START_DATE: fieldBuilder.buildEdmTypeField(
          'StartDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link jobTypeId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        JOB_TYPE_ID: fieldBuilder.buildEdmTypeField(
          'JobTypeId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link jobTradeId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        JOB_TRADE_ID: fieldBuilder.buildEdmTypeField(
          'JobTradeId',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', AssetMaintenanceFunctionalLocationRounds)
      };
    }

    return this._schema;
  }
}
