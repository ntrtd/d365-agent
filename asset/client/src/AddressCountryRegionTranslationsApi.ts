/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { AddressCountryRegionTranslations } from './AddressCountryRegionTranslations';
import { AddressCountryRegionTranslationsRequestBuilder } from './AddressCountryRegionTranslationsRequestBuilder';
import { AddressCountryRegionsApi } from './AddressCountryRegionsApi';
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
  OneToOneLink
} from '@sap-cloud-sdk/odata-v4';
export class AddressCountryRegionTranslationsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<AddressCountryRegionTranslations<DeSerializersT>, DeSerializersT>
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
  ): AddressCountryRegionTranslationsApi<DeSerializersT> {
    return new AddressCountryRegionTranslationsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link addressCountryRegion} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ADDRESS_COUNTRY_REGION: OneToOneLink<
      AddressCountryRegionTranslations<DeSerializersT>,
      DeSerializersT,
      AddressCountryRegionsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [AddressCountryRegionsApi<DeSerializersT>]
  ): this {
    this.navigationPropertyFields = {
      ADDRESS_COUNTRY_REGION: new OneToOneLink(
        'AddressCountryRegion',
        this,
        linkedApis[0]
      )
    };
    return this;
  }

  entityConstructor = AddressCountryRegionTranslations;

  requestBuilder(): AddressCountryRegionTranslationsRequestBuilder<DeSerializersT> {
    return new AddressCountryRegionTranslationsRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    AddressCountryRegionTranslations<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      AddressCountryRegionTranslations<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    AddressCountryRegionTranslations<DeSerializersT>,
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
    typeof AddressCountryRegionTranslations,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        AddressCountryRegionTranslations,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    COUNTRY_REGION_ID: OrderableEdmTypeField<
      AddressCountryRegionTranslations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LANGUAGE_ID: OrderableEdmTypeField<
      AddressCountryRegionTranslations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LONG_NAME: OrderableEdmTypeField<
      AddressCountryRegionTranslations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SHORT_NAME: OrderableEdmTypeField<
      AddressCountryRegionTranslations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link addressCountryRegion} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ADDRESS_COUNTRY_REGION: OneToOneLink<
      AddressCountryRegionTranslations<DeSerializersT>,
      DeSerializersT,
      AddressCountryRegionsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<AddressCountryRegionTranslations<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
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
         * Static representation of the {@link languageId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LANGUAGE_ID: fieldBuilder.buildEdmTypeField(
          'LanguageId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link longName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LONG_NAME: fieldBuilder.buildEdmTypeField(
          'LongName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link shortName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHORT_NAME: fieldBuilder.buildEdmTypeField(
          'ShortName',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', AddressCountryRegionTranslations)
      };
    }

    return this._schema;
  }
}
