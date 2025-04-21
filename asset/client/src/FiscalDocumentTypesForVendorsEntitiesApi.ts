/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { FiscalDocumentTypesForVendorsEntities } from './FiscalDocumentTypesForVendorsEntities';
import { FiscalDocumentTypesForVendorsEntitiesRequestBuilder } from './FiscalDocumentTypesForVendorsEntitiesRequestBuilder';
import { TableGroupAll } from './TableGroupAll';
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
export class FiscalDocumentTypesForVendorsEntitiesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<
      FiscalDocumentTypesForVendorsEntities<DeSerializersT>,
      DeSerializersT
    >
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
  ): FiscalDocumentTypesForVendorsEntitiesApi<DeSerializersT> {
    return new FiscalDocumentTypesForVendorsEntitiesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = FiscalDocumentTypesForVendorsEntities;

  requestBuilder(): FiscalDocumentTypesForVendorsEntitiesRequestBuilder<DeSerializersT> {
    return new FiscalDocumentTypesForVendorsEntitiesRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    FiscalDocumentTypesForVendorsEntities<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      FiscalDocumentTypesForVendorsEntities<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    FiscalDocumentTypesForVendorsEntities<DeSerializersT>,
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
    typeof FiscalDocumentTypesForVendorsEntities,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        FiscalDocumentTypesForVendorsEntities,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      FiscalDocumentTypesForVendorsEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ACCOUNT_CODE: EnumField<
      FiscalDocumentTypesForVendorsEntities<DeSerializers>,
      DeSerializersT,
      TableGroupAll,
      true,
      true
    >;
    ACCOUNT_RELATION: OrderableEdmTypeField<
      FiscalDocumentTypesForVendorsEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    FISCAL_ESTABLISHMENT_ID: OrderableEdmTypeField<
      FiscalDocumentTypesForVendorsEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    FISCAL_DOCUMENT_TYPE_ID: OrderableEdmTypeField<
      FiscalDocumentTypesForVendorsEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<FiscalDocumentTypesForVendorsEntities<DeSerializers>>;
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
         * Static representation of the {@link accountCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACCOUNT_CODE: fieldBuilder.buildEnumField(
          'AccountCode',
          TableGroupAll,
          true
        ),
        /**
         * Static representation of the {@link accountRelation} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACCOUNT_RELATION: fieldBuilder.buildEdmTypeField(
          'AccountRelation',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link fiscalEstablishmentId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FISCAL_ESTABLISHMENT_ID: fieldBuilder.buildEdmTypeField(
          'FiscalEstablishmentId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link fiscalDocumentTypeId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FISCAL_DOCUMENT_TYPE_ID: fieldBuilder.buildEdmTypeField(
          'FiscalDocumentTypeId',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', FiscalDocumentTypesForVendorsEntities)
      };
    }

    return this._schema;
  }
}
