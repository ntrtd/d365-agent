/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RetailSalesAgreementFulfillments } from './RetailSalesAgreementFulfillments';
import { RetailSalesAgreementFulfillmentsRequestBuilder } from './RetailSalesAgreementFulfillmentsRequestBuilder';
import { CommitmentType } from './CommitmentType';
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
export class RetailSalesAgreementFulfillmentsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<RetailSalesAgreementFulfillments<DeSerializersT>, DeSerializersT>
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
  ): RetailSalesAgreementFulfillmentsApi<DeSerializersT> {
    return new RetailSalesAgreementFulfillmentsApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = RetailSalesAgreementFulfillments;

  requestBuilder(): RetailSalesAgreementFulfillmentsRequestBuilder<DeSerializersT> {
    return new RetailSalesAgreementFulfillmentsRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    RetailSalesAgreementFulfillments<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      RetailSalesAgreementFulfillments<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    RetailSalesAgreementFulfillments<DeSerializersT>,
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
    typeof RetailSalesAgreementFulfillments,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        RetailSalesAgreementFulfillments,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      RetailSalesAgreementFulfillments<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SALES_AGREEMENT_ID: OrderableEdmTypeField<
      RetailSalesAgreementFulfillments<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LINE_NUMBER: OrderableEdmTypeField<
      RetailSalesAgreementFulfillments<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    COMMITMENT_TYPE: EnumField<
      RetailSalesAgreementFulfillments<DeSerializers>,
      DeSerializersT,
      CommitmentType,
      true,
      true
    >;
    USED_QUANTITY: OrderableEdmTypeField<
      RetailSalesAgreementFulfillments<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    USED_AMOUNT: OrderableEdmTypeField<
      RetailSalesAgreementFulfillments<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ALL_FIELDS: AllFields<RetailSalesAgreementFulfillments<DeSerializers>>;
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
         * Static representation of the {@link salesAgreementId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_AGREEMENT_ID: fieldBuilder.buildEdmTypeField(
          'SalesAgreementId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link lineNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LINE_NUMBER: fieldBuilder.buildEdmTypeField(
          'LineNumber',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link commitmentType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COMMITMENT_TYPE: fieldBuilder.buildEnumField(
          'CommitmentType',
          CommitmentType,
          true
        ),
        /**
         * Static representation of the {@link usedQuantity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        USED_QUANTITY: fieldBuilder.buildEdmTypeField(
          'UsedQuantity',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link usedAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        USED_AMOUNT: fieldBuilder.buildEdmTypeField(
          'UsedAmount',
          'Edm.Decimal',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', RetailSalesAgreementFulfillments)
      };
    }

    return this._schema;
  }
}
