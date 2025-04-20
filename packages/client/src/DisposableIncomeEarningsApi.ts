/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { DisposableIncomeEarnings } from './DisposableIncomeEarnings';
import { DisposableIncomeEarningsRequestBuilder } from './DisposableIncomeEarningsRequestBuilder';
import { DisposableIncomesApi } from './DisposableIncomesApi';
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
export class DisposableIncomeEarningsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<DisposableIncomeEarnings<DeSerializersT>, DeSerializersT>
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
  ): DisposableIncomeEarningsApi<DeSerializersT> {
    return new DisposableIncomeEarningsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link disposableIncome} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DISPOSABLE_INCOME: OneToOneLink<
      DisposableIncomeEarnings<DeSerializersT>,
      DeSerializersT,
      DisposableIncomesApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [DisposableIncomesApi<DeSerializersT>]
  ): this {
    this.navigationPropertyFields = {
      DISPOSABLE_INCOME: new OneToOneLink(
        'DisposableIncome',
        this,
        linkedApis[0]
      )
    };
    return this;
  }

  entityConstructor = DisposableIncomeEarnings;

  requestBuilder(): DisposableIncomeEarningsRequestBuilder<DeSerializersT> {
    return new DisposableIncomeEarningsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    DisposableIncomeEarnings<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      DisposableIncomeEarnings<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    DisposableIncomeEarnings<DeSerializersT>,
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
    typeof DisposableIncomeEarnings,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        DisposableIncomeEarnings,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    EARNING_CODE_ID: OrderableEdmTypeField<
      DisposableIncomeEarnings<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    NAME: OrderableEdmTypeField<
      DisposableIncomeEarnings<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link disposableIncome} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DISPOSABLE_INCOME: OneToOneLink<
      DisposableIncomeEarnings<DeSerializersT>,
      DeSerializersT,
      DisposableIncomesApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<DisposableIncomeEarnings<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link earningCodeId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EARNING_CODE_ID: fieldBuilder.buildEdmTypeField(
          'EarningCodeId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link name} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NAME: fieldBuilder.buildEdmTypeField('Name', 'Edm.String', false),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', DisposableIncomeEarnings)
      };
    }

    return this._schema;
  }
}
