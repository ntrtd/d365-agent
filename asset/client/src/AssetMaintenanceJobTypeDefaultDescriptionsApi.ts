/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { AssetMaintenanceJobTypeDefaultDescriptions } from './AssetMaintenanceJobTypeDefaultDescriptions';
import { AssetMaintenanceJobTypeDefaultDescriptionsRequestBuilder } from './AssetMaintenanceJobTypeDefaultDescriptionsRequestBuilder';
import { AssetMaintenanceJobTypeDefaultsApi } from './AssetMaintenanceJobTypeDefaultsApi';
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
  OneToOneLink
} from '@sap-cloud-sdk/odata-v4';
export class AssetMaintenanceJobTypeDefaultDescriptionsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<
      AssetMaintenanceJobTypeDefaultDescriptions<DeSerializersT>,
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
  ): AssetMaintenanceJobTypeDefaultDescriptionsApi<DeSerializersT> {
    return new AssetMaintenanceJobTypeDefaultDescriptionsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link assetMaintenanceJobTypeDefault} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_MAINTENANCE_JOB_TYPE_DEFAULT: OneToOneLink<
      AssetMaintenanceJobTypeDefaultDescriptions<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceJobTypeDefaultsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [AssetMaintenanceJobTypeDefaultsApi<DeSerializersT>]
  ): this {
    this.navigationPropertyFields = {
      ASSET_MAINTENANCE_JOB_TYPE_DEFAULT: new OneToOneLink(
        'AssetMaintenanceJobTypeDefault',
        this,
        linkedApis[0]
      )
    };
    return this;
  }

  entityConstructor = AssetMaintenanceJobTypeDefaultDescriptions;

  requestBuilder(): AssetMaintenanceJobTypeDefaultDescriptionsRequestBuilder<DeSerializersT> {
    return new AssetMaintenanceJobTypeDefaultDescriptionsRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    AssetMaintenanceJobTypeDefaultDescriptions<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      AssetMaintenanceJobTypeDefaultDescriptions<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    AssetMaintenanceJobTypeDefaultDescriptions<DeSerializersT>,
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
    typeof AssetMaintenanceJobTypeDefaultDescriptions,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        AssetMaintenanceJobTypeDefaultDescriptions,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      AssetMaintenanceJobTypeDefaultDescriptions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    FUNCTIONAL_LOCATION_ID: OrderableEdmTypeField<
      AssetMaintenanceJobTypeDefaultDescriptions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    MAINTENANCE_ASSET_TYPE_ID: OrderableEdmTypeField<
      AssetMaintenanceJobTypeDefaultDescriptions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PRODUCT_ID: OrderableEdmTypeField<
      AssetMaintenanceJobTypeDefaultDescriptions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    MODEL_PRODUCT_ID: OrderableEdmTypeField<
      AssetMaintenanceJobTypeDefaultDescriptions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    MODEL_ID: OrderableEdmTypeField<
      AssetMaintenanceJobTypeDefaultDescriptions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    MAINTENANCE_ASSET_ID: OrderableEdmTypeField<
      AssetMaintenanceJobTypeDefaultDescriptions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    JOB_TYPE_ID: OrderableEdmTypeField<
      AssetMaintenanceJobTypeDefaultDescriptions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    JOB_VARIANT_ID: OrderableEdmTypeField<
      AssetMaintenanceJobTypeDefaultDescriptions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    JOB_TRADE_ID: OrderableEdmTypeField<
      AssetMaintenanceJobTypeDefaultDescriptions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      AssetMaintenanceJobTypeDefaultDescriptions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link assetMaintenanceJobTypeDefault} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_MAINTENANCE_JOB_TYPE_DEFAULT: OneToOneLink<
      AssetMaintenanceJobTypeDefaultDescriptions<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceJobTypeDefaultsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<
      AssetMaintenanceJobTypeDefaultDescriptions<DeSerializers>
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
         * Static representation of the {@link maintenanceAssetId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MAINTENANCE_ASSET_ID: fieldBuilder.buildEdmTypeField(
          'MaintenanceAssetId',
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
         * Static representation of the {@link jobTradeId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        JOB_TRADE_ID: fieldBuilder.buildEdmTypeField(
          'JobTradeId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link description} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'Description',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields(
          '*',
          AssetMaintenanceJobTypeDefaultDescriptions
        )
      };
    }

    return this._schema;
  }
}
