/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { JourneyLegTables } from './JourneyLegTables';
import { JourneyLegTablesRequestBuilder } from './JourneyLegTablesRequestBuilder';
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
  OrderableEdmTypeField
} from '@sap-cloud-sdk/odata-v4';
export class JourneyLegTablesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<JourneyLegTables<DeSerializersT>, DeSerializersT>
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
  ): JourneyLegTablesApi<DeSerializersT> {
    return new JourneyLegTablesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = JourneyLegTables;

  requestBuilder(): JourneyLegTablesRequestBuilder<DeSerializersT> {
    return new JourneyLegTablesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    JourneyLegTables<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<JourneyLegTables<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<JourneyLegTables<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof JourneyLegTables, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        JourneyLegTables,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      JourneyLegTables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LEG_ID: OrderableEdmTypeField<
      JourneyLegTables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    FROM_SHIPPING_PORT_ID: OrderableEdmTypeField<
      JourneyLegTables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DELIVERY_MODE_CODE: OrderableEdmTypeField<
      JourneyLegTables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TO_SHIPPING_PORT_ID: OrderableEdmTypeField<
      JourneyLegTables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LEG_DESCRIPTION: OrderableEdmTypeField<
      JourneyLegTables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<JourneyLegTables<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link dataAreaId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DATA_AREA_ID: fieldBuilder.buildEdmTypeField(
          'dataAreaId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link legId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LEG_ID: fieldBuilder.buildEdmTypeField('LegId', 'Edm.String', false),
        /**
         * Static representation of the {@link fromShippingPortId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FROM_SHIPPING_PORT_ID: fieldBuilder.buildEdmTypeField(
          'FromShippingPortId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link deliveryModeCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELIVERY_MODE_CODE: fieldBuilder.buildEdmTypeField(
          'DeliveryModeCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link toShippingPortId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TO_SHIPPING_PORT_ID: fieldBuilder.buildEdmTypeField(
          'ToShippingPortId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link legDescription} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LEG_DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'LegDescription',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', JourneyLegTables)
      };
    }

    return this._schema;
  }
}
