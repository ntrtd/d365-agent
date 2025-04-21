/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RetailTillLayoutButtonGridZones } from './RetailTillLayoutButtonGridZones';
import { RetailTillLayoutButtonGridZonesRequestBuilder } from './RetailTillLayoutButtonGridZonesRequestBuilder';
import { TillLayoutSizesApi } from './TillLayoutSizesApi';
import { RetailTillLayoutZonesApi } from './RetailTillLayoutZonesApi';
import { RetailTillLayoutsApi } from './RetailTillLayoutsApi';
import { RetailButtonGridsApi } from './RetailButtonGridsApi';
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
export class RetailTillLayoutButtonGridZonesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<RetailTillLayoutButtonGridZones<DeSerializersT>, DeSerializersT>
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
  ): RetailTillLayoutButtonGridZonesApi<DeSerializersT> {
    return new RetailTillLayoutButtonGridZonesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link tillLayoutSize} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TILL_LAYOUT_SIZE: OneToOneLink<
      RetailTillLayoutButtonGridZones<DeSerializersT>,
      DeSerializersT,
      TillLayoutSizesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link retailTillLayoutZone} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RETAIL_TILL_LAYOUT_ZONE: OneToOneLink<
      RetailTillLayoutButtonGridZones<DeSerializersT>,
      DeSerializersT,
      RetailTillLayoutZonesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link retailTillLayout} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RETAIL_TILL_LAYOUT: OneToOneLink<
      RetailTillLayoutButtonGridZones<DeSerializersT>,
      DeSerializersT,
      RetailTillLayoutsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link retailButtonGrid} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RETAIL_BUTTON_GRID: OneToOneLink<
      RetailTillLayoutButtonGridZones<DeSerializersT>,
      DeSerializersT,
      RetailButtonGridsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      TillLayoutSizesApi<DeSerializersT>,
      RetailTillLayoutZonesApi<DeSerializersT>,
      RetailTillLayoutsApi<DeSerializersT>,
      RetailButtonGridsApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      TILL_LAYOUT_SIZE: new OneToOneLink('TillLayoutSize', this, linkedApis[0]),
      RETAIL_TILL_LAYOUT_ZONE: new OneToOneLink(
        'RetailTillLayoutZone',
        this,
        linkedApis[1]
      ),
      RETAIL_TILL_LAYOUT: new OneToOneLink(
        'RetailTillLayout',
        this,
        linkedApis[2]
      ),
      RETAIL_BUTTON_GRID: new OneToOneLink(
        'RetailButtonGrid',
        this,
        linkedApis[3]
      )
    };
    return this;
  }

  entityConstructor = RetailTillLayoutButtonGridZones;

  requestBuilder(): RetailTillLayoutButtonGridZonesRequestBuilder<DeSerializersT> {
    return new RetailTillLayoutButtonGridZonesRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    RetailTillLayoutButtonGridZones<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      RetailTillLayoutButtonGridZones<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    RetailTillLayoutButtonGridZones<DeSerializersT>,
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
    typeof RetailTillLayoutButtonGridZones,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        RetailTillLayoutButtonGridZones,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    LAYOUT_ID: OrderableEdmTypeField<
      RetailTillLayoutButtonGridZones<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    DEVICE_TYPE: OrderableEdmTypeField<
      RetailTillLayoutButtonGridZones<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    ZONE_ID: OrderableEdmTypeField<
      RetailTillLayoutButtonGridZones<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    BUTTON_GRID_ID: OrderableEdmTypeField<
      RetailTillLayoutButtonGridZones<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LAYOUT_SIZE_ID: OrderableEdmTypeField<
      RetailTillLayoutButtonGridZones<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link tillLayoutSize} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TILL_LAYOUT_SIZE: OneToOneLink<
      RetailTillLayoutButtonGridZones<DeSerializersT>,
      DeSerializersT,
      TillLayoutSizesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link retailTillLayoutZone} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RETAIL_TILL_LAYOUT_ZONE: OneToOneLink<
      RetailTillLayoutButtonGridZones<DeSerializersT>,
      DeSerializersT,
      RetailTillLayoutZonesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link retailTillLayout} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RETAIL_TILL_LAYOUT: OneToOneLink<
      RetailTillLayoutButtonGridZones<DeSerializersT>,
      DeSerializersT,
      RetailTillLayoutsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link retailButtonGrid} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RETAIL_BUTTON_GRID: OneToOneLink<
      RetailTillLayoutButtonGridZones<DeSerializersT>,
      DeSerializersT,
      RetailButtonGridsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<RetailTillLayoutButtonGridZones<DeSerializers>>;
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
         * Static representation of the {@link deviceType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEVICE_TYPE: fieldBuilder.buildEdmTypeField(
          'DeviceType',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link zoneId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ZONE_ID: fieldBuilder.buildEdmTypeField('ZoneId', 'Edm.String', false),
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
         * Static representation of the {@link layoutSizeId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LAYOUT_SIZE_ID: fieldBuilder.buildEdmTypeField(
          'LayoutSizeId',
          'Edm.String',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', RetailTillLayoutButtonGridZones)
      };
    }

    return this._schema;
  }
}
