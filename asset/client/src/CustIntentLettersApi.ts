/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { CustIntentLetters } from './CustIntentLetters';
import { CustIntentLettersRequestBuilder } from './CustIntentLettersRequestBuilder';
import { NoYes } from './NoYes';
import { IntentLetterTypeIt } from './IntentLetterTypeIt';
import { IntentLetterStatusIt } from './IntentLetterStatusIt';
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
export class CustIntentLettersApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<CustIntentLetters<DeSerializersT>, DeSerializersT>
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
  ): CustIntentLettersApi<DeSerializersT> {
    return new CustIntentLettersApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = CustIntentLetters;

  requestBuilder(): CustIntentLettersRequestBuilder<DeSerializersT> {
    return new CustIntentLettersRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    CustIntentLetters<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<CustIntentLetters<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<CustIntentLetters<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<
    typeof CustIntentLetters,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        CustIntentLetters,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      CustIntentLetters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    INTERNAL_LETTER_ID: OrderableEdmTypeField<
      CustIntentLetters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    INTENT_LETTER_YEAR: OrderableEdmTypeField<
      CustIntentLetters<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    LAST_CLOSED_VALUE_CALCULATED: EnumField<
      CustIntentLetters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    PROTOCOL: OrderableEdmTypeField<
      CustIntentLetters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DATE_LETTER: OrderableEdmTypeField<
      CustIntentLetters<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    TO_DATE: OrderableEdmTypeField<
      CustIntentLetters<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    INTENT_LETTER_AMOUNT_MST: OrderableEdmTypeField<
      CustIntentLetters<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ACCOUNT_NUM: OrderableEdmTypeField<
      CustIntentLetters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LAST_CLOSED_REMAINING_AMOUNT: OrderableEdmTypeField<
      CustIntentLetters<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    INTENT_LETTER_TYPE: EnumField<
      CustIntentLetters<DeSerializers>,
      DeSerializersT,
      IntentLetterTypeIt,
      true,
      true
    >;
    FROM_DATE: OrderableEdmTypeField<
      CustIntentLetters<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    LETTER_ID: OrderableEdmTypeField<
      CustIntentLetters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LAST_CLOSED_SALES_AMOUNT: OrderableEdmTypeField<
      CustIntentLetters<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    NOTES: OrderableEdmTypeField<
      CustIntentLetters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DATE_REGISTER: OrderableEdmTypeField<
      CustIntentLetters<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    STATUS: EnumField<
      CustIntentLetters<DeSerializers>,
      DeSerializersT,
      IntentLetterStatusIt,
      true,
      true
    >;
    CLOSED_DATE: OrderableEdmTypeField<
      CustIntentLetters<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    ALL_FIELDS: AllFields<CustIntentLetters<DeSerializers>>;
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
         * Static representation of the {@link internalLetterId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INTERNAL_LETTER_ID: fieldBuilder.buildEdmTypeField(
          'InternalLetterId',
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
         * Static representation of the {@link lastClosedValueCalculated} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LAST_CLOSED_VALUE_CALCULATED: fieldBuilder.buildEnumField(
          'LastClosedValueCalculated',
          NoYes,
          true
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
         * Static representation of the {@link dateLetter} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DATE_LETTER: fieldBuilder.buildEdmTypeField(
          'DateLetter',
          'Edm.DateTimeOffset',
          false
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
         * Static representation of the {@link intentLetterAmountMst} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INTENT_LETTER_AMOUNT_MST: fieldBuilder.buildEdmTypeField(
          'IntentLetterAmountMST',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link accountNum} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACCOUNT_NUM: fieldBuilder.buildEdmTypeField(
          'AccountNum',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link lastClosedRemainingAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LAST_CLOSED_REMAINING_AMOUNT: fieldBuilder.buildEdmTypeField(
          'LastClosedRemainingAmount',
          'Edm.Decimal',
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
         * Static representation of the {@link fromDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FROM_DATE: fieldBuilder.buildEdmTypeField(
          'FromDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link letterId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LETTER_ID: fieldBuilder.buildEdmTypeField(
          'LetterId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link lastClosedSalesAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LAST_CLOSED_SALES_AMOUNT: fieldBuilder.buildEdmTypeField(
          'LastClosedSalesAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link notes} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NOTES: fieldBuilder.buildEdmTypeField('Notes', 'Edm.String', true),
        /**
         * Static representation of the {@link dateRegister} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DATE_REGISTER: fieldBuilder.buildEdmTypeField(
          'DateRegister',
          'Edm.DateTimeOffset',
          false
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
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', CustIntentLetters)
      };
    }

    return this._schema;
  }
}
