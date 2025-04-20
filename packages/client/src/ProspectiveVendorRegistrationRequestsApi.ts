/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ProspectiveVendorRegistrationRequests } from './ProspectiveVendorRegistrationRequests';
import { ProspectiveVendorRegistrationRequestsRequestBuilder } from './ProspectiveVendorRegistrationRequestsRequestBuilder';
import { VendProspectiveVendorRegistrationRequestState } from './VendProspectiveVendorRegistrationRequestState';
import { DirPartyBaseType } from './DirPartyBaseType';
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
export class ProspectiveVendorRegistrationRequestsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<
      ProspectiveVendorRegistrationRequests<DeSerializersT>,
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
  ): ProspectiveVendorRegistrationRequestsApi<DeSerializersT> {
    return new ProspectiveVendorRegistrationRequestsApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = ProspectiveVendorRegistrationRequests;

  requestBuilder(): ProspectiveVendorRegistrationRequestsRequestBuilder<DeSerializersT> {
    return new ProspectiveVendorRegistrationRequestsRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    ProspectiveVendorRegistrationRequests<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      ProspectiveVendorRegistrationRequests<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    ProspectiveVendorRegistrationRequests<DeSerializersT>,
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
    typeof ProspectiveVendorRegistrationRequests,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        ProspectiveVendorRegistrationRequests,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    EMAIL_ADDRESS: OrderableEdmTypeField<
      ProspectiveVendorRegistrationRequests<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    REQUEST_STATE: EnumField<
      ProspectiveVendorRegistrationRequests<DeSerializers>,
      DeSerializersT,
      VendProspectiveVendorRegistrationRequestState,
      true,
      true
    >;
    BUSINESS_JUSTIFICATION_DESCRIPTION: OrderableEdmTypeField<
      ProspectiveVendorRegistrationRequests<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SUBMITTED_DATE: OrderableEdmTypeField<
      ProspectiveVendorRegistrationRequests<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    BUSINESS_LINE_DESCRIPTION: OrderableEdmTypeField<
      ProspectiveVendorRegistrationRequests<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COMPANY_NAME: OrderableEdmTypeField<
      ProspectiveVendorRegistrationRequests<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PROCESSED_DATE: OrderableEdmTypeField<
      ProspectiveVendorRegistrationRequests<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    LANGUAGE_ID: OrderableEdmTypeField<
      ProspectiveVendorRegistrationRequests<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ORGANIZATION_NUMBER: OrderableEdmTypeField<
      ProspectiveVendorRegistrationRequests<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CONTACT_PERSON_LAST_NAME: OrderableEdmTypeField<
      ProspectiveVendorRegistrationRequests<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ORGANIZATION_TYPE: EnumField<
      ProspectiveVendorRegistrationRequests<DeSerializers>,
      DeSerializersT,
      DirPartyBaseType,
      true,
      true
    >;
    USER_REQUEST_ID: OrderableEdmTypeField<
      ProspectiveVendorRegistrationRequests<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REQUEST_COMPANY: OrderableEdmTypeField<
      ProspectiveVendorRegistrationRequests<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CONTACT_PERSON_FIRST_NAME: OrderableEdmTypeField<
      ProspectiveVendorRegistrationRequests<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CONTACT_PERSON_MIDDLE_NAME: OrderableEdmTypeField<
      ProspectiveVendorRegistrationRequests<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<ProspectiveVendorRegistrationRequests<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link emailAddress} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EMAIL_ADDRESS: fieldBuilder.buildEdmTypeField(
          'EmailAddress',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link requestState} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REQUEST_STATE: fieldBuilder.buildEnumField(
          'RequestState',
          VendProspectiveVendorRegistrationRequestState,
          true
        ),
        /**
         * Static representation of the {@link businessJustificationDescription} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BUSINESS_JUSTIFICATION_DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'BusinessJustificationDescription',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link submittedDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUBMITTED_DATE: fieldBuilder.buildEdmTypeField(
          'SubmittedDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link businessLineDescription} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BUSINESS_LINE_DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'BusinessLineDescription',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link companyName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COMPANY_NAME: fieldBuilder.buildEdmTypeField(
          'CompanyName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link processedDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROCESSED_DATE: fieldBuilder.buildEdmTypeField(
          'ProcessedDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link languageId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LANGUAGE_ID: fieldBuilder.buildEdmTypeField(
          'LanguageId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link organizationNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ORGANIZATION_NUMBER: fieldBuilder.buildEdmTypeField(
          'OrganizationNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link contactPersonLastName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONTACT_PERSON_LAST_NAME: fieldBuilder.buildEdmTypeField(
          'ContactPersonLastName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link organizationType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ORGANIZATION_TYPE: fieldBuilder.buildEnumField(
          'OrganizationType',
          DirPartyBaseType,
          true
        ),
        /**
         * Static representation of the {@link userRequestId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        USER_REQUEST_ID: fieldBuilder.buildEdmTypeField(
          'UserRequestId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link requestCompany} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REQUEST_COMPANY: fieldBuilder.buildEdmTypeField(
          'RequestCompany',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link contactPersonFirstName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONTACT_PERSON_FIRST_NAME: fieldBuilder.buildEdmTypeField(
          'ContactPersonFirstName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link contactPersonMiddleName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONTACT_PERSON_MIDDLE_NAME: fieldBuilder.buildEdmTypeField(
          'ContactPersonMiddleName',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', ProspectiveVendorRegistrationRequests)
      };
    }

    return this._schema;
  }
}
