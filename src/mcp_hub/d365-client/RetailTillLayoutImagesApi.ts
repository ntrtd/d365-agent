/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RetailTillLayoutImages } from './RetailTillLayoutImages';
import { RetailTillLayoutImagesRequestBuilder } from './RetailTillLayoutImagesRequestBuilder';
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
  EdmTypeField
} from '@sap-cloud-sdk/odata-v4';
export class RetailTillLayoutImagesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<RetailTillLayoutImages<DeSerializersT>, DeSerializersT>
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
  ): RetailTillLayoutImagesApi<DeSerializersT> {
    return new RetailTillLayoutImagesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = RetailTillLayoutImages;

  requestBuilder(): RetailTillLayoutImagesRequestBuilder<DeSerializersT> {
    return new RetailTillLayoutImagesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    RetailTillLayoutImages<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      RetailTillLayoutImages<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    RetailTillLayoutImages<DeSerializersT>,
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
    typeof RetailTillLayoutImages,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        RetailTillLayoutImages,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    LAYOUT_ID: OrderableEdmTypeField<
      RetailTillLayoutImages<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PICTURE_ID: OrderableEdmTypeField<
      RetailTillLayoutImages<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    ZONE_ID: OrderableEdmTypeField<
      RetailTillLayoutImages<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LAYOUT_SIZE_ID: OrderableEdmTypeField<
      RetailTillLayoutImages<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ZONE_NAME: OrderableEdmTypeField<
      RetailTillLayoutImages<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PICTURE: EdmTypeField<
      RetailTillLayoutImages<DeSerializers>,
      DeSerializersT,
      'Edm.Binary',
      true,
      true
    >;
    ALL_FIELDS: AllFields<RetailTillLayoutImages<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link layoutId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LAYOUT_ID: fieldBuilder.buildEdmTypeField(
          'LayoutId',
          'Edm.String',
          false
        ),
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
         * Static representation of the {@link zoneId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ZONE_ID: fieldBuilder.buildEdmTypeField('ZoneId', 'Edm.String', false),
        /**
         * Static representation of the {@link layoutSizeId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LAYOUT_SIZE_ID: fieldBuilder.buildEdmTypeField(
          'LayoutSizeId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link zoneName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ZONE_NAME: fieldBuilder.buildEdmTypeField(
          'ZoneName',
          'Edm.String',
          true
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
        ALL_FIELDS: new AllFields('*', RetailTillLayoutImages)
      };
    }

    return this._schema;
  }
}
