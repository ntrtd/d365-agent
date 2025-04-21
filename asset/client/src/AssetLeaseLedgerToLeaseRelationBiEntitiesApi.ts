/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { AssetLeaseLedgerToLeaseRelationBiEntities } from './AssetLeaseLedgerToLeaseRelationBiEntities';
import { AssetLeaseLedgerToLeaseRelationBiEntitiesRequestBuilder } from './AssetLeaseLedgerToLeaseRelationBiEntitiesRequestBuilder';
import { LedgerJournalType } from './LedgerJournalType';
import { NoYes } from './NoYes';
import { AssetLeaseJournalType } from './AssetLeaseJournalType';
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
export class AssetLeaseLedgerToLeaseRelationBiEntitiesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<
      AssetLeaseLedgerToLeaseRelationBiEntities<DeSerializersT>,
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
  ): AssetLeaseLedgerToLeaseRelationBiEntitiesApi<DeSerializersT> {
    return new AssetLeaseLedgerToLeaseRelationBiEntitiesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = AssetLeaseLedgerToLeaseRelationBiEntities;

  requestBuilder(): AssetLeaseLedgerToLeaseRelationBiEntitiesRequestBuilder<DeSerializersT> {
    return new AssetLeaseLedgerToLeaseRelationBiEntitiesRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    AssetLeaseLedgerToLeaseRelationBiEntities<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      AssetLeaseLedgerToLeaseRelationBiEntities<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    AssetLeaseLedgerToLeaseRelationBiEntities<DeSerializersT>,
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
    typeof AssetLeaseLedgerToLeaseRelationBiEntities,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        AssetLeaseLedgerToLeaseRelationBiEntities,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      AssetLeaseLedgerToLeaseRelationBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    JOURNAL_NUM: OrderableEdmTypeField<
      AssetLeaseLedgerToLeaseRelationBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PAYMENT_LINE_REC_ID: OrderableEdmTypeField<
      AssetLeaseLedgerToLeaseRelationBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    TXT: OrderableEdmTypeField<
      AssetLeaseLedgerToLeaseRelationBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SYS_CREATED_BY: OrderableEdmTypeField<
      AssetLeaseLedgerToLeaseRelationBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SYS_MODIFIED_BY: OrderableEdmTypeField<
      AssetLeaseLedgerToLeaseRelationBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SYS_DATA_AREA_ID: OrderableEdmTypeField<
      AssetLeaseLedgerToLeaseRelationBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SYS_REC_VERSION: OrderableEdmTypeField<
      AssetLeaseLedgerToLeaseRelationBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    SOURCE_KEY: OrderableEdmTypeField<
      AssetLeaseLedgerToLeaseRelationBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    JOURNAL_TYPE: EnumField<
      AssetLeaseLedgerToLeaseRelationBiEntities<DeSerializers>,
      DeSerializersT,
      LedgerJournalType,
      true,
      true
    >;
    SYS_CREATED_TRANSACTION_ID: OrderableEdmTypeField<
      AssetLeaseLedgerToLeaseRelationBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    LEASE_VERSION: OrderableEdmTypeField<
      AssetLeaseLedgerToLeaseRelationBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    REVERSED: EnumField<
      AssetLeaseLedgerToLeaseRelationBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    LEASE_ID: OrderableEdmTypeField<
      AssetLeaseLedgerToLeaseRelationBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LEASE_JOURNAL_TYPE: EnumField<
      AssetLeaseLedgerToLeaseRelationBiEntities<DeSerializers>,
      DeSerializersT,
      AssetLeaseJournalType,
      true,
      true
    >;
    SYS_MODIFIED_DATE_TIME: OrderableEdmTypeField<
      AssetLeaseLedgerToLeaseRelationBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    CREATED_ON: OrderableEdmTypeField<
      AssetLeaseLedgerToLeaseRelationBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    ALL_FIELDS: AllFields<
      AssetLeaseLedgerToLeaseRelationBiEntities<DeSerializers>
    >;
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
         * Static representation of the {@link journalNum} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        JOURNAL_NUM: fieldBuilder.buildEdmTypeField(
          'JournalNum',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link paymentLineRecId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAYMENT_LINE_REC_ID: fieldBuilder.buildEdmTypeField(
          'PaymentLineRecId',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link txt} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TXT: fieldBuilder.buildEdmTypeField('Txt', 'Edm.String', true),
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
         * Static representation of the {@link sysDataAreaId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SYS_DATA_AREA_ID: fieldBuilder.buildEdmTypeField(
          'SysDataAreaId',
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
         * Static representation of the {@link sourceKey} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SOURCE_KEY: fieldBuilder.buildEdmTypeField(
          'SourceKey',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link journalType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        JOURNAL_TYPE: fieldBuilder.buildEnumField(
          'JournalType',
          LedgerJournalType,
          true
        ),
        /**
         * Static representation of the {@link sysCreatedTransactionId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SYS_CREATED_TRANSACTION_ID: fieldBuilder.buildEdmTypeField(
          'SysCreatedTransactionId',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link leaseVersion} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LEASE_VERSION: fieldBuilder.buildEdmTypeField(
          'LeaseVersion',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link reversed} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REVERSED: fieldBuilder.buildEnumField('Reversed', NoYes, true),
        /**
         * Static representation of the {@link leaseId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LEASE_ID: fieldBuilder.buildEdmTypeField('LeaseId', 'Edm.String', true),
        /**
         * Static representation of the {@link leaseJournalType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LEASE_JOURNAL_TYPE: fieldBuilder.buildEnumField(
          'LeaseJournalType',
          AssetLeaseJournalType,
          true
        ),
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
        ALL_FIELDS: new AllFields(
          '*',
          AssetLeaseLedgerToLeaseRelationBiEntities
        )
      };
    }

    return this._schema;
  }
}
