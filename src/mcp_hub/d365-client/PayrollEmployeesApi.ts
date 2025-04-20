/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { PayrollEmployees } from './PayrollEmployees';
import { PayrollEmployeesRequestBuilder } from './PayrollEmployeesRequestBuilder';
import { PayrollFixedCompensationPlansApi } from './PayrollFixedCompensationPlansApi';
import { EmploymentDetailsApi } from './EmploymentDetailsApi';
import { IntV1PayrollFixedCompensationPlansApi } from './IntV1PayrollFixedCompensationPlansApi';
import { WorkerBankAccountsApi } from './WorkerBankAccountsApi';
import { PayrollVariableCompensationAwardsApi } from './PayrollVariableCompensationAwardsApi';
import { PayrollWorkerAddressesApi } from './PayrollWorkerAddressesApi';
import { BaseWorkersApi } from './BaseWorkersApi';
import { PersonIdentificationNumbersApi } from './PersonIdentificationNumbersApi';
import { PersonHistoricalNamesApi } from './PersonHistoricalNamesApi';
import { EmployeesV2Api } from './EmployeesV2Api';
import { HcmPersonGender } from './HcmPersonGender';
import { HcmEmploymentType } from './HcmEmploymentType';
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
  OneToManyLink,
  OneToOneLink
} from '@sap-cloud-sdk/odata-v4';
export class PayrollEmployeesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<PayrollEmployees<DeSerializersT>, DeSerializersT>
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
  ): PayrollEmployeesApi<DeSerializersT> {
    return new PayrollEmployeesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link payrollFixedCompensationPlan} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PAYROLL_FIXED_COMPENSATION_PLAN: OneToManyLink<
      PayrollEmployees<DeSerializersT>,
      DeSerializersT,
      PayrollFixedCompensationPlansApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link employmentDetail} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EMPLOYMENT_DETAIL: OneToManyLink<
      PayrollEmployees<DeSerializersT>,
      DeSerializersT,
      EmploymentDetailsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link intV1PayrollFixedCompensationPlan} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    INT_V_1_PAYROLL_FIXED_COMPENSATION_PLAN: OneToManyLink<
      PayrollEmployees<DeSerializersT>,
      DeSerializersT,
      IntV1PayrollFixedCompensationPlansApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link workerBankAccount} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WORKER_BANK_ACCOUNT: OneToManyLink<
      PayrollEmployees<DeSerializersT>,
      DeSerializersT,
      WorkerBankAccountsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link payrollVariableCompensationAward} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PAYROLL_VARIABLE_COMPENSATION_AWARD: OneToOneLink<
      PayrollEmployees<DeSerializersT>,
      DeSerializersT,
      PayrollVariableCompensationAwardsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link payrollWorkerAddress} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PAYROLL_WORKER_ADDRESS: OneToManyLink<
      PayrollEmployees<DeSerializersT>,
      DeSerializersT,
      PayrollWorkerAddressesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link baseWorker} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BASE_WORKER: OneToManyLink<
      PayrollEmployees<DeSerializersT>,
      DeSerializersT,
      BaseWorkersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link personIdentificationNumber} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PERSON_IDENTIFICATION_NUMBER: OneToOneLink<
      PayrollEmployees<DeSerializersT>,
      DeSerializersT,
      PersonIdentificationNumbersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link personHistoricalName} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PERSON_HISTORICAL_NAME: OneToOneLink<
      PayrollEmployees<DeSerializersT>,
      DeSerializersT,
      PersonHistoricalNamesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link employeeV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EMPLOYEE_V_2: OneToOneLink<
      PayrollEmployees<DeSerializersT>,
      DeSerializersT,
      EmployeesV2Api<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      PayrollFixedCompensationPlansApi<DeSerializersT>,
      EmploymentDetailsApi<DeSerializersT>,
      IntV1PayrollFixedCompensationPlansApi<DeSerializersT>,
      WorkerBankAccountsApi<DeSerializersT>,
      PayrollVariableCompensationAwardsApi<DeSerializersT>,
      PayrollWorkerAddressesApi<DeSerializersT>,
      BaseWorkersApi<DeSerializersT>,
      PersonIdentificationNumbersApi<DeSerializersT>,
      PersonHistoricalNamesApi<DeSerializersT>,
      EmployeesV2Api<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      PAYROLL_FIXED_COMPENSATION_PLAN: new OneToManyLink(
        'PayrollFixedCompensationPlan',
        this,
        linkedApis[0]
      ),
      EMPLOYMENT_DETAIL: new OneToManyLink(
        'EmploymentDetail',
        this,
        linkedApis[1]
      ),
      INT_V_1_PAYROLL_FIXED_COMPENSATION_PLAN: new OneToManyLink(
        'IntV1PayrollFixedCompensationPlan',
        this,
        linkedApis[2]
      ),
      WORKER_BANK_ACCOUNT: new OneToManyLink(
        'WorkerBankAccount',
        this,
        linkedApis[3]
      ),
      PAYROLL_VARIABLE_COMPENSATION_AWARD: new OneToOneLink(
        'PayrollVariableCompensationAward',
        this,
        linkedApis[4]
      ),
      PAYROLL_WORKER_ADDRESS: new OneToManyLink(
        'PayrollWorkerAddress',
        this,
        linkedApis[5]
      ),
      BASE_WORKER: new OneToManyLink('BaseWorker', this, linkedApis[6]),
      PERSON_IDENTIFICATION_NUMBER: new OneToOneLink(
        'PersonIdentificationNumber',
        this,
        linkedApis[7]
      ),
      PERSON_HISTORICAL_NAME: new OneToOneLink(
        'PersonHistoricalName',
        this,
        linkedApis[8]
      ),
      EMPLOYEE_V_2: new OneToOneLink('EmployeeV2', this, linkedApis[9])
    };
    return this;
  }

  entityConstructor = PayrollEmployees;

  requestBuilder(): PayrollEmployeesRequestBuilder<DeSerializersT> {
    return new PayrollEmployeesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    PayrollEmployees<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<PayrollEmployees<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<PayrollEmployees<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof PayrollEmployees, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        PayrollEmployees,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      PayrollEmployees<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PERSONNEL_NUMBER: OrderableEdmTypeField<
      PayrollEmployees<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LEGAL_ENTITY_ID: OrderableEdmTypeField<
      PayrollEmployees<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    EMPLOYMENT_START_DATE: OrderableEdmTypeField<
      PayrollEmployees<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    GENDER: EnumField<
      PayrollEmployees<DeSerializers>,
      DeSerializersT,
      HcmPersonGender,
      true,
      true
    >;
    IDENTIFICATION_NUMBER: OrderableEdmTypeField<
      PayrollEmployees<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EMPLOYMENT_TYPE: EnumField<
      PayrollEmployees<DeSerializers>,
      DeSerializersT,
      HcmEmploymentType,
      true,
      true
    >;
    EMPLOYMENT_END_DATE: OrderableEdmTypeField<
      PayrollEmployees<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    PARTY_NUMBER: OrderableEdmTypeField<
      PayrollEmployees<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BIRTH_DATE: OrderableEdmTypeField<
      PayrollEmployees<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    READY_TO_PAY: EnumField<
      PayrollEmployees<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    IDENTIFICATION_TYPE_ID: OrderableEdmTypeField<
      PayrollEmployees<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link payrollFixedCompensationPlan} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PAYROLL_FIXED_COMPENSATION_PLAN: OneToManyLink<
      PayrollEmployees<DeSerializersT>,
      DeSerializersT,
      PayrollFixedCompensationPlansApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link employmentDetail} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EMPLOYMENT_DETAIL: OneToManyLink<
      PayrollEmployees<DeSerializersT>,
      DeSerializersT,
      EmploymentDetailsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link intV1PayrollFixedCompensationPlan} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    INT_V_1_PAYROLL_FIXED_COMPENSATION_PLAN: OneToManyLink<
      PayrollEmployees<DeSerializersT>,
      DeSerializersT,
      IntV1PayrollFixedCompensationPlansApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link workerBankAccount} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WORKER_BANK_ACCOUNT: OneToManyLink<
      PayrollEmployees<DeSerializersT>,
      DeSerializersT,
      WorkerBankAccountsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link payrollVariableCompensationAward} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PAYROLL_VARIABLE_COMPENSATION_AWARD: OneToOneLink<
      PayrollEmployees<DeSerializersT>,
      DeSerializersT,
      PayrollVariableCompensationAwardsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link payrollWorkerAddress} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PAYROLL_WORKER_ADDRESS: OneToManyLink<
      PayrollEmployees<DeSerializersT>,
      DeSerializersT,
      PayrollWorkerAddressesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link baseWorker} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BASE_WORKER: OneToManyLink<
      PayrollEmployees<DeSerializersT>,
      DeSerializersT,
      BaseWorkersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link personIdentificationNumber} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PERSON_IDENTIFICATION_NUMBER: OneToOneLink<
      PayrollEmployees<DeSerializersT>,
      DeSerializersT,
      PersonIdentificationNumbersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link personHistoricalName} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PERSON_HISTORICAL_NAME: OneToOneLink<
      PayrollEmployees<DeSerializersT>,
      DeSerializersT,
      PersonHistoricalNamesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link employeeV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EMPLOYEE_V_2: OneToOneLink<
      PayrollEmployees<DeSerializersT>,
      DeSerializersT,
      EmployeesV2Api<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<PayrollEmployees<DeSerializers>>;
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
         * Static representation of the {@link gender} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GENDER: fieldBuilder.buildEnumField('Gender', HcmPersonGender, true),
        /**
         * Static representation of the {@link identificationNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IDENTIFICATION_NUMBER: fieldBuilder.buildEdmTypeField(
          'IdentificationNumber',
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
         * Static representation of the {@link employmentEndDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EMPLOYMENT_END_DATE: fieldBuilder.buildEdmTypeField(
          'EmploymentEndDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link partyNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PARTY_NUMBER: fieldBuilder.buildEdmTypeField(
          'PartyNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link birthDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BIRTH_DATE: fieldBuilder.buildEdmTypeField(
          'BirthDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link readyToPay} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        READY_TO_PAY: fieldBuilder.buildEnumField('ReadyToPay', NoYes, true),
        /**
         * Static representation of the {@link identificationTypeId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IDENTIFICATION_TYPE_ID: fieldBuilder.buildEdmTypeField(
          'IdentificationTypeId',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', PayrollEmployees)
      };
    }

    return this._schema;
  }
}
