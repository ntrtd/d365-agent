/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { PayrollPositionDetails } from './PayrollPositionDetails';
import { PayrollPositionDetailsRequestBuilder } from './PayrollPositionDetailsRequestBuilder';
import { JobPositionsDualWriteApi } from './JobPositionsDualWriteApi';
import { PayCyclesApi } from './PayCyclesApi';
import { WorkCalendarsApi } from './WorkCalendarsApi';
import { BenefitsApi } from './BenefitsApi';
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
export class PayrollPositionDetailsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<PayrollPositionDetails<DeSerializersT>, DeSerializersT>
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
  ): PayrollPositionDetailsApi<DeSerializersT> {
    return new PayrollPositionDetailsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link position} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    POSITION: OneToOneLink<
      PayrollPositionDetails<DeSerializersT>,
      DeSerializersT,
      JobPositionsDualWriteApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link payCycle} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PAY_CYCLE: OneToOneLink<
      PayrollPositionDetails<DeSerializersT>,
      DeSerializersT,
      PayCyclesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link workCalendar} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WORK_CALENDAR: OneToOneLink<
      PayrollPositionDetails<DeSerializersT>,
      DeSerializersT,
      WorkCalendarsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link benefit} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BENEFIT: OneToOneLink<
      PayrollPositionDetails<DeSerializersT>,
      DeSerializersT,
      BenefitsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      JobPositionsDualWriteApi<DeSerializersT>,
      PayCyclesApi<DeSerializersT>,
      WorkCalendarsApi<DeSerializersT>,
      BenefitsApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      POSITION: new OneToOneLink('Position', this, linkedApis[0]),
      PAY_CYCLE: new OneToOneLink('PayCycle', this, linkedApis[1]),
      WORK_CALENDAR: new OneToOneLink('WorkCalendar', this, linkedApis[2]),
      BENEFIT: new OneToOneLink('Benefit', this, linkedApis[3])
    };
    return this;
  }

  entityConstructor = PayrollPositionDetails;

  requestBuilder(): PayrollPositionDetailsRequestBuilder<DeSerializersT> {
    return new PayrollPositionDetailsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    PayrollPositionDetails<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      PayrollPositionDetails<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    PayrollPositionDetails<DeSerializersT>,
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
    typeof PayrollPositionDetails,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        PayrollPositionDetails,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    POSITION_ID: OrderableEdmTypeField<
      PayrollPositionDetails<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    VALID_FROM: OrderableEdmTypeField<
      PayrollPositionDetails<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    VALID_TO: OrderableEdmTypeField<
      PayrollPositionDetails<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    ARE_EARNINGS_GENERATED_FROM_SCHEDULE: EnumField<
      PayrollPositionDetails<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ANNUAL_REGULAR_HOURS: OrderableEdmTypeField<
      PayrollPositionDetails<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PAY_CYCLE_ID: OrderableEdmTypeField<
      PayrollPositionDetails<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SCHEDULE: OrderableEdmTypeField<
      PayrollPositionDetails<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PAY_PERIOD_OVERTIME_HOURS: OrderableEdmTypeField<
      PayrollPositionDetails<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PAID_BY_LEGAL_ENTITY: OrderableEdmTypeField<
      PayrollPositionDetails<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_SALARY_GENERATED: EnumField<
      PayrollPositionDetails<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    DEFAULT_EARNING_CODE_ID: OrderableEdmTypeField<
      PayrollPositionDetails<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BENEFIT_ID: OrderableEdmTypeField<
      PayrollPositionDetails<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link position} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    POSITION: OneToOneLink<
      PayrollPositionDetails<DeSerializersT>,
      DeSerializersT,
      JobPositionsDualWriteApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link payCycle} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PAY_CYCLE: OneToOneLink<
      PayrollPositionDetails<DeSerializersT>,
      DeSerializersT,
      PayCyclesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link workCalendar} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WORK_CALENDAR: OneToOneLink<
      PayrollPositionDetails<DeSerializersT>,
      DeSerializersT,
      WorkCalendarsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link benefit} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BENEFIT: OneToOneLink<
      PayrollPositionDetails<DeSerializersT>,
      DeSerializersT,
      BenefitsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<PayrollPositionDetails<DeSerializers>>;
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
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', PayrollPositionDetails)
      };
    }

    return this._schema;
  }
}
