/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { SensorScenarioMappings } from './SensorScenarioMappings';
import { SensorScenarioMappingsRequestBuilder } from './SensorScenarioMappingsRequestBuilder';
import { SensorsApi } from './SensorsApi';
import { IoTIntCoreScenarioType } from './IoTIntCoreScenarioType';
import { NoYes } from './NoYes';
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
  OneToOneLink
} from '@sap-cloud-sdk/odata-v4';
export class SensorScenarioMappingsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<SensorScenarioMappings<DeSerializersT>, DeSerializersT>
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
  ): SensorScenarioMappingsApi<DeSerializersT> {
    return new SensorScenarioMappingsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link sensor} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SENSOR: OneToOneLink<
      SensorScenarioMappings<DeSerializersT>,
      DeSerializersT,
      SensorsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(linkedApis: [SensorsApi<DeSerializersT>]): this {
    this.navigationPropertyFields = {
      SENSOR: new OneToOneLink('Sensor', this, linkedApis[0])
    };
    return this;
  }

  entityConstructor = SensorScenarioMappings;

  requestBuilder(): SensorScenarioMappingsRequestBuilder<DeSerializersT> {
    return new SensorScenarioMappingsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    SensorScenarioMappings<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      SensorScenarioMappings<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    SensorScenarioMappings<DeSerializersT>,
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
    typeof SensorScenarioMappings,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        SensorScenarioMappings,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    SENSOR_ID: OrderableEdmTypeField<
      SensorScenarioMappings<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SCENARIO: EnumField<
      SensorScenarioMappings<DeSerializers>,
      DeSerializersT,
      IoTIntCoreScenarioType,
      true,
      true
    >;
    IS_SENSOR_ACTIVE_FOR_SCENARIO: EnumField<
      SensorScenarioMappings<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link sensor} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SENSOR: OneToOneLink<
      SensorScenarioMappings<DeSerializersT>,
      DeSerializersT,
      SensorsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<SensorScenarioMappings<DeSerializers>>;
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
         * Static representation of the {@link scenario} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SCENARIO: fieldBuilder.buildEnumField(
          'Scenario',
          IoTIntCoreScenarioType,
          true
        ),
        /**
         * Static representation of the {@link isSensorActiveForScenario} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_SENSOR_ACTIVE_FOR_SCENARIO: fieldBuilder.buildEnumField(
          'IsSensorActiveForScenario',
          NoYes,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', SensorScenarioMappings)
      };
    }

    return this._schema;
  }
}
