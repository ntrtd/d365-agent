/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { CashFlowMgmtJourNamePaymAccountLists } from './CashFlowMgmtJourNamePaymAccountLists';
import { CashFlowMgmtJourNamePaymAccountListsRequestBuilder } from './CashFlowMgmtJourNamePaymAccountListsRequestBuilder';
import { CfmPaymentAccountType } from './CfmPaymentAccountType';
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
export class CashFlowMgmtJourNamePaymAccountListsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<
      CashFlowMgmtJourNamePaymAccountLists<DeSerializersT>,
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
  ): CashFlowMgmtJourNamePaymAccountListsApi<DeSerializersT> {
    return new CashFlowMgmtJourNamePaymAccountListsApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = CashFlowMgmtJourNamePaymAccountLists;

  requestBuilder(): CashFlowMgmtJourNamePaymAccountListsRequestBuilder<DeSerializersT> {
    return new CashFlowMgmtJourNamePaymAccountListsRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    CashFlowMgmtJourNamePaymAccountLists<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      CashFlowMgmtJourNamePaymAccountLists<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    CashFlowMgmtJourNamePaymAccountLists<DeSerializersT>,
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
    typeof CashFlowMgmtJourNamePaymAccountLists,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        CashFlowMgmtJourNamePaymAccountLists,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    NAME: OrderableEdmTypeField<
      CashFlowMgmtJourNamePaymAccountLists<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ACCOUNT_NUMBER: OrderableEdmTypeField<
      CashFlowMgmtJourNamePaymAccountLists<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PAYMENT_ACCOUNT_TYPE: EnumField<
      CashFlowMgmtJourNamePaymAccountLists<DeSerializers>,
      DeSerializersT,
      CfmPaymentAccountType,
      true,
      true
    >;
    ALL_FIELDS: AllFields<CashFlowMgmtJourNamePaymAccountLists<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link name} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NAME: fieldBuilder.buildEdmTypeField('Name', 'Edm.String', false),
        /**
         * Static representation of the {@link accountNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACCOUNT_NUMBER: fieldBuilder.buildEdmTypeField(
          'AccountNumber',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link paymentAccountType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAYMENT_ACCOUNT_TYPE: fieldBuilder.buildEnumField(
          'PaymentAccountType',
          CfmPaymentAccountType,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', CashFlowMgmtJourNamePaymAccountLists)
      };
    }

    return this._schema;
  }
}
