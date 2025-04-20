/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { PayrollEmployeesV2 } from './PayrollEmployeesV2';
import { PayrollEmployeesV2RequestBuilder } from './PayrollEmployeesV2RequestBuilder';
import { PersonIdentificationNumbersApi } from './PersonIdentificationNumbersApi';
import { EmployeesV2Api } from './EmployeesV2Api';
import { BaseWorkersApi } from './BaseWorkersApi';
import { EmploymentDetailsApi } from './EmploymentDetailsApi';
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
  OneToOneLink,
  OneToManyLink
} from '@sap-cloud-sdk/odata-v4';
export class PayrollEmployeesV2Api<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<PayrollEmployeesV2<DeSerializersT>, DeSerializersT>
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
  ): PayrollEmployeesV2Api<DeSerializersT> {
    return new PayrollEmployeesV2Api(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link personIdentificationNumber} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PERSON_IDENTIFICATION_NUMBER: OneToOneLink<
      PayrollEmployeesV2<DeSerializersT>,
      DeSerializersT,
      PersonIdentificationNumbersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link employeeV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EMPLOYEE_V_2: OneToOneLink<
      PayrollEmployeesV2<DeSerializersT>,
      DeSerializersT,
      EmployeesV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link baseWorker} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BASE_WORKER: OneToOneLink<
      PayrollEmployeesV2<DeSerializersT>,
      DeSerializersT,
      BaseWorkersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link employmentDetail} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EMPLOYMENT_DETAIL: OneToManyLink<
      PayrollEmployeesV2<DeSerializersT>,
      DeSerializersT,
      EmploymentDetailsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      PersonIdentificationNumbersApi<DeSerializersT>,
      EmployeesV2Api<DeSerializersT>,
      BaseWorkersApi<DeSerializersT>,
      EmploymentDetailsApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      PERSON_IDENTIFICATION_NUMBER: new OneToOneLink(
        'PersonIdentificationNumber',
        this,
        linkedApis[0]
      ),
      EMPLOYEE_V_2: new OneToOneLink('EmployeeV2', this, linkedApis[1]),
      BASE_WORKER: new OneToOneLink('BaseWorker', this, linkedApis[2]),
      EMPLOYMENT_DETAIL: new OneToManyLink(
        'EmploymentDetail',
        this,
        linkedApis[3]
      )
    };
    return this;
  }

  entityConstructor = PayrollEmployeesV2;

  requestBuilder(): PayrollEmployeesV2RequestBuilder<DeSerializersT> {
    return new PayrollEmployeesV2RequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    PayrollEmployeesV2<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<PayrollEmployeesV2<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    PayrollEmployeesV2<DeSerializersT>,
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
    typeof PayrollEmployeesV2,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        PayrollEmployeesV2,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      PayrollEmployeesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PERSONNEL_NUMBER: OrderableEdmTypeField<
      PayrollEmployeesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LEGAL_ENTITY_ID: OrderableEdmTypeField<
      PayrollEmployeesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    EMPLOYMENT_START_DATE: OrderableEdmTypeField<
      PayrollEmployeesV2<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    GENDER: EnumField<
      PayrollEmployeesV2<DeSerializers>,
      DeSerializersT,
      HcmPersonGender,
      true,
      true
    >;
    IDENTIFICATION_NUMBER: OrderableEdmTypeField<
      PayrollEmployeesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EMPLOYMENT_TYPE: EnumField<
      PayrollEmployeesV2<DeSerializers>,
      DeSerializersT,
      HcmEmploymentType,
      true,
      true
    >;
    EMPLOYMENT_END_DATE: OrderableEdmTypeField<
      PayrollEmployeesV2<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    PARTY_NUMBER: OrderableEdmTypeField<
      PayrollEmployeesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BIRTH_DATE: OrderableEdmTypeField<
      PayrollEmployeesV2<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    READY_TO_PAY: EnumField<
      PayrollEmployeesV2<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    EMPLOYMENT_ID: OrderableEdmTypeField<
      PayrollEmployeesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IDENTIFICATION_TYPE_ID: OrderableEdmTypeField<
      PayrollEmployeesV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link personIdentificationNumber} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PERSON_IDENTIFICATION_NUMBER: OneToOneLink<
      PayrollEmployeesV2<DeSerializersT>,
      DeSerializersT,
      PersonIdentificationNumbersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link employeeV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EMPLOYEE_V_2: OneToOneLink<
      PayrollEmployeesV2<DeSerializersT>,
      DeSerializersT,
      EmployeesV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link baseWorker} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BASE_WORKER: OneToOneLink<
      PayrollEmployeesV2<DeSerializersT>,
      DeSerializersT,
      BaseWorkersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link employmentDetail} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EMPLOYMENT_DETAIL: OneToManyLink<
      PayrollEmployeesV2<DeSerializersT>,
      DeSerializersT,
      EmploymentDetailsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<PayrollEmployeesV2<DeSerializers>>;
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
         * Static representation of the {@link employmentId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EMPLOYMENT_ID: fieldBuilder.buildEdmTypeField(
          'EmploymentId',
          'Edm.String',
          true
        ),
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
        ALL_FIELDS: new AllFields('*', PayrollEmployeesV2)
      };
    }

    return this._schema;
  }
}
