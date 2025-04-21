/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { VariableCompensationEnrollmentLines } from './VariableCompensationEnrollmentLines';
import { VariableCompensationEnrollmentLinesRequestBuilder } from './VariableCompensationEnrollmentLinesRequestBuilder';
import { CompVarPlanTablesV2Api } from './CompVarPlanTablesV2Api';
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
export class VariableCompensationEnrollmentLinesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<
      VariableCompensationEnrollmentLines<DeSerializersT>,
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
  ): VariableCompensationEnrollmentLinesApi<DeSerializersT> {
    return new VariableCompensationEnrollmentLinesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link variableCompensationPlan} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VARIABLE_COMPENSATION_PLAN: OneToOneLink<
      VariableCompensationEnrollmentLines<DeSerializersT>,
      DeSerializersT,
      CompVarPlanTablesV2Api<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [CompVarPlanTablesV2Api<DeSerializersT>]
  ): this {
    this.navigationPropertyFields = {
      VARIABLE_COMPENSATION_PLAN: new OneToOneLink(
        'VariableCompensationPlan',
        this,
        linkedApis[0]
      )
    };
    return this;
  }

  entityConstructor = VariableCompensationEnrollmentLines;

  requestBuilder(): VariableCompensationEnrollmentLinesRequestBuilder<DeSerializersT> {
    return new VariableCompensationEnrollmentLinesRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    VariableCompensationEnrollmentLines<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      VariableCompensationEnrollmentLines<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    VariableCompensationEnrollmentLines<DeSerializersT>,
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
    typeof VariableCompensationEnrollmentLines,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        VariableCompensationEnrollmentLines,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      VariableCompensationEnrollmentLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    DEPARTMENT_ID: OrderableEdmTypeField<
      VariableCompensationEnrollmentLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PERSONNEL_NUMBER: OrderableEdmTypeField<
      VariableCompensationEnrollmentLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PLAN: OrderableEdmTypeField<
      VariableCompensationEnrollmentLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PERCENT: OrderableEdmTypeField<
      VariableCompensationEnrollmentLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    EFFECTIVE_DATE: OrderableEdmTypeField<
      VariableCompensationEnrollmentLines<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link variableCompensationPlan} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VARIABLE_COMPENSATION_PLAN: OneToOneLink<
      VariableCompensationEnrollmentLines<DeSerializersT>,
      DeSerializersT,
      CompVarPlanTablesV2Api<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<VariableCompensationEnrollmentLines<DeSerializers>>;
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
         * Static representation of the {@link departmentId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEPARTMENT_ID: fieldBuilder.buildEdmTypeField(
          'DepartmentId',
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
         * Static representation of the {@link percent} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PERCENT: fieldBuilder.buildEdmTypeField(
          'Percent',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link effectiveDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EFFECTIVE_DATE: fieldBuilder.buildEdmTypeField(
          'EffectiveDate',
          'Edm.DateTimeOffset',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', VariableCompensationEnrollmentLines)
      };
    }

    return this._schema;
  }
}
