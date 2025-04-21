/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ReqPlanBiEntities } from './ReqPlanBiEntities';
import { ReqPlanBiEntitiesRequestBuilder } from './ReqPlanBiEntitiesRequestBuilder';
import { NoYes } from './NoYes';
import { ReqPlanType } from './ReqPlanType';
import { ReqReduceType } from './ReqReduceType';
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
export class ReqPlanBiEntitiesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<ReqPlanBiEntities<DeSerializersT>, DeSerializersT>
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
  ): ReqPlanBiEntitiesApi<DeSerializersT> {
    return new ReqPlanBiEntitiesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = ReqPlanBiEntities;

  requestBuilder(): ReqPlanBiEntitiesRequestBuilder<DeSerializersT> {
    return new ReqPlanBiEntitiesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    ReqPlanBiEntities<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<ReqPlanBiEntities<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<ReqPlanBiEntities<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<
    typeof ReqPlanBiEntities,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        ReqPlanBiEntities,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      ReqPlanBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    REQ_PLAN_ID: OrderableEdmTypeField<
      ReqPlanBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    MCR_REQ_PLAN_ID_CONTINUITY: OrderableEdmTypeField<
      ReqPlanBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    NAME: OrderableEdmTypeField<
      ReqPlanBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SYS_REC_VERSION: OrderableEdmTypeField<
      ReqPlanBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    FORECAST_MODEL_ID: OrderableEdmTypeField<
      ReqPlanBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    USE_FORECAST_DEMAND: EnumField<
      ReqPlanBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    USE_FORECAST_SUPPLY: EnumField<
      ReqPlanBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    PLAN_TYPE: EnumField<
      ReqPlanBiEntities<DeSerializers>,
      DeSerializersT,
      ReqPlanType,
      true,
      true
    >;
    SYS_DATA_AREA_ID: OrderableEdmTypeField<
      ReqPlanBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SOURCE_KEY: OrderableEdmTypeField<
      ReqPlanBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    FORECAST_REDUCE_TYPE: EnumField<
      ReqPlanBiEntities<DeSerializers>,
      DeSerializersT,
      ReqReduceType,
      true,
      true
    >;
    ALL_FIELDS: AllFields<ReqPlanBiEntities<DeSerializers>>;
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
         * Static representation of the {@link reqPlanId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REQ_PLAN_ID: fieldBuilder.buildEdmTypeField(
          'ReqPlanId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link mcrReqPlanIdContinuity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MCR_REQ_PLAN_ID_CONTINUITY: fieldBuilder.buildEdmTypeField(
          'MCRReqPlanIdContinuity',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link name} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NAME: fieldBuilder.buildEdmTypeField('Name', 'Edm.String', true),
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
         * Static representation of the {@link forecastModelId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FORECAST_MODEL_ID: fieldBuilder.buildEdmTypeField(
          'ForecastModelId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link useForecastDemand} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        USE_FORECAST_DEMAND: fieldBuilder.buildEnumField(
          'UseForecastDemand',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link useForecastSupply} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        USE_FORECAST_SUPPLY: fieldBuilder.buildEnumField(
          'UseForecastSupply',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link planType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PLAN_TYPE: fieldBuilder.buildEnumField('PlanType', ReqPlanType, true),
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
         * Static representation of the {@link sourceKey} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SOURCE_KEY: fieldBuilder.buildEdmTypeField(
          'SourceKey',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link forecastReduceType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FORECAST_REDUCE_TYPE: fieldBuilder.buildEnumField(
          'ForecastReduceType',
          ReqReduceType,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', ReqPlanBiEntities)
      };
    }

    return this._schema;
  }
}
