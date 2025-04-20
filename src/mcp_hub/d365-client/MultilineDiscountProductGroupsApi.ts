/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { MultilineDiscountProductGroups } from './MultilineDiscountProductGroups';
import { MultilineDiscountProductGroupsRequestBuilder } from './MultilineDiscountProductGroupsRequestBuilder';
import { OpenSalesMultiLineDiscountJournalLinesApi } from './OpenSalesMultiLineDiscountJournalLinesApi';
import { OpenPurchaseMultiLineDiscountJournalLinesApi } from './OpenPurchaseMultiLineDiscountJournalLinesApi';
import { ReleasedProductsV2Api } from './ReleasedProductsV2Api';
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
  OneToManyLink
} from '@sap-cloud-sdk/odata-v4';
export class MultilineDiscountProductGroupsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<MultilineDiscountProductGroups<DeSerializersT>, DeSerializersT>
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
  ): MultilineDiscountProductGroupsApi<DeSerializersT> {
    return new MultilineDiscountProductGroupsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link openSalesMultiLineDiscountJournalLine} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OPEN_SALES_MULTI_LINE_DISCOUNT_JOURNAL_LINE: OneToManyLink<
      MultilineDiscountProductGroups<DeSerializersT>,
      DeSerializersT,
      OpenSalesMultiLineDiscountJournalLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link openPurchaseMultiLineDiscountJournalLine} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OPEN_PURCHASE_MULTI_LINE_DISCOUNT_JOURNAL_LINE: OneToManyLink<
      MultilineDiscountProductGroups<DeSerializersT>,
      DeSerializersT,
      OpenPurchaseMultiLineDiscountJournalLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link releasedProductsV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RELEASED_PRODUCTS_V_2: OneToManyLink<
      MultilineDiscountProductGroups<DeSerializersT>,
      DeSerializersT,
      ReleasedProductsV2Api<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      OpenSalesMultiLineDiscountJournalLinesApi<DeSerializersT>,
      OpenPurchaseMultiLineDiscountJournalLinesApi<DeSerializersT>,
      ReleasedProductsV2Api<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      OPEN_SALES_MULTI_LINE_DISCOUNT_JOURNAL_LINE: new OneToManyLink(
        'OpenSalesMultiLineDiscountJournalLine',
        this,
        linkedApis[0]
      ),
      OPEN_PURCHASE_MULTI_LINE_DISCOUNT_JOURNAL_LINE: new OneToManyLink(
        'OpenPurchaseMultiLineDiscountJournalLine',
        this,
        linkedApis[1]
      ),
      RELEASED_PRODUCTS_V_2: new OneToManyLink(
        'ReleasedProductsV2',
        this,
        linkedApis[2]
      )
    };
    return this;
  }

  entityConstructor = MultilineDiscountProductGroups;

  requestBuilder(): MultilineDiscountProductGroupsRequestBuilder<DeSerializersT> {
    return new MultilineDiscountProductGroupsRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    MultilineDiscountProductGroups<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      MultilineDiscountProductGroups<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    MultilineDiscountProductGroups<DeSerializersT>,
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
    typeof MultilineDiscountProductGroups,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        MultilineDiscountProductGroups,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      MultilineDiscountProductGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    GROUP_CODE: OrderableEdmTypeField<
      MultilineDiscountProductGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    GROUP_NAME: OrderableEdmTypeField<
      MultilineDiscountProductGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link openSalesMultiLineDiscountJournalLine} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OPEN_SALES_MULTI_LINE_DISCOUNT_JOURNAL_LINE: OneToManyLink<
      MultilineDiscountProductGroups<DeSerializersT>,
      DeSerializersT,
      OpenSalesMultiLineDiscountJournalLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link openPurchaseMultiLineDiscountJournalLine} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OPEN_PURCHASE_MULTI_LINE_DISCOUNT_JOURNAL_LINE: OneToManyLink<
      MultilineDiscountProductGroups<DeSerializersT>,
      DeSerializersT,
      OpenPurchaseMultiLineDiscountJournalLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link releasedProductsV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RELEASED_PRODUCTS_V_2: OneToManyLink<
      MultilineDiscountProductGroups<DeSerializersT>,
      DeSerializersT,
      ReleasedProductsV2Api<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<MultilineDiscountProductGroups<DeSerializers>>;
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
         * Static representation of the {@link groupCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GROUP_CODE: fieldBuilder.buildEdmTypeField(
          'GroupCode',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link groupName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GROUP_NAME: fieldBuilder.buildEdmTypeField(
          'GroupName',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', MultilineDiscountProductGroups)
      };
    }

    return this._schema;
  }
}
