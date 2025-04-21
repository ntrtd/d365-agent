/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { PayIntV1PayrollPositionDetails } from './PayIntV1PayrollPositionDetails';
import { PayIntV1PayrollPositionDetailsRequestBuilder } from './PayIntV1PayrollPositionDetailsRequestBuilder';
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
  EnumField
} from '@sap-cloud-sdk/odata-v4';
export class PayIntV1PayrollPositionDetailsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<PayIntV1PayrollPositionDetails<DeSerializersT>, DeSerializersT>
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
  ): PayIntV1PayrollPositionDetailsApi<DeSerializersT> {
    return new PayIntV1PayrollPositionDetailsApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = PayIntV1PayrollPositionDetails;

  requestBuilder(): PayIntV1PayrollPositionDetailsRequestBuilder<DeSerializersT> {
    return new PayIntV1PayrollPositionDetailsRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    PayIntV1PayrollPositionDetails<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      PayIntV1PayrollPositionDetails<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    PayIntV1PayrollPositionDetails<DeSerializersT>,
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
    typeof PayIntV1PayrollPositionDetails,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        PayIntV1PayrollPositionDetails,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    POSITION_ID: OrderableEdmTypeField<
      PayIntV1PayrollPositionDetails<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    VALID_FROM: OrderableEdmTypeField<
      PayIntV1PayrollPositionDetails<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    VALID_TO: OrderableEdmTypeField<
      PayIntV1PayrollPositionDetails<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    ARE_EARNINGS_GENERATED_FROM_SCHEDULE: EnumField<
      PayIntV1PayrollPositionDetails<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    SCHEDULE_LEGAL_ENTITY: OrderableEdmTypeField<
      PayIntV1PayrollPositionDetails<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ANNUAL_REGULAR_HOURS: OrderableEdmTypeField<
      PayIntV1PayrollPositionDetails<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PAY_CYCLE_ID: OrderableEdmTypeField<
      PayIntV1PayrollPositionDetails<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SCHEDULE: OrderableEdmTypeField<
      PayIntV1PayrollPositionDetails<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PAY_PERIOD_OVERTIME_HOURS: OrderableEdmTypeField<
      PayIntV1PayrollPositionDetails<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PAID_BY_LEGAL_ENTITY: OrderableEdmTypeField<
      PayIntV1PayrollPositionDetails<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_SALARY_GENERATED: EnumField<
      PayIntV1PayrollPositionDetails<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    DEFAULT_EARNING_CODE_ID: OrderableEdmTypeField<
      PayIntV1PayrollPositionDetails<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BENEFIT_ID: OrderableEdmTypeField<
      PayIntV1PayrollPositionDetails<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PAY_CYCLE: OrderableEdmTypeField<
      PayIntV1PayrollPositionDetails<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    ALL_FIELDS: AllFields<PayIntV1PayrollPositionDetails<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link positionId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        POSITION_ID: fieldBuilder.buildEdmTypeField(
          'PositionId',
          'Edm.String',
          false
        ),
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
         * Static representation of the {@link validTo} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VALID_TO: fieldBuilder.buildEdmTypeField(
          'ValidTo',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link areEarningsGeneratedFromSchedule} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ARE_EARNINGS_GENERATED_FROM_SCHEDULE: fieldBuilder.buildEnumField(
          'AreEarningsGeneratedFromSchedule',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link scheduleLegalEntity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SCHEDULE_LEGAL_ENTITY: fieldBuilder.buildEdmTypeField(
          'ScheduleLegalEntity',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link annualRegularHours} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ANNUAL_REGULAR_HOURS: fieldBuilder.buildEdmTypeField(
          'AnnualRegularHours',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link payCycleId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAY_CYCLE_ID: fieldBuilder.buildEdmTypeField(
          'PayCycleId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link schedule} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SCHEDULE: fieldBuilder.buildEdmTypeField(
          'Schedule',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link payPeriodOvertimeHours} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAY_PERIOD_OVERTIME_HOURS: fieldBuilder.buildEdmTypeField(
          'PayPeriodOvertimeHours',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link paidByLegalEntity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAID_BY_LEGAL_ENTITY: fieldBuilder.buildEdmTypeField(
          'PaidByLegalEntity',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link isSalaryGenerated} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_SALARY_GENERATED: fieldBuilder.buildEnumField(
          'IsSalaryGenerated',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link defaultEarningCodeId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFAULT_EARNING_CODE_ID: fieldBuilder.buildEdmTypeField(
          'DefaultEarningCodeId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link benefitId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BENEFIT_ID: fieldBuilder.buildEdmTypeField(
          'BenefitId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link payCycle} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAY_CYCLE: fieldBuilder.buildEdmTypeField(
          'PayCycle',
          'Edm.Int64',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', PayIntV1PayrollPositionDetails)
      };
    }

    return this._schema;
  }
}
