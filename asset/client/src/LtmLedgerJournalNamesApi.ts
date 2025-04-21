/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { LtmLedgerJournalNames } from './LtmLedgerJournalNames';
import { LtmLedgerJournalNamesRequestBuilder } from './LtmLedgerJournalNamesRequestBuilder';
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
export class LtmLedgerJournalNamesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<LtmLedgerJournalNames<DeSerializersT>, DeSerializersT>
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
  ): LtmLedgerJournalNamesApi<DeSerializersT> {
    return new LtmLedgerJournalNamesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = LtmLedgerJournalNames;

  requestBuilder(): LtmLedgerJournalNamesRequestBuilder<DeSerializersT> {
    return new LtmLedgerJournalNamesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    LtmLedgerJournalNames<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<LtmLedgerJournalNames<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    LtmLedgerJournalNames<DeSerializersT>,
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
    typeof LtmLedgerJournalNames,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        LtmLedgerJournalNames,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      LtmLedgerJournalNames<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    JOURNAL_NAME_ID: OrderableEdmTypeField<
      LtmLedgerJournalNames<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    DISABLE_SETTLEMENT_X_RATE_EDIT: EnumField<
      LtmLedgerJournalNames<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    DEFAULT_GL_VOUCHER_CLASS_ID: OrderableEdmTypeField<
      LtmLedgerJournalNames<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DAFAULT_VEND_VOUCHER_CLASS_ID: OrderableEdmTypeField<
      LtmLedgerJournalNames<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DEFAULT_CUST_VOUCHER_CLASS_ID: OrderableEdmTypeField<
      LtmLedgerJournalNames<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DEFAULT_BANK_VOUCHER_CLASS_ID: OrderableEdmTypeField<
      LtmLedgerJournalNames<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<LtmLedgerJournalNames<DeSerializers>>;
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
         * Static representation of the {@link journalNameId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        JOURNAL_NAME_ID: fieldBuilder.buildEdmTypeField(
          'JournalNameId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link disableSettlementXRateEdit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DISABLE_SETTLEMENT_X_RATE_EDIT: fieldBuilder.buildEnumField(
          'DisableSettlementXRateEdit',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link defaultGlVoucherClassId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFAULT_GL_VOUCHER_CLASS_ID: fieldBuilder.buildEdmTypeField(
          'DefaultGLVoucherClassId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link dafaultVendVoucherClassId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DAFAULT_VEND_VOUCHER_CLASS_ID: fieldBuilder.buildEdmTypeField(
          'DafaultVendVoucherClassId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link defaultCustVoucherClassId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFAULT_CUST_VOUCHER_CLASS_ID: fieldBuilder.buildEdmTypeField(
          'DefaultCustVoucherClassId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link defaultBankVoucherClassId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFAULT_BANK_VOUCHER_CLASS_ID: fieldBuilder.buildEdmTypeField(
          'DefaultBankVoucherClassId',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', LtmLedgerJournalNames)
      };
    }

    return this._schema;
  }
}
