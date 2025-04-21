/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { TillLayoutSizes } from './TillLayoutSizes';
import { TillLayoutSizesRequestBuilder } from './TillLayoutSizesRequestBuilder';
import { RetailTillLayoutButtonGridZonesApi } from './RetailTillLayoutButtonGridZonesApi';
import { TillLayoutConfigurationsApi } from './TillLayoutConfigurationsApi';
import { RetailTillLayoutImageZonesApi } from './RetailTillLayoutImageZonesApi';
import { RetailTillLayoutReportZonesApi } from './RetailTillLayoutReportZonesApi';
import { RetailLayoutType } from './RetailLayoutType';
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
export class TillLayoutSizesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<TillLayoutSizes<DeSerializersT>, DeSerializersT>
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
  ): TillLayoutSizesApi<DeSerializersT> {
    return new TillLayoutSizesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link retailTillLayoutButtonGridZone} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RETAIL_TILL_LAYOUT_BUTTON_GRID_ZONE: OneToManyLink<
      TillLayoutSizes<DeSerializersT>,
      DeSerializersT,
      RetailTillLayoutButtonGridZonesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link tillLayoutConfiguration} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TILL_LAYOUT_CONFIGURATION: OneToManyLink<
      TillLayoutSizes<DeSerializersT>,
      DeSerializersT,
      TillLayoutConfigurationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link retailTillLayoutImageZone} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RETAIL_TILL_LAYOUT_IMAGE_ZONE: OneToManyLink<
      TillLayoutSizes<DeSerializersT>,
      DeSerializersT,
      RetailTillLayoutImageZonesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link retailTillLayoutReportZone} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RETAIL_TILL_LAYOUT_REPORT_ZONE: OneToManyLink<
      TillLayoutSizes<DeSerializersT>,
      DeSerializersT,
      RetailTillLayoutReportZonesApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      RetailTillLayoutButtonGridZonesApi<DeSerializersT>,
      TillLayoutConfigurationsApi<DeSerializersT>,
      RetailTillLayoutImageZonesApi<DeSerializersT>,
      RetailTillLayoutReportZonesApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      RETAIL_TILL_LAYOUT_BUTTON_GRID_ZONE: new OneToManyLink(
        'RetailTillLayoutButtonGridZone',
        this,
        linkedApis[0]
      ),
      TILL_LAYOUT_CONFIGURATION: new OneToManyLink(
        'TillLayoutConfiguration',
        this,
        linkedApis[1]
      ),
      RETAIL_TILL_LAYOUT_IMAGE_ZONE: new OneToManyLink(
        'RetailTillLayoutImageZone',
        this,
        linkedApis[2]
      ),
      RETAIL_TILL_LAYOUT_REPORT_ZONE: new OneToManyLink(
        'RetailTillLayoutReportZone',
        this,
        linkedApis[3]
      )
    };
    return this;
  }

  entityConstructor = TillLayoutSizes;

  requestBuilder(): TillLayoutSizesRequestBuilder<DeSerializersT> {
    return new TillLayoutSizesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    TillLayoutSizes<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<TillLayoutSizes<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<TillLayoutSizes<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof TillLayoutSizes, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        TillLayoutSizes,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    LAYOUT_SIZE_ID: OrderableEdmTypeField<
      TillLayoutSizes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    HEIGHT: OrderableEdmTypeField<
      TillLayoutSizes<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    LAYOUT_TYPE: EnumField<
      TillLayoutSizes<DeSerializers>,
      DeSerializersT,
      RetailLayoutType,
      true,
      true
    >;
    WIDTH: OrderableEdmTypeField<
      TillLayoutSizes<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link retailTillLayoutButtonGridZone} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RETAIL_TILL_LAYOUT_BUTTON_GRID_ZONE: OneToManyLink<
      TillLayoutSizes<DeSerializersT>,
      DeSerializersT,
      RetailTillLayoutButtonGridZonesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link tillLayoutConfiguration} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TILL_LAYOUT_CONFIGURATION: OneToManyLink<
      TillLayoutSizes<DeSerializersT>,
      DeSerializersT,
      TillLayoutConfigurationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link retailTillLayoutImageZone} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RETAIL_TILL_LAYOUT_IMAGE_ZONE: OneToManyLink<
      TillLayoutSizes<DeSerializersT>,
      DeSerializersT,
      RetailTillLayoutImageZonesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link retailTillLayoutReportZone} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RETAIL_TILL_LAYOUT_REPORT_ZONE: OneToManyLink<
      TillLayoutSizes<DeSerializersT>,
      DeSerializersT,
      RetailTillLayoutReportZonesApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<TillLayoutSizes<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
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
         * Static representation of the {@link height} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        HEIGHT: fieldBuilder.buildEdmTypeField('Height', 'Edm.Int32', false),
        /**
         * Static representation of the {@link layoutType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LAYOUT_TYPE: fieldBuilder.buildEnumField(
          'LayoutType',
          RetailLayoutType,
          true
        ),
        /**
         * Static representation of the {@link width} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WIDTH: fieldBuilder.buildEdmTypeField('Width', 'Edm.Int32', false),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', TillLayoutSizes)
      };
    }

    return this._schema;
  }
}
