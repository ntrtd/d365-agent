/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { DueAnnouncementJournals } from './DueAnnouncementJournals';
import { DueAnnouncementJournalsRequestBuilder } from './DueAnnouncementJournalsRequestBuilder';
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
  OrderableEdmTypeField
} from '@sap-cloud-sdk/odata-v4';
export class DueAnnouncementJournalsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<DueAnnouncementJournals<DeSerializersT>, DeSerializersT>
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
  ): DueAnnouncementJournalsApi<DeSerializersT> {
    return new DueAnnouncementJournalsApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = DueAnnouncementJournals;

  requestBuilder(): DueAnnouncementJournalsRequestBuilder<DeSerializersT> {
    return new DueAnnouncementJournalsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    DueAnnouncementJournals<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      DueAnnouncementJournals<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    DueAnnouncementJournals<DeSerializersT>,
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
    typeof DueAnnouncementJournals,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        DueAnnouncementJournals,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      DueAnnouncementJournals<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ANNOUNCEMENT_NUMBER: OrderableEdmTypeField<
      DueAnnouncementJournals<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    BANK_TRANSACTION_TYPE: OrderableEdmTypeField<
      DueAnnouncementJournals<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    JOURNAL_BATCH_NUMBER: OrderableEdmTypeField<
      DueAnnouncementJournals<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BANK_ACCOUNT: OrderableEdmTypeField<
      DueAnnouncementJournals<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CURRENCY: OrderableEdmTypeField<
      DueAnnouncementJournals<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DATE: OrderableEdmTypeField<
      DueAnnouncementJournals<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    AMOUNT: OrderableEdmTypeField<
      DueAnnouncementJournals<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      DueAnnouncementJournals<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<DueAnnouncementJournals<DeSerializers>>;
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
         * Static representation of the {@link announcementNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ANNOUNCEMENT_NUMBER: fieldBuilder.buildEdmTypeField(
          'AnnouncementNumber',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link bankTransactionType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BANK_TRANSACTION_TYPE: fieldBuilder.buildEdmTypeField(
          'BankTransactionType',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link journalBatchNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        JOURNAL_BATCH_NUMBER: fieldBuilder.buildEdmTypeField(
          'JournalBatchNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link bankAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BANK_ACCOUNT: fieldBuilder.buildEdmTypeField(
          'BankAccount',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link currency} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CURRENCY: fieldBuilder.buildEdmTypeField(
          'Currency',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link date} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DATE: fieldBuilder.buildEdmTypeField(
          'Date',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link amount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AMOUNT: fieldBuilder.buildEdmTypeField('Amount', 'Edm.Decimal', false),
        /**
         * Static representation of the {@link description} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'Description',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', DueAnnouncementJournals)
      };
    }

    return this._schema;
  }
}
