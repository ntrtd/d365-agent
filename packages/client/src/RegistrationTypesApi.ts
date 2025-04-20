/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RegistrationTypes } from './RegistrationTypes';
import { RegistrationTypesRequestBuilder } from './RegistrationTypesRequestBuilder';
import { NoYes } from './NoYes';
import { PartyTypeRestriction } from './PartyTypeRestriction';
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
export class RegistrationTypesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<RegistrationTypes<DeSerializersT>, DeSerializersT>
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
  ): RegistrationTypesApi<DeSerializersT> {
    return new RegistrationTypesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = RegistrationTypes;

  requestBuilder(): RegistrationTypesRequestBuilder<DeSerializersT> {
    return new RegistrationTypesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    RegistrationTypes<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<RegistrationTypes<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<RegistrationTypes<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<
    typeof RegistrationTypes,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        RegistrationTypes,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    REGISTRATION_TYPE: OrderableEdmTypeField<
      RegistrationTypes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    COUNTRY_REGION_ID: OrderableEdmTypeField<
      RegistrationTypes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      RegistrationTypes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REGISTRATION_AUTHORITY: OrderableEdmTypeField<
      RegistrationTypes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_PRIMARY_ADDRESS_RESTRICTED: EnumField<
      RegistrationTypes<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    IS_REGISTRATION_NUMBER_UPDATEABLE: EnumField<
      RegistrationTypes<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    PARTY_TYPE_RESTRICTION: EnumField<
      RegistrationTypes<DeSerializers>,
      DeSerializersT,
      PartyTypeRestriction,
      true,
      true
    >;
    FORMAT: OrderableEdmTypeField<
      RegistrationTypes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_REGISTRATION_NUMBER_UNIQUE: EnumField<
      RegistrationTypes<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ALL_FIELDS: AllFields<RegistrationTypes<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link registrationType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REGISTRATION_TYPE: fieldBuilder.buildEdmTypeField(
          'RegistrationType',
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
         * Static representation of the {@link description} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'Description',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link registrationAuthority} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REGISTRATION_AUTHORITY: fieldBuilder.buildEdmTypeField(
          'RegistrationAuthority',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link isPrimaryAddressRestricted} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_PRIMARY_ADDRESS_RESTRICTED: fieldBuilder.buildEnumField(
          'IsPrimaryAddressRestricted',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link isRegistrationNumberUpdateable} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_REGISTRATION_NUMBER_UPDATEABLE: fieldBuilder.buildEnumField(
          'IsRegistrationNumberUpdateable',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link partyTypeRestriction} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PARTY_TYPE_RESTRICTION: fieldBuilder.buildEnumField(
          'PartyTypeRestriction',
          PartyTypeRestriction,
          true
        ),
        /**
         * Static representation of the {@link format} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FORMAT: fieldBuilder.buildEdmTypeField('Format', 'Edm.String', true),
        /**
         * Static representation of the {@link isRegistrationNumberUnique} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_REGISTRATION_NUMBER_UNIQUE: fieldBuilder.buildEnumField(
          'IsRegistrationNumberUnique',
          NoYes,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', RegistrationTypes)
      };
    }

    return this._schema;
  }
}
