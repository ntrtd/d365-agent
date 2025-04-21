/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Rooms } from './Rooms';
import { RoomsRequestBuilder } from './RoomsRequestBuilder';
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
export class RoomsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<Rooms<DeSerializersT>, DeSerializersT>
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
  ): RoomsApi<DeSerializersT> {
    return new RoomsApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = Rooms;

  requestBuilder(): RoomsRequestBuilder<DeSerializersT> {
    return new RoomsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<Rooms<DeSerializersT>, DeSerializersT> {
    return entityBuilder<Rooms<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<Rooms<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof Rooms, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(Rooms, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      Rooms<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ROOM_ID: OrderableEdmTypeField<
      Rooms<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ROOM_GUID: OrderableEdmTypeField<
      Rooms<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FLAT_NUMBER: OrderableEdmTypeField<
      Rooms<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FLAT_TYPE: OrderableEdmTypeField<
      Rooms<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    HOUSE_GUID: OrderableEdmTypeField<
      Rooms<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REGION_CODE: OrderableEdmTypeField<
      Rooms<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    START_DATE: OrderableEdmTypeField<
      Rooms<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    POSTAL_CODE: OrderableEdmTypeField<
      Rooms<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    END_DATE: OrderableEdmTypeField<
      Rooms<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    ALL_FIELDS: AllFields<Rooms<DeSerializers>>;
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
         * Static representation of the {@link roomId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ROOM_ID: fieldBuilder.buildEdmTypeField('RoomId', 'Edm.String', false),
        /**
         * Static representation of the {@link roomGuid} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ROOM_GUID: fieldBuilder.buildEdmTypeField(
          'RoomGuid',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link flatNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FLAT_NUMBER: fieldBuilder.buildEdmTypeField(
          'FlatNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link flatType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FLAT_TYPE: fieldBuilder.buildEdmTypeField(
          'FlatType',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link houseGuid} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        HOUSE_GUID: fieldBuilder.buildEdmTypeField(
          'HouseGuid',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link regionCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REGION_CODE: fieldBuilder.buildEdmTypeField(
          'RegionCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link startDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        START_DATE: fieldBuilder.buildEdmTypeField(
          'StartDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link postalCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        POSTAL_CODE: fieldBuilder.buildEdmTypeField(
          'PostalCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link endDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        END_DATE: fieldBuilder.buildEdmTypeField(
          'EndDate',
          'Edm.DateTimeOffset',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', Rooms)
      };
    }

    return this._schema;
  }
}
