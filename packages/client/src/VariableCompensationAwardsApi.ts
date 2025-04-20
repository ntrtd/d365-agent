/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { VariableCompensationAwards } from './VariableCompensationAwards';
import { VariableCompensationAwardsRequestBuilder } from './VariableCompensationAwardsRequestBuilder';
import { CurrenciesApi } from './CurrenciesApi';
import { WorkersApi } from './WorkersApi';
import { CompVarPlanTablesV2Api } from './CompVarPlanTablesV2Api';
import { CompFixedPlanTablesApi } from './CompFixedPlanTablesApi';
import { DimensionSetsApi } from './DimensionSetsApi';
import { HrmCompVarAwardEmplType } from './HrmCompVarAwardEmplType';
import { HrmCompProcessType } from './HrmCompProcessType';
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
export class VariableCompensationAwardsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<VariableCompensationAwards<DeSerializersT>, DeSerializersT>
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
  ): VariableCompensationAwardsApi<DeSerializersT> {
    return new VariableCompensationAwardsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link currency} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CURRENCY: OneToOneLink<
      VariableCompensationAwards<DeSerializersT>,
      DeSerializersT,
      CurrenciesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link worker} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WORKER: OneToOneLink<
      VariableCompensationAwards<DeSerializersT>,
      DeSerializersT,
      WorkersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link compVarPlanTableV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    COMP_VAR_PLAN_TABLE_V_2: OneToOneLink<
      VariableCompensationAwards<DeSerializersT>,
      DeSerializersT,
      CompVarPlanTablesV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link compFixedPlanTable} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    COMP_FIXED_PLAN_TABLE: OneToOneLink<
      VariableCompensationAwards<DeSerializersT>,
      DeSerializersT,
      CompFixedPlanTablesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link dimensionSet} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DIMENSION_SET: OneToOneLink<
      VariableCompensationAwards<DeSerializersT>,
      DeSerializersT,
      DimensionSetsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      CurrenciesApi<DeSerializersT>,
      WorkersApi<DeSerializersT>,
      CompVarPlanTablesV2Api<DeSerializersT>,
      CompFixedPlanTablesApi<DeSerializersT>,
      DimensionSetsApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      CURRENCY: new OneToOneLink('Currency', this, linkedApis[0]),
      WORKER: new OneToOneLink('Worker', this, linkedApis[1]),
      COMP_VAR_PLAN_TABLE_V_2: new OneToOneLink(
        'CompVarPlanTableV2',
        this,
        linkedApis[2]
      ),
      COMP_FIXED_PLAN_TABLE: new OneToOneLink(
        'CompFixedPlanTable',
        this,
        linkedApis[3]
      ),
      DIMENSION_SET: new OneToOneLink('DimensionSet', this, linkedApis[4])
    };
    return this;
  }

  entityConstructor = VariableCompensationAwards;

  requestBuilder(): VariableCompensationAwardsRequestBuilder<DeSerializersT> {
    return new VariableCompensationAwardsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    VariableCompensationAwards<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      VariableCompensationAwards<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    VariableCompensationAwards<DeSerializersT>,
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
    typeof VariableCompensationAwards,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        VariableCompensationAwards,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      VariableCompensationAwards<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PERSONNEL_NUMBER: OrderableEdmTypeField<
      VariableCompensationAwards<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PLAN_ID: OrderableEdmTypeField<
      VariableCompensationAwards<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    AWARD_DATE: OrderableEdmTypeField<
      VariableCompensationAwards<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    SEQUENCE: OrderableEdmTypeField<
      VariableCompensationAwards<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    DEFAULT_DIMENSION_DISPLAY_VALUE: OrderableEdmTypeField<
      VariableCompensationAwards<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FIXED_PLAN_ID: OrderableEdmTypeField<
      VariableCompensationAwards<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    UNIT_CURRENCY_CODE: OrderableEdmTypeField<
      VariableCompensationAwards<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    AWARD_TYPE: EnumField<
      VariableCompensationAwards<DeSerializers>,
      DeSerializersT,
      HrmCompVarAwardEmplType,
      true,
      true
    >;
    UNIT_VALUE_V_2: OrderableEdmTypeField<
      VariableCompensationAwards<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PROCESS_TYPE: EnumField<
      VariableCompensationAwards<DeSerializers>,
      DeSerializersT,
      HrmCompProcessType,
      true,
      true
    >;
    UNITS_REAL: OrderableEdmTypeField<
      VariableCompensationAwards<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link currency} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CURRENCY: OneToOneLink<
      VariableCompensationAwards<DeSerializersT>,
      DeSerializersT,
      CurrenciesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link worker} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WORKER: OneToOneLink<
      VariableCompensationAwards<DeSerializersT>,
      DeSerializersT,
      WorkersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link compVarPlanTableV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    COMP_VAR_PLAN_TABLE_V_2: OneToOneLink<
      VariableCompensationAwards<DeSerializersT>,
      DeSerializersT,
      CompVarPlanTablesV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link compFixedPlanTable} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    COMP_FIXED_PLAN_TABLE: OneToOneLink<
      VariableCompensationAwards<DeSerializersT>,
      DeSerializersT,
      CompFixedPlanTablesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link dimensionSet} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DIMENSION_SET: OneToOneLink<
      VariableCompensationAwards<DeSerializersT>,
      DeSerializersT,
      DimensionSetsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<VariableCompensationAwards<DeSerializers>>;
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
         * Static representation of the {@link personnelNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PERSONNEL_NUMBER: fieldBuilder.buildEdmTypeField(
          'PersonnelNumber',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link planId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PLAN_ID: fieldBuilder.buildEdmTypeField('PlanId', 'Edm.String', false),
        /**
         * Static representation of the {@link awardDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AWARD_DATE: fieldBuilder.buildEdmTypeField(
          'AwardDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link sequence} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SEQUENCE: fieldBuilder.buildEdmTypeField(
          'Sequence',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link defaultDimensionDisplayValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFAULT_DIMENSION_DISPLAY_VALUE: fieldBuilder.buildEdmTypeField(
          'DefaultDimensionDisplayValue',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link fixedPlanId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FIXED_PLAN_ID: fieldBuilder.buildEdmTypeField(
          'FixedPlanId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link unitCurrencyCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        UNIT_CURRENCY_CODE: fieldBuilder.buildEdmTypeField(
          'UnitCurrencyCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link awardType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AWARD_TYPE: fieldBuilder.buildEnumField(
          'AwardType',
          HrmCompVarAwardEmplType,
          true
        ),
        /**
         * Static representation of the {@link unitValueV2} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        UNIT_VALUE_V_2: fieldBuilder.buildEdmTypeField(
          'UnitValueV2',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link processType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROCESS_TYPE: fieldBuilder.buildEnumField(
          'ProcessType',
          HrmCompProcessType,
          true
        ),
        /**
         * Static representation of the {@link unitsReal} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        UNITS_REAL: fieldBuilder.buildEdmTypeField(
          'UnitsReal',
          'Edm.Decimal',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', VariableCompensationAwards)
      };
    }

    return this._schema;
  }
}
