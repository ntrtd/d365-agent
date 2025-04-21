/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RetailDesignerTillLayoutZones } from './RetailDesignerTillLayoutZones';
import { RetailDesignerTillLayoutZonesRequestBuilder } from './RetailDesignerTillLayoutZonesRequestBuilder';
import { RetailZoneType } from './RetailZoneType';
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
export class RetailDesignerTillLayoutZonesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<RetailDesignerTillLayoutZones<DeSerializersT>, DeSerializersT>
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
  ): RetailDesignerTillLayoutZonesApi<DeSerializersT> {
    return new RetailDesignerTillLayoutZonesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = RetailDesignerTillLayoutZones;

  requestBuilder(): RetailDesignerTillLayoutZonesRequestBuilder<DeSerializersT> {
    return new RetailDesignerTillLayoutZonesRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    RetailDesignerTillLayoutZones<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      RetailDesignerTillLayoutZones<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    RetailDesignerTillLayoutZones<DeSerializersT>,
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
    typeof RetailDesignerTillLayoutZones,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        RetailDesignerTillLayoutZones,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    ZONE_ID: OrderableEdmTypeField<
      RetailDesignerTillLayoutZones<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ZONE_NAME: OrderableEdmTypeField<
      RetailDesignerTillLayoutZones<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    AX_REC_ID: OrderableEdmTypeField<
      RetailDesignerTillLayoutZones<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    ZONE_TYPE: EnumField<
      RetailDesignerTillLayoutZones<DeSerializers>,
      DeSerializersT,
      RetailZoneType,
      true,
      true
    >;
    DEVICE_TYPE: OrderableEdmTypeField<
      RetailDesignerTillLayoutZones<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    ALL_FIELDS: AllFields<RetailDesignerTillLayoutZones<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
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
          false
        ),
        /**
         * Static representation of the {@link axRecId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AX_REC_ID: fieldBuilder.buildEdmTypeField(
          'AxRecId',
          'Edm.Int64',
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
         * Static representation of the {@link deviceType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEVICE_TYPE: fieldBuilder.buildEdmTypeField(
          'DeviceType',
          'Edm.Int32',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', RetailDesignerTillLayoutZones)
      };
    }

    return this._schema;
  }
}
