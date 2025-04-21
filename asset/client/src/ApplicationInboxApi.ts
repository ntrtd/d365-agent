/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ApplicationInbox } from './ApplicationInbox';
import { ApplicationInboxRequestBuilder } from './ApplicationInboxRequestBuilder';
import { HrmApplicationBasketCreatedSource } from './HrmApplicationBasketCreatedSource';
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
export class ApplicationInboxApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<ApplicationInbox<DeSerializersT>, DeSerializersT>
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
  ): ApplicationInboxApi<DeSerializersT> {
    return new ApplicationInboxApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = ApplicationInbox;

  requestBuilder(): ApplicationInboxRequestBuilder<DeSerializersT> {
    return new ApplicationInboxRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    ApplicationInbox<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<ApplicationInbox<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<ApplicationInbox<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof ApplicationInbox, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        ApplicationInbox,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      ApplicationInbox<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    APPLICANT: OrderableEdmTypeField<
      ApplicationInbox<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    RECRUITMENT_PROJECT: OrderableEdmTypeField<
      ApplicationInbox<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    APARTMENT: OrderableEdmTypeField<
      ApplicationInbox<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EXPIRE_DATE: OrderableEdmTypeField<
      ApplicationInbox<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    ZIP_CODE: OrderableEdmTypeField<
      ApplicationInbox<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    STREET_CODE: OrderableEdmTypeField<
      ApplicationInbox<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BUILDING: OrderableEdmTypeField<
      ApplicationInbox<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SETTLEMENT: OrderableEdmTypeField<
      ApplicationInbox<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PERSON_ID: OrderableEdmTypeField<
      ApplicationInbox<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EMAIL_EXTERNAL: OrderableEdmTypeField<
      ApplicationInbox<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TOWN_ID: OrderableEdmTypeField<
      ApplicationInbox<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COUNTRY_REGION: OrderableEdmTypeField<
      ApplicationInbox<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    GROUP_OF_HOUSES: OrderableEdmTypeField<
      ApplicationInbox<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    NAME: OrderableEdmTypeField<
      ApplicationInbox<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CREATED_SOURCE: EnumField<
      ApplicationInbox<DeSerializers>,
      DeSerializersT,
      HrmApplicationBasketCreatedSource,
      true,
      true
    >;
    COUNTY: OrderableEdmTypeField<
      ApplicationInbox<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MOBILE_PHONE: OrderableEdmTypeField<
      ApplicationInbox<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CITY: OrderableEdmTypeField<
      ApplicationInbox<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TELEPHONE: OrderableEdmTypeField<
      ApplicationInbox<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    STREET: OrderableEdmTypeField<
      ApplicationInbox<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    STATE: OrderableEdmTypeField<
      ApplicationInbox<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<ApplicationInbox<DeSerializers>>;
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
         * Static representation of the {@link applicant} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        APPLICANT: fieldBuilder.buildEdmTypeField(
          'Applicant',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link recruitmentProject} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RECRUITMENT_PROJECT: fieldBuilder.buildEdmTypeField(
          'RecruitmentProject',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link apartment} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        APARTMENT: fieldBuilder.buildEdmTypeField(
          'Apartment',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link expireDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXPIRE_DATE: fieldBuilder.buildEdmTypeField(
          'ExpireDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link zipCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ZIP_CODE: fieldBuilder.buildEdmTypeField('ZipCode', 'Edm.String', true),
        /**
         * Static representation of the {@link streetCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STREET_CODE: fieldBuilder.buildEdmTypeField(
          'StreetCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link building} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BUILDING: fieldBuilder.buildEdmTypeField(
          'Building',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link settlement} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SETTLEMENT: fieldBuilder.buildEdmTypeField(
          'Settlement',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link personId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PERSON_ID: fieldBuilder.buildEdmTypeField(
          'PersonId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link emailExternal} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EMAIL_EXTERNAL: fieldBuilder.buildEdmTypeField(
          'EmailExternal',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link townId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TOWN_ID: fieldBuilder.buildEdmTypeField('TownId', 'Edm.String', true),
        /**
         * Static representation of the {@link countryRegion} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COUNTRY_REGION: fieldBuilder.buildEdmTypeField(
          'CountryRegion',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link groupOfHouses} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GROUP_OF_HOUSES: fieldBuilder.buildEdmTypeField(
          'GroupOfHouses',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link name} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NAME: fieldBuilder.buildEdmTypeField('Name', 'Edm.String', true),
        /**
         * Static representation of the {@link createdSource} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CREATED_SOURCE: fieldBuilder.buildEnumField(
          'CreatedSource',
          HrmApplicationBasketCreatedSource,
          true
        ),
        /**
         * Static representation of the {@link county} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COUNTY: fieldBuilder.buildEdmTypeField('County', 'Edm.String', true),
        /**
         * Static representation of the {@link mobilePhone} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MOBILE_PHONE: fieldBuilder.buildEdmTypeField(
          'MobilePhone',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link city} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CITY: fieldBuilder.buildEdmTypeField('City', 'Edm.String', true),
        /**
         * Static representation of the {@link telephone} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TELEPHONE: fieldBuilder.buildEdmTypeField(
          'Telephone',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link street} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STREET: fieldBuilder.buildEdmTypeField('Street', 'Edm.String', true),
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
        ALL_FIELDS: new AllFields('*', ApplicationInbox)
      };
    }

    return this._schema;
  }
}
