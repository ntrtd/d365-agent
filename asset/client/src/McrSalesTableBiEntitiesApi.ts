/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { McrSalesTableBiEntities } from './McrSalesTableBiEntities';
import { McrSalesTableBiEntitiesRequestBuilder } from './McrSalesTableBiEntitiesRequestBuilder';
import { NoYes } from './NoYes';
import { McrPaymOutOfBalance } from './McrPaymOutOfBalance';
import { McrsoAllocPriority } from './McrsoAllocPriority';
import { McrOutOfBalanceReleaseType } from './McrOutOfBalanceReleaseType';
import { McrContinuityLineEval } from './McrContinuityLineEval';
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
export class McrSalesTableBiEntitiesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<McrSalesTableBiEntities<DeSerializersT>, DeSerializersT>
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
  ): McrSalesTableBiEntitiesApi<DeSerializersT> {
    return new McrSalesTableBiEntitiesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = McrSalesTableBiEntities;

  requestBuilder(): McrSalesTableBiEntitiesRequestBuilder<DeSerializersT> {
    return new McrSalesTableBiEntitiesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    McrSalesTableBiEntities<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      McrSalesTableBiEntities<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    McrSalesTableBiEntities<DeSerializersT>,
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
    typeof McrSalesTableBiEntities,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        McrSalesTableBiEntities,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      McrSalesTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SALES_TABLE: OrderableEdmTypeField<
      McrSalesTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    CATALOG_UP_SELL_SHOWN: EnumField<
      McrSalesTableBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    SYS_DATA_AREA_ID: OrderableEdmTypeField<
      McrSalesTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PAYM_OUT_OF_BALANCE: EnumField<
      McrSalesTableBiEntities<DeSerializers>,
      DeSerializersT,
      McrPaymOutOfBalance,
      true,
      true
    >;
    SYS_REC_VERSION: OrderableEdmTypeField<
      McrSalesTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    SO_ALLOC_PRIORITY: EnumField<
      McrSalesTableBiEntities<DeSerializers>,
      DeSerializersT,
      McrsoAllocPriority,
      true,
      true
    >;
    SOURCE_KEY: OrderableEdmTypeField<
      McrSalesTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    PRICE_OVERRIDE: EnumField<
      McrSalesTableBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    SMM_TM_CALL_LIST_ID: OrderableEdmTypeField<
      McrSalesTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    OUT_OF_BALANCE_RELEASED: EnumField<
      McrSalesTableBiEntities<DeSerializers>,
      DeSerializersT,
      McrOutOfBalanceReleaseType,
      true,
      true
    >;
    CONTINUITY_ORDER: EnumField<
      McrSalesTableBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    CONTINUITY_CHILD: EnumField<
      McrSalesTableBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    CONTINUITY_LINE_EVAL: EnumField<
      McrSalesTableBiEntities<DeSerializers>,
      DeSerializersT,
      McrContinuityLineEval,
      true,
      true
    >;
    PROMPTED_FOR_INST_BILLING_OPTION: EnumField<
      McrSalesTableBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    SOURCE_ID: OrderableEdmTypeField<
      McrSalesTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RECEIPT_DATE: OrderableEdmTypeField<
      McrSalesTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    POSTAGE_GROUP_ID: OrderableEdmTypeField<
      McrSalesTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INSTALLMENT_ORDER_SUBMITTED: EnumField<
      McrSalesTableBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    FTC_EXEMPT: EnumField<
      McrSalesTableBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ALL_FIELDS: AllFields<McrSalesTableBiEntities<DeSerializers>>;
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
         * Static representation of the {@link salesTable} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_TABLE: fieldBuilder.buildEdmTypeField(
          'SalesTable',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link catalogUpSellShown} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CATALOG_UP_SELL_SHOWN: fieldBuilder.buildEnumField(
          'CatalogUpSellShown',
          NoYes,
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
         * Static representation of the {@link paymOutOfBalance} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAYM_OUT_OF_BALANCE: fieldBuilder.buildEnumField(
          'PaymOutOfBalance',
          McrPaymOutOfBalance,
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
         * Static representation of the {@link soAllocPriority} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SO_ALLOC_PRIORITY: fieldBuilder.buildEnumField(
          'SOAllocPriority',
          McrsoAllocPriority,
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
         * Static representation of the {@link priceOverride} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRICE_OVERRIDE: fieldBuilder.buildEnumField(
          'PriceOverride',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link smmTmCallListId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SMM_TM_CALL_LIST_ID: fieldBuilder.buildEdmTypeField(
          'SmmTMCallListId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link outOfBalanceReleased} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OUT_OF_BALANCE_RELEASED: fieldBuilder.buildEnumField(
          'OutOfBalanceReleased',
          McrOutOfBalanceReleaseType,
          true
        ),
        /**
         * Static representation of the {@link continuityOrder} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONTINUITY_ORDER: fieldBuilder.buildEnumField(
          'ContinuityOrder',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link continuityChild} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONTINUITY_CHILD: fieldBuilder.buildEnumField(
          'ContinuityChild',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link continuityLineEval} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONTINUITY_LINE_EVAL: fieldBuilder.buildEnumField(
          'ContinuityLineEval',
          McrContinuityLineEval,
          true
        ),
        /**
         * Static representation of the {@link promptedForInstBillingOption} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROMPTED_FOR_INST_BILLING_OPTION: fieldBuilder.buildEnumField(
          'PromptedForInstBillingOption',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link sourceId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SOURCE_ID: fieldBuilder.buildEdmTypeField(
          'SourceId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link receiptDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RECEIPT_DATE: fieldBuilder.buildEdmTypeField(
          'ReceiptDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link postageGroupId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        POSTAGE_GROUP_ID: fieldBuilder.buildEdmTypeField(
          'PostageGroupID',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link installmentOrderSubmitted} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INSTALLMENT_ORDER_SUBMITTED: fieldBuilder.buildEnumField(
          'InstallmentOrderSubmitted',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link ftcExempt} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FTC_EXEMPT: fieldBuilder.buildEnumField('FTCExempt', NoYes, true),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', McrSalesTableBiEntities)
      };
    }

    return this._schema;
  }
}
