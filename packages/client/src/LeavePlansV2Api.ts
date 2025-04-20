/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { LeavePlansV2 } from './LeavePlansV2';
import { LeavePlansV2RequestBuilder } from './LeavePlansV2RequestBuilder';
import { LeavePlanTiersV2Api } from './LeavePlanTiersV2Api';
import { LeaveBankTransactionsApi } from './LeaveBankTransactionsApi';
import { LeaveBankTransactionsV2Api } from './LeaveBankTransactionsV2Api';
import { LeaveEnrollmentsV2Api } from './LeaveEnrollmentsV2Api';
import { LeavePlanAccrualFrequency } from './LeavePlanAccrualFrequency';
import { LeavePlanAccrualType } from './LeavePlanAccrualType';
import { LeavePlanAccrualPolicy } from './LeavePlanAccrualPolicy';
import { LeaveHoursWorkedType } from './LeaveHoursWorkedType';
import { LeaveAccrualAwardDateBasis } from './LeaveAccrualAwardDateBasis';
import { LeavePlanAccrualPeriodBasis } from './LeavePlanAccrualPeriodBasis';
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
  OneToManyLink
} from '@sap-cloud-sdk/odata-v4';
export class LeavePlansV2Api<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<LeavePlansV2<DeSerializersT>, DeSerializersT>
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
  ): LeavePlansV2Api<DeSerializersT> {
    return new LeavePlansV2Api(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link leavePlanTiersV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LEAVE_PLAN_TIERS_V_2: OneToManyLink<
      LeavePlansV2<DeSerializersT>,
      DeSerializersT,
      LeavePlanTiersV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link leaveBankTransactions} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LEAVE_BANK_TRANSACTIONS: OneToManyLink<
      LeavePlansV2<DeSerializersT>,
      DeSerializersT,
      LeaveBankTransactionsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link leaveBankTransactionsV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LEAVE_BANK_TRANSACTIONS_V_2: OneToManyLink<
      LeavePlansV2<DeSerializersT>,
      DeSerializersT,
      LeaveBankTransactionsV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link leaveEnrollmentsV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LEAVE_ENROLLMENTS_V_2: OneToManyLink<
      LeavePlansV2<DeSerializersT>,
      DeSerializersT,
      LeaveEnrollmentsV2Api<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      LeavePlanTiersV2Api<DeSerializersT>,
      LeaveBankTransactionsApi<DeSerializersT>,
      LeaveBankTransactionsV2Api<DeSerializersT>,
      LeaveEnrollmentsV2Api<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      LEAVE_PLAN_TIERS_V_2: new OneToManyLink(
        'LeavePlanTiersV2',
        this,
        linkedApis[0]
      ),
      LEAVE_BANK_TRANSACTIONS: new OneToManyLink(
        'LeaveBankTransactions',
        this,
        linkedApis[1]
      ),
      LEAVE_BANK_TRANSACTIONS_V_2: new OneToManyLink(
        'LeaveBankTransactionsV2',
        this,
        linkedApis[2]
      ),
      LEAVE_ENROLLMENTS_V_2: new OneToManyLink(
        'LeaveEnrollmentsV2',
        this,
        linkedApis[3]
      )
    };
    return this;
  }

  entityConstructor = LeavePlansV2;

  requestBuilder(): LeavePlansV2RequestBuilder<DeSerializersT> {
    return new LeavePlansV2RequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    LeavePlansV2<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<LeavePlansV2<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<LeavePlansV2<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof LeavePlansV2, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(LeavePlansV2, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      LeavePlansV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    NAME: OrderableEdmTypeField<
      LeavePlansV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      LeavePlansV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ACCRUAL_FREQUENCY: EnumField<
      LeavePlansV2<DeSerializers>,
      DeSerializersT,
      LeavePlanAccrualFrequency,
      true,
      true
    >;
    ACCRUAL_TYPE: EnumField<
      LeavePlansV2<DeSerializers>,
      DeSerializersT,
      LeavePlanAccrualType,
      true,
      true
    >;
    LEAVE_TYPE_ID: OrderableEdmTypeField<
      LeavePlansV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EMPLOYEE_SPECIFIC_DATE_FIELD_NAME: OrderableEdmTypeField<
      LeavePlansV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ENROLLMENT_ACCRUAL_POLICY: EnumField<
      LeavePlansV2<DeSerializers>,
      DeSerializersT,
      LeavePlanAccrualPolicy,
      true,
      true
    >;
    HOURS_WORKED_TYPE: EnumField<
      LeavePlansV2<DeSerializers>,
      DeSerializersT,
      LeaveHoursWorkedType,
      true,
      true
    >;
    ACCRUAL_AWARD_DATE_BASIS: EnumField<
      LeavePlansV2<DeSerializers>,
      DeSerializersT,
      LeaveAccrualAwardDateBasis,
      true,
      true
    >;
    EMPLOYEE_SPECIFIC_DATE_TABLE_NAME: OrderableEdmTypeField<
      LeavePlansV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ACCRUAL_PERIOD_BASIS: EnumField<
      LeavePlansV2<DeSerializers>,
      DeSerializersT,
      LeavePlanAccrualPeriodBasis,
      true,
      true
    >;
    UNENROLLMENT_ACCRUAL_POLICY: EnumField<
      LeavePlansV2<DeSerializers>,
      DeSerializersT,
      LeavePlanAccrualPolicy,
      true,
      true
    >;
    START_DATE: OrderableEdmTypeField<
      LeavePlansV2<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link leavePlanTiersV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LEAVE_PLAN_TIERS_V_2: OneToManyLink<
      LeavePlansV2<DeSerializersT>,
      DeSerializersT,
      LeavePlanTiersV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link leaveBankTransactions} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LEAVE_BANK_TRANSACTIONS: OneToManyLink<
      LeavePlansV2<DeSerializersT>,
      DeSerializersT,
      LeaveBankTransactionsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link leaveBankTransactionsV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LEAVE_BANK_TRANSACTIONS_V_2: OneToManyLink<
      LeavePlansV2<DeSerializersT>,
      DeSerializersT,
      LeaveBankTransactionsV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link leaveEnrollmentsV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LEAVE_ENROLLMENTS_V_2: OneToManyLink<
      LeavePlansV2<DeSerializersT>,
      DeSerializersT,
      LeaveEnrollmentsV2Api<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<LeavePlansV2<DeSerializers>>;
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
         * Static representation of the {@link name} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NAME: fieldBuilder.buildEdmTypeField('Name', 'Edm.String', false),
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
         * Static representation of the {@link accrualFrequency} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACCRUAL_FREQUENCY: fieldBuilder.buildEnumField(
          'AccrualFrequency',
          LeavePlanAccrualFrequency,
          true
        ),
        /**
         * Static representation of the {@link accrualType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACCRUAL_TYPE: fieldBuilder.buildEnumField(
          'AccrualType',
          LeavePlanAccrualType,
          true
        ),
        /**
         * Static representation of the {@link leaveTypeId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LEAVE_TYPE_ID: fieldBuilder.buildEdmTypeField(
          'LeaveTypeId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link employeeSpecificDateFieldName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EMPLOYEE_SPECIFIC_DATE_FIELD_NAME: fieldBuilder.buildEdmTypeField(
          'EmployeeSpecificDateFieldName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link enrollmentAccrualPolicy} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ENROLLMENT_ACCRUAL_POLICY: fieldBuilder.buildEnumField(
          'EnrollmentAccrualPolicy',
          LeavePlanAccrualPolicy,
          true
        ),
        /**
         * Static representation of the {@link hoursWorkedType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        HOURS_WORKED_TYPE: fieldBuilder.buildEnumField(
          'HoursWorkedType',
          LeaveHoursWorkedType,
          true
        ),
        /**
         * Static representation of the {@link accrualAwardDateBasis} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACCRUAL_AWARD_DATE_BASIS: fieldBuilder.buildEnumField(
          'AccrualAwardDateBasis',
          LeaveAccrualAwardDateBasis,
          true
        ),
        /**
         * Static representation of the {@link employeeSpecificDateTableName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EMPLOYEE_SPECIFIC_DATE_TABLE_NAME: fieldBuilder.buildEdmTypeField(
          'EmployeeSpecificDateTableName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link accrualPeriodBasis} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACCRUAL_PERIOD_BASIS: fieldBuilder.buildEnumField(
          'AccrualPeriodBasis',
          LeavePlanAccrualPeriodBasis,
          true
        ),
        /**
         * Static representation of the {@link unenrollmentAccrualPolicy} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        UNENROLLMENT_ACCRUAL_POLICY: fieldBuilder.buildEnumField(
          'UnenrollmentAccrualPolicy',
          LeavePlanAccrualPolicy,
          true
        ),
        /**
         * Static representation of the {@link startDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        START_DATE: fieldBuilder.buildEdmTypeField(
          'StartDate',
          'Edm.DateTimeOffset',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', LeavePlansV2)
      };
    }

    return this._schema;
  }
}
