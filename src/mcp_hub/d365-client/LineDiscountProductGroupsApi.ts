/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { LineDiscountProductGroups } from './LineDiscountProductGroups';
import { LineDiscountProductGroupsRequestBuilder } from './LineDiscountProductGroupsRequestBuilder';
import { ReleasedProductsV2Api } from './ReleasedProductsV2Api';
import { OpenSalesLineDiscountJournalLinesApi } from './OpenSalesLineDiscountJournalLinesApi';
import { OpenPurchaseLineDiscountJournalLinesApi } from './OpenPurchaseLineDiscountJournalLinesApi';
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
export class LineDiscountProductGroupsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<LineDiscountProductGroups<DeSerializersT>, DeSerializersT>
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
  ): LineDiscountProductGroupsApi<DeSerializersT> {
    return new LineDiscountProductGroupsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link releasedProductsV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RELEASED_PRODUCTS_V_2: OneToManyLink<
      LineDiscountProductGroups<DeSerializersT>,
      DeSerializersT,
      ReleasedProductsV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link openSalesLineDiscountJournalLine} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OPEN_SALES_LINE_DISCOUNT_JOURNAL_LINE: OneToManyLink<
      LineDiscountProductGroups<DeSerializersT>,
      DeSerializersT,
      OpenSalesLineDiscountJournalLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link openPurchaseLineDiscountJournalLine} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OPEN_PURCHASE_LINE_DISCOUNT_JOURNAL_LINE: OneToManyLink<
      LineDiscountProductGroups<DeSerializersT>,
      DeSerializersT,
      OpenPurchaseLineDiscountJournalLinesApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      ReleasedProductsV2Api<DeSerializersT>,
      OpenSalesLineDiscountJournalLinesApi<DeSerializersT>,
      OpenPurchaseLineDiscountJournalLinesApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      RELEASED_PRODUCTS_V_2: new OneToManyLink(
        'ReleasedProductsV2',
        this,
        linkedApis[0]
      ),
      OPEN_SALES_LINE_DISCOUNT_JOURNAL_LINE: new OneToManyLink(
        'OpenSalesLineDiscountJournalLine',
        this,
        linkedApis[1]
      ),
      OPEN_PURCHASE_LINE_DISCOUNT_JOURNAL_LINE: new OneToManyLink(
        'OpenPurchaseLineDiscountJournalLine',
        this,
        linkedApis[2]
      )
    };
    return this;
  }

  entityConstructor = LineDiscountProductGroups;

  requestBuilder(): LineDiscountProductGroupsRequestBuilder<DeSerializersT> {
    return new LineDiscountProductGroupsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    LineDiscountProductGroups<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      LineDiscountProductGroups<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    LineDiscountProductGroups<DeSerializersT>,
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
    typeof LineDiscountProductGroups,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        LineDiscountProductGroups,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      LineDiscountProductGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    GROUP_CODE: OrderableEdmTypeField<
      LineDiscountProductGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    GROUP_NAME: OrderableEdmTypeField<
      LineDiscountProductGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link releasedProductsV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RELEASED_PRODUCTS_V_2: OneToManyLink<
      LineDiscountProductGroups<DeSerializersT>,
      DeSerializersT,
      ReleasedProductsV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link openSalesLineDiscountJournalLine} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OPEN_SALES_LINE_DISCOUNT_JOURNAL_LINE: OneToManyLink<
      LineDiscountProductGroups<DeSerializersT>,
      DeSerializersT,
      OpenSalesLineDiscountJournalLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link openPurchaseLineDiscountJournalLine} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OPEN_PURCHASE_LINE_DISCOUNT_JOURNAL_LINE: OneToManyLink<
      LineDiscountProductGroups<DeSerializersT>,
      DeSerializersT,
      OpenPurchaseLineDiscountJournalLinesApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<LineDiscountProductGroups<DeSerializers>>;
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
        ALL_FIELDS: new AllFields('*', LineDiscountProductGroups)
      };
    }

    return this._schema;
  }
}
