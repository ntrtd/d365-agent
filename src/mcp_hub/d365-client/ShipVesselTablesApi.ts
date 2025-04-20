/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ShipVesselTables } from './ShipVesselTables';
import { ShipVesselTablesRequestBuilder } from './ShipVesselTablesRequestBuilder';
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
export class ShipVesselTablesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<ShipVesselTables<DeSerializersT>, DeSerializersT>
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
  ): ShipVesselTablesApi<DeSerializersT> {
    return new ShipVesselTablesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = ShipVesselTables;

  requestBuilder(): ShipVesselTablesRequestBuilder<DeSerializersT> {
    return new ShipVesselTablesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    ShipVesselTables<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<ShipVesselTables<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<ShipVesselTables<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof ShipVesselTables, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        ShipVesselTables,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      ShipVesselTables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    VESSEL_ID: OrderableEdmTypeField<
      ShipVesselTables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    VESSEL_DESCRIPTION: OrderableEdmTypeField<
      ShipVesselTables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DELIVERY_MODE_CODE: OrderableEdmTypeField<
      ShipVesselTables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<ShipVesselTables<DeSerializers>>;
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
         * Static representation of the {@link vesselId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VESSEL_ID: fieldBuilder.buildEdmTypeField(
          'VesselId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link vesselDescription} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VESSEL_DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'VesselDescription',
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
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', ShipVesselTables)
      };
    }

    return this._schema;
  }
}
