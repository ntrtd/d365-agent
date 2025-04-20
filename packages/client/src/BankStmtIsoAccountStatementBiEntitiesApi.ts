/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BankStmtIsoAccountStatementBiEntities } from './BankStmtIsoAccountStatementBiEntities';
import { BankStmtIsoAccountStatementBiEntitiesRequestBuilder } from './BankStmtIsoAccountStatementBiEntitiesRequestBuilder';
import { BankStatementType } from './BankStatementType';
import { BankStatementStatus } from './BankStatementStatus';
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
export class BankStmtIsoAccountStatementBiEntitiesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<
      BankStmtIsoAccountStatementBiEntities<DeSerializersT>,
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
  ): BankStmtIsoAccountStatementBiEntitiesApi<DeSerializersT> {
    return new BankStmtIsoAccountStatementBiEntitiesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = BankStmtIsoAccountStatementBiEntities;

  requestBuilder(): BankStmtIsoAccountStatementBiEntitiesRequestBuilder<DeSerializersT> {
    return new BankStmtIsoAccountStatementBiEntitiesRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    BankStmtIsoAccountStatementBiEntities<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      BankStmtIsoAccountStatementBiEntities<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    BankStmtIsoAccountStatementBiEntities<DeSerializersT>,
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
    typeof BankStmtIsoAccountStatementBiEntities,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        BankStmtIsoAccountStatementBiEntities,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      BankStmtIsoAccountStatementBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SOURCE_KEY: OrderableEdmTypeField<
      BankStmtIsoAccountStatementBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    BANK_ACCOUNT_TABLE: OrderableEdmTypeField<
      BankStmtIsoAccountStatementBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TOTAL_ACCOUNTS_IN_GROUP: OrderableEdmTypeField<
      BankStmtIsoAccountStatementBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    ACCOUNT_ID_OTHER_ID: OrderableEdmTypeField<
      BankStmtIsoAccountStatementBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TOTAL_RECORDS_IN_GROUP: OrderableEdmTypeField<
      BankStmtIsoAccountStatementBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    BANK_STMT_ISO_DOCUMENT: OrderableEdmTypeField<
      BankStmtIsoAccountStatementBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    BANK_STATEMENT_TYPE: EnumField<
      BankStmtIsoAccountStatementBiEntities<DeSerializers>,
      DeSerializersT,
      BankStatementType,
      true,
      true
    >;
    GROUP_CONTROL_TOTAL: OrderableEdmTypeField<
      BankStmtIsoAccountStatementBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ACCOUNT_CURRENCY: OrderableEdmTypeField<
      BankStmtIsoAccountStatementBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SYS_DATA_AREA_ID: OrderableEdmTypeField<
      BankStmtIsoAccountStatementBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    STATUS: EnumField<
      BankStmtIsoAccountStatementBiEntities<DeSerializers>,
      DeSerializersT,
      BankStatementStatus,
      true,
      true
    >;
    MANUAL: EnumField<
      BankStmtIsoAccountStatementBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ACCOUNTING_DATE: OrderableEdmTypeField<
      BankStmtIsoAccountStatementBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    ACCOUNTING_DISTRIBUTION_TEMPLATE: OrderableEdmTypeField<
      BankStmtIsoAccountStatementBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    AS_OF_DATE_MODIFIER: OrderableEdmTypeField<
      BankStmtIsoAccountStatementBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    ADDITIONAL_STATEMENT_INFO: OrderableEdmTypeField<
      BankStmtIsoAccountStatementBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SWIFT_NO: OrderableEdmTypeField<
      BankStmtIsoAccountStatementBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ULTIMATE_RECEIVER_ID: OrderableEdmTypeField<
      BankStmtIsoAccountStatementBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    IDENTIFICATION: OrderableEdmTypeField<
      BankStmtIsoAccountStatementBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SOURCE_DOCUMENT_HEADER: OrderableEdmTypeField<
      BankStmtIsoAccountStatementBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    VALIDATED_BY: OrderableEdmTypeField<
      BankStmtIsoAccountStatementBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SYS_REC_VERSION: OrderableEdmTypeField<
      BankStmtIsoAccountStatementBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    GROUP_STATUS: OrderableEdmTypeField<
      BankStmtIsoAccountStatementBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    FROM_DATE_TIME: OrderableEdmTypeField<
      BankStmtIsoAccountStatementBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    VALIDATED_DATE: OrderableEdmTypeField<
      BankStmtIsoAccountStatementBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    REGISTRATION_ID: OrderableEdmTypeField<
      BankStmtIsoAccountStatementBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IBAN: OrderableEdmTypeField<
      BankStmtIsoAccountStatementBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VOUCHER: OrderableEdmTypeField<
      BankStmtIsoAccountStatementBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    POSTED: EnumField<
      BankStmtIsoAccountStatementBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ORIGINATOR_ID: OrderableEdmTypeField<
      BankStmtIsoAccountStatementBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    SEQUENCE_NUMBER: OrderableEdmTypeField<
      BankStmtIsoAccountStatementBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TO_DATE_TIME: OrderableEdmTypeField<
      BankStmtIsoAccountStatementBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    TOTAL_ENTRIES_NUMBER_OF_ENTRIES: OrderableEdmTypeField<
      BankStmtIsoAccountStatementBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    ALL_FIELDS: AllFields<BankStmtIsoAccountStatementBiEntities<DeSerializers>>;
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
         * Static representation of the {@link sourceKey} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SOURCE_KEY: fieldBuilder.buildEdmTypeField(
          'SourceKey',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link bankAccountTable} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BANK_ACCOUNT_TABLE: fieldBuilder.buildEdmTypeField(
          'BankAccountTable',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link totalAccountsInGroup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TOTAL_ACCOUNTS_IN_GROUP: fieldBuilder.buildEdmTypeField(
          'TotalAccountsInGroup',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link accountIdOtherId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACCOUNT_ID_OTHER_ID: fieldBuilder.buildEdmTypeField(
          'AccountIdOtherId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link totalRecordsInGroup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TOTAL_RECORDS_IN_GROUP: fieldBuilder.buildEdmTypeField(
          'TotalRecordsInGroup',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link bankStmtIsoDocument} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BANK_STMT_ISO_DOCUMENT: fieldBuilder.buildEdmTypeField(
          'BankStmtISODocument',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link bankStatementType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BANK_STATEMENT_TYPE: fieldBuilder.buildEnumField(
          'BankStatementType',
          BankStatementType,
          true
        ),
        /**
         * Static representation of the {@link groupControlTotal} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GROUP_CONTROL_TOTAL: fieldBuilder.buildEdmTypeField(
          'GroupControlTotal',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link accountCurrency} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACCOUNT_CURRENCY: fieldBuilder.buildEdmTypeField(
          'AccountCurrency',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link sysDataAreaId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SYS_DATA_AREA_ID: fieldBuilder.buildEdmTypeField(
          'SysDataAreaId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link status} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STATUS: fieldBuilder.buildEnumField(
          'Status',
          BankStatementStatus,
          true
        ),
        /**
         * Static representation of the {@link manual} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MANUAL: fieldBuilder.buildEnumField('Manual', NoYes, true),
        /**
         * Static representation of the {@link accountingDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACCOUNTING_DATE: fieldBuilder.buildEdmTypeField(
          'AccountingDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link accountingDistributionTemplate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACCOUNTING_DISTRIBUTION_TEMPLATE: fieldBuilder.buildEdmTypeField(
          'AccountingDistributionTemplate',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link asOfDateModifier} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AS_OF_DATE_MODIFIER: fieldBuilder.buildEdmTypeField(
          'AsOfDateModifier',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link additionalStatementInfo} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADDITIONAL_STATEMENT_INFO: fieldBuilder.buildEdmTypeField(
          'AdditionalStatementInfo',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link swiftNo} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SWIFT_NO: fieldBuilder.buildEdmTypeField('SwiftNo', 'Edm.String', true),
        /**
         * Static representation of the {@link ultimateReceiverId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ULTIMATE_RECEIVER_ID: fieldBuilder.buildEdmTypeField(
          'UltimateReceiverId',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link identification} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IDENTIFICATION: fieldBuilder.buildEdmTypeField(
          'Identification',
          'Edm.String',
          true
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
         * Static representation of the {@link validatedBy} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VALIDATED_BY: fieldBuilder.buildEdmTypeField(
          'ValidatedBy',
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
         * Static representation of the {@link groupStatus} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GROUP_STATUS: fieldBuilder.buildEdmTypeField(
          'GroupStatus',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link fromDateTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FROM_DATE_TIME: fieldBuilder.buildEdmTypeField(
          'FromDateTime',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link validatedDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VALIDATED_DATE: fieldBuilder.buildEdmTypeField(
          'ValidatedDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link registrationId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REGISTRATION_ID: fieldBuilder.buildEdmTypeField(
          'RegistrationId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link iban} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IBAN: fieldBuilder.buildEdmTypeField('IBAN', 'Edm.String', true),
        /**
         * Static representation of the {@link voucher} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VOUCHER: fieldBuilder.buildEdmTypeField('Voucher', 'Edm.String', true),
        /**
         * Static representation of the {@link posted} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        POSTED: fieldBuilder.buildEnumField('Posted', NoYes, true),
        /**
         * Static representation of the {@link originatorId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ORIGINATOR_ID: fieldBuilder.buildEdmTypeField(
          'OriginatorId',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link sequenceNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SEQUENCE_NUMBER: fieldBuilder.buildEdmTypeField(
          'SequenceNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link toDateTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TO_DATE_TIME: fieldBuilder.buildEdmTypeField(
          'ToDateTime',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link totalEntriesNumberOfEntries} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TOTAL_ENTRIES_NUMBER_OF_ENTRIES: fieldBuilder.buildEdmTypeField(
          'TotalEntriesNumberOfEntries',
          'Edm.Int32',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', BankStmtIsoAccountStatementBiEntities)
      };
    }

    return this._schema;
  }
}
