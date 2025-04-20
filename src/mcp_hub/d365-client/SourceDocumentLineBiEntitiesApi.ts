/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { SourceDocumentLineBiEntities } from './SourceDocumentLineBiEntities';
import { SourceDocumentLineBiEntitiesRequestBuilder } from './SourceDocumentLineBiEntitiesRequestBuilder';
import { SourceDocumentLineAccountingStatus } from './SourceDocumentLineAccountingStatus';
import { NoYes } from './NoYes';
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
  EnumField,
  EdmTypeField
} from '@sap-cloud-sdk/odata-v4';
export class SourceDocumentLineBiEntitiesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<SourceDocumentLineBiEntities<DeSerializersT>, DeSerializersT>
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
  ): SourceDocumentLineBiEntitiesApi<DeSerializersT> {
    return new SourceDocumentLineBiEntitiesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = SourceDocumentLineBiEntities;

  requestBuilder(): SourceDocumentLineBiEntitiesRequestBuilder<DeSerializersT> {
    return new SourceDocumentLineBiEntitiesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    SourceDocumentLineBiEntities<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      SourceDocumentLineBiEntities<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    SourceDocumentLineBiEntities<DeSerializersT>,
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
    typeof SourceDocumentLineBiEntities,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        SourceDocumentLineBiEntities,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    SOURCE_KEY: OrderableEdmTypeField<
      SourceDocumentLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    SYS_CREATED_BY: OrderableEdmTypeField<
      SourceDocumentLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SYS_MODIFIED_BY: OrderableEdmTypeField<
      SourceDocumentLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DRAFT_VERSION: OrderableEdmTypeField<
      SourceDocumentLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    PARENT_SOURCE_DOCUMENT_LINE: OrderableEdmTypeField<
      SourceDocumentLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    SOURCE_DOCUMENT_HEADER: OrderableEdmTypeField<
      SourceDocumentLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    SYS_REC_VERSION: OrderableEdmTypeField<
      SourceDocumentLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    TERM_QUANTITY: OrderableEdmTypeField<
      SourceDocumentLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ACCOUNTING_STATUS: EnumField<
      SourceDocumentLineBiEntities<DeSerializers>,
      DeSerializersT,
      SourceDocumentLineAccountingStatus,
      true,
      true
    >;
    SOURCE_RELATION_TYPE: OrderableEdmTypeField<
      SourceDocumentLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    EXCHANGE_RATE_DATE: OrderableEdmTypeField<
      SourceDocumentLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    STATE_CONTAINER: EdmTypeField<
      SourceDocumentLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Binary',
      true,
      true
    >;
    TYPE_ENUM_NAME: OrderableEdmTypeField<
      SourceDocumentLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TYPE_ENUM_VALUE: OrderableEdmTypeField<
      SourceDocumentLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    IS_FINAL: EnumField<
      SourceDocumentLineBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    SYS_MODIFIED_DATE_TIME: OrderableEdmTypeField<
      SourceDocumentLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    CREATED_ON: OrderableEdmTypeField<
      SourceDocumentLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    ALL_FIELDS: AllFields<SourceDocumentLineBiEntities<DeSerializers>>;
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
         * Static representation of the {@link sysCreatedBy} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SYS_CREATED_BY: fieldBuilder.buildEdmTypeField(
          'SysCreatedBy',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link sysModifiedBy} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SYS_MODIFIED_BY: fieldBuilder.buildEdmTypeField(
          'SysModifiedBy',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link draftVersion} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DRAFT_VERSION: fieldBuilder.buildEdmTypeField(
          'DraftVersion',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link parentSourceDocumentLine} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PARENT_SOURCE_DOCUMENT_LINE: fieldBuilder.buildEdmTypeField(
          'ParentSourceDocumentLine',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link sourceDocumentHeader} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SOURCE_DOCUMENT_HEADER: fieldBuilder.buildEdmTypeField(
          'SourceDocumentHeader',
          'Edm.Int64',
          false
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
         * Static representation of the {@link termQuantity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TERM_QUANTITY: fieldBuilder.buildEdmTypeField(
          'TermQuantity',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link accountingStatus} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACCOUNTING_STATUS: fieldBuilder.buildEnumField(
          'AccountingStatus',
          SourceDocumentLineAccountingStatus,
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
         * Static representation of the {@link exchangeRateDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXCHANGE_RATE_DATE: fieldBuilder.buildEdmTypeField(
          'ExchangeRateDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link stateContainer} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STATE_CONTAINER: fieldBuilder.buildEdmTypeField(
          'StateContainer',
          'Edm.Binary',
          true
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
         * Static representation of the {@link typeEnumValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TYPE_ENUM_VALUE: fieldBuilder.buildEdmTypeField(
          'TypeEnumValue',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link isFinal} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_FINAL: fieldBuilder.buildEnumField('IsFinal', NoYes, true),
        /**
         * Static representation of the {@link sysModifiedDateTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SYS_MODIFIED_DATE_TIME: fieldBuilder.buildEdmTypeField(
          'SysModifiedDateTime',
          'Edm.DateTimeOffset',
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
        ALL_FIELDS: new AllFields('*', SourceDocumentLineBiEntities)
      };
    }

    return this._schema;
  }
}
