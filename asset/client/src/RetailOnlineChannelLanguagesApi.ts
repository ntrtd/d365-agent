/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RetailOnlineChannelLanguages } from './RetailOnlineChannelLanguages';
import { RetailOnlineChannelLanguagesRequestBuilder } from './RetailOnlineChannelLanguagesRequestBuilder';
import { OnlineChannelsApi } from './OnlineChannelsApi';
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
  OneToOneLink
} from '@sap-cloud-sdk/odata-v4';
export class RetailOnlineChannelLanguagesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<RetailOnlineChannelLanguages<DeSerializersT>, DeSerializersT>
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
  ): RetailOnlineChannelLanguagesApi<DeSerializersT> {
    return new RetailOnlineChannelLanguagesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link onlineChannel} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ONLINE_CHANNEL: OneToOneLink<
      RetailOnlineChannelLanguages<DeSerializersT>,
      DeSerializersT,
      OnlineChannelsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [OnlineChannelsApi<DeSerializersT>]
  ): this {
    this.navigationPropertyFields = {
      ONLINE_CHANNEL: new OneToOneLink('OnlineChannel', this, linkedApis[0])
    };
    return this;
  }

  entityConstructor = RetailOnlineChannelLanguages;

  requestBuilder(): RetailOnlineChannelLanguagesRequestBuilder<DeSerializersT> {
    return new RetailOnlineChannelLanguagesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    RetailOnlineChannelLanguages<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      RetailOnlineChannelLanguages<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    RetailOnlineChannelLanguages<DeSerializersT>,
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
    typeof RetailOnlineChannelLanguages,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        RetailOnlineChannelLanguages,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    LANGUAGE_ID: OrderableEdmTypeField<
      RetailOnlineChannelLanguages<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    OPERATING_UNIT_NUMBER: OrderableEdmTypeField<
      RetailOnlineChannelLanguages<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    IS_DEFAULT: EnumField<
      RetailOnlineChannelLanguages<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link onlineChannel} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ONLINE_CHANNEL: OneToOneLink<
      RetailOnlineChannelLanguages<DeSerializersT>,
      DeSerializersT,
      OnlineChannelsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<RetailOnlineChannelLanguages<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
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
         * Static representation of the {@link operatingUnitNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OPERATING_UNIT_NUMBER: fieldBuilder.buildEdmTypeField(
          'OperatingUnitNumber',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link isDefault} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_DEFAULT: fieldBuilder.buildEnumField('IsDefault', NoYes, true),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', RetailOnlineChannelLanguages)
      };
    }

    return this._schema;
  }
}
