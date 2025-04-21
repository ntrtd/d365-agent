/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { SensorItemBatchAttributeMappings } from './SensorItemBatchAttributeMappings';
import { SensorItemBatchAttributeMappingsRequestBuilder } from './SensorItemBatchAttributeMappingsRequestBuilder';
import { ItemBatchAttributesApi } from './ItemBatchAttributesApi';
import { SensorsApi } from './SensorsApi';
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
export class SensorItemBatchAttributeMappingsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<SensorItemBatchAttributeMappings<DeSerializersT>, DeSerializersT>
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
  ): SensorItemBatchAttributeMappingsApi<DeSerializersT> {
    return new SensorItemBatchAttributeMappingsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link itemBatchAttribute} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ITEM_BATCH_ATTRIBUTE: OneToOneLink<
      SensorItemBatchAttributeMappings<DeSerializersT>,
      DeSerializersT,
      ItemBatchAttributesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link sensor} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SENSOR: OneToOneLink<
      SensorItemBatchAttributeMappings<DeSerializersT>,
      DeSerializersT,
      SensorsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      ItemBatchAttributesApi<DeSerializersT>,
      SensorsApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      ITEM_BATCH_ATTRIBUTE: new OneToOneLink(
        'ItemBatchAttribute',
        this,
        linkedApis[0]
      ),
      SENSOR: new OneToOneLink('Sensor', this, linkedApis[1])
    };
    return this;
  }

  entityConstructor = SensorItemBatchAttributeMappings;

  requestBuilder(): SensorItemBatchAttributeMappingsRequestBuilder<DeSerializersT> {
    return new SensorItemBatchAttributeMappingsRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    SensorItemBatchAttributeMappings<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      SensorItemBatchAttributeMappings<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    SensorItemBatchAttributeMappings<DeSerializersT>,
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
    typeof SensorItemBatchAttributeMappings,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        SensorItemBatchAttributeMappings,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    SENSOR_ID: OrderableEdmTypeField<
      SensorItemBatchAttributeMappings<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ITEM_BATCH_ATTRIBUTE_DATA_AREA_ID: OrderableEdmTypeField<
      SensorItemBatchAttributeMappings<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ITEM_BATCH_ATTRIBUTE_ID: OrderableEdmTypeField<
      SensorItemBatchAttributeMappings<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link itemBatchAttribute} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ITEM_BATCH_ATTRIBUTE: OneToOneLink<
      SensorItemBatchAttributeMappings<DeSerializersT>,
      DeSerializersT,
      ItemBatchAttributesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link sensor} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SENSOR: OneToOneLink<
      SensorItemBatchAttributeMappings<DeSerializersT>,
      DeSerializersT,
      SensorsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<SensorItemBatchAttributeMappings<DeSerializers>>;
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
         * Static representation of the {@link itemBatchAttributeDataAreaId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ITEM_BATCH_ATTRIBUTE_DATA_AREA_ID: fieldBuilder.buildEdmTypeField(
          'ItemBatchAttributeDataAreaId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link itemBatchAttributeId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ITEM_BATCH_ATTRIBUTE_ID: fieldBuilder.buildEdmTypeField(
          'ItemBatchAttributeId',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', SensorItemBatchAttributeMappings)
      };
    }

    return this._schema;
  }
}
