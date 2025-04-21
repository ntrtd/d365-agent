/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { IntentLetters } from './IntentLetters';
import { IntentLettersRequestBuilder } from './IntentLettersRequestBuilder';
import { IntentLetterTypeIt } from './IntentLetterTypeIt';
import { IntentLetterStatusIt } from './IntentLetterStatusIt';
import { IntentLetterPurchaseTypeIt } from './IntentLetterPurchaseTypeIt';
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
export class IntentLettersApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<IntentLetters<DeSerializersT>, DeSerializersT>
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
  ): IntentLettersApi<DeSerializersT> {
    return new IntentLettersApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = IntentLetters;

  requestBuilder(): IntentLettersRequestBuilder<DeSerializersT> {
    return new IntentLettersRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    IntentLetters<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<IntentLetters<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<IntentLetters<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof IntentLetters, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(IntentLetters, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      IntentLetters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    INTENT_LETTER_ID: OrderableEdmTypeField<
      IntentLetters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    INTENT_LETTER_YEAR: OrderableEdmTypeField<
      IntentLetters<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    PROTOCOL: OrderableEdmTypeField<
      IntentLetters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INTENT_LETTER_NOTES: OrderableEdmTypeField<
      IntentLetters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CLOSING_NOTES: OrderableEdmTypeField<
      IntentLetters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TO_DATE: OrderableEdmTypeField<
      IntentLetters<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    VEND_NAME: OrderableEdmTypeField<
      IntentLetters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INTENT_LETTER_AMOUNT_MST: OrderableEdmTypeField<
      IntentLetters<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    INTENT_LETTER_DATE: OrderableEdmTypeField<
      IntentLetters<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    VEND_ACCOUNT: OrderableEdmTypeField<
      IntentLetters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FROM_DATE: OrderableEdmTypeField<
      IntentLetters<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    INTENT_LETTER_TYPE: EnumField<
      IntentLetters<DeSerializers>,
      DeSerializersT,
      IntentLetterTypeIt,
      true,
      true
    >;
    STATUS: EnumField<
      IntentLetters<DeSerializers>,
      DeSerializersT,
      IntentLetterStatusIt,
      true,
      true
    >;
    CLOSED_DATE: OrderableEdmTypeField<
      IntentLetters<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    PURCHASE_TYPE: EnumField<
      IntentLetters<DeSerializers>,
      DeSerializersT,
      IntentLetterPurchaseTypeIt,
      true,
      true
    >;
    REPORT_ID: OrderableEdmTypeField<
      IntentLetters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<IntentLetters<DeSerializers>>;
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
         * Static representation of the {@link intentLetterId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INTENT_LETTER_ID: fieldBuilder.buildEdmTypeField(
          'IntentLetterId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link intentLetterYear} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INTENT_LETTER_YEAR: fieldBuilder.buildEdmTypeField(
          'IntentLetterYear',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link protocol} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROTOCOL: fieldBuilder.buildEdmTypeField(
          'Protocol',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link intentLetterNotes} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INTENT_LETTER_NOTES: fieldBuilder.buildEdmTypeField(
          'IntentLetterNotes',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link closingNotes} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CLOSING_NOTES: fieldBuilder.buildEdmTypeField(
          'ClosingNotes',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link toDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TO_DATE: fieldBuilder.buildEdmTypeField(
          'ToDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link vendName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VEND_NAME: fieldBuilder.buildEdmTypeField(
          'VendName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link intentLetterAmountMst} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INTENT_LETTER_AMOUNT_MST: fieldBuilder.buildEdmTypeField(
          'IntentLetterAmountMST',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link intentLetterDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INTENT_LETTER_DATE: fieldBuilder.buildEdmTypeField(
          'IntentLetterDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link vendAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VEND_ACCOUNT: fieldBuilder.buildEdmTypeField(
          'VendAccount',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link fromDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FROM_DATE: fieldBuilder.buildEdmTypeField(
          'FromDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link intentLetterType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INTENT_LETTER_TYPE: fieldBuilder.buildEnumField(
          'IntentLetterType',
          IntentLetterTypeIt,
          true
        ),
        /**
         * Static representation of the {@link status} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STATUS: fieldBuilder.buildEnumField(
          'Status',
          IntentLetterStatusIt,
          true
        ),
        /**
         * Static representation of the {@link closedDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CLOSED_DATE: fieldBuilder.buildEdmTypeField(
          'ClosedDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link purchaseType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PURCHASE_TYPE: fieldBuilder.buildEnumField(
          'PurchaseType',
          IntentLetterPurchaseTypeIt,
          true
        ),
        /**
         * Static representation of the {@link reportId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REPORT_ID: fieldBuilder.buildEdmTypeField(
          'ReportId',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', IntentLetters)
      };
    }

    return this._schema;
  }
}
