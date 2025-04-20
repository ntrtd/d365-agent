/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { PurchaseAgreementLineFulfillment } from './PurchaseAgreementLineFulfillment';
import { PurchaseAgreementLineFulfillmentRequestBuilder } from './PurchaseAgreementLineFulfillmentRequestBuilder';
import { PurchaseAgreementLinesApi } from './PurchaseAgreementLinesApi';
import { PurchaseAgreementLinesV2Api } from './PurchaseAgreementLinesV2Api';
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
export class PurchaseAgreementLineFulfillmentApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<PurchaseAgreementLineFulfillment<DeSerializersT>, DeSerializersT>
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
  ): PurchaseAgreementLineFulfillmentApi<DeSerializersT> {
    return new PurchaseAgreementLineFulfillmentApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link purchaseAgreementLine} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PURCHASE_AGREEMENT_LINE: OneToOneLink<
      PurchaseAgreementLineFulfillment<DeSerializersT>,
      DeSerializersT,
      PurchaseAgreementLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link purchPurchaseAgreementLineV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PURCH_PURCHASE_AGREEMENT_LINE_V_2: OneToOneLink<
      PurchaseAgreementLineFulfillment<DeSerializersT>,
      DeSerializersT,
      PurchaseAgreementLinesV2Api<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      PurchaseAgreementLinesApi<DeSerializersT>,
      PurchaseAgreementLinesV2Api<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      PURCHASE_AGREEMENT_LINE: new OneToOneLink(
        'PurchaseAgreementLine',
        this,
        linkedApis[0]
      ),
      PURCH_PURCHASE_AGREEMENT_LINE_V_2: new OneToOneLink(
        'PurchPurchaseAgreementLineV2',
        this,
        linkedApis[1]
      )
    };
    return this;
  }

  entityConstructor = PurchaseAgreementLineFulfillment;

  requestBuilder(): PurchaseAgreementLineFulfillmentRequestBuilder<DeSerializersT> {
    return new PurchaseAgreementLineFulfillmentRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    PurchaseAgreementLineFulfillment<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      PurchaseAgreementLineFulfillment<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    PurchaseAgreementLineFulfillment<DeSerializersT>,
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
    typeof PurchaseAgreementLineFulfillment,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        PurchaseAgreementLineFulfillment,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      PurchaseAgreementLineFulfillment<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PURCHASE_AGREEMENT_ID: OrderableEdmTypeField<
      PurchaseAgreementLineFulfillment<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LINE_NUMBER: OrderableEdmTypeField<
      PurchaseAgreementLineFulfillment<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    REMAINING_AMOUNT: OrderableEdmTypeField<
      PurchaseAgreementLineFulfillment<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    RELEASED_CATCH_WEIGHT_QUANTITY: OrderableEdmTypeField<
      PurchaseAgreementLineFulfillment<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    INVOICED_AMOUNT: OrderableEdmTypeField<
      PurchaseAgreementLineFulfillment<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    COMMITTED_QUANTITY: OrderableEdmTypeField<
      PurchaseAgreementLineFulfillment<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    RECEIVED_QUANTITY: OrderableEdmTypeField<
      PurchaseAgreementLineFulfillment<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    REMAINING_QUANTITY: OrderableEdmTypeField<
      PurchaseAgreementLineFulfillment<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    INVOICED_CATCH_WEIGHT_QUANTITY: OrderableEdmTypeField<
      PurchaseAgreementLineFulfillment<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    RECEIVED_AMOUNT: OrderableEdmTypeField<
      PurchaseAgreementLineFulfillment<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    REMAINING_CATCH_WEIGHT_QUANTITY: OrderableEdmTypeField<
      PurchaseAgreementLineFulfillment<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    RELEASED_QUANTITY: OrderableEdmTypeField<
      PurchaseAgreementLineFulfillment<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    RECEIVED_CATCH_WEIGHT_QUANTITY: OrderableEdmTypeField<
      PurchaseAgreementLineFulfillment<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PURCHASE_AGREEMENT_LEGAL_ENTITY_ID: OrderableEdmTypeField<
      PurchaseAgreementLineFulfillment<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RELEASED_AMOUNT: OrderableEdmTypeField<
      PurchaseAgreementLineFulfillment<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    UNIT_SYMBOL: OrderableEdmTypeField<
      PurchaseAgreementLineFulfillment<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COMMITTED_CATCH_WEIGHT_QUANTITY: OrderableEdmTypeField<
      PurchaseAgreementLineFulfillment<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    INVOICED_QUANTITY: OrderableEdmTypeField<
      PurchaseAgreementLineFulfillment<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    COMMITTED_AMOUNT: OrderableEdmTypeField<
      PurchaseAgreementLineFulfillment<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link purchaseAgreementLine} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PURCHASE_AGREEMENT_LINE: OneToOneLink<
      PurchaseAgreementLineFulfillment<DeSerializersT>,
      DeSerializersT,
      PurchaseAgreementLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link purchPurchaseAgreementLineV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PURCH_PURCHASE_AGREEMENT_LINE_V_2: OneToOneLink<
      PurchaseAgreementLineFulfillment<DeSerializersT>,
      DeSerializersT,
      PurchaseAgreementLinesV2Api<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<PurchaseAgreementLineFulfillment<DeSerializers>>;
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
         * Static representation of the {@link purchaseAgreementId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PURCHASE_AGREEMENT_ID: fieldBuilder.buildEdmTypeField(
          'PurchaseAgreementId',
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
         * Static representation of the {@link receivedQuantity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RECEIVED_QUANTITY: fieldBuilder.buildEdmTypeField(
          'ReceivedQuantity',
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
         * Static representation of the {@link receivedAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RECEIVED_AMOUNT: fieldBuilder.buildEdmTypeField(
          'ReceivedAmount',
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
         * Static representation of the {@link receivedCatchWeightQuantity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RECEIVED_CATCH_WEIGHT_QUANTITY: fieldBuilder.buildEdmTypeField(
          'ReceivedCatchWeightQuantity',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link purchaseAgreementLegalEntityId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PURCHASE_AGREEMENT_LEGAL_ENTITY_ID: fieldBuilder.buildEdmTypeField(
          'PurchaseAgreementLegalEntityId',
          'Edm.String',
          true
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
        ALL_FIELDS: new AllFields('*', PurchaseAgreementLineFulfillment)
      };
    }

    return this._schema;
  }
}
