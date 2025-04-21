/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { AddressObjects } from './AddressObjects';
import { AddressObjectsRequestBuilder } from './AddressObjectsRequestBuilder';
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
export class AddressObjectsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<AddressObjects<DeSerializersT>, DeSerializersT>
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
  ): AddressObjectsApi<DeSerializersT> {
    return new AddressObjectsApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = AddressObjects;

  requestBuilder(): AddressObjectsRequestBuilder<DeSerializersT> {
    return new AddressObjectsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    AddressObjects<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<AddressObjects<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<AddressObjects<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof AddressObjects, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(AddressObjects, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      AddressObjects<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    AO_ID: OrderableEdmTypeField<
      AddressObjects<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    OPER_STATUS: OrderableEdmTypeField<
      AddressObjects<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EXTR_CODE: OrderableEdmTypeField<
      AddressObjects<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PREV_ID: OrderableEdmTypeField<
      AddressObjects<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ACT_STATUS: OrderableEdmTypeField<
      AddressObjects<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    AO_GUID: OrderableEdmTypeField<
      AddressObjects<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    STREET_CODE: OrderableEdmTypeField<
      AddressObjects<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IFNSFL: OrderableEdmTypeField<
      AddressObjects<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    AREA_CODE: OrderableEdmTypeField<
      AddressObjects<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REGION_CODE: OrderableEdmTypeField<
      AddressObjects<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LIVE_STATUS: OrderableEdmTypeField<
      AddressObjects<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DIV_TYPE: OrderableEdmTypeField<
      AddressObjects<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CT_AR_CODE: OrderableEdmTypeField<
      AddressObjects<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    NEXT_ID: OrderableEdmTypeField<
      AddressObjects<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    OKATO: OrderableEdmTypeField<
      AddressObjects<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    AO_LEVEL: OrderableEdmTypeField<
      AddressObjects<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SHORT_NAME: OrderableEdmTypeField<
      AddressObjects<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PARENT_GUID: OrderableEdmTypeField<
      AddressObjects<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TERR_IFNSFL: OrderableEdmTypeField<
      AddressObjects<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    OFF_NAME: OrderableEdmTypeField<
      AddressObjects<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CITY_CODE: OrderableEdmTypeField<
      AddressObjects<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PLACE_CODE: OrderableEdmTypeField<
      AddressObjects<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    POSTAL_CODE: OrderableEdmTypeField<
      AddressObjects<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PLAN_CODE: OrderableEdmTypeField<
      AddressObjects<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<AddressObjects<DeSerializers>>;
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
         * Static representation of the {@link aoId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AO_ID: fieldBuilder.buildEdmTypeField('AOId', 'Edm.String', false),
        /**
         * Static representation of the {@link operStatus} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OPER_STATUS: fieldBuilder.buildEdmTypeField(
          'OperStatus',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link extrCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXTR_CODE: fieldBuilder.buildEdmTypeField(
          'ExtrCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link prevId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PREV_ID: fieldBuilder.buildEdmTypeField('PrevId', 'Edm.String', true),
        /**
         * Static representation of the {@link actStatus} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACT_STATUS: fieldBuilder.buildEdmTypeField(
          'ActStatus',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link aoGuid} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AO_GUID: fieldBuilder.buildEdmTypeField('AOGuid', 'Edm.String', true),
        /**
         * Static representation of the {@link streetCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STREET_CODE: fieldBuilder.buildEdmTypeField(
          'StreetCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link ifnsfl} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IFNSFL: fieldBuilder.buildEdmTypeField('IFNSFL', 'Edm.String', true),
        /**
         * Static representation of the {@link areaCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AREA_CODE: fieldBuilder.buildEdmTypeField(
          'AreaCode',
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
         * Static representation of the {@link liveStatus} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LIVE_STATUS: fieldBuilder.buildEdmTypeField(
          'LiveStatus',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link divType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DIV_TYPE: fieldBuilder.buildEdmTypeField('DivType', 'Edm.String', true),
        /**
         * Static representation of the {@link ctArCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CT_AR_CODE: fieldBuilder.buildEdmTypeField(
          'CtArCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link nextId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NEXT_ID: fieldBuilder.buildEdmTypeField('NextId', 'Edm.String', true),
        /**
         * Static representation of the {@link okato} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OKATO: fieldBuilder.buildEdmTypeField('OKATO', 'Edm.String', true),
        /**
         * Static representation of the {@link aoLevel} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AO_LEVEL: fieldBuilder.buildEdmTypeField('AOLevel', 'Edm.String', true),
        /**
         * Static representation of the {@link shortName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHORT_NAME: fieldBuilder.buildEdmTypeField(
          'ShortName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link parentGuid} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PARENT_GUID: fieldBuilder.buildEdmTypeField(
          'ParentGuid',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link terrIfnsfl} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TERR_IFNSFL: fieldBuilder.buildEdmTypeField(
          'TerrIFNSFL',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link offName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OFF_NAME: fieldBuilder.buildEdmTypeField('OffName', 'Edm.String', true),
        /**
         * Static representation of the {@link cityCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CITY_CODE: fieldBuilder.buildEdmTypeField(
          'CityCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link placeCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PLACE_CODE: fieldBuilder.buildEdmTypeField(
          'PlaceCode',
          'Edm.String',
          true
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
         * Static representation of the {@link planCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PLAN_CODE: fieldBuilder.buildEdmTypeField(
          'PlanCode',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', AddressObjects)
      };
    }

    return this._schema;
  }
}
