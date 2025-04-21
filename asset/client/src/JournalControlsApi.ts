/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { JournalControls } from './JournalControls';
import { JournalControlsRequestBuilder } from './JournalControlsRequestBuilder';
import { LedgerJournalAcTypeAll } from './LedgerJournalAcTypeAll';
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
export class JournalControlsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<JournalControls<DeSerializersT>, DeSerializersT>
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
  ): JournalControlsApi<DeSerializersT> {
    return new JournalControlsApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = JournalControls;

  requestBuilder(): JournalControlsRequestBuilder<DeSerializersT> {
    return new JournalControlsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    JournalControls<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<JournalControls<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<JournalControls<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof JournalControls, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        JournalControls,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      JournalControls<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    JOURNAL_NAME: OrderableEdmTypeField<
      JournalControls<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ACCOUNT_TYPE: EnumField<
      JournalControls<DeSerializers>,
      DeSerializersT,
      LedgerJournalAcTypeAll,
      true,
      true
    >;
    JOURNAL_LEGAL_ENTITY: OrderableEdmTypeField<
      JournalControls<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LEDGER_LEGAL_ENTITY: OrderableEdmTypeField<
      JournalControls<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ACCOUNT_STRUCTURE: OrderableEdmTypeField<
      JournalControls<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SEGMENT: OrderableEdmTypeField<
      JournalControls<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TO_VALUE: OrderableEdmTypeField<
      JournalControls<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FROM_VALUE: OrderableEdmTypeField<
      JournalControls<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<JournalControls<DeSerializers>>;
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
         * Static representation of the {@link journalName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        JOURNAL_NAME: fieldBuilder.buildEdmTypeField(
          'JournalName',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link accountType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACCOUNT_TYPE: fieldBuilder.buildEnumField(
          'AccountType',
          LedgerJournalAcTypeAll,
          true
        ),
        /**
         * Static representation of the {@link journalLegalEntity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        JOURNAL_LEGAL_ENTITY: fieldBuilder.buildEdmTypeField(
          'JournalLegalEntity',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link ledgerLegalEntity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LEDGER_LEGAL_ENTITY: fieldBuilder.buildEdmTypeField(
          'LedgerLegalEntity',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link accountStructure} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACCOUNT_STRUCTURE: fieldBuilder.buildEdmTypeField(
          'AccountStructure',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link segment} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SEGMENT: fieldBuilder.buildEdmTypeField('Segment', 'Edm.String', true),
        /**
         * Static representation of the {@link toValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TO_VALUE: fieldBuilder.buildEdmTypeField('ToValue', 'Edm.String', true),
        /**
         * Static representation of the {@link fromValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FROM_VALUE: fieldBuilder.buildEdmTypeField(
          'FromValue',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', JournalControls)
      };
    }

    return this._schema;
  }
}
