/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { CustomerPaymentFees } from './CustomerPaymentFees';
import { CustomerPaymentFeesRequestBuilder } from './CustomerPaymentFeesRequestBuilder';
import { DimensionCombinationsApi } from './DimensionCombinationsApi';
import { CustomerPaymentJournalFeesApi } from './CustomerPaymentJournalFeesApi';
import { LedgerJournalType } from './LedgerJournalType';
import { PaymFeePostingCust } from './PaymFeePostingCust';
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
  OneToOneLink,
  OneToManyLink
} from '@sap-cloud-sdk/odata-v4';
export class CustomerPaymentFeesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<CustomerPaymentFees<DeSerializersT>, DeSerializersT>
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
  ): CustomerPaymentFeesApi<DeSerializersT> {
    return new CustomerPaymentFeesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link dimensionCombination} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DIMENSION_COMBINATION: OneToOneLink<
      CustomerPaymentFees<DeSerializersT>,
      DeSerializersT,
      DimensionCombinationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link customerPaymentJournalFee} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CUSTOMER_PAYMENT_JOURNAL_FEE: OneToManyLink<
      CustomerPaymentFees<DeSerializersT>,
      DeSerializersT,
      CustomerPaymentJournalFeesApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      DimensionCombinationsApi<DeSerializersT>,
      CustomerPaymentJournalFeesApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      DIMENSION_COMBINATION: new OneToOneLink(
        'DimensionCombination',
        this,
        linkedApis[0]
      ),
      CUSTOMER_PAYMENT_JOURNAL_FEE: new OneToManyLink(
        'CustomerPaymentJournalFee',
        this,
        linkedApis[1]
      )
    };
    return this;
  }

  entityConstructor = CustomerPaymentFees;

  requestBuilder(): CustomerPaymentFeesRequestBuilder<DeSerializersT> {
    return new CustomerPaymentFeesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    CustomerPaymentFees<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<CustomerPaymentFees<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    CustomerPaymentFees<DeSerializersT>,
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
    typeof CustomerPaymentFees,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        CustomerPaymentFees,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      CustomerPaymentFees<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    NAME: OrderableEdmTypeField<
      CustomerPaymentFees<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    JOURNAL_TYPE: EnumField<
      CustomerPaymentFees<DeSerializers>,
      DeSerializersT,
      LedgerJournalType,
      true,
      true
    >;
    TRANSACTION_TEXT: OrderableEdmTypeField<
      CustomerPaymentFees<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CHARGE_TYPE: EnumField<
      CustomerPaymentFees<DeSerializers>,
      DeSerializersT,
      PaymFeePostingCust,
      true,
      true
    >;
    MAIN_ACCOUNT_ID_DISPLAY_VALUE: OrderableEdmTypeField<
      CustomerPaymentFees<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      CustomerPaymentFees<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link dimensionCombination} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DIMENSION_COMBINATION: OneToOneLink<
      CustomerPaymentFees<DeSerializersT>,
      DeSerializersT,
      DimensionCombinationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link customerPaymentJournalFee} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CUSTOMER_PAYMENT_JOURNAL_FEE: OneToManyLink<
      CustomerPaymentFees<DeSerializersT>,
      DeSerializersT,
      CustomerPaymentJournalFeesApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<CustomerPaymentFees<DeSerializers>>;
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
         * Static representation of the {@link name} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NAME: fieldBuilder.buildEdmTypeField('Name', 'Edm.String', false),
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
         * Static representation of the {@link transactionText} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSACTION_TEXT: fieldBuilder.buildEdmTypeField(
          'TransactionText',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link chargeType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CHARGE_TYPE: fieldBuilder.buildEnumField(
          'ChargeType',
          PaymFeePostingCust,
          true
        ),
        /**
         * Static representation of the {@link mainAccountIdDisplayValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MAIN_ACCOUNT_ID_DISPLAY_VALUE: fieldBuilder.buildEdmTypeField(
          'MainAccountIdDisplayValue',
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
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', CustomerPaymentFees)
      };
    }

    return this._schema;
  }
}
