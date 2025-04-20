/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RetailAffiliationPriceGroups } from './RetailAffiliationPriceGroups';
import { RetailAffiliationPriceGroupsRequestBuilder } from './RetailAffiliationPriceGroupsRequestBuilder';
import { PriceCustomerGroupsApi } from './PriceCustomerGroupsApi';
import { RetailAffiliationsApi } from './RetailAffiliationsApi';
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
export class RetailAffiliationPriceGroupsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<RetailAffiliationPriceGroups<DeSerializersT>, DeSerializersT>
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
  ): RetailAffiliationPriceGroupsApi<DeSerializersT> {
    return new RetailAffiliationPriceGroupsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link priceCustomerGroup} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRICE_CUSTOMER_GROUP: OneToOneLink<
      RetailAffiliationPriceGroups<DeSerializersT>,
      DeSerializersT,
      PriceCustomerGroupsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link retailAffiliation} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RETAIL_AFFILIATION: OneToOneLink<
      RetailAffiliationPriceGroups<DeSerializersT>,
      DeSerializersT,
      RetailAffiliationsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      PriceCustomerGroupsApi<DeSerializersT>,
      RetailAffiliationsApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      PRICE_CUSTOMER_GROUP: new OneToOneLink(
        'PriceCustomerGroup',
        this,
        linkedApis[0]
      ),
      RETAIL_AFFILIATION: new OneToOneLink(
        'RetailAffiliation',
        this,
        linkedApis[1]
      )
    };
    return this;
  }

  entityConstructor = RetailAffiliationPriceGroups;

  requestBuilder(): RetailAffiliationPriceGroupsRequestBuilder<DeSerializersT> {
    return new RetailAffiliationPriceGroupsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    RetailAffiliationPriceGroups<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      RetailAffiliationPriceGroups<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    RetailAffiliationPriceGroups<DeSerializersT>,
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
    typeof RetailAffiliationPriceGroups,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        RetailAffiliationPriceGroups,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      RetailAffiliationPriceGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    AFFILIATION_NAME: OrderableEdmTypeField<
      RetailAffiliationPriceGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PRICE_CUSTOMER_GROUP_CODE: OrderableEdmTypeField<
      RetailAffiliationPriceGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link priceCustomerGroup} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRICE_CUSTOMER_GROUP: OneToOneLink<
      RetailAffiliationPriceGroups<DeSerializersT>,
      DeSerializersT,
      PriceCustomerGroupsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link retailAffiliation} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RETAIL_AFFILIATION: OneToOneLink<
      RetailAffiliationPriceGroups<DeSerializersT>,
      DeSerializersT,
      RetailAffiliationsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<RetailAffiliationPriceGroups<DeSerializers>>;
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
         * Static representation of the {@link affiliationName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AFFILIATION_NAME: fieldBuilder.buildEdmTypeField(
          'AffiliationName',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link priceCustomerGroupCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRICE_CUSTOMER_GROUP_CODE: fieldBuilder.buildEdmTypeField(
          'PriceCustomerGroupCode',
          'Edm.String',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', RetailAffiliationPriceGroups)
      };
    }

    return this._schema;
  }
}
