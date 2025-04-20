/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { MediaTypes } from './MediaTypes';
import { MediaTypesRequestBuilder } from './MediaTypesRequestBuilder';
import { MediaApi } from './MediaApi';
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
  OneToManyLink
} from '@sap-cloud-sdk/odata-v4';
export class MediaTypesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<MediaTypes<DeSerializersT>, DeSerializersT>
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
  ): MediaTypesApi<DeSerializersT> {
    return new MediaTypesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link media} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MEDIA: OneToManyLink<
      MediaTypes<DeSerializersT>,
      DeSerializersT,
      MediaApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(linkedApis: [MediaApi<DeSerializersT>]): this {
    this.navigationPropertyFields = {
      MEDIA: new OneToManyLink('Media', this, linkedApis[0])
    };
    return this;
  }

  entityConstructor = MediaTypes;

  requestBuilder(): MediaTypesRequestBuilder<DeSerializersT> {
    return new MediaTypesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    MediaTypes<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<MediaTypes<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<MediaTypes<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof MediaTypes, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(MediaTypes, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      MediaTypes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    MEDIA_TYPE_ID: OrderableEdmTypeField<
      MediaTypes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      MediaTypes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link media} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MEDIA: OneToManyLink<
      MediaTypes<DeSerializersT>,
      DeSerializersT,
      MediaApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<MediaTypes<DeSerializers>>;
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
         * Static representation of the {@link mediaTypeId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MEDIA_TYPE_ID: fieldBuilder.buildEdmTypeField(
          'MediaTypeId',
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
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', MediaTypes)
      };
    }

    return this._schema;
  }
}
