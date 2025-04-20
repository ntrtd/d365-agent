/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { SensorOperationsResourceMappings } from './SensorOperationsResourceMappings';
import { SensorOperationsResourceMappingsRequestBuilder } from './SensorOperationsResourceMappingsRequestBuilder';
import { SensorsApi } from './SensorsApi';
import { OperationsResourcesApi } from './OperationsResourcesApi';
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
export class SensorOperationsResourceMappingsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<SensorOperationsResourceMappings<DeSerializersT>, DeSerializersT>
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
  ): SensorOperationsResourceMappingsApi<DeSerializersT> {
    return new SensorOperationsResourceMappingsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link sensor} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SENSOR: OneToOneLink<
      SensorOperationsResourceMappings<DeSerializersT>,
      DeSerializersT,
      SensorsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link operationsResource} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OPERATIONS_RESOURCE: OneToOneLink<
      SensorOperationsResourceMappings<DeSerializersT>,
      DeSerializersT,
      OperationsResourcesApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      SensorsApi<DeSerializersT>,
      OperationsResourcesApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      SENSOR: new OneToOneLink('Sensor', this, linkedApis[0]),
      OPERATIONS_RESOURCE: new OneToOneLink(
        'OperationsResource',
        this,
        linkedApis[1]
      )
    };
    return this;
  }

  entityConstructor = SensorOperationsResourceMappings;

  requestBuilder(): SensorOperationsResourceMappingsRequestBuilder<DeSerializersT> {
    return new SensorOperationsResourceMappingsRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    SensorOperationsResourceMappings<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      SensorOperationsResourceMappings<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    SensorOperationsResourceMappings<DeSerializersT>,
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
    typeof SensorOperationsResourceMappings,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        SensorOperationsResourceMappings,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    SENSOR_ID: OrderableEdmTypeField<
      SensorOperationsResourceMappings<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    RESOURCE_ID: OrderableEdmTypeField<
      SensorOperationsResourceMappings<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RESOURCE_DATA_AREA_ID: OrderableEdmTypeField<
      SensorOperationsResourceMappings<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link sensor} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SENSOR: OneToOneLink<
      SensorOperationsResourceMappings<DeSerializersT>,
      DeSerializersT,
      SensorsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link operationsResource} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OPERATIONS_RESOURCE: OneToOneLink<
      SensorOperationsResourceMappings<DeSerializersT>,
      DeSerializersT,
      OperationsResourcesApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<SensorOperationsResourceMappings<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link sensorId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SENSOR_ID: fieldBuilder.buildEdmTypeField(
          'SensorId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link resourceId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RESOURCE_ID: fieldBuilder.buildEdmTypeField(
          'ResourceId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link resourceDataAreaId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RESOURCE_DATA_AREA_ID: fieldBuilder.buildEdmTypeField(
          'ResourceDataAreaId',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', SensorOperationsResourceMappings)
      };
    }

    return this._schema;
  }
}
