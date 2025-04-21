/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BankPromissoryNoteLayouts } from './BankPromissoryNoteLayouts';
import { BankPromissoryNoteLayoutsRequestBuilder } from './BankPromissoryNoteLayoutsRequestBuilder';
import { NoYes } from './NoYes';
import { BankPromissoryNoteNumMethod } from './BankPromissoryNoteNumMethod';
import { Units } from './Units';
import { PrePrintLevel } from './PrePrintLevel';
import { BankPromissoryNoteFormType } from './BankPromissoryNoteFormType';
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
export class BankPromissoryNoteLayoutsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<BankPromissoryNoteLayouts<DeSerializersT>, DeSerializersT>
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
  ): BankPromissoryNoteLayoutsApi<DeSerializersT> {
    return new BankPromissoryNoteLayoutsApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = BankPromissoryNoteLayouts;

  requestBuilder(): BankPromissoryNoteLayoutsRequestBuilder<DeSerializersT> {
    return new BankPromissoryNoteLayoutsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    BankPromissoryNoteLayouts<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      BankPromissoryNoteLayouts<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    BankPromissoryNoteLayouts<DeSerializersT>,
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
    typeof BankPromissoryNoteLayouts,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        BankPromissoryNoteLayouts,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      BankPromissoryNoteLayouts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    BANK_ACCOUNT_ID: OrderableEdmTypeField<
      BankPromissoryNoteLayouts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PRINT_BANK_CITY: EnumField<
      BankPromissoryNoteLayouts<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    PAPER_LENGTH: OrderableEdmTypeField<
      BankPromissoryNoteLayouts<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    NUMBER_OF_SLIP_COPIES: OrderableEdmTypeField<
      BankPromissoryNoteLayouts<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    PRINT_BANK_ACCOUNT: EnumField<
      BankPromissoryNoteLayouts<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    FIRST_SIGNATURE_AMOUNT_LIMIT: OrderableEdmTypeField<
      BankPromissoryNoteLayouts<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    START_POSITION: OrderableEdmTypeField<
      BankPromissoryNoteLayouts<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PRINT_TRANSACTION_DATE: EnumField<
      BankPromissoryNoteLayouts<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    NUMBER_METHOD: EnumField<
      BankPromissoryNoteLayouts<DeSerializers>,
      DeSerializersT,
      BankPromissoryNoteNumMethod,
      true,
      true
    >;
    PRINT_BANK_NUMBER: EnumField<
      BankPromissoryNoteLayouts<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    PAPER_LENGTH_UNIT: EnumField<
      BankPromissoryNoteLayouts<DeSerializers>,
      DeSerializersT,
      Units,
      true,
      true
    >;
    PRINT_BANK_NAME: EnumField<
      BankPromissoryNoteLayouts<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    PAPER_FORMAT: EnumField<
      BankPromissoryNoteLayouts<DeSerializers>,
      DeSerializersT,
      PrePrintLevel,
      true,
      true
    >;
    SECOND_SIGNATURE_AMOUNT_LIMIT: OrderableEdmTypeField<
      BankPromissoryNoteLayouts<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PRINT_DUE_DATE: EnumField<
      BankPromissoryNoteLayouts<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    AMOUNT_PREFIX: OrderableEdmTypeField<
      BankPromissoryNoteLayouts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRINT_COMPANY_NAME: EnumField<
      BankPromissoryNoteLayouts<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    PRINT_SECOND_SIGNATURE: EnumField<
      BankPromissoryNoteLayouts<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    START_POSITION_UNIT: EnumField<
      BankPromissoryNoteLayouts<DeSerializers>,
      DeSerializersT,
      Units,
      true,
      true
    >;
    PRINT_COMPANY_LOGO: EnumField<
      BankPromissoryNoteLayouts<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    FORMAT_NOTE_NUMBER: EnumField<
      BankPromissoryNoteLayouts<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    FORMAT_TYPE: EnumField<
      BankPromissoryNoteLayouts<DeSerializers>,
      DeSerializersT,
      BankPromissoryNoteFormType,
      true,
      true
    >;
    PRINT_FIRST_SIGNATURE: EnumField<
      BankPromissoryNoteLayouts<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ALL_FIELDS: AllFields<BankPromissoryNoteLayouts<DeSerializers>>;
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
         * Static representation of the {@link bankAccountId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BANK_ACCOUNT_ID: fieldBuilder.buildEdmTypeField(
          'BankAccountId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link printBankCity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRINT_BANK_CITY: fieldBuilder.buildEnumField(
          'PrintBankCity',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link paperLength} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAPER_LENGTH: fieldBuilder.buildEdmTypeField(
          'PaperLength',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link numberOfSlipCopies} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NUMBER_OF_SLIP_COPIES: fieldBuilder.buildEdmTypeField(
          'NumberOfSlipCopies',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link printBankAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRINT_BANK_ACCOUNT: fieldBuilder.buildEnumField(
          'PrintBankAccount',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link firstSignatureAmountLimit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FIRST_SIGNATURE_AMOUNT_LIMIT: fieldBuilder.buildEdmTypeField(
          'FirstSignatureAmountLimit',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link startPosition} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        START_POSITION: fieldBuilder.buildEdmTypeField(
          'StartPosition',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link printTransactionDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRINT_TRANSACTION_DATE: fieldBuilder.buildEnumField(
          'PrintTransactionDate',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link numberMethod} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NUMBER_METHOD: fieldBuilder.buildEnumField(
          'NumberMethod',
          BankPromissoryNoteNumMethod,
          true
        ),
        /**
         * Static representation of the {@link printBankNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRINT_BANK_NUMBER: fieldBuilder.buildEnumField(
          'PrintBankNumber',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link paperLengthUnit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAPER_LENGTH_UNIT: fieldBuilder.buildEnumField(
          'PaperLengthUnit',
          Units,
          true
        ),
        /**
         * Static representation of the {@link printBankName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRINT_BANK_NAME: fieldBuilder.buildEnumField(
          'PrintBankName',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link paperFormat} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAPER_FORMAT: fieldBuilder.buildEnumField(
          'PaperFormat',
          PrePrintLevel,
          true
        ),
        /**
         * Static representation of the {@link secondSignatureAmountLimit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SECOND_SIGNATURE_AMOUNT_LIMIT: fieldBuilder.buildEdmTypeField(
          'SecondSignatureAmountLimit',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link printDueDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRINT_DUE_DATE: fieldBuilder.buildEnumField(
          'PrintDueDate',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link amountPrefix} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AMOUNT_PREFIX: fieldBuilder.buildEdmTypeField(
          'AmountPrefix',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link printCompanyName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRINT_COMPANY_NAME: fieldBuilder.buildEnumField(
          'PrintCompanyName',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link printSecondSignature} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRINT_SECOND_SIGNATURE: fieldBuilder.buildEnumField(
          'PrintSecondSignature',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link startPositionUnit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        START_POSITION_UNIT: fieldBuilder.buildEnumField(
          'StartPositionUnit',
          Units,
          true
        ),
        /**
         * Static representation of the {@link printCompanyLogo} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRINT_COMPANY_LOGO: fieldBuilder.buildEnumField(
          'PrintCompanyLogo',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link formatNoteNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FORMAT_NOTE_NUMBER: fieldBuilder.buildEnumField(
          'FormatNoteNumber',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link formatType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FORMAT_TYPE: fieldBuilder.buildEnumField(
          'FormatType',
          BankPromissoryNoteFormType,
          true
        ),
        /**
         * Static representation of the {@link printFirstSignature} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRINT_FIRST_SIGNATURE: fieldBuilder.buildEnumField(
          'PrintFirstSignature',
          NoYes,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', BankPromissoryNoteLayouts)
      };
    }

    return this._schema;
  }
}
