/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Houses } from './Houses';
import { HousesRequestBuilder } from './HousesRequestBuilder';
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
export class HousesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<Houses<DeSerializersT>, DeSerializersT>
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
  ): HousesApi<DeSerializersT> {
    return new HousesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = Houses;

  requestBuilder(): HousesRequestBuilder<DeSerializersT> {
    return new HousesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<Houses<DeSerializersT>, DeSerializersT> {
    return entityBuilder<Houses<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<Houses<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof Houses, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(Houses, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      Houses<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    HOUSE_ID: OrderableEdmTypeField<
      Houses<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    AO_GUID: OrderableEdmTypeField<
      Houses<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IFNSFL: OrderableEdmTypeField<
      Houses<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    HOUSE_GUID: OrderableEdmTypeField<
      Houses<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EST_STATUS: OrderableEdmTypeField<
      Houses<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    STR_STATUS: OrderableEdmTypeField<
      Houses<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DIV_TYPE: OrderableEdmTypeField<
      Houses<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BUILD_NUM: OrderableEdmTypeField<
      Houses<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    OKATO: OrderableEdmTypeField<
      Houses<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    START_DATE: OrderableEdmTypeField<
      Houses<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    TERR_IFNSFL: OrderableEdmTypeField<
      Houses<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    HOUSE_NUM: OrderableEdmTypeField<
      Houses<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    POSTAL_CODE: OrderableEdmTypeField<
      Houses<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    END_DATE: OrderableEdmTypeField<
      Houses<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    STRUC_NUM: OrderableEdmTypeField<
      Houses<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<Houses<DeSerializers>>;
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
         * Static representation of the {@link houseId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        HOUSE_ID: fieldBuilder.buildEdmTypeField(
          'HouseId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link aoGuid} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AO_GUID: fieldBuilder.buildEdmTypeField('AOGuid', 'Edm.String', true),
        /**
         * Static representation of the {@link ifnsfl} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IFNSFL: fieldBuilder.buildEdmTypeField('IFNSFL', 'Edm.String', true),
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
         * Static representation of the {@link estStatus} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EST_STATUS: fieldBuilder.buildEdmTypeField(
          'EstStatus',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link strStatus} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STR_STATUS: fieldBuilder.buildEdmTypeField(
          'StrStatus',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link divType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DIV_TYPE: fieldBuilder.buildEdmTypeField('DivType', 'Edm.String', true),
        /**
         * Static representation of the {@link buildNum} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BUILD_NUM: fieldBuilder.buildEdmTypeField(
          'BuildNum',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link okato} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OKATO: fieldBuilder.buildEdmTypeField('OKATO', 'Edm.String', true),
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
         * Static representation of the {@link terrIfnsfl} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TERR_IFNSFL: fieldBuilder.buildEdmTypeField(
          'TerrIFNSFL',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link houseNum} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        HOUSE_NUM: fieldBuilder.buildEdmTypeField(
          'HouseNum',
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
         * Static representation of the {@link endDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        END_DATE: fieldBuilder.buildEdmTypeField(
          'EndDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link strucNum} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STRUC_NUM: fieldBuilder.buildEdmTypeField(
          'StrucNum',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', Houses)
      };
    }

    return this._schema;
  }
}
