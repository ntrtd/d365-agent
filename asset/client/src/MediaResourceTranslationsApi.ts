/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { MediaResourceTranslations } from './MediaResourceTranslations';
import { MediaResourceTranslationsRequestBuilder } from './MediaResourceTranslationsRequestBuilder';
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
export class MediaResourceTranslationsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<MediaResourceTranslations<DeSerializersT>, DeSerializersT>
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
  ): MediaResourceTranslationsApi<DeSerializersT> {
    return new MediaResourceTranslationsApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = MediaResourceTranslations;

  requestBuilder(): MediaResourceTranslationsRequestBuilder<DeSerializersT> {
    return new MediaResourceTranslationsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    MediaResourceTranslations<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      MediaResourceTranslations<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    MediaResourceTranslations<DeSerializersT>,
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
    typeof MediaResourceTranslations,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        MediaResourceTranslations,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    MEDIA_RESOURCE: OrderableEdmTypeField<
      MediaResourceTranslations<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    LANGUAGE_ID: OrderableEdmTypeField<
      MediaResourceTranslations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ALT_TEXT: OrderableEdmTypeField<
      MediaResourceTranslations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<MediaResourceTranslations<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link mediaResource} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MEDIA_RESOURCE: fieldBuilder.buildEdmTypeField(
          'MediaResource',
          'Edm.Int64',
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
         * Static representation of the {@link altText} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ALT_TEXT: fieldBuilder.buildEdmTypeField('AltText', 'Edm.String', true),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', MediaResourceTranslations)
      };
    }

    return this._schema;
  }
}
