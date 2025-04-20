/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { PayStatementAccrualBalances } from './PayStatementAccrualBalances';
import { PayStatementAccrualBalancesRequestBuilder } from './PayStatementAccrualBalancesRequestBuilder';
import { PayStatementHeadersApi } from './PayStatementHeadersApi';
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
export class PayStatementAccrualBalancesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<PayStatementAccrualBalances<DeSerializersT>, DeSerializersT>
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
  ): PayStatementAccrualBalancesApi<DeSerializersT> {
    return new PayStatementAccrualBalancesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link payStatementHeader} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PAY_STATEMENT_HEADER: OneToOneLink<
      PayStatementAccrualBalances<DeSerializersT>,
      DeSerializersT,
      PayStatementHeadersApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [PayStatementHeadersApi<DeSerializersT>]
  ): this {
    this.navigationPropertyFields = {
      PAY_STATEMENT_HEADER: new OneToOneLink(
        'PayStatementHeader',
        this,
        linkedApis[0]
      )
    };
    return this;
  }

  entityConstructor = PayStatementAccrualBalances;

  requestBuilder(): PayStatementAccrualBalancesRequestBuilder<DeSerializersT> {
    return new PayStatementAccrualBalancesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    PayStatementAccrualBalances<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      PayStatementAccrualBalances<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    PayStatementAccrualBalances<DeSerializersT>,
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
    typeof PayStatementAccrualBalances,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        PayStatementAccrualBalances,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      PayStatementAccrualBalances<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PAY_STATEMENT_NUMBER: OrderableEdmTypeField<
      PayStatementAccrualBalances<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ACCRUAL_ID: OrderableEdmTypeField<
      PayStatementAccrualBalances<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    TOTAL_ACCRUED_HOURS: OrderableEdmTypeField<
      PayStatementAccrualBalances<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    USED_HOURS: OrderableEdmTypeField<
      PayStatementAccrualBalances<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    TOTAL_USED_HOURS: OrderableEdmTypeField<
      PayStatementAccrualBalances<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    TOTAL_AVAILABLE_HOURS: OrderableEdmTypeField<
      PayStatementAccrualBalances<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ACCRUED_HOURS: OrderableEdmTypeField<
      PayStatementAccrualBalances<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link payStatementHeader} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PAY_STATEMENT_HEADER: OneToOneLink<
      PayStatementAccrualBalances<DeSerializersT>,
      DeSerializersT,
      PayStatementHeadersApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<PayStatementAccrualBalances<DeSerializers>>;
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
         * Static representation of the {@link payStatementNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAY_STATEMENT_NUMBER: fieldBuilder.buildEdmTypeField(
          'PayStatementNumber',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link accrualId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACCRUAL_ID: fieldBuilder.buildEdmTypeField(
          'AccrualId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link totalAccruedHours} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TOTAL_ACCRUED_HOURS: fieldBuilder.buildEdmTypeField(
          'TotalAccruedHours',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link usedHours} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        USED_HOURS: fieldBuilder.buildEdmTypeField(
          'UsedHours',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link totalUsedHours} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TOTAL_USED_HOURS: fieldBuilder.buildEdmTypeField(
          'TotalUsedHours',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link totalAvailableHours} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TOTAL_AVAILABLE_HOURS: fieldBuilder.buildEdmTypeField(
          'TotalAvailableHours',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link accruedHours} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACCRUED_HOURS: fieldBuilder.buildEdmTypeField(
          'AccruedHours',
          'Edm.Decimal',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', PayStatementAccrualBalances)
      };
    }

    return this._schema;
  }
}
