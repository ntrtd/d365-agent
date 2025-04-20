/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { VariableCompensationEnrollmentsV2 } from './VariableCompensationEnrollmentsV2';
import { VariableCompensationEnrollmentsV2RequestBuilder } from './VariableCompensationEnrollmentsV2RequestBuilder';
import { CompVarPlanTablesV2Api } from './CompVarPlanTablesV2Api';
import { DimensionSetsApi } from './DimensionSetsApi';
import { HrmCompVarEnrollEmpllStatus } from './HrmCompVarEnrollEmpllStatus';
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
export class VariableCompensationEnrollmentsV2Api<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<VariableCompensationEnrollmentsV2<DeSerializersT>, DeSerializersT>
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
  ): VariableCompensationEnrollmentsV2Api<DeSerializersT> {
    return new VariableCompensationEnrollmentsV2Api(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link variableCompensationPlanV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VARIABLE_COMPENSATION_PLAN_V_2: OneToOneLink<
      VariableCompensationEnrollmentsV2<DeSerializersT>,
      DeSerializersT,
      CompVarPlanTablesV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link dimensionSet} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DIMENSION_SET: OneToOneLink<
      VariableCompensationEnrollmentsV2<DeSerializersT>,
      DeSerializersT,
      DimensionSetsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      CompVarPlanTablesV2Api<DeSerializersT>,
      DimensionSetsApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      VARIABLE_COMPENSATION_PLAN_V_2: new OneToOneLink(
        'VariableCompensationPlanV2',
        this,
        linkedApis[0]
      ),
      DIMENSION_SET: new OneToOneLink('DimensionSet', this, linkedApis[1])
    };
    return this;
  }

  entityConstructor = VariableCompensationEnrollmentsV2;

  requestBuilder(): VariableCompensationEnrollmentsV2RequestBuilder<DeSerializersT> {
    return new VariableCompensationEnrollmentsV2RequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    VariableCompensationEnrollmentsV2<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      VariableCompensationEnrollmentsV2<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    VariableCompensationEnrollmentsV2<DeSerializersT>,
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
    typeof VariableCompensationEnrollmentsV2,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        VariableCompensationEnrollmentsV2,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      VariableCompensationEnrollmentsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PERSONNEL_NUMBER: OrderableEdmTypeField<
      VariableCompensationEnrollmentsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PLAN: OrderableEdmTypeField<
      VariableCompensationEnrollmentsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    EFFECTIVE_DATE: OrderableEdmTypeField<
      VariableCompensationEnrollmentsV2<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    AWARD_PERCENT: OrderableEdmTypeField<
      VariableCompensationEnrollmentsV2<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    NUMBER_OF_UNITS_REAL: OrderableEdmTypeField<
      VariableCompensationEnrollmentsV2<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    DIMENSION_DISPLAY_VALUE: OrderableEdmTypeField<
      VariableCompensationEnrollmentsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    STATUS: EnumField<
      VariableCompensationEnrollmentsV2<DeSerializers>,
      DeSerializersT,
      HrmCompVarEnrollEmpllStatus,
      true,
      true
    >;
    HIRE_RULE_DATE: OrderableEdmTypeField<
      VariableCompensationEnrollmentsV2<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    AWARD_AMOUNT: OrderableEdmTypeField<
      VariableCompensationEnrollmentsV2<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    EXPIRATION_DATE: OrderableEdmTypeField<
      VariableCompensationEnrollmentsV2<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link variableCompensationPlanV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VARIABLE_COMPENSATION_PLAN_V_2: OneToOneLink<
      VariableCompensationEnrollmentsV2<DeSerializersT>,
      DeSerializersT,
      CompVarPlanTablesV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link dimensionSet} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DIMENSION_SET: OneToOneLink<
      VariableCompensationEnrollmentsV2<DeSerializersT>,
      DeSerializersT,
      DimensionSetsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<VariableCompensationEnrollmentsV2<DeSerializers>>;
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
         * Static representation of the {@link plan} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PLAN: fieldBuilder.buildEdmTypeField('Plan', 'Edm.String', false),
        /**
         * Static representation of the {@link effectiveDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EFFECTIVE_DATE: fieldBuilder.buildEdmTypeField(
          'EffectiveDate',
          'Edm.DateTimeOffset',
          false
        ),
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
         * Static representation of the {@link numberOfUnitsReal} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NUMBER_OF_UNITS_REAL: fieldBuilder.buildEdmTypeField(
          'NumberOfUnitsReal',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link dimensionDisplayValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DIMENSION_DISPLAY_VALUE: fieldBuilder.buildEdmTypeField(
          'DimensionDisplayValue',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link status} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STATUS: fieldBuilder.buildEnumField(
          'Status',
          HrmCompVarEnrollEmpllStatus,
          true
        ),
        /**
         * Static representation of the {@link hireRuleDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        HIRE_RULE_DATE: fieldBuilder.buildEdmTypeField(
          'HireRuleDate',
          'Edm.DateTimeOffset',
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
        /**
         * Static representation of the {@link expirationDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXPIRATION_DATE: fieldBuilder.buildEdmTypeField(
          'ExpirationDate',
          'Edm.DateTimeOffset',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', VariableCompensationEnrollmentsV2)
      };
    }

    return this._schema;
  }
}
