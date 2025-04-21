/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { PayrollVariableCompensationAwards } from './PayrollVariableCompensationAwards';
import { PayrollVariableCompensationAwardsRequestBuilder } from './PayrollVariableCompensationAwardsRequestBuilder';
import { PayrollFixedCompensationPlansApi } from './PayrollFixedCompensationPlansApi';
import { IntV1PayrollFixedCompensationPlansApi } from './IntV1PayrollFixedCompensationPlansApi';
import { BaseWorkersApi } from './BaseWorkersApi';
import { PayrollEmployeesApi } from './PayrollEmployeesApi';
import { HrmCompProcessType } from './HrmCompProcessType';
import { HrmCompVarAwardEmplType } from './HrmCompVarAwardEmplType';
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
  OneToManyLink,
  OneToOneLink
} from '@sap-cloud-sdk/odata-v4';
export class PayrollVariableCompensationAwardsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<PayrollVariableCompensationAwards<DeSerializersT>, DeSerializersT>
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
  ): PayrollVariableCompensationAwardsApi<DeSerializersT> {
    return new PayrollVariableCompensationAwardsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link payrollFixedCompensationPlan} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PAYROLL_FIXED_COMPENSATION_PLAN: OneToManyLink<
      PayrollVariableCompensationAwards<DeSerializersT>,
      DeSerializersT,
      PayrollFixedCompensationPlansApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link intV1PayrollFixedCompensationPlan} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    INT_V_1_PAYROLL_FIXED_COMPENSATION_PLAN: OneToManyLink<
      PayrollVariableCompensationAwards<DeSerializersT>,
      DeSerializersT,
      IntV1PayrollFixedCompensationPlansApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link baseWorker} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BASE_WORKER: OneToOneLink<
      PayrollVariableCompensationAwards<DeSerializersT>,
      DeSerializersT,
      BaseWorkersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link payrollEmployee} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PAYROLL_EMPLOYEE: OneToOneLink<
      PayrollVariableCompensationAwards<DeSerializersT>,
      DeSerializersT,
      PayrollEmployeesApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      PayrollFixedCompensationPlansApi<DeSerializersT>,
      IntV1PayrollFixedCompensationPlansApi<DeSerializersT>,
      BaseWorkersApi<DeSerializersT>,
      PayrollEmployeesApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      PAYROLL_FIXED_COMPENSATION_PLAN: new OneToManyLink(
        'PayrollFixedCompensationPlan',
        this,
        linkedApis[0]
      ),
      INT_V_1_PAYROLL_FIXED_COMPENSATION_PLAN: new OneToManyLink(
        'IntV1PayrollFixedCompensationPlan',
        this,
        linkedApis[1]
      ),
      BASE_WORKER: new OneToOneLink('BaseWorker', this, linkedApis[2]),
      PAYROLL_EMPLOYEE: new OneToOneLink('PayrollEmployee', this, linkedApis[3])
    };
    return this;
  }

  entityConstructor = PayrollVariableCompensationAwards;

  requestBuilder(): PayrollVariableCompensationAwardsRequestBuilder<DeSerializersT> {
    return new PayrollVariableCompensationAwardsRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    PayrollVariableCompensationAwards<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      PayrollVariableCompensationAwards<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    PayrollVariableCompensationAwards<DeSerializersT>,
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
    typeof PayrollVariableCompensationAwards,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        PayrollVariableCompensationAwards,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      PayrollVariableCompensationAwards<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PERSONNEL_NUMBER: OrderableEdmTypeField<
      PayrollVariableCompensationAwards<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PLAN_ID: OrderableEdmTypeField<
      PayrollVariableCompensationAwards<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    TYPE_ID: OrderableEdmTypeField<
      PayrollVariableCompensationAwards<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    AWARD_DATE: OrderableEdmTypeField<
      PayrollVariableCompensationAwards<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    UNIT_VALUE: OrderableEdmTypeField<
      PayrollVariableCompensationAwards<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PROCESS_TYPE: EnumField<
      PayrollVariableCompensationAwards<DeSerializers>,
      DeSerializersT,
      HrmCompProcessType,
      true,
      true
    >;
    AWARD_TYPE: EnumField<
      PayrollVariableCompensationAwards<DeSerializers>,
      DeSerializersT,
      HrmCompVarAwardEmplType,
      true,
      true
    >;
    FIXED_PLAN_ID: OrderableEdmTypeField<
      PayrollVariableCompensationAwards<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    UNIT_CURRENCY_CODE: OrderableEdmTypeField<
      PayrollVariableCompensationAwards<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    NUMBER_OF_UNITS: OrderableEdmTypeField<
      PayrollVariableCompensationAwards<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link payrollFixedCompensationPlan} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PAYROLL_FIXED_COMPENSATION_PLAN: OneToManyLink<
      PayrollVariableCompensationAwards<DeSerializersT>,
      DeSerializersT,
      PayrollFixedCompensationPlansApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link intV1PayrollFixedCompensationPlan} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    INT_V_1_PAYROLL_FIXED_COMPENSATION_PLAN: OneToManyLink<
      PayrollVariableCompensationAwards<DeSerializersT>,
      DeSerializersT,
      IntV1PayrollFixedCompensationPlansApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link baseWorker} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BASE_WORKER: OneToOneLink<
      PayrollVariableCompensationAwards<DeSerializersT>,
      DeSerializersT,
      BaseWorkersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link payrollEmployee} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PAYROLL_EMPLOYEE: OneToOneLink<
      PayrollVariableCompensationAwards<DeSerializersT>,
      DeSerializersT,
      PayrollEmployeesApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<PayrollVariableCompensationAwards<DeSerializers>>;
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
         * Static representation of the {@link typeId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TYPE_ID: fieldBuilder.buildEdmTypeField('TypeId', 'Edm.String', false),
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
         * Static representation of the {@link unitValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        UNIT_VALUE: fieldBuilder.buildEdmTypeField(
          'UnitValue',
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
         * Static representation of the {@link awardType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AWARD_TYPE: fieldBuilder.buildEnumField(
          'AwardType',
          HrmCompVarAwardEmplType,
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
         * Static representation of the {@link numberOfUnits} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NUMBER_OF_UNITS: fieldBuilder.buildEdmTypeField(
          'NumberOfUnits',
          'Edm.Decimal',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', PayrollVariableCompensationAwards)
      };
    }

    return this._schema;
  }
}
