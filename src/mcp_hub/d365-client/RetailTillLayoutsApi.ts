/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RetailTillLayouts } from './RetailTillLayouts';
import { RetailTillLayoutsRequestBuilder } from './RetailTillLayoutsRequestBuilder';
import { RetailStaffsApi } from './RetailStaffsApi';
import { RetailTillLayoutButtonGridZonesApi } from './RetailTillLayoutButtonGridZonesApi';
import { TillLayoutConfigurationsApi } from './TillLayoutConfigurationsApi';
import { RetailTillLayoutStaffsApi } from './RetailTillLayoutStaffsApi';
import { RetailTillLayoutImageZonesApi } from './RetailTillLayoutImageZonesApi';
import { RetailStoresApi } from './RetailStoresApi';
import { RetailTillLayoutReportZonesApi } from './RetailTillLayoutReportZonesApi';
import { RetailStartScreen } from './RetailStartScreen';
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
  OneToOneLink,
  OneToManyLink
} from '@sap-cloud-sdk/odata-v4';
export class RetailTillLayoutsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<RetailTillLayouts<DeSerializersT>, DeSerializersT>
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
  ): RetailTillLayoutsApi<DeSerializersT> {
    return new RetailTillLayoutsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link retailStaff} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RETAIL_STAFF: OneToOneLink<
      RetailTillLayouts<DeSerializersT>,
      DeSerializersT,
      RetailStaffsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link retailTillLayoutButtonGridZone} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RETAIL_TILL_LAYOUT_BUTTON_GRID_ZONE: OneToManyLink<
      RetailTillLayouts<DeSerializersT>,
      DeSerializersT,
      RetailTillLayoutButtonGridZonesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link tillLayoutConfiguration} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TILL_LAYOUT_CONFIGURATION: OneToManyLink<
      RetailTillLayouts<DeSerializersT>,
      DeSerializersT,
      TillLayoutConfigurationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link retailTillLayoutStaff} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RETAIL_TILL_LAYOUT_STAFF: OneToManyLink<
      RetailTillLayouts<DeSerializersT>,
      DeSerializersT,
      RetailTillLayoutStaffsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link retailTillLayoutImageZone} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RETAIL_TILL_LAYOUT_IMAGE_ZONE: OneToManyLink<
      RetailTillLayouts<DeSerializersT>,
      DeSerializersT,
      RetailTillLayoutImageZonesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link retailStore} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RETAIL_STORE: OneToOneLink<
      RetailTillLayouts<DeSerializersT>,
      DeSerializersT,
      RetailStoresApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link retailTillLayoutReportZone} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RETAIL_TILL_LAYOUT_REPORT_ZONE: OneToManyLink<
      RetailTillLayouts<DeSerializersT>,
      DeSerializersT,
      RetailTillLayoutReportZonesApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      RetailStaffsApi<DeSerializersT>,
      RetailTillLayoutButtonGridZonesApi<DeSerializersT>,
      TillLayoutConfigurationsApi<DeSerializersT>,
      RetailTillLayoutStaffsApi<DeSerializersT>,
      RetailTillLayoutImageZonesApi<DeSerializersT>,
      RetailStoresApi<DeSerializersT>,
      RetailTillLayoutReportZonesApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      RETAIL_STAFF: new OneToOneLink('RetailStaff', this, linkedApis[0]),
      RETAIL_TILL_LAYOUT_BUTTON_GRID_ZONE: new OneToManyLink(
        'RetailTillLayoutButtonGridZone',
        this,
        linkedApis[1]
      ),
      TILL_LAYOUT_CONFIGURATION: new OneToManyLink(
        'TillLayoutConfiguration',
        this,
        linkedApis[2]
      ),
      RETAIL_TILL_LAYOUT_STAFF: new OneToManyLink(
        'RetailTillLayoutStaff',
        this,
        linkedApis[3]
      ),
      RETAIL_TILL_LAYOUT_IMAGE_ZONE: new OneToManyLink(
        'RetailTillLayoutImageZone',
        this,
        linkedApis[4]
      ),
      RETAIL_STORE: new OneToOneLink('RetailStore', this, linkedApis[5]),
      RETAIL_TILL_LAYOUT_REPORT_ZONE: new OneToManyLink(
        'RetailTillLayoutReportZone',
        this,
        linkedApis[6]
      )
    };
    return this;
  }

  entityConstructor = RetailTillLayouts;

  requestBuilder(): RetailTillLayoutsRequestBuilder<DeSerializersT> {
    return new RetailTillLayoutsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    RetailTillLayouts<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<RetailTillLayouts<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<RetailTillLayouts<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<
    typeof RetailTillLayouts,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        RetailTillLayouts,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    LAYOUT_ID: OrderableEdmTypeField<
      RetailTillLayouts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    NAME: OrderableEdmTypeField<
      RetailTillLayouts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    START_SCREEN: EnumField<
      RetailTillLayouts<DeSerializers>,
      DeSerializersT,
      RetailStartScreen,
      true,
      true
    >;
    RETAIL_DEVICE_TYPES_TYPE: OrderableEdmTypeField<
      RetailTillLayouts<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link retailStaff} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RETAIL_STAFF: OneToOneLink<
      RetailTillLayouts<DeSerializersT>,
      DeSerializersT,
      RetailStaffsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link retailTillLayoutButtonGridZone} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RETAIL_TILL_LAYOUT_BUTTON_GRID_ZONE: OneToManyLink<
      RetailTillLayouts<DeSerializersT>,
      DeSerializersT,
      RetailTillLayoutButtonGridZonesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link tillLayoutConfiguration} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TILL_LAYOUT_CONFIGURATION: OneToManyLink<
      RetailTillLayouts<DeSerializersT>,
      DeSerializersT,
      TillLayoutConfigurationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link retailTillLayoutStaff} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RETAIL_TILL_LAYOUT_STAFF: OneToManyLink<
      RetailTillLayouts<DeSerializersT>,
      DeSerializersT,
      RetailTillLayoutStaffsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link retailTillLayoutImageZone} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RETAIL_TILL_LAYOUT_IMAGE_ZONE: OneToManyLink<
      RetailTillLayouts<DeSerializersT>,
      DeSerializersT,
      RetailTillLayoutImageZonesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link retailStore} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RETAIL_STORE: OneToOneLink<
      RetailTillLayouts<DeSerializersT>,
      DeSerializersT,
      RetailStoresApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link retailTillLayoutReportZone} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RETAIL_TILL_LAYOUT_REPORT_ZONE: OneToManyLink<
      RetailTillLayouts<DeSerializersT>,
      DeSerializersT,
      RetailTillLayoutReportZonesApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<RetailTillLayouts<DeSerializers>>;
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
         * Static representation of the {@link name} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NAME: fieldBuilder.buildEdmTypeField('Name', 'Edm.String', true),
        /**
         * Static representation of the {@link startScreen} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        START_SCREEN: fieldBuilder.buildEnumField(
          'StartScreen',
          RetailStartScreen,
          true
        ),
        /**
         * Static representation of the {@link retailDeviceTypesType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RETAIL_DEVICE_TYPES_TYPE: fieldBuilder.buildEdmTypeField(
          'RetailDeviceTypes_Type',
          'Edm.Int32',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', RetailTillLayouts)
      };
    }

    return this._schema;
  }
}
