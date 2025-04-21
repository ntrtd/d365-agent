/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { TillLayoutConfigurations } from './TillLayoutConfigurations';
import { TillLayoutConfigurationsRequestBuilder } from './TillLayoutConfigurationsRequestBuilder';
import { TillLayoutSizesApi } from './TillLayoutSizesApi';
import { RetailTillLayoutsApi } from './RetailTillLayoutsApi';
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
  EdmTypeField,
  OneToOneLink
} from '@sap-cloud-sdk/odata-v4';
export class TillLayoutConfigurationsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<TillLayoutConfigurations<DeSerializersT>, DeSerializersT>
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
  ): TillLayoutConfigurationsApi<DeSerializersT> {
    return new TillLayoutConfigurationsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link tillLayoutSize} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TILL_LAYOUT_SIZE: OneToOneLink<
      TillLayoutConfigurations<DeSerializersT>,
      DeSerializersT,
      TillLayoutSizesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link retailTillLayout} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RETAIL_TILL_LAYOUT: OneToOneLink<
      TillLayoutConfigurations<DeSerializersT>,
      DeSerializersT,
      RetailTillLayoutsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      TillLayoutSizesApi<DeSerializersT>,
      RetailTillLayoutsApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      TILL_LAYOUT_SIZE: new OneToOneLink('TillLayoutSize', this, linkedApis[0]),
      RETAIL_TILL_LAYOUT: new OneToOneLink(
        'RetailTillLayout',
        this,
        linkedApis[1]
      )
    };
    return this;
  }

  entityConstructor = TillLayoutConfigurations;

  requestBuilder(): TillLayoutConfigurationsRequestBuilder<DeSerializersT> {
    return new TillLayoutConfigurationsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    TillLayoutConfigurations<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      TillLayoutConfigurations<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    TillLayoutConfigurations<DeSerializersT>,
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
    typeof TillLayoutConfigurations,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        TillLayoutConfigurations,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    LAYOUT_ID: OrderableEdmTypeField<
      TillLayoutConfigurations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LAYOUT_SIZE_ID: OrderableEdmTypeField<
      TillLayoutConfigurations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    TOTAL_ID: OrderableEdmTypeField<
      TillLayoutConfigurations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RECEIPT_PAYMENT_LAYOUT: OrderableEdmTypeField<
      TillLayoutConfigurations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RECEIPT_ITEMS_LAYOUT: OrderableEdmTypeField<
      TillLayoutConfigurations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CUSTOMER_LAYOUT: OrderableEdmTypeField<
      TillLayoutConfigurations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LAYOUT_LANDSCAPE: OrderableEdmTypeField<
      TillLayoutConfigurations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RECEIPT_ID: OrderableEdmTypeField<
      TillLayoutConfigurations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TOTALS_LAYOUT: OrderableEdmTypeField<
      TillLayoutConfigurations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CUSTOMER_LAYOUT_ID: OrderableEdmTypeField<
      TillLayoutConfigurations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IMG_CASH_CHANGER_LAYOUT: EdmTypeField<
      TillLayoutConfigurations<DeSerializers>,
      DeSerializersT,
      'Edm.Binary',
      true,
      true
    >;
    LAYOUT_PORTRAIT: OrderableEdmTypeField<
      TillLayoutConfigurations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CASH_CHANGER_LAYOUT: OrderableEdmTypeField<
      TillLayoutConfigurations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link tillLayoutSize} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TILL_LAYOUT_SIZE: OneToOneLink<
      TillLayoutConfigurations<DeSerializersT>,
      DeSerializersT,
      TillLayoutSizesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link retailTillLayout} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RETAIL_TILL_LAYOUT: OneToOneLink<
      TillLayoutConfigurations<DeSerializersT>,
      DeSerializersT,
      RetailTillLayoutsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<TillLayoutConfigurations<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link layoutId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LAYOUT_ID: fieldBuilder.buildEdmTypeField(
          'LayoutId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link layoutSizeId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LAYOUT_SIZE_ID: fieldBuilder.buildEdmTypeField(
          'LayoutSizeId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link totalId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TOTAL_ID: fieldBuilder.buildEdmTypeField('TotalId', 'Edm.String', true),
        /**
         * Static representation of the {@link receiptPaymentLayout} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RECEIPT_PAYMENT_LAYOUT: fieldBuilder.buildEdmTypeField(
          'ReceiptPaymentLayout',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link receiptItemsLayout} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RECEIPT_ITEMS_LAYOUT: fieldBuilder.buildEdmTypeField(
          'ReceiptItemsLayout',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link customerLayout} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUSTOMER_LAYOUT: fieldBuilder.buildEdmTypeField(
          'CustomerLayout',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link layoutLandscape} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LAYOUT_LANDSCAPE: fieldBuilder.buildEdmTypeField(
          'LayoutLandscape',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link receiptId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RECEIPT_ID: fieldBuilder.buildEdmTypeField(
          'ReceiptId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link totalsLayout} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TOTALS_LAYOUT: fieldBuilder.buildEdmTypeField(
          'TotalsLayout',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link customerLayoutId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUSTOMER_LAYOUT_ID: fieldBuilder.buildEdmTypeField(
          'CustomerLayoutId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link imgCashChangerLayout} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IMG_CASH_CHANGER_LAYOUT: fieldBuilder.buildEdmTypeField(
          'IMG_CashChangerLayout',
          'Edm.Binary',
          true
        ),
        /**
         * Static representation of the {@link layoutPortrait} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LAYOUT_PORTRAIT: fieldBuilder.buildEdmTypeField(
          'LayoutPortrait',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link cashChangerLayout} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CASH_CHANGER_LAYOUT: fieldBuilder.buildEdmTypeField(
          'CashChangerLayout',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', TillLayoutConfigurations)
      };
    }

    return this._schema;
  }
}
