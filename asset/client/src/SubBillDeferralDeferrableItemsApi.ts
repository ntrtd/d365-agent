/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { SubBillDeferralDeferrableItems } from './SubBillDeferralDeferrableItems';
import { SubBillDeferralDeferrableItemsRequestBuilder } from './SubBillDeferralDeferrableItemsRequestBuilder';
import { SubBillDeferralTransactionType } from './SubBillDeferralTransactionType';
import { InventPostingItemCode } from './InventPostingItemCode';
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
export class SubBillDeferralDeferrableItemsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<SubBillDeferralDeferrableItems<DeSerializersT>, DeSerializersT>
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
  ): SubBillDeferralDeferrableItemsApi<DeSerializersT> {
    return new SubBillDeferralDeferrableItemsApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = SubBillDeferralDeferrableItems;

  requestBuilder(): SubBillDeferralDeferrableItemsRequestBuilder<DeSerializersT> {
    return new SubBillDeferralDeferrableItemsRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    SubBillDeferralDeferrableItems<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      SubBillDeferralDeferrableItems<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    SubBillDeferralDeferrableItems<DeSerializersT>,
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
    typeof SubBillDeferralDeferrableItems,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        SubBillDeferralDeferrableItems,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      SubBillDeferralDeferrableItems<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    TRANSACTION_TYPE: EnumField<
      SubBillDeferralDeferrableItems<DeSerializers>,
      DeSerializersT,
      SubBillDeferralTransactionType,
      true,
      true
    >;
    ITEM_RELATION: OrderableEdmTypeField<
      SubBillDeferralDeferrableItems<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ITEM_CODE: EnumField<
      SubBillDeferralDeferrableItems<DeSerializers>,
      DeSerializersT,
      InventPostingItemCode,
      true,
      true
    >;
    CATEGORY_RELATION: OrderableEdmTypeField<
      SubBillDeferralDeferrableItems<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ALL_FIELDS: AllFields<SubBillDeferralDeferrableItems<DeSerializers>>;
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
         * Static representation of the {@link transactionType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSACTION_TYPE: fieldBuilder.buildEnumField(
          'TransactionType',
          SubBillDeferralTransactionType,
          true
        ),
        /**
         * Static representation of the {@link itemRelation} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ITEM_RELATION: fieldBuilder.buildEdmTypeField(
          'ItemRelation',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link itemCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ITEM_CODE: fieldBuilder.buildEnumField(
          'ItemCode',
          InventPostingItemCode,
          true
        ),
        /**
         * Static representation of the {@link categoryRelation} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CATEGORY_RELATION: fieldBuilder.buildEdmTypeField(
          'CategoryRelation',
          'Edm.String',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', SubBillDeferralDeferrableItems)
      };
    }

    return this._schema;
  }
}
