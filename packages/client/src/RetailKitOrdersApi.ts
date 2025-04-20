/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RetailKitOrders } from './RetailKitOrders';
import { RetailKitOrdersRequestBuilder } from './RetailKitOrdersRequestBuilder';
import { RetailKitsApi } from './RetailKitsApi';
import { RetailKitOrderJournalsApi } from './RetailKitOrderJournalsApi';
import { NoYes } from './NoYes';
import { RetailKitOrderType } from './RetailKitOrderType';
import { RetailKitOrderSource } from './RetailKitOrderSource';
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
  EnumField,
  OneToOneLink,
  OneToManyLink
} from '@sap-cloud-sdk/odata-v4';
export class RetailKitOrdersApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<RetailKitOrders<DeSerializersT>, DeSerializersT>
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
  ): RetailKitOrdersApi<DeSerializersT> {
    return new RetailKitOrdersApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link retailKit} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RETAIL_KIT: OneToOneLink<
      RetailKitOrders<DeSerializersT>,
      DeSerializersT,
      RetailKitsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link retailKitOrderJournal} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RETAIL_KIT_ORDER_JOURNAL: OneToManyLink<
      RetailKitOrders<DeSerializersT>,
      DeSerializersT,
      RetailKitOrderJournalsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      RetailKitsApi<DeSerializersT>,
      RetailKitOrderJournalsApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      RETAIL_KIT: new OneToOneLink('RetailKit', this, linkedApis[0]),
      RETAIL_KIT_ORDER_JOURNAL: new OneToManyLink(
        'RetailKitOrderJournal',
        this,
        linkedApis[1]
      )
    };
    return this;
  }

  entityConstructor = RetailKitOrders;

  requestBuilder(): RetailKitOrdersRequestBuilder<DeSerializersT> {
    return new RetailKitOrdersRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    RetailKitOrders<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<RetailKitOrders<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<RetailKitOrders<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof RetailKitOrders, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        RetailKitOrders,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    NAME: OrderableEdmTypeField<
      RetailKitOrders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    WAREHOUSE: OrderableEdmTypeField<
      RetailKitOrders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COMMENTS: OrderableEdmTypeField<
      RetailKitOrders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_ASSEMBLY: EnumField<
      RetailKitOrders<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    LEGAL_ENTITY_ID: OrderableEdmTypeField<
      RetailKitOrders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ORDER_TYPE: EnumField<
      RetailKitOrders<DeSerializers>,
      DeSerializersT,
      RetailKitOrderType,
      true,
      true
    >;
    ORDER_SOURCE: EnumField<
      RetailKitOrders<DeSerializers>,
      DeSerializersT,
      RetailKitOrderSource,
      true,
      true
    >;
    KIT_PRODUCT_NUMBER: OrderableEdmTypeField<
      RetailKitOrders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    KIT: OrderableEdmTypeField<
      RetailKitOrders<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    QUANTITY: OrderableEdmTypeField<
      RetailKitOrders<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link retailKit} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RETAIL_KIT: OneToOneLink<
      RetailKitOrders<DeSerializersT>,
      DeSerializersT,
      RetailKitsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link retailKitOrderJournal} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RETAIL_KIT_ORDER_JOURNAL: OneToManyLink<
      RetailKitOrders<DeSerializersT>,
      DeSerializersT,
      RetailKitOrderJournalsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<RetailKitOrders<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link name} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NAME: fieldBuilder.buildEdmTypeField('Name', 'Edm.String', false),
        /**
         * Static representation of the {@link warehouse} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WAREHOUSE: fieldBuilder.buildEdmTypeField(
          'Warehouse',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link comments} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COMMENTS: fieldBuilder.buildEdmTypeField(
          'Comments',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link isAssembly} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_ASSEMBLY: fieldBuilder.buildEnumField('IsAssembly', NoYes, true),
        /**
         * Static representation of the {@link legalEntityId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LEGAL_ENTITY_ID: fieldBuilder.buildEdmTypeField(
          'LegalEntityId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link orderType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ORDER_TYPE: fieldBuilder.buildEnumField(
          'OrderType',
          RetailKitOrderType,
          true
        ),
        /**
         * Static representation of the {@link orderSource} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ORDER_SOURCE: fieldBuilder.buildEnumField(
          'OrderSource',
          RetailKitOrderSource,
          true
        ),
        /**
         * Static representation of the {@link kitProductNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        KIT_PRODUCT_NUMBER: fieldBuilder.buildEdmTypeField(
          'KitProductNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link kit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        KIT: fieldBuilder.buildEdmTypeField('Kit', 'Edm.Int64', false),
        /**
         * Static representation of the {@link quantity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        QUANTITY: fieldBuilder.buildEdmTypeField(
          'Quantity',
          'Edm.Decimal',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', RetailKitOrders)
      };
    }

    return this._schema;
  }
}
