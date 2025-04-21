/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { CompVarPlanLevelsV2 } from './CompVarPlanLevelsV2';
import { CompVarPlanLevelsV2RequestBuilder } from './CompVarPlanLevelsV2RequestBuilder';
import { CompVarPlanTablesV2Api } from './CompVarPlanTablesV2Api';
import { CompensationLevelsApi } from './CompensationLevelsApi';
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
export class CompVarPlanLevelsV2Api<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<CompVarPlanLevelsV2<DeSerializersT>, DeSerializersT>
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
  ): CompVarPlanLevelsV2Api<DeSerializersT> {
    return new CompVarPlanLevelsV2Api(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link compVarPlanTableV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    COMP_VAR_PLAN_TABLE_V_2: OneToOneLink<
      CompVarPlanLevelsV2<DeSerializersT>,
      DeSerializersT,
      CompVarPlanTablesV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link compensationLevel} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    COMPENSATION_LEVEL: OneToOneLink<
      CompVarPlanLevelsV2<DeSerializersT>,
      DeSerializersT,
      CompensationLevelsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      CompVarPlanTablesV2Api<DeSerializersT>,
      CompensationLevelsApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      COMP_VAR_PLAN_TABLE_V_2: new OneToOneLink(
        'CompVarPlanTableV2',
        this,
        linkedApis[0]
      ),
      COMPENSATION_LEVEL: new OneToOneLink(
        'CompensationLevel',
        this,
        linkedApis[1]
      )
    };
    return this;
  }

  entityConstructor = CompVarPlanLevelsV2;

  requestBuilder(): CompVarPlanLevelsV2RequestBuilder<DeSerializersT> {
    return new CompVarPlanLevelsV2RequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    CompVarPlanLevelsV2<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<CompVarPlanLevelsV2<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    CompVarPlanLevelsV2<DeSerializersT>,
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
    typeof CompVarPlanLevelsV2,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        CompVarPlanLevelsV2,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      CompVarPlanLevelsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    COMPENSATION_LEVEL_ID: OrderableEdmTypeField<
      CompVarPlanLevelsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PLAN_ID: OrderableEdmTypeField<
      CompVarPlanLevelsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    AWARD_PERCENT: OrderableEdmTypeField<
      CompVarPlanLevelsV2<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    AWARD_UNITS_REAL: OrderableEdmTypeField<
      CompVarPlanLevelsV2<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    AWARD_AMOUNT: OrderableEdmTypeField<
      CompVarPlanLevelsV2<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link compVarPlanTableV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    COMP_VAR_PLAN_TABLE_V_2: OneToOneLink<
      CompVarPlanLevelsV2<DeSerializersT>,
      DeSerializersT,
      CompVarPlanTablesV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link compensationLevel} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    COMPENSATION_LEVEL: OneToOneLink<
      CompVarPlanLevelsV2<DeSerializersT>,
      DeSerializersT,
      CompensationLevelsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<CompVarPlanLevelsV2<DeSerializers>>;
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
         * Static representation of the {@link compensationLevelId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COMPENSATION_LEVEL_ID: fieldBuilder.buildEdmTypeField(
          'CompensationLevelId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link planId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PLAN_ID: fieldBuilder.buildEdmTypeField('PlanId', 'Edm.String', false),
        /**
         * Static representation of the {@link awardPercent} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AWARD_PERCENT: fieldBuilder.buildEdmTypeField(
          'AwardPercent',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link awardUnitsReal} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AWARD_UNITS_REAL: fieldBuilder.buildEdmTypeField(
          'AwardUnitsReal',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link awardAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AWARD_AMOUNT: fieldBuilder.buildEdmTypeField(
          'AwardAmount',
          'Edm.Decimal',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', CompVarPlanLevelsV2)
      };
    }

    return this._schema;
  }
}
