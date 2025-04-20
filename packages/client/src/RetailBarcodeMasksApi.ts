/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RetailBarcodeMasks } from './RetailBarcodeMasks';
import { RetailBarcodeMasksRequestBuilder } from './RetailBarcodeMasksRequestBuilder';
import { BarcodeType } from './BarcodeType';
import { RetailBarcodeMaskTypeBase } from './RetailBarcodeMaskTypeBase';
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
export class RetailBarcodeMasksApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<RetailBarcodeMasks<DeSerializersT>, DeSerializersT>
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
  ): RetailBarcodeMasksApi<DeSerializersT> {
    return new RetailBarcodeMasksApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = RetailBarcodeMasks;

  requestBuilder(): RetailBarcodeMasksRequestBuilder<DeSerializersT> {
    return new RetailBarcodeMasksRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    RetailBarcodeMasks<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<RetailBarcodeMasks<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    RetailBarcodeMasks<DeSerializersT>,
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
    typeof RetailBarcodeMasks,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        RetailBarcodeMasks,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      RetailBarcodeMasks<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    MASK_ID: OrderableEdmTypeField<
      RetailBarcodeMasks<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    MASK: OrderableEdmTypeField<
      RetailBarcodeMasks<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PREFIX: OrderableEdmTypeField<
      RetailBarcodeMasks<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      RetailBarcodeMasks<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SYMBOLOGY: EnumField<
      RetailBarcodeMasks<DeSerializers>,
      DeSerializersT,
      BarcodeType,
      true,
      true
    >;
    TYPE: EnumField<
      RetailBarcodeMasks<DeSerializers>,
      DeSerializersT,
      RetailBarcodeMaskTypeBase,
      true,
      true
    >;
    ALL_FIELDS: AllFields<RetailBarcodeMasks<DeSerializers>>;
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
         * Static representation of the {@link maskId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MASK_ID: fieldBuilder.buildEdmTypeField('MaskId', 'Edm.String', false),
        /**
         * Static representation of the {@link mask} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MASK: fieldBuilder.buildEdmTypeField('Mask', 'Edm.String', true),
        /**
         * Static representation of the {@link prefix} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PREFIX: fieldBuilder.buildEdmTypeField('Prefix', 'Edm.String', true),
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
         * Static representation of the {@link symbology} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SYMBOLOGY: fieldBuilder.buildEnumField('Symbology', BarcodeType, true),
        /**
         * Static representation of the {@link type} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TYPE: fieldBuilder.buildEnumField(
          'Type',
          RetailBarcodeMaskTypeBase,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', RetailBarcodeMasks)
      };
    }

    return this._schema;
  }
}
