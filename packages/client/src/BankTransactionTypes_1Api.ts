/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BankTransactionTypes_1 } from './BankTransactionTypes_1';
import { BankTransactionTypes_1RequestBuilder } from './BankTransactionTypes_1RequestBuilder';
import { DimensionCombinationsApi } from './DimensionCombinationsApi';
import { BankTransactionGroupsApi } from './BankTransactionGroupsApi';
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
  OneToOneLink,
  OneToManyLink
} from '@sap-cloud-sdk/odata-v4';
export class BankTransactionTypes_1Api<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<BankTransactionTypes_1<DeSerializersT>, DeSerializersT>
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
  ): BankTransactionTypes_1Api<DeSerializersT> {
    return new BankTransactionTypes_1Api(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link dimensionCombination} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DIMENSION_COMBINATION: OneToOneLink<
      BankTransactionTypes_1<DeSerializersT>,
      DeSerializersT,
      DimensionCombinationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link bankTransactionGroup} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BANK_TRANSACTION_GROUP: OneToManyLink<
      BankTransactionTypes_1<DeSerializersT>,
      DeSerializersT,
      BankTransactionGroupsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      DimensionCombinationsApi<DeSerializersT>,
      BankTransactionGroupsApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      DIMENSION_COMBINATION: new OneToOneLink(
        'DimensionCombination',
        this,
        linkedApis[0]
      ),
      BANK_TRANSACTION_GROUP: new OneToManyLink(
        'BankTransactionGroup',
        this,
        linkedApis[1]
      )
    };
    return this;
  }

  entityConstructor = BankTransactionTypes_1;

  requestBuilder(): BankTransactionTypes_1RequestBuilder<DeSerializersT> {
    return new BankTransactionTypes_1RequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    BankTransactionTypes_1<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      BankTransactionTypes_1<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    BankTransactionTypes_1<DeSerializersT>,
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
    typeof BankTransactionTypes_1,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        BankTransactionTypes_1,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      BankTransactionTypes_1<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    TRANSACTION_TYPE_ID: OrderableEdmTypeField<
      BankTransactionTypes_1<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    NAME: OrderableEdmTypeField<
      BankTransactionTypes_1<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MAIN_ACCOUNT_ID_DISPLAY_VALUE: OrderableEdmTypeField<
      BankTransactionTypes_1<DeSerializers>,
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
      BankTransactionTypes_1<DeSerializersT>,
      DeSerializersT,
      DimensionCombinationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link bankTransactionGroup} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BANK_TRANSACTION_GROUP: OneToManyLink<
      BankTransactionTypes_1<DeSerializersT>,
      DeSerializersT,
      BankTransactionGroupsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<BankTransactionTypes_1<DeSerializers>>;
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
         * Static representation of the {@link transactionTypeId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSACTION_TYPE_ID: fieldBuilder.buildEdmTypeField(
          'TransactionTypeId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link name} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NAME: fieldBuilder.buildEdmTypeField('Name', 'Edm.String', true),
        /**
         * Static representation of the {@link mainAccountIdDisplayValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MAIN_ACCOUNT_ID_DISPLAY_VALUE: fieldBuilder.buildEdmTypeField(
          'MainAccountIdDisplayValue',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', BankTransactionTypes_1)
      };
    }

    return this._schema;
  }
}
