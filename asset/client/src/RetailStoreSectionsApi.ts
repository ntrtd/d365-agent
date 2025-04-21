/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RetailStoreSections } from './RetailStoreSections';
import { RetailStoreSectionsRequestBuilder } from './RetailStoreSectionsRequestBuilder';
import { RetailSizeUnit } from './RetailSizeUnit';
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
export class RetailStoreSectionsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<RetailStoreSections<DeSerializersT>, DeSerializersT>
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
  ): RetailStoreSectionsApi<DeSerializersT> {
    return new RetailStoreSectionsApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = RetailStoreSections;

  requestBuilder(): RetailStoreSectionsRequestBuilder<DeSerializersT> {
    return new RetailStoreSectionsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    RetailStoreSections<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<RetailStoreSections<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    RetailStoreSections<DeSerializersT>,
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
    typeof RetailStoreSections,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        RetailStoreSections,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      RetailStoreSections<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SECTION_ID: OrderableEdmTypeField<
      RetailStoreSections<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    OM_OPERATING_UNIT_NUMBER: OrderableEdmTypeField<
      RetailStoreSections<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    NAME: OrderableEdmTypeField<
      RetailStoreSections<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SIZE: OrderableEdmTypeField<
      RetailStoreSections<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    LAST_CHECKED_STOCK: OrderableEdmTypeField<
      RetailStoreSections<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    SIZE_UNIT: EnumField<
      RetailStoreSections<DeSerializers>,
      DeSerializersT,
      RetailSizeUnit,
      true,
      true
    >;
    ALL_FIELDS: AllFields<RetailStoreSections<DeSerializers>>;
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
         * Static representation of the {@link sectionId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SECTION_ID: fieldBuilder.buildEdmTypeField(
          'SectionId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link omOperatingUnitNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OM_OPERATING_UNIT_NUMBER: fieldBuilder.buildEdmTypeField(
          'OMOperatingUnitNumber',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link name} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NAME: fieldBuilder.buildEdmTypeField('Name', 'Edm.String', true),
        /**
         * Static representation of the {@link size} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SIZE: fieldBuilder.buildEdmTypeField('Size', 'Edm.Decimal', false),
        /**
         * Static representation of the {@link lastCheckedStock} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LAST_CHECKED_STOCK: fieldBuilder.buildEdmTypeField(
          'LastCheckedStock',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link sizeUnit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SIZE_UNIT: fieldBuilder.buildEnumField(
          'SizeUnit',
          RetailSizeUnit,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', RetailStoreSections)
      };
    }

    return this._schema;
  }
}
