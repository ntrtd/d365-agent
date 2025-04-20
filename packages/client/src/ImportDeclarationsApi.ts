/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ImportDeclarations } from './ImportDeclarations';
import { ImportDeclarationsRequestBuilder } from './ImportDeclarationsRequestBuilder';
import { EfDocTransportModeBr } from './EfDocTransportModeBr';
import { PurchDiTypeBr } from './PurchDiTypeBr';
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
export class ImportDeclarationsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<ImportDeclarations<DeSerializersT>, DeSerializersT>
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
  ): ImportDeclarationsApi<DeSerializersT> {
    return new ImportDeclarationsApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = ImportDeclarations;

  requestBuilder(): ImportDeclarationsRequestBuilder<DeSerializersT> {
    return new ImportDeclarationsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    ImportDeclarations<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<ImportDeclarations<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    ImportDeclarations<DeSerializersT>,
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
    typeof ImportDeclarations,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        ImportDeclarations,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      ImportDeclarations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    IMPORT_DECLARATION_NUMBER: OrderableEdmTypeField<
      ImportDeclarations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    NATIONALIZATION_DATE: OrderableEdmTypeField<
      ImportDeclarations<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    DRAW_BACK_NUMBER: OrderableEdmTypeField<
      ImportDeclarations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TRANSPORT_MODE: EnumField<
      ImportDeclarations<DeSerializers>,
      DeSerializersT,
      EfDocTransportModeBr,
      true,
      true
    >;
    PORT: OrderableEdmTypeField<
      ImportDeclarations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IMPORT_DECLARATION_TYPE: EnumField<
      ImportDeclarations<DeSerializers>,
      DeSerializersT,
      PurchDiTypeBr,
      true,
      true
    >;
    AFRMM: OrderableEdmTypeField<
      ImportDeclarations<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    IMPORT_DECLARATION_DATE: OrderableEdmTypeField<
      ImportDeclarations<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    ALL_FIELDS: AllFields<ImportDeclarations<DeSerializers>>;
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
         * Static representation of the {@link importDeclarationNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IMPORT_DECLARATION_NUMBER: fieldBuilder.buildEdmTypeField(
          'ImportDeclarationNumber',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link nationalizationDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NATIONALIZATION_DATE: fieldBuilder.buildEdmTypeField(
          'NationalizationDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link drawBackNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DRAW_BACK_NUMBER: fieldBuilder.buildEdmTypeField(
          'DrawBackNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link transportMode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSPORT_MODE: fieldBuilder.buildEnumField(
          'TransportMode',
          EfDocTransportModeBr,
          true
        ),
        /**
         * Static representation of the {@link port} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PORT: fieldBuilder.buildEdmTypeField('Port', 'Edm.String', true),
        /**
         * Static representation of the {@link importDeclarationType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IMPORT_DECLARATION_TYPE: fieldBuilder.buildEnumField(
          'ImportDeclarationType',
          PurchDiTypeBr,
          true
        ),
        /**
         * Static representation of the {@link afrmm} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AFRMM: fieldBuilder.buildEdmTypeField('AFRMM', 'Edm.Decimal', false),
        /**
         * Static representation of the {@link importDeclarationDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IMPORT_DECLARATION_DATE: fieldBuilder.buildEdmTypeField(
          'ImportDeclarationDate',
          'Edm.DateTimeOffset',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', ImportDeclarations)
      };
    }

    return this._schema;
  }
}
