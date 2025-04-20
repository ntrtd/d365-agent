/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { AzureAdWorkers } from './AzureAdWorkers';
import { AzureAdWorkersRequestBuilder } from './AzureAdWorkersRequestBuilder';
import { NoYes } from './NoYes';
import { HcmWorkerStatus } from './HcmWorkerStatus';
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
export class AzureAdWorkersApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<AzureAdWorkers<DeSerializersT>, DeSerializersT>
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
  ): AzureAdWorkersApi<DeSerializersT> {
    return new AzureAdWorkersApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = AzureAdWorkers;

  requestBuilder(): AzureAdWorkersRequestBuilder<DeSerializersT> {
    return new AzureAdWorkersRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    AzureAdWorkers<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<AzureAdWorkers<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<AzureAdWorkers<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof AzureAdWorkers, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(AzureAdWorkers, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    EMPLOYEE_ID: OrderableEdmTypeField<
      AzureAdWorkers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    DISPLAY_NAME: OrderableEdmTypeField<
      AzureAdWorkers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COUNTRY: OrderableEdmTypeField<
      AzureAdWorkers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ZIP_CODE: OrderableEdmTypeField<
      AzureAdWorkers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DEPARTMENT: OrderableEdmTypeField<
      AzureAdWorkers<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    GIVEN_NAME: OrderableEdmTypeField<
      AzureAdWorkers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRIMARY_CONTACT_PHONE_IS_MOBILE: EnumField<
      AzureAdWorkers<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    MOST_RECENT_MODIFIED_DATE: OrderableEdmTypeField<
      AzureAdWorkers<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    LAST_NAME: OrderableEdmTypeField<
      AzureAdWorkers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EMAIL: OrderableEdmTypeField<
      AzureAdWorkers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COMMON_NAME: OrderableEdmTypeField<
      AzureAdWorkers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    OFFICE_LOCATION: OrderableEdmTypeField<
      AzureAdWorkers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    STATUS: EnumField<
      AzureAdWorkers<DeSerializers>,
      DeSerializersT,
      HcmWorkerStatus,
      true,
      true
    >;
    JOB_TITLE_ID: OrderableEdmTypeField<
      AzureAdWorkers<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    MANAGER: OrderableEdmTypeField<
      AzureAdWorkers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CITY: OrderableEdmTypeField<
      AzureAdWorkers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MIDDLE_NAME: OrderableEdmTypeField<
      AzureAdWorkers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    JOB_TITLE: OrderableEdmTypeField<
      AzureAdWorkers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TELEPHONENUMBER: OrderableEdmTypeField<
      AzureAdWorkers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    STREET_ADDRESS: OrderableEdmTypeField<
      AzureAdWorkers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    STATE: OrderableEdmTypeField<
      AzureAdWorkers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<AzureAdWorkers<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link employeeId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EMPLOYEE_ID: fieldBuilder.buildEdmTypeField(
          'EmployeeId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link displayName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DISPLAY_NAME: fieldBuilder.buildEdmTypeField(
          'DisplayName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link country} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COUNTRY: fieldBuilder.buildEdmTypeField('Country', 'Edm.String', true),
        /**
         * Static representation of the {@link zipCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ZIP_CODE: fieldBuilder.buildEdmTypeField('ZipCode', 'Edm.String', true),
        /**
         * Static representation of the {@link department} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEPARTMENT: fieldBuilder.buildEdmTypeField(
          'Department',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link givenName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GIVEN_NAME: fieldBuilder.buildEdmTypeField(
          'GivenName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link primaryContactPhoneIsMobile} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIMARY_CONTACT_PHONE_IS_MOBILE: fieldBuilder.buildEnumField(
          'PrimaryContactPhoneIsMobile',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link mostRecentModifiedDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MOST_RECENT_MODIFIED_DATE: fieldBuilder.buildEdmTypeField(
          'MostRecentModifiedDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link lastName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LAST_NAME: fieldBuilder.buildEdmTypeField(
          'LastName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link email} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EMAIL: fieldBuilder.buildEdmTypeField('Email', 'Edm.String', true),
        /**
         * Static representation of the {@link commonName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COMMON_NAME: fieldBuilder.buildEdmTypeField(
          'CommonName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link officeLocation} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OFFICE_LOCATION: fieldBuilder.buildEdmTypeField(
          'OfficeLocation',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link status} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STATUS: fieldBuilder.buildEnumField('Status', HcmWorkerStatus, true),
        /**
         * Static representation of the {@link jobTitleId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        JOB_TITLE_ID: fieldBuilder.buildEdmTypeField(
          'JobTitleId',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link manager} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MANAGER: fieldBuilder.buildEdmTypeField('Manager', 'Edm.String', true),
        /**
         * Static representation of the {@link city} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CITY: fieldBuilder.buildEdmTypeField('City', 'Edm.String', true),
        /**
         * Static representation of the {@link middleName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MIDDLE_NAME: fieldBuilder.buildEdmTypeField(
          'MiddleName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link jobTitle} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        JOB_TITLE: fieldBuilder.buildEdmTypeField(
          'JobTitle',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link telephonenumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TELEPHONENUMBER: fieldBuilder.buildEdmTypeField(
          'Telephonenumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link streetAddress} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STREET_ADDRESS: fieldBuilder.buildEdmTypeField(
          'StreetAddress',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link state} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STATE: fieldBuilder.buildEdmTypeField('State', 'Edm.String', true),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', AzureAdWorkers)
      };
    }

    return this._schema;
  }
}
