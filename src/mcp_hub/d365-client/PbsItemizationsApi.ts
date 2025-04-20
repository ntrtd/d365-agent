/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { PbsItemizations } from './PbsItemizations';
import { PbsItemizationsRequestBuilder } from './PbsItemizationsRequestBuilder';
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
export class PbsItemizationsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<PbsItemizations<DeSerializersT>, DeSerializersT>
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
  ): PbsItemizationsApi<DeSerializersT> {
    return new PbsItemizationsApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = PbsItemizations;

  requestBuilder(): PbsItemizationsRequestBuilder<DeSerializersT> {
    return new PbsItemizationsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    PbsItemizations<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<PbsItemizations<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<PbsItemizations<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof PbsItemizations, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        PbsItemizations,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      PbsItemizations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    CC_TRANS_UNIQUE_ID: OrderableEdmTypeField<
      PbsItemizations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SUBCATEGORY_CODE: OrderableEdmTypeField<
      PbsItemizations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    TRANSACTION_DATE: OrderableEdmTypeField<
      PbsItemizations<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    EXCH_CODE_LOCAL_CURRENCY: OrderableEdmTypeField<
      PbsItemizations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    AMOUNT_CREDIT_CARD_CURRENCY: OrderableEdmTypeField<
      PbsItemizations<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    AMOUNT_LOCAL_CURRENCY: OrderableEdmTypeField<
      PbsItemizations<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    EXCH_CODE_CREDIT_CARD_CURRENCY: OrderableEdmTypeField<
      PbsItemizations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<PbsItemizations<DeSerializers>>;
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
         * Static representation of the {@link ccTransUniqueId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CC_TRANS_UNIQUE_ID: fieldBuilder.buildEdmTypeField(
          'CCTransUniqueID',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link subcategoryCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUBCATEGORY_CODE: fieldBuilder.buildEdmTypeField(
          'SubcategoryCode',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link transactionDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSACTION_DATE: fieldBuilder.buildEdmTypeField(
          'TransactionDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link exchCodeLocalCurrency} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXCH_CODE_LOCAL_CURRENCY: fieldBuilder.buildEdmTypeField(
          'ExchCode_LocalCurrency',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link amountCreditCardCurrency} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AMOUNT_CREDIT_CARD_CURRENCY: fieldBuilder.buildEdmTypeField(
          'Amount_CreditCardCurrency',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link amountLocalCurrency} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AMOUNT_LOCAL_CURRENCY: fieldBuilder.buildEdmTypeField(
          'Amount_LocalCurrency',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link exchCodeCreditCardCurrency} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXCH_CODE_CREDIT_CARD_CURRENCY: fieldBuilder.buildEdmTypeField(
          'ExchCode_CreditCardCurrency',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', PbsItemizations)
      };
    }

    return this._schema;
  }
}
