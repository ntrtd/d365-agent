/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { IdentityCardTables } from './IdentityCardTables';
import { IdentityCardTablesRequestBuilder } from './IdentityCardTablesRequestBuilder';
import { IdentityCardTypePfRu } from './IdentityCardTypePfRu';
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
export class IdentityCardTablesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<IdentityCardTables<DeSerializersT>, DeSerializersT>
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
  ): IdentityCardTablesApi<DeSerializersT> {
    return new IdentityCardTablesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = IdentityCardTables;

  requestBuilder(): IdentityCardTablesRequestBuilder<DeSerializersT> {
    return new IdentityCardTablesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    IdentityCardTables<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<IdentityCardTables<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    IdentityCardTables<DeSerializersT>,
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
    typeof IdentityCardTables,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        IdentityCardTables,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      IdentityCardTables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    DOCUMENT_CODE: OrderableEdmTypeField<
      IdentityCardTables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    IDENTITY_CARD_NAME_PF: OrderableEdmTypeField<
      IdentityCardTables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IDENTITY_CARD_NAMEMIDDLE: OrderableEdmTypeField<
      IdentityCardTables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SERIES_TEMPLATE: OrderableEdmTypeField<
      IdentityCardTables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IDENTITY_CARD_NAME_FULL: OrderableEdmTypeField<
      IdentityCardTables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TYPE: EnumField<
      IdentityCardTables<DeSerializers>,
      DeSerializersT,
      IdentityCardTypePfRu,
      true,
      true
    >;
    NUMBER_TEMPLATE: OrderableEdmTypeField<
      IdentityCardTables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IDENTITY_CARD_NAME_SHORT: OrderableEdmTypeField<
      IdentityCardTables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    AGE: OrderableEdmTypeField<
      IdentityCardTables<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    ALL_FIELDS: AllFields<IdentityCardTables<DeSerializers>>;
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
         * Static representation of the {@link documentCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DOCUMENT_CODE: fieldBuilder.buildEdmTypeField(
          'DocumentCode',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link identityCardNamePf} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IDENTITY_CARD_NAME_PF: fieldBuilder.buildEdmTypeField(
          'IdentityCardNamePf',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link identityCardNamemiddle} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IDENTITY_CARD_NAMEMIDDLE: fieldBuilder.buildEdmTypeField(
          'IdentityCardNamemiddle',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link seriesTemplate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SERIES_TEMPLATE: fieldBuilder.buildEdmTypeField(
          'SeriesTemplate',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link identityCardNameFull} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IDENTITY_CARD_NAME_FULL: fieldBuilder.buildEdmTypeField(
          'IdentityCardNameFull',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link type} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TYPE: fieldBuilder.buildEnumField('Type', IdentityCardTypePfRu, true),
        /**
         * Static representation of the {@link numberTemplate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NUMBER_TEMPLATE: fieldBuilder.buildEdmTypeField(
          'NumberTemplate',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link identityCardNameShort} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IDENTITY_CARD_NAME_SHORT: fieldBuilder.buildEdmTypeField(
          'IdentityCardNameShort',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link age} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AGE: fieldBuilder.buildEdmTypeField('Age', 'Edm.Int32', false),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', IdentityCardTables)
      };
    }

    return this._schema;
  }
}
