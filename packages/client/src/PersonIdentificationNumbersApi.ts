/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { PersonIdentificationNumbers } from './PersonIdentificationNumbers';
import { PersonIdentificationNumbersRequestBuilder } from './PersonIdentificationNumbersRequestBuilder';
import { PayrollEmployeesV2Api } from './PayrollEmployeesV2Api';
import { PeopleApi } from './PeopleApi';
import { IdentificationTypesApi } from './IdentificationTypesApi';
import { IssuingAgenciesApi } from './IssuingAgenciesApi';
import { PayrollEmployeesApi } from './PayrollEmployeesApi';
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
export class PersonIdentificationNumbersApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<PersonIdentificationNumbers<DeSerializersT>, DeSerializersT>
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
  ): PersonIdentificationNumbersApi<DeSerializersT> {
    return new PersonIdentificationNumbersApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link payrollEmployeeV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PAYROLL_EMPLOYEE_V_2: OneToManyLink<
      PersonIdentificationNumbers<DeSerializersT>,
      DeSerializersT,
      PayrollEmployeesV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link person} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PERSON: OneToOneLink<
      PersonIdentificationNumbers<DeSerializersT>,
      DeSerializersT,
      PeopleApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link identificationType} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    IDENTIFICATION_TYPE: OneToOneLink<
      PersonIdentificationNumbers<DeSerializersT>,
      DeSerializersT,
      IdentificationTypesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link issuingAgency} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ISSUING_AGENCY: OneToOneLink<
      PersonIdentificationNumbers<DeSerializersT>,
      DeSerializersT,
      IssuingAgenciesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link payrollEmployee} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PAYROLL_EMPLOYEE: OneToManyLink<
      PersonIdentificationNumbers<DeSerializersT>,
      DeSerializersT,
      PayrollEmployeesApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      PayrollEmployeesV2Api<DeSerializersT>,
      PeopleApi<DeSerializersT>,
      IdentificationTypesApi<DeSerializersT>,
      IssuingAgenciesApi<DeSerializersT>,
      PayrollEmployeesApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      PAYROLL_EMPLOYEE_V_2: new OneToManyLink(
        'PayrollEmployeeV2',
        this,
        linkedApis[0]
      ),
      PERSON: new OneToOneLink('Person', this, linkedApis[1]),
      IDENTIFICATION_TYPE: new OneToOneLink(
        'IdentificationType',
        this,
        linkedApis[2]
      ),
      ISSUING_AGENCY: new OneToOneLink('IssuingAgency', this, linkedApis[3]),
      PAYROLL_EMPLOYEE: new OneToManyLink(
        'PayrollEmployee',
        this,
        linkedApis[4]
      )
    };
    return this;
  }

  entityConstructor = PersonIdentificationNumbers;

  requestBuilder(): PersonIdentificationNumbersRequestBuilder<DeSerializersT> {
    return new PersonIdentificationNumbersRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    PersonIdentificationNumbers<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      PersonIdentificationNumbers<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    PersonIdentificationNumbers<DeSerializersT>,
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
    typeof PersonIdentificationNumbers,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        PersonIdentificationNumbers,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    PARTY_NUMBER: OrderableEdmTypeField<
      PersonIdentificationNumbers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    IDENTIFICATION_TYPE_ID: OrderableEdmTypeField<
      PersonIdentificationNumbers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    IDENTIFICATION_NUMBER: OrderableEdmTypeField<
      PersonIdentificationNumbers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    EXPIRATION_DATE: OrderableEdmTypeField<
      PersonIdentificationNumbers<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      PersonIdentificationNumbers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_PRIMARY: EnumField<
      PersonIdentificationNumbers<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ISSUED_DATE: OrderableEdmTypeField<
      PersonIdentificationNumbers<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    ISSUING_AGENCY_ID: OrderableEdmTypeField<
      PersonIdentificationNumbers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ENTRY_TYPE: OrderableEdmTypeField<
      PersonIdentificationNumbers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link payrollEmployeeV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PAYROLL_EMPLOYEE_V_2: OneToManyLink<
      PersonIdentificationNumbers<DeSerializersT>,
      DeSerializersT,
      PayrollEmployeesV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link person} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PERSON: OneToOneLink<
      PersonIdentificationNumbers<DeSerializersT>,
      DeSerializersT,
      PeopleApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link identificationType} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    IDENTIFICATION_TYPE: OneToOneLink<
      PersonIdentificationNumbers<DeSerializersT>,
      DeSerializersT,
      IdentificationTypesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link issuingAgency} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ISSUING_AGENCY: OneToOneLink<
      PersonIdentificationNumbers<DeSerializersT>,
      DeSerializersT,
      IssuingAgenciesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link payrollEmployee} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PAYROLL_EMPLOYEE: OneToManyLink<
      PersonIdentificationNumbers<DeSerializersT>,
      DeSerializersT,
      PayrollEmployeesApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<PersonIdentificationNumbers<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link partyNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PARTY_NUMBER: fieldBuilder.buildEdmTypeField(
          'PartyNumber',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link identificationTypeId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IDENTIFICATION_TYPE_ID: fieldBuilder.buildEdmTypeField(
          'IdentificationTypeId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link identificationNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IDENTIFICATION_NUMBER: fieldBuilder.buildEdmTypeField(
          'IdentificationNumber',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link expirationDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXPIRATION_DATE: fieldBuilder.buildEdmTypeField(
          'ExpirationDate',
          'Edm.DateTimeOffset',
          false
        ),
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
         * Static representation of the {@link isPrimary} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_PRIMARY: fieldBuilder.buildEnumField('IsPrimary', NoYes, true),
        /**
         * Static representation of the {@link issuedDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ISSUED_DATE: fieldBuilder.buildEdmTypeField(
          'IssuedDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link issuingAgencyId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ISSUING_AGENCY_ID: fieldBuilder.buildEdmTypeField(
          'IssuingAgencyId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link entryType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ENTRY_TYPE: fieldBuilder.buildEdmTypeField(
          'EntryType',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', PersonIdentificationNumbers)
      };
    }

    return this._schema;
  }
}
