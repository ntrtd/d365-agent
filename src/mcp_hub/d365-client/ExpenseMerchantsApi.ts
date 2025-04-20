/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ExpenseMerchants } from './ExpenseMerchants';
import { ExpenseMerchantsRequestBuilder } from './ExpenseMerchantsRequestBuilder';
import { NoYes } from './NoYes';
import { TrvExpType } from './TrvExpType';
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
export class ExpenseMerchantsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<ExpenseMerchants<DeSerializersT>, DeSerializersT>
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
  ): ExpenseMerchantsApi<DeSerializersT> {
    return new ExpenseMerchantsApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = ExpenseMerchants;

  requestBuilder(): ExpenseMerchantsRequestBuilder<DeSerializersT> {
    return new ExpenseMerchantsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    ExpenseMerchants<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<ExpenseMerchants<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<ExpenseMerchants<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof ExpenseMerchants, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        ExpenseMerchants,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      ExpenseMerchants<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    MERCHANT_ID: OrderableEdmTypeField<
      ExpenseMerchants<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PREFERRED: EnumField<
      ExpenseMerchants<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    EXPENSE_TYPE: EnumField<
      ExpenseMerchants<DeSerializers>,
      DeSerializersT,
      TrvExpType,
      true,
      true
    >;
    ALL_FIELDS: AllFields<ExpenseMerchants<DeSerializers>>;
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
         * Static representation of the {@link merchantId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MERCHANT_ID: fieldBuilder.buildEdmTypeField(
          'MerchantId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link preferred} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PREFERRED: fieldBuilder.buildEnumField('Preferred', NoYes, true),
        /**
         * Static representation of the {@link expenseType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXPENSE_TYPE: fieldBuilder.buildEnumField(
          'ExpenseType',
          TrvExpType,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', ExpenseMerchants)
      };
    }

    return this._schema;
  }
}
