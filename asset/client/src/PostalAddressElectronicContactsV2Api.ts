/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { PostalAddressElectronicContactsV2 } from './PostalAddressElectronicContactsV2';
import { PostalAddressElectronicContactsV2RequestBuilder } from './PostalAddressElectronicContactsV2RequestBuilder';
import { CdsPostalAddressLocationsApi } from './CdsPostalAddressLocationsApi';
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
export class PostalAddressElectronicContactsV2Api<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<PostalAddressElectronicContactsV2<DeSerializersT>, DeSerializersT>
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
  ): PostalAddressElectronicContactsV2Api<DeSerializersT> {
    return new PostalAddressElectronicContactsV2Api(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link cdsPostalAddressLocation} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CDS_POSTAL_ADDRESS_LOCATION: OneToOneLink<
      PostalAddressElectronicContactsV2<DeSerializersT>,
      DeSerializersT,
      CdsPostalAddressLocationsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [CdsPostalAddressLocationsApi<DeSerializersT>]
  ): this {
    this.navigationPropertyFields = {
      CDS_POSTAL_ADDRESS_LOCATION: new OneToOneLink(
        'CDSPostalAddressLocation',
        this,
        linkedApis[0]
      )
    };
    return this;
  }

  entityConstructor = PostalAddressElectronicContactsV2;

  requestBuilder(): PostalAddressElectronicContactsV2RequestBuilder<DeSerializersT> {
    return new PostalAddressElectronicContactsV2RequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    PostalAddressElectronicContactsV2<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      PostalAddressElectronicContactsV2<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    PostalAddressElectronicContactsV2<DeSerializersT>,
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
    typeof PostalAddressElectronicContactsV2,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        PostalAddressElectronicContactsV2,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    POSTAL_ADDRESS_LOCATION_ID: OrderableEdmTypeField<
      PostalAddressElectronicContactsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ELECTRONIC_ADDRESS_ID: OrderableEdmTypeField<
      PostalAddressElectronicContactsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    IS_PRIVATE: EnumField<
      PostalAddressElectronicContactsV2<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      PostalAddressElectronicContactsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_PRIMARY: EnumField<
      PostalAddressElectronicContactsV2<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    EXTENSION: OrderableEdmTypeField<
      PostalAddressElectronicContactsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LOCATION_ID: OrderableEdmTypeField<
      PostalAddressElectronicContactsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LOCATOR: OrderableEdmTypeField<
      PostalAddressElectronicContactsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TYPE: EnumField<
      PostalAddressElectronicContactsV2<DeSerializers>,
      DeSerializersT,
      LogisticsElectronicAddressMethodType,
      true,
      true
    >;
    PURPOSE: OrderableEdmTypeField<
      PostalAddressElectronicContactsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_MOBILE: EnumField<
      PostalAddressElectronicContactsV2<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    IS_INSTANT_MESSAGE: EnumField<
      PostalAddressElectronicContactsV2<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    INTERNATIONAL_CALLING_CODE: OrderableEdmTypeField<
      PostalAddressElectronicContactsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RETAIL_MARKETING_OPT_IN: EnumField<
      PostalAddressElectronicContactsV2<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link cdsPostalAddressLocation} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CDS_POSTAL_ADDRESS_LOCATION: OneToOneLink<
      PostalAddressElectronicContactsV2<DeSerializersT>,
      DeSerializersT,
      CdsPostalAddressLocationsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<PostalAddressElectronicContactsV2<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link postalAddressLocationId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        POSTAL_ADDRESS_LOCATION_ID: fieldBuilder.buildEdmTypeField(
          'PostalAddressLocationId',
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
         * Static representation of the {@link isPrivate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_PRIVATE: fieldBuilder.buildEnumField('IsPrivate', NoYes, true),
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
         * Static representation of the {@link extension} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXTENSION: fieldBuilder.buildEdmTypeField(
          'Extension',
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
         * Static representation of the {@link locator} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LOCATOR: fieldBuilder.buildEdmTypeField('Locator', 'Edm.String', true),
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
         * Static representation of the {@link purpose} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PURPOSE: fieldBuilder.buildEdmTypeField('Purpose', 'Edm.String', true),
        /**
         * Static representation of the {@link isMobile} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_MOBILE: fieldBuilder.buildEnumField('IsMobile', NoYes, true),
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
         * Static representation of the {@link internationalCallingCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INTERNATIONAL_CALLING_CODE: fieldBuilder.buildEdmTypeField(
          'InternationalCallingCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link retailMarketingOptIn} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RETAIL_MARKETING_OPT_IN: fieldBuilder.buildEnumField(
          'RetailMarketingOptIn',
          NoYes,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', PostalAddressElectronicContactsV2)
      };
    }

    return this._schema;
  }
}
