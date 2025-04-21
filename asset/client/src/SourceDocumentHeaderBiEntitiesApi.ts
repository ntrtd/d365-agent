/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { SourceDocumentHeaderBiEntities } from './SourceDocumentHeaderBiEntities';
import { SourceDocumentHeaderBiEntitiesRequestBuilder } from './SourceDocumentHeaderBiEntitiesRequestBuilder';
import { SourceDocumentAccountingStatus } from './SourceDocumentAccountingStatus';
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
export class SourceDocumentHeaderBiEntitiesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<SourceDocumentHeaderBiEntities<DeSerializersT>, DeSerializersT>
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
  ): SourceDocumentHeaderBiEntitiesApi<DeSerializersT> {
    return new SourceDocumentHeaderBiEntitiesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = SourceDocumentHeaderBiEntities;

  requestBuilder(): SourceDocumentHeaderBiEntitiesRequestBuilder<DeSerializersT> {
    return new SourceDocumentHeaderBiEntitiesRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    SourceDocumentHeaderBiEntities<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      SourceDocumentHeaderBiEntities<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    SourceDocumentHeaderBiEntities<DeSerializersT>,
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
    typeof SourceDocumentHeaderBiEntities,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        SourceDocumentHeaderBiEntities,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    SOURCE_KEY: OrderableEdmTypeField<
      SourceDocumentHeaderBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    TYPE_ENUM_VALUE: OrderableEdmTypeField<
      SourceDocumentHeaderBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    TYPE_ENUM_NAME: OrderableEdmTypeField<
      SourceDocumentHeaderBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SYS_REC_VERSION: OrderableEdmTypeField<
      SourceDocumentHeaderBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    ACCOUNTING_STATUS: EnumField<
      SourceDocumentHeaderBiEntities<DeSerializers>,
      DeSerializersT,
      SourceDocumentAccountingStatus,
      true,
      true
    >;
    SOURCE_RELATION_TYPE: OrderableEdmTypeField<
      SourceDocumentHeaderBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    CREATED_ON: OrderableEdmTypeField<
      SourceDocumentHeaderBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    ALL_FIELDS: AllFields<SourceDocumentHeaderBiEntities<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link sourceKey} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SOURCE_KEY: fieldBuilder.buildEdmTypeField(
          'SourceKey',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link typeEnumValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TYPE_ENUM_VALUE: fieldBuilder.buildEdmTypeField(
          'TypeEnumValue',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link typeEnumName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TYPE_ENUM_NAME: fieldBuilder.buildEdmTypeField(
          'TypeEnumName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link sysRecVersion} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SYS_REC_VERSION: fieldBuilder.buildEdmTypeField(
          'SysRecVersion',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link accountingStatus} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACCOUNTING_STATUS: fieldBuilder.buildEnumField(
          'AccountingStatus',
          SourceDocumentAccountingStatus,
          true
        ),
        /**
         * Static representation of the {@link sourceRelationType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SOURCE_RELATION_TYPE: fieldBuilder.buildEdmTypeField(
          'SourceRelationType',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link createdOn} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CREATED_ON: fieldBuilder.buildEdmTypeField(
          'CreatedOn',
          'Edm.DateTimeOffset',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', SourceDocumentHeaderBiEntities)
      };
    }

    return this._schema;
  }
}
