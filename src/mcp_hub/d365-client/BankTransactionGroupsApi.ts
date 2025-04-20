/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BankTransactionGroups } from './BankTransactionGroups';
import { BankTransactionGroupsRequestBuilder } from './BankTransactionGroupsRequestBuilder';
import { BankTransactionTypes_1Api } from './BankTransactionTypes_1Api';
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
  OneToOneLink
} from '@sap-cloud-sdk/odata-v4';
export class BankTransactionGroupsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<BankTransactionGroups<DeSerializersT>, DeSerializersT>
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
  ): BankTransactionGroupsApi<DeSerializersT> {
    return new BankTransactionGroupsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link bankTransactionType} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BANK_TRANSACTION_TYPE: OneToOneLink<
      BankTransactionGroups<DeSerializersT>,
      DeSerializersT,
      BankTransactionTypes_1Api<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [BankTransactionTypes_1Api<DeSerializersT>]
  ): this {
    this.navigationPropertyFields = {
      BANK_TRANSACTION_TYPE: new OneToOneLink(
        'BankTransactionType',
        this,
        linkedApis[0]
      )
    };
    return this;
  }

  entityConstructor = BankTransactionGroups;

  requestBuilder(): BankTransactionGroupsRequestBuilder<DeSerializersT> {
    return new BankTransactionGroupsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    BankTransactionGroups<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<BankTransactionGroups<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    BankTransactionGroups<DeSerializersT>,
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
    typeof BankTransactionGroups,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        BankTransactionGroups,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      BankTransactionGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    TRANSACTION_GROUP_ID: OrderableEdmTypeField<
      BankTransactionGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    TRANSACTION_TYPE_ID: OrderableEdmTypeField<
      BankTransactionGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      BankTransactionGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link bankTransactionType} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BANK_TRANSACTION_TYPE: OneToOneLink<
      BankTransactionGroups<DeSerializersT>,
      DeSerializersT,
      BankTransactionTypes_1Api<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<BankTransactionGroups<DeSerializers>>;
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
         * Static representation of the {@link transactionGroupId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSACTION_GROUP_ID: fieldBuilder.buildEdmTypeField(
          'TransactionGroupId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link transactionTypeId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSACTION_TYPE_ID: fieldBuilder.buildEdmTypeField(
          'TransactionTypeId',
          'Edm.String',
          false
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
        ALL_FIELDS: new AllFields('*', BankTransactionGroups)
      };
    }

    return this._schema;
  }
}
