/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { EmploymentDetails } from './EmploymentDetails';
import { EmploymentDetailsRequestBuilder } from './EmploymentDetailsRequestBuilder';
import { EmploymentsV2Api } from './EmploymentsV2Api';
import { ReasonCodesApi } from './ReasonCodesApi';
import { EmploymentCategoriesApi } from './EmploymentCategoriesApi';
import { PayrollEmployeesV2Api } from './PayrollEmployeesV2Api';
import { PayrollEmployeesApi } from './PayrollEmployeesApi';
import { HcmEmploymentType } from './HcmEmploymentType';
import { HcmUnitOfNotice } from './HcmUnitOfNotice';
import { BenefitEmploymentStatus } from './BenefitEmploymentStatus';
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
export class EmploymentDetailsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<EmploymentDetails<DeSerializersT>, DeSerializersT>
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
  ): EmploymentDetailsApi<DeSerializersT> {
    return new EmploymentDetailsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link employment} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EMPLOYMENT: OneToOneLink<
      EmploymentDetails<DeSerializersT>,
      DeSerializersT,
      EmploymentsV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link reasonCode} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    REASON_CODE: OneToOneLink<
      EmploymentDetails<DeSerializersT>,
      DeSerializersT,
      ReasonCodesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link employmentCategory} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EMPLOYMENT_CATEGORY: OneToOneLink<
      EmploymentDetails<DeSerializersT>,
      DeSerializersT,
      EmploymentCategoriesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link payrollEmployeeV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PAYROLL_EMPLOYEE_V_2: OneToOneLink<
      EmploymentDetails<DeSerializersT>,
      DeSerializersT,
      PayrollEmployeesV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link payrollEmployee} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PAYROLL_EMPLOYEE: OneToOneLink<
      EmploymentDetails<DeSerializersT>,
      DeSerializersT,
      PayrollEmployeesApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      EmploymentsV2Api<DeSerializersT>,
      ReasonCodesApi<DeSerializersT>,
      EmploymentCategoriesApi<DeSerializersT>,
      PayrollEmployeesV2Api<DeSerializersT>,
      PayrollEmployeesApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      EMPLOYMENT: new OneToOneLink('Employment', this, linkedApis[0]),
      REASON_CODE: new OneToOneLink('ReasonCode', this, linkedApis[1]),
      EMPLOYMENT_CATEGORY: new OneToOneLink(
        'EmploymentCategory',
        this,
        linkedApis[2]
      ),
      PAYROLL_EMPLOYEE_V_2: new OneToOneLink(
        'PayrollEmployeeV2',
        this,
        linkedApis[3]
      ),
      PAYROLL_EMPLOYEE: new OneToOneLink('PayrollEmployee', this, linkedApis[4])
    };
    return this;
  }

  entityConstructor = EmploymentDetails;

  requestBuilder(): EmploymentDetailsRequestBuilder<DeSerializersT> {
    return new EmploymentDetailsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    EmploymentDetails<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<EmploymentDetails<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<EmploymentDetails<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<
    typeof EmploymentDetails,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        EmploymentDetails,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    PERSONNEL_NUMBER: OrderableEdmTypeField<
      EmploymentDetails<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LEGAL_ENTITY_ID: OrderableEdmTypeField<
      EmploymentDetails<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    EMPLOYMENT_START_DATE: OrderableEdmTypeField<
      EmploymentDetails<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    EMPLOYMENT_END_DATE: OrderableEdmTypeField<
      EmploymentDetails<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    VALID_FROM: OrderableEdmTypeField<
      EmploymentDetails<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    VALID_TO: OrderableEdmTypeField<
      EmploymentDetails<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    REASON_CODE_ID: OrderableEdmTypeField<
      EmploymentDetails<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EMPLOYMENT_TYPE: EnumField<
      EmploymentDetails<DeSerializers>,
      DeSerializersT,
      HcmEmploymentType,
      true,
      true
    >;
    EMPLOYER_UNIT_OF_NOTICE: EnumField<
      EmploymentDetails<DeSerializers>,
      DeSerializersT,
      HcmUnitOfNotice,
      true,
      true
    >;
    WORKER_START_DATE: OrderableEdmTypeField<
      EmploymentDetails<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    TRANSITION_DATE: OrderableEdmTypeField<
      EmploymentDetails<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    WORKER_UNIT_OF_NOTICE: EnumField<
      EmploymentDetails<DeSerializers>,
      DeSerializersT,
      HcmUnitOfNotice,
      true,
      true
    >;
    EMPLOYER_NOTICE_AMOUNT: OrderableEdmTypeField<
      EmploymentDetails<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    ADJUSTED_WORKER_START_DATE: OrderableEdmTypeField<
      EmploymentDetails<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    WORKER_NOTICE_AMOUNT: OrderableEdmTypeField<
      EmploymentDetails<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    BENEFIT_EMPLOYMENT_STATUS: EnumField<
      EmploymentDetails<DeSerializers>,
      DeSerializersT,
      BenefitEmploymentStatus,
      true,
      true
    >;
    LAST_DATE_WORKED: OrderableEdmTypeField<
      EmploymentDetails<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    EMPLOYMENT_CATEGORY_ID: OrderableEdmTypeField<
      EmploymentDetails<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EMPLOYMENT_TYPE_ID: OrderableEdmTypeField<
      EmploymentDetails<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PAY_FREQUENCY_ID: OrderableEdmTypeField<
      EmploymentDetails<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link employment} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EMPLOYMENT: OneToOneLink<
      EmploymentDetails<DeSerializersT>,
      DeSerializersT,
      EmploymentsV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link reasonCode} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    REASON_CODE: OneToOneLink<
      EmploymentDetails<DeSerializersT>,
      DeSerializersT,
      ReasonCodesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link employmentCategory} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EMPLOYMENT_CATEGORY: OneToOneLink<
      EmploymentDetails<DeSerializersT>,
      DeSerializersT,
      EmploymentCategoriesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link payrollEmployeeV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PAYROLL_EMPLOYEE_V_2: OneToOneLink<
      EmploymentDetails<DeSerializersT>,
      DeSerializersT,
      PayrollEmployeesV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link payrollEmployee} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PAYROLL_EMPLOYEE: OneToOneLink<
      EmploymentDetails<DeSerializersT>,
      DeSerializersT,
      PayrollEmployeesApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<EmploymentDetails<DeSerializers>>;
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
         * Static representation of the {@link legalEntityId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LEGAL_ENTITY_ID: fieldBuilder.buildEdmTypeField(
          'LegalEntityId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link employmentStartDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EMPLOYMENT_START_DATE: fieldBuilder.buildEdmTypeField(
          'EmploymentStartDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link employmentEndDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EMPLOYMENT_END_DATE: fieldBuilder.buildEdmTypeField(
          'EmploymentEndDate',
          'Edm.DateTimeOffset',
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
         * Static representation of the {@link reasonCodeId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REASON_CODE_ID: fieldBuilder.buildEdmTypeField(
          'ReasonCodeId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link employmentType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EMPLOYMENT_TYPE: fieldBuilder.buildEnumField(
          'EmploymentType',
          HcmEmploymentType,
          true
        ),
        /**
         * Static representation of the {@link employerUnitOfNotice} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EMPLOYER_UNIT_OF_NOTICE: fieldBuilder.buildEnumField(
          'EmployerUnitOfNotice',
          HcmUnitOfNotice,
          true
        ),
        /**
         * Static representation of the {@link workerStartDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WORKER_START_DATE: fieldBuilder.buildEdmTypeField(
          'WorkerStartDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link transitionDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSITION_DATE: fieldBuilder.buildEdmTypeField(
          'TransitionDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link workerUnitOfNotice} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WORKER_UNIT_OF_NOTICE: fieldBuilder.buildEnumField(
          'WorkerUnitOfNotice',
          HcmUnitOfNotice,
          true
        ),
        /**
         * Static representation of the {@link employerNoticeAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EMPLOYER_NOTICE_AMOUNT: fieldBuilder.buildEdmTypeField(
          'EmployerNoticeAmount',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link adjustedWorkerStartDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADJUSTED_WORKER_START_DATE: fieldBuilder.buildEdmTypeField(
          'AdjustedWorkerStartDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link workerNoticeAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WORKER_NOTICE_AMOUNT: fieldBuilder.buildEdmTypeField(
          'WorkerNoticeAmount',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link benefitEmploymentStatus} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BENEFIT_EMPLOYMENT_STATUS: fieldBuilder.buildEnumField(
          'BenefitEmploymentStatus',
          BenefitEmploymentStatus,
          true
        ),
        /**
         * Static representation of the {@link lastDateWorked} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LAST_DATE_WORKED: fieldBuilder.buildEdmTypeField(
          'LastDateWorked',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link employmentCategoryId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EMPLOYMENT_CATEGORY_ID: fieldBuilder.buildEdmTypeField(
          'EmploymentCategoryId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link employmentTypeId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EMPLOYMENT_TYPE_ID: fieldBuilder.buildEdmTypeField(
          'EmploymentTypeId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link payFrequencyId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAY_FREQUENCY_ID: fieldBuilder.buildEdmTypeField(
          'PayFrequencyId',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', EmploymentDetails)
      };
    }

    return this._schema;
  }
}
