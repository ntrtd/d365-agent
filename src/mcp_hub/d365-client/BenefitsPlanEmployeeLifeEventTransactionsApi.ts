/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BenefitsPlanEmployeeLifeEventTransactions } from './BenefitsPlanEmployeeLifeEventTransactions';
import { BenefitsPlanEmployeeLifeEventTransactionsRequestBuilder } from './BenefitsPlanEmployeeLifeEventTransactionsRequestBuilder';
import { BenefitEmployeePlanStatus } from './BenefitEmployeePlanStatus';
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
export class BenefitsPlanEmployeeLifeEventTransactionsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<
      BenefitsPlanEmployeeLifeEventTransactions<DeSerializersT>,
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
  ): BenefitsPlanEmployeeLifeEventTransactionsApi<DeSerializersT> {
    return new BenefitsPlanEmployeeLifeEventTransactionsApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = BenefitsPlanEmployeeLifeEventTransactions;

  requestBuilder(): BenefitsPlanEmployeeLifeEventTransactionsRequestBuilder<DeSerializersT> {
    return new BenefitsPlanEmployeeLifeEventTransactionsRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    BenefitsPlanEmployeeLifeEventTransactions<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      BenefitsPlanEmployeeLifeEventTransactions<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    BenefitsPlanEmployeeLifeEventTransactions<DeSerializersT>,
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
    typeof BenefitsPlanEmployeeLifeEventTransactions,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        BenefitsPlanEmployeeLifeEventTransactions,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    PERSONNEL_NUMBER: OrderableEdmTypeField<
      BenefitsPlanEmployeeLifeEventTransactions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PLAN_PERIOD_ID: OrderableEdmTypeField<
      BenefitsPlanEmployeeLifeEventTransactions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PLAN_EMPLOYEE_BEFORE_LIFE_EVENT_PLAN_ID: OrderableEdmTypeField<
      BenefitsPlanEmployeeLifeEventTransactions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PLAN_EMPLOYEE_BEFORE_LIFE_EVENT_COVERAGE_OPTION_ID: OrderableEdmTypeField<
      BenefitsPlanEmployeeLifeEventTransactions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PLAN_EMPLOYEE_BEFORE_LIFE_EVENT_VALID_FROM: OrderableEdmTypeField<
      BenefitsPlanEmployeeLifeEventTransactions<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    PLAN_EMPLOYEE_BEFORE_LIFE_EVENT_VALID_TO: OrderableEdmTypeField<
      BenefitsPlanEmployeeLifeEventTransactions<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    LEGAL_ENTITY_ID: OrderableEdmTypeField<
      BenefitsPlanEmployeeLifeEventTransactions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LINE_NUM: OrderableEdmTypeField<
      BenefitsPlanEmployeeLifeEventTransactions<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    LIFE_EVENT_TYPE_ID: OrderableEdmTypeField<
      BenefitsPlanEmployeeLifeEventTransactions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LIFE_EVENT_DATE: OrderableEdmTypeField<
      BenefitsPlanEmployeeLifeEventTransactions<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    PLAN_EMPLOYEE_AFTER_LIFE_EVENT_PLAN_ID: OrderableEdmTypeField<
      BenefitsPlanEmployeeLifeEventTransactions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PLAN_EMPLOYEE_AFTER_LIFE_EVENT_VALID_TO: OrderableEdmTypeField<
      BenefitsPlanEmployeeLifeEventTransactions<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    PLAN_EMPLOYEE_AFTER_LIVE_EVENT_COVERAGE_OPTION_ID: OrderableEdmTypeField<
      BenefitsPlanEmployeeLifeEventTransactions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PLAN_EMPLOYEE_BEFORE_LIFE_EVENT_STATUS: EnumField<
      BenefitsPlanEmployeeLifeEventTransactions<DeSerializers>,
      DeSerializersT,
      BenefitEmployeePlanStatus,
      true,
      true
    >;
    PLAN_EMPLOYEE_AFTER_LIFE_EVENT_VALID_FROM: OrderableEdmTypeField<
      BenefitsPlanEmployeeLifeEventTransactions<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    ALL_FIELDS: AllFields<
      BenefitsPlanEmployeeLifeEventTransactions<DeSerializers>
    >;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
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
         * Static representation of the {@link planPeriodId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PLAN_PERIOD_ID: fieldBuilder.buildEdmTypeField(
          'PlanPeriodId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link planEmployeeBeforeLifeEventPlanId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PLAN_EMPLOYEE_BEFORE_LIFE_EVENT_PLAN_ID: fieldBuilder.buildEdmTypeField(
          'PlanEmployeeBeforeLifeEventPlanId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link planEmployeeBeforeLifeEventCoverageOptionId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PLAN_EMPLOYEE_BEFORE_LIFE_EVENT_COVERAGE_OPTION_ID:
          fieldBuilder.buildEdmTypeField(
            'PlanEmployeeBeforeLifeEventCoverageOptionId',
            'Edm.String',
            false
          ),
        /**
         * Static representation of the {@link planEmployeeBeforeLifeEventValidFrom} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PLAN_EMPLOYEE_BEFORE_LIFE_EVENT_VALID_FROM:
          fieldBuilder.buildEdmTypeField(
            'PlanEmployeeBeforeLifeEventValidFrom',
            'Edm.DateTimeOffset',
            false
          ),
        /**
         * Static representation of the {@link planEmployeeBeforeLifeEventValidTo} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PLAN_EMPLOYEE_BEFORE_LIFE_EVENT_VALID_TO:
          fieldBuilder.buildEdmTypeField(
            'PlanEmployeeBeforeLifeEventValidTo',
            'Edm.DateTimeOffset',
            false
          ),
        /**
         * Static representation of the {@link legalEntityId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LEGAL_ENTITY_ID: fieldBuilder.buildEdmTypeField(
          'LegalEntityId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link lineNum} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LINE_NUM: fieldBuilder.buildEdmTypeField('LineNum', 'Edm.Int32', false),
        /**
         * Static representation of the {@link lifeEventTypeId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LIFE_EVENT_TYPE_ID: fieldBuilder.buildEdmTypeField(
          'LifeEventTypeId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link lifeEventDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LIFE_EVENT_DATE: fieldBuilder.buildEdmTypeField(
          'LifeEventDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link planEmployeeAfterLifeEventPlanId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PLAN_EMPLOYEE_AFTER_LIFE_EVENT_PLAN_ID: fieldBuilder.buildEdmTypeField(
          'PlanEmployeeAfterLifeEventPlanId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link planEmployeeAfterLifeEventValidTo} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PLAN_EMPLOYEE_AFTER_LIFE_EVENT_VALID_TO: fieldBuilder.buildEdmTypeField(
          'PlanEmployeeAfterLifeEventValidTo',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link planEmployeeAfterLiveEventCoverageOptionId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PLAN_EMPLOYEE_AFTER_LIVE_EVENT_COVERAGE_OPTION_ID:
          fieldBuilder.buildEdmTypeField(
            'PlanEmployeeAfterLiveEventCoverageOptionId',
            'Edm.String',
            true
          ),
        /**
         * Static representation of the {@link planEmployeeBeforeLifeEventStatus} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PLAN_EMPLOYEE_BEFORE_LIFE_EVENT_STATUS: fieldBuilder.buildEnumField(
          'PlanEmployeeBeforeLifeEventStatus',
          BenefitEmployeePlanStatus,
          true
        ),
        /**
         * Static representation of the {@link planEmployeeAfterLifeEventValidFrom} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PLAN_EMPLOYEE_AFTER_LIFE_EVENT_VALID_FROM:
          fieldBuilder.buildEdmTypeField(
            'PlanEmployeeAfterLifeEventValidFrom',
            'Edm.DateTimeOffset',
            false
          ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields(
          '*',
          BenefitsPlanEmployeeLifeEventTransactions
        )
      };
    }

    return this._schema;
  }
}
