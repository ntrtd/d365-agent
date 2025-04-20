/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RetailTillLayoutZones } from './RetailTillLayoutZones';
import { RetailTillLayoutZonesRequestBuilder } from './RetailTillLayoutZonesRequestBuilder';
import { DeviceTypesApi } from './DeviceTypesApi';
import { RetailTillLayoutButtonGridZonesApi } from './RetailTillLayoutButtonGridZonesApi';
import { RetailTillLayoutImageZonesApi } from './RetailTillLayoutImageZonesApi';
import { RetailTillLayoutReportZonesApi } from './RetailTillLayoutReportZonesApi';
import { RetailZoneType } from './RetailZoneType';
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
  OneToOneLink,
  OneToManyLink
} from '@sap-cloud-sdk/odata-v4';
export class RetailTillLayoutZonesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<RetailTillLayoutZones<DeSerializersT>, DeSerializersT>
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
  ): RetailTillLayoutZonesApi<DeSerializersT> {
    return new RetailTillLayoutZonesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link deviceTypes} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DEVICE_TYPES: OneToOneLink<
      RetailTillLayoutZones<DeSerializersT>,
      DeSerializersT,
      DeviceTypesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link retailTillLayoutButtonGridZone} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RETAIL_TILL_LAYOUT_BUTTON_GRID_ZONE: OneToManyLink<
      RetailTillLayoutZones<DeSerializersT>,
      DeSerializersT,
      RetailTillLayoutButtonGridZonesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link retailTillLayoutImageZone} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RETAIL_TILL_LAYOUT_IMAGE_ZONE: OneToManyLink<
      RetailTillLayoutZones<DeSerializersT>,
      DeSerializersT,
      RetailTillLayoutImageZonesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link retailTillLayoutReportZone} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RETAIL_TILL_LAYOUT_REPORT_ZONE: OneToManyLink<
      RetailTillLayoutZones<DeSerializersT>,
      DeSerializersT,
      RetailTillLayoutReportZonesApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      DeviceTypesApi<DeSerializersT>,
      RetailTillLayoutButtonGridZonesApi<DeSerializersT>,
      RetailTillLayoutImageZonesApi<DeSerializersT>,
      RetailTillLayoutReportZonesApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      DEVICE_TYPES: new OneToOneLink('DeviceTypes', this, linkedApis[0]),
      RETAIL_TILL_LAYOUT_BUTTON_GRID_ZONE: new OneToManyLink(
        'RetailTillLayoutButtonGridZone',
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

  entityConstructor = RetailTillLayoutZones;

  requestBuilder(): RetailTillLayoutZonesRequestBuilder<DeSerializersT> {
    return new RetailTillLayoutZonesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    RetailTillLayoutZones<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<RetailTillLayoutZones<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    RetailTillLayoutZones<DeSerializersT>,
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
    typeof RetailTillLayoutZones,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        RetailTillLayoutZones,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DEVICE_TYPE: OrderableEdmTypeField<
      RetailTillLayoutZones<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    ZONE_TYPE: EnumField<
      RetailTillLayoutZones<DeSerializers>,
      DeSerializersT,
      RetailZoneType,
      true,
      true
    >;
    ZONE_ID: OrderableEdmTypeField<
      RetailTillLayoutZones<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ZONE_NAME: OrderableEdmTypeField<
      RetailTillLayoutZones<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LAYOUT_TYPE: EnumField<
      RetailTillLayoutZones<DeSerializers>,
      DeSerializersT,
      RetailLayoutType,
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link deviceTypes} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DEVICE_TYPES: OneToOneLink<
      RetailTillLayoutZones<DeSerializersT>,
      DeSerializersT,
      DeviceTypesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link retailTillLayoutButtonGridZone} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RETAIL_TILL_LAYOUT_BUTTON_GRID_ZONE: OneToManyLink<
      RetailTillLayoutZones<DeSerializersT>,
      DeSerializersT,
      RetailTillLayoutButtonGridZonesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link retailTillLayoutImageZone} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RETAIL_TILL_LAYOUT_IMAGE_ZONE: OneToManyLink<
      RetailTillLayoutZones<DeSerializersT>,
      DeSerializersT,
      RetailTillLayoutImageZonesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link retailTillLayoutReportZone} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RETAIL_TILL_LAYOUT_REPORT_ZONE: OneToManyLink<
      RetailTillLayoutZones<DeSerializersT>,
      DeSerializersT,
      RetailTillLayoutReportZonesApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<RetailTillLayoutZones<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
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
         * Static representation of the {@link zoneType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ZONE_TYPE: fieldBuilder.buildEnumField(
          'ZoneType',
          RetailZoneType,
          true
        ),
        /**
         * Static representation of the {@link zoneId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ZONE_ID: fieldBuilder.buildEdmTypeField('ZoneId', 'Edm.String', false),
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
         * Static representation of the {@link layoutType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LAYOUT_TYPE: fieldBuilder.buildEnumField(
          'LayoutType',
          RetailLayoutType,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', RetailTillLayoutZones)
      };
    }

    return this._schema;
  }
}
