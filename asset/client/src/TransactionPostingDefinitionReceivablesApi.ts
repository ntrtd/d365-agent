/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { TransactionPostingDefinitionReceivables } from './TransactionPostingDefinitionReceivables';
import { TransactionPostingDefinitionReceivablesRequestBuilder } from './TransactionPostingDefinitionReceivablesRequestBuilder';
import { BillingCodeBillingClassAll } from './BillingCodeBillingClassAll';
import { CustomerTransactionType } from './CustomerTransactionType';
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
export class TransactionPostingDefinitionReceivablesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<
      TransactionPostingDefinitionReceivables<DeSerializersT>,
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
  ): TransactionPostingDefinitionReceivablesApi<DeSerializersT> {
    return new TransactionPostingDefinitionReceivablesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = TransactionPostingDefinitionReceivables;

  requestBuilder(): TransactionPostingDefinitionReceivablesRequestBuilder<DeSerializersT> {
    return new TransactionPostingDefinitionReceivablesRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    TransactionPostingDefinitionReceivables<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      TransactionPostingDefinitionReceivables<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    TransactionPostingDefinitionReceivables<DeSerializersT>,
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
    typeof TransactionPostingDefinitionReceivables,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        TransactionPostingDefinitionReceivables,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      TransactionPostingDefinitionReceivables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ATTRIBUTE_TYPE_BILLING_CLASSIFICATION_BILLING_CODE_ALL: EnumField<
      TransactionPostingDefinitionReceivables<DeSerializers>,
      DeSerializersT,
      BillingCodeBillingClassAll,
      true,
      true
    >;
    CUSTOMER_TRANSACTION_TYPE: EnumField<
      TransactionPostingDefinitionReceivables<DeSerializers>,
      DeSerializersT,
      CustomerTransactionType,
      true,
      true
    >;
    BILLING_CLASSIFICATION: OrderableEdmTypeField<
      TransactionPostingDefinitionReceivables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    BILLING_CODE: OrderableEdmTypeField<
      TransactionPostingDefinitionReceivables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    POSTING_DEFINITION: OrderableEdmTypeField<
      TransactionPostingDefinitionReceivables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<
      TransactionPostingDefinitionReceivables<DeSerializers>
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
         * Static representation of the {@link attributeTypeBillingClassificationBillingCodeAll} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ATTRIBUTE_TYPE_BILLING_CLASSIFICATION_BILLING_CODE_ALL:
          fieldBuilder.buildEnumField(
            'AttributeTypeBillingClassificationBillingCodeAll',
            BillingCodeBillingClassAll,
            true
          ),
        /**
         * Static representation of the {@link customerTransactionType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUSTOMER_TRANSACTION_TYPE: fieldBuilder.buildEnumField(
          'CustomerTransactionType',
          CustomerTransactionType,
          true
        ),
        /**
         * Static representation of the {@link billingClassification} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BILLING_CLASSIFICATION: fieldBuilder.buildEdmTypeField(
          'BillingClassification',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link billingCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BILLING_CODE: fieldBuilder.buildEdmTypeField(
          'BillingCode',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link postingDefinition} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        POSTING_DEFINITION: fieldBuilder.buildEdmTypeField(
          'PostingDefinition',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', TransactionPostingDefinitionReceivables)
      };
    }

    return this._schema;
  }
}
