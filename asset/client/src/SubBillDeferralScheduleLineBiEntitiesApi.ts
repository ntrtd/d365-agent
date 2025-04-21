/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { SubBillDeferralScheduleLineBiEntities } from './SubBillDeferralScheduleLineBiEntities';
import { SubBillDeferralScheduleLineBiEntitiesRequestBuilder } from './SubBillDeferralScheduleLineBiEntitiesRequestBuilder';
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
export class SubBillDeferralScheduleLineBiEntitiesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<
      SubBillDeferralScheduleLineBiEntities<DeSerializersT>,
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
  ): SubBillDeferralScheduleLineBiEntitiesApi<DeSerializersT> {
    return new SubBillDeferralScheduleLineBiEntitiesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = SubBillDeferralScheduleLineBiEntities;

  requestBuilder(): SubBillDeferralScheduleLineBiEntitiesRequestBuilder<DeSerializersT> {
    return new SubBillDeferralScheduleLineBiEntitiesRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    SubBillDeferralScheduleLineBiEntities<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      SubBillDeferralScheduleLineBiEntities<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    SubBillDeferralScheduleLineBiEntities<DeSerializersT>,
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
    typeof SubBillDeferralScheduleLineBiEntities,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        SubBillDeferralScheduleLineBiEntities,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      SubBillDeferralScheduleLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LINE: OrderableEdmTypeField<
      SubBillDeferralScheduleLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    SUB_BILL_DEFERRAL_SCHEDULE_NUMBER: OrderableEdmTypeField<
      SubBillDeferralScheduleLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    EXPIRATION_DATE: OrderableEdmTypeField<
      SubBillDeferralScheduleLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    SYS_CREATED_BY: OrderableEdmTypeField<
      SubBillDeferralScheduleLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SUB_BILL_DEFERRAL_RECOGNIZED: EnumField<
      SubBillDeferralScheduleLineBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    SUB_BILL_CUST_INVOICE_TRANS_REC_ID: OrderableEdmTypeField<
      SubBillDeferralScheduleLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    SYS_REC_VERSION: OrderableEdmTypeField<
      SubBillDeferralScheduleLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    SYS_DATA_AREA_ID: OrderableEdmTypeField<
      SubBillDeferralScheduleLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SOURCE_KEY: OrderableEdmTypeField<
      SubBillDeferralScheduleLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    SUB_BILL_DEFERRAL_END_DATE: OrderableEdmTypeField<
      SubBillDeferralScheduleLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    SUB_BILL_DEFERRAL_QTY: OrderableEdmTypeField<
      SubBillDeferralScheduleLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    SUB_BILL_DEFERRAL_STUBBED: EnumField<
      SubBillDeferralScheduleLineBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    SUB_BILL_DEFERRAL_EVENT_DESCRIPTION: OrderableEdmTypeField<
      SubBillDeferralScheduleLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    AMOUNT: OrderableEdmTypeField<
      SubBillDeferralScheduleLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    SUB_BILL_DEFERRAL_IS_ADJUSTMENT: EnumField<
      SubBillDeferralScheduleLineBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    SUB_BILL_DEFERRAL_RECOGNIZE_ON_POST: EnumField<
      SubBillDeferralScheduleLineBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    RECOGNITION_LEDGER_JOURNAL_TRANS: OrderableEdmTypeField<
      SubBillDeferralScheduleLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    SUB_BILL_DEFERRAL_START_DATE: OrderableEdmTypeField<
      SubBillDeferralScheduleLineBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    ALL_FIELDS: AllFields<SubBillDeferralScheduleLineBiEntities<DeSerializers>>;
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
         * Static representation of the {@link line} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LINE: fieldBuilder.buildEdmTypeField('Line', 'Edm.Int32', false),
        /**
         * Static representation of the {@link subBillDeferralScheduleNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUB_BILL_DEFERRAL_SCHEDULE_NUMBER: fieldBuilder.buildEdmTypeField(
          'SubBillDeferralScheduleNumber',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link expirationDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXPIRATION_DATE: fieldBuilder.buildEdmTypeField(
          'ExpirationDate',
          'Edm.DateTimeOffset',
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
         * Static representation of the {@link subBillDeferralRecognized} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUB_BILL_DEFERRAL_RECOGNIZED: fieldBuilder.buildEnumField(
          'SubBillDeferralRecognized',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link subBillCustInvoiceTransRecId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUB_BILL_CUST_INVOICE_TRANS_REC_ID: fieldBuilder.buildEdmTypeField(
          'SubBillCustInvoiceTransRecId',
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
         * Static representation of the {@link sysDataAreaId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SYS_DATA_AREA_ID: fieldBuilder.buildEdmTypeField(
          'SysDataAreaId',
          'Edm.String',
          true
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
         * Static representation of the {@link subBillDeferralEndDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUB_BILL_DEFERRAL_END_DATE: fieldBuilder.buildEdmTypeField(
          'SubBillDeferralEndDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link subBillDeferralQty} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUB_BILL_DEFERRAL_QTY: fieldBuilder.buildEdmTypeField(
          'SubBillDeferralQty',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link subBillDeferralStubbed} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUB_BILL_DEFERRAL_STUBBED: fieldBuilder.buildEnumField(
          'SubBillDeferralStubbed',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link subBillDeferralEventDescription} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUB_BILL_DEFERRAL_EVENT_DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'SubBillDeferralEventDescription',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link amount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AMOUNT: fieldBuilder.buildEdmTypeField('Amount', 'Edm.Decimal', false),
        /**
         * Static representation of the {@link subBillDeferralIsAdjustment} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUB_BILL_DEFERRAL_IS_ADJUSTMENT: fieldBuilder.buildEnumField(
          'SubBillDeferralIsAdjustment',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link subBillDeferralRecognizeOnPost} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUB_BILL_DEFERRAL_RECOGNIZE_ON_POST: fieldBuilder.buildEnumField(
          'SubBillDeferralRecognizeOnPost',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link recognitionLedgerJournalTrans} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RECOGNITION_LEDGER_JOURNAL_TRANS: fieldBuilder.buildEdmTypeField(
          'RecognitionLedgerJournalTrans',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link subBillDeferralStartDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUB_BILL_DEFERRAL_START_DATE: fieldBuilder.buildEdmTypeField(
          'SubBillDeferralStartDate',
          'Edm.DateTimeOffset',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', SubBillDeferralScheduleLineBiEntities)
      };
    }

    return this._schema;
  }
}
