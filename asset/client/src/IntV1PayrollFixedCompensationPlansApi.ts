/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { IntV1PayrollFixedCompensationPlans } from './IntV1PayrollFixedCompensationPlans';
import { IntV1PayrollFixedCompensationPlansRequestBuilder } from './IntV1PayrollFixedCompensationPlansRequestBuilder';
import { PositionsV2Api } from './PositionsV2Api';
import { PayrollVariableCompensationAwardsApi } from './PayrollVariableCompensationAwardsApi';
import { PositionJobsApi } from './PositionJobsApi';
import { BaseWorkersApi } from './BaseWorkersApi';
import { CompFixedPlanTablesApi } from './CompFixedPlanTablesApi';
import { PayrollPositionsApi } from './PayrollPositionsApi';
import { PayrollEmployeesApi } from './PayrollEmployeesApi';
import { HrmCompProcessType } from './HrmCompProcessType';
import { HcmCompensationType } from './HcmCompensationType';
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
export class IntV1PayrollFixedCompensationPlansApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<
      IntV1PayrollFixedCompensationPlans<DeSerializersT>,
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
  ): IntV1PayrollFixedCompensationPlansApi<DeSerializersT> {
    return new IntV1PayrollFixedCompensationPlansApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link positionV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    POSITION_V_2: OneToOneLink<
      IntV1PayrollFixedCompensationPlans<DeSerializersT>,
      DeSerializersT,
      PositionsV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link payrollVariableCompensationAward} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PAYROLL_VARIABLE_COMPENSATION_AWARD: OneToOneLink<
      IntV1PayrollFixedCompensationPlans<DeSerializersT>,
      DeSerializersT,
      PayrollVariableCompensationAwardsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link positionJob} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    POSITION_JOB: OneToOneLink<
      IntV1PayrollFixedCompensationPlans<DeSerializersT>,
      DeSerializersT,
      PositionJobsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link baseWorker} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BASE_WORKER: OneToOneLink<
      IntV1PayrollFixedCompensationPlans<DeSerializersT>,
      DeSerializersT,
      BaseWorkersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link compFixedPlanTable} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    COMP_FIXED_PLAN_TABLE: OneToOneLink<
      IntV1PayrollFixedCompensationPlans<DeSerializersT>,
      DeSerializersT,
      CompFixedPlanTablesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link payrollPosition} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PAYROLL_POSITION: OneToOneLink<
      IntV1PayrollFixedCompensationPlans<DeSerializersT>,
      DeSerializersT,
      PayrollPositionsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link payrollEmployee} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PAYROLL_EMPLOYEE: OneToOneLink<
      IntV1PayrollFixedCompensationPlans<DeSerializersT>,
      DeSerializersT,
      PayrollEmployeesApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      PositionsV2Api<DeSerializersT>,
      PayrollVariableCompensationAwardsApi<DeSerializersT>,
      PositionJobsApi<DeSerializersT>,
      BaseWorkersApi<DeSerializersT>,
      CompFixedPlanTablesApi<DeSerializersT>,
      PayrollPositionsApi<DeSerializersT>,
      PayrollEmployeesApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      POSITION_V_2: new OneToOneLink('PositionV2', this, linkedApis[0]),
      PAYROLL_VARIABLE_COMPENSATION_AWARD: new OneToOneLink(
        'PayrollVariableCompensationAward',
        this,
        linkedApis[1]
      ),
      POSITION_JOB: new OneToOneLink('PositionJob', this, linkedApis[2]),
      BASE_WORKER: new OneToOneLink('BaseWorker', this, linkedApis[3]),
      COMP_FIXED_PLAN_TABLE: new OneToOneLink(
        'CompFixedPlanTable',
        this,
        linkedApis[4]
      ),
      PAYROLL_POSITION: new OneToOneLink(
        'PayrollPosition',
        this,
        linkedApis[5]
      ),
      PAYROLL_EMPLOYEE: new OneToOneLink('PayrollEmployee', this, linkedApis[6])
    };
    return this;
  }

  entityConstructor = IntV1PayrollFixedCompensationPlans;

  requestBuilder(): IntV1PayrollFixedCompensationPlansRequestBuilder<DeSerializersT> {
    return new IntV1PayrollFixedCompensationPlansRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    IntV1PayrollFixedCompensationPlans<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      IntV1PayrollFixedCompensationPlans<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    IntV1PayrollFixedCompensationPlans<DeSerializersT>,
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
    typeof IntV1PayrollFixedCompensationPlans,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        IntV1PayrollFixedCompensationPlans,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      IntV1PayrollFixedCompensationPlans<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PLAN_ID: OrderableEdmTypeField<
      IntV1PayrollFixedCompensationPlans<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    VALID_FROM: OrderableEdmTypeField<
      IntV1PayrollFixedCompensationPlans<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    PERSONNEL_NUMBER: OrderableEdmTypeField<
      IntV1PayrollFixedCompensationPlans<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PAY_FREQUENCY: OrderableEdmTypeField<
      IntV1PayrollFixedCompensationPlans<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    POSITION_ID: OrderableEdmTypeField<
      IntV1PayrollFixedCompensationPlans<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CURRENCY: OrderableEdmTypeField<
      IntV1PayrollFixedCompensationPlans<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PAY_RATE: OrderableEdmTypeField<
      IntV1PayrollFixedCompensationPlans<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PROCESS_TYPE: EnumField<
      IntV1PayrollFixedCompensationPlans<DeSerializers>,
      DeSerializersT,
      HrmCompProcessType,
      true,
      true
    >;
    LINE_NUM: OrderableEdmTypeField<
      IntV1PayrollFixedCompensationPlans<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ACTION_ID: OrderableEdmTypeField<
      IntV1PayrollFixedCompensationPlans<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TYPE: EnumField<
      IntV1PayrollFixedCompensationPlans<DeSerializers>,
      DeSerializersT,
      HcmCompensationType,
      true,
      true
    >;
    VALID_TO: OrderableEdmTypeField<
      IntV1PayrollFixedCompensationPlans<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link positionV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    POSITION_V_2: OneToOneLink<
      IntV1PayrollFixedCompensationPlans<DeSerializersT>,
      DeSerializersT,
      PositionsV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link payrollVariableCompensationAward} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PAYROLL_VARIABLE_COMPENSATION_AWARD: OneToOneLink<
      IntV1PayrollFixedCompensationPlans<DeSerializersT>,
      DeSerializersT,
      PayrollVariableCompensationAwardsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link positionJob} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    POSITION_JOB: OneToOneLink<
      IntV1PayrollFixedCompensationPlans<DeSerializersT>,
      DeSerializersT,
      PositionJobsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link baseWorker} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BASE_WORKER: OneToOneLink<
      IntV1PayrollFixedCompensationPlans<DeSerializersT>,
      DeSerializersT,
      BaseWorkersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link compFixedPlanTable} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    COMP_FIXED_PLAN_TABLE: OneToOneLink<
      IntV1PayrollFixedCompensationPlans<DeSerializersT>,
      DeSerializersT,
      CompFixedPlanTablesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link payrollPosition} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PAYROLL_POSITION: OneToOneLink<
      IntV1PayrollFixedCompensationPlans<DeSerializersT>,
      DeSerializersT,
      PayrollPositionsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link payrollEmployee} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PAYROLL_EMPLOYEE: OneToOneLink<
      IntV1PayrollFixedCompensationPlans<DeSerializersT>,
      DeSerializersT,
      PayrollEmployeesApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<IntV1PayrollFixedCompensationPlans<DeSerializers>>;
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
         * Static representation of the {@link planId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PLAN_ID: fieldBuilder.buildEdmTypeField('PlanId', 'Edm.String', false),
        /**
         * Static representation of the {@link validFrom} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VALID_FROM: fieldBuilder.buildEdmTypeField(
          'ValidFrom',
          'Edm.DateTimeOffset',
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
         * Static representation of the {@link payFrequency} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAY_FREQUENCY: fieldBuilder.buildEdmTypeField(
          'PayFrequency',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link positionId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        POSITION_ID: fieldBuilder.buildEdmTypeField(
          'PositionId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link currency} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CURRENCY: fieldBuilder.buildEdmTypeField(
          'Currency',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link payRate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAY_RATE: fieldBuilder.buildEdmTypeField(
          'PayRate',
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
         * Static representation of the {@link lineNum} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LINE_NUM: fieldBuilder.buildEdmTypeField(
          'LineNum',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link actionId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACTION_ID: fieldBuilder.buildEdmTypeField(
          'ActionId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link type} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TYPE: fieldBuilder.buildEnumField('Type', HcmCompensationType, true),
        /**
         * Static representation of the {@link validTo} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VALID_TO: fieldBuilder.buildEdmTypeField(
          'ValidTo',
          'Edm.DateTimeOffset',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', IntV1PayrollFixedCompensationPlans)
      };
    }

    return this._schema;
  }
}
