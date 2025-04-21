/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { PayIntV1WorkerContacts } from './PayIntV1WorkerContacts';
import { PayIntV1WorkerContactsRequestBuilder } from './PayIntV1WorkerContactsRequestBuilder';
import { LogisticsElectronicAddressMethodType } from './LogisticsElectronicAddressMethodType';
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
  EnumField
} from '@sap-cloud-sdk/odata-v4';
export class PayIntV1WorkerContactsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<PayIntV1WorkerContacts<DeSerializersT>, DeSerializersT>
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
  ): PayIntV1WorkerContactsApi<DeSerializersT> {
    return new PayIntV1WorkerContactsApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = PayIntV1WorkerContacts;

  requestBuilder(): PayIntV1WorkerContactsRequestBuilder<DeSerializersT> {
    return new PayIntV1WorkerContactsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    PayIntV1WorkerContacts<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      PayIntV1WorkerContacts<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    PayIntV1WorkerContacts<DeSerializersT>,
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
    typeof PayIntV1WorkerContacts,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        PayIntV1WorkerContacts,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    PERSONNEL_NUMBER: OrderableEdmTypeField<
      PayIntV1WorkerContacts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    TYPE: EnumField<
      PayIntV1WorkerContacts<DeSerializers>,
      DeSerializersT,
      LogisticsElectronicAddressMethodType,
      true,
      true
    >;
    LOCATOR: OrderableEdmTypeField<
      PayIntV1WorkerContacts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      PayIntV1WorkerContacts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    IS_PRIVATE: EnumField<
      PayIntV1WorkerContacts<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    IS_PRIMARY: EnumField<
      PayIntV1WorkerContacts<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    PARTY_NUMBER: OrderableEdmTypeField<
      PayIntV1WorkerContacts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LOCATION_ID: OrderableEdmTypeField<
      PayIntV1WorkerContacts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PURPOSE: OrderableEdmTypeField<
      PayIntV1WorkerContacts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_MOBILE_PHONE: EnumField<
      PayIntV1WorkerContacts<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    LOCATOR_EXTENSION: OrderableEdmTypeField<
      PayIntV1WorkerContacts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COUNTRY_REGION_CODE: OrderableEdmTypeField<
      PayIntV1WorkerContacts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<PayIntV1WorkerContacts<DeSerializers>>;
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
         * Static representation of the {@link type} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TYPE: fieldBuilder.buildEnumField(
          'Type',
          LogisticsElectronicAddressMethodType,
          true
        ),
        /**
         * Static representation of the {@link locator} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LOCATOR: fieldBuilder.buildEdmTypeField('Locator', 'Edm.String', false),
        /**
         * Static representation of the {@link description} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'Description',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link isPrivate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_PRIVATE: fieldBuilder.buildEnumField('IsPrivate', NoYes, true),
        /**
         * Static representation of the {@link isPrimary} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_PRIMARY: fieldBuilder.buildEnumField('IsPrimary', NoYes, true),
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
         * Static representation of the {@link locationId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LOCATION_ID: fieldBuilder.buildEdmTypeField(
          'LocationId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link purpose} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PURPOSE: fieldBuilder.buildEdmTypeField('Purpose', 'Edm.String', true),
        /**
         * Static representation of the {@link isMobilePhone} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_MOBILE_PHONE: fieldBuilder.buildEnumField(
          'IsMobilePhone',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link locatorExtension} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LOCATOR_EXTENSION: fieldBuilder.buildEdmTypeField(
          'LocatorExtension',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link countryRegionCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COUNTRY_REGION_CODE: fieldBuilder.buildEdmTypeField(
          'CountryRegionCode',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', PayIntV1WorkerContacts)
      };
    }

    return this._schema;
  }
}
