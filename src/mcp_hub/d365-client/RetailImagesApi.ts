/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RetailImages } from './RetailImages';
import { RetailImagesRequestBuilder } from './RetailImagesRequestBuilder';
import { RetailTillLayoutImageZonesApi } from './RetailTillLayoutImageZonesApi';
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
  EdmTypeField,
  OneToManyLink
} from '@sap-cloud-sdk/odata-v4';
export class RetailImagesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<RetailImages<DeSerializersT>, DeSerializersT>
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
  ): RetailImagesApi<DeSerializersT> {
    return new RetailImagesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link retailTillLayoutImageZone} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RETAIL_TILL_LAYOUT_IMAGE_ZONE: OneToManyLink<
      RetailImages<DeSerializersT>,
      DeSerializersT,
      RetailTillLayoutImageZonesApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [RetailTillLayoutImageZonesApi<DeSerializersT>]
  ): this {
    this.navigationPropertyFields = {
      RETAIL_TILL_LAYOUT_IMAGE_ZONE: new OneToManyLink(
        'RetailTillLayoutImageZone',
        this,
        linkedApis[0]
      )
    };
    return this;
  }

  entityConstructor = RetailImages;

  requestBuilder(): RetailImagesRequestBuilder<DeSerializersT> {
    return new RetailImagesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    RetailImages<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<RetailImages<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<RetailImages<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof RetailImages, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(RetailImages, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    PICTURE_ID: OrderableEdmTypeField<
      RetailImages<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    PICTURE: EdmTypeField<
      RetailImages<DeSerializers>,
      DeSerializersT,
      'Edm.Binary',
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link retailTillLayoutImageZone} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RETAIL_TILL_LAYOUT_IMAGE_ZONE: OneToManyLink<
      RetailImages<DeSerializersT>,
      DeSerializersT,
      RetailTillLayoutImageZonesApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<RetailImages<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link pictureId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PICTURE_ID: fieldBuilder.buildEdmTypeField(
          'PictureId',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link picture} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PICTURE: fieldBuilder.buildEdmTypeField('Picture', 'Edm.Binary', true),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', RetailImages)
      };
    }

    return this._schema;
  }
}
