/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { CompensationEligibilityRules } from './CompensationEligibilityRules';
import { CompensationEligibilityRulesRequestBuilder } from './CompensationEligibilityRulesRequestBuilder';
import { JobTypesApi } from './JobTypesApi';
import { CompensationRegionsApi } from './CompensationRegionsApi';
import { JobsApi } from './JobsApi';
import { DepartmentsApi } from './DepartmentsApi';
import { CompFixedPlanTablesApi } from './CompFixedPlanTablesApi';
import { OperatingUnitsApi } from './OperatingUnitsApi';
import { JobFunctionsApi } from './JobFunctionsApi';
import { UnionsApi } from './UnionsApi';
import { HrmCompPlanType } from './HrmCompPlanType';
import { NoYes } from './NoYes';
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
export class CompensationEligibilityRulesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<CompensationEligibilityRules<DeSerializersT>, DeSerializersT>
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
  ): CompensationEligibilityRulesApi<DeSerializersT> {
    return new CompensationEligibilityRulesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link jobType} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JOB_TYPE: OneToOneLink<
      CompensationEligibilityRules<DeSerializersT>,
      DeSerializersT,
      JobTypesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link location} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LOCATION: OneToOneLink<
      CompensationEligibilityRules<DeSerializersT>,
      DeSerializersT,
      CompensationRegionsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link job} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JOB: OneToOneLink<
      CompensationEligibilityRules<DeSerializersT>,
      DeSerializersT,
      JobsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link department} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DEPARTMENT: OneToOneLink<
      CompensationEligibilityRules<DeSerializersT>,
      DeSerializersT,
      DepartmentsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link compFixedPlanTable} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    COMP_FIXED_PLAN_TABLE: OneToOneLink<
      CompensationEligibilityRules<DeSerializersT>,
      DeSerializersT,
      CompFixedPlanTablesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link omOperatingUnit} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OM_OPERATING_UNIT: OneToOneLink<
      CompensationEligibilityRules<DeSerializersT>,
      DeSerializersT,
      OperatingUnitsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link jobFunction} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JOB_FUNCTION: OneToOneLink<
      CompensationEligibilityRules<DeSerializersT>,
      DeSerializersT,
      JobFunctionsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link laborUnion} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LABOR_UNION: OneToOneLink<
      CompensationEligibilityRules<DeSerializersT>,
      DeSerializersT,
      UnionsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      JobTypesApi<DeSerializersT>,
      CompensationRegionsApi<DeSerializersT>,
      JobsApi<DeSerializersT>,
      DepartmentsApi<DeSerializersT>,
      CompFixedPlanTablesApi<DeSerializersT>,
      OperatingUnitsApi<DeSerializersT>,
      JobFunctionsApi<DeSerializersT>,
      UnionsApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      JOB_TYPE: new OneToOneLink('JobType', this, linkedApis[0]),
      LOCATION: new OneToOneLink('Location', this, linkedApis[1]),
      JOB: new OneToOneLink('Job', this, linkedApis[2]),
      DEPARTMENT: new OneToOneLink('Department', this, linkedApis[3]),
      COMP_FIXED_PLAN_TABLE: new OneToOneLink(
        'CompFixedPlanTable',
        this,
        linkedApis[4]
      ),
      OM_OPERATING_UNIT: new OneToOneLink(
        'OMOperatingUnit',
        this,
        linkedApis[5]
      ),
      JOB_FUNCTION: new OneToOneLink('JobFunction', this, linkedApis[6]),
      LABOR_UNION: new OneToOneLink('LaborUnion', this, linkedApis[7])
    };
    return this;
  }

  entityConstructor = CompensationEligibilityRules;

  requestBuilder(): CompensationEligibilityRulesRequestBuilder<DeSerializersT> {
    return new CompensationEligibilityRulesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    CompensationEligibilityRules<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      CompensationEligibilityRules<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    CompensationEligibilityRules<DeSerializersT>,
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
    typeof CompensationEligibilityRules,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        CompensationEligibilityRules,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      CompensationEligibilityRules<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ELIGIBILITY: OrderableEdmTypeField<
      CompensationEligibilityRules<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    EXPIRATION_DATE: OrderableEdmTypeField<
      CompensationEligibilityRules<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      CompensationEligibilityRules<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LABOR_UNION_ID: OrderableEdmTypeField<
      CompensationEligibilityRules<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DEPARTMENT_NUMBER: OrderableEdmTypeField<
      CompensationEligibilityRules<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    JOB_ID: OrderableEdmTypeField<
      CompensationEligibilityRules<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FUNCTION_ID: OrderableEdmTypeField<
      CompensationEligibilityRules<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EFFECTIVE_DATE: OrderableEdmTypeField<
      CompensationEligibilityRules<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    LOCATION_ID: OrderableEdmTypeField<
      CompensationEligibilityRules<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PLAN: OrderableEdmTypeField<
      CompensationEligibilityRules<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TYPE: EnumField<
      CompensationEligibilityRules<DeSerializers>,
      DeSerializersT,
      HrmCompPlanType,
      true,
      true
    >;
    JOB_TYPE_ID: OrderableEdmTypeField<
      CompensationEligibilityRules<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RESTRICT_ELIGIBILITY_TO_WORKERS_IN_SELECTED_LEVELS: EnumField<
      CompensationEligibilityRules<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link jobType} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JOB_TYPE: OneToOneLink<
      CompensationEligibilityRules<DeSerializersT>,
      DeSerializersT,
      JobTypesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link location} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LOCATION: OneToOneLink<
      CompensationEligibilityRules<DeSerializersT>,
      DeSerializersT,
      CompensationRegionsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link job} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JOB: OneToOneLink<
      CompensationEligibilityRules<DeSerializersT>,
      DeSerializersT,
      JobsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link department} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DEPARTMENT: OneToOneLink<
      CompensationEligibilityRules<DeSerializersT>,
      DeSerializersT,
      DepartmentsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link compFixedPlanTable} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    COMP_FIXED_PLAN_TABLE: OneToOneLink<
      CompensationEligibilityRules<DeSerializersT>,
      DeSerializersT,
      CompFixedPlanTablesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link omOperatingUnit} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OM_OPERATING_UNIT: OneToOneLink<
      CompensationEligibilityRules<DeSerializersT>,
      DeSerializersT,
      OperatingUnitsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link jobFunction} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JOB_FUNCTION: OneToOneLink<
      CompensationEligibilityRules<DeSerializersT>,
      DeSerializersT,
      JobFunctionsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link laborUnion} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LABOR_UNION: OneToOneLink<
      CompensationEligibilityRules<DeSerializersT>,
      DeSerializersT,
      UnionsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<CompensationEligibilityRules<DeSerializers>>;
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
         * Static representation of the {@link eligibility} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ELIGIBILITY: fieldBuilder.buildEdmTypeField(
          'Eligibility',
          'Edm.String',
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
        /**
         * Static representation of the {@link description} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'Description',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link laborUnionId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LABOR_UNION_ID: fieldBuilder.buildEdmTypeField(
          'LaborUnionId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link departmentNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEPARTMENT_NUMBER: fieldBuilder.buildEdmTypeField(
          'DepartmentNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link jobId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        JOB_ID: fieldBuilder.buildEdmTypeField('JobId', 'Edm.String', true),
        /**
         * Static representation of the {@link functionId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FUNCTION_ID: fieldBuilder.buildEdmTypeField(
          'FunctionId',
          'Edm.String',
          true
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
        /**
         * Static representation of the {@link locationId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LOCATION_ID: fieldBuilder.buildEdmTypeField(
          'LocationId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link plan} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PLAN: fieldBuilder.buildEdmTypeField('Plan', 'Edm.String', true),
        /**
         * Static representation of the {@link type} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TYPE: fieldBuilder.buildEnumField('Type', HrmCompPlanType, true),
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
         * Static representation of the {@link restrictEligibilityToWorkersInSelectedLevels} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RESTRICT_ELIGIBILITY_TO_WORKERS_IN_SELECTED_LEVELS:
          fieldBuilder.buildEnumField(
            'RestrictEligibilityToWorkersInSelectedLevels',
            NoYes,
            true
          ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', CompensationEligibilityRules)
      };
    }

    return this._schema;
  }
}
