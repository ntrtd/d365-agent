/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { SubBillDeferralScheduleTableBiEntities } from './SubBillDeferralScheduleTableBiEntities';
import { SubBillDeferralScheduleTableBiEntitiesRequestBuilder } from './SubBillDeferralScheduleTableBiEntitiesRequestBuilder';
import { SubBillDeferralSourceRecType } from './SubBillDeferralSourceRecType';
import { NoYes } from './NoYes';
import { SubBillDeferralScheduleStatus } from './SubBillDeferralScheduleStatus';
import { SubBillDeferralTransactionType } from './SubBillDeferralTransactionType';
import { DebitCredit } from './DebitCredit';
import { SubBillDeferralEventAllocationType } from './SubBillDeferralEventAllocationType';
import { SubBillDeferralScheduleCreationSource } from './SubBillDeferralScheduleCreationSource';
import { SubBillDeferralDistributionType } from './SubBillDeferralDistributionType';
import { SubBillDeferralScheduleType } from './SubBillDeferralScheduleType';
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
export class SubBillDeferralScheduleTableBiEntitiesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<
      SubBillDeferralScheduleTableBiEntities<DeSerializersT>,
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
  ): SubBillDeferralScheduleTableBiEntitiesApi<DeSerializersT> {
    return new SubBillDeferralScheduleTableBiEntitiesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = SubBillDeferralScheduleTableBiEntities;

  requestBuilder(): SubBillDeferralScheduleTableBiEntitiesRequestBuilder<DeSerializersT> {
    return new SubBillDeferralScheduleTableBiEntitiesRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    SubBillDeferralScheduleTableBiEntities<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      SubBillDeferralScheduleTableBiEntities<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    SubBillDeferralScheduleTableBiEntities<DeSerializersT>,
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
    typeof SubBillDeferralScheduleTableBiEntities,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        SubBillDeferralScheduleTableBiEntities,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      SubBillDeferralScheduleTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SUB_BILL_DEFERRAL_SCHEDULE_NUMBER: OrderableEdmTypeField<
      SubBillDeferralScheduleTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SUB_BILL_DEFERRAL_SOURCE_REC_TYPE: EnumField<
      SubBillDeferralScheduleTableBiEntities<DeSerializers>,
      DeSerializersT,
      SubBillDeferralSourceRecType,
      true,
      true
    >;
    SUB_BILL_DEFERRAL_ON_HOLD_TRANSFERRED: EnumField<
      SubBillDeferralScheduleTableBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    SUB_BILL_DEFERRAL_ORIGINAL_END_DATE: OrderableEdmTypeField<
      SubBillDeferralScheduleTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    CUSTOMER_LINE_NUM: OrderableEdmTypeField<
      SubBillDeferralScheduleTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    SOURCE_TRANS_LINE_DEF_REC_ID: OrderableEdmTypeField<
      SubBillDeferralScheduleTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    PROJ_TRANS_ID: OrderableEdmTypeField<
      SubBillDeferralScheduleTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TRANS_DATE: OrderableEdmTypeField<
      SubBillDeferralScheduleTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    SUB_BILL_DEFERRAL_CONSOLIDATE_PRIOR_PERIODS: EnumField<
      SubBillDeferralScheduleTableBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    PROJ_FUNDING_SOURCE: OrderableEdmTypeField<
      SubBillDeferralScheduleTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    SUB_BILL_DEFERRAL_SCHEDULE_STATUS: EnumField<
      SubBillDeferralScheduleTableBiEntities<DeSerializers>,
      DeSerializersT,
      SubBillDeferralScheduleStatus,
      true,
      true
    >;
    SUB_BILL_DEFERRAL_TRANSACTION_TYPE: EnumField<
      SubBillDeferralScheduleTableBiEntities<DeSerializers>,
      DeSerializersT,
      SubBillDeferralTransactionType,
      true,
      true
    >;
    SUB_BILL_DEFERRAL_ORIGINAL_START_DATE: OrderableEdmTypeField<
      SubBillDeferralScheduleTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    EXTERNAL_ITEM_ID: OrderableEdmTypeField<
      SubBillDeferralScheduleTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      SubBillDeferralScheduleTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SUB_BILL_DEFERRAL_EQUAL_PER_PERIOD: EnumField<
      SubBillDeferralScheduleTableBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    SALES_ID: OrderableEdmTypeField<
      SubBillDeferralScheduleTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SUB_BILL_DEFERRAL_RECOGNITION_TYPE: EnumField<
      SubBillDeferralScheduleTableBiEntities<DeSerializers>,
      DeSerializersT,
      DebitCredit,
      true,
      true
    >;
    SUB_BILL_DEFERRAL_EVENT_ALLOCATION_TYPE: EnumField<
      SubBillDeferralScheduleTableBiEntities<DeSerializers>,
      DeSerializersT,
      SubBillDeferralEventAllocationType,
      true,
      true
    >;
    SYS_DATA_AREA_ID: OrderableEdmTypeField<
      SubBillDeferralScheduleTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SUB_BILL_DEFERRAL_RECLASSIFICATION_DATE: OrderableEdmTypeField<
      SubBillDeferralScheduleTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    INVOICE_ID: OrderableEdmTypeField<
      SubBillDeferralScheduleTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SYS_REC_VERSION: OrderableEdmTypeField<
      SubBillDeferralScheduleTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    SUB_BILL_SCHEDULE_DTL_REC_ID: OrderableEdmTypeField<
      SubBillDeferralScheduleTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    SUB_BILL_DEFERRAL_EVENT_PER_UNIT: EnumField<
      SubBillDeferralScheduleTableBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ITEM_ID: OrderableEdmTypeField<
      SubBillDeferralScheduleTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SUB_BILL_DEFERRAL_SCHEDULE_CREATION_SOURCE: EnumField<
      SubBillDeferralScheduleTableBiEntities<DeSerializers>,
      DeSerializersT,
      SubBillDeferralScheduleCreationSource,
      true,
      true
    >;
    SOURCE_KEY: OrderableEdmTypeField<
      SubBillDeferralScheduleTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    SUB_BILL_DEFERRAL_AMOUNT: OrderableEdmTypeField<
      SubBillDeferralScheduleTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    SUB_BILL_DEFERRAL_ORIGINAL_SCHEDULE_AMOUNT: OrderableEdmTypeField<
      SubBillDeferralScheduleTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    SOURCE_REC_ID: OrderableEdmTypeField<
      SubBillDeferralScheduleTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    SUB_BILL_DEFERRAL_DISTRIBUTION_TYPE: EnumField<
      SubBillDeferralScheduleTableBiEntities<DeSerializers>,
      DeSerializersT,
      SubBillDeferralDistributionType,
      true,
      true
    >;
    SUB_BILL_DEFERRAL_EVENT_TEMPLATE_ID: OrderableEdmTypeField<
      SubBillDeferralScheduleTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SUB_BILL_DEFERRAL_SCHEDULE_TYPE: EnumField<
      SubBillDeferralScheduleTableBiEntities<DeSerializers>,
      DeSerializersT,
      SubBillDeferralScheduleType,
      true,
      true
    >;
    SUB_BILL_DEFERRAL_SHORT_TERM_AMOUNT: OrderableEdmTypeField<
      SubBillDeferralScheduleTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    CUST_INVOICE_ACCOUNT: OrderableEdmTypeField<
      SubBillDeferralScheduleTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<
      SubBillDeferralScheduleTableBiEntities<DeSerializers>
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
         * Static representation of the {@link subBillDeferralScheduleNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUB_BILL_DEFERRAL_SCHEDULE_NUMBER: fieldBuilder.buildEdmTypeField(
          'SubBillDeferralScheduleNumber',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link subBillDeferralSourceRecType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUB_BILL_DEFERRAL_SOURCE_REC_TYPE: fieldBuilder.buildEnumField(
          'SubBillDeferralSourceRecType',
          SubBillDeferralSourceRecType,
          true
        ),
        /**
         * Static representation of the {@link subBillDeferralOnHoldTransferred} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUB_BILL_DEFERRAL_ON_HOLD_TRANSFERRED: fieldBuilder.buildEnumField(
          'SubBillDeferralOnHoldTransferred',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link subBillDeferralOriginalEndDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUB_BILL_DEFERRAL_ORIGINAL_END_DATE: fieldBuilder.buildEdmTypeField(
          'SubBillDeferralOriginalEndDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link customerLineNum} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUSTOMER_LINE_NUM: fieldBuilder.buildEdmTypeField(
          'CustomerLineNum',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link sourceTransLineDefRecId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SOURCE_TRANS_LINE_DEF_REC_ID: fieldBuilder.buildEdmTypeField(
          'SourceTransLineDefRecId',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link projTransId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROJ_TRANS_ID: fieldBuilder.buildEdmTypeField(
          'ProjTransId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link transDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANS_DATE: fieldBuilder.buildEdmTypeField(
          'TransDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link subBillDeferralConsolidatePriorPeriods} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUB_BILL_DEFERRAL_CONSOLIDATE_PRIOR_PERIODS:
          fieldBuilder.buildEnumField(
            'SubBillDeferralConsolidatePriorPeriods',
            NoYes,
            true
          ),
        /**
         * Static representation of the {@link projFundingSource} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROJ_FUNDING_SOURCE: fieldBuilder.buildEdmTypeField(
          'ProjFundingSource',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link subBillDeferralScheduleStatus} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUB_BILL_DEFERRAL_SCHEDULE_STATUS: fieldBuilder.buildEnumField(
          'SubBillDeferralScheduleStatus',
          SubBillDeferralScheduleStatus,
          true
        ),
        /**
         * Static representation of the {@link subBillDeferralTransactionType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUB_BILL_DEFERRAL_TRANSACTION_TYPE: fieldBuilder.buildEnumField(
          'SubBillDeferralTransactionType',
          SubBillDeferralTransactionType,
          true
        ),
        /**
         * Static representation of the {@link subBillDeferralOriginalStartDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUB_BILL_DEFERRAL_ORIGINAL_START_DATE: fieldBuilder.buildEdmTypeField(
          'SubBillDeferralOriginalStartDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link externalItemId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXTERNAL_ITEM_ID: fieldBuilder.buildEdmTypeField(
          'ExternalItemId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link description} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'Description',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link subBillDeferralEqualPerPeriod} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUB_BILL_DEFERRAL_EQUAL_PER_PERIOD: fieldBuilder.buildEnumField(
          'SubBillDeferralEqualPerPeriod',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link salesId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_ID: fieldBuilder.buildEdmTypeField('SalesId', 'Edm.String', true),
        /**
         * Static representation of the {@link subBillDeferralRecognitionType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUB_BILL_DEFERRAL_RECOGNITION_TYPE: fieldBuilder.buildEnumField(
          'SubBillDeferralRecognitionType',
          DebitCredit,
          true
        ),
        /**
         * Static representation of the {@link subBillDeferralEventAllocationType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUB_BILL_DEFERRAL_EVENT_ALLOCATION_TYPE: fieldBuilder.buildEnumField(
          'SubBillDeferralEventAllocationType',
          SubBillDeferralEventAllocationType,
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
         * Static representation of the {@link subBillDeferralReclassificationDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUB_BILL_DEFERRAL_RECLASSIFICATION_DATE: fieldBuilder.buildEdmTypeField(
          'SubBillDeferralReclassificationDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link invoiceId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVOICE_ID: fieldBuilder.buildEdmTypeField(
          'InvoiceId',
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
         * Static representation of the {@link subBillScheduleDtlRecId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUB_BILL_SCHEDULE_DTL_REC_ID: fieldBuilder.buildEdmTypeField(
          'SubBillScheduleDtlRecId',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link subBillDeferralEventPerUnit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUB_BILL_DEFERRAL_EVENT_PER_UNIT: fieldBuilder.buildEnumField(
          'SubBillDeferralEventPerUnit',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link itemId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ITEM_ID: fieldBuilder.buildEdmTypeField('ItemId', 'Edm.String', true),
        /**
         * Static representation of the {@link subBillDeferralScheduleCreationSource} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUB_BILL_DEFERRAL_SCHEDULE_CREATION_SOURCE: fieldBuilder.buildEnumField(
          'SubBillDeferralScheduleCreationSource',
          SubBillDeferralScheduleCreationSource,
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
         * Static representation of the {@link subBillDeferralAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUB_BILL_DEFERRAL_AMOUNT: fieldBuilder.buildEdmTypeField(
          'SubBillDeferralAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link subBillDeferralOriginalScheduleAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUB_BILL_DEFERRAL_ORIGINAL_SCHEDULE_AMOUNT:
          fieldBuilder.buildEdmTypeField(
            'SubBillDeferralOriginalScheduleAmount',
            'Edm.Decimal',
            false
          ),
        /**
         * Static representation of the {@link sourceRecId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SOURCE_REC_ID: fieldBuilder.buildEdmTypeField(
          'SourceRecId',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link subBillDeferralDistributionType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUB_BILL_DEFERRAL_DISTRIBUTION_TYPE: fieldBuilder.buildEnumField(
          'SubBillDeferralDistributionType',
          SubBillDeferralDistributionType,
          true
        ),
        /**
         * Static representation of the {@link subBillDeferralEventTemplateId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUB_BILL_DEFERRAL_EVENT_TEMPLATE_ID: fieldBuilder.buildEdmTypeField(
          'SubBillDeferralEventTemplateId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link subBillDeferralScheduleType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUB_BILL_DEFERRAL_SCHEDULE_TYPE: fieldBuilder.buildEnumField(
          'SubBillDeferralScheduleType',
          SubBillDeferralScheduleType,
          true
        ),
        /**
         * Static representation of the {@link subBillDeferralShortTermAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUB_BILL_DEFERRAL_SHORT_TERM_AMOUNT: fieldBuilder.buildEdmTypeField(
          'SubBillDeferralShortTermAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link custInvoiceAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUST_INVOICE_ACCOUNT: fieldBuilder.buildEdmTypeField(
          'CustInvoiceAccount',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', SubBillDeferralScheduleTableBiEntities)
      };
    }

    return this._schema;
  }
}
