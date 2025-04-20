/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RetailTillLayoutReportZones } from './RetailTillLayoutReportZones';
import { RetailTillLayoutReportZonesRequestBuilder } from './RetailTillLayoutReportZonesRequestBuilder';
import { RetailChannelReportsApi } from './RetailChannelReportsApi';
import { TillLayoutSizesApi } from './TillLayoutSizesApi';
import { RetailTillLayoutZonesApi } from './RetailTillLayoutZonesApi';
import { RetailTillLayoutsApi } from './RetailTillLayoutsApi';
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
export class RetailTillLayoutReportZonesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<RetailTillLayoutReportZones<DeSerializersT>, DeSerializersT>
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
  ): RetailTillLayoutReportZonesApi<DeSerializersT> {
    return new RetailTillLayoutReportZonesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link retailChannelReport} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RETAIL_CHANNEL_REPORT: OneToOneLink<
      RetailTillLayoutReportZones<DeSerializersT>,
      DeSerializersT,
      RetailChannelReportsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link tillLayoutSize} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TILL_LAYOUT_SIZE: OneToOneLink<
      RetailTillLayoutReportZones<DeSerializersT>,
      DeSerializersT,
      TillLayoutSizesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link retailTillLayoutZone} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RETAIL_TILL_LAYOUT_ZONE: OneToOneLink<
      RetailTillLayoutReportZones<DeSerializersT>,
      DeSerializersT,
      RetailTillLayoutZonesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link retailTillLayout} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RETAIL_TILL_LAYOUT: OneToOneLink<
      RetailTillLayoutReportZones<DeSerializersT>,
      DeSerializersT,
      RetailTillLayoutsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      RetailChannelReportsApi<DeSerializersT>,
      TillLayoutSizesApi<DeSerializersT>,
      RetailTillLayoutZonesApi<DeSerializersT>,
      RetailTillLayoutsApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      RETAIL_CHANNEL_REPORT: new OneToOneLink(
        'RetailChannelReport',
        this,
        linkedApis[0]
      ),
      TILL_LAYOUT_SIZE: new OneToOneLink('TillLayoutSize', this, linkedApis[1]),
      RETAIL_TILL_LAYOUT_ZONE: new OneToOneLink(
        'RetailTillLayoutZone',
        this,
        linkedApis[2]
      ),
      RETAIL_TILL_LAYOUT: new OneToOneLink(
        'RetailTillLayout',
        this,
        linkedApis[3]
      )
    };
    return this;
  }

  entityConstructor = RetailTillLayoutReportZones;

  requestBuilder(): RetailTillLayoutReportZonesRequestBuilder<DeSerializersT> {
    return new RetailTillLayoutReportZonesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    RetailTillLayoutReportZones<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      RetailTillLayoutReportZones<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    RetailTillLayoutReportZones<DeSerializersT>,
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
    typeof RetailTillLayoutReportZones,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        RetailTillLayoutReportZones,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    LAYOUT_ID: OrderableEdmTypeField<
      RetailTillLayoutReportZones<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    DEVICE_TYPE: OrderableEdmTypeField<
      RetailTillLayoutReportZones<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    ZONE_ID: OrderableEdmTypeField<
      RetailTillLayoutReportZones<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    REPORT_ID: OrderableEdmTypeField<
      RetailTillLayoutReportZones<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LAYOUT_SIZE_ID: OrderableEdmTypeField<
      RetailTillLayoutReportZones<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link retailChannelReport} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RETAIL_CHANNEL_REPORT: OneToOneLink<
      RetailTillLayoutReportZones<DeSerializersT>,
      DeSerializersT,
      RetailChannelReportsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link tillLayoutSize} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TILL_LAYOUT_SIZE: OneToOneLink<
      RetailTillLayoutReportZones<DeSerializersT>,
      DeSerializersT,
      TillLayoutSizesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link retailTillLayoutZone} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RETAIL_TILL_LAYOUT_ZONE: OneToOneLink<
      RetailTillLayoutReportZones<DeSerializersT>,
      DeSerializersT,
      RetailTillLayoutZonesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link retailTillLayout} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RETAIL_TILL_LAYOUT: OneToOneLink<
      RetailTillLayoutReportZones<DeSerializersT>,
      DeSerializersT,
      RetailTillLayoutsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<RetailTillLayoutReportZones<DeSerializers>>;
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
         * Static representation of the {@link reportId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REPORT_ID: fieldBuilder.buildEdmTypeField(
          'ReportID',
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
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', RetailTillLayoutReportZones)
      };
    }

    return this._schema;
  }
}
