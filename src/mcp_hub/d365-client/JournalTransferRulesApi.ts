/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { JournalTransferRules } from './JournalTransferRules';
import { JournalTransferRulesRequestBuilder } from './JournalTransferRulesRequestBuilder';
import { SubledgerJournalTransferMode } from './SubledgerJournalTransferMode';
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
  EnumField
} from '@sap-cloud-sdk/odata-v4';
export class JournalTransferRulesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<JournalTransferRules<DeSerializersT>, DeSerializersT>
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
  ): JournalTransferRulesApi<DeSerializersT> {
    return new JournalTransferRulesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = JournalTransferRules;

  requestBuilder(): JournalTransferRulesRequestBuilder<DeSerializersT> {
    return new JournalTransferRulesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    JournalTransferRules<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<JournalTransferRules<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    JournalTransferRules<DeSerializersT>,
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
    typeof JournalTransferRules,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        JournalTransferRules,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      JournalTransferRules<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LEGAL_ENTITY_ID: OrderableEdmTypeField<
      JournalTransferRules<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SOURCE_DOCUMENT_TYPE: OrderableEdmTypeField<
      JournalTransferRules<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    TRANSFER_MODE: EnumField<
      JournalTransferRules<DeSerializers>,
      DeSerializersT,
      SubledgerJournalTransferMode,
      true,
      true
    >;
    NOTIFICATION_GROUP: OrderableEdmTypeField<
      JournalTransferRules<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SUMMARIZE_ACCOUNTING_ENTRIES: EnumField<
      JournalTransferRules<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ALL_FIELDS: AllFields<JournalTransferRules<DeSerializers>>;
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
         * Static representation of the {@link legalEntityId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LEGAL_ENTITY_ID: fieldBuilder.buildEdmTypeField(
          'LegalEntityId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link sourceDocumentType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SOURCE_DOCUMENT_TYPE: fieldBuilder.buildEdmTypeField(
          'SourceDocumentType',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link transferMode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSFER_MODE: fieldBuilder.buildEnumField(
          'TransferMode',
          SubledgerJournalTransferMode,
          true
        ),
        /**
         * Static representation of the {@link notificationGroup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NOTIFICATION_GROUP: fieldBuilder.buildEdmTypeField(
          'NotificationGroup',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link summarizeAccountingEntries} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUMMARIZE_ACCOUNTING_ENTRIES: fieldBuilder.buildEnumField(
          'SummarizeAccountingEntries',
          NoYes,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', JournalTransferRules)
      };
    }

    return this._schema;
  }
}
