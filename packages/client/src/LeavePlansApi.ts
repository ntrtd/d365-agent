/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { LeavePlans } from './LeavePlans';
import { LeavePlansRequestBuilder } from './LeavePlansRequestBuilder';
import { LeavePlanTiersApi } from './LeavePlanTiersApi';
import { LeaveEnrollmentsApi } from './LeaveEnrollmentsApi';
import { LeaveTypesApi } from './LeaveTypesApi';
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
  OneToManyLink,
  OneToOneLink
} from '@sap-cloud-sdk/odata-v4';
export class LeavePlansApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<LeavePlans<DeSerializersT>, DeSerializersT>
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
  ): LeavePlansApi<DeSerializersT> {
    return new LeavePlansApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link leavePlanTiers} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LEAVE_PLAN_TIERS: OneToManyLink<
      LeavePlans<DeSerializersT>,
      DeSerializersT,
      LeavePlanTiersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link leaveEnrollments} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LEAVE_ENROLLMENTS: OneToManyLink<
      LeavePlans<DeSerializersT>,
      DeSerializersT,
      LeaveEnrollmentsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link type} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TYPE: OneToOneLink<
      LeavePlans<DeSerializersT>,
      DeSerializersT,
      LeaveTypesApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      LeavePlanTiersApi<DeSerializersT>,
      LeaveEnrollmentsApi<DeSerializersT>,
      LeaveTypesApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      LEAVE_PLAN_TIERS: new OneToManyLink(
        'LeavePlanTiers',
        this,
        linkedApis[0]
      ),
      LEAVE_ENROLLMENTS: new OneToManyLink(
        'LeaveEnrollments',
        this,
        linkedApis[1]
      ),
      TYPE: new OneToOneLink('Type', this, linkedApis[2])
    };
    return this;
  }

  entityConstructor = LeavePlans;

  requestBuilder(): LeavePlansRequestBuilder<DeSerializersT> {
    return new LeavePlansRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    LeavePlans<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<LeavePlans<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<LeavePlans<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof LeavePlans, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(LeavePlans, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      LeavePlans<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    NAME: OrderableEdmTypeField<
      LeavePlans<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      LeavePlans<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ACCRUAL_FREQUENCY: EnumField<
      LeavePlans<DeSerializers>,
      DeSerializersT,
      LeavePlanAccrualFrequency,
      true,
      true
    >;
    ACCRUAL_TYPE: EnumField<
      LeavePlans<DeSerializers>,
      DeSerializersT,
      LeavePlanAccrualType,
      true,
      true
    >;
    LEAVE_TYPE_ID: OrderableEdmTypeField<
      LeavePlans<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EMPLOYEE_SPECIFIC_DATE_FIELD_NAME: OrderableEdmTypeField<
      LeavePlans<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ENROLLMENT_ACCRUAL_POLICY: EnumField<
      LeavePlans<DeSerializers>,
      DeSerializersT,
      LeavePlanAccrualPolicy,
      true,
      true
    >;
    HOURS_WORKED_TYPE: EnumField<
      LeavePlans<DeSerializers>,
      DeSerializersT,
      LeaveHoursWorkedType,
      true,
      true
    >;
    ACCRUAL_AWARD_DATE_BASIS: EnumField<
      LeavePlans<DeSerializers>,
      DeSerializersT,
      LeaveAccrualAwardDateBasis,
      true,
      true
    >;
    EMPLOYEE_SPECIFIC_DATE_TABLE_NAME: OrderableEdmTypeField<
      LeavePlans<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ACCRUAL_PERIOD_BASIS: EnumField<
      LeavePlans<DeSerializers>,
      DeSerializersT,
      LeavePlanAccrualPeriodBasis,
      true,
      true
    >;
    UNENROLLMENT_ACCRUAL_POLICY: EnumField<
      LeavePlans<DeSerializers>,
      DeSerializersT,
      LeavePlanAccrualPolicy,
      true,
      true
    >;
    START_DATE: OrderableEdmTypeField<
      LeavePlans<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link leavePlanTiers} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LEAVE_PLAN_TIERS: OneToManyLink<
      LeavePlans<DeSerializersT>,
      DeSerializersT,
      LeavePlanTiersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link leaveEnrollments} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LEAVE_ENROLLMENTS: OneToManyLink<
      LeavePlans<DeSerializersT>,
      DeSerializersT,
      LeaveEnrollmentsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link type} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TYPE: OneToOneLink<
      LeavePlans<DeSerializersT>,
      DeSerializersT,
      LeaveTypesApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<LeavePlans<DeSerializers>>;
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
        ALL_FIELDS: new AllFields('*', LeavePlans)
      };
    }

    return this._schema;
  }
}
