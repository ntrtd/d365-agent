/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { PriceCustomerGroups } from './PriceCustomerGroups';
import { PriceCustomerGroupsRequestBuilder } from './PriceCustomerGroupsRequestBuilder';
import { OpenSalesPriceJournalLinesApi } from './OpenSalesPriceJournalLinesApi';
import { OpenSalesPriceJournalLinesV2Api } from './OpenSalesPriceJournalLinesV2Api';
import { RetailAffiliationPriceGroupsApi } from './RetailAffiliationPriceGroupsApi';
import { RetailLoyaltyPriceGroupsApi } from './RetailLoyaltyPriceGroupsApi';
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
export class PriceCustomerGroupsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<PriceCustomerGroups<DeSerializersT>, DeSerializersT>
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
  ): PriceCustomerGroupsApi<DeSerializersT> {
    return new PriceCustomerGroupsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link openSalesPriceJournalLine} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OPEN_SALES_PRICE_JOURNAL_LINE: OneToManyLink<
      PriceCustomerGroups<DeSerializersT>,
      DeSerializersT,
      OpenSalesPriceJournalLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link openSalesPriceJournalLineV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OPEN_SALES_PRICE_JOURNAL_LINE_V_2: OneToManyLink<
      PriceCustomerGroups<DeSerializersT>,
      DeSerializersT,
      OpenSalesPriceJournalLinesV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link retailAffiliationPriceGroup} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RETAIL_AFFILIATION_PRICE_GROUP: OneToManyLink<
      PriceCustomerGroups<DeSerializersT>,
      DeSerializersT,
      RetailAffiliationPriceGroupsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link retailLoyaltyPriceGroup} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RETAIL_LOYALTY_PRICE_GROUP: OneToManyLink<
      PriceCustomerGroups<DeSerializersT>,
      DeSerializersT,
      RetailLoyaltyPriceGroupsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      OpenSalesPriceJournalLinesApi<DeSerializersT>,
      OpenSalesPriceJournalLinesV2Api<DeSerializersT>,
      RetailAffiliationPriceGroupsApi<DeSerializersT>,
      RetailLoyaltyPriceGroupsApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      OPEN_SALES_PRICE_JOURNAL_LINE: new OneToManyLink(
        'OpenSalesPriceJournalLine',
        this,
        linkedApis[0]
      ),
      OPEN_SALES_PRICE_JOURNAL_LINE_V_2: new OneToManyLink(
        'OpenSalesPriceJournalLineV2',
        this,
        linkedApis[1]
      ),
      RETAIL_AFFILIATION_PRICE_GROUP: new OneToManyLink(
        'RetailAffiliationPriceGroup',
        this,
        linkedApis[2]
      ),
      RETAIL_LOYALTY_PRICE_GROUP: new OneToManyLink(
        'RetailLoyaltyPriceGroup',
        this,
        linkedApis[3]
      )
    };
    return this;
  }

  entityConstructor = PriceCustomerGroups;

  requestBuilder(): PriceCustomerGroupsRequestBuilder<DeSerializersT> {
    return new PriceCustomerGroupsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    PriceCustomerGroups<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<PriceCustomerGroups<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    PriceCustomerGroups<DeSerializersT>,
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
    typeof PriceCustomerGroups,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        PriceCustomerGroups,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      PriceCustomerGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    GROUP_CODE: OrderableEdmTypeField<
      PriceCustomerGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PRICING_PRIORITY: OrderableEdmTypeField<
      PriceCustomerGroups<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    GROUP_NAME: OrderableEdmTypeField<
      PriceCustomerGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link openSalesPriceJournalLine} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OPEN_SALES_PRICE_JOURNAL_LINE: OneToManyLink<
      PriceCustomerGroups<DeSerializersT>,
      DeSerializersT,
      OpenSalesPriceJournalLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link openSalesPriceJournalLineV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OPEN_SALES_PRICE_JOURNAL_LINE_V_2: OneToManyLink<
      PriceCustomerGroups<DeSerializersT>,
      DeSerializersT,
      OpenSalesPriceJournalLinesV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link retailAffiliationPriceGroup} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RETAIL_AFFILIATION_PRICE_GROUP: OneToManyLink<
      PriceCustomerGroups<DeSerializersT>,
      DeSerializersT,
      RetailAffiliationPriceGroupsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link retailLoyaltyPriceGroup} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RETAIL_LOYALTY_PRICE_GROUP: OneToManyLink<
      PriceCustomerGroups<DeSerializersT>,
      DeSerializersT,
      RetailLoyaltyPriceGroupsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<PriceCustomerGroups<DeSerializers>>;
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
         * Static representation of the {@link pricingPriority} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRICING_PRIORITY: fieldBuilder.buildEdmTypeField(
          'PricingPriority',
          'Edm.Int32',
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
        ALL_FIELDS: new AllFields('*', PriceCustomerGroups)
      };
    }

    return this._schema;
  }
}
