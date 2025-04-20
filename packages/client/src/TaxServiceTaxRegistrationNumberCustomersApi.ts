/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { TaxServiceTaxRegistrationNumberCustomers } from './TaxServiceTaxRegistrationNumberCustomers';
import { TaxServiceTaxRegistrationNumberCustomersRequestBuilder } from './TaxServiceTaxRegistrationNumberCustomersRequestBuilder';
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
  OrderableEdmTypeField
} from '@sap-cloud-sdk/odata-v4';
export class TaxServiceTaxRegistrationNumberCustomersApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<
      TaxServiceTaxRegistrationNumberCustomers<DeSerializersT>,
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
  ): TaxServiceTaxRegistrationNumberCustomersApi<DeSerializersT> {
    return new TaxServiceTaxRegistrationNumberCustomersApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = TaxServiceTaxRegistrationNumberCustomers;

  requestBuilder(): TaxServiceTaxRegistrationNumberCustomersRequestBuilder<DeSerializersT> {
    return new TaxServiceTaxRegistrationNumberCustomersRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    TaxServiceTaxRegistrationNumberCustomers<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      TaxServiceTaxRegistrationNumberCustomers<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    TaxServiceTaxRegistrationNumberCustomers<DeSerializersT>,
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
    typeof TaxServiceTaxRegistrationNumberCustomers,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        TaxServiceTaxRegistrationNumberCustomers,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    TAX_REGSTRATION_TYPE: OrderableEdmTypeField<
      TaxServiceTaxRegistrationNumberCustomers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    VALID_FROM: OrderableEdmTypeField<
      TaxServiceTaxRegistrationNumberCustomers<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    VALID_TO: OrderableEdmTypeField<
      TaxServiceTaxRegistrationNumberCustomers<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    CUST_ACCOUNT_NUM: OrderableEdmTypeField<
      TaxServiceTaxRegistrationNumberCustomers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LEGAL_ENTITY: OrderableEdmTypeField<
      TaxServiceTaxRegistrationNumberCustomers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    COUNTRY_REGION_ID: OrderableEdmTypeField<
      TaxServiceTaxRegistrationNumberCustomers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    REGISTRATION_NUMBER: OrderableEdmTypeField<
      TaxServiceTaxRegistrationNumberCustomers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SECTION: OrderableEdmTypeField<
      TaxServiceTaxRegistrationNumberCustomers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CUST_ACCOUNT_NAME: OrderableEdmTypeField<
      TaxServiceTaxRegistrationNumberCustomers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ISSUER: OrderableEdmTypeField<
      TaxServiceTaxRegistrationNumberCustomers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ISSUE_DATE: OrderableEdmTypeField<
      TaxServiceTaxRegistrationNumberCustomers<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      TaxServiceTaxRegistrationNumberCustomers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<
      TaxServiceTaxRegistrationNumberCustomers<DeSerializers>
    >;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link taxRegstrationType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_REGSTRATION_TYPE: fieldBuilder.buildEdmTypeField(
          'TaxRegstrationType',
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
         * Static representation of the {@link custAccountNum} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUST_ACCOUNT_NUM: fieldBuilder.buildEdmTypeField(
          'CustAccountNum',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link legalEntity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LEGAL_ENTITY: fieldBuilder.buildEdmTypeField(
          'LegalEntity',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link countryRegionId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COUNTRY_REGION_ID: fieldBuilder.buildEdmTypeField(
          'CountryRegionId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link registrationNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REGISTRATION_NUMBER: fieldBuilder.buildEdmTypeField(
          'RegistrationNumber',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link section} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SECTION: fieldBuilder.buildEdmTypeField('Section', 'Edm.String', true),
        /**
         * Static representation of the {@link custAccountName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUST_ACCOUNT_NAME: fieldBuilder.buildEdmTypeField(
          'CustAccountName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link issuer} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ISSUER: fieldBuilder.buildEdmTypeField('Issuer', 'Edm.String', true),
        /**
         * Static representation of the {@link issueDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ISSUE_DATE: fieldBuilder.buildEdmTypeField(
          'IssueDate',
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
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', TaxServiceTaxRegistrationNumberCustomers)
      };
    }

    return this._schema;
  }
}
