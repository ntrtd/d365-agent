/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BankCheckLayouts } from './BankCheckLayouts';
import { BankCheckLayoutsRequestBuilder } from './BankCheckLayoutsRequestBuilder';
import { BankAccountsApi } from './BankAccountsApi';
import { NoYes } from './NoYes';
import { ChequeFormType } from './ChequeFormType';
import { CopySignature } from './CopySignature';
import { ChequeDateSeparatorCa } from './ChequeDateSeparatorCa';
import { CopyWatermark } from './CopyWatermark';
import { Units } from './Units';
import { ChequeDateFormatCa } from './ChequeDateFormatCa';
import { ChequeNumMethod } from './ChequeNumMethod';
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
  EnumField,
  OneToOneLink
} from '@sap-cloud-sdk/odata-v4';
export class BankCheckLayoutsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<BankCheckLayouts<DeSerializersT>, DeSerializersT>
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
  ): BankCheckLayoutsApi<DeSerializersT> {
    return new BankCheckLayoutsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link bankAccount} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BANK_ACCOUNT: OneToOneLink<
      BankCheckLayouts<DeSerializersT>,
      DeSerializersT,
      BankAccountsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [BankAccountsApi<DeSerializersT>]
  ): this {
    this.navigationPropertyFields = {
      BANK_ACCOUNT: new OneToOneLink('BankAccount', this, linkedApis[0])
    };
    return this;
  }

  entityConstructor = BankCheckLayouts;

  requestBuilder(): BankCheckLayoutsRequestBuilder<DeSerializersT> {
    return new BankCheckLayoutsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    BankCheckLayouts<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<BankCheckLayouts<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<BankCheckLayouts<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof BankCheckLayouts, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        BankCheckLayouts,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      BankCheckLayouts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    BANK_ACCOUNT_ID: OrderableEdmTypeField<
      BankCheckLayouts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    AMOUNT_PREFIX: OrderableEdmTypeField<
      BankCheckLayouts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALLOW_OTHER_CURRENCIES: EnumField<
      BankCheckLayouts<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    PRINT_MICR_LINE: EnumField<
      BankCheckLayouts<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    PRINT_COMPANY_LOGO: EnumField<
      BankCheckLayouts<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    FORMAT_TYPE: EnumField<
      BankCheckLayouts<DeSerializers>,
      DeSerializersT,
      ChequeFormType,
      true,
      true
    >;
    PRINT_A_CODE: EnumField<
      BankCheckLayouts<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    CUSTOM_CHEQUE_LAYOUT_ID: OrderableEdmTypeField<
      BankCheckLayouts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRINT_C_CODE: EnumField<
      BankCheckLayouts<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    COPY_SIGNATURE_TYPE: EnumField<
      BankCheckLayouts<DeSerializers>,
      DeSerializersT,
      CopySignature,
      true,
      true
    >;
    PRINT_COMPANY_NAME: EnumField<
      BankCheckLayouts<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    DATE_SEPARATOR: EnumField<
      BankCheckLayouts<DeSerializers>,
      DeSerializersT,
      ChequeDateSeparatorCa,
      true,
      true
    >;
    PRINT_BANK_NUMBER: EnumField<
      BankCheckLayouts<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    HEADER_TEXT: OrderableEdmTypeField<
      BankCheckLayouts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COPY_WATERMARK_TYPE: EnumField<
      BankCheckLayouts<DeSerializers>,
      DeSerializersT,
      CopyWatermark,
      true,
      true
    >;
    PAPER_LENGTH_UNIT: EnumField<
      BankCheckLayouts<DeSerializers>,
      DeSerializersT,
      Units,
      true,
      true
    >;
    START_POSITION: OrderableEdmTypeField<
      BankCheckLayouts<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    DATE_FORMAT: EnumField<
      BankCheckLayouts<DeSerializers>,
      DeSerializersT,
      ChequeDateFormatCa,
      true,
      true
    >;
    PRINT_LEADING_ZEROS_ON_MICR_LINE: EnumField<
      BankCheckLayouts<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    PAPER_LENGTH: OrderableEdmTypeField<
      BankCheckLayouts<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    FIRST_SIGNATURE_AMOUNT_LIMIT: OrderableEdmTypeField<
      BankCheckLayouts<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PRINT_BANK_NAME: EnumField<
      BankCheckLayouts<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    PRINT_B_CODE: EnumField<
      BankCheckLayouts<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    MICR_LINE: OrderableEdmTypeField<
      BankCheckLayouts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FOOTER_TEXT: OrderableEdmTypeField<
      BankCheckLayouts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    B_CODE: OrderableEdmTypeField<
      BankCheckLayouts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    C_CODE: OrderableEdmTypeField<
      BankCheckLayouts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CHECK_NUMBER_LENGTH: OrderableEdmTypeField<
      BankCheckLayouts<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    PRINT_SECOND_SIGNATURE: EnumField<
      BankCheckLayouts<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    CHECK_NUMBER_METHOD: EnumField<
      BankCheckLayouts<DeSerializers>,
      DeSerializersT,
      ChequeNumMethod,
      true,
      true
    >;
    CUSTOM_WATERMARK: OrderableEdmTypeField<
      BankCheckLayouts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRINT_BANK_ACCOUNT: EnumField<
      BankCheckLayouts<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    A_CODE: OrderableEdmTypeField<
      BankCheckLayouts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRINT_FIRST_SIGNATURE: EnumField<
      BankCheckLayouts<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    SECOND_SIGNATURE_AMOUNT_LIMIT: OrderableEdmTypeField<
      BankCheckLayouts<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    START_POSITION_UNIT: EnumField<
      BankCheckLayouts<DeSerializers>,
      DeSerializersT,
      Units,
      true,
      true
    >;
    NUMBER_OF_SLIP_COPIES: OrderableEdmTypeField<
      BankCheckLayouts<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link bankAccount} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BANK_ACCOUNT: OneToOneLink<
      BankCheckLayouts<DeSerializersT>,
      DeSerializersT,
      BankAccountsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<BankCheckLayouts<DeSerializers>>;
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
         * Static representation of the {@link amountPrefix} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AMOUNT_PREFIX: fieldBuilder.buildEdmTypeField(
          'AmountPrefix',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link allowOtherCurrencies} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ALLOW_OTHER_CURRENCIES: fieldBuilder.buildEnumField(
          'AllowOtherCurrencies',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link printMicrLine} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRINT_MICR_LINE: fieldBuilder.buildEnumField(
          'PrintMICRLine',
          NoYes,
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
         * Static representation of the {@link formatType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FORMAT_TYPE: fieldBuilder.buildEnumField(
          'FormatType',
          ChequeFormType,
          true
        ),
        /**
         * Static representation of the {@link printACode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRINT_A_CODE: fieldBuilder.buildEnumField('PrintACode', NoYes, true),
        /**
         * Static representation of the {@link customChequeLayoutId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUSTOM_CHEQUE_LAYOUT_ID: fieldBuilder.buildEdmTypeField(
          'CustomChequeLayoutId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link printCCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRINT_C_CODE: fieldBuilder.buildEnumField('PrintCCode', NoYes, true),
        /**
         * Static representation of the {@link copySignatureType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COPY_SIGNATURE_TYPE: fieldBuilder.buildEnumField(
          'CopySignatureType',
          CopySignature,
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
         * Static representation of the {@link dateSeparator} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DATE_SEPARATOR: fieldBuilder.buildEnumField(
          'DateSeparator',
          ChequeDateSeparatorCa,
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
         * Static representation of the {@link headerText} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        HEADER_TEXT: fieldBuilder.buildEdmTypeField(
          'HeaderText',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link copyWatermarkType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COPY_WATERMARK_TYPE: fieldBuilder.buildEnumField(
          'CopyWatermarkType',
          CopyWatermark,
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
         * Static representation of the {@link startPosition} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        START_POSITION: fieldBuilder.buildEdmTypeField(
          'StartPosition',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link dateFormat} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DATE_FORMAT: fieldBuilder.buildEnumField(
          'DateFormat',
          ChequeDateFormatCa,
          true
        ),
        /**
         * Static representation of the {@link printLeadingZerosOnMicrLine} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRINT_LEADING_ZEROS_ON_MICR_LINE: fieldBuilder.buildEnumField(
          'PrintLeadingZerosOnMICRLine',
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
         * Static representation of the {@link firstSignatureAmountLimit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FIRST_SIGNATURE_AMOUNT_LIMIT: fieldBuilder.buildEdmTypeField(
          'FirstSignatureAmountLimit',
          'Edm.Decimal',
          false
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
         * Static representation of the {@link printBCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRINT_B_CODE: fieldBuilder.buildEnumField('PrintBCode', NoYes, true),
        /**
         * Static representation of the {@link micrLine} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MICR_LINE: fieldBuilder.buildEdmTypeField(
          'MICRLine',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link footerText} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FOOTER_TEXT: fieldBuilder.buildEdmTypeField(
          'FooterText',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link bCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        B_CODE: fieldBuilder.buildEdmTypeField('BCode', 'Edm.String', true),
        /**
         * Static representation of the {@link cCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        C_CODE: fieldBuilder.buildEdmTypeField('CCode', 'Edm.String', true),
        /**
         * Static representation of the {@link checkNumberLength} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CHECK_NUMBER_LENGTH: fieldBuilder.buildEdmTypeField(
          'CheckNumberLength',
          'Edm.Int32',
          false
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
         * Static representation of the {@link checkNumberMethod} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CHECK_NUMBER_METHOD: fieldBuilder.buildEnumField(
          'CheckNumberMethod',
          ChequeNumMethod,
          true
        ),
        /**
         * Static representation of the {@link customWatermark} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUSTOM_WATERMARK: fieldBuilder.buildEdmTypeField(
          'CustomWatermark',
          'Edm.String',
          true
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
         * Static representation of the {@link aCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        A_CODE: fieldBuilder.buildEdmTypeField('ACode', 'Edm.String', true),
        /**
         * Static representation of the {@link printFirstSignature} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRINT_FIRST_SIGNATURE: fieldBuilder.buildEnumField(
          'PrintFirstSignature',
          NoYes,
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
         * Static representation of the {@link startPositionUnit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        START_POSITION_UNIT: fieldBuilder.buildEnumField(
          'StartPositionUnit',
          Units,
          true
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
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', BankCheckLayouts)
      };
    }

    return this._schema;
  }
}
