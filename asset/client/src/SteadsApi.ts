/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Steads } from './Steads';
import { SteadsRequestBuilder } from './SteadsRequestBuilder';
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
export class SteadsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<Steads<DeSerializersT>, DeSerializersT>
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
  ): SteadsApi<DeSerializersT> {
    return new SteadsApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = Steads;

  requestBuilder(): SteadsRequestBuilder<DeSerializersT> {
    return new SteadsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<Steads<DeSerializersT>, DeSerializersT> {
    return entityBuilder<Steads<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<Steads<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof Steads, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(Steads, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      Steads<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    STEAD_ID: OrderableEdmTypeField<
      Steads<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    REGION_CODE: OrderableEdmTypeField<
      Steads<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IFNSFL: OrderableEdmTypeField<
      Steads<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    START_DATE: OrderableEdmTypeField<
      Steads<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    END_DATE: OrderableEdmTypeField<
      Steads<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    DIV_TYPE: OrderableEdmTypeField<
      Steads<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    STEAD_GUID: OrderableEdmTypeField<
      Steads<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TERR_IFNSFL: OrderableEdmTypeField<
      Steads<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    NUMBER: OrderableEdmTypeField<
      Steads<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    POSTAL_CODE: OrderableEdmTypeField<
      Steads<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PARENT_GUID: OrderableEdmTypeField<
      Steads<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    OKATO: OrderableEdmTypeField<
      Steads<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<Steads<DeSerializers>>;
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
         * Static representation of the {@link steadId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STEAD_ID: fieldBuilder.buildEdmTypeField(
          'SteadId',
          'Edm.String',
          false
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
         * Static representation of the {@link ifnsfl} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IFNSFL: fieldBuilder.buildEdmTypeField('IFNSFL', 'Edm.String', true),
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
         * Static representation of the {@link endDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        END_DATE: fieldBuilder.buildEdmTypeField(
          'EndDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link divType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DIV_TYPE: fieldBuilder.buildEdmTypeField('DivType', 'Edm.String', true),
        /**
         * Static representation of the {@link steadGuid} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STEAD_GUID: fieldBuilder.buildEdmTypeField(
          'SteadGuid',
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
         * Static representation of the {@link number} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NUMBER: fieldBuilder.buildEdmTypeField('Number', 'Edm.String', true),
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
         * Static representation of the {@link parentGuid} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PARENT_GUID: fieldBuilder.buildEdmTypeField(
          'ParentGuid',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link okato} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OKATO: fieldBuilder.buildEdmTypeField('OKATO', 'Edm.String', true),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', Steads)
      };
    }

    return this._schema;
  }
}
