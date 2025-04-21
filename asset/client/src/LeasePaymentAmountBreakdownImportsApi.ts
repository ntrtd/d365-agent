/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { LeasePaymentAmountBreakdownImports } from './LeasePaymentAmountBreakdownImports';
import { LeasePaymentAmountBreakdownImportsRequestBuilder } from './LeasePaymentAmountBreakdownImportsRequestBuilder';
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
export class LeasePaymentAmountBreakdownImportsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<
      LeasePaymentAmountBreakdownImports<DeSerializersT>,
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
  ): LeasePaymentAmountBreakdownImportsApi<DeSerializersT> {
    return new LeasePaymentAmountBreakdownImportsApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = LeasePaymentAmountBreakdownImports;

  requestBuilder(): LeasePaymentAmountBreakdownImportsRequestBuilder<DeSerializersT> {
    return new LeasePaymentAmountBreakdownImportsRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    LeasePaymentAmountBreakdownImports<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      LeasePaymentAmountBreakdownImports<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    LeasePaymentAmountBreakdownImports<DeSerializersT>,
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
    typeof LeasePaymentAmountBreakdownImports,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        LeasePaymentAmountBreakdownImports,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      LeasePaymentAmountBreakdownImports<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    IMPORT_ID: OrderableEdmTypeField<
      LeasePaymentAmountBreakdownImports<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LEASE_ID: OrderableEdmTypeField<
      LeasePaymentAmountBreakdownImports<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    START_DATE: OrderableEdmTypeField<
      LeasePaymentAmountBreakdownImports<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    PAYMENT_AMOUNT_TYPE: OrderableEdmTypeField<
      LeasePaymentAmountBreakdownImports<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    AMOUNT: OrderableEdmTypeField<
      LeasePaymentAmountBreakdownImports<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ALL_FIELDS: AllFields<LeasePaymentAmountBreakdownImports<DeSerializers>>;
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
         * Static representation of the {@link importId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IMPORT_ID: fieldBuilder.buildEdmTypeField(
          'ImportId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link leaseId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LEASE_ID: fieldBuilder.buildEdmTypeField(
          'LeaseId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link startDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        START_DATE: fieldBuilder.buildEdmTypeField(
          'StartDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link paymentAmountType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAYMENT_AMOUNT_TYPE: fieldBuilder.buildEdmTypeField(
          'PaymentAmountType',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link amount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AMOUNT: fieldBuilder.buildEdmTypeField('Amount', 'Edm.Decimal', false),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', LeasePaymentAmountBreakdownImports)
      };
    }

    return this._schema;
  }
}
