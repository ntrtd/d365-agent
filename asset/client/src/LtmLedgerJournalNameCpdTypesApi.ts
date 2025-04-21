/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { LtmLedgerJournalNameCpdTypes } from './LtmLedgerJournalNameCpdTypes';
import { LtmLedgerJournalNameCpdTypesRequestBuilder } from './LtmLedgerJournalNameCpdTypesRequestBuilder';
import { LtmcpdPaymentMediaType } from './LtmcpdPaymentMediaType';
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
export class LtmLedgerJournalNameCpdTypesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<LtmLedgerJournalNameCpdTypes<DeSerializersT>, DeSerializersT>
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
  ): LtmLedgerJournalNameCpdTypesApi<DeSerializersT> {
    return new LtmLedgerJournalNameCpdTypesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = LtmLedgerJournalNameCpdTypes;

  requestBuilder(): LtmLedgerJournalNameCpdTypesRequestBuilder<DeSerializersT> {
    return new LtmLedgerJournalNameCpdTypesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    LtmLedgerJournalNameCpdTypes<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      LtmLedgerJournalNameCpdTypes<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    LtmLedgerJournalNameCpdTypes<DeSerializersT>,
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
    typeof LtmLedgerJournalNameCpdTypes,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        LtmLedgerJournalNameCpdTypes,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      LtmLedgerJournalNameCpdTypes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    JOURNAL_NAME: OrderableEdmTypeField<
      LtmLedgerJournalNameCpdTypes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    CPD_TYPE: EnumField<
      LtmLedgerJournalNameCpdTypes<DeSerializers>,
      DeSerializersT,
      LtmcpdPaymentMediaType,
      true,
      true
    >;
    CPD_ENABLE_ACTION_EXIT: EnumField<
      LtmLedgerJournalNameCpdTypes<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    CPD_ENABLE_ACTION_ACCRUAL: EnumField<
      LtmLedgerJournalNameCpdTypes<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    CPD_ENABLE_ACTION_EMISSION: EnumField<
      LtmLedgerJournalNameCpdTypes<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    CPD_ENABLE_ACTION_ENTER: EnumField<
      LtmLedgerJournalNameCpdTypes<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    CPD_ENABLE_ACTION_CREDIT: EnumField<
      LtmLedgerJournalNameCpdTypes<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    CPD_ENABLE_ACTION_CANCEL: EnumField<
      LtmLedgerJournalNameCpdTypes<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    CPD_ENABLE_ACTION_RE_ENTRY: EnumField<
      LtmLedgerJournalNameCpdTypes<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    CPD_DEFAULT_TYPE: EnumField<
      LtmLedgerJournalNameCpdTypes<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    CPD_ENABLE_ACTION_DEBIT: EnumField<
      LtmLedgerJournalNameCpdTypes<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ALL_FIELDS: AllFields<LtmLedgerJournalNameCpdTypes<DeSerializers>>;
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
         * Static representation of the {@link cpdType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CPD_TYPE: fieldBuilder.buildEnumField(
          'CPDType',
          LtmcpdPaymentMediaType,
          true
        ),
        /**
         * Static representation of the {@link cpdEnableActionExit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CPD_ENABLE_ACTION_EXIT: fieldBuilder.buildEnumField(
          'CPDEnableActionExit',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link cpdEnableActionAccrual} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CPD_ENABLE_ACTION_ACCRUAL: fieldBuilder.buildEnumField(
          'CPDEnableActionAccrual',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link cpdEnableActionEmission} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CPD_ENABLE_ACTION_EMISSION: fieldBuilder.buildEnumField(
          'CPDEnableActionEmission',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link cpdEnableActionEnter} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CPD_ENABLE_ACTION_ENTER: fieldBuilder.buildEnumField(
          'CPDEnableActionEnter',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link cpdEnableActionCredit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CPD_ENABLE_ACTION_CREDIT: fieldBuilder.buildEnumField(
          'CPDEnableActionCredit',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link cpdEnableActionCancel} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CPD_ENABLE_ACTION_CANCEL: fieldBuilder.buildEnumField(
          'CPDEnableActionCancel',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link cpdEnableActionReEntry} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CPD_ENABLE_ACTION_RE_ENTRY: fieldBuilder.buildEnumField(
          'CPDEnableActionReEntry',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link cpdDefaultType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CPD_DEFAULT_TYPE: fieldBuilder.buildEnumField(
          'CPDDefaultType',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link cpdEnableActionDebit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CPD_ENABLE_ACTION_DEBIT: fieldBuilder.buildEnumField(
          'CPDEnableActionDebit',
          NoYes,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', LtmLedgerJournalNameCpdTypes)
      };
    }

    return this._schema;
  }
}
