/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RetailButtonGrids } from './RetailButtonGrids';
import { RetailButtonGridsRequestBuilder } from './RetailButtonGridsRequestBuilder';
import { RetailTillLayoutButtonGridZonesApi } from './RetailTillLayoutButtonGridZonesApi';
import { RetailFontStyleBase } from './RetailFontStyleBase';
import { RetailButtonColorBase } from './RetailButtonColorBase';
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
  OneToManyLink
} from '@sap-cloud-sdk/odata-v4';
export class RetailButtonGridsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<RetailButtonGrids<DeSerializersT>, DeSerializersT>
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
  ): RetailButtonGridsApi<DeSerializersT> {
    return new RetailButtonGridsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link retailTillLayoutButtonGridZone} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RETAIL_TILL_LAYOUT_BUTTON_GRID_ZONE: OneToManyLink<
      RetailButtonGrids<DeSerializersT>,
      DeSerializersT,
      RetailTillLayoutButtonGridZonesApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [RetailTillLayoutButtonGridZonesApi<DeSerializersT>]
  ): this {
    this.navigationPropertyFields = {
      RETAIL_TILL_LAYOUT_BUTTON_GRID_ZONE: new OneToManyLink(
        'RetailTillLayoutButtonGridZone',
        this,
        linkedApis[0]
      )
    };
    return this;
  }

  entityConstructor = RetailButtonGrids;

  requestBuilder(): RetailButtonGridsRequestBuilder<DeSerializersT> {
    return new RetailButtonGridsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    RetailButtonGrids<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<RetailButtonGrids<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<RetailButtonGrids<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<
    typeof RetailButtonGrids,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        RetailButtonGrids,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    BUTTON_GRID_ID: OrderableEdmTypeField<
      RetailButtonGrids<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SPACE_BETWEEN_BUTTONS: OrderableEdmTypeField<
      RetailButtonGrids<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    NAME: OrderableEdmTypeField<
      RetailButtonGrids<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FONT: OrderableEdmTypeField<
      RetailButtonGrids<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DEFAULT_FONT_STYLE: EnumField<
      RetailButtonGrids<DeSerializers>,
      DeSerializersT,
      RetailFontStyleBase,
      true,
      true
    >;
    DEFAULT_FONT_SIZE: OrderableEdmTypeField<
      RetailButtonGrids<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    DEFAULT_COLOR: EnumField<
      RetailButtonGrids<DeSerializers>,
      DeSerializersT,
      RetailButtonColorBase,
      true,
      true
    >;
    KEYBOARD_USED: OrderableEdmTypeField<
      RetailButtonGrids<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link retailTillLayoutButtonGridZone} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RETAIL_TILL_LAYOUT_BUTTON_GRID_ZONE: OneToManyLink<
      RetailButtonGrids<DeSerializersT>,
      DeSerializersT,
      RetailTillLayoutButtonGridZonesApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<RetailButtonGrids<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link buttonGridId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BUTTON_GRID_ID: fieldBuilder.buildEdmTypeField(
          'ButtonGridId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link spaceBetweenButtons} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SPACE_BETWEEN_BUTTONS: fieldBuilder.buildEdmTypeField(
          'SpaceBetweenButtons',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link name} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NAME: fieldBuilder.buildEdmTypeField('Name', 'Edm.String', true),
        /**
         * Static representation of the {@link font} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FONT: fieldBuilder.buildEdmTypeField('Font', 'Edm.String', true),
        /**
         * Static representation of the {@link defaultFontStyle} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFAULT_FONT_STYLE: fieldBuilder.buildEnumField(
          'DefaultFontStyle',
          RetailFontStyleBase,
          true
        ),
        /**
         * Static representation of the {@link defaultFontSize} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFAULT_FONT_SIZE: fieldBuilder.buildEdmTypeField(
          'DefaultFontSize',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link defaultColor} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFAULT_COLOR: fieldBuilder.buildEnumField(
          'DefaultColor',
          RetailButtonColorBase,
          true
        ),
        /**
         * Static representation of the {@link keyboardUsed} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        KEYBOARD_USED: fieldBuilder.buildEdmTypeField(
          'KeyboardUsed',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', RetailButtonGrids)
      };
    }

    return this._schema;
  }
}
