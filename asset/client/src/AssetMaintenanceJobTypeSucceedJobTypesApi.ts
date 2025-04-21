/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { AssetMaintenanceJobTypeSucceedJobTypes } from './AssetMaintenanceJobTypeSucceedJobTypes';
import { AssetMaintenanceJobTypeSucceedJobTypesRequestBuilder } from './AssetMaintenanceJobTypeSucceedJobTypesRequestBuilder';
import { AssetMaintenanceJobVariantsApi } from './AssetMaintenanceJobVariantsApi';
import { AssetMaintenanceJobTradesApi } from './AssetMaintenanceJobTradesApi';
import { AssetMaintenanceJobTypesApi } from './AssetMaintenanceJobTypesApi';
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
export class AssetMaintenanceJobTypeSucceedJobTypesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<
      AssetMaintenanceJobTypeSucceedJobTypes<DeSerializersT>,
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
  ): AssetMaintenanceJobTypeSucceedJobTypesApi<DeSerializersT> {
    return new AssetMaintenanceJobTypeSucceedJobTypesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link assetMaintenanceJobVariant} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_MAINTENANCE_JOB_VARIANT: OneToOneLink<
      AssetMaintenanceJobTypeSucceedJobTypes<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceJobVariantsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link assetMaintenanceJobTrade} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_MAINTENANCE_JOB_TRADE: OneToOneLink<
      AssetMaintenanceJobTypeSucceedJobTypes<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceJobTradesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link assetMaintenanceJobType} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_MAINTENANCE_JOB_TYPE: OneToOneLink<
      AssetMaintenanceJobTypeSucceedJobTypes<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceJobTypesApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      AssetMaintenanceJobVariantsApi<DeSerializersT>,
      AssetMaintenanceJobTradesApi<DeSerializersT>,
      AssetMaintenanceJobTypesApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      ASSET_MAINTENANCE_JOB_VARIANT: new OneToOneLink(
        'AssetMaintenanceJobVariant',
        this,
        linkedApis[0]
      ),
      ASSET_MAINTENANCE_JOB_TRADE: new OneToOneLink(
        'AssetMaintenanceJobTrade',
        this,
        linkedApis[1]
      ),
      ASSET_MAINTENANCE_JOB_TYPE: new OneToOneLink(
        'AssetMaintenanceJobType',
        this,
        linkedApis[2]
      )
    };
    return this;
  }

  entityConstructor = AssetMaintenanceJobTypeSucceedJobTypes;

  requestBuilder(): AssetMaintenanceJobTypeSucceedJobTypesRequestBuilder<DeSerializersT> {
    return new AssetMaintenanceJobTypeSucceedJobTypesRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    AssetMaintenanceJobTypeSucceedJobTypes<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      AssetMaintenanceJobTypeSucceedJobTypes<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    AssetMaintenanceJobTypeSucceedJobTypes<DeSerializersT>,
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
    typeof AssetMaintenanceJobTypeSucceedJobTypes,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        AssetMaintenanceJobTypeSucceedJobTypes,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      AssetMaintenanceJobTypeSucceedJobTypes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    JOB_TYPE_ID: OrderableEdmTypeField<
      AssetMaintenanceJobTypeSucceedJobTypes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    JOB_TYPE_ID_SUCCEED: OrderableEdmTypeField<
      AssetMaintenanceJobTypeSucceedJobTypes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    DAYS_TO_DISPLACEMENT: OrderableEdmTypeField<
      AssetMaintenanceJobTypeSucceedJobTypes<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    JOB_TRADE_ID_SUCCEED: OrderableEdmTypeField<
      AssetMaintenanceJobTypeSucceedJobTypes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    JOB_VARIANT_ID_SUCCEED: OrderableEdmTypeField<
      AssetMaintenanceJobTypeSucceedJobTypes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link assetMaintenanceJobVariant} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_MAINTENANCE_JOB_VARIANT: OneToOneLink<
      AssetMaintenanceJobTypeSucceedJobTypes<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceJobVariantsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link assetMaintenanceJobTrade} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_MAINTENANCE_JOB_TRADE: OneToOneLink<
      AssetMaintenanceJobTypeSucceedJobTypes<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceJobTradesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link assetMaintenanceJobType} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_MAINTENANCE_JOB_TYPE: OneToOneLink<
      AssetMaintenanceJobTypeSucceedJobTypes<DeSerializersT>,
      DeSerializersT,
      AssetMaintenanceJobTypesApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<
      AssetMaintenanceJobTypeSucceedJobTypes<DeSerializers>
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
         * Static representation of the {@link jobTypeId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        JOB_TYPE_ID: fieldBuilder.buildEdmTypeField(
          'JobTypeId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link jobTypeIdSucceed} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        JOB_TYPE_ID_SUCCEED: fieldBuilder.buildEdmTypeField(
          'JobTypeIdSucceed',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link daysToDisplacement} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DAYS_TO_DISPLACEMENT: fieldBuilder.buildEdmTypeField(
          'DaysToDisplacement',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link jobTradeIdSucceed} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        JOB_TRADE_ID_SUCCEED: fieldBuilder.buildEdmTypeField(
          'JobTradeIdSucceed',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link jobVariantIdSucceed} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        JOB_VARIANT_ID_SUCCEED: fieldBuilder.buildEdmTypeField(
          'JobVariantIdSucceed',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', AssetMaintenanceJobTypeSucceedJobTypes)
      };
    }

    return this._schema;
  }
}
