/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { SalesAgreementLineFulfillment } from './SalesAgreementLineFulfillment';
import { SalesAgreementLineFulfillmentRequestBuilder } from './SalesAgreementLineFulfillmentRequestBuilder';
import { SalesAgreementLinesApi } from './SalesAgreementLinesApi';
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
export class SalesAgreementLineFulfillmentApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<SalesAgreementLineFulfillment<DeSerializersT>, DeSerializersT>
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
  ): SalesAgreementLineFulfillmentApi<DeSerializersT> {
    return new SalesAgreementLineFulfillmentApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link salesAgreementLine} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SALES_AGREEMENT_LINE: OneToOneLink<
      SalesAgreementLineFulfillment<DeSerializersT>,
      DeSerializersT,
      SalesAgreementLinesApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [SalesAgreementLinesApi<DeSerializersT>]
  ): this {
    this.navigationPropertyFields = {
      SALES_AGREEMENT_LINE: new OneToOneLink(
        'SalesAgreementLine',
        this,
        linkedApis[0]
      )
    };
    return this;
  }

  entityConstructor = SalesAgreementLineFulfillment;

  requestBuilder(): SalesAgreementLineFulfillmentRequestBuilder<DeSerializersT> {
    return new SalesAgreementLineFulfillmentRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    SalesAgreementLineFulfillment<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      SalesAgreementLineFulfillment<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    SalesAgreementLineFulfillment<DeSerializersT>,
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
    typeof SalesAgreementLineFulfillment,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        SalesAgreementLineFulfillment,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      SalesAgreementLineFulfillment<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SALES_AGREEMENT_ID: OrderableEdmTypeField<
      SalesAgreementLineFulfillment<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LINE_NUMBER: OrderableEdmTypeField<
      SalesAgreementLineFulfillment<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    REMAINING_AMOUNT: OrderableEdmTypeField<
      SalesAgreementLineFulfillment<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    RELEASED_CATCH_WEIGHT_QUANTITY: OrderableEdmTypeField<
      SalesAgreementLineFulfillment<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    INVOICED_AMOUNT: OrderableEdmTypeField<
      SalesAgreementLineFulfillment<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    COMMITTED_QUANTITY: OrderableEdmTypeField<
      SalesAgreementLineFulfillment<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    DELIVERED_AMOUNT: OrderableEdmTypeField<
      SalesAgreementLineFulfillment<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    REMAINING_QUANTITY: OrderableEdmTypeField<
      SalesAgreementLineFulfillment<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    INVOICED_CATCH_WEIGHT_QUANTITY: OrderableEdmTypeField<
      SalesAgreementLineFulfillment<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    DELIVERED_QUANTITY: OrderableEdmTypeField<
      SalesAgreementLineFulfillment<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    REMAINING_CATCH_WEIGHT_QUANTITY: OrderableEdmTypeField<
      SalesAgreementLineFulfillment<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    RELEASED_QUANTITY: OrderableEdmTypeField<
      SalesAgreementLineFulfillment<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    RELEASED_AMOUNT: OrderableEdmTypeField<
      SalesAgreementLineFulfillment<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    DELIVERED_CATCH_WEIGHT_QUANTITY: OrderableEdmTypeField<
      SalesAgreementLineFulfillment<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    SALES_AGREEMENT_LEGAL_ENTITY_ID: OrderableEdmTypeField<
      SalesAgreementLineFulfillment<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    UNIT_SYMBOL: OrderableEdmTypeField<
      SalesAgreementLineFulfillment<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COMMITTED_CATCH_WEIGHT_QUANTITY: OrderableEdmTypeField<
      SalesAgreementLineFulfillment<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    INVOICED_QUANTITY: OrderableEdmTypeField<
      SalesAgreementLineFulfillment<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    COMMITTED_AMOUNT: OrderableEdmTypeField<
      SalesAgreementLineFulfillment<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link salesAgreementLine} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SALES_AGREEMENT_LINE: OneToOneLink<
      SalesAgreementLineFulfillment<DeSerializersT>,
      DeSerializersT,
      SalesAgreementLinesApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<SalesAgreementLineFulfillment<DeSerializers>>;
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
         * Static representation of the {@link remainingAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REMAINING_AMOUNT: fieldBuilder.buildEdmTypeField(
          'RemainingAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link releasedCatchWeightQuantity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RELEASED_CATCH_WEIGHT_QUANTITY: fieldBuilder.buildEdmTypeField(
          'ReleasedCatchWeightQuantity',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link invoicedAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVOICED_AMOUNT: fieldBuilder.buildEdmTypeField(
          'InvoicedAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link committedQuantity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COMMITTED_QUANTITY: fieldBuilder.buildEdmTypeField(
          'CommittedQuantity',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link deliveredAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELIVERED_AMOUNT: fieldBuilder.buildEdmTypeField(
          'DeliveredAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link remainingQuantity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REMAINING_QUANTITY: fieldBuilder.buildEdmTypeField(
          'RemainingQuantity',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link invoicedCatchWeightQuantity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVOICED_CATCH_WEIGHT_QUANTITY: fieldBuilder.buildEdmTypeField(
          'InvoicedCatchWeightQuantity',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link deliveredQuantity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELIVERED_QUANTITY: fieldBuilder.buildEdmTypeField(
          'DeliveredQuantity',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link remainingCatchWeightQuantity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REMAINING_CATCH_WEIGHT_QUANTITY: fieldBuilder.buildEdmTypeField(
          'RemainingCatchWeightQuantity',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link releasedQuantity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RELEASED_QUANTITY: fieldBuilder.buildEdmTypeField(
          'ReleasedQuantity',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link releasedAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RELEASED_AMOUNT: fieldBuilder.buildEdmTypeField(
          'ReleasedAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link deliveredCatchWeightQuantity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELIVERED_CATCH_WEIGHT_QUANTITY: fieldBuilder.buildEdmTypeField(
          'DeliveredCatchWeightQuantity',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link salesAgreementLegalEntityId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_AGREEMENT_LEGAL_ENTITY_ID: fieldBuilder.buildEdmTypeField(
          'SalesAgreementLegalEntityId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link unitSymbol} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        UNIT_SYMBOL: fieldBuilder.buildEdmTypeField(
          'UnitSymbol',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link committedCatchWeightQuantity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COMMITTED_CATCH_WEIGHT_QUANTITY: fieldBuilder.buildEdmTypeField(
          'CommittedCatchWeightQuantity',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link invoicedQuantity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVOICED_QUANTITY: fieldBuilder.buildEdmTypeField(
          'InvoicedQuantity',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link committedAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COMMITTED_AMOUNT: fieldBuilder.buildEdmTypeField(
          'CommittedAmount',
          'Edm.Decimal',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', SalesAgreementLineFulfillment)
      };
    }

    return this._schema;
  }
}
