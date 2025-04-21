/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { PartyContactsV3 } from './PartyContactsV3';
import { PartyContactsV3RequestBuilder } from './PartyContactsV3RequestBuilder';
import { CdsPartiesApi } from './CdsPartiesApi';
import { NoYes } from './NoYes';
import { LogisticsElectronicAddressMethodType } from './LogisticsElectronicAddressMethodType';
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
export class PartyContactsV3Api<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<PartyContactsV3<DeSerializersT>, DeSerializersT>
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
  ): PartyContactsV3Api<DeSerializersT> {
    return new PartyContactsV3Api(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link cdsParty} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CDS_PARTY: OneToOneLink<
      PartyContactsV3<DeSerializersT>,
      DeSerializersT,
      CdsPartiesApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(linkedApis: [CdsPartiesApi<DeSerializersT>]): this {
    this.navigationPropertyFields = {
      CDS_PARTY: new OneToOneLink('CDSParty', this, linkedApis[0])
    };
    return this;
  }

  entityConstructor = PartyContactsV3;

  requestBuilder(): PartyContactsV3RequestBuilder<DeSerializersT> {
    return new PartyContactsV3RequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    PartyContactsV3<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<PartyContactsV3<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<PartyContactsV3<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof PartyContactsV3, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        PartyContactsV3,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    PARTY_NUMBER: OrderableEdmTypeField<
      PartyContactsV3<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ELECTRONIC_ADDRESS_ID: OrderableEdmTypeField<
      PartyContactsV3<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    IS_INSTANT_MESSAGE: EnumField<
      PartyContactsV3<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    IS_MOBILE_PHONE: EnumField<
      PartyContactsV3<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    COUNTRY_REGION_CODE: OrderableEdmTypeField<
      PartyContactsV3<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PURPOSE: OrderableEdmTypeField<
      PartyContactsV3<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LOCATOR: OrderableEdmTypeField<
      PartyContactsV3<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LOCATOR_EXTENSION: OrderableEdmTypeField<
      PartyContactsV3<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LOCATION_ID: OrderableEdmTypeField<
      PartyContactsV3<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_PRIMARY: EnumField<
      PartyContactsV3<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      PartyContactsV3<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TYPE: EnumField<
      PartyContactsV3<DeSerializers>,
      DeSerializersT,
      LogisticsElectronicAddressMethodType,
      true,
      true
    >;
    IS_PRIVATE: EnumField<
      PartyContactsV3<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link cdsParty} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CDS_PARTY: OneToOneLink<
      PartyContactsV3<DeSerializersT>,
      DeSerializersT,
      CdsPartiesApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<PartyContactsV3<DeSerializers>>;
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
         * Static representation of the {@link electronicAddressId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ELECTRONIC_ADDRESS_ID: fieldBuilder.buildEdmTypeField(
          'ElectronicAddressId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link isInstantMessage} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_INSTANT_MESSAGE: fieldBuilder.buildEnumField(
          'IsInstantMessage',
          NoYes,
          true
        ),
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
         * Static representation of the {@link countryRegionCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COUNTRY_REGION_CODE: fieldBuilder.buildEdmTypeField(
          'CountryRegionCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link purpose} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PURPOSE: fieldBuilder.buildEdmTypeField('Purpose', 'Edm.String', true),
        /**
         * Static representation of the {@link locator} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LOCATOR: fieldBuilder.buildEdmTypeField('Locator', 'Edm.String', true),
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
         * Static representation of the {@link locationId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LOCATION_ID: fieldBuilder.buildEdmTypeField(
          'LocationId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link isPrimary} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_PRIMARY: fieldBuilder.buildEnumField('IsPrimary', NoYes, true),
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
         * Static representation of the {@link type} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TYPE: fieldBuilder.buildEnumField(
          'Type',
          LogisticsElectronicAddressMethodType,
          true
        ),
        /**
         * Static representation of the {@link isPrivate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_PRIVATE: fieldBuilder.buildEnumField('IsPrivate', NoYes, true),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', PartyContactsV3)
      };
    }

    return this._schema;
  }
}
