/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BenefitsPlanEmployeeLifeEventTransactionsV2 } from './BenefitsPlanEmployeeLifeEventTransactionsV2';
import { BenefitsPlanEmployeeLifeEventTransactionsV2RequestBuilder } from './BenefitsPlanEmployeeLifeEventTransactionsV2RequestBuilder';
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
export class BenefitsPlanEmployeeLifeEventTransactionsV2Api<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<
      BenefitsPlanEmployeeLifeEventTransactionsV2<DeSerializersT>,
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
  ): BenefitsPlanEmployeeLifeEventTransactionsV2Api<DeSerializersT> {
    return new BenefitsPlanEmployeeLifeEventTransactionsV2Api(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = BenefitsPlanEmployeeLifeEventTransactionsV2;

  requestBuilder(): BenefitsPlanEmployeeLifeEventTransactionsV2RequestBuilder<DeSerializersT> {
    return new BenefitsPlanEmployeeLifeEventTransactionsV2RequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    BenefitsPlanEmployeeLifeEventTransactionsV2<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      BenefitsPlanEmployeeLifeEventTransactionsV2<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    BenefitsPlanEmployeeLifeEventTransactionsV2<DeSerializersT>,
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
    typeof BenefitsPlanEmployeeLifeEventTransactionsV2,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        BenefitsPlanEmployeeLifeEventTransactionsV2,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    PERSONNEL_NUMBER: OrderableEdmTypeField<
      BenefitsPlanEmployeeLifeEventTransactionsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PLAN_PERIOD_ID: OrderableEdmTypeField<
      BenefitsPlanEmployeeLifeEventTransactionsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PLAN_EMPLOYEE_BEFORE_LIFE_EVENT_PLAN_ID: OrderableEdmTypeField<
      BenefitsPlanEmployeeLifeEventTransactionsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PLAN_EMPLOYEE_BEFORE_LIFE_EVENT_COVERAGE_OPTION_ID: OrderableEdmTypeField<
      BenefitsPlanEmployeeLifeEventTransactionsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PLAN_EMPLOYEE_BEFORE_LIFE_EVENT_VALID_FROM: OrderableEdmTypeField<
      BenefitsPlanEmployeeLifeEventTransactionsV2<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    LEGAL_ENTITY_ID: OrderableEdmTypeField<
      BenefitsPlanEmployeeLifeEventTransactionsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LINE_NUM: OrderableEdmTypeField<
      BenefitsPlanEmployeeLifeEventTransactionsV2<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    LIFE_EVENT_TYPE_ID: OrderableEdmTypeField<
      BenefitsPlanEmployeeLifeEventTransactionsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LIFE_EVENT_DATE: OrderableEdmTypeField<
      BenefitsPlanEmployeeLifeEventTransactionsV2<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    PLAN_EMPLOYEE_AFTER_LIFE_EVENT_PLAN_ID: OrderableEdmTypeField<
      BenefitsPlanEmployeeLifeEventTransactionsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PLAN_EMPLOYEE_AFTER_LIVE_EVENT_COVERAGE_OPTION_ID: OrderableEdmTypeField<
      BenefitsPlanEmployeeLifeEventTransactionsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PLAN_EMPLOYEE_AFTER_LIFE_EVENT_VALID_FROM: OrderableEdmTypeField<
      BenefitsPlanEmployeeLifeEventTransactionsV2<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    PLAN_EMPLOYEE_BEFORE_LIFE_EVENT_VALID_TO: OrderableEdmTypeField<
      BenefitsPlanEmployeeLifeEventTransactionsV2<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    PLAN_EMPLOYEE_AFTER_LIFE_EVENT_VALID_TO: OrderableEdmTypeField<
      BenefitsPlanEmployeeLifeEventTransactionsV2<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    PLAN_EMPLOYEE_BEFORE_LIFE_EVENT_STATUS: EnumField<
      BenefitsPlanEmployeeLifeEventTransactionsV2<DeSerializers>,
      DeSerializersT,
      BenefitEmployeePlanStatus,
      true,
      true
    >;
    ALL_FIELDS: AllFields<
      BenefitsPlanEmployeeLifeEventTransactionsV2<DeSerializers>
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
            false
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
         * Static representation of the {@link planEmployeeAfterLifeEventValidTo} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PLAN_EMPLOYEE_AFTER_LIFE_EVENT_VALID_TO: fieldBuilder.buildEdmTypeField(
          'PlanEmployeeAfterLifeEventValidTo',
          'Edm.DateTimeOffset',
          false
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
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields(
          '*',
          BenefitsPlanEmployeeLifeEventTransactionsV2
        )
      };
    }

    return this._schema;
  }
}
